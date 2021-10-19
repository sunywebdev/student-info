import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./components/home/Home'));


function App() {

  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Home></Home>
      </Suspense>

    </div >
  );
}

export default App;
