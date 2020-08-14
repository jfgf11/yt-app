import React, {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyB_WOBwEBCW0AwpcEHp30Ykfzo5zVv3cIQ';



const useVideos = (defaultSearchTerm) =>{
    const [videos, setVideo] = useState([]);

    useEffect(()=>{
        searches(defaultSearchTerm);
    },[defaultSearchTerm]);


    const searches = async (term) =>{
        const response = await youtube.get('/search', {
            params: {
              q: term,
              part: 'snippet',
              maxResults: 5,
              type: 'video',
              key: KEY,
            },
          });
        setVideo(response.data.items);
        };


    return [videos, searches];
}

export default useVideos