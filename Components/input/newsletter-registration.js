import {useRef, useState}  from 'react'
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  
  
  const [state , setState ] = useState('');
 
  function registrationHandler(event) {
    event.preventDefault();
     
  
  fetch('/api/newsLetter',
  {
    method:'POST',
    body:JSON.stringify({email:state}),
    headers:{
      'Content-Type' : 'application/json',  
    },
  }
  ).then((data)=>{
   return data.json();
  })
  .then((resData)=>{
    return console.log(resData);
  })
   

  } 

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            value={state}
            onChange={(event)=>{
              setState(event.target.value)
            }}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
