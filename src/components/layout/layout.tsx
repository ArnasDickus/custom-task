
import React from 'react'
import HeadSeo from './head-seo/head-seo';
import Footer from './sections/footer/footer'
import Header from './sections/header/header'
import styled from 'styled-components';
import { IHeadSeo } from 'src/constants/global-interfaces';


const Layout = (props: NLayout.IProps) => {
  return (
    <LayoutContainer>
    <HeadSeo {...props.headSeoData} />
    <Header />
    <main className="content">{props.children}</main>
    <Footer />
    </LayoutContainer>
  )
}

export default Layout

export namespace NLayout {
    export interface IProps {
        children: React.ReactNode
        headSeoData: IHeadSeo;
    }
}

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; 

  .content {
     flex-grow: 1;
  }
`;