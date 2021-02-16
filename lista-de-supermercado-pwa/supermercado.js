let telas = ["componente1, componente2"];
const mostra = (comp) => {
  telas.forEach((c) => {
    /* esconde os dois componentes */
    document.querySelector("#" + c).classList.add("hidden");
  });

  document.querySelector("#" + comp).classList.remove("hidden");
};

const ativa = (elem) => {
  /* recebe todos elementos dos parentes clicados e dele próprio */
  let irmaos = elem.parentNode.children;
  /* for padrão por não ser um vetor simples */
  for (let i = 0; i < irmaos.length; i++)
    irmaos[i].classList.remove('active'); /* remmove do irmaos */
  elem.classList.add('active'); /* activa no elemento clicado */
};

onload = () => {
  document.querySelector("#tab1").onclick = (e) => {
    mostra("componente1");
    ativa(e.target);
  };

  document.querySelector("#tab2").onclick = (e) => {
    mostra("componente2");
    ativa(e.target);
  };
};
