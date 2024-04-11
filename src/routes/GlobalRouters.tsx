import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import PrivateRoute from './PrivateRoute';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GlobalRouters = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<StartPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/home"
            errorElement={<ErrorPage />}
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<ErrorPage />}
            errorElement={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default GlobalRouters;
