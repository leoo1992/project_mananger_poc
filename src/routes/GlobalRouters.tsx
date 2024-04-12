import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  StartPage,
  ProjectsPage,
  ErrorPage,
  CompanyPage,
  ContactsPage,
  ConfigsPage,
  LogoutPage,
  ProfilePage,
} from '../pages';
// import PrivateRoute from './PrivateRoute';

const GlobalRouters = () => {
  // <PrivateRoute>
  // </PrivateRoute>
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={StartPage()} errorElement={ErrorPage()} />
          <Route
            path="/projects"
            element={ProjectsPage()}
            errorElement={ErrorPage()}
          />
          <Route
            path="/company"
            element={<CompanyPage />}
            errorElement={ErrorPage()}
          />
          <Route
            path="/contacts"
            element={ContactsPage()}
            errorElement={ErrorPage()}
          />
          <Route
            path="/profile"
            element={ProfilePage()}
            errorElement={ErrorPage()}
          />
          <Route
            path="/configs"
            element={ConfigsPage()}
            errorElement={ErrorPage()}
          />
          <Route
            path="/logout"
            element={LogoutPage()}
            errorElement={ErrorPage()}
          />
          <Route path="*" element={ErrorPage()} errorElement={ErrorPage()} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default GlobalRouters;
