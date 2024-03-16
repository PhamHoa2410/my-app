/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'
import Autosuggest from 'react-autosuggest'
import { useTranslation } from 'react-i18next'
import ico_search from '../../assets/images/svg/ico_search.svg'
import './styles.scss'

type SearchProp = {
    trigger: (e: any) => void;
    search: () => void
}
const SearchLabel: FC<SearchProp> = (props) => {
    const { trigger, search } = props
    return (
        <div className='search-content'>
            <div className='search-input' >
                <input
                    type="text"
                    placeholder="Search for the Movie..."
                    onChange={trigger}
                    className=""
                />
            </div >

            <button
                className="secondary-button margin--0"
                onClick={search}
            >   Search
            </button>
        </div >
    )
}

export default SearchLabel
