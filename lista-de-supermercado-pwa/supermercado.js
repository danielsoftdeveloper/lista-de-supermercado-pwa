let telas = ['componente1, componente2, componente3, componente4'];

const mostra = (comp) => {
  let i = false;
  telas.forEach((c) => {
    //esconde os dois componentes

    document.querySelector('#' + c).classList.add('hidden');
  });

  document.querySelector('#' + comp).classList.remove('hidden');
};

const ativa = (elem) => {
  /* recebe todos elementos dos parentes clicados e dele próprio */
  let irmaos = elem.parentNode.children;
  for (let i = 0; i < irmaos.length; i++) {
    /* for padrão por não ser um vetor simples */
    irmaos[i].classList.remove('active'); /* remmove do irmaos */
    elem.classList.add('active'); /* activa no elemento clicado */
  }
};



onload = () => {

  
  document.querySelector('#tab1').onclick = (e) => {
    mostra('componente1');
    ativa(e.target);
  };

  document.querySelector('#tab2').onclick = (e) => {
    mostra('componente2');
    ativa(e.target);
  };

  document.querySelector('#tab3').onclick = (e) => {
    mostra('componente3');
    ativa(e.target);
  };

  document.querySelector('#tab4').onclick = (e) => {
    mostra('componente4');
    ativa(e.target);
  };

};
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Adicione a classe "show" (display: block) aos elementos filtrados e remova a classe "show" dos elementos que não estão selecionados


  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Mostrar filtros de elementos
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

//  Esconder elementos fora da categoria selecionada.
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Adicionar classe ativa ao botão de controle atual (destaque)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
