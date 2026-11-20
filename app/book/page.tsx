import type { Metadata } from "next";

import { amazonUrl, barnesAndNobleUrl, book, bookUrl, isbn, JsonLd } from "../structured-data";

export const metadata: Metadata = {
  title: "Book · Mike MacCana",
  description:
    "The definitive guide to creating financial products on the world's most active blockchain.",
};

export default function BookPage() {
  return (
    <main>
      <JsonLd data={book} />
      <p className="kicker page-kicker">Book</p>
      <h1 className="page-title">The Solana Book</h1>
      <div className="book">
        <img
          className="cover"
          src="/images/book-cover.png"
          alt="Cover of Building Financial Software on Solana, by Mike MacCana"
          width={716}
          height={915}
        />
        <div>
          <p>
            I am the author of <a href={bookUrl}>Building Financial Software on Solana</a>, also known as the Solana
            Finance Book or just The Solana Book.
          </p>
          <p>
            It includes ten complete programs, among them fundraisers, prediction markets, exchanges, AMMs, lending
            platforms, managed funds, options, and perpetual futures.
          </p>
          <blockquote>
            <p>
              &ldquo;If this book had existed sooner, I would have been very early to Solana. It&apos;s still very early.
              First inning. All financial and AI players need to pick this book up and start building.&rdquo;
            </p>
            <cite>Iqram Magdon-Ismail, cofounder of Venmo</cite>
          </blockquote>
          <p>
            <a className="cta" href={amazonUrl}>
              Buy on Amazon
            </a>
            {" "}
            <a className="cta" href={barnesAndNobleUrl}>
              Buy at Barnes &amp; Noble
            </a>
            {" "}
            <a className="cta" href={bookUrl}>
              Download digital
            </a>
          </p>
          <p className="muted">Paperback ISBN {isbn}</p>
        </div>
      </div>
    </main>
  );
}
