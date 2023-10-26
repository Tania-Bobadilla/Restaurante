// import HeroSlider from "./HeroSlider"

import BookingForm from "./BookingForm"
import HeroSlider2 from "./HeroSlider2"

const Home = () => {
  return (
    <main>
    
      <HeroSlider2/>
      <section>
        <p className="about-text text-center mt-5 mb-5 container-md h5 p-2 lead">
         Hariyali fue fundado por Lidia y Amaya Said en 2013 como propuesta de un nuevo estilo de restaurante indio en Santiago: auténtico pero innovador, con un menú que honra y reinventa la tradición. Elegante, cómodo y accesible, Hariyali es el hogar de una suntuosa decoración inspirada en los tonos de las especias características de la india.  
        </p>
      </section>
      <BookingForm/>
      
    </main>
  )
}

export default Home