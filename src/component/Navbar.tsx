function Navbar() {
  return (
    <div className="NavbarDiv">
      <div className="AppLogo">
        <img src="./images/logo.png" className="logo" />
        <div className="NavbarLocation">
          <p className="Text">
            <img src="./images/location.png" />
            Update
            <br /> <span>Location</span>
          </p>
        </div>
        <div className="NavbarTextArea">
          <select>
            <option selected>All</option>
            <option>Mouse</option>
            <option>keyboard</option>
          </select>
          <input type="text" placeholder="Search here" />
          <img src="./images/search.png" />
        </div>
        <div className="NavbarCart">
          <img src="./images/cart.png" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
