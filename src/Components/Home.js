import React from 'react'
import ApiFetch from './ApiFetch'
import Adver from './Adver'
import Section1 from './Section1'
import Popular from './Popular'
import LastWeek from './LastWeek'
import Popular2 from './Popular2'
import ToTop from './ToTop'
import TopHeadlines from './TopHeadlines'
import Accordions from './Accordion'
import Mostviews from './Mostviews'


function Home() {
  return (
    <>
      <Section1/>
      <TopHeadlines/>
      <Accordions/>
      <ApiFetch title="ar"/>
      <Adver/>
      <Popular/>
      <Mostviews/>
      <ApiFetch title="au"/>
      <Adver/>
      <ApiFetch title="jp"/>
      <LastWeek/>
      <ApiFetch title="id"/>
      <Adver/>
      <ApiFetch title="za"/>
      <Popular2/>
     
      <ToTop/>
    </>
  )
}

export default Home
