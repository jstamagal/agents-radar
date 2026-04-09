import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createGitHubIssue, ensureLabel } from "../github.ts";

describe("createGitHubIssue", () => {
  const originalDigestRepo = process.env["DIGEST_REPO"];

  beforeEach(() => {
    process.env["DIGEST_REPO"] = "owner/repo";
  });

  afterEach(() => {
    vi.restoreAllMocks();
    if (originalDigestRepo !== undefined) {
      process.env["DIGEST_REPO"] = originalDigestRepo;
    } else {
      delete process.env["DIGEST_REPO"];
    }
  });

  it("returns issue URL on success", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({ ok: true, status: 201 } as Response)
      .mockResolvedValueOnce({
        ok: true,
        status: 201,
        json: async () => ({ html_url: "https://github.com/owner/repo/issues/1" }),
      } as Response);
    vi.stubGlobal("fetch", fetchMock);

    const url = await createGitHubIssue("title", "body", "digest");
    expect(url).toBe("https://github.com/owner/repo/issues/1");
  });

  it("returns empty string when repository issues are disabled", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({
        ok: false,
        status: 410,
        text: async () => '{"message":"Issues has been disabled in this repository."}',
      } as Response)
      .mockResolvedValueOnce({
        ok: false,
        status: 410,
        text: async () => '{"message":"Issues has been disabled in this repository."}',
      } as Response);
    vi.stubGlobal("fetch", fetchMock);

    await expect(createGitHubIssue("title", "body", "digest")).resolves.toBe("");
  });

  it("throws on non-410 issue creation failure", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({ ok: true, status: 201 } as Response)
      .mockResolvedValueOnce({
        ok: false,
        status: 500,
        text: async () => "server error",
      } as Response);
    vi.stubGlobal("fetch", fetchMock);

    await expect(createGitHubIssue("title", "body", "digest")).rejects.toThrow(
      "Failed to create issue: server error",
    );
  });
});

describe("ensureLabel", () => {
  const originalDigestRepo = process.env["DIGEST_REPO"];

  beforeEach(() => {
    process.env["DIGEST_REPO"] = "owner/repo";
  });

  afterEach(() => {
    vi.restoreAllMocks();
    if (originalDigestRepo !== undefined) {
      process.env["DIGEST_REPO"] = originalDigestRepo;
    } else {
      delete process.env["DIGEST_REPO"];
    }
  });

  it("ignores 410 when issues are disabled", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 410,
        text: async () => "issues disabled",
      } as Response),
    );

    await expect(ensureLabel("digest", "0075ca")).resolves.toBeUndefined();
  });
});
