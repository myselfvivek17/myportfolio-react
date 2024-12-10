import "./Header.css";
function Header() {
  return(
    <nav className="nav">
      <div>
        <span className="title">VIVEK.A</span>
      </div>
      <div className="align">
      <a href='#home'>Home</a>
      <a href='#about'>About</a>
      <a href='#projects'>Projects</a>
      <a href='#contact' id="bg">Contact</a>
    </div>
    </nav>
  )
}

export default Header