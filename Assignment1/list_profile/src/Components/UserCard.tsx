import React from "react";
import { user } from "../redux/reducers";
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { HeartTwoTone, DeleteFilled, EditOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, HeartFilled} from '@ant-design/icons';


type UserCardPropTypes = {
  user: user;
  delete: any;
  likeUser: any;
};

const { Meta } = Card;

const UserCard = (props: UserCardPropTypes)=> {
    const { username, email, phone, name, website, isLiked = false } = props.user;
    const HeartIcon = isLiked? HeartFilled: HeartTwoTone; 
    

    return(
      <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
          style={{height:'200px', width: '200px' }}
        />
      }
      actions={[
        <HeartIcon key="like"  onClick={props.likeUser}/>,
        <EditOutlined key="edit" />,
        <DeleteFilled key="delete" onClick={props.delete}/>,
      ]}
    >
      <Meta
        title= {name}
        description= {[<MailOutlined />, " ",email, <br/>,
        <PhoneOutlined />, " ", phone, <br/>,
        <GlobalOutlined />, " ", website
      ]}
        
      />
    </Card>
    )
  }

export default UserCard;