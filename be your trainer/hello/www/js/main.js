var comenzar="";
var acercaDe="";
var ajustes="";
var menu = document.querySelector('.hamburger');
var atrasInicio = "";
var atrasAjuste = "";
var atrasAcerca = "";
var atrasAbdomen ="";
var abdomen = "";  
var ListoAbd = "";
var totalTime = 15;

var ajustes_hamburguesa="";
var acercaDe_hamburguesa="";

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
	atrasAbdomen = document.getElementById('btnAtrasAbdomen');
	// menuEjercicios = document.getElementById('btnMenuEjercicios');
	acercaDe= document.getElementById('btnAcercade');
	ajustes= document.getElementById('btnAjustes');
	acercaDe_hamburguesa= document.getElementById('btn_acercade');
	ajustes_hamburguesa= document.getElementById('btn_ajustes');
	abdomen= document.getElementById('btnAbdomen');
	ListoAbd= document.getElementById('btnListoAbd');
	
}


function asignarEventos()
{
	comenzar.addEventListener("click",ejercicios);
	// menuEjercicios.addEventListener("click", menuHamburguesa);
	atrasInicio.addEventListener("click", retroceder);
	atrasAjuste.addEventListener("click", retroceder);
	atrasAcerca.addEventListener("click", retroceder);
	atrasAbdomen.addEventListener("click", retrocederMenu);
	acercaDe.addEventListener("click",acerca);
	ajustes.addEventListener("click",ajuste);
	abdomen.addEventListener("click",abdomenMenu);
	ListoAbd.addEventListener("click",abdomenN1);
	menu.addEventListener('click', toggleMenu, false);
	acercaDe_hamburguesa.addEventListener("click",acerca);
	ajustes_hamburguesa.addEventListener("click",ajuste);
}

function entrada()
{   
	seccion_00.className="entrada animated";
    seccion_01.className="inicio animated ocultar";
	seccion_02.className="ejercicios ocultar";
		seccion_02_2.className="ejAbdomen ocultar";
			seccion_02_2_1.className="abdomen1 ocultar";
	seccion_03.className="acerca ocultar";
	seccion_04.className="ajuste ocultar";
	setTimeout(principio, 3000);

}

function ocultar(){
	seccion_00.className="entrada ocultar";
    seccion_01.className="inicio ocultar";
	seccion_02.className="ejercicios ocultar";
		seccion_02_2.className="ejAbdomen ocultar";
			seccion_02_2_1.className="abdomen1 ocultar";
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

function retrocederMenu()
{		
	ocultar();
	seccion_02.className="ejercicios animated pulse";
}

// activar menu hamburguesa
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

function ejercicios()
{
    seccion_01.className="inicio ocultar";
	seccion_02.className="ejercicios animated pulse";
}

function abdomenMenu()
{
   	seccion_02.className="inicio ocultar";
	seccion_02_2.className="ejAbdomen animated pulse";
	}
	
function abdomenN1()
{
	seccion_02_2.className="ejAbdomen ocultar";
	seccion_02_2_1.className="abdomen1 animated pulse";
    preparado();    
}

function circular(){
	var bar = new ProgressBar.Circle(rueda, {
	strokeWidth: 6,
	easing: 'easeInOut',
	duration: 17500,
	color: '#f3ff00',
	trailColor: '#eee',
	trailWidth: 1,
	svgStyle: null
	});
    bar.animate(1.0);
}

function preparado(){
    document.getElementById('premisa').innerHTML = "¿PREPARADO?";           
               
    setTimeout(function(){document.getElementById('premisa').innerHTML = "¿LISTO?" , document.getElementById('premisa').style.left ="77px" },3000);
    setTimeout(function(){document.getElementById('premisa').innerHTML = "¡YA!" , document.getElementById('premisa').style.left ="130px"},6000); 
    setTimeout(function(){document.getElementById('premisa').innerHTML = "" },8000);
    setTimeout(timer,8000);
    setTimeout(circular,8000); 
} 

function timer() {
    document.getElementById('clock').innerHTML = totalTime;		  
	if(totalTime==0){
		console.log('Final');
	} 
	else{
	    totalTime-=1;
	}
	if(totalTime<9){
	    document.getElementById('clock').style.left ="163px";
	}
	  setTimeout(timer,1000);
}
 
function acerca()
{
    seccion_01.className="inicio ocultar";
    ocultar();
	seccion_03.className="acerca animated pulse";
}

function ajuste()
{   
	seccion_01.className="inicio ocultar";
	ocultar();
	seccion_04.className="ajuste animated pulse";
}



