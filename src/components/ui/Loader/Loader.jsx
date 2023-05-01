import './Loader.scss';

function Loader({ show, text = 'Loading' }) {
  if (!show) return null;

  return (
    <div className="loader">
      <span className="text">{text}...</span>
      <span className="spinner"></span>
    </div>
  );
}

export default Loader;
