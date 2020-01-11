import React from "react";

const imgNothing =
    "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

const CardVertical = props => (
    <article>
      <div className="card">
        <div className="image"/>
        {/* <img src={props.image || imgNothing} /> */}
        <div className="content">
          <h4 className="depart">POLITIC</h4>
          <h4 className="title">{props.title}</h4>
        </div>
      </div>

      <style jsx>{`
        article {
          font-size: 30px;
        }

        .card {
          display: flex;
        }

        img {
            padding: 8px 6px 8px 6px;
            width: 35%;
            height: 13vh;
        }

        .image {
          width: 35%;
          height: 13vh;
          background-image: url(${props.image || imgNothing});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }

        .content {
          width: 65%;
          padding-left: 8px;
        }

        h4 {
          margin: 0;
        }

        .depart {
          font-size: 0.25em;
          color: rgb(96, 96, 96);
          margin-bottom: 6px;
        }

        .title {
          font-size: 0.5em;
        }

        @media only screen and (min-width: 600px) {
            .image {
              width: 45%;
              height: 180px;
            }

            .content {
              width: 55%;
              padding-left: 30px;
            }

            .depart {
                font-size: 12px;
              }

            .title {
                font-size: 20px;
            }
        }
      `}</style>
    </article>
)

export default CardVertical