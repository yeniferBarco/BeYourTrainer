var comenzar="";
var acercaDe="";
var ajustes="";
var menu = document.querySelector('.hamburger');
var atrasInicio = "";
var atrasAjuste = "";
var atrasAcerca = "";
var atrasAbdomen ="";
var atrasCalentamiento="";
var atrasAbdInstructivo = "";
var atrasCalInstructivo = "";
var atrasPecInstructivo = "";


var calentamiento = "";
var abdomen = "";
var piernas = "";
var brazos = "";
var pectorales = "";
var gluteos = ""; 

var ListoAbd = "";
var ListoPier = "";
var ListoBra = "";
var ListoPec = "";
var ListoGlu = "";
var ListoCal = "";

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
var mano = "";

// miniaturas abdomen
var minAbd_1="";
var minAbd_2="";
var minAbd_3="";
var minAbd_4="";
var minAbd_5="";

//miniaturas calentamiento

//miniaturas pectorales
var minPec_1="";
var	minPec_2="";
var	minPec_3="";

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


// pasar de instrctivo calentamiento
var calentamientoAtras1 ="";
var calentamientoAdelante1 ="";
var calentamientoAtras2 ="";
var calentamientoAdelante2 ="";
var calentamientoAtras3 ="";
var calentamientoAdelante3 ="";
var calentamientoAtras4 ="";
var calentamientoAdelante4 ="";
var calentamientoAtras5 ="";
var calentamientoAdelante5 ="";
var calentamientoAtras6 ="";
var calentamientoAdelante6 ="";
var calentamientoAtras7 ="";
var calentamientoAdelante7 ="";
var calentamientoAtras8 ="";
var calentamientoAdelante8 ="";
var calentamientoAtras9 ="";
var calentamientoAdelante9 ="";
var calentamientoAtras10 ="";
var calentamientoAdelante10 ="";


// pasar de instrctivo pectorales
var pectoralesAtras1 ="";
var pectoralesAdelante1 ="";
var pectoralesAtras2 ="";
var pectoralesAdelante2 ="";
var pectoralesAtras3 ="";
var pectoralesAdelante3 ="";

// var x = document.getElementById("audio1");
var y = document.getElementById("audioFondo"); //50 segundos preparad050
var z = document.getElementById("audioMano");

var audioSilbido = document.getElementById("audioSilbido");
var manoChocar = document.getElementById("audiomanoAparece");
var audioDescansar = document.getElementById("audioDescanso");
var audiopreparado50= document.getElementById("preparado50");
var audiopreparado25 = document.getElementById("preparado25");
var audiopreparado30= document.getElementById("preparado30");
var audiopreparado20= document.getElementById("preparado20");
var audiopreparado15= document.getElementById("preparado15");


var pausaAudio = "";
var playAudio = "";

var pausaVoz = "";
var playVoz = "";

// Contadores de SWITCH
var ejercicio = 1;
var pantalla = 1;
var animacion = 1;
var contPausa = 1;
var interfaceFinal = 0;
//para diferenciar en la premisa la parte del cuerpo
var cuerpo = 1;

