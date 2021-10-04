import React from "react";
import '../stylesheets/Footer.css';
import {data} from '../data';

function Footer(props) {
    
    let {length, index, setindex, form, setform, person, setperson, editperson, seteditperson, edit, setedit, count, setcount} = props

    const resetEdit = (i=index) => {
        seteditperson({
            id: data[i].id,
            name: {
                first: data[i].name.first,
                last: data[i].name.last
            },
            city: data[i].city,
            country: data[i].country,
            employer: data[i].employer,
            title: data[i].title,
            favoriteMovies: data[i].favoriteMovies
        })
    }

    const resetPerson = () => {
        setperson({
            id: count,
            name: {
                fist: '',
                last: ''
            },
            city: '',
            country: '',
            employer: '',
            title: '',
            favoriteMovies: ['', '', '']
        })
    }

    return (
        <div className='footer'>
            <button className='navigate' onClick={() => {
                if (index === 0) {
                    edit ? resetEdit(length - 1) : resetPerson()
                    setindex(index = length-1)
                } else {
                    edit ? resetEdit(index - 1) : resetPerson()
                    setindex(index - 1)
                } 
            }}>&lt; Previous</button>
            <div className='modifiers'>
                {form ? <button className='modify' onClick={() => {
                    if (edit) {
                        data.splice(index, 1, editperson)
                        setform(false)
                    } else {
                        data.splice(index, 0, person)
                        setform(false)
                        setcount(count + 1)
                    }
                }}>Submit</button> : null}
                {!form ? <button className='modify' onClick={() => {
                    setedit(true)
                    resetEdit()
                    setform(true) 
                }}>Edit</button> : null }
                {!form ? <button className='modify' onClick={() => {
                    data.splice(index, 1)
                    if (index === 0) {
                        setindex(index = length-2)
                    } else {
                        setindex(index-1)}
                }}>Delete</button> : null }
                {!form ? <button className='modify' onClick={() => {
                    setedit(false)
                    resetPerson()
                    setform(true)
                }}>New</button> : null}
                {form ? <button className='modify' onClick={() => {
                    setform(false)   
                }}>Cancel</button> : null}
            </div>
            <button className='navigate' onClick={() => {
                if (index === length-1) {
                    edit ? resetEdit(0) : resetPerson()
                    setindex(index = 0)
                } else {
                    edit ? resetEdit(index + 1) : resetPerson()
                    setindex(index + 1)
                }

            }}>Next &gt;</button>
        </div>
    )
}

export default Footer