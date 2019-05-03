var comenzar="";
var acercaDe="";
var ajustes="";
var menuEjercicios = "";
var atrasInicio = "";
var atrasAjuste = "";
var atrasAcerca = "";

window.onload= inicio;

function inicio(){		 	
inicializar();
asignarEventos();
entrada();
}

function inicializar()
{

	comenzar= document.getElementById('btnComenzar');
	atrasInicio = document.getElementById('btnAtrasInicio');
	atrasAjuste = document.getElementById('btnAtrasAjuste');
	atrasAcerca = document.getElementById('btnAtrasAcerca');
	menuEjercicios = document.getElementById('btnMenuEjercicios');
	acercaDe= document.getElementById('btnAcercade');
	ajustes= document.getElementById('btnAjustes');
	
}


function asignarEventos()
{
	comenzar.addEventListener("click",ejercicios);
	menuEjercicios.addEventListener("click", menuEjercicios);
	atrasInicio.addEventListener("click", retroceder);
	atrasAjuste.addEventListener("click", retroceder);
	atrasAcerca.addEventListener("click", retroceder);
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

function ocultar(){
	seccion_00.className="entrada ocultar";
    seccion_01.className="inicio ocultar";
	seccion_02.className="ejercicios ocultar";
	seccion_03.className="acerca ocultar";
	seccion_04.className="ajuste ocultar";
}

function principio()
{   
	ocultar();
    seccion_01.className="inicio animated pulse";

}

function retroceder()
{
	ocultar();
	seccion_01.className="inicio animated pulse";
}

function menuEjercicios()
{
	seccion_01.className="inicio ocultar";
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

