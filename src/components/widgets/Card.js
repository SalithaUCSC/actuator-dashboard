import React from 'react'

export const Card = (props) => {
    const { title, icon, code, cssClass } = props.cardData;
    return (
        <div className="col-lg-3">
            <div className={`card text-bg-${cssClass} mb-3`}>
                <div className="card-header">{title}</div>
                <div className="card-body">
                    <h6 className="card-title" style={{float: "left"}}>
                        <i className={icon}></i> {code} Responses</h6>
                    <h3 className="card-text" style={{float: "right"}}>33</h3>               
                </div>
                <small className="card-footer">Updated at: </small>
            </div>
        </div>
    )
}
