import React from 'react'
import CardVertical from '../components/CardVertical'

const LatestLists = props => (
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
                padding-top: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #e0e0e0;
            }

            @media only screen and (min-width: 600px) {
                ul {
                    padding-top: 20px;
                }

                li {
                    padding-top: 30px;
                    padding-bottom: 30px;
                }
            }
        `}</style>
    </div>
)

export default LatestLists