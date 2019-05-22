var comenzar="";
var acercaDe="";
var ajustes="";
var menu = document.querySelector('.hamburger');
var atrasInicio = "";
var atrasAjuste = "";
var atrasAcerca = "";
var atrasAbdomen ="";

var calentamiento = "";
var abdomen = "";
var piernas = "";
var brazos = "";
var pectorales = "";
var gluteos = ""; 

var ListoAbd = "";

//Contadores para la pausa.
var totalTime = 50;
var controlTimer;
var time_is_on = 0;
var bar;

var ajustes_hamburguesa="";
var acercaDe_hamburguesa="";
var play="";
var pause = "";
var reiniciarEjercicio = "";
var continuarEjercicio = "";

var x = document.getElementById("audio1");
var y = document.getElementById("audioFondo");


var pausaAudio = "";
var playAudio = "";

var pausaVoz = "";
var playVoz = "";


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
	
	calentamiento= document.getElementById('btnCalentamiento');
	abdomen= document.getElementById('btnAbdomen');
	piernas= document.getElementById('btnPiernas');
	brazos= document.getElementById('btnBrazos');
	pectorales= document.getElementById('btnPectorales');
	gluteos= document.getElementById('btnGluteos');
	
	ListoAbd= document.getElementById('btnListoAbd');
	play= document.getElementById('btnPlay');
	pause= document.getElementById('btnPausa');
	reiniciarEjercicio= document.getElementById('btnAbandonarPausa');
	continuarEjercicio= document.getElementById('btnContinuar');
	pausaAudio= document.getElementById('off');
	playAudio= document.getElementById('on');
	pausaVoz= document.getElementById('offV');
	playVoz= document.getElementById('onV');
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

	calentamiento.addEventListener("click",calentamientoMenu);
	abdomen.addEventListener("click",abdomenMenu);
	piernas.addEventListener("click",piernasMenu);
	brazos.addEventListener("click",brazosMenu);
	pectorales.addEventListener("click",pectoralesMenu);
	gluteos.addEventListener("click",gluteosMenu);


	ListoAbd.addEventListener("click",abdomenN1);
	menu.addEventListener('click', abrirMenu, false);
	acercaDe_hamburguesa.addEventListener("click",acerca);
	ajustes_hamburguesa.addEventListener("click",ajuste);
	play.addEventListener("click",preparado);
	pause.addEventListener("click", pausar);
	reiniciarEjercicio.addEventListener("click", reiniciar);
	continuarEjercicio.addEventListener("click", continuar);

	pausaAudio.addEventListener("click", pausaM);
	playAudio.addEventListener("click", playM);

	pausaVoz.addEventListener("click", quitarVoz);
	playVoz.addEventListener("click", ponerVoz);
}

function entrada()
{   
	ocultar();
    btnAtrasAbdomen.className="atras ocultar";
	seccion_00.className="entrada animated";
    seccion_01.className="inicio animated ocultar";
	seccion_02.className="ejercicios ocultar";
	    seccion_02_1.className="ejCalentamiento ocultar";
		seccion_02_2.className="ejAbdomen ocultar";
			seccion_02_2_1.className="abdomen1 ocultar";
		seccion_02_3.className="ejPiernas ocultar";
		seccion_02_4.className="ejBrazos ocultar";
		seccion_02_5.className="ejPectorales ocultar";
		seccion_02_6.className="ejGluteos ocultar";		
	seccion_03.className="acerca ocultar";
	seccion_04.className="ajuste ocultar";
	pausarEjercicio.className="menuPausa ocultar";
	avisoMano.className="chocala ocultar";
	setTimeout(principio, 3000);

}

function ocultar(){
	seccion_00.className="entrada ocultar";
    seccion_01.className="inicio ocultar";
	seccion_02.className="ejercicios ocultar";
	    seccion_02_1.className="ejCalentamiento ocultar";
		seccion_02_2.className="ejAbdomen ocultar";
			seccion_02_2_1.className="abdomen1 ocultar";
		seccion_02_3.className="ejPiernas ocultar";
		seccion_02_4.className="ejBrazos ocultar";
		seccion_02_5.className="ejPectorales ocultar";
		seccion_02_6.className="ejGluteos ocultar";	
	seccion_03.className="acerca ocultar";
	seccion_04.className="ajuste ocultar";
	btnAtrasAbdomen.className="atras ocultar";
	avisoMano.className="chocala ocultar";
	avisoMano.className="chocala ocultar";
	pausarEjercicio.className="menuPausa ocultar";
}

function principio()
{   y.autoplay = true;
	y.play();
	ocultar();
    seccion_01.className="inicio animated pulse";

}

function pausar(){

	time_is_on = 0;
	clearTimeout(controlTimer);
	bar.stop();
	
	if(time_is_on==0){
		ocultar();
		pausarEjercicio.className = "menuPausa animated pulse";
	}
	
}


