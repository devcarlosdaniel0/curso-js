function searchCEP() {
  let input = document.getElementById("inputCEP").value;

  const ajax = new XMLHttpRequest();

  ajax.open("GET", `https://viacep.com.br/ws/${input}/json/`);
  ajax.send();

  ajax.onload = function () {
    let response = this.responseText;

    let obj = JSON.parse(response);

    let formatedResponse = `Rua: ${obj.logradouro} Cidade: ${obj.localidade} Estado: ${obj.estado}`
    
    document.getElementById("cepText").innerHTML = formatedResponse;
  };
}
