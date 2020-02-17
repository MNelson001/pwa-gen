import React from 'react'

class ContentMinimalist extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {    
    return(
        <div className={this.props.type}>
            <div className="content-title">
                {this.props.title}
                <div className="underline"></div>
            </div>
            
            <div className="img-top"></div>

            <p className="content-body">
                {this.props.body}
            </p>

            <style jsx>{`
                .img-top {
                    background: url('https://picsum.photos/200/300?grayscale');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 250px;
                    width: 100%;
                }

                .content-minimalist {
                    height: 100%;
                    width: 65%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                .content-minimalist {
                    border-radius: 5px;
                }

                .content-minimalist .content-title {
                    font-size: 33px;
                    color: #3d3d3d;
                }

                .content-minimalist .underline {
                    width: 50%;
                    height: 1px;
                    background-color: #b20101;
                    margin: 0 auto;
                }

                .content-minimalist p {
                    color: #3d3d3d;
                }

                @media (max-width: 728px) {
                    
                    .content-minimalist {
                        width: 65%;
                    }

                    .content-minimalist .content-body {
                    }

                    .content-minimalist p {
                        font-size: 12px;
                        line-height: 25px;
                    }
                }
            `}</style>
        </div>
    )
  }
}

export default ContentMinimalist;