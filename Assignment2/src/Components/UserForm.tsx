import React, { ReactEventHandler } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { type } from "@testing-library/user-event/dist/type";
import "./UserForm.css";
import { user } from "../redux/reducers";

type UserCardPropTypes = {
  visible: boolean;
  user: user;
  closeModal: ReactEventHandler;
  onSubmitchange?: ReactEventHandler;
};

export default function UserForm(props: UserCardPropTypes) {
  const { visible, user, closeModal } = props;

  const renderForm = () => {
    return (
      <div className="form">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={() => {}}
          onFinishFailed={() => {}}
          autoComplete="off"
        >
          <Form.Item label="Basic Modal"></Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Website"
            name="website"
            rules={[{ required: true, message: "Please input your website!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button htmlType="button" style={{ margin: "5px" }}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };

  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={closeModal}
      onCancel={closeModal}
    >
      {renderForm()}
    </Modal>
  );
}
