import React from 'react'

function Btn({ title, width, bgcolor, padding, func }) {
    return (
        <>
            <button style={{
                width: width,
                backgroundColor: bgcolor,
                padding: '5px',
                borderRadius:'8px'
            }} onClick={func}>{title}</button>
        </>
    )
}

export default Btn