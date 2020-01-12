import React from "react";

const imgNothing =
    "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

const CardVerticalHeader = props => (
    <article>
      <div className="v-card custom-header">
        <div className="image"/>
        <div className="content">
          <h4 className="depart">POLITIC</h4>
          <h4 className="title">{props.title}</h4>
        </div>
      </div>

      <style jsx>{`
        article {
          font-size: 30px;
        }

        .v-card {
          display: flex;
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
              width: 35%;
              height: 120px;
            }

            .content {
              width: 65%;
              padding-left: 20px;
            }

            .depart {
                font-size: 12px;
              }

            .title {
                font-size: 16px;
            }
        }
      `}</style>
    </article>
)

export default CardVerticalHeader