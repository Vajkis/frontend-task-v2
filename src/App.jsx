import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/user' element={<h1>User</h1>} />
    </Routes>
  );
}

export default App;
