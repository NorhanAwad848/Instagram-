import React from "react";
import "../App.css";
import {IoHomeOutline} from 'react-icons/io5';
import {BiSearchAlt2} from 'react-icons/bi';
import {MdOutlineExplore} from 'react-icons/md';
import {BiMoviePlay} from 'react-icons/bi';
import {FiSend} from 'react-icons/fi';
import {AiOutlineNotification} from 'react-icons/ai';
import {BsPlusSquare}  from 'react-icons/bs';
export class Nav extends React.Component{
   
    constructor(props){
        super(props);
    }
    render(){
        return  (
            <div>  
            <div class="sidenav">
                    <h1 className="logo"> Instagram</h1>
                    <a href="#about"><IoHomeOutline color="white" size={30}/> Home</a>
                    <a href="#services"><BiSearchAlt2 color="white" size={30}/> Search</a>
                    <a href="#clients"><MdOutlineExplore color="white" size={30}/> Explore</a>
                    <a href="#contact"><BiMoviePlay color="white" size={30}/>Reals</a>
                    <a href="#contact"><FiSend  color="white" size={30}/> Messages</a>
                    <a href="#contact"><AiOutlineNotification color="white" size={30}/> Notification</a>
                    <a href="#contact"> <BsPlusSquare color="white" size={30}/> Create</a>
                    <a href="#contact"><img src={this.props.imageURL} alt={this.props.imageAlt} className="photo"/> Profile</a>
                    <a href="" className="more">☰ More</a>
            </div>
            </div>
            
        ) ;
    }
}