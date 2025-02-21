import React from 'react';


export default function MyButton({count,onClick}){
    return (
        <>
        <h1>Count is {count}</h1>
        <button onClick={onClick}>Click Me</button>
        </>
    );
}