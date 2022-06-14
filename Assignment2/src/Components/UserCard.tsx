import React, { ReactEventHandler } from "react";
import { user } from "../redux/reducers";
import 'antd/dist/antd.css';
import { Card, Avatar, Popover, Col } from 'antd'
import {
	HeartTwoTone,
	DeleteFilled,
	EditOutlined,
	MailOutlined,
	PhoneOutlined,
	GlobalOutlined,
	HeartFilled,
} from '@ant-design/icons'

type UserCardPropTypes = {
	user: user
	deleteUser: ReactEventHandler
	likeUser: ReactEventHandler
	editUser: ReactEventHandler
}

const { Meta } = Card

const UserCard = (props: UserCardPropTypes) => {
	const { username, email, phone, name, website, isLiked = false } = props.user
	const HeartIcon = isLiked ? HeartFilled : HeartTwoTone

	return (
		<Col xs={{ span: 6 }} lg={{ span: 6 }}>
			<Card
				style={{
					width: 300,
				}}
				cover={
					<img
						alt='example'
						src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
						style={{ height: '200px', width: '200px' }}
					/>
				}
				actions={[
					isLiked ? (
						<Popover content={<p>Liked</p>}>
							<HeartIcon key='like' onClick={props.likeUser} />
						</Popover>
					) : (
						<Popover content={<p>Like</p>}>
							<HeartIcon key='like' onClick={props.likeUser} />
						</Popover>
					),
					<Popover content={<p>Edit</p>}>
						<EditOutlined key='edit' onClick={props.editUser} />
					</Popover>,
					<Popover content={<p>Delete</p>}>
						<DeleteFilled key='delete' onClick={props.deleteUser} />
					</Popover>,
				]}
			>
				<Meta
					title={name}
					description={[
						<MailOutlined />,
						' ',
						email,
						<br />,
						<PhoneOutlined />,
						' ',
						phone,
						<br />,
						<GlobalOutlined />,
						' ',
						website,
					]}
				/>
			</Card>
		</Col>
	)
}

export default UserCard;