import React from 'react';

const VideoDetail = (props) => {
    if(!props.Video){
        return <div>Loading</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${props.Video.id.videoId}`
    return(
        <div className="ui segment">
            <div className= "ui embed">
                <iframe title = "video player" src={videoSrc} />
            </div>
            <h4 className="ui header">{props.Video.snippet.title}</h4>
            <p> {props.Video.snippet.description} </p>
        </div>

    );
}


export default VideoDetail;