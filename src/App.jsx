import './App.scss';
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Background from './components/Background';

const Login = lazy(() => import('./components/Login'));
const User = lazy(() => import('./components/User'));

function App() {
  return (
    <>
      <Background />

      <Suspense>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
