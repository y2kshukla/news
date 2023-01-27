import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebase";

interface UserTypes {
  email: string | null;
  uid: string | null;
}

const AuthContext = createContext({});

export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({children}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState<UserTypes>({ email: null, uid: null });
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser({
            email: user.email,
            uid: user.uid,
            });
        } else {
            setUser({ email: null, uid: null });
        }
        });
        setLoading(false);

        return () => unsubscribe();
    }, []);

    const signUp = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = async () => {
        setUser({ email: null, uid: null });
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, signUp, signIn, logOut }}>
        {loading ? null : children}
        </AuthContext.Provider>
    );
};
