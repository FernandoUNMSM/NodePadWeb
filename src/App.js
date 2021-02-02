import './App.css';
import { Route } from 'wouter';
import Home from './pages/home/home'
import EditorHome from './pages/editor/editor'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Entrada from './pages/entrada/entrada'
import Vision from './pages/vision/vision'
import Mision from './pages/mision/mision'
import Proposito from './pages/proposito/proposito'
import Contacto from './pages/contacto/contacto'
import { UserContextProvider } from './context/userContext'
function App() {
  return (
    <>
      <UserContextProvider>
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
      </UserContextProvider>
      <Route
        component={Entrada}
        path="/entrada"
      />
      <Route
        component={Mision}
        path="/mision"
      />
      <Route
        component={Vision}
        path="/vision"
      />
      <Route
        component={Proposito}
        path="/proposito"
      />
      <Route
        component={Entrada}
        path="/entrada"
      />
      <Route
        component={Mision}
        path="/mision"
      />
      <Route
        component={Vision}
        path="/vision"
      />
      <Route
        component={Proposito}
        path="/proposito"
      />
      <Route
        component={Contacto}
        path="/contacto"
      />
    </>
  );
}

export default App;
