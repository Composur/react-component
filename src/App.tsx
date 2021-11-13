import React from 'react';
import { Routes, Route } from 'react-router';
import MainLayout from '@/layout/Layout';
import PageNotFoundView from '@/views/PageNotFoundView';
import ComView from './views/ComView';
const App: React.FC = (): JSX.Element => {

  // const mainRoutes = {
  //   path: '/',
  //   element: <MainLayout />,
  //   children: [
  //     { path: '/component', element: <ComView /> },
  //     { path: '*', element: <PageNotFoundView /> },
  //   ],
  // };





  return (
    <Routes>
      <Route path='/' element={<MainLayout />} />
      <Route path='component' element={<ComView />} />
      <Route path='*' element={<PageNotFoundView />} />
    </Routes>
  );
  // const routing = useRoutes([mainRoutes])

  // return (
  //   <>{routing}</>
  // )
};

export default App;