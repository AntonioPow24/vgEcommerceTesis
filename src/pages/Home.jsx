
import HeaderHome from '../components/public/Home/HeaderHome'
import MarketingCardsContainer from '../components/public/Home/MarketingCardsContainer'
import CitiesToService from '../components/public/Home/CitiesToService'

import OurServices from '../components/public/Home/OurServices'

import ProjectsCarousel from '../components/public/Home/ProjectsCarousel'

import {projectList} from '../data/projectList'

const Home = () => {
  return (
    <section className='bg-appBgBlack pb-[97px]'>
      <HeaderHome />

      <MarketingCardsContainer />

      <CitiesToService />

      <OurServices />

      <ProjectsCarousel projectList={projectList}  />
    </section>
  )
}

export default Home
