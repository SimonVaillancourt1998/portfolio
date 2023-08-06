// Header.tsx
import React from 'react';

interface HeaderProps {
  onAboutMeClick: () => void;
  onLinksClick: () => void;
}

const buttonStyle: React.CSSProperties = {
  fontFamily: 'Ubuntu, sans-serif', // Use the "Ubuntu" font
  fontSize: '22px',
  textDecoration: 'none',
  color: 'black',
  backgroundColor: 'transparent',
  padding: '8px 16px',
  // marginLeft: '5px',
  transition: 'color 0.3s ease',
};

const Header: React.FC<HeaderProps> = ({ onAboutMeClick, onLinksClick }) => {
  return (
    <div style={{ backgroundColor: '#d6a173', paddingRight: '20px', paddingTop:'8px' }}>
      <button
        type="button"
        style={{ ...buttonStyle, marginLeft: 0 }}
        onClick={onAboutMeClick}
        className="text-center"
      >
        About me
      </button>
      <button
        type="button"
        style={buttonStyle}
        onClick={onLinksClick}
        className="text-center"
      >
        Links
      </button>
      <a
        href="https://github.com/SimonVaillancourt1998"
        style={{
          ...buttonStyle,
          marginLeft: 'auto',
          textDecoration: 'none',
        }}
      >
        GitHub
      </a>
    </div>
  );
};

export default Header;
