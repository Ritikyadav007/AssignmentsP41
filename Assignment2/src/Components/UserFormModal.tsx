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
  onSubmitchange?: ReactEventHandler;
};

export default function UserFormModal(props: UserCardPropTypes) {
  const { visible, user, closeModal } = props;

  const [isFieldEmpty, setIsFieldEmpty] = useState<Boolean>(false);
  const validateForm = (values:any) =>{

  }

  return (
    <Modal
      title="Change User Details"
      visible={visible}
      onOk={!isFieldEmpty ? closeModal : () => {}}
      onCancel={closeModal}
    >
      {visible && <UserForm user={user} />}
    </Modal>
  );
}
