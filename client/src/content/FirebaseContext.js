import React, { createContext} from 'react';
import FirebaseInstance from '../components/Firebase/Firebase';

export const FirebaseContext = createContext(null);

export const FirebaseProvider = props => {
    return(
        <FirebaseContext.Provider value={new FirebaseInstance()}>
            {props.children}
        </FirebaseContext.Provider>
    )

}