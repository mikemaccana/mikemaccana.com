const log = console.log.bind(console);

// Note: you\ll need 'deno' for vscode installed to avoid a warning here
// https://stackoverflow.com/questions/65115527/how-can-i-avoid-the-an-import-path-cannot-end-with-ts-extension-error-in-vs-c
import { StatusCodes } from "./status-codes.ts";

import articles from "../../../frontend/data/articles.js";
import works from "../../../frontend/data/works.js";

import ObjectLiteral from "../../../frontend/ts/utils/object-literal.ts";

function getSlugs(array: ObjectLiteral[]): string[] {
  return array.map((item: ObjectLiteral) => {
    return item.slug;
  });
}

const articleSlugs = getSlugs(articles);
const workSlugs = getSlugs(works);

const STATIC_DIR = "/_static";

const DENO_VERSION = Deno.version.deno;

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
const ROUTES = ["/", "/blog", "/works"];
articleSlugs.forEach((slug: string) => ROUTES.push(`/blog/${slug}`));
workSlugs.forEach((slug: string) => ROUTES.push(`/work/${slug}`));

// learn more about HTTP functions here: https://arc.codes/primitives/http
export async function handler(request: ObjectLiteral): Promise<ObjectLiteral> {
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
