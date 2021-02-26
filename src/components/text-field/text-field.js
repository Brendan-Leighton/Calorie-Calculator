import React from 'react'

export default function TextField({ name }) {
    return (
        <div>
            <label htmlFor={name}>{name}: </label>
            <input type="number" name={name} id={name} size="10"/>
        </div>
    )
}
