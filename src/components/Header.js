import logo from "../images/logo/logo-around.png";
function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Logo de Around" className="header-logo" />
        <hr className="header-line" />
      </header>
    </>
  );
}
export default Header;
