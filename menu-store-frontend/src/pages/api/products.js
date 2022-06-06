import {db} from '../../app/firebase/firebase'

export default async function (req, res){
    if(req.method === 'GET'){
        const snapshot = await db.collection('products').get()
        const docs = await snapshot.docs
        const products = docs.map(doc => {
            return {id: doc.id, ...doc.data()}
        })
        res.status(200).json([...products])
    }else {
        res.status(404).json({message: `Method ${req.method} is invalid!`})
    }
}