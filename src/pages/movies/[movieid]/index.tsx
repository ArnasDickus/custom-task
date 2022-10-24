import { NextPage } from 'next'
import React from 'react'
import Layout from 'src/components/layout/layout'
import PageMovieId from 'src/components/pages/page-movies/page-movie-id/page-movie-id'
import { IHeadSeo } from 'src/constants/global-interfaces'


const HomeMovieId: NextPage = () => {
  const headSeoData: IHeadSeo = {
    title: "Movie",
    content: "Displaying specific movie",
    description: "It's about movie"
  }

  return (
    <Layout headSeoData={headSeoData}>
      <PageMovieId />
    </Layout>
  )
}

export default HomeMovieId