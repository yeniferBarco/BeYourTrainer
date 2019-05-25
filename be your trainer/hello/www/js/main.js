var comenzar="";
var acercaDe="";
var ajustes="";
var menu = document.querySelector('.hamburger');
var atrasInicio = "";
var atrasAjuste = "";
var atrasAcerca = "";
var atrasAbdomen ="";
var atrasAbdInstructivo = "";

var calentamiento = "";
var abdomen = "";
var piernas = "";
var brazos = "";
var pectorales = "";
var gluteos = ""; 

var ListoAbd = "";

//Contadores para la pausa.
var totalTime = 10;
var controlTimer;
var time_is_on = 0;
var bar;
var barDescanso;

var ajustes_hamburguesa="";
var acercaDe_hamburguesa="";
var play="";
var pause = "";
var reiniciarEjercicio = "";
var continuarEjercicio = "";

// miniaturas abdomen
var minAbd_1="";
var minAbd_2="";
var minAbd_3="";
var minAbd_4="";
var minAbd_5="";

//para pasar de instructivo abdomen
var abdomenAtras1 ="";
var abdomenAdelante1 ="";
var abdomenAtras2 ="";
var abdomenAdelante2 ="";
var abdomenAtras3 ="";
var abdomenAdelante3 ="";
var abdomenAtras4 ="";
var abdomenAdelante4 ="";
var abdomenAtras5 ="";
var abdomenAdelante5 ="";



var x = document.getElementById("audio1");
var y = document.getElementById("audioFondo");


var pausaAudio = "";
var playAudio = "";

var pausaVoz = "";
var playVoz = "";

var ejercicio = 1;
var pantalla = 1;
var animacion = 1;
var contPausa = 1;

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
	atrasAbdInstructivo = document.getElementById('btnAtrasMinAbdomen');
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

	minAbd_1=document.getElementById('adbMin_1');
	minAbd_2=document.getElementById('adbMin_2');
	minAbd_3=document.getElementById('adbMin_3');
	minAbd_4=document.getElementById('adbMin_4');
	minAbd_5=document.getElementById('adbMin_5');

	abdomenAtras1=document.getElementById('atrasInt1');
	abdomenAdelante1=document.getElementById('adelanteInt1');
	abdomenAtras2=document.getElementById('atrasInt2');
	abdomenAdelante2=document.getElementById('adelanteInt2');
	abdomenAtras3=document.getElementById('atrasInt3');
	abdomenAdelante3=document.getElementById('adelanteInt3');
	abdomenAtras4=document.getElementById('atrasInt4');
	abdomenAdelante4=document.getElementById('adelanteInt4');
	abdomenAtras5=document.getElementById('atrasInt5');
	abdomenAdelante5=document.getElementById('adelanteInt5');

}


function asignarEventos()
{
	comenzar.addEventListener("click",ejercicios);
	// menuEjercicios.addEventListener("click", menuHamburguesa);
	atrasInicio.addEventListener("click", retroceder);
	atrasAjuste.addEventListener("click", retroceder);
	atrasAcerca.addEventListener("click", retroceder);
	atrasAbdomen.addEventListener("click", retrocederMenu);
	atrasAbdInstructivo.addEventListener("click", abdomenMenu);
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

	minAbd_1.addEventListener("click",inst1_abd);
	minAbd_2.addEventListener("click",inst2_abd);
	minAbd_3.addEventListener("click",inst3_abd);
	minAbd_4.addEventListener("click",inst4_abd);
	minAbd_5.addEventListener("click",inst5_abd);

	abdomenAtras1.addEventListener("click",inst5_abd);
    abdomenAdelante1.addEventListener("click",inst2_abd);
    abdomenAtras2.addEventListener("click",inst1_abd);
    abdomenAdelante2.addEventListener("click",inst3_abd);
    abdomenAtras3.addEventListener("click",inst2_abd);
    abdomenAdelante3.addEventListener("click",inst4_abd);
    abdomenAtras4.addEventListener("click",inst3_abd);
    abdomenAdelante4.addEventListener("click",inst5_abd);
    abdomenAtras5.addEventListener("click",inst4_abd);
    abdomenAdelante5.addEventListener("click",inst1_abd);


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
	descansoEjercicio.className = "descanso ocultar";
	setTimeout(principio, 3000);

}

function ocultar(){
	seccion_00.className="entrada ocultar";
    seccion_01.className="inicio ocultar";
	seccion_02.className="ejercicios ocultar";
	    seccion_02_1.className="ejCalentamiento ocultar";
		seccion_02_2.className="ejAbdomen ocultar";
			instAbd_1.className="instAbd_1 ocultar";
			instAbd_2.className="instAbd_2 ocultar";
			instAbd_3.className="instAbd_3 ocultar";
			instAbd_4.className="instAbd_4 ocultar";
			instAbd_5.className="instAbd_5 ocultar";
			seccion_02_2_1.className="abdomen1 ocultar";
			seccion_02_2_2.className="abdomen2 ocultar";
		seccion_02_3.className="ejPiernas ocultar";
		seccion_02_4.className="ejBrazos ocultar";
		seccion_02_5.className="ejPectorales ocultar";
		seccion_02_6.className="ejGluteos ocultar";	
	seccion_03.className="acerca ocultar";
	seccion_04.className="ajuste ocultar";
	btnAtrasAbdomen.className="atras ocultar";
	btnAtrasMinAbdomen.className="atras ocultar";
	avisoMano.className="chocala ocultar";
	pausarEjercicio.className="menuPausa ocultar";
	descansoEjercicio.className = "descanso ocultar";
	btnPlay.className="botonPlay ocultar";
	btnPausa.className="botonPausa ocultar";
	clock.className="clock ocultar";
	rueda.className="rueda ocultar";

	abdDinamic22.className = "abdD_2 ocultar";

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
	switch(contPausa){
		case 1:
		seccion_02_2_1.className="abdomen1 animated pulse";
		break;
        case 2:
        seccion_02_2_2.className="abdomen2 animated pulse";
        abdDinamic22.className = "abdD_2 animaciones2 mostrar";
        break;

	   }
	clock.className="clock posicionBotones animated fadeInLeftBig";
	rueda.className="rueda posicionBotones mostrar";

	bar.animate(1.8, // {
 	//duration: 17500
	// }
	);

	setTimeout(()=>{
		if (!time_is_on) {
	    	time_is_on = 1;
	    	timer();
	    	btnPausa.className="botonPausa animated fadeIn"; 
    	}
	},1000);
}


