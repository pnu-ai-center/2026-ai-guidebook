import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import chapters from "../data/chapters.generated";

const THEME_COLORS = {
  blue:   { bg: "#eff6ff", accent: "#2563eb", text: "#1d4ed8" },
  green:  { bg: "#f0fdf4", accent: "#16a34a", text: "#15803d" },
  purple: { bg: "#faf5ff", accent: "#7c3aed", text: "#6d28d9" },
  orange: { bg: "#fff7ed", accent: "#ea580c", text: "#c2410c" },
  gray:   { bg: "#f9fafb", accent: "#6b7280", text: "#4b5563" },
};

export default function Home() {
  return (
    <Layout title="2026 AI 교육 안내서">
      <main className="home-main">
        {/* ── Hero ── */}
        <section className="home-hero">
          <span className="home-hero__badge">부산대학교 AI융합교육원</span>
          <h1 className="home-hero__title">2026 AI 교육 안내서</h1>
          <p className="home-hero__desc">
            부산대학교 AI융합교육원의 교육 비전, 교육과정, 교수진 및 지원 절차를
            <br />온라인 브로슈어 형태로 제공합니다.
          </p>
        </section>

        {/* ── Chapter List ── */}
        <section className="home-chapters">
          <h2 className="home-chapters__heading">목차</h2>
          <div className="home-chapter-list">
            {chapters.map((chapter, i) => {
              const color = THEME_COLORS[chapter.theme] ?? THEME_COLORS.gray;
              return (
                <Link
                  key={chapter.id}
                  to={chapter.link}
                  className="home-chapter-card"
                  style={{
                    "--card-bg": color.bg,
                    "--card-accent": color.accent,
                    "--card-text": color.text,
                  }}
                >
                  <span className="home-chapter-card__num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="home-chapter-card__body">
                    <h3 className="home-chapter-card__title">{chapter.title}</h3>
                    {chapter.description && (
                      <p className="home-chapter-card__desc">{chapter.description}</p>
                    )}
                  </div>
                  <span className="home-chapter-card__arrow">→</span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}
