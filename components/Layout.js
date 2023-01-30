import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <h1>
            <span>JUST ADD</span>
            <span>MARMITE</span>
          </h1>
          <h2>SPREAD THE JOY</h2>
        </Link>
      </header>
      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright &copy; 2023 just add marmite ;)</p>
      </footer>
    </div>
  );
};

export default Layout;