function reiniciar(){
	
	ocultar();
	ejercicios();
	bar.destroy();
	clock.className="clock ocultar";
	clearTimeout(controlTimer);
	
	totalTime = 15;

	abdDinamic1.className="abdD ocultar";
	abdStatic1.className="abdS animaciones mostrar";
	btnPausa.className="botonPausa ocultar";
	btnPlay.className="botonPlay ocultar";
	ejercicio = 1;
	pantalla = 1;
    animacion = 1;
    contPausa = 1;

    //muyyy importante mostrar y ocultar todos tal y como esta arriba
    abdStatic2.className= "abdS animaciones2 mostrar";

}

function reiniciarInterfaces(){
	barDescanso.destroy();
	bar.destroy();		
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
function abrirMenu(event) {

	this.classList.toggle('is-active');
	document.querySelector( ".menuppal" ).classList.toggle("is_active");
	event.preventDefault();
}

function ejercicios()
{   

    ocultar();
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
	btnPlay.className="botonPlay animated fadeInLeftBig"
	seccion_02_2_1.className="abdomen1 animated pulse";
}


function inst1_abd() {
	ocultar();
	instAbd_1.className="instAbd_1 animated pulse";
	btnAtrasMinAbdomen.className="atras animated fadeInRightBig";
}

function inst2_abd() {
	ocultar();
	instAbd_2.className="instAbd_2 animated pulse";
	btnAtrasMinAbdomen.className="atras animated fadeInRightBig";
}

function inst3_abd() {
	ocultar();
	instAbd_3.className="instAbd_3 animated pulse";
	btnAtrasMinAbdomen.className="atras animated fadeInRightBig";
}

function inst4_abd() {
	ocultar();
	instAbd_4.className="instAbd_4 animated pulse";
	btnAtrasMinAbdomen.className="atras animated fadeInRightBig";
}

function inst5_abd() {
	ocultar();
	instAbd_5.className="instAbd_5 animated pulse";
	btnAtrasMinAbdomen.className="atras animated fadeInRightBig";
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
	 
	premisas();


    

    console.log(animacion);

    switch(animacion){

    	case 1:
    		setTimeout(abdom1,7000);
    		break;
    	case 2:
    	    setTimeout(cabiarA50,6000);
    		setTimeout(abdom2,7000);
    		break;
    }

    animacion++;

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

function premisas(){
	x.play(); 
	btnPlay.className="botonPlay ocultar";
	premisa.className="premisa animated fadeInRightBig";
	
    document.getElementById('premisa').style.left ="36px"; 
	document.getElementById('premisa').innerHTML = "¿PREPARADO?" , document.getElementById('premisa').classList.add("animated" , "fadeInRightBig");                       
    setTimeout(function(){document.getElementById('premisa').innerHTML = "¿LISTO?" , document.getElementById('premisa').style.left ="99px" },3000);
    setTimeout(function(){document.getElementById('premisa').innerHTML = "¡YA!" , document.getElementById('premisa').style.left ="143px"},5000); 
    setTimeout(function(){document.getElementById('premisa').innerHTML = "" },7000);
}

function timer() {
	document.getElementById('clock').style.left ="143px";
    document.getElementById('clock').innerHTML = totalTime;		  
    // clock.className="clock posicionBotones";
	if(totalTime==0){
		//document.getElementById('clock').style.left ="143px";
		//totalTime=25; //clave para el contador
		//ocultar();
		// seccion_02_2_1.className="abdomen1 ocultar";
		btnPausa.className="botonPausa ocultar";
		ejercicio++;
		if(ejercicio<3){
			descansar();
		}
		//avisoMano.className="chocala animated pulse";
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
 



function descansar(){
	ocultar();
	descansoEjercicio.className="descanso animated pulse";
	barDescanso = new ProgressBar.Line(descansoEjercicio, {
	  strokeWidth: 4,
	  easing: 'easeInOut',
	  duration: 15000,
	  color: '#f3ff00',
	  trailColor: 'black',
	  trailWidth: 1,
	  svgStyle: {width: '100%', height: '100%'}
	});
	barDescanso.animate(1.0);
	pantalla++;
	contPausa++;
	setTimeout(pasarAbdomen,15000);
}

function pasarAbdomen()
{  
	ocultar();
	switch(pantalla){

		case 2:
		    totalTime=1000000;
			seccion_02_2_2.className="abdomen2 animated pulse";
			btnPlay.className="botonPlay animated fadeInLeftBig";
			ejercicio=1;
			reiniciarInterfaces();
		break;
	}

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
	totalTime = 5;
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	abdStatic1.className="abdS ocultar";	
	abdDinamic1.className="abdD animaciones mostrar";	
}

function abdom2(){
	// totalTime = 50;
	circular();
	bar.animate(1.0,{duration: 55000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	abdStatic2.className= "abdS ocultar";
	abdDinamic22.className = "abdD_2 animaciones2 mostrar";
}

function cabiarA50(){
	totalTime=50;
}





