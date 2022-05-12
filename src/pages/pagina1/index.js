import React from "react";
import './styles.css';
import download from './assest/download.png'
import file from './assest/file.png'
import exit from './assest/exit.png'

 function pagina1() {

	return (
		<container className="container-pg1">
		<header className="header">
	          <form>		
                  <div className='logo'>
		   <h1 className='text1-logo'>THINK!</h1>
		   <h2 className='text2-logo'>Soluçoes em software e gestao</h2>
		 </div>
		  <img className="icon-download" src={download} />
		  <span className="download-arquivos">Download de arquivos</span>
		  <span className="consulta">Consultas</span>
		  <img className="icon-consulta" src={file} />
		  <span className="sair">Sair</span>
		  <img className="icon-sair" src={exit} />
		  </form>	
		</header>
		</container>
	);


};
export default pagina1;