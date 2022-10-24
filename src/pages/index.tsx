import { NextPage } from 'next'
import React from 'react'
import Layout from 'src/components/layout/layout'
import PageLang from 'src/components/pages/page-lang/page-lang'
import { IHeadSeo } from 'src/constants/global-interfaces'


const Home: NextPage = () => {
  const headSeoData: IHeadSeo = {
    title: "Main Page",
    content: "Main Statistics",
    description: "Currently empty"
  }

  return (
    <Layout  headSeoData={headSeoData}>
    <PageLang />
  </Layout>
  )
}

export default Home