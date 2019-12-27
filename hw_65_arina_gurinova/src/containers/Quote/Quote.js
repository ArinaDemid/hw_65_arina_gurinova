import React, {Component} from "react";
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';

class Quote extends Component {
  render() {
    return (
      <div>
        <Card className="Quote_block">
          <CardBody>
            <CardTitle>Author: {this.props.title}</CardTitle>
            <CardText>Text: {this.props.text}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
};

export default Quote;
