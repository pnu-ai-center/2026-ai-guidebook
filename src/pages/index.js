import React from 'react';
import { Redirect } from '@docusaurus/router';
import chapters from "../data/chapters.generated";

export default function Home() {
  // 생성된 챕터(문서) 목록이 있다면 첫 번째 문서로 즉시 이동합니다.
  if (chapters && chapters.length > 0) {
    return <Redirect to={chapters[0].link} />;
  }
  // 기본 폴백
  return <Redirect to="/docs/intro" />;
}
