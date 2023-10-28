import {Carousel} from "react-bootstrap";

const HeroSlider2 = () => {

  return (       
        <Carousel interval={null} className="text-center container-md">
              <Carousel.Item>
                  <img src="../../assets/res1.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="../../assets/food..jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="../../assets/res2.webp"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src="../../assets/samosas.jpg"/>
              </Carousel.Item>
        </Carousel>
  )
}

export default HeroSlider2