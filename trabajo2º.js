const preguntas = [
    {
        pregunta: "QUÉ OPCIÓN ELIGES EEE SICÓPATA??",
        textoRespuesta1: "me gustan las tartas con mucha nata",
        valorRespuesta1: "A",
        textoRespuesta2: "me gusta fumar de formas raras",
        valorRespuesta2: "B",
        textoRespuesta3: "me gustan los gatos calvos",
        valorRespuesta3: "C",
        textoRespuesta4: "me gusta el color naranja",
        valorRespuesta4: "D",
        

    },
    {
        pregunta: "CÓMO ERES DE VINTAGE??",
        textoRespuesta1: "he tomado el Acuarios-Cola",
        valorRespuesta1: "A",
        textoRespuesta2: "he tenido un tamawochi",
        valorRespuesta2: "B",
        textoRespuesta3: "recuerdo el gol de iniesta como muy cercano",
        valorRespuesta3: "C",
        textoRespuesta4: "has escuchado a badbunny cuando era BUENO",
        valorRespuesta4: "D",
    },
    {
        pregunta: "QUÉ MÚSICA ESCUCHAS??",
        textoRespuesta1: "techno,pero las únicas pastillas que tomo son de ibuprofeno tarnqui",
        valorRespuesta1: "A",
        textoRespuesta2: "RAP, bro , soy de kalle, no lo entenderías",
        valorRespuesta2: "B",
        textoRespuesta3: "REquetón, pero antiguoo ee, de cuando Shakira estaba enamorada",
        valorRespuesta3: "C",
        textoRespuesta4: "Camilo,Morat,...querido amigo soy de UAX",
        valorRespuesta4: "D",

    },
    {
        pregunta: "QUÉ CARRERAS ESTUDIARIAS SI PUDIERAS ELEGIRLA OTRA VEZ?? ",
        textoRespuesta1: "la mia, estoy muy contento(jajjajajajaXD, no pasa)",
        valorRespuesta1: "A",
        textoRespuesta2: "filosofia, el mercado en la hosteleria esta muy necesitado(sobretodo el burger)",
        valorRespuesta2: "B",
        textoRespuesta3: "Informática, me gusta no dormir nada y q luego por una coma esté todo mal",
        valorRespuesta3: "C",
        textoRespuesta4: "me quedo en el estanco de mi padre, gracias",
        valorRespuesta4: "D",


    }
];
let numeroPregunta = 0;

//array que guarda las respuesta
let guardarRespuestas = '';
function aparicion() {
  const cuestionario = document.getElementById("cuestionario");
  cuestionario.classList.remove("oculto");
  document.getElementById("boton").style.display = "none";
  pintarPregunta();
}
const pulsar = document.getElementById("boton");
pulsar.addEventListener("click", aparicion);

function segundaImagen(e) {
  document.getElementById("imagen2").innerHTML =
    "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlBsSJb7kPeop_FeKAyWfbsVHgfeTzFNYqNg&usqp=CAU'>";
}

//array de objetos en el que cada objeto es una pregunta

//funcio  paara pintar las pregutas
function pintarPregunta(indicePregunta = 0) {
  let cuestionario = document.getElementById("cuestionario");

  let bloqueHTML = `
  <div class="cuestionario">
   <div class="pregunta">
   <p>
   ${preguntas[indicePregunta].pregunta}
   </p>
   </div>
   <div class="respuesta" id="respuesta1" >
   <h2 valor-respuesta="A">
   a) ${preguntas[indicePregunta].textoRespuesta1}
   </h2>
   </div>
   <div id="respuesta2" class="respuesta" >
   <h2 valor-respuesta="B">
   b)${preguntas[indicePregunta].textoRespuesta2}
   </h2>
   </div>
   <div class="respuesta" id="respuesta3">
           <h2 valor-respuesta="C">
               c)${preguntas[indicePregunta].textoRespuesta3}
           </h2>
       </div>
       <div class="respuesta"  id="respuesta4">
           <h2 valor-respuesta="D">
           d)${preguntas[indicePregunta].textoRespuesta4}
           </h2>
           </div>;
           </div>`
           
  cuestionario.innerHTML = bloqueHTML;
  let respuestas = document.getElementsByClassName("respuesta");
  console.log(respuestas);
  for (let i = 0; i < respuestas.length; i++) {
    respuestas[i].onclick = (e) => hacerCosas(e);
  }
}

