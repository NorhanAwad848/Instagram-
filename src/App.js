import './App.css';
import React from 'react';
import { Nav } from './components/Nav';
import pro from './assets/profile.jpg';
import post from './assets/post1.jpg';
import post2 from './assets/post2.jpg';
import post3 from './assets/post3.jpg';
import post4 from './assets/post4.jpg';
import {StaList} from './components/StaList';
import {PostList} from './components/PostList';
import {AsideList} from'./components/AsideList';
let list = [
  {
    id: "1",
    name: "Norhan ",
    imageURL: post,
    imageAlt: "Norhan  stuts",
  },
  {
    id: "2",
    name: "ELZero",
    imageURL: post2,
    imageAlt: "ElZero status",
  },
  {
    id: "3",
    name: "Nora ",
    imageURL: post3,
    imageAlt: "Nora  status",
  },
  {
    id: "4",
    name: "Tia",
    imageURL: post4,
    imageAlt: "Tia status",
  },
  
];
let plist = [
  {
    id: "1",
    name: "Norhan ",
    imageURL: post,
    imageAlt: "Norhan  post",
    likes:"370",
    Component:"Nice Photo",
    duration:"12h",
    phrase:"Followed by yora4716, kokysameh_x, menn...",
  },
  {
    id: "2",
    name: "ELZero",
    imageURL: post2,
    imageAlt: "ElZero post",
    likes:"450",
    Component:"Two great wings",
    duration:"23h",
    phrase:"Followed by m_aboelsaad, wanakaman200....",
  },
  {
    id: "3",
    name: "Nora ",
    imageURL: post3,
    imageAlt: "Nora  post",
    likes:"100",
    Component:"Magic",
    duration:"25m",
    phrase:"Followed by eman_elsefy, adamabdo583 a.....",
  },
  {
    id: "4",
    name: "Tia",
    imageURL: post4,
    imageAlt: "Tia post",
    likes:"20",
    Component:"Freedom",
    duration:"1d",
    phrase:"Followed by yora4716, menna.sayed764, ....."
    ,
  },
  
];
function App() {
  let imageURL=pro;
  let image=post;
  let imageAlt="Eng:Norhan Awad";
  return (
    <div >
       <Nav imageURL={imageURL}  imageAlt={imageAlt}/>
       <div className="state">
         <StaList userList={list}/>
        
        <AsideList AsideList={plist}/>
       </div>
       <div class="postt" >
        <PostList postList={plist}/>
       </div>
      
    </div>
  );
}

export default App;
