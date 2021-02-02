import updatePreferences from './updatePreferences';

let preferences

export default function top({zise = '', color = '', font = '', descargacomp = '', descargaunit = '', tema = ''}){
  const {id} = JSON.parse(localStorage.getItem('usuarioActual'));
  preferences = JSON.parse(localStorage.getItem('configActual'));
  const jsondata = {
    zise: (zise === '') ? preferences.zise : zise,
    color: (color === '') ? preferences.color : color,
    font: (font === '') ? preferences.font : font,
    descargacomp: (descargacomp === '') ? preferences.descargacomp : descargacomp,
    descargaunit: (descargaunit === '') ? preferences.descargaunit : descargaunit,
    tema: (tema === '') ? preferences.tema : tema,
    idpreferencias: preferences.idpreferencias,
    iduserpreferences: id
  }
  updateLocalstorage(jsondata)
}

function updateLocalstorage(jsondata){
  localStorage.setItem('configActual', JSON.stringify(jsondata));
  updatePreferences()
}