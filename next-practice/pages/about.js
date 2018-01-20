import Link from 'next/link';

const About = () => (
  <div>
    <h1>About me.</h1>
    <p>I'm not batman</p>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default About;