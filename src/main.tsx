import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Page/homepage/homepage';
import Login from './Page/login';
import MovieDetailPages from './Page/movieDetails';
import IndexPage from './Page/indexPage';


class Router extends React.Component {
  render() {
    return (
      <BrowserRouter basename='/movielist/'>
        <Routes>
          <Route path={'/login'} element={<Login />} />
          <Route path={"/"} element={<IndexPage />}>
            <Route index element={<Homepage />} />
            <Route path={'/movieDatails'} element={<MovieDetailPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;