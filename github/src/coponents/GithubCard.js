import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const GithubCard = (props) => {
    console.log(props)
  return (
    <div>
      <Card>
        <CardImg top width="200px" src={props.github.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>Login: {props.github.login} </CardTitle>
          <CardSubtitle>Name: {props.github.name}</CardSubtitle>
          <CardText>ID: {props.github.id}</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default GithubCard;