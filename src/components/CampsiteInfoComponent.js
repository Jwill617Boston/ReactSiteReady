
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import React, { Component } from 'react';



class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    renderComments({comments}) {
        if (comments) {
            return (
                <div>
                    <div className="container">
                        <div className="row-col-4">   
                            <h4>Comments</h4>
                            <div>
                            {comments.map(comment => <div key={comment.id}> {comment.text} </div>)}
                            {comments.map(comment => <div key={comment.id}> {comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    renderCampsite({campsite}) {
        console.log(campsite)
        return (    
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
                )
    }

    function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.campsite.comments} />
                    </div>
                </div>
            );
        }
        return <div />;
    }
}   
    export default CampsiteInfo;