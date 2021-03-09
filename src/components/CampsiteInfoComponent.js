import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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

    render () {        
        if (this.props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-1 align-center">                                            
                        <div>{this.renderCampsite(this.props.campsite)}</div>
                        </div>
                        <div className="col-md-5 m-1 text-center"> 
                        <div>{this.renderComments(this.props.campsite.comments)}</div> 
                        </div>                   
                    </div>
                </div>
                )
        }
        return (
            <div></div>
        )
    }
}

export default CampsiteInfo;