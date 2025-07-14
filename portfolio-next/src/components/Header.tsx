import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <a className="header--logo">
          <img src="/assets/img/logo.png" alt="name" />
          <p>Aditya Kothari</p>
        </a>
      </Link>
      <div className="header--nav-toggle">
        <span />
      </div>
    </header>
  );
};

export default Header;
