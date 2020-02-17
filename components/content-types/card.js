import React from 'react';

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

class ContentCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="cards">

                <Link href="#articles">
                    <div className="card">
                        <div className="card-img"></div>
                        <div className="card-content">
                            <p>Articles</p>
                            <div className="svg-icon">
                                <FontAwesomeIcon icon={faAngleDoubleRight} />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="#news">
                    <div className="card">
                        <div className="card-img"></div>
                        <div className="card-content">
                            <p>News</p>
                            <div className="svg-icon">
                                <FontAwesomeIcon icon={faAngleDoubleRight} />
                            </div>
                        </div>
                    </div>        
                </Link>

                <Link href="#stats">
                    <div className="card">
                        <div className="card-img"></div>
                        <div className="card-content">
                            <p>Stats</p>
                            <div className="svg-icon">
                                <FontAwesomeIcon icon={faAngleDoubleRight} />
                            </div>                    
                        </div>
                    </div>                
                </Link>

            <style jsx>{`
                p {
                    margin: 5px 0px;
                    color: #3d3d3d;
                    font-size: 24px;
                }

                .svg-icon {
                    width: 15px;
                    height: 15px;
                    color: #e3e3e3;
                    padding: 10px;
                    border-radius: 50%;
                    background-color: #3d3d3d;
                }

                .cards {
                    height: 50%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }

                .card {
                    height: 25%;
                    width: 65%;
                    margin: 12px 0px;
                    background-color: #e3e3e3;
                    display: grid;
                    grid-template-columns: 35% 65%;
                    border-radius: 5px;
                    box-shadow: 3px 3px 7px rgba(0,0,0,0.4);
                }

                .card-img {
                    background: url('https://picsum.photos/200/300?grayscale');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin: 2px;
                }

                .card-content {
                    display: flex;
                    font-family: 'Rotobo', sans-serif;
                    font-weight: 300;
                    text-transform: uppercase;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;
                    margin: 0px 15px;
                }

                .card:hover {
                    background-color: #887171;
                    cursor: pointer;
                }

                .card:hover p {
                    color: #e3e3e3;
                }

                .card:hover .svg-icon {
                    background-color: #e3e3e3;
                    color: #3d3d3d;
                }

                @media (max-width: 999px) {

                    .card-content p {
                        font-size: 14px;
                    }
                    
                }

                @media (max-width: 728px) {

                    .cards {
                        width: 100%;
                        height: 75%;
                    }

                    .card {
                        height: 100%;
                        margin: 4px;
                    }

                }
            `}</style>
            </div>
        )
    }
}

export default ContentCard;