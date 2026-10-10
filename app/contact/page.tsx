import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Mike MacCana",
  description: "Email, X, Telegram, LinkedIn, and GitHub.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <p className="kicker">Contact</p>
        <h2>Contact</h2>
        <ul className="rows">
          <li>
            <span className="when">Email</span>
            <a href="mailto:mike.maccana@gmail.com">mike.maccana@gmail.com</a>
          </li>
          <li>
            <span className="when">X (best)</span>
            <a href="https://x.com/mikemaccana">@mikemaccana</a>
          </li>
          <li>
            <span className="when">Telegram</span>
            <a href="https://t.me/mikemaccana">@mikemaccana</a>
          </li>
          <li>
            <span className="when">LinkedIn</span>
            <a href="https://www.linkedin.com/in/mikemaccana">linkedin.com/in/mikemaccana</a>
          </li>
          <li>
            <span className="when">GitHub</span>
            <a href="https://github.com/mikemaccana">github.com/mikemaccana</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
