import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    <div>
                    {comments.map(comment => <div key={comment.id}> {comment.text} </div>)}
                    </div>
                </div>
            )
        }
    }

    renderCampsite(campsite) {
        console.log(campsite)
        return (
            <div className=" col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render () {        
        if (this.props.campsite) {
            return (
                <Row>                    
                    <div>{this.renderComments(this.props.campsite.comments)}</div>                    
                </Row>
            )
        }
        return (
            <div></div>
        )
    }
}

export default CampsiteInfo;