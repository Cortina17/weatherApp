import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { legacy_createStore } from 'redux';
import './App.css';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import History from './components/History';
import weatherReducer from './reducers/weatherReducer';

const store = legacy_createStore(weatherReducer);

const App = () => {

  return (
    <>
      <Provider store={store}>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={
              <div>
                <Form />
                <History />
              </div>
            } />
            <Route path='/detail/:cityName' element={<Detail />} />
          </Routes>
        </main >
        <Footer />
      </Provider>
    </>
  );
}

export default App;
