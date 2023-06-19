import { Link } from "react-router-dom";

import "./styles/card.scss";

type CardProps = {
  urlImg: string;
  url: string;
  isContent?: boolean;
  title: string;
  description?: string;
  author: string;
  date: string;
};

export function Card(props: CardProps) {
  return (
    <Link to={props.url}>
      <div className="card card-custom">
        <figure className="card-img-top">
          <img src={props.urlImg} alt="images" />

          <figcaption>
            {props.isContent && (
              <Link to={props.url} className="img-link btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            )}
          </figcaption>
        </figure>
        <div className="card-body">
          <div className="card-description">
            <Link to={props.url} className="title">
              {props.title}
            </Link>
            <p>{props.description}</p>
          </div>
          <div className="card-author">
            <span className="author">By {props.author}</span>
            <span className="date">{props.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
