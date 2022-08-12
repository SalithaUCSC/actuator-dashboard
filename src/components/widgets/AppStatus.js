import React from 'react'

export const AppStatus = (props) => {
    const { title, value, icon } = props.status;
    return (
        <li className="nav-item">
            <p className="nav-link text-dark">
                <i className={icon}></i> <span><b>{title}</b></span>: {value}
            </p>
        </li>
    )
}
