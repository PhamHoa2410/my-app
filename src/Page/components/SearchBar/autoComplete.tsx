import React from 'react'
import Autosuggest from 'react-autosuggest'
import _ from 'lodash'

export type SuggestionT = {
    label: string
    value: any
}

const getSuggestionValue = (attr: 'label' | 'value') => (suggestion: SuggestionT) =>
    suggestion[attr]
const renderSuggestion = (suggestion: SuggestionT) => <div>{suggestion.label}</div>

class AutoComplete extends React.Component<any, any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            value: props.value,
            isSelected: true,
            suggestions: this.getSuggestions(props.value)
        }
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        const { value, options } = this.props
        if (prevProps.value !== value) {
            this.setState((prev: any) => ({
                ...prev,
                value
            }))
        }
    }

    UNSAFE_componentWillReceiveProps = (nextProps: any) => {
        const { options, value } = this.props
        if (!_.isEqual(nextProps.options, options)) {
            this.setState({
                suggestions: (nextProps.options || []).filter((op: SuggestionT) =>
                    op.label.toLowerCase().includes((value || '').trim().toLowerCase()))
            })
        }
    }

    onChange = (event: any, { newValue }: any) => {
        const { onChange, _regex } = this.props
        if (newValue === -1) return

        const value = _regex ? newValue.replaceAll(_regex, '') : newValue
        if (this.props.onChangeSelect && this.props.onReset) {
            this.setState({
                isSelected: false
            })
        }
        this.setState({
            value
        })
        const attr = _.get(this.props, 'attribute', 'value')

        if (attr === 'label') {
            const op = _.find(_.get(this.props, 'options', []), ({ label }) => label === value)
            onChange(_.isEmpty(op) ? '' : op.value)
            return
        }

        onChange(value)
    }

    onSuggestionsFetchRequested = ({ value }: any) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        })
    }

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        })
    }

    getSuggestions = (value: string) => {
        const inputValue = (value || '').trim().toLowerCase()
        const { options, showList } = this.props
        if (options === null) return []
        let suggests = (options || []).filter((op: SuggestionT) =>
            op.label.toLowerCase().includes(inputValue))
        if (showList) {
            suggests = suggests.length > 0 ? suggests : [{ value: -1, label: 'No Option' }]
        }

        return suggests
    }

    onSuggestionSelected = (
        event: any,
        props: Autosuggest.SuggestionSelectedEventData<SuggestionT>
    ) => {
        const { onChange } = this.props
        if (props.suggestion.value === -1) return

        if (this.props.onChangeSelect) {
            this.setState({
                isSelected: true
            })
            this.props.onChangeSelect(props.suggestion.value)
            return
        }

        onChange(props.suggestion.value)
    }

    render() {
        const { value, suggestions } = this.state
        const {
            error, placeholder, name, attribute, setTouched = () => { }, showList
        } = this.props

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder,
            value: value || '',
            onChange: this.onChange,
            onBlur: () => {
                setTouched(name, true)
                if (this.state.isSelected === false && this.props.onReset && this.props.onChangeSelect) {
                    this.props.onReset()
                    this.setState({
                        isSelected: true,
                        value: ''
                    })
                }
            },
            className: error ? 'msb--input--error' : ''
        }

        const { component } = this.props
        // Finally, render it!
        let suggests = suggestions
        if (showList) {
            suggests = suggests.length > 0 ? suggests : [{ value: -1, label: 'No Option' }]
        }
        return (
            <Autosuggest<SuggestionT>
                suggestions={suggests}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue(attribute || 'value')}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                shouldRenderSuggestions={() => true}
                renderInputComponent={component}
                onSuggestionSelected={this.onSuggestionSelected}
            />
        )
    }
}

export default AutoComplete
