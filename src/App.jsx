import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'

import { store } from "./store";
import CounterPage from "./pages/CounterPage";


function App() {
  return (
    <div className="App">
    <Provider store={store}>
          <Routes>
            <Route path='/counter' element={<CounterPage/>}></Route>
          </Routes>
    </Provider>
      </div>
  );
}

export default App;
