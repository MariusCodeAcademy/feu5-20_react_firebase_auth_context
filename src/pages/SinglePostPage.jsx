import { doc, getDoc, collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import Card from '../components/ui/card/Card';
import CommentBlock from '../components/comments/CommentsBlock';

function SinglePostPage() {
  const { postUid } = useParams();
  const navigate = useNavigate();
  const [postObj, setPostObj] = useState({});
  console.log('postUid ===', postUid);

  // gauti id is parametru (react router)
  useEffect(() => {
    async function getSingleDoc() {
      const docRef = doc(db, 'posts', postUid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        setPostObj(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!');
      }
    }
    getSingleDoc();
  }, []);
  // parisiusti posta is posts //https://firebase.google.com/docs/firestore/query-data/get-data?hl=en&authuser=0#get_a_document

  return (
    <div className="container">
      <Card>
        <h1>{postObj.title}</h1>
        <p>This is SinglePostPage</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </Card>
      {/* Comments Block */}
      <CommentBlock postId={postUid} />
    </div>
  );
}

export default SinglePostPage;
