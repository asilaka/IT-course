import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="head">
            <h1 className="logo">IT-Academy</h1>

            <nav>
              <a href="#">Course</a>
              <a href="#">Master-Class</a>
              <a href="#">Filials</a>
              <a href="#">Contacts</a>
            </nav>

            <button className="header-btn">Позвонить</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
