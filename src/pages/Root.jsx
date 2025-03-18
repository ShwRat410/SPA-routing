import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationPage from '../components/MainNavigation'


export default function RootLayout() {
  return (
    <div>
        <NavigationPage></NavigationPage>
        <Outlet />
    </div>
  )
}
