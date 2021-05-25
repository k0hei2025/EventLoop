import { MongoClient} from 'mongodb'
const newsLetter=async(req,res)=>{

if (req.method ==='POST'){
               const userEmail = req.body.email;

               if (!userEmail || !userEmail.includes('@') ){
                              res.status(422).json({message : 'Invalid email address'})
                              return;
               }

  const client =  await MongoClient.connect('mongodb+srv://k0hei:ShUQZtP1OWidNfG3@cluster0.lodud.mongodb.net/newsletter?retryWrites=true&w=majority')
  
 const db = client.db();

 await db.collection('emails').insertOne({email:userEmail})

 client.close();

               console.log(userEmail);
           res.status(201).json({message : 'Signed Up'}); 
}


}
export default newsLetter
