import React, { useState, useEffect } from "react";
import { user } from "../redux/reducers";

import { Form, Input, Button } from 'antd'

type UserFormProps = {
	user: user
	onSubmit: Function
}

export default function UserForm(props: UserFormProps) {
	let { name, phone, email, website, id } = props.user

	// const {
	//   register,
	//   formState: { errors },
	// } = useForm();

	const [userName, setName] = useState(name)
	const [userEmail, setEmail] = useState(email)
	const [userPhone, setPhone] = useState(phone)
	const [userWebsite, setWebsite] = useState(website)

	// useEffect(() => {
	//   // componentWillUnmount
	//   console.log("user did update");
	//   return () => {
	//     console.log("user form will unmount");
	//   };
	// }, []);

	return (
		<Form
			name='basic'
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 16,
			}}
			onFinish={e => {
				const newUser = { ...props.user, ...e }
				props.onSubmit(newUser)
			}}
			autoComplete='off'
		>
			<Form.Item
				label='Name'
				name='name'
				initialValue={userName}
				rules={[
					{
						required: true,
						message: 'Please input your name!',
					},
				]}
			>
				<Input
					onChange={e => {
						setName(e.target.value)
					}}
				/>
			</Form.Item>
			<Form.Item
				label='Email'
				name='email'
				initialValue={userEmail}
				rules={[
					{
						required: true,
						message: 'Please input your email!',
					},
				]}
			>
				<Input
					onChange={e => {
						setEmail(e.target.value)
					}}
				/>
			</Form.Item>
			<Form.Item
				label='Phone'
				name='phone'
				initialValue={userPhone}
				rules={[
					{
						required: true,
						message: 'Please input your phone!',
					},
				]}
			>
				<Input
					onChange={e => {
						setPhone(e.target.value)
					}}
				/>
			</Form.Item>
			<Form.Item
				label='Website'
				name='website'
				initialValue={userWebsite}
				rules={[
					{
						required: true,
						message: 'Please input your website!',
					},
				]}
			>
				<Input
					onChange={e => {
						setWebsite(e.target.value)
					}}
				/>
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}
