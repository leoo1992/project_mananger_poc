import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import PrivateRoute from './PrivateRoute';

const GlobalRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} errorElement={<ErrorPage />} />
        <Route
          path="/home"
          errorElement={<ErrorPage />}
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} errorElement={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouters;
