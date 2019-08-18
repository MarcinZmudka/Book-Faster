const Register_engine = (user) => {
    createUser(user); 
}

const createUser = (user) => {
    user.firebase
    .createUserWithEmailAndPassword(user.login, user.password)
    .then(authUser => {
      var firebaseUser = user.firebase.auth.currentUser;
      firebaseUser
        .sendEmailVerification().then(() => {
        }).catch(err => {
          console.log(err);
        });
        createDoc(user);
    })
    .catch(err => {
      user.setError(err.message);
    });
}
const createDoc = (user) => {
    let db = user.firebase.getDB();
    db.collection("users").doc(user.login).set({
        name: user.name,
        login: user.login,
        hotel: user.hotel,
        place: user.place
    })
    .then(function() {
        user.setUserAuth(true); 
        user.setUserInfo({
            name: user.name,
            hotel: user.hotel,
            place: user.place,
        });
        user.props_history.push("/compare");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

export default Register_engine;