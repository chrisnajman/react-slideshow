import React, {Component} from 'react'
import data from '../../data/data'
import './Slider.css'
import Slide from '../Slide/Slide'
import SlideDots from '../SlideDots/SlideDots'

class Slider extends Component {

    state = {
        data: data,
        idx: 0
    }

    handleNext = ()=> {
        this.setState((prevState, prevProps) =>{
            return {idx: prevState.idx + 1}
        }, ()=> console.log(this.state.idx))
    }

    handlePrevious = ()=> {
        this.setState((prevState, prevProps) =>{
            return {idx: prevState.idx - 1}
        }, ()=> console.log(this.state.idx))
    }

    handleStartAgain = ()=> {
        this.setState((prevState, prevProps) =>{
            return {idx: prevState.idx - prevState.data.length + 1}
        }, ()=> console.log(this.state.idx))
    }

    render(){

        const slideshowTitle = "Hawkeye, Wimbledon 2019"
        return(
            <>
                <Slide 
                    slideshowTitle={slideshowTitle}
                    id={this.state.data[this.state.idx].id} 
                    key={this.state.data[this.state.idx].id}
                    image={this.state.data[this.state.idx].imgUrl} 
                    slideTitle={this.state.data[this.state.idx].out} 
                    previous={this.handlePrevious}
                    next={this.handleNext}
                    startAgain={this.handleStartAgain}
                    data={this.state.data}

                />

                <ul className="slide-dots">
                    {
                        this.state.data
                        .filter(item => item.id)
                        .map(item => 
                            <SlideDots 
                                key={Math.random()} 
                                dot={item.id} 
                                id={this.state.data[this.state.idx].id} 
                            />
                        )
                    }
                </ul>
            </>
        )
    }
}


export default Slider