var comenzar="";
var acercaDe="";
var ajustes="";
var menuEjercicios = "";
var atrasInicio = "";
var atrasAjuste = "";
var atrasAcerca = "";
var abdomen = "";  
var ListoAbd = "";
var totalTime = 15;


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
	abdomen= document.getElementById('btnAbdomen');
	ListoAbd= document.getElementById('btnListoAbd');
	
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
	abdomen.addEventListener("click",abdomenMenu);
	ListoAbd.addEventListener("click",abdomenN1);
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

function menuEjercicios()
{
	seccion_01.className="inicio ocultar";
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
               circular();
               timer();
          
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



              function timer() {
			  document.getElementById('clock').innerHTML = totalTime;		  
			  if(totalTime==0){
			    console.log('Final');
			  }else{
			    totalTime-=1;
			     if(totalTime<9){
			    document.getElementById('clock').style.left ="163px";
			    }
			    setTimeout(timer,1000);

			  }
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





