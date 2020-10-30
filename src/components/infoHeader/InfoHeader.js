import React, { useEffect } from 'react'
import './InfoHeader.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

function InfoHeader() {
	useEffect(() => {
		const spans = document.querySelectorAll('.machine');
		const ptext = document.querySelectorAll('.codeText');
		// console.log(ptext.item(1).textContent)
		let i = 1
		// var tiempo = 3000
		const printSpans = setInterval(() => {
			let textLength = ptext.item(i).textContent.length
			let tiempo = textLength/10
			spans.item(i).classList.add('animationSpan')
			spans.item(i).style.animation = `machine ${tiempo}s steps(${textLength})`
			i++
			if (i === spans.length) {
				clearInterval(printSpans)
			}
		}, 3000)
	}, [])

	return (
		<>
			<div className="infoContainer">
				<div className="codeContainer">
					<div className="code">
						<p className="languageTitle">
							<FontAwesomeIcon icon={faCode} />
							<span> HTML</span></p>
						<br />
						<code>
							<p className="codeText">
								<span className="i">&#60;!</span>
								<span className="content">DOCTYPE html</span>
								<span className="i">&#62;</span>
								<span className="machine"> </span>
							</p>
							<p className="codeText">
								<span className="i">&#60;</span>
								<span className="tag">html</span>
								<span className="content"> lang="en"</span>
								<span className="i">&#62;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span className="i">&#60;</span>
								<span className="tag">head</span>
								<span className="i">&#62;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span className="i">  &#60;</span>
								<span className="tag">meta</span>
								<span className="atribute"> charset</span>
								<span className="attrValue">="UTF-8"</span>
								<span className="i">/&#62;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span className="i">  &#60;</span>
								<span className="tag">title</span>
								<span className="i">&#62;</span>
								<span className="content">NodePad Web</span>
								<span className="i">&#60;/</span>
								<span className="tag">title</span>
								<span className="i">&#62;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span className="i">&#60;/</span>
								<span className="tag">head</span>
								<span className="i">&#62;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span className="i">&#60;</span>
								<span className="tag">body</span>
								<span className="i">&#62;</span>
								<span className="i">&#60;/</span>
								<span className="tag">body</span>
								<span className="i">&#62;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span className="i">&#60;/</span>
								<span className="tag">html</span>
								<span className="i">&#62;</span>
								<span className="machine"></span>
							</p>
						</code>
					</div>
					<div className="code">
						<p className="languageTitle">
							<FontAwesomeIcon icon={faCss3Alt} />
							<span> CSS</span>
						</p>
						<br />
						<code>
							<p className="codeText">
								<span className="class">.fisi </span>
								<span>&#123;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span className="property">  background</span>
								<span>:</span>
								<span className="value"> gray</span>
								<span>;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span className="property">  color</span>
								<span>:</span>
								<span className="value"> #AFA</span>
								<span>;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span className="property">  font-size</span>
								<span>:</span>
								<span className="value"> 1.3em</span>
								<span>;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span>&#125;</span>
								<span className="machine"></span>
							</p>
						</code>
						<br />
						<code>
							<p className="codeText">
								<span className="class">.fisi </span>
								<span>&#123;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span className="property">  display</span>
								<span>:</span>
								<span className="value"> flex</span>
								<span>;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span className="property">  justify-content</span>
								<span>:</span>
								<span className="value"> center</span>
								<span>;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span className="property">  align-items</span>
								<span>:</span>
								<span className="value"> center</span>
								<span>;</span>
								<span className="machine"></span>
							</p>
							<p className="codeText">
								<span>&#125;</span>
								<span className="machine"></span>
							</p>
						</code>
					</div>
				</div>
				<div className="info">
					<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, a!</h1>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores vero quo error laborum possimus eaque sint, fugiat, consectetur sequi adipisci eum aliquid, tempore facilis sunt minus blanditiis commodi mollitia quis recusandae repellat accusantium. Quis odio sunt hic excepturi quidem reiciendis temporibus quod fugit nostrum? Placeat soluta libero dolor est sint.</p>
				</div>
			</div>
		</>
	)
}
export default InfoHeader