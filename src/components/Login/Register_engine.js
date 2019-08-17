const Register_engine = (firebase, name, login, password1, hotel, place, setError, setUserAuth) => {
    createUser(firebase, name, login, password1, setUserAuth, setError);
    createDoc(firebase, login, hotel, place);
}

const createUser = (firebase, name, login, password, setUserAuth, setError) => {
    firebase
    .createUserWithEmailAndPassword(login, password)
    .then(authUser => {
      setUserAuth(true); 
      var user = firebase.auth.currentUser;
      user
        .sendEmailVerification()
        .then(() => {
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      setError(err.message);
    });
}
const createDoc = (firebase, login, hotel, place) => {
    let db = firebase.getDB();
    db.collection("users").doc(login).set({
        login: login,
        hotel: hotel,
        place: place
    })
    .then(function() {
        //console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}
export default Register_engine;