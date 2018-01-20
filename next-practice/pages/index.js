import Link from 'next/link';

const Index = () => (
  <div>
    <h1>Welcome to my first Next.js Page</h1>
    <p>Just a basic application</p>
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

export default Index;