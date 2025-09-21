import React from 'react'
import TopHeader from '../TopHeader/TopHeader'
import MainHeader from '../MainHeader/MainHeader';
const Header = () => {
  return (
    <header id="header-section" className="header-section">
      <TopHeader />
      <div>
        <MainHeader />
      </div>
    </header>
  );
}

export default Header
