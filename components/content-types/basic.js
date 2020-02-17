import React from 'react'

import Cta from '../cta';

class ContentBasic extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {    
    return(
        <div className={this.props.type}>
            <div className="content-title">
                {this.props.title}
            </div>

            <p className="content-body">
                {this.props.body}
            </p>

            <Cta />

            <style jsx>{`
                .content-standard {
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                // CONTENT STANDARD

                .content-standard .content-title {
                    font-size: 33px;
                }

                @media (max-width: 728px) {

                    .content-body {
                        font-size: 12px;
                        width: 50%;
                        line-height: 30px;
                        border-left: unset;
                        border-bottom: 1px solid #3d3d3d;
                        padding: 15px 0px;
                    }

                }
            `}</style>
        </div>
    )
  }
}

export default ContentBasic;