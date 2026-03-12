import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchTrendingData } from "../trending.ts";

describe("fetchTrendingData", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("includes trendshift repositories when Trendshift fetch succeeds", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("github.com/trending")) {
        return {
          ok: true,
          text: async () =>
            `<article class="Box-row">
               <h2><a href="/owner/repo"></a></h2>
               <p class="col-9">desc</p>
               <span itemprop="programmingLanguage">TypeScript</span>
               <a href="/owner/repo/stargazers"><span>1,234</span></a>
               <a href="/owner/repo/forks"><span>56</span></a>
               78 stars today
             </article>`,
        };
      }

      if (url.includes("api.github.com/search/repositories")) {
        return {
          ok: true,
          json: async () => ({
            items: [
              {
                full_name: "org/search-repo",
                description: "search repo",
                language: "Python",
                stargazers_count: 999,
                pushed_at: "2026-03-12T00:00:00Z",
                html_url: "https://github.com/org/search-repo",
              },
            ],
          }),
        };
      }

      if (new URL(url).hostname === "trendshift.io") {
        return {
          ok: true,
          text: async () =>
            `<html><body>
               <a href="https://github.com/trend/one">trend1</a>
               <a href="https://github.com/trend/two">trend2</a>
             </body></html>`,
        };
      }

      return { ok: false, status: 404 };
    });

    vi.stubGlobal("fetch", fetchMock);

    const data = await fetchTrendingData({
      enabled: true,
      url: "https://trendshift.io/repositories",
      maxRepos: 5,
    });

    expect(data.trendingFetchSuccess).toBe(true);
    expect(data.trendshiftFetchSuccess).toBe(true);
    expect(data.trendingRepos[0]?.fullName).toBe("owner/repo");
    expect(data.searchRepos.length).toBeGreaterThan(0);
    expect(data.trendshiftRepos.map((r) => r.fullName)).toEqual(["trend/one", "trend/two"]);
  });
});
