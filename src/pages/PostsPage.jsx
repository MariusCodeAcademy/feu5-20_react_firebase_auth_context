import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useEffect, useState } from 'react';
import { useAuthCtx } from '../store/AuthProvider';
import SinglePost from '../components/posts/SinglePost';
import Grid from '../components/ui/grid/Grid';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function PostsPage() {
  const { ui } = useAuthCtx();
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    async function getPosts() {
      // norim gauti postus
      let docsPromise;
      try {
        // isrikiuoti pagal title
        let q = query(collection(db, 'posts'), orderBy('title'));
        // gauti tik james@bond.com postus
        // q = query(
        //   collection(db, 'posts'),
        //   where('author', '==', 'james@bond.com'),
        // );
        docsPromise = getDocs(q);
        const querySnapshot = await docsPromise;
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
        // toast.success('posts loaded');
      } catch (error) {
        console.warn('getPosts', error.code, error.message);
        ui.showError('Tik registruotiems vartotojams');
        toast.error('Ivyko klaida');
      }
      toast.promise(docsPromise, {
        loading: 'Loading',
        success: 'Post atvyko',
        error: 'klaida gaunant posts',
      });
    }
    getPosts();
  }, []);

  return (
    <div className="container">
      <h1>PostsPage</h1>
      <p>This is PostsPage</p>
      {/* map over postsArr and display title and body of each post */}
      <Grid className="unlisted" ul cols={2}>
        {postsArr.map((pObj) => (
          <SinglePost key={pObj.uid} item={pObj} />
        ))}
      </Grid>
    </div>
  );
}

export default PostsPage;
