import PhotoItem from './PhotoItem';
import classes from './PhotoList.module.css';

function PhotoList(props) {
    return (
        <ul className={classes.list}>
            {
            props.photoList.map(photo => (
                <PhotoItem 
                    key={photo.id}
                    id={photo.id}
                    title={photo.title}
                    image_url={photo.url_n}
                    description={photo.description._content}
                    author={photo.owner_name}
                    tags={photo.tags}
                />
            ))
            }
        </ul>
    );
}

export default PhotoList;