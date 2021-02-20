import { render, screen, cleanup } from '@testing-library/react';
import { FileContextProvider } from './../context/fileContext'
import Cargar from './../components/cargar/cargar';
import Descarga from './../components/descarga/descarga';
import Dates from './../components/dates/dates';
import Eliminar from './../components/eliminarcuenta/eliminar';
import ErrorModal from './../components/errormodal/errormodal';
import Formato from './../components/formatoletra/formato';
import Fotoperfil from './../components/fotoPerfil/fotoperfil';
import Guardar from './../components/guardar/guardar';
import Imagen from './../components/imagen/imagen';
import InfoHeader from './../components/infoHeader/infoHeader';
import Informacion from './../components/informacion/informacion';
import MenuEditor from './../components/menuEditor/menuEditor';
import MenuHeader from './../components/menuHeader/menuHeader';
import Perfil from './../components/perfil/perfil';
import Preferences from './../components/preferences/preferences';
import Reciente from './../components/reciente/reciente';
import SelectLayout from './../components/selectLayout/selectLayout';
import SimpleSwitch from './../components/simpleSwitch/simpleSwitch';
import Switch from './../components/switch/switch';
import WriteBox from './../components/writeBox/writeBox';





test('Cargar renderizado', () => {
  render(<Cargar />)
  const element = screen.getByText(/Arrastra un fichero o haz click para selecciona una/)
  expect(element).toBeInTheDocument();
})



test('Dates funcional', () => {
  let dates = true

  render(<>
    <FileContextProvider>
      <Dates dates={dates} />
    </FileContextProvider>
  </>
  )
  //hh2
  const element = screen.getByTitle('datesContainer', { selector: 'div' })
  expect(element).toBeInTheDocument();
})



test('Descarga funcional', () => {
  render(<Descarga />)
  const element = screen.getByText(/Preferencias de Descarga/)
  expect(element).toBeInTheDocument();
})



test('Elminar funcional', () => {
  render(<Eliminar />)
  const element = screen.getByText(/Preferencias de Cuenta/)
  expect(element).toBeInTheDocument();
})



test('Formato funcional', () => {
  render(<Formato />)
  const element = screen.getByText(/Preferencias del Editor/)
  expect(element).toBeInTheDocument();
})



test('ErrorModal funcional', () => {
  render(<ErrorModal />)
  const element = screen.getByTitle('errormodalContainer')
  expect(element).toBeInTheDocument();
})



test('FotoPerfil funcional', () => {
  global.URL.createObjectURL = jest.fn();
  const formData = new FormData();
  formData.set('file', 'uwu')
  render(<Fotoperfil formData={formData} />)
  const element = screen.getByTitle('fotoPerfilContainer')
  expect(element).toBeInTheDocument();
})



test('Guardar funcional', () => {
  render(<>
    <FileContextProvider>
      <Guardar />
    </FileContextProvider>
  </>)
  const element = screen.getByTitle('guardarContainer')
  expect(element).toBeInTheDocument();
})



test('Imagen funcional', () => {
  render(<Imagen />)
  const element = screen.getByText(/Arrastra una imagen o haz click para selecciona una/)
  expect(element).toBeInTheDocument();
})



test('InfoHeader funcional', () => {
  render(<InfoHeader />)
  const element = screen.getByText(/El mejor editor de codigo para el desarrollo de paginas web./)
  expect(element).toBeInTheDocument();
})



test('Informacion funcional', () => {
  render(<Informacion />)
  const element = screen.getByText('https://github.com/FernandoUNMSM/NodePadWeb')
  expect(element).toBeInTheDocument();
})



test('MenuEditor funcional', () => {
  let code = { html: '' }
  render(<MenuEditor code={code} />)
  const element = screen.getByTitle('menuEditorContainer')
  expect(element).toBeInTheDocument();
})



test('MenuHeader funcional', () => {
  render(<MenuHeader />)
  const element = screen.getByTitle('menu-headerContainer')
  expect(element).toBeInTheDocument();
})



test('Perfil funcional', () => {
  render(<Perfil />)
  const element = screen.getByTitle('perfilContainer')
  expect(element).toBeInTheDocument();
})



test('Preferences funcional', () => {
  render(<Preferences preferences={true} />)
  const element = screen.getByTitle('PreferencesContainer')
  expect(element).toBeInTheDocument();
})



test('Reciente funcional', () => {
  render(
    <FileContextProvider>
      <Reciente list={[]} />
    </FileContextProvider>
  )
  const element = screen.getByTitle('recienteContainer')
  expect(element).toBeInTheDocument();
})



test('layout funcional', () => {
  render(<SelectLayout />)
  const element = screen.getByTitle('layout')
  expect(element).toBeInTheDocument();
})



test('SimpleSwitch funcional', () => {
  render(<SimpleSwitch />)
  const element = screen.getByTitle('simpleSwitch')
  expect(element).toBeInTheDocument();
})



test('Switch funcional', () => {
  render(<Switch />)
  const element = screen.getByTitle('switch')
  expect(element).toBeInTheDocument();
})



test('WriteBox funcional', () => {
  render(
    <FileContextProvider><WriteBox lan={'html'}/></FileContextProvider>)
  const element = screen.getByTitle('textarea')
  expect(element).toBeInTheDocument();
})


































localStorage.setItem("configActual", JSON.stringify(
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

afterEach(cleanup)

beforeEach(() => {
  setupIntersectionObserverMock()
})