import firebase from 'firebase';
import {ref, firebaseAuth } from '../Config/Constants';

export default  function auth () {
  return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
};

export function checkIfAuthed (store) {
  return store.getState().isAuthed
}

export function logout () {
  firebaseAuth().signOut();
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}`)
  .set(user)
  .then(() => user);
}
