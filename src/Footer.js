import './Footer.css';
import { PiInstagramLogoFill, PiYoutubeLogoFill, PiFacebookLogoFill, PiLinkedinLogoFill, PiTwitterLogoFill} from 'react-icons/pi';

function Footer() {
  return (
    <div className="footer">
        <div className='row row-0'>
          <div className='col col-0'>
            <div className='section-title'>Bundle Bundies</div>
            <ul>
              <li>Why Us?</li>
              <li>Our Story</li>
              <li>Career</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='col col-1'>
            <div className='section-title'>Help Centre</div>
            <ul>
              <li>Question 1</li>
              <li>Question 2</li>
              <li>Question 3</li>
              <li>Question 4</li>
              <li>Question 5</li>
            </ul>
          </div>
          <div className='col col-2'>
            <div className='section-title'>Privacy & Safety</div>
            <ul>
              <li>Privacy Policy</li>
              <li>Content Policy</li>
              <li>Term & Conditions</li>
              <li>Disclaimer</li>
            </ul>
          </div>
          <div className='brand-logo'>
            <img src='img/temp/brand-logo.png'></img>
          </div>
        </div>
        <div className='section-title'>Start Sharing Money</div>
        <div className='row row-1'>
          <div className='download'>
            <div className='footer-app-links'>
              <img className='google-play-badge' alt='' src='img/app-store/google-play-badge.png'/>
              <img className='app-store-badge' alt='' src='img/app-store/app-store-badge.svg'/>
            </div>
          </div>
          <span className='social-media-links'>
            <PiInstagramLogoFill size={60}/>
            <PiYoutubeLogoFill size={60}/>
            <PiFacebookLogoFill size={60}/>
            <PiLinkedinLogoFill size={60}/>
            <PiTwitterLogoFill size={60}/>
          </span>
        </div>
        <div>© {new Date().getFullYear()} Bundle Bundies</div>
    </div>
  );
}

export default Footer;