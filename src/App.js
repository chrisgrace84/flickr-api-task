import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import MainNav from './components/layout/MainNav';
import Layout from './components/layout/Layout';
import PhotoList from './components/photos/PhotoList';

const { REACT_APP_FLICKR_API_KEY: API_KEY } = process.env

function App() {
    const [loadedPhotos, setloadedPhotos] = useState([]);

    useEffect(() => {

        axios({
            method: 'get',
            url: 'https://api.flickr.com/services/rest',
            params: {
                method: 'flickr.photos.search',
                api_key: API_KEY,
                extras: 'url_n, owner_name, description, tags',
                format: 'json',
                nojsoncallback: 1,
                per_page: 24, // with more time I would use this parameter to control the amount of photos loaded. I would update its state on scroll
                tags: 'holidayextrascom, holidayextrasmoustache, holidayextrasrednose, holidayextrassponsors, holidayextrasteamphoto, holidaymaker', // search by some tags used by Holidays extras
                safe_search: 1 // safe search: 1 for safe; 2 for moderate; 3 for restricted.
            },
        }).then(response => {
            const photos = response.data.photos.photo;

            setloadedPhotos(photos);

        }).catch(e => console.log(e)); // errors to be handled here 

    }, []);

    return (
        <Fragment>
            <MainNav />
            <Layout>
                {
                    !loadedPhotos.length 
                    ? <div className="loading">Loading...</div>
                    : <PhotoList photoList={loadedPhotos} /> 
                }
            </Layout>
        </Fragment>
    )
}

export default App;
