import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout title="2026 AI 교육 안내서">
      <main
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h1>2026 AI 교육 안내서</h1>

        <p>부산대학교 AI융합교육원 온라인 브로슈어</p>

        <Link className="button button--primary button--lg" to="/docs/intro">
          브로슈어 시작하기
        </Link>
      </main>
    </Layout>
  );
}
