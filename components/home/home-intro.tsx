import { aboutParagraphs } from "@/data/about";

export default function HomeIntro() {
  return (
    <section className="">
      {aboutParagraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}
