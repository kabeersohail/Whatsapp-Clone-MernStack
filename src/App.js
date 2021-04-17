
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React,{useEffect,useState} from 'react';
import Pusher from 'pusher-js';
import axios from "./axios";


function App() {

  const [messages,setMessages] = useState([]);

  useEffect(()=>{
    axios.get("/messages/sync").then(response=>{
      setMessages(response.data);
    })
  },[]);

  useEffect(()=>{
    const pusher = new Pusher('2a302de178aaf5fc1a6b', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages,newMessage]);
    });

    return () =>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body" >
        Hello
        
        
      <Sidebar />
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
