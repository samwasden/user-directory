import React from 'react';
import Index from './Index'
import {data} from '../data'
import '../stylesheets/Card.css'

function Card(props) {
    
    let {index} = props

    return (
        <div className='card'>
            <Index index={index} length={data.length}/>
            <div id='display'>
                <h1 id='name'>{data[index].name.first} {data[index].name.last}</h1>
                <div id='info1'>
                    <div className='about'>
                        <h2>From: </h2>
                        <p>{data[index].city}, {data[index].country}</p>
                    </div>
                    <div className='about'>
                        <h2>Job Title: </h2>
                        <p>{data[index].title}</p>
                    </div>
                    <div className='about'>
                        <h2>Employer: </h2>
                        <p>{data[index].employer}</p>
                    </div>
                </div>
                <div id='info2'>
                    <h2>Favorite Movies:</h2>
                    <ol>
                        <li>{data[index].favoriteMovies[0]}</li>
                        <li>{data[index].favoriteMovies[1]}</li>
                        <li>{data[index].favoriteMovies[2]}</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Card