// import React, { useState } from 'react'; // Import React and useState
// import './App.css';
// import Alert from './Components/Alert';
// import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
// import About from './Components/About';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   const [mode, setMode] = useState('dark');
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type, 
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   }

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       showAlert('Dark mode has been enabled', "success");
//     } else {
//       setMode('light');
//       showAlert('Light mode has been enabled', "success");
//     }
//   }

//   return (
//     <Router>
//       <Navbar title="Testutils" mode={mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <div className='container my-3'>
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <TextForm showAlert={showAlert} heading="Enter the text" />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark mode has been enabled', "success");
    } else {
      setMode('light');
      showAlert('Light mode has been enabled', "success");
    }
  }

  return (
    <Router>
      <Navbar title="Testutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<TextForm showAlert={showAlert} heading="Enter the text"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// showAlert={showAlert} heading="Enter the text" 