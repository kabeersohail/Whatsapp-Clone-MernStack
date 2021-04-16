import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import "./Chat.css"
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__Header" >
                <Avatar />
                <div className="chat__HeaderInfo">
                    <h3>Room name</h3>
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
                <p className="chat__message" >
                    <span className="chat__name" >Kabeer</span>
                    We were foolish sperms who thought winning the first race was enough
                    <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message chat__reciever" >
                    <span className="chat__name" >Kabeer</span>
                    That was awesome quote.
                    <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message" >
                    <span className="chat__name" >Kabeer</span>
                    Thanks
                    <span className="chat__timestamp" >
                        {new Date().toUTCString()}
                    </span>
                </p>

                
            </div>

            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input placeholder="Type a message" type="text"/>
                    <button type="submit" >Send a message</button>
                </form>
                <MicIcon/>
            </div>

        </div>
    )
}

export default Chat