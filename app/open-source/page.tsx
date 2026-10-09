import type { Metadata } from "next";
import { WorkList } from "../work/work-list";
import { openSource } from "../work/works";

export const metadata: Metadata = {
  title: "Open source · Mike MacCana",
  description: "Open source projects I have created and contributed to over the last few decades.",
};

export default function OpenSourcePage() {
  return (
    <main>
      <p className="kicker page-kicker">Open source</p>
      <h1 className="page-title">Open source</h1>
      <p>
        I have created and contributed a significant amount of{" "}
        <a href="https://opensource.org/osd">open source</a> projects over the last few decades. These
        are the highlights:
      </p>
      <WorkList works={openSource} />
    </main>
  );
}
