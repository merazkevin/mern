import {Link, Navigate, Route, Routes} from 'react-router-dom'
import {AllProducts} from './views/AllProducts'
import { EditProduct } from './views/EditProduct';
import { OneProduct } from './views/OneProduct';
import { NewProduct } from './views/NewProduct';
import { NotFound } from './views/NotFound';

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4'>
        <h1 className='navbar-brand mb-0'> 
          Product
        </h1>
        {/* <=== All Links===>  */}
        <div className='navbar-nav justify-content-between'>
          {/* <=== All Products===>  */}
          <Link to='/products' className='btn btn-sm btn-outline-primary mx-1'>
              Products
          </Link>
          {/* <=== New Products===>  */}
          <Link to='/products/new' className='btn btn-sm btn-outline-primary mx-1'>
            New Product
          </Link>
        </div>
      </nav>

      {/* <=== Routes ===> */}
      <Routes>
        <Route path='/' element={<Navigate to='/Products' replace/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/products/:id/edit' element={<EditProduct/>}/>
        <Route path='/products/:id' element={<OneProduct/>}/> 
        <Route path='/products/new' element={<NewProduct/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
