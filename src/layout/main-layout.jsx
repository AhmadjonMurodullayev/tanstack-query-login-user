import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { loadState } from '../config/store';

export default function MainLayout() {
  const user = loadState("userData");
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
