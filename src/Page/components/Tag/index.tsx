import * as React from 'react'
import './styles.scss'
type Tagprops = {
    name: string
}

const Tag: React.FC<Tagprops> = (props) => {
    const { name } = props
    return (
        <div className="tag-container">
            {name}
        </div>
    )
}
export default Tag;