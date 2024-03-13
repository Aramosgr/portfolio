import { Route, Routes, BrowserRouter } from 'react-router-dom';
import * as routes from '../../common/constants/routes';
import Home from '../Pages/Home/Home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home.path} Component={Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
