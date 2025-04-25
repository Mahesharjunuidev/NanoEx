import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './layouts/header'
import Banner from './components/banner'
import Data from './data/content'
import Cardgrid from './components/cardGrid'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../src/style/theme.scss';
import Contentscroll from './components/contentscroll'
import Investers from './components/investers'
import Tokenaization from './components/tokenaization'
import Keyfeature from './components/keyfeature'
import Assettoken from './components/Assettoken'
import Htworks from './components/htWorks'
import RegComp from './components/regcomp'
import Whychoosenano from './components/whychoosenano'
import LeadershipTeam from './components/leadershipTeam'
import Faq from './components/faq'
import Intercomponent from './components/intercomponent'
import Footer from './layouts/footer'

function App() {

  const bannerData = Data.Banner

  const { maincontentPara, cardGrid } = Data.Herosection;
  const mainContent = { ...maincontentPara, cardGrid }

  const { maincontent, scrollContent, Lhsimg } = Data.Contentscrolling
  const scrolldata = { ...maincontent, scrollContent, Lhsimg }

  const { invesMaincontent, investbox } = Data.Investers;
  const investMain = { ...invesMaincontent, investbox }


  const { TokeIntro, TokeBox } = Data.Tokenization;
  const tokenData = { ...TokeIntro, TokeBox }

  const { keyMaincontent, keyBox } = Data.KeyFeature;
  const keyData = { ...keyMaincontent, keyBox }

  const { assetokenContent } = Data.assetToken;
  const carDetails = { ...assetokenContent }

  const { htworkIntro, htworkBox } = Data.htWorks;
  const htworkDetails = { ...htworkIntro, htworkBox };

  const { Rcintro, lrcdetails, rrcdetails } = Data.RegComp;
  const regcomp = { ...Rcintro, lrcdetails, rrcdetails };

  const { compToken, tokenomics } = Data.components;

  const compData = { compToken, tokenomics }

  const wchData = Data.whychoosenano;

  const leaderShip = Data.Teammember;

  const faqData = Data.faq;
  const {footerLogo,copyrightYear,footerText,footerBottom,navigationMenu}  = Data.Footer;

  const footerData = {footerLogo,copyrightYear,footerText,footerBottom,navigationMenu}

  return (
    <>
      <ResponsiveAppBar />
      {bannerData.map((bannerItem, index) => (
        <Banner key={index} Title={bannerItem.Title}
          Subtitle={bannerItem.subTitle}
          Running={bannerItem.Content}
          Image={bannerItem.img}
        />
      ))}


      <div className='container'>
        <Cardgrid maincontent={mainContent} />

        <Contentscroll scrolldata={scrolldata}
          Lhsimg={Lhsimg}
        />
      </div>
      <Investers investMain={investMain} Lhsimg={Lhsimg} />


      <Tokenaization tokenData={tokenData} />

      <Keyfeature keyData={keyData} />

      <Intercomponent compData={compData} />


      <Assettoken carDetails={carDetails} />

      <Htworks htworkDetails={htworkDetails} />


      <RegComp regcomp={regcomp} />

      <Whychoosenano wchData={wchData} />
      <LeadershipTeam leaderShip={leaderShip} />
      <Faq faqData={faqData} />
      <Footer footerData={footerData}/>

    </>
  )
}

export default App
