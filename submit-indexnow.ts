import { getAllIndustrySlugs } from "./apps/landing/app/blog/data/generator";
import { blogPosts } from "./apps/landing/app/blog/data/blogPosts";
import { getAllCompetitorSlugs } from "./apps/landing/app/compare/data/competitors";

const BASE_URL = "https://www.bestlocalservicesites.com";
const HOST = "www.bestlocalservicesites.com";
const KEY = "9fdb25bcd49644ff883a86b1afb2824b";
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`;

// ── Build full URL list ──────────────────────────────────────────────────────

const coreRoutes = [
  "",
  "/demos",
  "/seo",
  "/seo-comparison",
  "/listings",
  "/onboarding",
  "/blog",
  "/compare",
];

const demoRoutes = [
  "/roofing",
  "/hvac",
  "/plumbing",
  "/landscaping",
  "/cleaning",
  "/painting",
];

const industrySlugs = getAllIndustrySlugs();
const blogPostSlugs = blogPosts.map((p) => p.slug);
const competitorSlugs = getAllCompetitorSlugs();

const urlList: string[] = [
  ...coreRoutes.map((r) => `${BASE_URL}${r}`),
  ...demoRoutes.map((r) => `${BASE_URL}${r}`),
  ...industrySlugs.map((s) => `${BASE_URL}/blog/${s}`),
  ...blogPostSlugs.map((s) => `${BASE_URL}/blog/post/${s}`),
  ...competitorSlugs.map((s) => `${BASE_URL}/compare/${s}`),
];

console.log(`\n📋 Total URLs to submit: ${urlList.length}`);
console.log(`   Core routes:          ${coreRoutes.length}`);
console.log(`   Demo homepages:       ${demoRoutes.length}`);
console.log(`   Industry/city pages:  ${industrySlugs.length}`);
console.log(`   Blog posts:           ${blogPostSlugs.length}`);
console.log(`   Compare pages:        ${competitorSlugs.length}`);
console.log(`\n🔑 Key: ${KEY}`);
console.log(`🔗 Key file: ${KEY_LOCATION}`);
console.log(`\n⏳ Submitting to IndexNow...\n`);

// ── Submit ───────────────────────────────────────────────────────────────────

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

async function submit() {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  console.log(`HTTP ${res.status} ${res.statusText}`);

  if (res.status === 200) {
    console.log("✅ Success — all URLs submitted to IndexNow.");
    console.log("   Bing, Yandex, and other IndexNow members will crawl shortly.");
  } else if (res.status === 202) {
    console.log("✅ Accepted (202) — URLs queued for processing.");
  } else if (res.status === 400) {
    console.log("❌ Bad request — check payload format.");
  } else if (res.status === 403) {
    console.log("❌ Forbidden — key not found at keyLocation URL.");
    console.log("   Make sure the site is deployed and the key file is live:");
    console.log(`   ${KEY_LOCATION}`);
  } else if (res.status === 422) {
    console.log("❌ Unprocessable — URLs don't match the host, or key is invalid.");
  } else if (res.status === 429) {
    console.log("⚠️  Too Many Requests — wait before resubmitting.");
  } else {
    const body = await res.text().catch(() => "");
    console.log("Response body:", body || "(empty)");
  }
}

submit();
