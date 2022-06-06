import React, { PureComponent } from 'react'

type UserDetailsProps = {
    detailName : String;
    value : String;
}

export default class UserDetails extends PureComponent<UserDetailsProps>{
  render() {
    return (
      <div>
          <p className="card-text">
                <strong>{this.props.detailName}</strong>
                {this.props.value}
            </p>
      </div>
    )
  }
}
