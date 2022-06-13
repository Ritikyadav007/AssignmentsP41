import React, { ReactEventHandler, useState } from "react";
import { Modal } from "antd";
import { type } from "@testing-library/user-event/dist/type";
import "./UserForm.css";
import { user } from "../redux/reducers";
import UserForm from "./UserForm";

type UserCardPropTypes = {
  visible: boolean;
  user: user;
  closeModal: ReactEventHandler;
  onSubmitChange: Function;
};

export default function UserFormModal(props: UserCardPropTypes) {
  const { visible, user, closeModal, onSubmitChange } = props;
  const [updatedUser, setUpdatedUser] = useState(user);

  const getNewUser = (value: user) => {
    setUpdatedUser(value);
    console.log(value);
  };

  const validateForm = (values: any) => {};

  return visible ? (
    <Modal
      title="Change User Details"
      visible={visible}
      onOk={onSubmitChange(updatedUser)}
      onCancel={closeModal}
    >
      {<UserForm user={user} newUser={getNewUser} />}
    </Modal>
  ) : null;
}
