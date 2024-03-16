/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'
import Autosuggest from 'react-autosuggest'
import { useTranslation } from 'react-i18next'
import AutoComplete, { SuggestionT } from './autoComplete'
import ico_search from '../../assets/images/svg/ico_search.svg'

const SearchLabel: FC<any> = (props) => {
    const {
        onClick = () => { }, text, ...rest
    } = props
    return (
        <AutoComplete
            {...rest}
            component={(inputProps: Autosuggest.InputProps<SuggestionT>) => {
                const { className, ...rest } = inputProps
                return (
                    <div>
                        <div>
                            <input
                                type="text"
                                {...(rest as any)}
                            />
                        </div>
                        <button
                            type="button"
                            className="secondary-button"
                            onClick={() => {
                                onClick(rest.value)
                            }}
                        >
                            Search
                        </button>
                    </div>
                )
            }}
        />
    )
}

export default SearchLabel
