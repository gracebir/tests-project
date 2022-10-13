import React, { useEffect } from 'react';

function Slides({slides}) {
    const [slide, setSlide] = React.useState(slides[0]);
    const [index, setIndex] = React.useState(0)
    const restartSlide = () =>{
        setIndex(0)
    }

    const nextSlide = () =>{
        setIndex(parseInt(slides.findIndex(obj => obj.title === `${slide.title}`)) + 1)
        
        if(index < slides.length - 1){
            setSlide(slides[index])
            console.log(index)
            setIndex(index + 1)
        }
        
    }

    useEffect(()=>{
    },[slide])
    

    const prevSlide = () => {
        if(index >= 0){
            setSlide(slides[index])
            console.log(index)
            setIndex(index - 1)
        }
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={restartSlide} data-testid="button-restart" className="small outlined">Restart</button>
                <button onClick={prevSlide} disabled={index===0}  data-testid="button-prev" className="small">Prev</button>
                <button onClick={nextSlide} disabled={index === slides.length - 1} data-testid="button-next" className="small">Next</button>
            </div>
            
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slide.title}</h1>
                <p data-testid="text">{slide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
