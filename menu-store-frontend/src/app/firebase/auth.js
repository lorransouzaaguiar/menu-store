import { getUserData } from "./data"
import { auth, db } from "./firebase"

export async function signIn(email, password, dispatch){
    try{
        await auth.signInWithEmailAndPassword(email, password)
        if(auth.currentUser.uid){
            dispatch({reducer: 'USER', type: 'SIGNIN', payload: auth.currentUser})
            await getUserData(dispatch)
        }else dispatch({reducer: 'USER', type: 'SIGNIN', payload: undefined})
    }catch(err){
        dispatch({reducer: 'USER', type: 'SIGNIN', payload: undefined})
    }
}

export async function signUp(user, dispatch){
    try{
        await auth.createUserWithEmailAndPassword(user.email, user.password)
        if(auth.currentUser.uid){
            await db.collection('users').doc(auth.currentUser.uid).set({...user})
            dispatch({reducer: 'USER', type: 'SIGNIN', payload: auth.currentUser})
            await getUserData(dispatch)
        }
    }catch(err){
        console.log(err)
        return err
    }     
}

export async function signOut(dispatch){
    try{
      await auth.signOut()
      if(!auth.currentUser){
        dispatch({reducer: 'USER', type: 'SIGNOUT', payload: undefined})
      }
    }catch(err){
        console.log(err)
    }
}