//cuaNdo click en una respuesta hacemos llamamos a una fución lamada handleRespuesta()
function hacerCosas(evento) {
  //recoger el valor de la respuesta
  console.log(evento);
  let valorRespuesta = evento.target.getAttribute('valor-respuesta');
  guardarRespuestas+=valorRespuesta;
  console.log(guardarRespuestas);
  //alert("hola " + valorRespuesta);
  numeroPregunta = numeroPregunta + 1;
  if(numeroPregunta < preguntas.length) {
      pintarPregunta(numeroPregunta);
  }
  else {
      pintarResultado(guardarRespuestas);
    }
}

function pintarResultado(guardarRespuestas) {
    //alert('PALMASTE');
    let cuestionario = document.getElementById("cuestionario");
    //en función de las respuestas pintas una imagen u otra
    let imagenResultado = '';
    console.log(guardarRespuestas);
    

    //ESTO DECIDE LA IMAGEN DE RESULTADO
    if(guardarRespuestas === 'ABCD') {
        imagenResultado = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTx_j5F68ZtMtlRYXtlTMAHEXr-7d_YNBWFg&usqp=CAU';
    }
    else if(guardarRespuestas === 'AACD') {
        imagenResultado = 'https://s1.eestatic.com/2019/08/20/series/cine/quentin_tarantino-cine-efemerides_422968133_132615167_1024x576.jpg';
    }
    else if(guardarRespuestas === 'AAAD') {
        imagenResultado = 'https://i.pinimg.com/236x/d5/10/23/d510234d1d8144adb4fc777dfb625eb7.jpg';
    }
    else if(guardarRespuestas === 'CAAD') {
        imagenResultado = 'https://i.pinimg.com/236x/d5/10/23/d510234d1d8144adb4fc777dfb625eb7.jpg';
    }
    else if(guardarRespuestas === 'BAAD') {
        imagenResultado = 'https://i.pinimg.com/236x/d5/10/23/d510234d1d8144adb4fc777dfb625eb7.jpg';
    }
    else if(guardarRespuestas === 'ADAD') {
        imagenResultado = 'https://i.pinimg.com/236x/d5/10/23/d510234d1d8144adb4fc777dfb625eb7.jpg';
    }
    else if(guardarRespuestas === 'AAAA') {
        imagenResultado = 'https://i.pinimg.com/236x/8b/0c/56/8b0c563e9f7c580408a115b338d5f4ad.jpg';
    }
    else if(guardarRespuestas === 'ABAA') {
        imagenResultado = 'https://i.pinimg.com/236x/8b/0c/56/8b0c563e9f7c580408a115b338d5f4ad.jpg';
    }else if(guardarRespuestas === 'ACAA') {
        imagenResultado = 'https://i.pinimg.com/236x/8b/0c/56/8b0c563e9f7c580408a115b338d5f4ad.jpg';
    }else if(guardarRespuestas === 'ADAA') {
        imagenResultado = 'https://i.pinimg.com/236x/8b/0c/56/8b0c563e9f7c580408a115b338d5f4ad.jpg';
    }
    else if(guardarRespuestas === 'BBCD') {
        imagenResultado = 'https://i.pinimg.com/236x/d2/33/21/d233217a213ac9cb0a89539edb6fde3f.jpg';
    }
    else if(guardarRespuestas === 'BBCA') {
        imagenResultado = 'https://i.pinimg.com/236x/d2/33/21/d233217a213ac9cb0a89539edb6fde3f.jpg';
    }else if(guardarRespuestas === 'BBCD') {
        imagenResultado = 'https://i.pinimg.com/236x/d2/33/21/d233217a213ac9cb0a89539edb6fde3f.jpg';
    }else if(guardarRespuestas === 'BACD') {
        imagenResultado = 'https://i.pinimg.com/236x/d2/33/21/d233217a213ac9cb0a89539edb6fde3f.jpg';
    }
    else if(guardarRespuestas === 'BABA') {
        imagenResultado = 'https://i.pinimg.com/236x/52/1c/70/521c7071afcf5ecdb94533c1bf5a91f6.jpg';
    }
    else if(guardarRespuestas === 'BBBB') {
        imagenResultado = 'https://i.pinimg.com/236x/83/bf/fd/83bffd65b3fb20e4a8ff3efc5e58be6b.jpg';
    }
    else if(guardarRespuestas === 'ABCC') {
        imagenResultado = 'https://i.pinimg.com/236x/e2/aa/8e/e2aa8eaf9fd300c2361dc5e5b1d42cac.jpg';
    }
    else if(guardarRespuestas === 'ABDC') {
        imagenResultado = 'https://i.pinimg.com/236x/e2/aa/8e/e2aa8eaf9fd300c2361dc5e5b1d42cac.jpg';
    }
    else if(guardarRespuestas === 'ABAC') {
        imagenResultado = 'https://i.pinimg.com/236x/e2/aa/8e/e2aa8eaf9fd300c2361dc5e5b1d42cac.jpg';
    }
    else if(guardarRespuestas === 'ABBC') {
        imagenResultado = 'https://i.pinimg.com/236x/e2/aa/8e/e2aa8eaf9fd300c2361dc5e5b1d42cac.jpg';
    }
    else if(guardarRespuestas === 'ABDA') {
        imagenResultado = 'https://i.pinimg.com/236x/e2/aa/8e/e2aa8eaf9fd300c2361dc5e5b1d42cac.jpg';
    }
    else if(guardarRespuestas === 'ACCC') {
        imagenResultado = 'https://i.pinimg.com/236x/c6/3e/5a/c63e5aada52218006a50f1745ffae2d0.jpg';
    }
    else if(guardarRespuestas === 'CCCC') {
        imagenResultado = 'https://i.pinimg.com/236x/df/f4/38/dff438524ba6d05df48ae8263cf692a6.jpg';
    }
    else if(guardarRespuestas === 'ABDD') {
        imagenResultado = 'https://i.pinimg.com/236x/a0/ab/a1/a0aba1cb9507a984dc015d9d24b9aceb.jpg';
    }
    else if(guardarRespuestas === 'ABDD') {
        imagenResultado = 'https://i.pinimg.com/236x/a0/ab/a1/a0aba1cb9507a984dc015d9d24b9aceb.jpg';
    }
    else if(guardarRespuestas === 'ABDD') {
        imagenResultado = 'https://i.pinimg.com/236x/a0/ab/a1/a0aba1cb9507a984dc015d9d24b9aceb.jpg';
    }
    else if(guardarRespuestas === 'ABDD') {
        imagenResultado = 'https://i.pinimg.com/236x/a0/ab/a1/a0aba1cb9507a984dc015d9d24b9aceb.jpg';
    }
    else if(guardarRespuestas === 'ADDD') {
        imagenResultado = 'https://i.pinimg.com/236x/f9/38/d1/f938d104a8246ef1ca9969fd0293f675.jpg';
    }
    else if(guardarRespuestas === 'DDDD') {
        imagenResultado = 'https://i.pinimg.com/236x/35/90/60/35906029cb21d27976ed35022ab79e46.jpg';
    }
   
    else {
        imagenResultado = 'https://s1.eestatic.com/2019/08/20/series/cine/quentin_tarantino-cine-efemerides_422968133_132615167_1024x576.jpg'; 
     }

    //esto pinta la imagen de resultdo en el index html
    cuestionario.innerHTML = `<div>
    <img src="${imagenResultado}" width="100%">
    </div>`;
}