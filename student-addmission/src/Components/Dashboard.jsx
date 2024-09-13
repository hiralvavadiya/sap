import React from 'react'
import Main from './Main';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <>
        <div className='d-flex justify-content-between'>
          <Sidebar />
          <Main />
        </div>
    </>
  )
}

export default Dashboard