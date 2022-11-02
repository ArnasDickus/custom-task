import PageExamples from "@components/pages/page-examples/page-examples";
import { NextPage } from "next";
import React from "react";
import Layout from "src/components/layout/layout";
import { IHeadSeo } from "src/constants/global-interfaces";

const HomeExamples: NextPage = () => {
  const headSeoData: IHeadSeo = {
    title: "Examples",
    content: "Displaying all example components",
    description: "It's about examples",
  };

  return (
    <Layout headSeoData={headSeoData}>
      <PageExamples />
    </Layout>
  );
};

export default HomeExamples;
