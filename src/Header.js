import './Header.css';

function Header() {
  return (
    <div className="header">
        <img className='logo' src='img/temp/brand-logo.png'></img>
        <div className='tabs'>
            <a>Why Bundles?</a>
            <a>Help Centre</a>
            <a>Career</a>
            <a>Contact Us</a>
        </div>

    </div>
  );
}

export default Header;