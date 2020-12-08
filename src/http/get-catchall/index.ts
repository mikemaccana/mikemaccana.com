const log = console.log.bind(console);

// Weird deno will fail here if '.ts' is removed
// TODO: update deno?
import { StatusCodes } from "./status-codes.ts";

const STATIC_DIR = "/_static";

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

let BLOG_SLUGS = [
  "how-to-automate-scary-things",
  "how-to-work-with-people-outside-your-organisation",
  "speeding-up-ci-by-not-doing-things.markdown",
  "the-fail-safe-pattern",
  "using-vs-understanding-git",
  "use-links-in-your-comments",

  "chrome-verification-markers",
  "nginx-brotli",
  "onion-ev-ssl",
  "break-the-web",
  "deploy-node-on-linux",
  "err-cert-common-name-invalid",
  "haproxy-http2-dynamic-load-balancing-ssl",
  "debugging-and-troubleshooting-javascript-async-await",
  "browser-security-indicators",
  "ev-https-sole-proprietor",
  "flattening-javascript-async-await",
  "javascript-equals-async-await",
  "ecc-https-certificate-support",
  "ev-https-france-japan-malaysia",
  "nginx-http2-load-balancing-config",
  "certsimple-v5-doing-business-as-ev-https",
  "single-multi-domain-https-certificates-are-the-same-thing",
  "your-connection-to-this-site-is-not-private",
  "make-ecc-https-cert",
  "safe-curves-and-openssl",
  "certsimple-version-4",
  "product-development-for-non-us-markets",
  "https-certificate-chains",
  "encryption-everywhere",
  "reddit-math-crypto",
  "unix-things-web-developers-struggle-with",
  "site-seal-ssl",
  "ssl-why-do-i-need-it",
  "ssl-or-tls",
  "domain-validated-ssl-google-com-mg",
  "openssl-shortcuts",
  "obsolete-cipher-suite-and-things-web-developers-should-know-about-ssl",
  "control-the-ssl-cas-your-browser-trusts",
  "domain-validated-ssl-will-be-free",
  "ssl-wireshark-mac-osx",
  "certsimple-version-3",
  "node-js-ssl-labs",
  "localhost-ssl-fix",
  "csp-shenanigans",
  "ev-ssl-outside-the-us",
  "domain-validated-ssl",
  "new-ssl-tools",
  "dv-ssl-in-microsoft-edge",
  "are-ev-ssl-certificates-worth-it",
  "seal-in-search",
  "checking-orders-before-you-pay",
  "sgc-ssl-certificates",
  "chrome-outdated-cryptography",
  "six-weeks-in",
  "recreating-unix-rosetta-stone",
  "measuring-ssl-rsa-keys",
  "junk-free-whois",
  "fortune-500-ssl",
  "openssl-csr-command",
  "node-ssl-config",
  "a-plus-node-js-ssl",
  "wildcard-ev-certificate",
  "do-ev-ssl-certificates-have-better-encryption",
];

const ROUTES = ["/", "/blog", "/works"];
WORK_SLUGS.forEach((slug) => ROUTES.push(`/work/${slug}`));
BLOG_SLUGS.forEach((slug) => ROUTES.push(`/blog/${slug}`));

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
    },
  };
}
