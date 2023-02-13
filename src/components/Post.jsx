import React from "react";
// import {FiHeart} from 'react-icons/Fi';
import { FiHeart } from 'react-icons/fi';
import {FaHeart} from 'react-icons/fa'
import {IoChatbubblesOutline} from 'react-icons/io5';
import {FiSend} from 'react-icons/fi';
import {BsBookmark} from 'react-icons/bs';
import{BsBookmarkFill} from 'react-icons/bs';
export class Post extends React.Component{
    state = { islike: true,isnote:true, isOnline: true };
    constructor(props){
        super(props);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.islike == nextProps.islike) {
    //       return false;
    //     }
    //     if(nextState.isnote == nextProps.isnote){
    //         return false;
    //     }
    //     console.log("shouldComponentUpdate");
    //     return true;
    //   }
      componentDidUpdate() {
        console.log("componentDidUpdate");
      }
      componentWillUnmount() {
        console.log("componentWillUnmount");
      }
    render(){
        return(
         <div className="pcontainer">
            <div className="card">
            <div className="account">
            <img src={this.props.imageURL} alt={this.props.imageAlt} /><h5>{this.props.name} .{this.props.duration}</h5>
            <div class="dropdown">
            <button class="dropbtn">...</button>
                <div class="dropdown-content">
                <a href="#" id="red">Report</a>
                <a href="#"id="red">Unfollow</a>
                <a href="#">Add to favorites</a>
                <a href="#">Go to post</a>
                <a href="#">Share to</a>
                <a href="#">Kopy link</a>
                <a href="#">Embed</a>
                <a href="#">About this account</a>
                <a href="#">Cancel</a>
                </div>
            </div>
            </div>
            <br/>
            <img src={this.props.imageURL} alt={this.props.imageAlt} />
            <div className="text" onClick={() => {
            this.setState({ islike: !this.state.islike });
          }}>
            <br/>
            {this.state.islike ? (
            <FiHeart color="white" size={30} />):(<FaHeart color="red" size={30}/>)}
            <IoChatbubblesOutline color="white" size={30}/>
            <FiSend  color="white" size={30}/>
            </div>
            <div className="text"  onClick={() => {
            this.setState({ isnote: !this.state.isnote });
          }}>
            {this.state.isnote ? (
            <BsBookmark color="white" size={30} class="icon"/>):(<BsBookmarkFill color="white" size={30} class="icon"/>) }
            <h4>{this.props.likes} likes</h4>
            <h4>{this.props.name}:{this.props.Component}</h4>
            <hr/>
            </div>
            </div>
            
         </div>
        );
    }
}