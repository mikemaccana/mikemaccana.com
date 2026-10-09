import type { Metadata } from "next";
import { works } from "./works";
import { WorkList } from "./work-list";

export const metadata: Metadata = {
  title: "Work · Mike MacCana",
  description: "Work history, with dates, logos, and screenshots.",
};

export default function WorkPage() {
  return (
    <main>
      <p className="kicker page-kicker">Work</p>
      <h1 className="page-title">Work history</h1>
      <p>Companies and projects, with the dates, logos, and screenshots.</p>
      <WorkList works={works} />
    </main>
  );
}
