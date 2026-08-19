import {useState, useEffect} from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Tickets from "../components/Tickets";
import "../styles/home.css";


function Home({allConcerts}) {
  const [headerOpacity, setHeaderOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      const startFade = window.innerHeight * 0.79;
      const endFade = window.innerHeight * 0.81;

      if (scrollTop < startFade){
        setHeaderOpacity(0)
      } else if (scrollTop >= startFade && scrollTop <= startFade){
        const opacityProgress = (scrollTop - startFade)/(endFade - startFade)
        setHeaderOpacity(opacityProgress)
      } else {
        setHeaderOpacity(1)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="Home">
      <Hero />
      <div className="header" style={{ opacity: headerOpacity}}>
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
