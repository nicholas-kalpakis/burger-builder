import React, { useEffect, useState} from 'react';
import {firebaseApp} from '../firebase';

export const AuthContext = React.createContext();


export const AuthProvider = ({children}) => {
	const [currentUser, setCurentUser] = useState(null);

	useEffect(() => {
		firebaseApp.auth().onAuthStateChanged((user) => {
			setCurentUser()
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				currentUser
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};