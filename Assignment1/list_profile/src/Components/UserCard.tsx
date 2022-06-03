import React, { Component } from "react";
import { user } from "../App";
import Card from "./Card";
import UserDetails from "./UserDetails";

type ImageCardPropTypes = {
  user: user;
};

export default class ImageCard extends Component<ImageCardPropTypes> {
  // card details
  renderBody() {
    const { email, phone, name, website, company, address } = this.props.user;
    return (
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <UserDetails detailName="Email: " value={email} />
        <UserDetails detailName="Phone: " value={phone} />
        <UserDetails detailName="Company: " value={company.name} />
        <UserDetails detailName="Website: " value={website} />
        <UserDetails
          detailName="Address: "
          value={
            address.street +
            " " +
            address.suite +
            " " +
            address.city +
            " " +
            address.zipcode
          }
        />
      </div>
    );
  }

  render() {
    const { username } = this.props.user;

    return (
      // card structure
      <Card>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
              className="img-fluid rounded-start"
              alt={username}
              style={{ height: "200px", width: "200px" }}
            ></img>
          </div>
          <div className="col-md-8">{this.renderBody()}</div>
        </div>
      </Card>
    );
  }
}