//Var para los tipos de audio
var tipoAudio = 50;


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
	atrasCalentamiento = document.getElementById('btnAtrasCalentamiento');
	atrasPiernas = document.getElementById('btnAtrasPiernas');
	atrasBrazos = document.getElementById('btnAtrasBrazos');
	atrasPectorales = document.getElementById('btnAtrasPectorales');
	atrasGluteos = document.getElementById('btnAtrasGluteos');
	atrasCalentamiento = document.getElementById('btnAtrasMinCalentamiento')
	atrasAbdInstructivo = document.getElementById('btnAtrasMinAbdomen');
	atrasCalInstructivo = document.getElementById('btnAtrasMinCalentamiento');
	atrasPecInstructivo = document.getElementById('btnAtrasMinPectorales');
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
    ListoPier= document.getElementById('btnListoPies');
    ListoBra= document.getElementById('btnListoBra');
    ListoPec= document.getElementById('btnListoPec');
    ListoGlu= document.getElementById('btnListoGlu');
    ListoCal= document.getElementById('btnListoCal');

	play= document.getElementById('btnPlay');
	pause= document.getElementById('btnPausa');


	reiniciarEjercicio= document.getElementById('btnAbandonarPausa');
	continuarEjercicio= document.getElementById('btnContinuar');
	mano = document.getElementById('abdomenMano1');
	pausaAudio= document.getElementById('off');
	playAudio= document.getElementById('on');
	pausaVoz= document.getElementById('offV');
	playVoz= document.getElementById('onV');

	minAbd_1=document.getElementById('adbMin_1');
	minAbd_2=document.getElementById('adbMin_2');
	minAbd_3=document.getElementById('adbMin_3');
	minAbd_4=document.getElementById('adbMin_4');
	minAbd_5=document.getElementById('adbMin_5');


	minCal_1=document.getElementById('calMin_1');
	minCal_2=document.getElementById('calMin_2');
	minCal_3=document.getElementById('calMin_3');
	minCal_4=document.getElementById('calMin_4');
	minCal_5=document.getElementById('calMin_5');
	minCal_6=document.getElementById('calMin_6');
	minCal_7=document.getElementById('calMin_7');
	minCal_8=document.getElementById('calMin_8');
	minCal_9=document.getElementById('calMin_9');
	minCal_10=document.getElementById('calMin_10');


	minPec_1=document.getElementById('pecMin_1');
	minPec_2=document.getElementById('pecMin_2');
	minPec_3=document.getElementById('pecMin_3');

	//Boton de retroceder y avanzar abdomen
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

	//Boton de retroceder y avanzar calentamiento
	calentamientoAtras1 = document.getElementById('atrasIntCal1');
	calentamientoAdelante1 = document.getElementById('adelanteCal1');
	calentamientoAtras2 = document.getElementById('atrasIntCal2');
	calentamientoAdelante2 = document.getElementById('adelanteCal2');
	calentamientoAtras3 = document.getElementById('atrasIntCal3');
	calentamientoAdelante3 = document.getElementById('adelanteCal3');
	calentamientoAtras4 = document.getElementById('atrasIntCal4');
	calentamientoAdelante4 =document.getElementById('adelanteCal4');
	calentamientoAtras5 = document.getElementById('atrasIntCal5');
	calentamientoAdelante5 = document.getElementById('adelanteCal5');
	calentamientoAtras6 = document.getElementById('atrasIntCal6');
	calentamientoAdelante6 = document.getElementById('adelanteCal6');
	calentamientoAtras7 = document.getElementById('atrasIntCal7');
	calentamientoAdelante7 = document.getElementById('adelanteCal7');
	calentamientoAtras8 = document.getElementById('atrasIntCal8');
	calentamientoAdelante8 = document.getElementById('adelanteCal8');
	calentamientoAtras9 = document.getElementById('atrasIntCal9');
	calentamientoAdelante9 = document.getElementById('adelanteCal9');
	calentamientoAtras10 = document.getElementById('atrasIntCal10');
	calentamientoAdelante10 =document.getElementById('adelanteCal10'); 

	//Boton de retroceder y avanzar pectorales
	pectoralesAtras1 = document.getElementById('atrasIntPec1');
	pectoralesAdelante1 = document.getElementById('adelantePec1');
	pectoralesAtras2 = document.getElementById('atrasIntPec2');
	pectoralesAdelante2 = document.getElementById('adelantePec2');
	pectoralesAtras3 = document.getElementById('atrasIntPec3');
	pectoralesAdelante3 = document.getElementById('adelantePec3');

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
	atrasCalInstructivo.addEventListener("click", calentamientoMenu);
	atrasPecInstructivo.addEventListener("click", pectoralesMenu);
	acercaDe.addEventListener("click",acerca);
	ajustes.addEventListener("click",ajuste);

	calentamiento.addEventListener("click",calentamientoMenu);
	abdomen.addEventListener("click",abdomenMenu);
	piernas.addEventListener("click",piernasMenu);
	brazos.addEventListener("click",brazosMenu);
	pectorales.addEventListener("click",pectoralesMenu);
	gluteos.addEventListener("click",gluteosMenu);


	ListoAbd.addEventListener("click",abdomenN1);
    ListoPier.addEventListener("click",piernasN1);
    ListoBra.addEventListener("click",brazosN1);
    ListoPec.addEventListener("click",pectoralesN1);
    ListoGlu.addEventListener("click", gluteosN1);
    ListoCal.addEventListener("click", calentamientoN1);


	menu.addEventListener('click', abrirMenu, false);
	acercaDe_hamburguesa.addEventListener("click",acerca);
	ajustes_hamburguesa.addEventListener("click",ajuste);


	play.addEventListener("click",preparado);
	pause.addEventListener("click", pausar);


	reiniciarEjercicio.addEventListener("click", reiniciar);
	continuarEjercicio.addEventListener("click", continuar);
	mano.addEventListener("click", reload);
	pausaAudio.addEventListener("click", pausaM);
	playAudio.addEventListener("click", playM);

	pausaVoz.addEventListener("click", quitarVoz);
	playVoz.addEventListener("click", ponerVoz);


	//instructivo para abdomen
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

   	//instructivo para calentamiento
   	calMin_1.addEventListener("click",inst1_cal);
   	calMin_2.addEventListener("click",inst2_cal);
   	calMin_3.addEventListener("click",inst3_cal);
   	calMin_4.addEventListener("click",inst4_cal);
   	calMin_5.addEventListener("click",inst5_cal);
   	calMin_6.addEventListener("click",inst6_cal);
   	calMin_7.addEventListener("click",inst7_cal);
   	calMin_8.addEventListener("click",inst8_cal);
   	calMin_9.addEventListener("click",inst9_cal);
   	calMin_10.addEventListener("click",inst10_cal);

   	calentamientoAtras1.addEventListener("click",inst10_cal);
	calentamientoAdelante1.addEventListener("click",inst2_cal);
	calentamientoAtras2.addEventListener("click",inst1_cal); 
	calentamientoAdelante2.addEventListener("click",inst3_cal); 
	calentamientoAtras3.addEventListener("click",inst2_cal); 
	calentamientoAdelante3.addEventListener("click",inst4_cal); 
	calentamientoAtras4.addEventListener("click",inst3_cal); 
	calentamientoAdelante4.addEventListener("click",inst5_cal); 
	calentamientoAtras5.addEventListener("click",inst4_cal); 
	calentamientoAdelante5.addEventListener("click",inst6_cal); 
	calentamientoAtras6.addEventListener("click",inst5_cal); 
	calentamientoAdelante6.addEventListener("click",inst7_cal); 
	calentamientoAtras7.addEventListener("click",inst6_cal); 
	calentamientoAdelante7.addEventListener("click",inst8_cal); 
	calentamientoAtras8.addEventListener("click",inst7_cal); 
	calentamientoAdelante8.addEventListener("click",inst9_cal); 
	calentamientoAtras9.addEventListener("click",inst8_cal); 
	calentamientoAdelante9.addEventListener("click",inst10_cal); 
	calentamientoAtras10.addEventListener("click",inst9_cal); 
	calentamientoAdelante10.addEventListener("click",inst1_cal);



	//instructivo para pectorales
   	pecMin_1.addEventListener("click",inst1_pec);
	pecMin_2.addEventListener("click",inst2_pec);
	pecMin_3.addEventListener("click",inst3_pec);

	pectoralesAtras1.addEventListener("click",inst3_pec);
    pectoralesAdelante1.addEventListener("click",inst2_pec);
    pectoralesAtras2.addEventListener("click",inst1_pec);
    pectoralesAdelante2.addEventListener("click",inst3_pec);
    pectoralesAtras3.addEventListener("click",inst2_pec);
    pectoralesAdelante3.addEventListener("click",inst1_pec);
}

function entrada()
{   
	ocultar();
    btnAtrasAbdomen.className="atras ocultar";
   	btnAtrasCalentamiento.className="atras ocultar";
	btnAtrasPiernas.className="atras ocultar";
	btnAtrasBrazos.className="atras ocultar";
	btnAtrasPectorales.className="atras ocultar";
	btnAtrasGluteos.className="atras ocultar";
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
	 
	 if(JSON.parse(localStorage.getItem("salvacion"))){
	 	localStorage.setItem("salvacion", false);
	 	setTimeout(despuesDeMano, 3000);

	 }
	 else{
	 	setTimeout(principio, 3000);
	 }
	
	

}

