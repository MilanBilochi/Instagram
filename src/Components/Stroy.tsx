import React from 'react'
import "../Components/Story.css"
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import { AnimationRounded } from '@mui/icons-material';
export default function Story({ setPhotoMode }: any) {
    let stories = [
        {
            1 : 1
        },
        {
            1 : 1
        },{
            1 : 1
        },{
            1 : 1
        },{
            1 : 1
        },
    ]
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
                   stories.map((key, index) => {
                    return (
                        <div className="progress-bar-container">
                            <div style={{animationDuration: '3s'}} className="progress-bar progress-bar-active"></div>
                        </div>
                    )
                   }) 
                }
            </div>
            <div className='story-content'>
                <img src='https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
            </div>
        </div>
    )
}