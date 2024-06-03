import logo from "../images/logo/logo-around.png";
function Header({signText,email}) {
  return (
    <>
      <header>
        <div className="header">
        <img src={logo} alt="Logo de Around" className="header-logo" />
        <p className="header__subheader">{email}</p>
        <a className="header__subheader">{signText}</a>
        </div>
        <hr className="header-line"></hr>
      </header>
    </>
  );
}
export default Header;