function continuar(){

	ocultar();
	// principio();
	seccion_02_2_1.className="abdomen1 animated pulse";

	bar.animate(1.8, // {
 //    duration: 17500
	// }
	);

	setTimeout(()=>{
		if (!time_is_on) {
	    	time_is_on = 1;
	    	timer();
    	}
	},1000);
}


function reiniciar(){
	
	bar.destroy();
	clock.className="clock ocultar";
	clearTimeout(controlTimer);
	totalTime = 15;
	preparado();
	ejercicios();
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
function abrirMenu (event) {

	this.classList.toggle('is-active');
	document.querySelector( ".menuppal" ).classList.toggle("is_active");
	event.preventDefault();
}

function ejercicios()
{
    seccion_01.className="inicio ocultar";
	seccion_02.className="ejercicios animated pulse";
}

function calentamientoMenu()
{
	btnAtrasAbdomen.className="atras animated fadeInRightBig";
   	seccion_02.className="inicio ocultar";
	seccion_02_1.className="ejAbdomen animated pulse";
}

function abdomenMenu()
{   
	ocultar();
	btnAtrasAbdomen.className="atras animated fadeInRightBig";
   	// seccion_02.className="inicio ocultar";
	seccion_02_2.className="ejAbdomen animated pulse";
}
	
function abdomenN1()
{   
	ocultar();
	// seccion_02_2.className="ejAbdomen ocultar";
	seccion_02_2_1.className="abdomen1 animated pulse";
}

function piernasMenu()
{   
	btnAtrasAbdomen.className="atras animated fadeInRightBig";
   	seccion_02.className="inicio ocultar";
	seccion_02_3.className="ejAbdomen animated pulse";
}

function brazosMenu()
{   
	btnAtrasAbdomen.className="atras animated fadeInRightBig";
   	seccion_02.className="inicio ocultar";
	seccion_02_4.className="ejAbdomen animated pulse";
}

function pectoralesMenu()
{   
	btnAtrasAbdomen.className="atras animated fadeInRightBig";
   	seccion_02.className="inicio ocultar";
	seccion_02_5.className="ejAbdomen animated pulse";
}

function gluteosMenu()
{   
	btnAtrasAbdomen.className="atras animated fadeInRightBig";
   	seccion_02.className="inicio ocultar";
	seccion_02_6.className="ejAbdomen animated pulse";
}

function circular(){
	bar = new ProgressBar.Circle(rueda, {
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
	 
	x.play(); 
	btnPlay.className="botonPlay ocultar";
	
    document.getElementById('premisa').style.left ="36px"; 
	document.getElementById('premisa').innerHTML = "¿PREPARADO?" , document.getElementById('premisa').classList.add("animated" , "fadeInRightBig");                       
    setTimeout(function(){document.getElementById('premisa').innerHTML = "¿LISTO?" , document.getElementById('premisa').style.left ="99px" },3000);
    setTimeout(function(){document.getElementById('premisa').innerHTML = "¡YA!" , document.getElementById('premisa').style.left ="143px"},5000); 
    setTimeout(function(){document.getElementById('premisa').innerHTML = "" },7000);
    setTimeout(abdom1,7000);
    setTimeout(()=>{
		btnPausa.className="botonPausa animated fadeIn";
	    
	    if (!time_is_on){
	    	time_is_on = 1;
	    	// setTimeout(circular,1000);
	    	circular();
	    	timer();
    	}
	},7000); 
} 

function timer() {
	document.getElementById('clock').style.left ="143px";
    document.getElementById('clock').innerHTML = totalTime;		  
    clock.className="clock posicionBotones";
	if(totalTime==0){
		//document.getElementById('clock').style.left ="143px";
		//totalTime=25; //clave para el contador
		ocultar();
		// seccion_02_2_1.className="abdomen1 ocultar";
		
		avisoMano.className="chocala animated pulse";
		abdomenMano1.className="manoAbdomen1 animated bounceIn";


	} 
	else{
	    totalTime-=1;
	}
	if(totalTime<9){
	    document.getElementById('clock').style.left ="163px";
	}
	controlTimer = setTimeout(timer,1000);
}
 
function acerca()
{
    ocultar();
	seccion_03.className="acerca animated pulse";
}

function ajuste()
{   
	ocultar();
	seccion_04.className="ajuste animated pulse";
}

function pausaM(){
	y.pause();
	off.className="offA ocultar";
	on.className="onA animated fadeIn";
}

function playM(){
	y.play();
	on.className="onA ocultar ";
	off.className="offA animated fadeIn";
	
}
function quitarVoz(){
offV.className="offVoz ocultar";
onV.className="onVoz animated fadeIn";	
x.muted = true;
}
function ponerVoz(){
onV.className="onVoz ocultar";	
offV.className="offVoz animated fadeIn";
x.muted = false;
}

function abdom1()
{
abdStatic1.className="abdS ocultar";	
abdDinamic1.className="abdD mostrar";	
}



