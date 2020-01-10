import React from 'react'

const NavigateBar = props => (
    <div className="navbar">
        <h2>/ NEWS /</h2>

        <style jsx>{`
            h2 {
                margin: 0;
                color: white;
                margin: 6px 0 6px 0;
            }

            .navbar {
                position: fixed;
                top: 0;
                width: 100%;
                background-color: black;
                z-index: 1;
                text-align: center;
                overflow: hidden;
            }
        `}</style>
    </div>
)

export default NavigateBar