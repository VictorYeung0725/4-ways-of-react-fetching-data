import { Suspense } from 'react';
import './App.css';
import Axios from './main-components/Axios';
import Fetch from './main-components/Fetch';
import ReactQuery from './main-components/ReactQuery';
import Swr from './main-components/Swr';

//NOTE
// by using the SWR , it will be easy for handling the loading time
// increase user experience with just simple <Suspense></Suspense> compoenet and with the fallback props

function App() {
  return (
    <div className="App">
      {/* <Fetch /> */}
      {/* <Axios /> */}

      <Suspense fallback={<h1> Loading ...</h1>}>
        <Swr />
      </Suspense>
      {/* <ReactQuery /> */}
    </div>
  );
}

export default App;
