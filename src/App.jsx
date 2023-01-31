import './App.scss';
import { Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import User from "./components/User";
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('./components/Login'));
const User = lazy(() => import('./components/User'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </Suspense>
  );
}

export default App;
