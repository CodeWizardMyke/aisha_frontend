import React from 'react'

import './Home.css'
import AsideMenu from '../../components/asideMenu/AsideMenu';
import QuickAcess from '../../components/panel/QuickAcess';

function Home() {
  return (
    <div className='content HomePage'>
      <AsideMenu />
      <QuickAcess />
    </div>
  )
}

export default Home;
