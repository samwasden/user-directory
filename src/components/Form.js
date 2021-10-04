import React from 'react'
import '../stylesheets/Form.css'

function Form(props) {

    let {person, setperson} = props

    return (
        <form id='form'>
            <div className='subForm'>
                <div className='subSubForm'>
                    <label>Name:</label>
                    <div>
                        <input placeholder='First' value={person.name.first} onChange={(e) => setperson({...person, name: {first: e.target.value, last: person.name.last}})}></input>
                        <input placeholder='Last' value={person.name.last} onChange={(e) => setperson({...person, name: {first: person.name.first, last: e.target.value}})}></input>
                    </div>
                </div>
                <div className='subSubForm'>
                    <label>Location:</label>
                    <div>
                        <input placeholder='City' value={person.city} onChange={(e) => setperson({...person, city: e.target.value})}></input>
                        <input placeholder='Country' value={person.country} onChange={(e) => setperson({...person, country: e.target.value})}></input>
                    </div>
                </div>
            </div>
            <div className='subForm'>
                <div className='subSubForm'>
                    <label>Job:</label>
                    <div>
                        <input placeholder='Employer' value={person.employer} onChange={(e) => setperson({...person, employer: e.target.value})}></input>
                        <input placeholder='Title' value={person.title} onChange={(e) => setperson({...person, title: e.target.value})}></input>
                    </div>
                </div>
                <div className='subSubForm'>
                    <label>Favorite Movies: </label>
                    <div>
                        <input value={person.favoriteMovies[0]} onChange={(e) => setperson({...person, favoriteMovies: [e.target.value, person.favoriteMovies[1], person.favoriteMovies[2]]})}></input>
                        <input value={person.favoriteMovies[1]} onChange={(e) => setperson({...person, favoriteMovies: [person.favoriteMovies[0], e.target.value, person.favoriteMovies[2]]})}></input>
                        <input value={person.favoriteMovies[2]} onChange={(e) => setperson({...person, favoriteMovies: [person.favoriteMovies[0], person.favoriteMovies[1], e.target.value]})}></input>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form
