import classes from './comment-list.module.css';

function CommentList(props) {

 const {items} = props;

  return (
    <ul className={classes.comments}>
      
       {items.map((key)=>{ 
        return (
      <li key={key._id}>
        <p>{key.text}</p>
        <div>
          By <address>{key.name}</address>
        </div>
      </li>
     
        
       )})}
     
    </ul>
  );
}

export default CommentList;
