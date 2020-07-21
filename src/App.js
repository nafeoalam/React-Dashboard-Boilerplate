import { STATE_LOGIN, STATE_SIGNUP } from './pages/Authentication/_AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from './pages/Authentication/AuthPage';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './styles/reduction.scss';
import { AuthProvider } from './sharedStates/authContext'
import React, { Fragment, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

//Redux
import { Provider } from "react-redux";
import store from "./sharedStates/store";

toast.configure();

//#region Component/Page Declarations

const AlertPage = React.lazy(() => import('./pages/Templates/AlertPage'));
const AuthModalPage = React.lazy(() => import('./pages/Authentication/AuthModalPage'));
const BadgePage = React.lazy(() => import('pages/Templates/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('pages/Templates/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('pages/Templates/ButtonPage'));
const CardPage = React.lazy(() => import('pages/Templates/CardPage'));
const ChartPage = React.lazy(() => import('pages/Templates/ChartPage'));
const DashboardPage = React.lazy(() => import('pages/_DashboardPage'));
const DropdownPage = React.lazy(() => import('pages/Templates/DropdownPage'));
const FormPage = React.lazy(() => import('pages/Templates/FormPage'));
const InputGroupPage = React.lazy(() => import('pages/Templates/InputGroupPage'));
const ModalPage = React.lazy(() => import('pages/Templates/ModalPage'));
const ProgressPage = React.lazy(() => import('pages/Templates/ProgressPage'));
const TablePage = React.lazy(() => import('pages/Templates/TablePage'));
const TypographyPage = React.lazy(() => import('pages/Templates/TypographyPage'));
const WidgetPage = React.lazy(() => import('pages/Templates/WidgetPage'));
const AboutUs = React.lazy(() => import('pages/_AboutUs'));
const ProfileSetting = React.lazy(() => import('pages/_ProfileSetting'));
// const Chat = React.lazy(() => import('pages/chat/Chat'));
const Join = React.lazy(() => import('./pages/Chat/Join'));

const BalanceRequest = React.lazy(() => import('./pages/BalanceRequest/_Request'));
const FundTransfer = React.lazy(() => import('./pages/FundTransfer/_Transfer'));
const MakePayment = React.lazy(() => import('./pages/MakePayment/_Payment'));
const TransactionHistory = React.lazy(() => import('./pages/TransactionHistory/_History'));

//#endregion


function App(props) {
  const history = useHistory()

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthenticated = async () => {
    //console.time('fetch')

    try {
      const res = await fetch("http://localhost:4000/api/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });
      const parseRes = await res.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }



  };

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  useEffect(() => {
    checkAuthenticated();
  }, [isAuthenticated, setAuth]);

  return (
    <Fragment>
      <BrowserRouter basename={'/'}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/seed"
              layout={EmptyLayout}
              component={props => (
                <AuthProvider value={{ setAuth: setAuth }}>
                  <AuthPage {...props} authState={STATE_LOGIN} />
                </AuthProvider>
              )}
            />

            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthProvider value={{ setAuth: setAuth }}>
                  <AuthPage {...props} authState={STATE_SIGNUP} />
                </AuthProvider>
              )}
            />

            <MainLayout breakpoint={props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={DashboardPage} />

                <Route exact path="/login-modal" component={props => (
                  <AuthProvider value={{ setAuth: setAuth }}>
                    <AuthModalPage {...props} authState={STATE_LOGIN} />
                  </AuthProvider>
                )} />
                <Route exact path="/buttons" component={ButtonPage} />
                <Route exact path="/cards" component={CardPage} />
                <Route exact path="/profile-setting" component={ProfileSetting} />
                <Route exact path="/widgets"
                  render={props =>
                    isAuthenticated ? (
                      <WidgetPage {...props} setAuth={setAuth} />
                    ) : (
                        <Redirect to="/login-modal" />
                      )
                  }
                />
                <Route exact path="/typography" component={TypographyPage} />
                <Route exact path="/aboutus" component={AboutUs} />

                <Provider store={store}>
                  <Route exact path="/balance-request" component={BalanceRequest} />
                  <Route exact path="/fund-transfer" component={FundTransfer} />
                  <Route exact path="/make-payment" component={MakePayment} />
                  <Route exact path="/transaction-history" component={TransactionHistory} />
                </Provider>


                <Route exact path="/join" component={Join} />
                <Route exact path="/alerts" component={AlertPage} />
                <Route exact path="/tables" component={TablePage} />
                <Route exact path="/badges" component={BadgePage} />
                <Route
                  exact
                  path="/button-groups"
                  component={ButtonGroupPage}
                />
                <Route exact path="/dropdowns" component={DropdownPage} />
                <Route exact path="/progress" component={ProgressPage} />
                <Route exact path="/modals" component={ModalPage} />
                <Route exact path="/forms" component={FormPage} />
                <Route exact path="/input-groups" component={InputGroupPage} />
                <Route exact path="/charts" component={ChartPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>

    </Fragment>
  )
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

// export default App;
export default componentQueries(query)(App);
