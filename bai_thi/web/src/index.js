import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/home'
function App(){
  return(
  <BrowserRouter>
    <Routes>

     <Route path="/" element={<Layout />} >
     <Route path="home" element ={<Home />}></Route>
     <Route path="about" element ={<About />}></Route>

     </Route>

    </Routes>
  </BrowserRouter>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
