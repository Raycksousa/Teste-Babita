import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Login from './pages/login/index';
import Pagina1 from './pages/pagina1/index';


export default function MyRoutes() {
	return (
		<BrowserRouter>
		      <Routes>
			<Route path="/"   element={<Login />} />
			<Route path="/pagina1" element={<Pagina1 />}/>
		      </Routes>
		</BrowserRouter>
	);

}

