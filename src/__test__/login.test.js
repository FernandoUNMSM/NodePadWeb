import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import Login from './../pages/login/login'
import Editor from './../pages/editor/editor'
import App from './../App'
// import { screen } from '@testing-library/jest-dom'

test('Login renderizado', () => {
  render(<Login />);
  // const linkElement = screen.getByText(/NodePad Web/i);
  const linkElement = screen.getByText(/Iniciar Sesion/, { selector: 'h1' })
  expect(linkElement).toBeInTheDocument();
});

describe('Button enviado', () => {
  it('nyan', () => {
    const { getByText, rerender } = render(<Login />);
    const boton = screen.getByRole('button')
    const user = screen.getByAltText('nombreLogin')
    const password = screen.getByAltText('passwordLogin')

    fireEvent.change(user, { target: { value: 'mona' } })
    fireEvent.change(password, { target: { value: '123' } })
    fireEvent.click(boton)
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
    rerender(<Editor />)
    const title = screen.getByTitle(/editorContainer/)
    // console.log(title)
    expect(title).toBeVisible()
  })


  // const linkElement = screen.getByText(/NodePad Web/i);
});

















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

afterEach(cleanup)

beforeEach(() => {
  setupIntersectionObserverMock()
})