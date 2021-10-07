import React from 'react';
import './List.css';
import { Container, Row, Col } from 'reactstrap';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

export default function PhotoList(props) {
  const { photos } = props;
  return (
    <div>
      <div className="gridList">
        <Row>
          {photos.map((photo) => (
            <Col xs="6">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={photo.url}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{photo.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {photo.category}
                  </CardSubtitle>
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
