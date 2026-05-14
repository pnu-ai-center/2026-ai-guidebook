import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const chapters = [
  {
    title: "인사말",
    description: "부산대학교 AI융합교육원의 비전과 교육 목표를 소개합니다.",
    link: "/docs/intro",
  },

  {
    title: "교육과정",
    description: "AI 교육과정과 프로젝트 중심 학습 구조를 안내합니다.",
    link: "/docs/curriculum",
  },

  {
    title: "교수진",
    description: "교육과 연구를 담당하는 교수진과 협력 체계를 소개합니다.",
    link: "/docs/professor",
  },

  {
    title: "지원안내",
    description: "교육 신청 절차와 지원 방법을 안내합니다.",
    link: "/docs/apply",
  },
];

export default function Home() {
  return (
    <Layout title="2026 AI 교육 안내서">
      <main
        style={{
          padding: "80px 20px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Hero */}

        <section
          style={{
            background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
            borderRadius: "40px",
            padding: "100px 70px",
            color: "white",
            marginBottom: "80px",
          }}
        >
          <p
            style={{
              fontWeight: "700",
              marginBottom: "20px",
              opacity: 0.9,
            }}
          >
            부산대학교 AI융합교육원
          </p>

          <h1
            style={{
              fontSize: "4.5rem",
              fontWeight: "800",
              lineHeight: "1.2",
              marginBottom: "32px",
            }}
          >
            2026 AI 교육 안내서
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "2",
              maxWidth: "760px",
              opacity: 0.92,
            }}
          >
            부산대학교 AI융합교육원의 교육 비전과 커리큘럼, 교수진 및 지원
            절차를 온라인 브로슈어 형태로 제공합니다.
          </p>
        </section>

        {/* Chapter Cards */}

        <section>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "800",
              marginBottom: "32px",
              color: "#111827",
            }}
          >
            브로슈어 목차
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {chapters.map((chapter) => (
              <Link
                key={chapter.title}
                to={chapter.link}
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "28px",
                    padding: "36px",
                    height: "100%",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      marginBottom: "20px",
                      color: "#111827",
                    }}
                  >
                    {chapter.title}
                  </h3>

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
