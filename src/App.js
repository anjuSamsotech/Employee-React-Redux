import './App.css';

import Create from './Components/Create/Create';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'; 
import Read from './Components/Read/Read';
import Update from './Components/Update/Update'; 
import Display from './Components/Display/Display'; 
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (

    <Provider store={store}>
      <Router>
        <div className="main">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/read' element={<Read />} />
            <Route path='/create' element={<Create />} />
            <Route path='/display' element={<Display />} />
            <Route path='/update' element={<Update />} />
          </Routes>
        </div>
      </Router>
    </Provider>

    // <Router>
    //   <div className="main">

    //     <Routes>
     
    //       <Route path='/' exact element={<Dashboard/>} />

    //       <Route path='/read' exact element={<Read/>} />

    //       <Route path='/create'exact element={<Create/>} />
       
    //       <Route path='/display' exact element={<Display/>} /> 

    //       <Route path='/update' exact element={<Update/>} />

    //     </Routes>
       
    //   </div>
    // </Router>
  );
}

export default App;
