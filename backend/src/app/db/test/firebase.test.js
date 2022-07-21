import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import app from '../firebase'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

describe('testing firebase storage', () => {
    it('', async () => {
        try {
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(
                auth,
                'teste@gmail.com',
                'teste123'
            )

            if (userCredential.user) {
                console.log(userCredential)
                const storage = getStorage()
                const spaceRef = ref(storage, 'banner-cardapio.jpg')
                const url = await getDownloadURL(spaceRef)
                console.log(url)
            }
        } catch (e) {
            console.log(e)
        }
    })
})
