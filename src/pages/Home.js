import React from 'react'
import HomeContent from '../component/HomeContent';
import Footer from '../layout/Footer';
import Header from '../layout/Header';



export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <HomeContent />
        <Footer/>

      </div>
    </div>
  )
}
