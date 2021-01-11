import { fireEvent, render, screen, cleanup } from '@testing-library/react';

import Dates from './../components/dates/dates';


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


test('Dates renderizado', async()=>{
  const n = render(<Dates dates={true}/>)

  // const linkElement = await screen.findByText('Documentos')
  console.log(n)
  // expect(linkElement).toBeInTheDocument();
})
