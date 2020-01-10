import React from 'react'
import CardVertical from '../components/CardVertical'

const ListVertical = props => (
    <div className="container">
        <ul>
            {
                props.store.image.map(item => (
                    <li>
                        <CardVertical image={item} title={props.store.text} />
                    </li>
                ))
            }
        </ul>
        <style jsx>{`
            .container {
                padding-left: 10px;
                padding-right: 10px;
            }

            ul {
                margin: 0;
                padding: 0;
                list-style-type: none;
            }

            li {
                padding-bottom: 10px;
            }
        `}</style>
    </div>
)

export default ListVertical