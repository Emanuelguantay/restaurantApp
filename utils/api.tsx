import * as firebase from 'firebase';

//TO DO: Mejorar logica
export const reauthenticate = (password:string) => {
    const user = firebase.auth().currentUser;
    const userFormatted = user? user.email? user.email.toString():'':' ';
    const credentials = firebase.auth.EmailAuthProvider.credential(userFormatted, password);
    const reauthenticate= credentials? user?.reauthenticateWithCredential(credentials): null;
    return reauthenticate;
}