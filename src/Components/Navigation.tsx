import React from 'react'

export default function Navigation({images}:any) {
    return (
        <div>
            {images.map((val:any) => {
                <img src={val.img} />
            })}
        </div>
    )
}