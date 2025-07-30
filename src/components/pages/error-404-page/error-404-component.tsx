import { useNavigate } from 'react-router-dom';
import './error-404-page.css';

export default function Error404Page() {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  return (
    <main id="error-404-page">
      <h2 className="h2-error-page">Error 404!</h2>
      <p className="p-error-page">Page not found.</p>
      <button className="error-page-btn" onClick={() => goHome()}>
        Back to Home page
      </button>
    </main>
  );
}
