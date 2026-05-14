import React from "react";

import Layout from "@theme/Layout";

import Link from "@docusaurus/Link";

import chapters from "../data/chapters.generated";

export default function Home() {
  return (
    <Layout title="2026 AI 교육 안내서">
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 24px 120px",
        }}
      >
        {/* Hero */}

        <section
          style={{
            marginBottom: "100px",
          }}
        >
          <p
            style={{
              fontSize: "0.95rem",
              fontWeight: "700",
              color: "#2563eb",
              marginBottom: "20px",
            }}
          >
            부산대학교 AI융합교육원
          </p>

          <h1
            style={{
              fontSize: "4.5rem",
              fontWeight: "800",
              lineHeight: "1.15",
              letterSpacing: "-0.03em",
              color: "#111827",
              marginBottom: "32px",
            }}
          >
            2026 AI 교육 안내서
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "2",
              color: "#4b5563",
              maxWidth: "760px",
            }}
          >
            부산대학교 AI융합교육원의 교육 비전과 교육과정, 교수진 및 지원
            절차를 온라인 브로슈어 형태로 제공합니다.
          </p>
        </section>

        {/* Chapter Grid */}

        <section>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "24px",
            }}
          >
            {chapters.map((chapter) => (
              <Link
                key={chapter.id}
                to={chapter.link}
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    background: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "24px",
                    padding: "36px",
                    height: "100%",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "4px",
                      background: "#2563eb",
                      borderRadius: "999px",
                      marginBottom: "24px",
                    }}
                  />

                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      marginBottom: "18px",
                      color: "#111827",
                    }}
                  >
                    {chapter.title}
                  </h2>

                  <p
                    style={{
                      color: "#4b5563",
                      lineHeight: "1.9",
                    }}
                  >
                    {chapter.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
