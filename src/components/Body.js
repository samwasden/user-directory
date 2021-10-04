import React, {useState} from "react";
import Card from "./Card";
import Footer from "./Footer";
import Form from './Form'
import '../stylesheets/Body.css'
import { data } from "../data";

function Body() {
    const [count, setcount] = useState(data.length)
    const [index, setindex] = useState(0)
    const [form, setform] = useState(false)
    const [editform, seteditform] = useState(false)
    const [edit, setedit] = useState(false)
    const [person, setperson] = useState({
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

    const [editperson, seteditperson] = useState({
        id: data[index].id,
        name: {
            first: data[index].name.first,
            last: data[index].name.last
        },
        city: data[index].city,
        country: data[index].country,
        employer: data[index].employer,
        title: data[index].title,
        favoriteMovies: data[index].favoriteMovies
    })


    return (
        <div className='body'>
            <Card index={index}/>
            <Footer setindex={setindex} index={index} length={data.length} setform={setform} form={form} seteditform={seteditform} editform={editform} person={person} setperson={setperson} editperson={editperson} seteditperson={seteditperson} edit={edit} setedit={setedit} count={count} setcount={setcount}/>
            {form ? <Form person={edit ? editperson : person} setperson={edit ? seteditperson : setperson} /> : null}
        </div>
    )
}

export default Body