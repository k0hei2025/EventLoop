import {MongoClient} from 'mongodb'


const commentHandler=async(req , res)=>{

               
const eventId = req.query.someid;

               const client =  await MongoClient.connect('mongodb+srv://k0hei:8dvGGEdw5DVUGjQc@cluster0.lodud.mongodb.net/events?retryWrites=true&w=majority')
  
              
              


  const someId = req.query.someid;

              if (req.method === 'POST') {
 
               const { name , email , text} = req.body;

               if (!email.includes('@') ||
                !name ||
                 name.trim() === '' || 
                 !text ||
                  text.trim() === ''){
                              
              res.status(422).json({  message : 'Invalid input'})
          return

               }
               console.log(email , name , text);
               const newComment = {
                              
                              eventId,
                                name , 
                            email , 
                            text,
                            
               }


               const db = client.db();
  
                   
            const result =   await db.collection('comments').insertOne(newComment)

            console.log(result);
               client.close();
              

               res.status(201).json({message : 'Added comment' , comment : newComment});
            
              }
              if (req.method === 'GET'){

               const db = client.db();

               const dummyList = await db.collection('comments').find().sort({_id: -1}).toArray();
res.status(200).json({comments : dummyList})
              }

}
export default commentHandler