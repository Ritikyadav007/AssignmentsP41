import React, { Component } from "react";
import UserDetails from "./UserDetails";

type ImageCardPropTypes = {
  user: any;
};

export default class ImageCard extends Component<ImageCardPropTypes> {


    renderBody(){
        const {email, phone, name, website, company, address} = this.props.user;
        return(
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <UserDetails detailName ="Email: " value ={email}/>
            <UserDetails detailName ="Phone: " value ={phone}/>
            <UserDetails detailName ="Company: " value ={company.name}/>
            <UserDetails detailName ="Website: " value ={website}/>
            <UserDetails detailName ="Address: " value ={address.street +' '+ address.suite +' '+ address.city +' '+ address.zipcode}/>
          </div>
        )
    }

  render() {
    const { username} = this.props.user;
    



    return (
      <div className="card mb-3 " style={{maxWidth:'1110px',  maxHeight:'220px', padding:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <div className="row g-0">
          <div className="col-md-3">
            <img src= {`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`} className="img-fluid rounded-start" alt= {username} style={{height: '200px', width: '200px'}}></img>
          </div>
          <div className="col-md-9">
           {this.renderBody()}
          </div>
        </div>
      </div>
    );
  }
}
