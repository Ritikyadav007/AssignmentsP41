import React from "react";

type SearchBarProps = {
    term :Function;
}

export default function(props: SearchBarProps) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://library.kissclipart.com/20190202/vbe/kissclipart-shopping-cart-vector-blue-clipart-shopping-cart-607a4577e7f98c76.png"
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            UserCart
          </a>
          <div></div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                props.term(e.target.value);
              }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
