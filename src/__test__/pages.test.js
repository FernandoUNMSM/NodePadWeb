import { render, screen } from '@testing-library/react';
import Home from '../pages/home/home'
import EditorHome from '../pages/editor/editor'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Entrada from '../pages/entrada/entrada'
import Vision from '../pages/vision/vision'
import Mision from '../pages/mision/mision'
import Proposito from '../pages/proposito/proposito'


test('Home renderizado', ()=>{
  render(<Home />);
  // const linkElement = screen.getByText(/NodePad Web/i);
  const linkElement = screen.getByText(/NodePad Web/,{selector: 'h1'})
  expect(linkElement).toBeInTheDocument();
})

test('Editor renderizado', ()=>{
  render(<EditorHome />);
  // const linkElement = screen.getByText(/NodePad Web/i);
  const linkElement = screen.getByTitle(/editorContainer/)
  expect(linkElement).toBeInTheDocument();
})

test('Login renderizado', () => {
  render(<Login />);
  // const linkElement = screen.getByText(/NodePad Web/i);
  const linkElement = screen.getByText(/Iniciar Sesion/, { selector: 'h1' })
  expect(linkElement).toBeInTheDocument();
});

test('Register renderizado', ()=>{
  render(<Register />);
  // const linkElement = screen.getByText(/NodePad Web/i);
  const linkElement = screen.getByText(/Registrate/,{selector: 'h1'})
  expect(linkElement).toBeInTheDocument();
})

test('Entrada renderizado', ()=>{
  render(<Entrada />);
  // const linkElement = screen.getByText(/NodePad Web/i);
  const linkElement = screen.getByText(/Editor de Codigo Notepad/,{selector: 'h1'})
  expect(linkElement).toBeInTheDocument();
})

test('Vision renderizado', ()=>{
  render(<Vision />);
  // const linkElement = screen.getByText(/NodePad Web/i);
  const linkElement = screen.getByText(/Vision/,{selector: 'h2'})
  expect(linkElement).toBeInTheDocument();
})

test('Mision renderizado', ()=>{
  render(<Mision />);
  // const linkElement = screen.getByText(/NodePad Web/i);
  const linkElement = screen.getByText(/Mision/,{selector: 'h2'})
  expect(linkElement).toBeInTheDocument();
})

test('Proposito renderizado', ()=>{
  render(<Proposito />);
  // const linkElement = screen.getByText(/NodePad Web/i);
  const linkElement = screen.getByText(/Proposito/,{selector: 'h2'})
  expect(linkElement).toBeInTheDocument();
})




















localStorage.setItem("usuarioActual", JSON.stringify(
  {
    "id": 761,
    "nombre": "mona",
    "apellido": "mona",
    "usuario": "mona",
    "email": "mona",
    "password": "$2a$10$4a1MA1q0.7RUg7RpBFJvqeUwivC4CUH1eEgOURwLHe6XRie1ESM6q",
    "image": null
  }
))

export function setupIntersectionObserverMock({
  root = null,
  rootMargin = '',
  thresholds = [],
  disconnect = () => null,
  observe = () => null,
  takeRecords = () => null,
  unobserve = () => null,
} = {}) {
  class MockIntersectionObserver {
    constructor() {
      this.root = root;
      this.rootMargin = rootMargin;
      this.thresholds = thresholds;
      this.disconnect = disconnect;
      this.observe = observe;
      this.takeRecords = takeRecords;
      this.unobserve = unobserve;
    }
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver
  });
}
beforeEach(() => {
  setupIntersectionObserverMock()
})