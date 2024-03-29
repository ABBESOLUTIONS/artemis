import { UserModel } from "../../models/UserModel";
import * as auth from "./auth";

const createUserWithEmailAndPassword = (email: string, pwd: string) => {
    return auth.createUserWithEmailAndPassword(auth.auth, email, pwd).then(({ user }) => {
        return user.toJSON() as UserModel;
    });
};
const signInWithEmailAndPassword = (email: string, pwd: string) => {
    return auth.signInWithEmailAndPassword(auth.auth, email, pwd).then(({ user }) => {
        return user.toJSON() as UserModel;
    });
};
const signOut = () => auth.signOut(auth.auth);
const getCurentUser = () => {
    return new Promise<UserModel | null>((resolve) => {
        auth.onAuthStateChanged(auth.auth,(user) => {
            resolve(user?.toJSON() as UserModel);
        });
    });
};

const sendPasswordResetEmail = (email: string) => {
    return auth.sendPasswordResetEmail(auth.auth, email);
};
const updatePassword = (oobCode: string | null, pwd: string) => {
    auth.confirmPasswordReset(auth.auth, oobCode!, pwd).then(() => {
        console.log("okkkk");
    });
};
const updateEmail = (email: string) => {
    // auth.onAuthStateChanged(auth.auth, (user) => {
    //     auth.updateEmail(user!, email).catch(err => {
    //         if(err.code = "auth/invalid-email")
    //             console.log("Invalid email");
    //         else
    //             console.log("An error has occurred. Please log back in before");
    //     });
    // });
};
const sendEmailVerification = () => {
    return new Promise<boolean>((resolve) => {
        auth.onAuthStateChanged(auth.auth,(user) => {
            if(user) {
                console.log(user);
                auth.sendEmailVerification(user).then(() => {
                    console.log("sended");
                    resolve(true);
                }).catch(err => {
                    console.log(err);
                    resolve(false);
                });
            }
            else
                resolve(false);
        });
    });
};

export { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, getCurentUser, updatePassword, updateEmail, sendEmailVerification  };