import styles from "./page.module.css";

export default function Home() {
  const phrases = [
    {
      hanzi: "你好",
      pinyin: "nǐ hǎo",
      translation: "Hello",
      description: "Use it as a warm greeting when you meet someone.",
    },
    {
      hanzi: "早上好",
      pinyin: "zǎo shàng hǎo",
      translation: "Good morning",
      description: "Start the day with a cheerful salutation.",
    },
    {
      hanzi: "晚上好",
      pinyin: "wǎn shàng hǎo",
      translation: "Good evening",
      description: "A friendly way to acknowledge someone at night.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.tag}>欢迎</span>
          <h1>你好！很高兴见到你</h1>
          <p>
            A short and sweet space to celebrate Mandarin greetings. Whether
            you&apos;re saying hi to a friend or meeting someone new, let{" "}
            <strong>你好</strong> be your opening smile.
          </p>
          <div className={styles.actions}>
            <a
              className={styles.primary}
              href="https://en.wikipedia.org/wiki/Chinese_greetings"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
            <a
              className={styles.secondary}
              href="https://www.vercel.com"
              target="_blank"
              rel="noreferrer"
            >
              Build Something
            </a>
          </div>
        </section>
        <section className={styles.grid}>
          {phrases.map((phrase) => (
            <article key={phrase.hanzi} className={styles.card}>
              <header className={styles.cardHeader}>
                <span className={styles.hanzi}>{phrase.hanzi}</span>
                <span className={styles.pinyin}>{phrase.pinyin}</span>
              </header>
              <p className={styles.translation}>{phrase.translation}</p>
              <p className={styles.description}>{phrase.description}</p>
            </article>
          ))}
        </section>
        <div className={styles.footer}>
          <span>用微笑开场，让世界更近。</span>
          <span className={styles.signature}>Made with Next.js &amp; ♥</span>
        </div>
      </main>
    </div>
  );
}
