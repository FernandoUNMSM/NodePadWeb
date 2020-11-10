import React from 'react'
import { faDownload, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './writeBox.css'

function WriteBox({lan, setCode}) {

  const showPreview = (evt) => {
    let code = '';
    code = evt.target.value

		if (lan === 'HTML') {
			setCode(code)
    }
    else if (lan === 'CSS') {
			setCode(code)
    }
    else if (lan === 'JS'){
      setCode(code)
		}
  }
  const download = () => {
    if (lan === 'HTML') {
			var file = new File(["foo"], "foo.txt", {
        type: "text/plain",
      });
    }
    else if (lan === 'CSS') {
			var file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
    }
    else if (lan === 'JS'){
      var file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
		}
  }

  return (
    <>
      <div className="textarea">
        {/* <div className="menuTextarea">
          <p>{lan}</p>
          <div className="iconsTextarea">
            <FontAwesomeIcon icon={faDownload} className="icon"/>
            <FontAwesomeIcon icon={faUpload} className="icon"/>
          </div>
        </div> */}
        <textarea
          name={lan}
          placeholder={`${lan} Code`}
          onChange={showPreview}>
        </textarea>
      </div>
    </>
  )
}
export default WriteBox