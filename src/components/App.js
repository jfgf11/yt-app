import React, { useState, useEffect, useRef} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
import useVideos from '../hooks/useVideos';



const App = ()=>{
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("Messi");

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos])

    return(
        <div className = "ui container" style={{marginTop : "10px"}}>
            <SearchBar onFormSubmit={search}/>
            <div className = "ui grid">
                <div className = "ui row">
                     <div className = "eleven wide column">
                        <VideoDetail Video = {selectedVideo} />
                    </div>
                    <div className = "five wide column">
                        <VideoList List = {videos} OnClicker = {(chosen)=>{setSelectedVideo(chosen)}} />
                    </div>
                </div>
            </div>
            
        </div>
        );

}


export default App;