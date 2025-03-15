import React from 'react'

function Btn({ title, width, color, bgcolor, padding, func }) {
    return (
        <>
            <button style={{
                width: width,
                color: color,
                backgroundColor: bgcolor,
                padding
            }} onClick={func}>{title}</button>
        </>
    )
}

export default Btn