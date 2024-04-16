import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  HomePage,
  ProjectsPage,
  ErrorPage,
  CompanyPage,
  ContactsPage,
  ConfigsPage,
  LogoutPage,
  ProfilePage,
} from '../pages';
import Container from '../components/layout/Container';
// import PrivateRoute from './PrivateRoute';

export default function GlobalRouters() {
  // <PrivateRoute>
  // </PrivateRoute>
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/configs" element={<ConfigsPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
