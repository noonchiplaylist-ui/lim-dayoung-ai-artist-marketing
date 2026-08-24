import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the AI Artist Marketing portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /I build worlds/);
  assert.match(html, /AI ARTIST MARKETING/);
  assert.match(html, /10\.6M/);
  assert.match(html, /CONTENT &amp; CHANNEL PRACTICE/);
  assert.match(html, /INSTAGRAM PREVIEW/);
  assert.match(html, /AI로 만든 장면과/);
  assert.match(html, /작업의 기록\./);
  assert.doesNotMatch(html, /Selected work,|from @ai\.flouudy\./);
  assert.doesNotMatch(html, /프로필을 열기 전에도|대표 작업이 보이도록/);
  assert.match(html, /Welcome to my box/);
  assert.match(html, /BRAND SNS · COMMUNITY · EVENT/);
  assert.match(html, /LouiLoui Brand Marketing/);
  assert.match(html, /맘카페/);
  assert.doesNotMatch(html, /Workroom Playlist/);
  assert.match(html, /루이루이/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});
