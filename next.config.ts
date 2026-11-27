import type { NextConfig } from "next";

// Old per-project URLs. The work now lives on one page, with an anchor per entry.
const movedWork: Record<string, string> = {
  "bazaarvoice-tips": "/work#bazaarvoice",
  "bazaarvoice-questions-and-answers": "/work#bazaarvoice",
  "facebook-stories": "/work#bazaarvoice",
  "google-10th-birthday-germany": "/work#google",
  "google-getting-american-business-online": "/work#google",
  "youtube-world-view": "/work#google",
  certsimple: "/work#certsimple",
  firework: "/work#firework",
  "linux-and-python": "/work#red-hat",
  "online-wednesday": "/work#sandpit-lab",
  waves: "/work#sandpit-lab",
  boomsaas: "/work#boomsaas",
  "doom-the-path": "/work#doom-the-path",
  "python-docx": "/open-source#python-docx",
  "agave-js": "/work",
  uncompromise: "/work#make-us-proud",
  mycognition: "/work#make-us-proud",
  "im-everyone": "/work#i-m-everyone",
  "feature-writer-apc-magazine": "/work#technical-journalism",
};

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      { source: "/blog", destination: "/work", permanent: false },
      { source: "/blog/:slug", destination: "/work", permanent: false },
      { source: "/archive", destination: "/work", permanent: false },
      { source: "/solana-book", destination: "/book", permanent: true },
      ...Object.entries(movedWork).map(([slug, destination]) => ({
        source: `/work/${slug}`,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
