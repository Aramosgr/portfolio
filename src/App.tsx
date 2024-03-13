import AppRoutes from './components/Routes';

import './App.scss';
import './shared.scss';

interface IAppProps {}

const App = (props: IAppProps) => {
  return (
    <div className="app">
      <AppRoutes />
    </div>
  );
};

export default App;
