import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Columns, { Col } from '@site/src/components/Columns';
import Highlight from '@site/src/components/Highlight';
import HeroButton from '@site/src/components/HeroButton';

// 모든 .md / .mdx 파일에서 import 없이 바로 사용 가능
export default {
  ...MDXComponents,
  Columns,
  Col,
  Highlight,
  HeroButton,
};
