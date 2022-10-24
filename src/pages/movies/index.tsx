import { NextPage } from 'next'
import React from 'react'
import Layout from 'src/components/layout/layout'
import PageMovies from 'src/components/pages/page-movies/page-movies'
import { IHeadSeo } from 'src/constants/global-interfaces'


const HomeMovies: NextPage = () => {
  const headSeoData: IHeadSeo = {
    title: "Movies",
    content: "Displaying movies",
    description: "It's about movies"
  }

  return (
    <Layout  headSeoData={headSeoData}>
      <PageMovies />
    </Layout>
  )
}

export default HomeMovies