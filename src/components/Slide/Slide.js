import React from 'react'
import SliderBackground from '../SliderBackground/SliderBackground'

const Slide = ({slideshowTitle, image, slideTitle, id, data, previous, next, startAgain})=> {

    return(

        <div className="slideshow-container">

            <h2 className="slideshow-title">
                {slideshowTitle}
            </h2>

            <SliderBackground />
            <img 
                src={image} 
                alt={slideTitle ? "Out" : "In"} 
                className="image fade-in" 
                id={`slide_${id}`} 
            />
                
            <h4 className="title fade-in">
                {slideTitle ? "Out" : "In"}
            </h4>

            <p className="image-counter fade-in">
                {id}/{data.length}
            </p>


            {
                id === 1 ?  
                <button disabled className="slide-previous slide-button button-disabled">
                        Previous
                </button> : 
                <button onClick={previous} className="slide-previous slide-button">
                        {`\u003C`}<span className="sr-only">Previous</span>
                </button>
            }

            {
                id === data.length ? 
                <button disabled className="slide-next slide-button button-disabled">
                        Next
                </button> : 
                <button onClick={next} className="slide-next slide-button">
                    <span className="sr-only">Next</span>{`\u003E`}
                </button>
            }


            {
                id === data.length && 
                <p onClick={startAgain} className="back back-arrow">
                    Start Again
                </p>
            }
           
        </div>
    )
}

export default Slide