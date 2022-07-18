import React from 'react';
import MessageItemComp from './MessageItemComp/MessageItemComp';

type RenderMessagesProps = {
  userMessages: any[] | undefined;
};
export default function MessagesComponent(props: RenderMessagesProps) {
  const { userMessages } = props;

  if (userMessages === undefined) {
    return null;
  }
  return userMessages.map((data) => {
    return <MessageItemComp messageData={data} />;
  });
}
