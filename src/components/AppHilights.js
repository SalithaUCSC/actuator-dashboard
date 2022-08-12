import React from 'react'

export const AppHilights = () => {
  return (
    <ul className="nav justify-content-center">
        <li className="nav-item">
            <p className="nav-link text-dark">
                <i className="fa-solid fa-server"></i> <span><b>System</b></span>: UP
            </p>
        </li>
        <li className="nav-item">
            <p className="nav-link text-dark">
                <i className="fa-solid fa-database"></i> <span><b>Database</b></span>: MySQL
            </p>
        </li>
        <li className="nav-item">
            <p className="nav-link text-dark">
                <i className="fa-solid fa-hard-drive"></i> <span><b>Disk Space</b></span>: 8.5GB
            </p>
        </li>
        <li className="nav-item">
            <p className="nav-link text-dark">
                <i className="fa-solid fa-clock"></i> <span><b>Up Time</b></span>: 0h 23mins
            </p>
        </li>
    </ul>
  )
}
