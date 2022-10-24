import { NextPage } from 'next'
import React from 'react'
import Layout from 'src/components/layout/layout'
import PageCharacters from 'src/components/pages/page-characters/page-characters'
import { IHeadSeo } from 'src/constants/global-interfaces'

const HomeCharacters: NextPage = () => {
  const headSeoData: IHeadSeo = {
    title: "Characters",
    content: "Displaying characters",
    description: "It's about characters"
  }

  return (
    <Layout  headSeoData={headSeoData}>
      <PageCharacters />
    </Layout>
  )
}

export default HomeCharacters