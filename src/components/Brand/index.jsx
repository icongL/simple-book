import React from 'react'
import { Link } from 'react-router-dom'  
import './styles.scss'
const basePhotURL = '//cdn2.jianshu.io/assets/web/download-index-side-qrcode-'

Brand.showBigDownload = function (props) {
	this.downloadBigPhotoToggleShow(true)
}
Brand.hiddenBigDowdload = function (props) {
	this.downloadBigPhotoToggleShow(false)
}
export default function Brand (props) {
	const { downloadAddr = '/' , downloadImgIsShow , codePhotoAddr = basePhotURL +  'cb13fc9106a478795f8d10f9f632fccf.png' , fixPictureAddr = basePhotURL + 'cb13fc9106a478795f8d10f9f632fccf.png' } = props
	const bigPhotoClass = downloadImgIsShow ? 'fix-picture' : 'fix-picture hidden'
	return <Link 
			onMouseEnter={ Brand.showBigDownload.bind(props)  } 
			onMouseLeave={ Brand.hiddenBigDowdload.bind(props) }
			to={ downloadAddr }
			className="brand-wrapper clearfix" >
		<img className="left-mimi" src={ codePhotoAddr } alt="404" />
		<div className="download-info">
			<div className="info">
				下载简书手机App
				<i className="iconfont"></i>
			</div>
			<p>随时随地发现和创作内容</p>
		</div>
		<div className={ bigPhotoClass }>
			<img  src={ fixPictureAddr } alt="404" />
			<span className="code-triangle"></span>
		</div>
	</Link>
}