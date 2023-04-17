import ListComments from './ListComments';
import NewComment from './NewComment';
import './CommentBlock.scss';

function CommentBlock({ postId }) {
  // pariusim komentarus
  console.log('postId ===', postId);
  return (
    <div className="commentBlock">
      <NewComment />
      <ListComments />
    </div>
  );
}

export default CommentBlock;
