import React from 'react'

export default function TextField({ name, reference }) {
    return (
        <div>
            <label htmlFor={name}>{name}: </label>
            <input type="number" name={name} ref={reference} id={name} size="10"/>
        </div>
    )
}
