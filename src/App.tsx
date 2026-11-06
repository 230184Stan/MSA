import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import PublicHome from '@/routes/PublicHome';
import DivisionsPage from '@/routes/DivisionsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<PublicHome />} />
          <Route path="divisions" element={<DivisionsPage />} />
          <Route path="*" element={<PublicHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
