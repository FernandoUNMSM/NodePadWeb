import './App.css';
import { Route } from 'wouter';
import Home from './pages/home/home'
import EditorHome from './pages/editor/editor'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Entrada from './pages/entrada/entrada'
function App() {
  return (
    <>
      <Route
        component={EditorHome}
        path="/editor"
      />
      <Route
        component={Home}
        path="/"
      />
      <Route
        component={Login}
        path="/login"
      />
      <Route
        component={Register}
        path="/register"
      />
      <Route
        component={Entrada}
        path="/entrada"
      />
    </>
  );
}

export default App;
