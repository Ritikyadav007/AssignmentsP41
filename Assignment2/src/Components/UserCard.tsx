import React, { ReactEventHandler } from "react";
import { user } from "../redux/reducers";
import 'antd/dist/antd.css';
import { Card, Avatar, Popover, Col, Tooltip } from "antd";
import {
	HeartOutlined,
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
	const HeartIcon = isLiked ? HeartFilled : HeartOutlined

	return (
    <Col xs={{ span: 6 }} lg={{ span: 6 }}>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <div>
            <img
              alt="example"
              src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
              style={{
                height: "200px",
                width: "298px",
                backgroundColor: "rgb(250, 250, 250)",
              }}
            />
          </div>
        }
        actions={[
          isLiked ? (
            <Tooltip title={"Liked"}>
              <HeartIcon
                key="like"
                onClick={props.likeUser}
                style={{ color: "red" }}
              />
            </Tooltip>
          ) : (
            <Tooltip title="Like">
              <HeartIcon
                key="like"
                onClick={props.likeUser}
                style={{ color: "red" }}
              />
            </Tooltip>
          ),
          <Tooltip title="Edit">
            <EditOutlined key="edit" onClick={props.editUser} />
          </Tooltip>,
          <Tooltip title="Delete">
            <DeleteFilled key="delete" onClick={props.deleteUser} />
          </Tooltip>,
        ]}
      >
        <Meta
          title={name}
          description={[
            <MailOutlined />,
            " ",
            email,
            <br />,
            <PhoneOutlined />,
            " ",
            phone,
            <br />,
            <GlobalOutlined />,
            " ",
            "http://",
            website,
          ]}
        />
      </Card>
    </Col>
  );
}

export default UserCard;