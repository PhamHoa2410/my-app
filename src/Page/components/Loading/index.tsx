import React from 'react'
import './styles.scss'
import Lottie from 'react-lottie'
import animationData from './loadingIcon.json'

type LoadingProps = {
  isShow: boolean
}
const Loading: React.FC<LoadingProps> = (props) => {
  const { isShow } = props
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const loadingComp = (
    <div className={`loading__container ${isShow ? 'show' : ''}`}>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  )

  return loadingComp
}

export default Loading
