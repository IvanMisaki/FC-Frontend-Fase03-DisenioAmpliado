//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import {Login} from './components/login';

import 'bootstrap/dist/css/bootstrap.css';
import {Alumnos} from './components/alumno/alumnos';
import {Ficha} from './components/alumno/ficha'

export function App() {
  return (
      <Router>
        {/*<header>
            <Link to="/">
                <h1>Movies | By Misaki</h1>
            </Link>
        </header>*/}
        <main>
            <Routes>
                <Route 
                    path="/" 
                    element={<Login />} 
                    />
                <Route 
                    exact
                    path="/alumnos" 
                    element={<Alumnos />} 
                    />
                <Route 
                    exact
                    path="/ficha/:idAlumno" 
                    element={<Ficha />} 
                    />
            </Routes>
        </main>
      </Router>
  );
}