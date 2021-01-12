import React, {useState, useContext, useEffect} from 'react';
import './reciente.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faTrash, faGripLines, faTh } from '@fortawesome/free-solid-svg-icons'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import FileContext from './../../context/fileContext'
import deleteFile from './../../services/deleteFile'

function Reciente({mostrarDatos, leng, iconi, list, setList, loader, setIdfileHtml, setIdfileCss, setIdfileJs}) {
  const [layout, setLayout] = useState(true)
  //true = lines, false = grid

  const { fileContent, setFileContent } = useContext(FileContext)
  // setFileContent({file: {}, nombre: 'nombre', len:leng})
  const [change, setChange] = useState(true)

	const cambiarlayout1 = () => {
		setLayout(true)
	}
	const cambiarlayout2 = () => {
		setLayout(false)
  }
  const changeFileState = (evt) => {
		let indexFile = evt.target.parentNode.id
		verifyLen(leng, indexFile);
		mostrarDatos();
		setFileContent({ file: list[indexFile], nombre: 'nombre', len: leng })
	}

	const verifyLen = (len, indexFile) =>{
		if(len === 'html'){
			setIdfileHtml(list[indexFile].idhtml)
		}else if(len === 'css'){
			setIdfileCss(list[indexFile].idcss)
		}else if(len === 'js'){
			setIdfileJs(list[indexFile].idjs)
		}
  }
  const deleteArchive = (evt) => {
		let idfile
		if(leng === 'html'){
			idfile = list[evt.target.parentNode.id].idhtml
		}else if(leng === 'css'){
			idfile = list[evt.target.parentNode.id].idcss
		}else if(leng === 'js'){
			idfile = list[evt.target.parentNode.id].idjs
		}

		deleteFile({ leng: leng, id: idfile })
			.then(res => {
        console.log(res)
        actualizarList(list, idfile)
      })
  }

  const actualizarList = (list, id)=>{
    let itemFind = list.find((lists) => lists.idhtml === id)
    let indexFind = list.indexOf(itemFind)
    let itemRemove = list.splice(indexFind,1)
    setList(list)
    setChange(!change)
  }

  useEffect(() => {
    if(fileContent.file.nombre === undefined){
      if(leng === 'html'){
        setIdfileHtml(null)
      }else if(leng === 'css'){
        setIdfileCss(null)
      }else if(leng === 'js'){
        setIdfileJs(null)
      }
    }
  },[fileContent])

  return (
    <>
      <div className="recienteSup">
        <p>Reciente</p>
        <div className="recienteIcons">
          <FontAwesomeIcon icon={faGripLines} className={(layout) ? 'recienteLayout focusL' : 'recienteLayout'} onClick={cambiarlayout1} />
          <FontAwesomeIcon icon={faTh} className={(!layout) ? 'recienteLayout focusL' : 'recienteLayout'} onClick={cambiarlayout2} />
        </div>
      </div>
      {(loader)
        ?
        <div className="spinnerContainer">
          <div className="spinner"></div>
        </div>
        : <>
          <div className="filesContainerSup">
            <PerfectScrollbar className="scrollbar">
              <div className={(layout) ? 'filesContainer' : ' filesContainer grid'}>
                {list.map((value, index) => {
                  return (
                    <div className="datesLeftMed" key={index}>
                      <div className="datesLeftMed1" id={index} >
                        <FontAwesomeIcon icon={iconi} className="datesIconS" />
                        <h2 className="datesH2" id={index} onClick={changeFileState} >{value.nombre}</h2>
                      </div>
                      <div className="datesIcons">
                        <div className="datesLeftMed2" id={index}>
                          <FontAwesomeIcon icon={faFileCode} className="datesIconM" onClick={changeFileState} id={index} />
                        </div>
                        <div className="datesLeftMed2" id={index} >
                          <FontAwesomeIcon icon={faTrash} className="datesIconM" id={index} onClick={deleteArchive} />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </PerfectScrollbar>
          </div>
        </>
      }
  </>
  )
}
export default Reciente