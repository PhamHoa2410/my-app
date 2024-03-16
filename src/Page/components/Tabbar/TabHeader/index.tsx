import React, { ReactNode, useEffect, useState } from 'react'

interface ITab {
    label: string
    isActive?: boolean
    handleOnClick?: () => void
}

const TabHeader = ({ isActive, label, handleOnClick }: ITab) => {
    return (
        <div className={`${isActive ? 'tab-header-content-active' : 'tab-header-content'}`} onClick={handleOnClick}>
            <p className='text-content'>
                {label}
            </p>
        </div>
    )
}

export default TabHeader
