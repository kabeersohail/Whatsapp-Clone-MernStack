import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import React,{useState} from 'react'
import "./Chat.css"
import MicIcon from '@material-ui/icons/Mic';
import axios from "./axios";

function Chat({messages}) {

    const [input,setInput] = useState("");

    const sendMessage = async (e)=>{
        e.preventDefault();
        await axios.post("/messages/new",{
            message : input,
            name: "kabeer",
            timestamp : "just now",
            received : false,
        });

        setInput('');
    };

    return (
        <div className="chat">
            <div className="chat__Header" >
                <Avatar />
                <div className="chat__HeaderInfo">
                    <h3>Salman</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight" >
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>

            </div>

            <div className="chat__body">
            
            {messages.map(message => (
                <p className={`chat__message ${message.received && "chat__reciever" }  `}>
                <span className="chat__name" >{message.name}</span>
                {message.message}
                <span className="chat__timestamp" >
                    {message.timestamp}
                </span>
            </p>
            ) )}

                

                {/* <p className="chat__message" >
                    <span className="chat__name" >Kabeer</span>
                    Thanks
                    <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                    </span>
                </p> */}

                   {/* <p className="chat__message chat__reciever" >
                    <span className="chat__name" >Kabeer</span>
                    Thanks
                    <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                    </span>
                </p> */}

                
            </div>

            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message" type="text"/>
                    <button onClick={sendMessage} type="submit" >Send a message</button>
                </form>
                <MicIcon/>
            </div>

        </div>
    )
}

export default Chat
