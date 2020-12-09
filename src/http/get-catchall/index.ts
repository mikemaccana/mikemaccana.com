const log = console.log.bind(console);

// Weird deno will fail here if '.ts' is removed
// TODO: update deno?
import { StatusCodes } from "./status-codes.ts";

import articles from "../../../frontend/data/articles.js";

const articleSlugs = articles.map((article: ObjectLiteral) => article.slug);

const STATIC_DIR = "/_static";

const DENO_VERSION = Deno.version.deno;

export interface ObjectLiteral {
  [key: string]: any;
}

function layout(title: string, bodyContents: string) {
  return `<!DOCTYPE html>
    <html>

    <head>
      <meta charset='utf8'>
      <title>Mike MacCana | ${title}</title>
      <link rel='stylesheet' href='${STATIC_DIR}/css/bundle.css'>
      <link rel="icon" href="${STATIC_DIR}/images/m.svg" sizes="any" type="image/svg+xml">
      <link rel="manifest" href="${STATIC_DIR}/json/manifest.json">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    </head>

    <body class="loading">
      ${bodyContents}
      <script src='${STATIC_DIR}/js/bundle.js'></script>
    </body>
    </html>`;
}

const WORK_SLUGS = [
  "boomsaas",
  "certsimple",
  "mycognition",
  "waves",
  "online-wednesday",
  "firework",
  "uncompromise",
  "bazaarvoice-tips",
  "facebook-ratings-and-reviews",
  "facebook-stories",
  "social-deployer",
  "bazaarvoice-questions-and-answers",
  "pamplemousse-js",
  "ginjs",
  "google-android-4-launch",
  "agave-js",
  "youtube-world-view",
  "google-getting-american-business-online",
  "google-10th-birthday-germany",
  "im-everyone",
  "python-docx",
  "linux-and-python",
  "feature-writer-apc-magazine",
  "doom-the-path",
];

const ROUTES = ["/", "/blog", "/works"];
log(`Adding ${articleSlugs.length} slugs`);
articleSlugs.forEach((slug: string) => ROUTES.push(`/blog/${slug}`));

// learn more about HTTP functions here: https://arc.codes/primitives/http
export async function handler(request: ObjectLiteral) {
  if (!ROUTES.includes(request.rawPath)) {
    log(`Request to non-existent route ${request.rawPath}`);
    return {
      isBase64Encoded: false,
      statusCode: StatusCodes.NOT_FOUND,
      headers: {
        "Content-Type": "text/html; charset=utf8",
      },
      body: layout(`Not found`, `<h1>Not found</h1>`),
    };
  }

  return {
    isBase64Encoded: false,
    statusCode: StatusCodes.OK,
    body: layout(`work`, `<div class="svelte-goes-here"></div>`),
    headers: {
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "Content-Type": "text/html; charset=utf8",
      "x-powered-by": DENO_VERSION,
    },
  };
}
