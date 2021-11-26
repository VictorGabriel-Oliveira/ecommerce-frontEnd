
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { createContext, useState } from 'react'
import { auth } from '../services/firebase'

const authContex = createContext()



function AuthProvider({children}){
    const [user,setUser] = useState({})
    
    async function singWithGoogle(){

        const provide = new GoogleAuthProvider()

        const result = await signInWithPopup(auth,provide)
        setUser(result.user)
    }

    

    return (
        <authContex.Provider value={{singWithGoogle,user}}>
            {children}
        </authContex.Provider>
    )
}

export { AuthProvider ,
        authContex
     }