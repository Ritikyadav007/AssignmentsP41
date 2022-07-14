import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { IconButton } from '@mui/material/';
import './SendMessage.css';
import { useState } from 'react';

type SendMessageProps = {
  handleMessage: Function;
};

export default function SendMessage(props: SendMessageProps) {
  const [message, setMessage] = useState('');
  const { handleMessage } = props;
  return (
    <>
      <div className="chat_footerInput">
        <input
          value={message}
          type="text"
          placeholder="Type a Message"
          onChange={(e) => {
            e.preventDefault();
            setMessage(e.target.value);
          }}
        />
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
      </div>
      <div className="chat_footerButton">
        <button
          type="submit"
          onClick={() => {
            handleMessage(message);
            setMessage('');
          }}
        >
          <SendIcon />
        </button>
      </div>
    </>
  );
}
