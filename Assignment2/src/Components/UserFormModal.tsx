import React, { ReactEventHandler, ReactNode } from "react";
import { Modal } from "antd";
import "./UserForm.css";
import { title } from "process";

type UserCardPropTypes = {
	visible: boolean
	title: string
	children: ReactNode
	closeModal: Function
	onOk?: Function
	footer?: ReactNode
}

export default function UserFormModal(props: UserCardPropTypes) {
	const { visible, closeModal, children, onOk, title, footer } = props
	const handleOnOk = () => {
		onOk && onOk()
		closeModal()
	}

	return visible ? (
		<Modal
			title={title}
			visible={visible}
			footer={footer && footer}
			onOk={handleOnOk}
			onCancel={() => closeModal()}
		>
			{children}
		</Modal>
	) : null
}
