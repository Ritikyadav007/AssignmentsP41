import React, { ReactEventHandler } from "react";
import { user } from "../redux/reducers";
import 'antd/dist/antd.css';
import { Card, Col, Tooltip } from "antd";
import {
	HeartOutlined,
	DeleteFilled,
	EditOutlined,
	MailOutlined,
	PhoneOutlined,
	GlobalOutlined,
	HeartFilled,
} from '@ant-design/icons'
import {DarkCardstyle, LightCardstyle} from '../theme';

type UserCardPropTypes = {
	user: user;
	deleteUser: ReactEventHandler;
	likeUser: ReactEventHandler;
	editUser: ReactEventHandler;
	theme: string;
};

const { Meta } = Card;
const UserCard = (props: UserCardPropTypes) => {
	const {username, email, phone, name, website, isLiked = false} = props.user;
	const HeartIcon = isLiked ? HeartFilled : HeartOutlined;

	const Cardstyle = props.theme == 'light' ? LightCardstyle : DarkCardstyle;
	const iconColor = props.theme == 'light' ? 'black' : 'white';
	const cardColor = props.theme == 'light' ? 'white' : '#404040';

	return (
		<Col xs={{span: 6}} lg={{span: 6}}>
			<Card
				style={{
					width: 300,
					background: cardColor,
				}}
				cover={
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'rgb(250, 250, 250)',
						}}
					>
						<img
							alt='example'
							src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
							style={{
								height: '200px',
								width: '200px',
								backgroundColor: 'rgb(250, 250, 250)',
							}}
						/>
					</div>
				}
				actions={[
					isLiked ? (
						<Tooltip title={'Liked'}>
							<HeartIcon
								key='like'
								onClick={props.likeUser}
								style={{color: 'red'}}
							/>
						</Tooltip>
					) : (
						<Tooltip title='Like'>
							<HeartIcon
								key='like'
								onClick={props.likeUser}
								style={{color: 'red'}}
							/>
						</Tooltip>
					),
					<Tooltip title='Edit'>
						<EditOutlined key='edit' onClick={props.editUser} />
					</Tooltip>,
					<Tooltip title='Delete'>
						<DeleteFilled key='delete' onClick={props.deleteUser} />
					</Tooltip>,
				]}
			>
				<Meta
					title={<Cardstyle>{name}</Cardstyle>}
					description={[
						<MailOutlined style={{color: iconColor}} />,
						' ',
						<Cardstyle>{email}</Cardstyle>,
						<br />,
						<PhoneOutlined style={{color: iconColor}} />,
						' ',
						<Cardstyle>{phone}</Cardstyle>,
						<br />,
						<GlobalOutlined style={{color: iconColor}} />,
						' ',
						<Cardstyle>
							http://
							{website}
						</Cardstyle>,
					]}
				/>
			</Card>
		</Col>
	);
};

export default UserCard;