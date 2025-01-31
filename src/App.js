import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import { routes, PublicRoute, PrivateRoute } from './routes';

const AuthorizationView = lazy(() =>
  import(
    './pages/AuthorizationView' /* webpackChunkName: "AuthorizationView" */
  ),
);
const HomeView = lazy(() =>
  import('./pages/HomeView' /* webpackChunkName: "HomeView" */),
);
const ExpenseView = lazy(() =>
  import('./pages/ExpenseView' /* webpackChunkName: "ExpenseView" */),
);
const IncomeView = lazy(() =>
  import('./pages/IncomeView' /* webpackChunkName: "IncomeView" */),
);
const StatisticsView = lazy(() =>
  import('./pages/StatiscticsView' /* webpackChunkName: "StatisticsView" */),
);

export default function App() {
  return (
    <>
    <Header/>
      <div className="main-bg-auth">
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute path={routes.auth} restricted redirectTo={routes.home}>
              <AuthorizationView />
            </PublicRoute>

            <PrivateRoute exact path={routes.home} redirectTo={routes.auth}>
              <HomeView />
            </PrivateRoute>

            <PrivateRoute path={routes.expense} redirectTo={routes.auth}>
              <ExpenseView />
            </PrivateRoute>

            <PrivateRoute path={routes.income} redirectTo={routes.auth}>
              <IncomeView />
            </PrivateRoute>

            <PrivateRoute path={routes.stats} redirectTo={routes.auth}>
              <StatisticsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </div>
    </>
  );
}
