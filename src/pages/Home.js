import Header from "../components/Header";
import Hero from "../components/Hero";
import Tickets from "../components/Tickets";
import "../styles/home.css";


function Home({allConcerts}) {

  return (
    <div className="Home">
      <Hero />
      <div className="header">
        <Header />
      </div>
      <div className="home-content">
        <section className="stack-section">
          <div className="stack-heading">
            <h2> 2024 - Present </h2>
          </div>
            <Tickets allConcerts={allConcerts}/>
          
        </section>
      </div>
    </div>
  );
}

export default Home;
