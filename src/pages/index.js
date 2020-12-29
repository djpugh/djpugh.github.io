import React from 'react';
import { Layout } from 'components/common';
import { Intro, Skills, Projects } from 'components/landing';

export default () => (
  <Layout>
    <Intro />
    <Projects />
    <Skills />
  </Layout>
);
