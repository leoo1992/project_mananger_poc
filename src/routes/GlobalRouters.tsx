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
  CreateUpdateProjectsPage,
} from '../pages';
import Container from '../components/layout/Container';
import { ToastBar, Toaster } from 'react-hot-toast';
// import PrivateRoute from './PrivateRoute';

export default function GlobalRouters() {
  // <PrivateRoute>
  // </PrivateRoute>
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster
        toastOptions={{
          className: 'transition-all duration-500 ease-in-out',
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible
                ? 'custom-enter 1s ease'
                : 'custom-exit 1s ease',
            }}
          />
        )}
      </Toaster>
      ;
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/projects/update_or_create"
            element={<CreateUpdateProjectsPage />}
          />
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
