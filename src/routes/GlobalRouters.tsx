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

export default function GlobalRouters() {
  // <PrivateRoute>
  // </PrivateRoute>
  return (
    <BrowserRouter>
      <Navbar />
      <main className="flex flex-grow justify-center items-start m-0 py-16 h-full">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/configs" element={<ConfigsPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
