
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React,{useEffect} from 'react';
import Pusher from 'pusher-js';


function App() {

  useEffect(()=>{
    const pusher = new Pusher('2a302de178aaf5fc1a6b', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  },[])

  return (
    <div className="app">
      <div className="app__body" >
      <Sidebar />
      <Chat />
      </div>
    </div>
  );
}

export default App;