function ocultar(){
	seccion_00.className="entrada ocultar";
    seccion_01.className="inicio ocultar";
	seccion_02.className="ejercicios ocultar";
	    seccion_02_1.className="ejCalentamiento ocultar";
	    	instCal_1.className="instCal_1 ocultar";
	    	instCal_2.className="instCal_2 ocultar";
	    	instCal_3.className="instCal_3 ocultar";
	    	instCal_4.className="instCal_4 ocultar";
	    	instCal_5.className="instCal_5 ocultar";
	    	instCal_6.className="instCal_6 ocultar";
	    	instCal_7.className="instCal_7 ocultar";
	    	instCal_8.className="instCal_8 ocultar";
	    	instCal_9.className="instCal_9 ocultar";
	    	instCal_10.className="instCal_10 ocultar";
	        seccion_02_1_1.className="calentamiento1 ocultar";
	        seccion_02_1_2.className="calentamiento2 ocultar";
	        seccion_02_1_3.className="calentamiento3 ocultar";
	        seccion_02_1_4.className="calentamiento4 ocultar";
	        seccion_02_1_5.className="calentamiento5 ocultar";
	        seccion_02_1_6.className="calentamiento6 ocultar";
	        seccion_02_1_7.className="calentamiento7 ocultar";
	        seccion_02_1_8.className="calentamiento8 ocultar";
	        seccion_02_1_9.className="calentamiento9 ocultar";
	        seccion_02_1_10.className="calentamiento10 ocultar";
		seccion_02_2.className="ejAbdomen ocultar";
			instAbd_1.className="instAbd_1 ocultar";
			instAbd_2.className="instAbd_2 ocultar";
			instAbd_3.className="instAbd_3 ocultar";
			instAbd_4.className="instAbd_4 ocultar";
			instAbd_5.className="instAbd_5 ocultar";
			seccion_02_2_1.className="abdomen1 ocultar";
			seccion_02_2_2.className="abdomen2 ocultar";
			seccion_02_2_3.className="abdomen3 ocultar";
			seccion_02_2_4.className="abdomen4 ocultar";
			seccion_02_2_5.className="abdomen5 ocultar";
		seccion_02_3.className="ejPiernas ocultar";
			seccion_02_3_1.className="piernas1 ocultar";
			seccion_02_3_2.className="piernas2 ocultar";
			seccion_02_3_3.className="piernas3 ocultar";
			seccion_02_3_4.className="piernas4 ocultar";
			seccion_02_3_5.className="piernas5 ocultar";
			seccion_02_3_6.className="piernas6 ocultar";
		seccion_02_4.className="ejBrazos ocultar";
			seccion_02_4_1.className="brazos1 ocultar";
			seccion_02_4_2.className="brazos2 ocultar";
			seccion_02_4_3.className="brazos3 ocultar";
			seccion_02_4_4.className="brazos4 ocultar";
			seccion_02_4_5.className="brazos5 ocultar";
		seccion_02_5.className="ejPectorales ocultar";
			instPec_1.className="instPec_1 ocultar";
			instPec_2.className="instPec_2 ocultar";
			instPec_3.className="instPec_3 ocultar";
			seccion_02_5_1.className="pectorales1 ocultar";
			seccion_02_5_2.className="pectorales2 ocultar";
			seccion_02_5_3.className="pectorales3 ocultar";
		seccion_02_6.className="ejGluteos ocultar";	
			seccion_02_6_1.className="gluteos1 ocultar";
			seccion_02_6_2.className="gluteos2 ocultar";
			seccion_02_6_3.className="gluteos3 ocultar";
			seccion_02_6_4.className="gluteos4 ocultar";
			seccion_02_6_5.className="gluteos5 ocultar";
			seccion_02_6_6.className="gluteos6 ocultar";
	seccion_03.className="acerca ocultar";
	seccion_04.className="ajuste ocultar";

	btnAtrasAbdomen.className="atras ocultar";
	btnAtrasCalentamiento.className="atras ocultar";
	btnAtrasPiernas.className="atras ocultar";
	btnAtrasBrazos.className="atras ocultar";
	btnAtrasPectorales.className="atras ocultar";
	btnAtrasGluteos.className="atras ocultar";

	btnAtrasMinAbdomen.className="atras ocultar";
	btnAtrasMinCalentamiento.className="atras ocultar";
	btnAtrasMinPectorales.className="atras ocultar";

	avisoMano.className="chocala ocultar";
	pausarEjercicio.className="menuPausa ocultar";
	descansoEjercicio.className = "descanso ocultar";

	btnPlay.className="botonPlay ocultar";
	btnPausa.className="botonPausa ocultar";



	clock.className="clock ocultar";
	rueda.className="rueda ocultar";
    //para el reiniciar
	abdDinamic22.className = "abdD_2 ocultar";
	abdDinamic33.className = "abdD_2 ocultar";
	abdDinamic44.className = "abdD_2 ocultar";
    //para el reiniciar
    pierDinamic1.className = "pierD ocultar";
    pierDinamic2.className = "pierD ocultar";
    pierDinamic3.className = "pierD ocultar";
    pierDinamic5.className = "pierD ocultar";
    pierDinamic6.className = "pierD ocultar";

    // para el reiniciar brazos
    braDinamic1.className = "braD ocultar";
    braDinamic2.className = "braD ocultar";
    braDinamic3.className = "braD ocultar";
    braDinamic5.className = "braD ocultar"

    //para el reiniciar pectorales
    pecDinamic1.className = "pecD ocultar";
    pecDinamic2.className = "pecD ocultar";
    pecDinamic3.className = "pecD ocultar";

    //para el reiniciar gluteos
    gluDinamic1.className = "gluD ocultar";
    gluDinamic2.className = "gluD ocultar";
    gluDinamic3.className = "gluD ocultar";
    gluDinamic4.className = "gluD ocultar";
    gluDinamic5.className = "gluD ocultar";
    gluDinamic6.className = "gluD ocultar";

    //para reiniciar calentamiento
    calDinamic1.className = "calD ocultar";
    calDinamic2.className = "calD ocultar";
    calDinamic3.className = "calD ocultar";
    calDinamic4.className = "calD ocultar";
    calDinamic8.className = "calD ocultar";
    calDinamic9.className = "calD ocultar";
    calDinamic10.className = "calD ocultar";
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
	audiopreparado50.pause();
	audiopreparado25.pause();
	audiopreparado30.pause();
	audiopreparado20.pause();
	audiopreparado15.pause();
	
	if(time_is_on==0){
		ocultar();
		pausarEjercicio.className = "menuPausa animated pulse";
	}
}

