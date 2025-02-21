import React from 'react';
import img from '../assets/anujpandey.jpg';
export default function Avatar(){
    const style = {
        borderRadius: "50px"
    }
    const myUser = {
        name: "Anuj Pandey",
        age: 22,
        img: img,
    }
    return (
        <>
        <h1>{myUser.name}</h1>
        <h1>{myUser.age}</h1>
        <img src={myUser.img} style={style} alt="anuj-img" />
        </>
    );
}