import Head from 'next/head';
import Navbar from './Navbar';

const Layout = () => (
  <div>
    <Head>
      <title>Pbbbt</title>
    </Head>
    <Navbar />
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;