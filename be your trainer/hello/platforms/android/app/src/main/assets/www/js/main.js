var comenzar="";
var acercaDe="";
var ajustes="";

window.onload= inicio;
function inicio(){
		 	
inicializar();
asignarEventos();
principio();

}

function inicializar()
{

	comenzar= document.getElementById('btnComenzar');
	acercaDe= document.getElementById('btnAcercade');
	ajustes= document.getElementById('btnAjustes');
}


function asignarEventos(){


comenzar.addEventListener("click",ejercicios);
acercaDe.addEventListener("click",acerca);
ajustes.addEventListener("click",ajuste);

}



function principio()
{
    seccion_01.className="inicio animated pulse";
	seccion_02.className="ejercicios ocultar";
	seccion_03.className="acerca ocultar";
	seccion_04.className="ajuste ocultar";

}

function ejercicios()
{
    seccion_01.className="inicio ocultar";
	seccion_02.className="ejercicios animated pulse";
}

function acerca()
{
    seccion_01.className="inicio ocultar";
	seccion_03.className="acerca animated pulse";
}

function ajuste()
{   
	seccion_01.className="inicio ocultar";
	seccion_04.className="ajuste animated pulse";
}
