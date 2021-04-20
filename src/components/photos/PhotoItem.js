import Card from '../ui/Card';
import classes from './PhotoItem.module.css';

function PhotoItem({ id, image_url, title, owner, author, description, tags }) {
    console.log(tags);
    return (
        <li key={id} className={classes.item}>
            <Card>
                <div className={classes.image} style={{backgroundImage: `url(${image_url})`}}></div>
                <div className={classes.head}>
                    <h3><a href={`https://www.flickr.com/photos/${owner}/${id}`} target="_blank" rel="noreferrer">{title.substring(0, 50)}</a></h3>
                    <h4><a href={`https://www.flickr.com/photos/${owner}`} target="_blank" rel="noreferrer">{author}</a></h4>
                </div>
                {description ? (
                <div className={classes.description}>
                    Description: {description.substring(0, 50)}
                </div>
                ) : null}
                {tags ? (
                <div className={classes.tags}>
                    {tags}
                </div>
                ) : null}
            </Card>
        </li>
    );
}

export default PhotoItem;