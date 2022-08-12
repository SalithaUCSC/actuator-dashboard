import React from 'react'
import {AppStatus} from "./AppStatus";
import {appStatusData} from "../shared/AppStatusData";

export const AppStatusFigures = () => {
    return (
        <ul className="nav justify-content-center">
            {
                appStatusData.map((data, index) => (
                    <AppStatus status={data} key={index}/>
                ))
            }
        </ul>
    )
}