import React, {useState} from 'react';
import LaunchesComponent from "./components/RocketContainer/Launches/LaunchesComponent";
import PostsComponent from "./components/PostContainer/Posts/PostsComponent";

function App() {
    const [flag, setFlag] = useState(true);

  return (
    <div>
        <button onClick={()=> {setFlag(!flag)}}>Switch Task</button>
        {flag ? <LaunchesComponent/> : <PostsComponent/>}
    </div>
  );
}

export  {App};
