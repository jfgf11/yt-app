import React from 'react';
import './VideoItems.css';


const VideoItem = (props)=>{
    return(
        <div className="video-item item" onClick = {()=> {props.OnClicker(props.MyVideo)
        console.log(props.MyVideo);
        }}> 
            <img alt ={props.MyVideo.snippet.title} className="ui image" src = {props.MyVideo.snippet.thumbnails.medium.url} />
            <div className="top content">
                <div className = "header"> {props.MyVideo.snippet.title} </div>
            </div>
        </div>
    );
}

export default VideoItem;