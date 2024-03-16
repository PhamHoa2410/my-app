import * as React from 'react'
import Header from '../components/Navigation/Header';
import ListItems from '../components/ListItem';
import TabBar from '../components/Tabbar/TabContent';
import { useLocation } from 'react-router-dom';
import { fakeItems } from '../components/ListItem/interface';
import Items from '../components/Items';
import SearchLabel from '../components/SearchBar';

type props = {}

const HomePage: React.FC<props> = () => {
  const [active, setActive] = React.useState(0)
  const { state } = useLocation() as { state: { active?: number; acctNo: string } }
  React.useEffect(() => {
    if (state?.active) {
      setActive(state.active)
    }
  }, [state])

  return (
    <div className="container--root">
      <div className="container">
        <SearchLabel />
        <TabBar active={active} setActive={setActive} tabs={['Top Movie', 'Most Favorites']}>
          <ListItems />
          <ListItems />
        </TabBar>

      </div>
    </div>
  )
}
export default HomePage;