import React from "react";

const imgNothing =
    "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

const CardHorizontal = props => (
  <article>
    <div className="card">
      <div className="image"/>
      <div className="contents">
        <h3>{props.title}</h3>
      </div>
    </div>

    <style jsx>{`
      h3 {
        margin: 0;
      }

      .contents {
        padding: 16px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      .image {
        width: 100%;
        height: 225px;
        background-image: url(${props.image || imgNothing});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    `}</style>
  </article>
);

export default CardHorizontal;
