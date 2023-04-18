import './styles/reset.css';
import './styles/App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/layout/Header';
import Feedback from './components/ui/feedback/Feedback';
import PostsPage from './pages/PostsPage';
import AddPostsPage from './pages/AddPostpage';
import SinglePostPage from './pages/SinglePostPage';
import { Toaster } from 'react-hot-toast';
import { useAuthCtx } from './store/AuthProvider';

function App() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <div className="">
      <Toaster />
      <Header />
      <Feedback />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* apsaugotas route */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to={'/profile'} /> : <LoginPage />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/new" element={<AddPostsPage />} />
        <Route path="/posts/:postUid" element={<SinglePostPage />} />
      </Routes>
    </div>
  );
}
export default App;
