import React from 'react'
import CardHorizontal from '../components/CardHorizontal'

const WeeklyLists = props => (
    <div className="container">
        <ul>
            {
                props.store.map(entry => (
                    <li key={entry.id}>
                        <CardHorizontal 
                            title={entry.name} 
                            image={entry.image.original} />
                    </li>
                ))
            }
        </ul>
        <style jsx>{`
            .container {
                padding: 10px;
                width: 100%;
            }

            ul {
                margin: 0;
                padding: 0;
                list-style-type: none;
            }

            li {
                padding-bottom: 20px;
            }

            @media only screen and (min-width: 600px) {
                .container {
                    display: none;
            }
        `}</style>
    </div>
)

export default WeeklyLists