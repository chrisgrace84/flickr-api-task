import Card from '../ui/Card';
import classes from './PhotoItem.module.css';

function PhotoItem({ id, image_url, title, owner, author, description, tags }) {
    
    // Reduce title length
    const titleLength = title.length;
    const titleString = titleLength > 60 ? title.substring(0, 60) + ' ...' : title;

    // Reduce description length
    const descLength = description.length;
    const descString = descLength > 100 ? description.substring(0, 100) + ' ...' : description;

    // Reduce tags data
    const tagsArray = tags.split(' ').slice(0, 4); 
    const tagsString = tagsArray.join(', ');

    return (
        <li key={id} className={classes.item}>
            <Card>
                <div className={classes.image} style={{backgroundImage: `url(${image_url})`}}></div>
                <div className={classes.head}>
                    <h3><a href={`https://www.flickr.com/photos/${owner}/${id}`} target="_blank" rel="noreferrer">{titleString}</a></h3>
                    <h4>by <a href={`https://www.flickr.com/photos/${owner}`} target="_blank" rel="noreferrer">{author}</a></h4>
                </div>
                {description ? (
                <div className={classes.description}>
                    <span>Description:</span> {descString}
                </div>
                ) : null}
                {tags ? (
                <div className={classes.tags}>
                    <span>Tags:</span> {tagsString} ...
                </div>
                ) : null}
            </Card>
        </li>
    );
}

export default PhotoItem;