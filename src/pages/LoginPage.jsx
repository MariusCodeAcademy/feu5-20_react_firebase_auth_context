import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import LoginForm from '../components/auth/LoginForm';
import { auth, googleProvider } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const { login, ui, setIsLoading } = useAuthCtx();
  function loginFire({ email, password }) {
    // start loading
    ui.showLoading();
    setIsLoading(true);
    // login with fire base

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('user ===', user);
        // login(user);
        setIsLoading(false);
        navigate('/profile');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage ===', errorMessage);
        ui.showError('Neteisingas email arba slaptazodis');
        setIsLoading(false);
      });
    // https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
  }

  function loginWithGoogle() {
    //
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log('user ===', user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn('errorMessage ===', errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <div className="container">
      <h1>LoginPage</h1>
      <p>This is LoginPage</p>

      <button onClick={loginWithGoogle}>Log in with Google mail</button>

      <LoginForm onLogin={loginFire} />
    </div>
  );
}

export default LoginPage;
