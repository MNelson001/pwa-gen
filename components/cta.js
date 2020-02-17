import React from 'react';

class Cta extends React.Component {
    render() {
        return(
            <div className="cta-container">
                <button className="call-to-action">Sign Up</button>

                <style jsx>{`

                    .cta-container {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        height: 50px;
                    }

                    .call-to-action {
                        height: 100%;
                        width: 100%;
                        background: transparent;
                        font-size: 16px;
                        border: 1px solid #3d3d3d;
                        outline: unset;
                        text-transform: uppercase;
                        font-family: 'Roboto', sans-serif;
                        font-weight: 300;
                        border-radius: 5px;
                    }

                    .call-to-action:hover {
                        cursor: pointer;
                        color: #e3e3e3;
                        background-color: #b20101;
                        border: unset;
                    }

                    @media (max-width: 728px) {
                        .call-to-action {
                            width: 50%;
                        }
                    }
                `}</style>       
            </div>
        )
    }
}

export default Cta;