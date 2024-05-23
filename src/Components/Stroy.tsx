import React, { useEffect, useState } from 'react';
import "../Components/Story.css"
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';

export default function Story({ setPhotoMode, data }: any) {
    let [index, setIndex] = useState(0);
   
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log(index);
            if(index === data.length-1) {
                clearInterval(intervalId);
                setPhotoMode(false)
                setIndex(0);
            } else {
                setIndex(index+1)
            }
        }, 4000);
        return () => clearInterval(intervalId);
    }, [index])

    function getProgressBarClassName(currentIndex:any) {
        if(index == currentIndex) {
            return "progress-bar progress-bar-active"
        } else if(currentIndex < index) {
            return "progress-bar progress-bar-finished"
        } else {
            return "progress-bar"
        }   
    }
    function handleNext() {
        if(index == data.length-1) {
            setPhotoMode(false)
        } else {
            setIndex(index+1);
        }
    }
    function handlePrevious() {
        if(index>0) {
            setIndex(index-1)
        } 
    }


    return (
        <div className="story-open">
            <div className="story-open-bar">
                <div className='story-info'>
                    <img src="https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className='name'>
                        <label>Your Story ○ <span className='time'>time</span></label>
                    </div>
                </div>
                <div className="icons">
                    <MoreHorizSharpIcon />
                    <CloseIcon onClick={() => {
                        setPhotoMode(false)
                    }} />
                </div>
            </div>
            <div className="progress-bars">
                {
                    data.map((val:any, key:any) => {
                        return (
                            <div className="progress-bar-container">
                                <div style={{ animationDuration: '4s' }} className={getProgressBarClassName(key)}></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='story-content'>
                <div className="navigante-next" onClick={handleNext}></div>
                <div className="navigante-previous" onClick={handlePrevious}></div>
                <img src={data[index]} alt="" />
            </div>
        </div>
    )
}