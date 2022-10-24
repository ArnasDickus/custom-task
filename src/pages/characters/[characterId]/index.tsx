import { NextPage } from 'next'
import React from 'react'
import Layout from 'src/components/layout/layout'
import PageCharacterId from 'src/components/pages/page-characters/page-character-id/page-character-id'
import { IHeadSeo } from 'src/constants/global-interfaces'

const HomeCharacterId: NextPage = () => {
  const headSeoData: IHeadSeo = {
    title: "Character",
    content: "Displaying character",
    description: "It's about character"
  }

  return (
    <Layout  headSeoData={headSeoData}>
      <PageCharacterId />
    </Layout>
  )
}

export default HomeCharacterId