import React from 'react';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simon Dice!</h1>
        <h2 id ="headernivel">Nivel: 1</h2>
        <h2 id ="headerpuntaje">Puntaje: 0 </h2>
        <h2 id ="headeraciertos">Aciertos: 0 </h2>
        
      </header>
        <button id="botoninicio" className="startbutton" onClick={NuevoJuego}>
          <p className ="ptext">Iniciar Partida</p>
          </button>

      <div>
      <div className="keyboard">
      <div className="row">
        <div id="81" className="key" data-key="81">q</div>
        <div id="87" className="key" data-key="87">w</div>
        <div id="69" className="key" data-key="69">e</div>
        <div id="82" className="key" data-key="82">r</div>
        <div id="84" className="key" data-key="84">t</div>
        <div id="89" className="key" data-key="89">y</div>
        <div id="85" className="key" data-key="85">u</div>
        <div id="73" className="key" data-key="73">i</div>
        <div id="79" className="key" data-key="79">o</div>
        <div id="80" className="key" data-key="80">p</div>
      </div>
      <div className="row">
        <div id="65" className="key" data-key="65">a</div>
        <div id="83" className="key" data-key="83">s</div>
        <div id="68" className="key" data-key="68">d</div>
        <div id="70" className="key" data-key="70">f</div>
        <div id="71" className="key" data-key="71">g</div>
        <div id="72" className="key" data-key="72">h</div>
        <div id="74" className="key" data-key="74">j</div>
        <div id="75" className="key" data-key="75">k</div>
        <div id="76" className="key" data-key="76">l</div>
      </div>
      <div className="row last">
        <div id="90" className="key" data-key="90">z</div>
        <div id="88" className="key" data-key="88">x</div>
        <div id="67" className="key" data-key="67">c</div>
        <div id="86" className="key" data-key="86">v</div>
        <div id="66" className="key" data-key="66">b</div>
        <div id="78" className="key" data-key="78">n</div>
        <div id="77" className="key" data-key="77">m</div>
      </div>
    </div>
    </div>
    </div>
  );
}
var teclas
var valorNuevo;
var valorAciertos;
var nombre;
const niveles = 10;


function teclasAleatorias(niveles)
{
  var listateclas = new Array(niveles).fill(0).map(() => Math.round(Math.random() * (90 - 65) + 65 ))
  return listateclas
}

function estadoTecla(KeyNumber, opcion = {})
{
 var teclaActivar = document.querySelector(`[data-key="${KeyNumber}"]`)
 teclaActivar.className += ' active'
 setTimeout(() => teclaActivar.className = 'key', 500)

 if(opcion.success){
   teclaActivar.className += ' success'
   setTimeout(() => teclaActivar.className = 'key', 500)
 }
 else if (opcion.fail) {
   teclaActivar.className += ' fail'
   setTimeout(() => teclaActivar.className = 'key', 500)
 }
}

function NuevoJuego()
{
  var reiniciopuntaje = 0
  puntaje(reiniciopuntaje)
  establecerNivel(0)
  teclas = teclasAleatorias(niveles)
  SiguienteRonda(0)
  alert("Para empezar a jugar sigue el Patron")
  
}

function SiguienteRonda (rondaActual)
{
  if(rondaActual === (niveles )){
    nombre = window.prompt("Ganaste, Registra tu nombre")
    
    }
  
 for(let i = 0; i <= rondaActual; i++)
 {
   setTimeout(() => estadoTecla(teclas[i]), 500 * (i+1))
 }

 let i = 0
 var teclaActual = teclas[i]
 window.addEventListener('keydown',usarTeclado)
 window.addEventListener("click",usarRaton)

 function usarRaton(evento)
 {
    var idtecla = parseInt(evento.target.id)

  if (evento.target.id !== "botonincio" || evento.target.id === null) {
    if (idtecla === teclaActual) {
      estadoTecla(teclaActual, {success: true})
      i++
      puntaje(2)
      aciertos(1)
    
    if(i > rondaActual)
    {
      window.removeEventListener("click",usarRaton)
      setTimeout(() =>alert("Muy Bien, Pasas al Siguiente Nivel mouse"), 500) 
      setTimeout(() => SiguienteRonda(i), 1000)
      establecerNivel(i)
    }
    teclaActual = teclas[i]
  } else {
    estadoTecla(teclaActual, {fail: true})
    window.removeEventListener('click',usarRaton)
    nombre = prompt("Perdiste, Registra tu nombre")
   }
  } 

}

function usarTeclado(evento) {
  if (evento.keyCode === teclaActual) {
    estadoTecla(teclaActual, {success: true})
    i++
    puntaje(2)
    aciertos(1)
  

  if (i > rondaActual)
  {
    window.removeEventListener('keydown',usarTeclado)
    setTimeout(() => SiguienteRonda(i), 1000)
    setTimeout(() =>alert("Muy Bien, Pasas al Siguiente Nivel teclado"), 500) 
    establecerNivel(i)
  }
  teclaActual = teclas[i]
} else {
   estadoTecla(teclaActual, {fail: true})
   window.removeEventListener('keydown', usarTeclado)
   nombre = prompt("Perdiste, Registra tu nombre")
}

  
}
}

function establecerNivel(rondaActual){
  var texto;
  var rondaNueva = rondaActual + 1
  texto = "Nivel: " + rondaNueva
  document.getElementById("headernivel").innerHTML = texto;
}

function puntaje(valor){
  
  if (valorNuevo === undefined) {
    valorNuevo = 0
  }
  var texto;
  valorNuevo = valorNuevo + valor
  texto = "Puntaje: " + valorNuevo
  document.getElementById("headerpuntaje").innerHTML = texto;
}

function aciertos(valor){
  
  if (valorAciertos === undefined) {
    valorAciertos = 0
  }
  var texto;
  
  valorAciertos = valorAciertos + valor
  texto = "Aciertos: " + valorAciertos
  document.getElementById("headeraciertos").innerHTML = texto;
}

export default App;
