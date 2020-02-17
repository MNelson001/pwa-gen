import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';


class Newsfeed extends React.Component {
    render() {
        let news_array = ['article', 'article', 'article', 'article'];

        return (
            <div className="news-feed">
                {news_array.map((article, index) => {

                    return(
                        <div className="news-card" key={index}>
                            <div className="news-card-img">
                                <FontAwesomeIcon icon={faNewspaper} />
                            </div>
                
                            <div className="news-card-content">

                            </div>

                            <div className="read-more-btn">
                                <button>Read More</button>
                            </div>
                        </div>
                    )
                })}

                <style jsx>{`
                    .news-feed {
                        height: 100%;
                        width: 70%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }

                    .news-card {
                        height: 15%;
                        background-color: #3d3d3d;
                        width: 100%;
                        margin: 8px 0px;
                        display: grid;
                        grid-template-columns: 25% 75%;
                        box-shadow: 3px 3px 7px rgba(0,0,0,0.4);
                        position: relative;
                    }

                    .news-card-img {
                        color: #e3e3e3;
                        height: 50%;
                        width: 50%;
                        align-self: center;
                        justify-self: center;
                    }

                    .news-card-img svg {
                        max-height: 100%;
                    }

                    .news-card-content {
                        border-left: 2px solid #e3e3e3;
                        height: 75%;
                        align-self: center;
                    }

                    .read-more-btn {
                        height: 20px;
                        width: 100px;
                        position: absolute;
                        bottom: 10px;
                        right: 10px;
                    }

                    .read-more-btn button {
                        background-color: #8c0202;
                        color: #e3e3e3;
                        outline: none;
                        border: none;
                        width: 100%;
                        height: 100%;
                    }

                    .read-more-btn button:hover {
                        cursor: pointer;
                        background-color: #e3e3e3;
                        color: #8c0202;
                    }

                    @media (max-width: 728px) {

                        .news-card {
                            height: 20%;
                        }

                        .read-more-btn {
                            display: none;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Newsfeed;