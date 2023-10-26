import {Carousel} from "react-bootstrap";

const HeroSlider2 = () => {

  return (       
        <Carousel interval={null} className="text-center container-md">
              <Carousel.Item>
                  <img src="../../public/assets/res1.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="../../public/assets/food..jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="../../public/assets/res2.webp"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src="../../public/assets/samosas.jpg"/>
              </Carousel.Item>
        </Carousel>
  )
}

export default HeroSlider2