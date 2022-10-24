import React from 'react'
import Head from 'next/head'

import { fontsRobotoLinks } from '../app-head/components/font-links';


const AppHead = () => {
  return (
    <Head>
        {fontsRobotoLinks?.map(font => {
          return (
            <link 
              key={font?.from}
              rel="preload"
              href={font?.from}
              as="font"
              crossOrigin=""
            />
          )
        })}

        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default AppHead