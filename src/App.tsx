import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import SingleImage from './pages/SingleImage';
import Home from './pages/Home';
import AppLayout from './AppLayout';
import PageNotFound from './pages/PageNotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<Navigate to="/auth" />} path="/" />
          <Route element={<Auth />} path="/auth" />
          <Route element={<Home />} path="/home" />
          <Route element={<SingleImage />} path="/singleImage/:id" />
          <Route element={<PageNotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
