import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout title="2026 AI 교육 안내서">
      <main
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "80px",
            borderRadius: "32px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            maxWidth: "900px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#2563eb",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            부산대학교 AI융합교육원
          </p>

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "800",
              marginBottom: "24px",
            }}
          >
            2026 AI 교육 안내서
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#4b5563",
              marginBottom: "48px",
            }}
          >
            부산대학교 AI융합교육원의 교육 과정과 비전을 소개하는 온라인
            브로슈어입니다.
          </p>

          <Link className="button button--primary button--lg" to="/docs/intro">
            브로슈어 시작하기
          </Link>
        </div>
      </main>
    </Layout>
  );
}
