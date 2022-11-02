function logout()
{
    firebase.auth().signOut();
    window.location.href="login.html";
}