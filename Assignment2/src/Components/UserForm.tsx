import React, { useState } from "react";
import { user } from "../redux/reducers";
import { Form, Input, Modal } from "antd";
type UserFormProps = {
  user: user;
};

export default function UserForm(props: UserFormProps) {
  const { name, phone, email, website } = props.user;
  const [getName, setName] = useState(name);
  const [getEmail, setEmail] = useState(email);
  const [getPhone, setPhone] = useState(phone);
  const [getWebsite, setWebsite] = useState(website);
  console.log(props.user);
  return (
    <div>
      <form >
        <label>
          Name:
          <input
            type="text"
            value={getName}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
