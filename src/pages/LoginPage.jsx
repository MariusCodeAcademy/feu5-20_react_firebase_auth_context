import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';

function LoginPage() {
  function loginFire({ email, password }) {
    // login with fire base

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('user ===', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage ===', errorMessage);
      });
    // https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
  }
  return (
    <div className="container">
      <h1>LoginPage</h1>
      <p>This is LoginPage</p>

      <LoginForm onLogin={loginFire} />
    </div>
  );
}

export default LoginPage;
