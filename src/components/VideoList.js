import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const renderedList = props.List.map((video)=>{
            return <VideoItem MyVideo = {video} OnClicker = {props.OnClicker}/>;
        });
    return <div className="ui relaxed divided list"> {renderedList} </div>
    }

export default VideoList;