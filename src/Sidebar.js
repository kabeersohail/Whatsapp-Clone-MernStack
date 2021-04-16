import { Avatar, IconButton } from '@material-ui/core'
import { DonutLarge, SearchOutlined } from '@material-ui/icons'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className="sidebar" >
                <div className="sidebar__header" >
                <Avatar src="https://instagram.fvtz2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/51915553_2314023972175284_5699868007807844352_n.jpg?tp=1&_nc_ht=instagram.fvtz2-1.fna.fbcdn.net&_nc_ohc=onFn5_qXN3QAX-30K9X&edm=ABfd0MgAAAAA&ccb=7-4&oh=0646bb370cdd43f84b6052c01eb139cb&oe=609DBC4B&_nc_sid=7bff83" />
                    <div className="sidebar__headerRight" >
                        <IconButton>
                            <DonutLarge />
                        </IconButton>
                        <IconButton>
                            <ChatIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    </div>
                </div>

                <div className = "sidebar__search" >
                    <div className = "sidebar__searchContainer" >
                        <SearchOutlined/>

                        <input placeholder="Search or start new chat" type = "text" />

                    </div>
                </div>

                <div className="sidebar__chats" >
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>
                </div>

        </div>
    )
}

export default Sidebar
