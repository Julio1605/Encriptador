/*const encriptar = document.getElementById("boton_Encriptar");
const desencriptar = document.getElementById ("boton_Desencriptar"); */



function f_encriptar(text) {
  var NewText = text.split("");
  document.getElementById("text_entrar").value = "";


  for (i = 0; i < NewText.length; i++) {
    if (NewText[i] == "a") {
      NewText[i] = "ai";
    }
    if (NewText[i] == "e") {
      NewText[i] = "enter";
    }
    if (NewText[i] == "i") {
      NewText[i] = "imes";
    }
    if (NewText[i] == "o") {
      NewText[i] = "ober";
    }
    if (NewText[i] == "u") {
      NewText[i] = "ufat";
    }
  }

  var text_salir = NewText.join("");
  document.getElementById("info").style.display = "none";
  return (document.getElementById("text_salir").value = text_salir);
}

function f_desencriptar(text) {
  var newText = text.toLowerCase();
  document.getElementById("text_entrar").value = "";

   let a = newText.replace(/ai/g,'a');
  let e = a.replace(/enter/g,'e');
  let i = e.replace(/imes/g,'i');
  let o = i.replace(/ober/g,'o');
  let u  = o.replace(/ufat/g,'u');




  document.getElementById("info").style.display = "none";
  return (document.getElementById("text_salir").value = u);
}


function copiarAlPortapapeles() {
  var TextOut = document.getElementById("text_salir");
  var aux= document.createElement("input");
  aux.setAttribute("value", TextOut.value);
  document.body.appendChild(aux);
  aux.select();
  alert("Se ha copiado con exito");
  document.execCommand("copy");
  document.body.removeChild(aux);
}