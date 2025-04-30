import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from '../header/Header';
import Catalogue from '../catalogue/Catalogue';
import Sale from '../sale/Sale';
import Profile from '../profile/Profile';
import Footer from '../footer/Footer';

import { AuthProvider } from '../../contexts/AuthContext';
import PersonalData from '../profile/personal-data/PersonalData';
import Orders from '../profile/orders/Orders';
import Cart from '../profile/cart/Cart';

const App = () => {
  return (
    <div className='App'>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Catalogue />} />
          <Route path='/catalogue' element={<Catalogue />} />
          <Route path='/sale' element={<Sale />} />

          <Route path='/profile' element={<Profile />}>
            <Route index element={<PersonalData />} />
            <Route path='personal' element={<PersonalData />} />
            <Route path='orders' element={<Orders />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;
