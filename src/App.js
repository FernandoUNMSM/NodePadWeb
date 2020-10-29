import './App.css';
import { Route } from 'wouter';
import Home from './pages/home/home'
import EditorHome from './pages/editor/editor'
function App() {
  return (
    <>
      <Route
        component={EditorHome}
        path="/editor"
      />
      <Route
        component={Home}
        path="/home"
      />
    </>
  );
}

export default App;
