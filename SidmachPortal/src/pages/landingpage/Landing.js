import React from 'react';
import LandingCarousel from '../../components/courasel/landingPage-carousel';
import LandingCard from '../../components/card/landingPageCardComponent';
import ExploreLanding from '../../components/courasel/landingExploreCardComponent';
import ResponsiveDialog from '../../components/popup/landingPopup';

const LandingPage = () => {

 
  return(
    <div>
      <LandingCarousel />
      <ResponsiveDialog />
      <LandingCard />
      <ExploreLanding />
    </div>
  )
}

export default LandingPage;