import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="header--logo">
        <img src="/assets/img/logo.png" alt="name" />
        <p>Aditya Kothari</p>
      </Link>
      <div className="header--nav-toggle">
        <span />
      </div>
    </header>
  );
};

export default Header;
