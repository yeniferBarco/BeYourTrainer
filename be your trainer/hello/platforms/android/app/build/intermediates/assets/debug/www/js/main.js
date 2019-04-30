var comenzar="";
var acercaDe="";
var ajustes="";

window.onload= inicio;
function inicio(){
		 	
inicializar();
asignarEventos();
entrada();

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

function entrada()
{   
	seccion_00.className="entrada animated";
    seccion_01.className="inicio animated ocultar";
	seccion_02.className="ejercicios ocultar";
	seccion_03.className="acerca ocultar";
	seccion_04.className="ajuste ocultar";
	setTimeout(principio, 3000);

}

function principio()
{   
	seccion_00.className="entrada ocultar";
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
