import CardGrid from "../component/CardGrid";
import Hero from "../component/Hero"

const Home = ({features}) => {

  return(
    <main>
      <h1>Home</h1>

      <section>
         <Hero/>
      </section>
      <CardGrid features={features}/>

      <section>
        
      </section>
    </main>
  )




}

export default Home;