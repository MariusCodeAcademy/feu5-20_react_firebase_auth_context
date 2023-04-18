import ListComments from './ListComments';
import NewComment from './NewComment';
import './CommentBlock.scss';
import { useEffect, useState } from 'react';
import { collection, doc, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function CommentBlock({ postId }) {
  // pariusim komentarus

  const [commentsArr, setCommentsArr] = useState([]);

  useEffect(() => {
    async function getCommentsAboutPost() {
      // reference to a post

      const docRef = doc(db, 'posts', postId); // reference to collection inside post

      const commentsCollRef = collection(docRef, 'comments'); // query

      // Create a query against the collection.

      const q = query(commentsCollRef); // query returns comments
      // execute query
      const querySnapshot = await getDocs(q);
      const tempComments = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        // console.log(doc.id, ' => ', doc.data());
        // sudeti i tempComments
        tempComments.push({ uid: doc.id, ...doc.data() });
      });
      //setCommentsArr su gautu masyvu
      console.log('tempComments ===', tempComments);
      setCommentsArr(tempComments);
    }
    getCommentsAboutPost();
  }, []);

  console.log('postId ===', postId);

  return (
    <div className="commentBlock">
      <NewComment />
      <ListComments items={commentsArr} />
    </div>
  );
}

export default CommentBlock;
