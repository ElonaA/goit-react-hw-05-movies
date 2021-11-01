import Preloader from '../../components/Loader/Loader';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import paths from './paths';

const HomePage = lazy(() =>
  import(
    '../../pages/HomePage/HomePage.jsx' /* webpackChunkName: "HomePage" */
  ),
);

const MoviesPage = lazy(() =>
  import(
    '../../pages/MoviesPage/MoviesPage.jsx' /*webpackChunkName: "MoviesPage" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage/MovieDetailsPage.jsx' /*webpackChunkName: "MovieDetailsPage" */
  ),
);
const PageNotFound = lazy(() =>
  import(
    '../../pages/PageNotFound/PageNotFound.jsx' /* webpackChunkName: "PageNotFound" */
  ),
);

export default function Routes() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path={paths.HOME} component={HomePage} />
          <Route path={paths.MOVIEDETAILS} component={MovieDetailsPage} />
          <Route exact path={paths.MOVIES} component={MoviesPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </>
  );
}
