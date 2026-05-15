import React from 'react';
import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const firstDocLink = siteConfig.customFields.firstDocLink || '/docs/intro';
  
  return <Redirect to={firstDocLink} />;
}
