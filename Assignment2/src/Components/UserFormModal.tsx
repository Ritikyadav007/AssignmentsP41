import React, { ReactEventHandler, ReactNode } from "react";
import { Modal } from "antd";
import "./UserForm.css";
import { title } from "process";

type UserCardPropTypes = {
  visible: boolean;
  title: string;
  children: ReactNode;
  closeModal: ReactEventHandler;
};

export default function UserFormModal(props: UserCardPropTypes) {
  const { visible, closeModal, children } = props;

  return visible ? (
    <Modal
      title={props.title}
      visible={visible}
      onOk={closeModal}
      onCancel={closeModal}
    >
      {children}
    </Modal>
  ) : null;
}
