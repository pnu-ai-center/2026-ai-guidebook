import React from 'react';
import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const firstDocLink = siteConfig.customFields?.firstDocLink || '/docs/intro';
  const redirectUrl = useBaseUrl(firstDocLink);
  
  return <Redirect to={redirectUrl} />;
}
