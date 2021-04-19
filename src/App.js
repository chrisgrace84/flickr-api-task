import { useEffect, useState } from 'react';
import axios from 'axios';

import Aux from './hoc/Aux';
import MainNav from './components/layout/MainNav';
import Layout from './components/layout/Layout';
import Card from './components/ui/Card';

function App() {
    const [isLoading, setIsloading]       = useState(true);
    const [loadedPhotos, setloadedPhotos] = useState([]);

    useEffect(() => {

        axios({
            method: 'get',
            url: 'https://api.flickr.com/services/rest',
            params: {
                method: 'flickr.photos.getRecent',
                api_key: '91376182c32d3a23c9f7b86d793c07ae',
                extras: 'url_n, owner_name, date_taken, views, description, tags',
                format: 'json',
                nojsoncallback: 1,
            },
        }).then(response => {
            setIsloading(false);
            setloadedPhotos(response.data.photos.photo);
            
            console.log(response.data.photos.photo);
        });

    }, []);

    return (
        <Aux>
            <MainNav />
            <Layout>
                {isLoading ? (
                    <div>
                        Loading
                    </div>
                ) : (
                    <ul>
                        {
                        loadedPhotos.map(photo => (
                            <li key={photo.id}>
                                <Card>
                                    <div>
                                        <img src={photo.url_n} alt={photo.title} />
                                    </div>
                                    <div>
                                        <h3>{photo.title}</h3>
                                        <h4>{photo.owner_name}</h4>
                                    </div>
                                    <div>
                                        {photo.description._content}
                                    </div>
                                    <div>
                                        {photo.tags}
                                    </div>
                                </Card>
                            </li>
                        ))
                        }
                    </ul>
                )}
            </Layout>
        </Aux>
    )
}

export default App;
