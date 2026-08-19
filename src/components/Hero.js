import {useEffect, useState} from "react";
import '../styles/hero.css'

function Hero(){
    const [scrollStatus, setScrollStatus] = useState(0);
    const [opacity, setOpacity] =useState(1);

    useEffect(() =>{
        const handleScroll = () =>{
            const maxScroll = window.innerHeight;
            const currentScroll = window.scrollY;
            const progress = Math.min(currentScroll / maxScroll, 1)
            // console.log(progress)
            setScrollStatus(progress)
            if (progress > 0.8){
                // console.log('9')
                setOpacity(0);
            } else {
                setOpacity(1)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <div className="Hero">
            <div 
            className="title"
            style={{ '--scroll': scrollStatus, 'opacity': opacity}}
            >
                Riana's Concert Archive
            </div>
        </div>
    )
}

export default Hero;