import React from 'react'
import '../styles/loadingSpinner.css'

const LoadingSpinner = ({ sizeSpinner }) => {
  return (
    <div className={`lds-dual-ring w-[${ sizeSpinner }px] h-[${ sizeSpinner }px] after:w-[${ sizeSpinner }px] after:h-[${ sizeSpinner }px] `}></div>
  )
}

export default LoadingSpinner
