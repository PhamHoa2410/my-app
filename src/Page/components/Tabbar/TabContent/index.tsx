import React, { ReactNode, useEffect, useState } from 'react'
import TabHeader from '../TabHeader'
import '../styles.scss'

interface ITabBar {
    tabs: Array<string>
    children: ReactNode
    active: number
    setActive: (value: number) => void
}

const TabBar = ({ tabs, children, active, setActive }: ITabBar) => {
    return (
        <div>
            <div className="tab-container">
                <div className='tab-content'>
                    {tabs.map((tab: string, i) => {
                        return (
                            <TabHeader
                                key={tab}
                                label={tab}
                                isActive={active === i}
                                handleOnClick={() => setActive(i)}
                            />
                        )
                    })}
                </div>
                <div>{React.Children.toArray(children)[active]}</div>
            </div>
        </div>
    )
}

export default TabBar
