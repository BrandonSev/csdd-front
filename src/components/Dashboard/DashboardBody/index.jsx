import React from 'react'
import "./DashboardBody.css"

function DashboardBody({children}) {
  return (
    <div className='dashboard-body'>
      {children}
    </div>
  )
}

export default DashboardBody