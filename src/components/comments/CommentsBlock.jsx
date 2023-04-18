import ListComments from './ListComments';
import NewComment from './NewComment';
import './CommentBlock.scss';
import { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { toast } from 'react-hot-toast';

function CommentBlock({ postId }) {
  // pariusim komentarus

  const [commentsArr, setCommentsArr] = useState([]);
  const [commetsCollRef, setCommetsCollRef] = useState({});
  const [commentTrigger, setCommentTrigger] = useState(false);

  useEffect(() => {
    async function getCommentsAboutPost() {
      // reference to a post

      const docRef = doc(db, 'posts', postId); // reference to collection inside post

      const commentsCollRef = collection(docRef, 'comments'); // query
      setCommetsCollRef(commentsCollRef);
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
  }, [commentTrigger]);

  async function addNewCommentOnFire(newCommentObj) {
    console.log('newCommentObj ===', newCommentObj);
    try {
      const result = await addDoc(commetsCollRef, newCommentObj);
      console.log('result ===', result);
      toast.success('comment added');
      setCommentTrigger(!commentTrigger);
    } catch (error) {
      console.warn('error ===', error);
    }
  }

  console.log('postId ===', postId);

  return (
    <div className="commentBlock">
      <NewComment onNewComment={addNewCommentOnFire} />
      <ListComments items={commentsArr} />
    </div>
  );
}

export default CommentBlock;
