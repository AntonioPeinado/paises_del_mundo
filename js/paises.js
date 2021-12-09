
const cargaPaisesDeContinente = async (value) => {
  let url = `https://restcountries.com/v3.1/region/${value}`;
  let paises = await cargaDatos(url);
  let selectPaises = document.querySelector("#paises");
  selectPaises.innerHTML = "";
  let opttioInicio = document.createElement("option");
  opttioInicio.value = 0;
  opttioInicio.innerHTML = "Selecciona pais....";
  selectPaises.appendChild(opttioInicio);

  paises.forEach((pais) => {
    let option = document.createElement("option");
    option.value = pais.name.common;
    option.innerHTML = pais.name.common;
    selectPaises.appendChild(option);
  });
};

const cargaDatos = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      resolve(response.json());
    });
  });
};
const cargaSelectContinentes = () => {
  let selectContinentes = document.querySelector("#continentes");
  continentes.forEach((continente) => {
    let option = document.createElement("option");
    option.value = continente.value;
    option.innerHTML = continente.texto;
    selectContinentes.appendChild(option);
  });
};


salir.addEventListener("click",
  () => location.reload(true)
);

