import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Catalogue from './features/catalogue/components/Catalogue/Catalogue';
import Sale from './features/sale/components/Sale';
import Profile from './features/profile/components/Profile';
import Footer from './components/footer/Footer';

import { AuthProvider } from './contexts/AuthContext';
import PersonalData from './features/profile/components/PersonalData';
import Orders from './features/profile/components/Orders';
import Cart from './features/profile/components/Cart';

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
