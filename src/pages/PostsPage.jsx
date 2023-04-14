import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useEffect, useState } from 'react';
import { useAuthCtx } from '../store/AuthProvider';

function PostsPage() {
  const { ui } = useAuthCtx();
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    async function getPosts() {
      // norim gauti postus
      try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        const tempPosts = [];
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`);
          // console.log('doc.data() ===', doc.data());
          tempPosts.push({
            uid: doc.id,
            ...doc.data(),
          });
        });
        console.log('tempPosts ===', tempPosts);
        setPostsArr(tempPosts);
      } catch (error) {
        console.warn('getPosts', error.code, error.message);
        ui.showError('Tik registruotiems vartotojams');
      }
    }
    getPosts();
  }, []);

  return (
    <div className="container">
      <h1>PostsPage</h1>
      <p>This is PostsPage</p>
      {/* map over postsArr and display title and body of each post */}
      <ul>
        {postsArr.map((pObj) => (
          <li key={pObj.uid}>
            <h3>{pObj.title}</h3>
            <p>{pObj.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;