function continuar(){

	ocultar();

	switch(tipoAudio){

		case 50:
			audiopreparado50.play();
			break;
		case 25:
			audiopreparado25.play();
			break;
		case 30:
			audiopreparado30.play();
			break;
		case 20:
			audiopreparado20.play();
			break;
		case 15:
			audiopreparado15.play();
			break;

	}
    if(cuerpo==1)
    {

		switch(contPausa){
			case 1:
				seccion_02_2_1.className="abdomen1 animated pulse";
				break;
	        case 2:
		        seccion_02_2_2.className="abdomen2 animated pulse";
		        abdDinamic22.className = "abdD_2 animaciones2 mostrar";

	        	break;
	        case 3:
	        	seccion_02_2_3.className = "abdomen3 animted pulse";
	        	abdDinamic33.className = "abd_2 animaciones2 mostrar";
	        	break;
	        case 4:
	        	seccion_02_2_4.className = "abdomen4 animted pulse";
	        	abdDinamic44.className = "abd_2 animaciones2 mostrar";
	        	break;
	        case 5:
	        	seccion_02_2_5.className = "abdomen5 animted pulse";
	        	abdStatic5.className = "abdS animaciones2 mostrar";
	        	break;
		}

	}


	if(cuerpo==2)
    {

		switch(contPausa){
			case 1:
				seccion_02_3_1.className="piernas1 animated pulse";
				pierDinamic1.className="pierD  mostrar";
				break;
	        case 2:
		        seccion_02_3_2.className="piernas2 animated pulse";
		        pierDinamic2.className="pierD  mostrar";
	        	break;
	        case 3:
	        	seccion_02_3_3.className = "piernas3  animted pulse";
	        	pierDinamic3.className = "pierD mostrar";
	        	break;
	        case 4:
	        	seccion_02_3_4.className = "piernas4 animted pulse";
	        	pierStatic4.className = "pierS animaciones3 mostrar";
	        	break;
	        case 5:
	        	seccion_02_3_5.className = "piernas5 animted pulse";
	        	pierDinamic5.className = "pierD  mostrar";
	        	break;
	        case 6:
	        	seccion_02_3_6.className = "piernas6 animted pulse";
	        	pierDinamic6.className = "pierD  mostrar";
	        	break;        	

		}
	}

	if(cuerpo==3){

		switch(contPausa){
			case 1:
				seccion_02_4_1.className="brazos1 animated pulse";
				braDinamic1.className="braD  mostrar";
				break;
	        case 2:
		        seccion_02_4_2.className="brazos2 animated pulse";
		        braDinamic2.className="braD  mostrar";
	        	break;
	        case 3:
	        	seccion_02_4_3.className = "brazos3 animated pulse";
	        	braDinamic3.className = "braD mostrar";
	        	break;
	        case 4:
	        	seccion_02_4_4.className = "brazos4 animated pulse";
	        	braStatic4.className = "braS animaciones4 mostrar";
	        	break;
	        case 5:
	        	seccion_02_4_5.className = "brazos5 animted pulse";
	        	braDinamic5.className = "braD  mostrar";
	        	break;    	
		}

	}

	if(cuerpo==4){

		switch(contPausa){
			case 1:
				seccion_02_5_1.className="pectorales1 animated pulse";
				pecDinamic1.className="pecD  mostrar";
				break;
	        case 2:
		        seccion_02_5_2.className="pectorales2 animated pulse";
		        pecDinamic2.className="pecD  mostrar";
	        	break;
	        case 3:
	        	seccion_02_5_3.className = "pectorales3 animated pulse";
	        	pecDinamic3.className = "pecD mostrar";
	        	break;	
		}
	}

	if(cuerpo==5)
    {

	switch(contPausa){
		case 1:
			seccion_02_6_1.className="gluteos1 animated pulse";
			gluDinamic1.className="gluD mostrar";
			break;
        case 2:
	        seccion_02_6_2.className="gluteos2 animated pulse";
	        gluDinamic2.className="gluD mostrar";
        	break;
        case 3:
        	seccion_02_6_3.className = "gluteos3  animted pulse";
        	gluDinamic3.className = "gluD mostrar";
        	break;
        case 4:
        	seccion_02_6_4.className = "gluteos4 animted pulse";
        	gluDinamic4.className = "gluD animaciones3 mostrar";
        	break;
        case 5:
        	seccion_02_6_5.className = "gluteos5 animted pulse";
        	gluDinamic5.className = "gluD mostrar";
        	break;
        case 6:
        	seccion_02_6_6.className = "gluteos6 animted pulse";
        	gluDinamic6.className = "gluD mostrar";
        	break;        	

		}

	}


    if(cuerpo==6)
          {

	switch(contPausa){
		case 1:
			seccion_02_1_1.className="calentamiento1 animated pulse";
			calDinamic1.className="calD mostrar";
			break;
        case 2:
			seccion_02_1_2.className="calentamiento2 animated pulse";
			calDinamic2.className="calD mostrar";
        	break;
        case 3:
			seccion_02_1_3.className="calentamiento3 animated pulse";
			calDinamic3.className="calD mostrar";
        	break;
        case 4:
			seccion_02_1_4.className="calentamiento4 animated pulse";
			calDinamic4.className="calD mostrar";
        	break;
        case 5:
			seccion_02_1_5.className="calentamiento5 animated pulse";
			calStatic5.className="calS animaciones7 mostrar";
        	break;
        case 6:
			seccion_02_1_6.className="calentamiento6 animated pulse";
			calStatic6.className="calS animaciones7 mostrar";
        	break;
        case 7:
			seccion_02_1_7.className="calentamiento7 animated pulse";
			calStatic7.className="calS animaciones7 mostrar";
        	break;
        case 8:
			seccion_02_1_8.className="calentamiento8 animated pulse";
			calDinamic8.className="calD mostrar";
        	break;
        case 9:
			seccion_02_1_9.className="calentamiento9 animated pulse";
			calDinamic9.className="calD mostrar";
        	break; 
        case 10:
			seccion_02_1_10.className="calentamiento10 animated pulse";
			calDinamic10.className="calD mostrar";
        	break;          	         	        	         	        	

		}

	}	




	clock.className="clock posicionBotones animated fadeInLeftBig";
	rueda.className="rueda posicionBotones mostrar";

	bar.animate(1.0,  {
 	duration: 11000
	 }
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

	preparado20.currentTime = 0;
	preparado30.currentTime = 0;
	preparado25.currentTime = 0;
	preparado50.currentTime = 0;
	preparado15.currentTime = 0;
	
	abdDinamic1.className="abdD ocultar";
	abdStatic1.className="abdS animaciones mostrar";
	btnPausa.className="botonPausa ocultar";
	btnPlay.className="botonPlay ocultar";
	ejercicio = 1;
	pantalla = 1;
    animacion = 1;
    contPausa = 1;
    interfaceFinal = 0;
    cuerpo = 1;


    //muyyy importante mostrar y ocultar todos tal y como esta arriba
    abdStatic2.className= "abdS animaciones2 mostrar";
    abdStatic3.className= "abdS animaciones2 mostrar";
    abdStatic4.className= "abdS animaciones2 mostrar";
    abdStatic5.className= "abdS animaciones2 mostrar";
    //totalTime = 1000;

    //mostrar estatico piernas
    pierStatic1.className="pierS animaciones3 mostrar";
    pierStatic2.className="pierS animaciones3 mostrar";
    pierStatic3.className="pierS animaciones3 mostrar";
    pierStatic4.className="pierS animaciones3 mostrar";
    pierStatic5.className="pierS animaciones3 mostrar";
    pierStatic6.className="pierS animaciones3 mostrar";

     //mostrar estatico brazos
    braStatic1.className="braS animaciones4 mostrar";
    braStatic2.className="braS animaciones4 mostrar";
    braStatic3.className="braS animaciones4 mostrar";
    braStatic4.className="braS animaciones4 mostrar";
    braStatic5.className="braS animaciones4 mostrar";

    //mostrar estatico pectorales
    pecStatic1.className="pecS animaciones5 mostrar";
    pecStatic2.className="pecS animaciones5 mostrar";
    pecStatic3.className="pecS animaciones5 mostrar";

    //mostrar estatico pectorales
    gluStatic1.className="gluS animaciones6 mostrar";
    gluStatic2.className="gluS animaciones6 mostrar";
    gluStatic3.className="gluS animaciones6 mostrar";
    gluStatic4.className="gluS animaciones6 mostrar";
    gluStatic5.className="gluS animaciones6 mostrar";
    gluStatic6.className="gluS animaciones6 mostrar";
    //mostrar estado calentamiento
    calStatic1.className="calS animaciones7 mostrar";
    calStatic2.className="calS animaciones7 mostrar";
    calStatic3.className="calS animaciones7 mostrar";
    calStatic4.className="calS animaciones7 mostrar";
    calStatic5.className="calS animaciones7 mostrar";
    calStatic6.className="calS animaciones7 mostrar";
    calStatic7.className="calS animaciones7 mostrar";
    calStatic8.className="calS animaciones7 mostrar";
    calStatic9.className="calS animaciones7 mostrar";
    calStatic10.className="calS animaciones7 mostrar";

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
	ocultar();
	btnAtrasCalentamiento.className="atras animated fadeInRightBig";
   	seccion_02.className="inicio ocultar";
	seccion_02_1.className="ejAbdomen animated pulse";
}

function calentamientoN1()
{

    ocultar();
    cuerpo=6;
	btnPlay.className="botonPlay animated fadeInLeftBig"
	seccion_02_1_1.className="calentamiento1 animated pulse";

}

function inst1_cal() {
	ocultar();
	instCal_1.className="instCal_1 animated pulse";
	btnAtrasMinCalentamiento.className="atras animated fadeInRightBig";
}

function inst2_cal() {
	ocultar();
	instCal_2.className="instCal_2 animated pulse";
	btnAtrasMinCalentamiento.className="atras animated fadeInRightBig";
}
function inst3_cal() {
	ocultar();
	instCal_3.className="instCal_3 animated pulse";
	btnAtrasMinCalentamiento.className="atras animated fadeInRightBig";
}
function inst4_cal() {
	ocultar();
	instCal_4.className="instCal_4 animated pulse";
	btnAtrasMinCalentamiento.className="atras animated fadeInRightBig";	
}
function inst5_cal() {
	ocultar();
	instCal_5.className="instCal_5 animated pulse";
	btnAtrasMinCalentamiento.className="atras animated fadeInRightBig";
}
function inst6_cal() {
	ocultar();
	instCal_6.className="instCal_6 animated pulse";
	btnAtrasMinCalentamiento.className="atras animated fadeInRightBig";
}
function inst7_cal() {
	ocultar();
	instCal_7.className="instCal_7 animated pulse";
	btnAtrasMinCalentamiento.className="atras animated fadeInRightBig";
}
function inst8_cal() {
	ocultar();
	instCal_8.className="instCal_8 animated pulse";
	btnAtrasMinCalentamiento.className="atras animated fadeInRightBig";
}
function inst9_cal() {
	ocultar();
	instCal_9.className="instCal_9 animated pulse";
	btnAtrasMinCalentamiento.className="atras animated fadeInRightBig";
}
function inst10_cal() {
	ocultar();
	instCal_10.className="instCal_10 animated pulse";
	btnAtrasMinCalentamiento.className="atras animated fadeInRightBig";	
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
	ocultar();
	btnAtrasAbdomen.className="atras animated fadeInRightBig";
   	seccion_02.className="inicio ocultar";
	seccion_02_3.className="ejAbdomen animated pulse";
}

function piernasN1()
{   
	ocultar();
    cuerpo=2;
	btnPlay.className="botonPlay animated fadeInLeftBig"
	seccion_02_3_1.className="piernas1 animated pulse";
}


function brazosMenu()
{   
	ocultar();
	btnAtrasAbdomen.className="atras animated fadeInRightBig";
   	seccion_02.className="inicio ocultar";
	seccion_02_4.className="ejAbdomen animated pulse";
}

function brazosN1()
{   
	ocultar();
    cuerpo=3;
	btnPlay.className="botonPlay animated fadeInLeftBig"
	seccion_02_4_1.className="brazos1 animated pulse";
}



function pectoralesMenu()
{   
	ocultar();
	btnAtrasAbdomen.className="atras animated fadeInRightBig";
   	seccion_02.className="inicio ocultar";
	seccion_02_5.className="ejAbdomen animated pulse";
}

function pectoralesN1()
{   
	ocultar();
    cuerpo=4;
	btnPlay.className="botonPlay animated fadeInLeftBig"
	seccion_02_5_1.className="pectorales1 animated pulse";
}

function inst1_pec() {
	ocultar();
	instPec_1.className="instPec_1 animated pulse";
	btnAtrasMinPectorales.className="atras animated fadeInRightBig";
}
function inst2_pec() {
	ocultar();
	instPec_2.className="instPec_2 animated pulse";
	btnAtrasMinPectorales.className="atras animated fadeInRightBig";
}
function inst3_pec() {
	ocultar();
	instPec_3.className="instPec_3 animated pulse";
	btnAtrasMinPectorales.className="atras animated fadeInRightBig";
}

function gluteosMenu()
{   
	ocultar();
	btnAtrasAbdomen.className="atras animated fadeInRightBig";
   	seccion_02.className="inicio ocultar";
	seccion_02_6.className="ejAbdomen animated pulse";
}

function gluteosN1()
{   
	ocultar();
    cuerpo=5;
	btnPlay.className="botonPlay animated fadeInLeftBig"
	seccion_02_6_1.className="gluteos1 animated pulse";
}

function circular(){
	switch(cuerpo){
		case 1:
			bar = new ProgressBar.Circle(rueda, {
			strokeWidth: 6,
			easing: 'easeInOut',
			duration: 55000,
			color: '#f3ff00',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: null
			});
		    bar.animate(1.0);
		    break;
	    case 2:
		    bar = new ProgressBar.Circle(rueda, {
			strokeWidth: 6,
			easing: 'easeInOut',
			duration: 33000,
			color: '#f3ff00',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: null
			});
		    bar.animate(1.0);
		    break;
		case 3:
		 	bar = new ProgressBar.Circle(rueda, {
			strokeWidth: 6,
			easing: 'easeInOut',
			duration: 33000,
			color: '#f3ff00',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: null
			});
		    bar.animate(1.0);
		    break;
		case 4:
		 	bar = new ProgressBar.Circle(rueda, {
			strokeWidth: 6,
			easing: 'easeInOut',
			duration: 17000,
			color: '#f3ff00',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: null
			});
		    bar.animate(1.0);
		    break;
		case 5:
		 	bar = new ProgressBar.Circle(rueda, {
			strokeWidth: 6,
			easing: 'easeInOut',
			duration: 27000,
			color: '#f3ff00',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: null
			});
		    bar.animate(1.0);
		    break;
		case 6:
		 	bar = new ProgressBar.Circle(rueda, {
			strokeWidth: 6,
			easing: 'easeInOut',
			duration: 17000,
			color: '#f3ff00',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: null
			});
		    bar.animate(1.0);
		    break;			    		

    }
}

function preparado(){
	 
	premisas();

    console.log(animacion);
    if(cuerpo==1){
	    switch(animacion){

	    	case 1:
	    		setTimeout(abdom1,7000);
	    		break;
	    	case 2:
	    	    setTimeout(cabiarA50,6000);
	    		setTimeout(abdom2,7000);
	    		break;
	    	case 3:
	    		setTimeout(cabiarA25,6000);
	    		setTimeout(abdom3,7000);
	    		break;
	    	case 4:
	    		setTimeout(cabiarA25,6000);
	    		setTimeout(abdom4,7000);
	    		break;
	    	case 5:
	    		setTimeout(cabiarA50,6000);
	    		setTimeout(abdom5,7000);
	    		break;
	    }

    }

    if(cuerpo==2)
    {
     
     	switch(animacion){

	    	case 1:
	    		setTimeout(cabiarA30,6000);
	    		setTimeout(pier1,7000);
	    		break;
	    	case 2:
	    	    setTimeout(cabiarA30,6000);
	    		setTimeout(pier2,7000);
	    		break;
	    	case 3:
	    		setTimeout(cabiarA20,6000);
	    		setTimeout(pier3,7000);
	    		break;
	    	case 4:
	    		setTimeout(cabiarA30,6000);
	    		setTimeout(pier4,7000);
	    		break;
	    	case 5:
	    		setTimeout(cabiarA30,6000);
	    		setTimeout(pier5,7000);
	    		break;
	    	case 6:
	    		setTimeout(cabiarA20,6000);
	    		setTimeout(pier6,7000);
	    		break;	
  		}

    }

    if(cuerpo==3){
	    switch(animacion){

	    	case 1:
	    		setTimeout(bra1,7000);
	    		break;
	    	case 2:
	    	    setTimeout(cabiarA30,6000);
	    		setTimeout(bra2,7000);
	    		break;
	    	case 3:
	    		setTimeout(cabiarA15,6000);
	    		setTimeout(bra3,7000);
	    		break;
	    	case 4:
	    		setTimeout(cabiarA30,6000);
	    		setTimeout(bra4,7000);
	    		break;
	    	case 5:
	    		setTimeout(cabiarA30,6000);
	    		setTimeout(bra5,7000);
	    		break;
	    }

    }

    if(cuerpo==4){
	    switch(animacion){

	    	case 1:
	    		setTimeout(pec1,7000);
	    		break;
	    	case 2:
	    	    setTimeout(cabiarA15,6000);
	    		setTimeout(pec2,7000);
	    		break;
	    	case 3:
	    		setTimeout(cabiarA15,6000);
	    		setTimeout(pec3,7000);
	    		break;
	    }
    }

    if(cuerpo==5)
    {
     
     	switch(animacion){

	    	case 1:
	    		setTimeout(cabiarA25,6000);
	    		setTimeout(glu1,7000);
	    		break;
	    	case 2:
	    	    setTimeout(cabiarA25,6000);
	    		setTimeout(glu2,7000);
	    		break;
	    	case 3:
	    		setTimeout(cabiarA25,6000);
	    		setTimeout(glu3,7000);
	    		break;
	    	case 4:
	    		setTimeout(cabiarA25,6000);
	    		setTimeout(glu4,7000);
	    		break;
	    	case 5:
	    		setTimeout(cabiarA25,6000);
	    		setTimeout(glu5,7000);
	    		break;
	    	case 6:
	    		setTimeout(cabiarA20,6000);
	    		setTimeout(glu6,7000);
	    		break;	
  		}

    }

if(cuerpo==6)
    {
     
     	switch(animacion){

	    	case 1:
	    		setTimeout(cabiarA15,6000);
	    		setTimeout(cal1,7000);
	    		break;
	    	case 2:
	    	    setTimeout(cabiarA15,6000);
	    		setTimeout(cal2,7000);
	    		break;
	    	case 3:
	    		setTimeout(cabiarA15,6000);
	    		setTimeout(cal3,7000);
	    		break;
	    	case 4:
	    		setTimeout(cabiarA15,6000);
	    		setTimeout(cal4,7000);
	    		break;
	    	case 5:
	    		setTimeout(cabiarA15,6000);
	    		setTimeout(cal5,7000);
	    		break;
	    	case 6:
	    		setTimeout(cabiarA15,6000);
	    		setTimeout(cal6,7000);
	    		break;
	    	case 7:
	    		setTimeout(cabiarA15,6000);
	    		setTimeout(cal7,7000);
	    		break;
	    	case 8:
	    		setTimeout(cabiarA20,6000);
	    		setTimeout(cal8,7000);
	    		break;
	    	case 9:
	    		setTimeout(cabiarA20,6000);
	    		setTimeout(cal9,7000);
	    		break;
	    	case 10:
	    		setTimeout(cabiarA20,6000);
	    		setTimeout(cal10,7000);
	    		break;


  		}

    }    

    animacion++;

    setTimeout(()=>{
		btnPausa.className="botonPausa animated fadeIn";
	    
	    if (!time_is_on){
	    	time_is_on = 1;
	    	circular();
	    	timer();
    	}
	},7000); 
} 



function premisas(){

	if(cuerpo==1){
		switch(tipoAudio){

			case 50:
				audiopreparado50.autoplay = true;
				audiopreparado50.play();
				break;
			case 25:
				audiopreparado25.autoplay = true;
				audiopreparado25.play();
				break;
		}
	}
	if(cuerpo==2){

		if (pantalla==1){
			tipoAudio=30;
		}

		switch(tipoAudio){

			case 30:
				audiopreparado30.autoplay = true;
				audiopreparado30.play();
				break;
			case 20:
				audiopreparado20.autoplay = true;
				audiopreparado20.play();
				break;
		}
	}

	if(cuerpo==3){

		if (pantalla==1){
			tipoAudio=30;
		}

		switch(tipoAudio){

			case 30:
				audiopreparado30.autoplay = true;
				audiopreparado30.play();
				break;
			case 15:
				audiopreparado15.autoplay = true;
				audiopreparado15.play();
				break;
		}
	}

	if(cuerpo==4){

		if (pantalla==1){
			tipoAudio=15;
		}
		if (tipoAudio==15){
			audiopreparado15.autoplay = true;
			audiopreparado15.play();
		}
	}

	if(cuerpo==5){

		if (pantalla==1){
			tipoAudio=25;
		}

		switch(tipoAudio){

			case 25:
				audiopreparado25.autoplay = true;
				audiopreparado25.play();
				break;
			case 20:
				audiopreparado20.autoplay = true;
				audiopreparado20.play();
				break;
		}
	}

	if(cuerpo==6){

		if (pantalla==1){
			tipoAudio=15;
		}

		switch(tipoAudio){

			case 15:
				audiopreparado15.autoplay = true;
				audiopreparado15.play();
				break;
			case 20:
				audiopreparado20.autoplay = true;
				audiopreparado20.play();
				break;
		}
	}

	


    btnPlay.className="botonPlay ocultar";

   
	
	premisa.className="premisa mostrar";
	
    document.getElementById('premisa').style.left ="36px"; 
	document.getElementById('premisa').innerHTML = "¿PREPARADO?" , document.getElementById('premisa').classList.add("mostrar");                       
    setTimeout(function(){document.getElementById('premisa').innerHTML = "¿LISTO?" , document.getElementById('premisa').style.left ="99px" },3000);
    setTimeout(function(){document.getElementById('premisa').innerHTML = "¡YA!" , document.getElementById('premisa').style.left ="143px"},5000); 
    setTimeout(function(){document.getElementById('premisa').innerHTML = "" },7000);
}

function timer() {
	document.getElementById('clock').style.left ="143px";
    document.getElementById('clock').innerHTML = totalTime;		  
    // clock.className="clock posicionBotones";
	if(totalTime==0){

		btnPausa.className="botonPausa ocultar";
		ejercicio++;

		if(ejercicio<3){
			
			audioSilbido.autoplay = true;
			audioSilbido.play();

			setTimeout(descansar,1000);
		}
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

	 if (interfaceFinal==2) {
		avisoMano.className="chocala animated pulse";
		manoChocar.autoplay = true;
		manoChocar.play();
	}
	else{
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
		audioDescansar.autoplay = true;
		audioDescansar.play();
	}
	
}

function pasarAbdomen()
{  
	ocultar();
	if(cuerpo==1)
	{
		switch(pantalla){

			case 2:
			    totalTime=1000000;
			    tipoAudio=50;
				seccion_02_2_2.className="abdomen2 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
				break;
			case 3:
			    totalTime=1000000;
			    tipoAudio=25;
				seccion_02_2_3.className="abdomen3 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 4:
			    totalTime=1000000;
			    tipoAudio=25;
				seccion_02_2_4.className="abdomen4 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 5:
			    totalTime=1000000;
			    tipoAudio=50;
				seccion_02_2_5.className="abdomen5 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				interfaceFinal=2;
				reiniciarInterfaces();
			    break;

		}
   	}


   	if(cuerpo==2)
	{
		switch(pantalla){

			case 2:
			    totalTime=1000000;
			    tipoAudio=30;//mirar los switch de los audios
				seccion_02_3_2.className="piernas2 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
				break;
			case 3:
			    totalTime=1000000;
			    tipoAudio=20;
				seccion_02_3_3.className="piernas3 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 4:
			    totalTime=1000000;
			    tipoAudio=30;
				seccion_02_3_4.className="piernas4 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 5:
			    totalTime=1000000;
			    tipoAudio=30;
				seccion_02_3_5.className="piernas5 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				//interfaceFinal=2;
				reiniciarInterfaces();
			    break;
			case 6:
			    totalTime=1000000;
			    tipoAudio=20;
				seccion_02_3_6.className="piernas6 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				interfaceFinal=2;
				reiniciarInterfaces();
			    break;
	    

		}
   } 	

   if(cuerpo==3)
	{
		switch(pantalla){

			case 2:
			    totalTime=1000000;
			    tipoAudio=30;
				seccion_02_4_2.className="brazos2 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
				break;
			case 3:
			    totalTime=1000000;
			    tipoAudio=15;
				seccion_02_4_3.className="brazos3 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 4:
			    totalTime=1000000;
			    tipoAudio=30;
				seccion_02_4_4.className="brazos4 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 5:
			    totalTime=1000000;
			    tipoAudio=30;
				seccion_02_4_5.className="brazos5 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				interfaceFinal=2;
				reiniciarInterfaces();
			    break;

		}
   	}

   	if(cuerpo==4)
	{
		switch(pantalla){

			case 2:
			    totalTime=1000000;
			    tipoAudio=15;
				seccion_02_5_2.className="pectorales2 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
				break;
			case 3:
			    totalTime=1000000;
			    tipoAudio=15;
				seccion_02_5_3.className="pectorales3 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				interfaceFinal=2;
				reiniciarInterfaces();
			    break;
		}
   	}

   	if(cuerpo==5)
	{
		switch(pantalla){

			case 2:
			    totalTime=1000000;
			    tipoAudio=25;//mirar los switch de los audios
				seccion_02_6_2.className="gluteos2 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
				break;
			case 3:
			    totalTime=1000000;
			    tipoAudio=25;
				seccion_02_6_3.className="gluteos3 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 4:
			    totalTime=1000000;
			    tipoAudio=25;
				seccion_02_6_4.className="gluteos4 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 5:
			    totalTime=1000000;
			    tipoAudio=25;
				seccion_02_6_5.className="gluteos5 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				//interfaceFinal=2;
				reiniciarInterfaces();
			    break;
			case 6:
			    totalTime=1000000;
			    tipoAudio=20;
				seccion_02_6_6.className="gluteos6 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				interfaceFinal=2;
				reiniciarInterfaces();
			    break;
		}
   }

    if(cuerpo==6)
	   {
		switch(pantalla){

			case 2:
			    totalTime=1000000;
			    tipoAudio=15;//mirar los switch de los audios
				seccion_02_1_2.className="calentamiento2 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
				break;
			case 3:
			    totalTime=1000000;
			    tipoAudio=15;//mirar los switch de los audios
				seccion_02_1_3.className="calentamiento3 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 4:
			    totalTime=1000000;
			    tipoAudio=15;//mirar los switch de los audios
				seccion_02_1_4.className="calentamiento4 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 5:
			    totalTime=1000000;
			    tipoAudio=15;//mirar los switch de los audios
				seccion_02_1_5.className="calentamiento5 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 6:
			    totalTime=1000000;
			    tipoAudio=15;//mirar los switch de los audios
				seccion_02_1_6.className="calentamiento6 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 7:
			    totalTime=1000000;
			    tipoAudio=15;//mirar los switch de los audios
				seccion_02_1_7.className="calentamiento7 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 8:
			    totalTime=1000000;
			    tipoAudio=20;//mirar los switch de los audios
				seccion_02_1_8.className="calentamiento8 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;
			case 9:
			    totalTime=1000000;
			    tipoAudio=20;//mirar los switch de los audios
				seccion_02_1_9.className="calentamiento9 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				reiniciarInterfaces();
			    break;			    			    
			case 10:
			    totalTime=1000000;
			    tipoAudio=20;//mirar los switch de los audios
				seccion_02_1_10.className="calentamiento10 animated pulse";
				btnPlay.className="botonPlay animated fadeInLeftBig";
				ejercicio=1;
				interfaceFinal=2;
				reiniciarInterfaces();
			    break;

		}
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
	z.pause();
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
	manoChocar.muted = true;
	audioDescansar.muted = true;
	audiopreparado50.muted = true;
	audiopreparado25.muted = true;
	audiopreparado30.muted = true;
	audiopreparado20.muted = true;
	audiopreparado15.muted = true;
}

function ponerVoz(){
	onV.className="onVoz ocultar";	
	offV.className="offVoz animated fadeIn";
	manoChocar.muted = false;
	audioDescansar.muted = false;
	audiopreparado50.muted = false;
	audiopreparado25.muted = false;	
	audiopreparado30.muted = false;
	audiopreparado20.muted = false;
	audiopreparado15.muted = false;
}

function abdom1()
{  
	totalTime = 50;
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones ocultar";
	clock.className="clock posicionBotones mostrar";
	abdStatic1.className="abdS ocultar";	
	abdDinamic1.className="abdD animaciones mostrar";	
}

function abdom2(){
	circular();
	bar.animate(1.0,{duration: 55000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	abdStatic2.className= "abdS ocultar";
	abdDinamic22.className = "abdD_2 animaciones2 mostrar";
}

function abdom3(){
	circular();
	bar.animate(1.0,{duration: 27000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	abdStatic3.className= "abdS ocultar";
	abdDinamic33.className = "abdD_2 animaciones2 mostrar";
}

function abdom4(){
	circular();
	bar.animate(1.0,{duration: 27000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	abdStatic4.className= "abdS ocultar";
	abdDinamic44.className = "abdD_2 animaciones2 mostrar";
}



function abdom5(){
	circular();
	bar.animate(1.0,{duration: 55000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
}


function pier1()
{
	totalTime = 30;
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	pierStatic1.className="pierS ocultar";	
	pierDinamic1.className="pierD  mostrar";	
}

function pier2()
{  
	circular();
	bar.animate(1.0,{duration: 33000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	pierStatic2.className="pierS ocultar";	
	pierDinamic2.className="pierD  mostrar";	
}

function pier3()
{  
	circular();
	bar.animate(1.0,{duration: 23000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	pierStatic3.className="pierS ocultar";	
	pierDinamic3.className="pierD  mostrar";	
}

function pier4()
{  
	circular();
	bar.animate(1.0,{duration: 33000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	pierStatic4.className="pierS animaciones3 mostrar";		
}

function pier5()
{  
	circular();
	bar.animate(1.0,{duration: 33000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	pierStatic5.className="pierS ocultar";	
	pierDinamic5.className="pierD  mostrar";	
}

function pier6()
{  
	circular();
	bar.animate(1.0,{duration: 23000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	pierStatic6.className="pierS ocultar";	
	pierDinamic6.className="pierD  mostrar";	
}

function bra1()
{  
	totalTime = 30;
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	braStatic1.className="braS ocultar";	
	braDinamic1.className="braD  mostrar";	
}

function bra2()
{  
	circular();
	bar.animate(1.0,{duration: 33000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	braStatic2.className="braS ocultar";	
	braDinamic2.className="braD  mostrar";	
}

function bra3()
{  
	circular();
	bar.animate(1.0,{duration: 17000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	braStatic3.className="braS ocultar";	
	braDinamic3.className="braD  mostrar";	
}

function bra4()
{  
	circular();
	bar.animate(1.0,{duration: 33000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	braStatic4.className="braS animaciones4 mostrar";
}

function bra5()
{  
	circular();
	bar.animate(1.0,{duration: 33000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	braStatic5.className="braS ocultar";
	braDinamic5.className="braD  mostrar";	
}

function pec1()
{	
	totalTime=15;  
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	pecStatic1.className="pecS ocultar";
	pecDinamic1.className="pecD  mostrar";	
}

function pec2()
{  
	circular();
	bar.animate(1.0,{duration: 17000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	pecStatic2.className="pecS ocultar";
	pecDinamic2.className="pecD  mostrar";	
}

function pec3()
{  
	circular();
	bar.animate(1.0,{duration: 17000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	pecStatic3.className="pecS ocultar";
	pecDinamic3.className="pecD  mostrar";	
}

function glu1()
{  
	totalTime=25;
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	gluStatic1.className="gluS ocultar";
	gluDinamic1.className="gluD  mostrar";	
}

function glu2()
{  
	circular();
	bar.animate(1.0,{duration: 27000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	gluStatic2.className="gluS ocultar";
	gluDinamic2.className="gluD  mostrar";		
}

function glu3()
{  
	circular();
	bar.animate(1.0,{duration: 27000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	gluStatic3.className="gluS ocultar";
	gluDinamic3.className="gluD  mostrar";		
}

function glu4()
{  
	circular();
	bar.animate(1.0,{duration: 27000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	gluStatic4.className="gluS ocultar";
	gluDinamic4.className="gluD  mostrar";		
}

function glu5()
{  
	circular();
	bar.animate(1.0,{duration: 27000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	gluStatic5.className="gluS ocultar";
	gluDinamic5.className="gluD  mostrar";		
}

function glu6()
{  
	circular();
	bar.animate(1.0,{duration: 22000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	gluStatic6.className="gluS ocultar";
	gluDinamic6.className="gluD  mostrar";	
}

function cal1()
{  
	totalTime=15;
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	calStatic1.className="calS ocultar";
	calDinamic1.className="calD  mostrar";	
}

function cal2()
{  
	circular();
	bar.animate(1.0,{duration: 17000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	calStatic2.className="calS ocultar";
	calDinamic2.className="calD  mostrar";	
}

function cal3()
{  
	circular();
	bar.animate(1.0,{duration: 17000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	calStatic3.className="calS ocultar";
	calDinamic3.className="calD  mostrar";	
}

function cal4()
{   totalTime=15;
	circular();
	bar.animate(1.0,{duration: 17000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	calStatic4.className="calS ocultar";
	calDinamic4.className="calD  mostrar";	
}

function cal5()
{  
	circular();
	bar.animate(1.0,{duration: 17000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	calStatic5.className="calS animaciones7 mostrar";	
}

function cal6()
{  
	circular();
	bar.animate(1.0,{duration: 17000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	calStatic6.className="calS animaciones7 mostrar";	
}

function cal7()
{  
	circular();
	bar.animate(1.0,{duration: 17000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	calStatic7.className="calS animaciones7 mostrar";	
}

function cal8()
{  
	circular();
	bar.animate(1.0,{duration: 22000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	calStatic8.className="calS ocultar";
	calDinamic8.className="calD  mostrar";	
}

function cal9()
{  
	circular();
	bar.animate(1.0,{duration: 22000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	calStatic9.className="calS ocultar";
	calDinamic9.className="calD  mostrar";	
}

function cal10()
{  
	circular();
	bar.animate(1.0,{duration: 22000});
	rueda.className="rueda posicionBotones mostrar";
	clock.className="clock posicionBotones mostrar";
	calStatic10.className="calS ocultar";
	calDinamic10.className="calD  mostrar";	
}





function cabiarA50(){
	totalTime=50;
}

function cabiarA25(){
	totalTime=25;
}

function cabiarA20(){
	totalTime=20;
}

function cabiarA30(){
	totalTime=30;
}

function cabiarA15(){
	totalTime=15;
}

function reload(){
localStorage.setItem("salvacion", true);
location.reload();
}

function despuesDeMano()
{
	z.autoplay = true;
	z.play();
    ejercicios();
}






