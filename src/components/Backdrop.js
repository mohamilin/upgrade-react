import React from 'react'

export default function Backdrop(props) {
    console.log('klik cancel', props.onCancel)
    return (
        <div onClick={props.onCancel} className="backdrop"/>
    )
}
