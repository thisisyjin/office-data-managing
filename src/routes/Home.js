import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "../assets/user-icon.svg";
import Button from "../components/Button";
import Logo from "../components/Logo";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="hidden">Home</h1>
        <Logo />
      </header>
      <nav>
        <h2 className="hidden">Select Menu</h2>
        <div className="material-nav">
          <Link to="/material">자재 관리</Link>
        </div>
        <div className="as-nav">
          <Link to="/as">AS 내역</Link>
        </div>
      </nav>
      <aside>
        <UserIcon />
        <strong>user1234</strong>
        <Button text="로그아웃" />
      </aside>
    </div>
  );
}
export default Home;
