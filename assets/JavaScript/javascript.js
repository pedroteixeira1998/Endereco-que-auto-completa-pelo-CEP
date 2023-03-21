
 const addressForm = document.querySelector("#address-form");
 const cepInput = document.querySelector("#cep");
 const addressInput = document.querySelector("#address");
 const cityInput = document.querySelector("#city");
 const neighborhoodInput = document.querySelector("#neighborhood");
 const regionInput = document.querySelector("#region");
 const formInputs = document.querySelectorAll("[data-input]");
 const fadeElement = document.querySelector("#fade");

 const closeButton = document.querySelector("#close-message");

  //Validando o Input CEP
 cepInput.addEventListener("keypress", (e) =>{
     const onlyNumbers = /[0-9]/;
     const key = String.fromCharCode(e.keyCode);

      //Permitir apenas números
     if(!onlyNumbers.test(key)){
         e.preventDefault();
         return;
     }
 })

  //Adicionar evento
 cepInput.addEventListener("keyup", (e) =>{
     const inputValue = e.target.value;

      //Checando se tem o tamanho correto
     if(inputValue.length === 8){
         getAddress(inputValue);
     }
 })

 //Customizando endereço com API
 const getAddress = async (cep) => {
     toggleLoader();

     cepInput.blur();

     const apiUrl = `https:viacep.com.br/ws/${cep}/json/`

     const response = await fetch(apiUrl)

     const data = await response.json()

      //Mostrar mensagem de erro e resetar formulário
     if (data.erro === "true") {
        if(!addressInput.hasAttribute("disabled")){
            toggleDisabled()}

         addressForm.reset();
         toggleLoader();
         toggleMessage("CEP inválido, tente novamente.");
         return;
     }

     if(addressInput.value === ""){
        toggleDisabled();
     };

     addressInput.value = data.logradouro;
     cityInput.value = data.localidade;
     neighborhoodInput.value = data.bairro;
     regionInput.value = data.uf;
     toggleLoader();
 };

 // Adicionar ou remover atributo de desativado
 const toggleDisabled = () =>{
    if(regionInput.hasAttribute("disabled")){
        formInputs.forEach((input) => {
            input.removeAttribute("disabled");
        })
    }
    else {
        formInputs.forEach((input) =>{
            input.setAttribute("disabled", "disabled")
        });
    };
 };

  //Mostrar ou esconder o loader
 const toggleLoader = () => {
     const loaderElement = document.querySelector("#loader");

     fadeElement.classList.toggle("hide");
     loaderElement.classList.toggle("hide");
 };

  //Mostra ou esconder mensagem
  const toggleMessage = (msg) => {
      const messageElement = document.querySelector("#message");

      const messageElementText = document.querySelector("#message p");

      messageElementText.innerText = msg;

      fadeElement.classList.toggle("hide");
      messageElement.classList.toggle("hide");
  };

closeButton.addEventListener("click", () => {
    toggleMessage(); 
});

//Salvar endereço

addressForm.addEventListener("submit", (e) => {
    e.preventDefault();

    toggleLoader();

    setTimeout(() => {
        toggleLoader();

        toggleMessage("Endereço salvo com sucesso!");

        addressForm.reset();

        toggleDisabled();
    }, 1000);
});