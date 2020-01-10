import React from 'react'
import CardHorizontal from '../components/CardHorizontal'

const ListHorizontal = props => (
    <div className="container">
        <ul>
            {
                props.store.image.map(item => (
                    <li>
                        <CardHorizontal image={item} title={props.store.text} />
                    </li>
                ))
            }
        </ul>
        <style jsx>{`
            .container {
                padding: 10px;
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

export default ListHorizontal