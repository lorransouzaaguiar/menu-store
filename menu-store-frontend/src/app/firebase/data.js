import {db, auth} from './firebase'

export async function getUserData(dispatch) {
    try{
        const doc = await db.collection('users').doc(auth.currentUser?.uid).get()
        if(doc.exists){
            const data = doc.data()
            console.log(data)
            dispatch({reducer: 'USER', type: 'DATA', payload: data})
        }else return
    }catch(err) {
        console.log(err)
        dispatch({reducer: 'USER', type: 'DATA', payload: undefined})
    }
}

export async function updateUserData(user, dispatch){
    try {
        await db.collection('users').doc(auth.currentUser?.uid).set({...user})
        await getUserData(dispatch)
    }catch(err){
        return err
    }
}