import {Carousel} from "react-bootstrap";

const HeroSlider2 = () => {

  return (       
        <Carousel interval={null} className="text-center container-md">
              <Carousel.Item>
                  <img src="../../images/res1.jpg"  />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="../../images/food..jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="../../images/res2.webp"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src="../../images/samosas.jpg"/>
              </Carousel.Item>
        </Carousel>
  )
}

export default HeroSlider2