import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { IconButton } from '@mui/material/';

export default function SendMessage() {
  return (
    <>
      <div className="chat_footerInput">
        <input type="text" placeholder="Type a Message" />
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
      </div>
      <div className="chat_footerButton">
        <button type="submit">
          <SendIcon />
        </button>
      </div>
    </>
  );
}
