import './App.css';
// import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import initializeAuthentication from './Firebase/Firebase.initialize';
// initializeAuthentication()
// const provider = new GoogleAuthProvider();
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./components/home/Home'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Home></Home>
      </Suspense>

    </div>
  );
}

export default App;
