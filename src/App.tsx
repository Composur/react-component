import React from 'react';
import { Routes, Route } from 'react-router';
import MainLayout from '@/layout/Layout';
import PageNotFoundView from '@/views/PageNotFoundView';
import ComView from './views/ComView';
import Btn from './views/Btn'
import MenuC from './views/Menu'
import ComViewList from './views/ComViewList'
import IconCom from '@/views/IconV'
import TestCom from '@/Test'
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
      <Route path='/test' element={<TestCom />} />
      <Route path='components' element={<ComView />}>
        <Route index element={<ComViewList />} />
        <Route path="btn" element={<Btn />} />
        <Route path="menu" element={<MenuC />} />
        <Route path="icon" element={<IconCom />} />
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