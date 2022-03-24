import React from 'react'
import Dashboard from '.'
import DashboardBody from './DashboardBody'
import DashboardHeader from './DashboardHeader'
import DashboardMenu from './DashboardMenu'

function DashboardPage() {
  return (
    <div>
      <Dashboard>
        <DashboardMenu />
        <DashboardHeader />
        <DashboardBody>
          <p>bfhjd</p>
        </DashboardBody>
      </Dashboard>
    </div>
  )
}

export default DashboardPage