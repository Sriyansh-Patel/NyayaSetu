// Header.jsx
import './css/header.css';
import { useSelector } from 'react-redux';
import Navbar1 from './Navbar';
import law1 from '../assets/law1.png';
import law2 from '../assets/law2.png';

const Header = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <>
      <Navbar1 />
      <div className={`header-main ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
       

        {/* Main Header Container */}
        <div className="header-container">
          <div className="header-split-layout">
            {/* Left Side with Law1 Background */}
            
            <div className="split-side left-side" style={{ backgroundImage: `url(${law1})` }}>
              <div className="side-content">
                <h2 className="main-heading">
                  FIND YOUR
                  <span className="highlight-text">LEGAL GUIDE</span>
                </h2>
                <p className="search-label">Search by Area of Law, Name, or City</p>
                <div className="button-group">
                  <button className="primary-btn">HIRE A LAWYER</button>
                  <button className="secondary-btn">FOR LAWYERS: JOIN US</button>
                </div>
              </div>
            </div>

            {/* Thunderbolt Divider */}
            <div className="thunderbolt-separator">
              <div className="thunderbolt-icon">
                <i className="fas fa-bolt"></i>
              </div>
            </div>

            {/* Right Side with Law2 Background */}
            <div className="split-side right-side" style={{ backgroundImage: `url(${law2})` }}>
              <div className="side-content">
                <div className="features-list">
                  <div className="feature-item">
                    <i className="fas fa-star"></i>
                    <span>Expertise</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-shield-alt"></i>
                    <span>Trust</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-rocket"></i>
                    <span>Efficiency</span>
                  </div>
                </div>
                <p className="description">
                  Connect with verified legal professionals tailored to your needs. 
                  Transparent, and accessible legal solutions await
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;