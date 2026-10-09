import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Mike MacCana",
  description: "I am most active on X, and less active on Telegram.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <p className="kicker">06 Contact</p>
        <h2>Contact</h2>
        <p>
          I am most active on <a href="https://x.com/mikemaccana">X</a>, and less active on{" "}
          <a href="https://t.me/mikemaccana">Telegram</a>.
        </p>
        <p className="links">
          <a href="mailto:mike.maccana@gmail.com">mike.maccana@gmail.com</a>
          <a href="https://x.com/mikemaccana">@mikemaccana</a>
          <a href="https://t.me/mikemaccana">Telegram</a>
          <a href="https://github.com/mikemaccana">github.com/mikemaccana</a>
        </p>
      </section>
    </main>
  );
}
