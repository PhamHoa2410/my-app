import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Poster from './components/poster'
import { fakeItems } from '../components/ListItem/interface'

type DetailPages = {

}

const MovieDetailPages: React.FC<DetailPages> = () => {
    return (
        <div className="container--root">
            <div className="container">
                <Poster src={fakeItems.poster_path} />
            </div>
        </div>
    )
}
export default MovieDetailPages;