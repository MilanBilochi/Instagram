import React from 'react'
import "../Components/Story.css"
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
export default function Story({ setPhotoMode }: any) {
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
            <div className='story-content'>
                <img src='https://plus.unsplash.com/premium_photo-1664300012015-480f872c11a1?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
            </div>
        </div>
    )
}