import React, { useState, useEffect } from "react";
import { user } from "../redux/reducers";
import { useForm } from "react-hook-form";

type UserFormProps = {
  user: user;
  newUser: Function;
};

export default function UserForm(props: UserFormProps) {
  let { name, phone, email, website } = props.user;

  const {
    register,
    formState: { errors },
  } = useForm();

  const [getName, setName] = useState(name);
  const [getEmail, setEmail] = useState(email);
  const [getPhone, setPhone] = useState(phone);
  const [getWebsite, setWebsite] = useState(website);

  // useEffect(() => {
  //   // componentWillUnmount
  //   console.log("user did update");
  //   return () => {
  //     console.log("user form will unmount");
  //   };
  // }, []);

  return (
    <div>
      <div className="mb-3 row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control "
            id="name"
            value={getName}
            {...register("Name", { required: true })}
            onChange={(e) => {
              setName(e.target.value);
              props.user.name = e.target.value;
              props.newUser(props.user);
            }}
          />
          <div>{errors.Name && <p>Please check the Name</p>}</div>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control "
            id="email"
            value={getEmail}
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            onChange={(e) => {
              setEmail(e.target.value);
              props.user.email = e.target.value;
              props.newUser(props.user);
            }}
          />
          <div>{errors.email && <p>Please check the Email</p>}</div>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="phone" className="col-sm-2 col-form-label">
          Phone
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control "
            id="phone"
            value={getPhone}
            {...register("phone", { required: true, maxLength: 10 })}
            onChange={(e) => {
              setPhone(e.target.value);
              props.user.phone = e.target.value;
              props.newUser(props.user);
            }}
          />
          <div>{errors.phone && <p>Please check the Phone</p>}</div>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="website" className="col-sm-2 col-form-label">
          Website
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control "
            id="website"
            value={getWebsite}
            {...register("website", { required: true })}
            onChange={(e) => {
              setWebsite(e.target.value);
              props.user.website = e.target.value;
              props.newUser(props.user);
            }}
          />
          <div>{errors.website && <p>Please check the Website</p>}</div>
        </div>
      </div>
    </div>
  );
}
