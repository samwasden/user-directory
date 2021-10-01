import React from "react";
import '../stylesheets/Footer.css'
import {data} from '../data'

function Footer(props) {

    let {index, setindex, length} = props

    return (
        <div className='footer'>
            <button className='navigate' onClick={() => {
                if (index === 0) {
                    setindex(index = length-1)
                } else {
                    setindex(index - 1)}
                }}>&lt; Previous</button>
            <div className='modifiers'>
                <button className='modify'>Edit</button>
                <button className='modify' onClick={() => {
                    data.splice(index, 1)
                    if (index === 0) {
                        setindex(index = length-2)
                    } else {
                        setindex(index-1)
                    }
                    }}>Delete</button>
                <button className='modify'>New</button>
            </div>
            <button className='navigate' onClick={() => {
                if (index === length-1) {
                    setindex(index = 0)
                } else {
                    setindex(index + 1)}
                }}>Next &gt;</button>
        </div>
    )
}

export default Footer