import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                        <BreadcrumbItem><Link to="/aboutus">About Us</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Home</h2>
                    <hr />
                </div>
            </div>
        </div>
    );
}


export default Home;   