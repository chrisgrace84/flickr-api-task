import PhotoItem from './PhotoItem';
import classes from './PhotoList.module.css';

function PhotoList({ photoList }) {
    return (
        <ul className={classes.list}>
            {
            photoList.map(photo => {
                const { id, title, url_n, description, owner, ownername, tags } = photo;

                return (
                    <PhotoItem 
                        key={id}
                        id={id}
                        title={title}
                        image_url={url_n}
                        description={description._content}
                        owner={owner}
                        author={ownername}
                        tags={tags}
                    />
                )})
            }
        </ul>
    );
}

export default PhotoList;