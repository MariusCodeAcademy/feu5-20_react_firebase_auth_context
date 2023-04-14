import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useEffect, useState } from 'react';

function PostsPage() {
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    async function getPosts() {
      // norim gauti postus
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
    }
    getPosts();
  }, []);

  return (
    <div className="container">
      <h1>PostsPage</h1>
      <p>This is PostsPage</p>
      {/* map over postsArr and display title and body of each post */}
      <ul>
        <li>post 1</li>
        <li>post 1</li>
        <li>post 1</li>
        <li>post 1</li>
      </ul>
    </div>
  );
}

export default PostsPage;
