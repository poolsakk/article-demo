import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import WeeklyLists from '../containers/WeeklyLists'
import LatestLists from '../containers/LatestLists'

const MockupData = {
    text:
      "To fit ratios in a variety of mediums is often a challenge to designers, particularly.",
    image: [
      null,
      "https://images.unsplash.com/photo-1482268015045-1e9932ce47f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1560761716-ec8eb63ea39c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
      "https://images.unsplash.com/photo-1544510558-8cbb2f009cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1530669731069-48706bc794ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563891217861-7924b471afb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
    ]
  };

const Index = props => (
    <Layout>
        <Header store={MockupData}/>
        <div>
            <div className="container left">
                <WeeklyLists store={MockupData}/>
                <LatestLists store={MockupData}/>
            </div>
            <div className="container right">
                RIGHT
            </div>
        </div>

        <style jsx global>{`
            .container {
                float: left;
            }

            .left {
                width: 100%;
                margin-top: 40px;
            }

            .right {
                display: none;
                width: 30%;
                background-color: yellow;
            }

            @media only screen and (min-width: 600px) {
                .left {
                    width: 70%;
                    margin: 0;
                }

                .right {
                    display: block;
                }
            }
        `}</style>
    </Layout>
)

export default Index