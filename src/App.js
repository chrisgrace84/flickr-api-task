import { useEffect } from 'react';
import axios from 'axios';

import Aux from './hoc/Aux';
import MainNav from './components/layout/MainNav';
import Layout from './components/layout/Layout';

function App() {

    useEffect(() => {

        function fetchImages() {
            return axios({
                method: 'get',
                url: 'https://api.flickr.com/services/rest',
                params: {
                    method: 'flickr.photos.getRecent',
                    api_key: '91376182c32d3a23c9f7b86d793c07ae',
                    extras: 'url_n, owner_name, date_taken, views, description',
                    format: 'json',
                    nojsoncallback: 1,
                },
            })
        }
        
        const imageData = fetchImages()
        
        console.log(imageData)

    }, []);

    return (
        <Aux>
            <MainNav />
            <Layout />
        </Aux>
    )
}

export default App;
