import React from 'react';
import { Routes, Route } from 'react-router';
import MainLayout from '@/layout/Layout';
import PageNotFoundView from '@/views/PageNotFoundView';
import ComView from './views/ComView';
import Btn from './views/Btn'
import MenuC from './views/Menu'
import ComViewList from './views/ComViewList'
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
      <Route path='components' element={<ComView />}>
        <Route index element={<ComViewList />} />
        <Route path="btn" element={<Btn />} />
        <Route path="menu" element={<MenuC />} />
      </Route>
      <Route path='*' element={<PageNotFoundView />} />
    </Routes>
  );
  // const routing = useRoutes([mainRoutes])

  // return (
  //   <>{routing}</>
  // )
};

export default App;