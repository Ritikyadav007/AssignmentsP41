import React, { PureComponent, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default class Card extends PureComponent<CardProps> {
  render() {
    const { children } = this.props;
    return (
      <div
        className="card mb-3 "
        style={{
          padding: "10px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        {children}
      </div>
    );
  }
}
