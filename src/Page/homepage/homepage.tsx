import * as React from 'react'
import ListItems from '../components/ListItem';
import TabBar from '../components/Tabbar/TabContent';
import { useLocation } from 'react-router-dom';
import SearchLabel from '../components/SearchBar';
import { UseSearchMovie } from './hooks';
import Loading from '../components/Loading';
import SearchResult from '../components/SearchResult';
import _ from 'lodash';

type props = {}

const HomePage: React.FC<props> = () => {
  const [active, setActive] = React.useState(0)
  const { state } = useLocation() as { state: { active?: number; acctNo: string } }
  React.useEffect(() => {
    if (state?.active) {
      setActive(state.active)
    }
  }, [state])
  const { page, setPage, isShow, content, Search, Trigger, searchText } = UseSearchMovie()
  console.log(content && searchText)
  return (
    <div className="container--root">
      <div className="container">
        <Loading isShow={isShow} />
        <SearchLabel trigger={(e: any) => Trigger(e)} search={() => Search()} />
        {!_.isEmpty(content) && searchText ?
          <SearchResult list={content} page={page} setPage={setPage} /> :
          <TabBar active={active} setActive={setActive} tabs={['Now Playing', 'Top Rated']}>
            <ListItems type='nowPlaying' />
            <ListItems type='topRate' />
          </TabBar>}


      </div>
    </div>
  )
}
export default HomePage;