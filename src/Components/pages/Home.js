import React from 'react'
import Header from './Header'
import Sidebar from '../Sidebar'
import Post from './posts/Post';

function Home() {
  return (
    <div>
      <Header />
      <div className='flex'>
        <Post/>
        <Sidebar />
      </div>
    </div>
  );
}

export default Home