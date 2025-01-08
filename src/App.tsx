import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const HomePage = React.lazy(() => import('../src/pages/home/'));
const CocopurePage = React.lazy(() => import('../src/pages/cocopure'));
const CocochipsPage = React.lazy(() => import('../src/pages/cocochips'));
const ContactPage = React.lazy(() => import('../src/pages/contact'));

function App() {
  return (
    <Router basename='/cp'>
      <MainLayout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cocopure/*" element={<CocopurePage />} />
            <Route path="/cocochips/*" element={<CocochipsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </React.Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
