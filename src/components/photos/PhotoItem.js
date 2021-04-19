import Card from '../ui/Card';
import classes from './PhotoItem.module.css';

function PhotoItem(props) {
    return (
        <li key={props.id} className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image_url} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <h4>{props.author}</h4>
                </div>
                <div className={classes.content}>
                    {props.description}
                </div>
                <div className={classes.content}>
                    {props.tags}
                </div>
            </Card>
        </li>
    );
}

export default PhotoItem;