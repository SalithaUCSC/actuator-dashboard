import React from 'react'

export const AppHilightComponent = (props) => {
    const { title, property, icon } = props.appHilight;
    return (
        <li className="nav-item">
            <p className="nav-link text-dark">
                <i className={icon}></i> <span><b>{title}</b></span>: {property}
            </p>
        </li>
    )
}
