import './about-page.css';

export default function About() {
  return (
    <main id="about">
      <h2 className="h2-about">About</h2>
      <p className="p-about">
        The App created by{' '}
        <a
          href="https://github.com/MariyaShusharina/"
          target="_blank"
          rel="noreferrer"
        >
          Mariya Shusharina
        </a>
      </p>
      <p className="p-about">
        While studying on{' '}
        <a
          href="https://rs.school/courses/reactjs"
          target="_blank"
          rel="noreferrer"
        >
          React course
        </a>{' '}
        at The Rolling Scopes School.
      </p>
    </main>
  );
}
