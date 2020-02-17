import React from 'react'

// Content Types
import ContentBasic from './content-types/basic';
import ContentMinimalist from './content-types/minimalist';
import ContentCard from './content-types/card';
import Newsfeed from './content-types/newsfeed';

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    setContentType(content_type) {
        switch(content_type) {

            case 'content-standard':
                return (
                    <ContentBasic 
                        type={this.props.type}
                        title={this.props.title}
                        body={this.props.body}
                    />
                );

            case 'content-minimalist':
                return (
                    <ContentMinimalist 
                        type={this.props.type}
                        title={this.props.title}
                        body={this.props.body}
                    />
                );
            
            case 'content-card':
                return (
                    <ContentCard
                        type={this.props.type}
                        title={this.props.title}
                        body={this.props.body}
                    />
                )
            
            case 'newsfeed':
                return (
                    <Newsfeed 
                        type={this.props.type}
                        title={this.props.title}
                        body={this.props.body}
                    />
                );
        }
    }

  render() {    
    return(
      <div id="content">
        {this.setContentType(this.props.type)}

        <style jsx global>{`
            #content {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
            }

            .content-title {
                margin: 7px 5px;
                font-family: 'Roboto', sans-serif;
                font-weight: 300;
                top: 0;
                text-transform: uppercase;
            }

            .content-body {
                font-size: 18px;
                text-transform: uppercase;
                font-weight: 300;
                font-family: 'Roboto', sans-serif;
                line-height: 50px;
                text-align: left;
                letter-spacing: 2px;
                border-left: 1px solid #3d3d3d;
                padding-left: 15px;
            }

            @media (max-width: 728px) {
                #content {
                    height: 85%;
                }
            }
        `}</style>
      </div>
    )
  }
}

export default Content;