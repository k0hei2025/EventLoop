import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {

  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments , setComments] = useState([])

   useEffect(()=>{
    if (showComments){
    const handler = async()=>{
      const data = await fetch('/api/comments/'+eventId);
      const resData = await data.json();
      console.log(resData.comments)
      return setComments(resData.comments);
   }
   handler();
  } 
    
  }
  ,[showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
    fetch('/api/comments/'+eventId,{
      method:'POST',
      body:JSON.stringify(commentData),
      headers:{
       'Content-Type': 'application/json'
      }
    }).then((data)=>{
      return data.json()
    })
    .then((resData)=>{
      console.log(resData);
    })
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
