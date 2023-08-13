import logoDreamcode from "../assets/img/companies/dreamcode.png";
import logoAutonoma from "../assets/img/companies/autonoma.png";
import logoInem from "../assets/img/companies/misak.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Companies = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Companies</h2>
                        {<p>I am proud to have collaborated with some amazing companies and institutions:
                        </p>}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={logoDreamcode} alt="Image" />
                                {<h5>Dreamcode</h5>}
                            </div>
                            <div className="item">
                                <img src={logoAutonoma} alt="Image" />
                                {<h5>Uniautónoma del Cauca</h5>}
                            </div>
                            {<div className="item">
                                <img src={logoInem} alt="Image" />
                                {<h5>Misak</h5>}
                            </div>}
                           
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
