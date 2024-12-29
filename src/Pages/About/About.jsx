import React from 'react'
import "../About/About.css"
import AboutSection1 from './AboutSection1'
import AboutSection2 from './AboutSection2'
import AboutSection3 from './AboutSection3'
import TopFooter from '../../Components/TopFooter/TopFooter'
import ModalSection from '../../Components/VideoSection/ModalSection'
import VideoSection from '../../Components/VideoSection/VideoSection'

const About = () => {
  return (
    <>
    <ModalSection/>
    <section className="banner inner-pages mb-0">
    <div className="container-lg">
        <div className="row">
            <div className="col-12">
                <div className="content-box">
                    <h1 className="py-5 text-center mw-100">About Us</h1>
                </div>
            </div>
        </div>
    </div>
</section>

<AboutSection1/>
<AboutSection2/>
<AboutSection3/>
<VideoSection/>
<TopFooter/>
</>
  )
}

export default About