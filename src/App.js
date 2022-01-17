import { Provider } from 'react-redux';

import UsersList from './Components/UsersList/UsersList'
import store from './Store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div >
        <UsersList />
      </div>
    </Provider>
  );
}

export default App;
