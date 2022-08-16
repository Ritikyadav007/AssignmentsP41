import React, { ReactEventHandler, useContext } from "react";
import { user } from "../../store/reducers";
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
import { DarkCardstyle, LightCardstyle } from '../../theme';
import './UserCard.css'
import { ThemeContext } from "../../themeStore";


type UserCardPropTypes = {
	user: user;
	deleteUser: ReactEventHandler;
	likeUser: ReactEventHandler;
	editUser: ReactEventHandler;
};

const { Meta } = Card;
const UserCard = (props: UserCardPropTypes) => {
	const { username, email, phone, name, website, isLiked = false } = props.user;
	const HeartIcon = isLiked ? HeartFilled : HeartOutlined;

	const themeMode = useContext(ThemeContext);
	console.log(themeMode);

	// const Cardstyle = props.theme == 'light' ? LightCardstyle : DarkCardstyle;
	// const iconColor = props.theme == 'light' ? 'black' : 'white';
	// const cardColor = props.theme == 'light' ? 'white' : '#404040';

	return (
		<Col xs={{ span: 6 }} lg={{ span: 6 }}>
			<Card
				className="card"
				id={themeMode}
				cover={
					<div className="image-wrapper" id={themeMode}>
						<img className="image" id={themeMode}
							alt='example'
							src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
						/>
					</div>
				}
				actions={[
					isLiked ? (
						<Tooltip title={'Liked'}>
							<HeartIcon
								key='like'
								onClick={props.likeUser}
								style={{ color: 'red', height: '48px', background: 'black' }}
							/>
						</Tooltip>
					) : (
						<Tooltip title='Like'>
							<HeartIcon
								key='like'
								onClick={props.likeUser}
									style={{ color: 'red', background: 'black' }}
							/>
						</Tooltip>
					),
					<Tooltip title='Edit'>
						<EditOutlined key='edit' onClick={props.editUser} style={{ background: 'black' }} />
					</Tooltip>,
					<Tooltip title='Delete'>
						<DeleteFilled key='delete' onClick={props.deleteUser} style={{ background: 'black' }} />
					</Tooltip>,

				]}
			>
				<Meta
					title={<div className="text" id={themeMode}>{name}</div>}
					description={[
						<MailOutlined className="icons" id={themeMode} />,
						' ',
						<div className="text" id={themeMode} >{email}</div>,
						<br />,
						<PhoneOutlined className="icons" id={themeMode} />,
						' ',
						<div className="text" id={themeMode} >{phone}</div>,
						<br />,
						<GlobalOutlined className="icons" id={themeMode} />,
						' ',
						<div className="text" id={themeMode}>
							http://
							{website}
						</div>,
					]}
				/>
			</Card>
		</Col>
	);
};

export default UserCard;