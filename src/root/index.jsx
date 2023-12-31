import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import navbar from '../utils/navbar';
import Navbar from '../components/Navbar';

export default function Root () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {
            navbar.map(({ id, path, element }) => <Route key={id} path={path} element={element} />)
          }
        </Route>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='*' element={<h1>404 Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
