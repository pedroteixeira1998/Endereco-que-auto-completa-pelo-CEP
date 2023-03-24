# Tela de Cadastro de endereço

## Descrição

Tela de cadastro de endereço que se auto-completa com o CEP. Conta com campos para Identificação do endereço; CEP (que completa os 3 seguintes campos), Rua, Cidade, Bairro e conta também com Número, complemento e lista de estados. Para facilitar a vida do usuário, tem um link em "Não sei meu CEP", redirecionando diretamente pro site dos correios, onde é possível procurar o CEP usando o endereço. Os campos que serão preenchidos a partir do CEP ficam bloqueados e serão preenchidos com os dados da API.

## Desenvolvido com:
![image](https://user-images.githubusercontent.com/124098830/227051039-519e5ff8-1f70-4be4-9c6c-4e928e6a5990.png)
![image](https://user-images.githubusercontent.com/124098830/227051054-176187c0-b1a2-44dc-9e83-4914383b5b10.png)
![image](https://user-images.githubusercontent.com/124098830/227051084-874e6bc5-d72f-4edf-8e94-61dc45744fd0.png)

## Motivação

Esse projeto foi desenvolvido com o intuito de reforçar funções JavaScript, treinar o uso de APIs e BootStrap.

## HTML

```
<body id="checkout-page">
  <div id="fade" class="hide">
    <div id="loader" class="spinner-border text-dark hide" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div id="message" class="hide">
      <div class="alert alert-light" role="alert">
        <h4>Mensagem:</h4>
        <p></p>
        <button id="close-message" type="button" class="btn btn-secondary">
          Fechar
        </button>
      </div>
    </div>
  </div>
  <div id="order-form-container" class="container p-6 my-md-4 px-md-0">
    <div id="steps" class="mb-md-3 mb-3 pb-md-3">
      <div class="line"></div>
      <div class="step">
        <i class="bi bi-person active"></i>
        <p class="d-none d-md-block">Criação de conta</p>
      </div>
      <div class="step">
        <i class="bi bi-geo-alt active"></i>
        <p class="d-none d-md-block">Endereço</p>
      </div>
      <div class="step">
        <i class="bi bi-credit-card"></i>
        <p class="d-none d-md-block">Pagamento</p>
      </div>
    </div>
    <div id="form-header">
      <h2>Adicione novo endereço</h2>
    </div>
    <form id="address-form">
      <div class="row mb-3">
        <div class="mb-0 md-0 form-floating">
          <input
            type="text"
            class="form-control shadow-none"
            id="ID"
            name="ID"
            placeholder="Identificação"
            required
          />
          <label for="ID">Identificação do endereço. Ex: Casa de Campo, trabalho, principal, etc.*</label>
        </div>
      </div>
      <div class="row mb-1">
        <div class="form-floating" id="cep">
          <input
            type="text"
            class="form-control shadow-none"
            id="cep"
            name="cep"
            placeholder="Digite o seu CEP"
            maxlength="8"
            minlength="8"
            required
          />
          <label for="cep">CEP*</label>
          <a id="search-cep" class="bi bi-box-arrow-up-right" href="https://buscacepinter.correios.com.br/app/endereco/index.php">Não sei meu CEP</a>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-12 col-sm-6 mb-3 mb-md-0 form-floating">
          <input
            type="text"
            class="form-control shadow-none"
            id="address"
            name="address"
            placeholder="Rua"
            disabled
            required
            data-input
          />
          <label for="address">Rua*</label>
        </div>
        <div class="col-12 col-sm-6 form-floating">
          <input
            type="text"
            class="form-control shadow-none"
            id="number"
            name="number"
            placeholder="Digite o número da residência"
            disabled
            required
            data-input
          />
          <label for="number">Número*</label>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-12 col-sm-6 mb-3 mb-md-0 form-floating">
          <input
            type="text"
            class="form-control shadow-none"
            id="complement"
            name="complement"
            placeholder="Digite o complemento"
            disabled
            data-input
          />
          <label for="complement">Complemento*</label>
        </div>
        <div class="col-12 col-sm-6 form-floating">
          <input
            type="text"
            class="form-control shadow-none"
            id="neighborhood"
            name="neighborhood"
            placeholder="Bairro"
            disabled
            required
            data-input
          />
          <label for="neighborhood">Bairro*</label>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-12 col-sm-6 mb-3 mb-md-0 form-floating">
          <input
            type="text"
            class="form-control shadow-none"
            id="city"
            name="city"
            placeholder="Cidade"
            disabled
            required
            data-input
          />
          <label for="city">Cidade*</label>
        </div>
        <div class="col-12 col-sm-6 mb-3">
          <select
            class="form-select shadow-none"
            id="region"
            disabled
            required
            data-input
          >
            <option selected>Estado*</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button id="save-btn" type="submit" class="btn btn-primary">
          Cadastrar
        </button>
      </div>
    </form>
  </div>
</body>
```

# JavaScript

```

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
```


## Tecnologias

🍕 HTML

🍕 CSS

🍕 JavaScript

🍕BootStrap
## Fotos
![Desktop-2023 03 22-19 22 45 05](https://user-images.githubusercontent.com/124098830/227052721-ca91a0b5-fa50-457e-a44a-0df306584b10.gif)
![WhatsApp Image 2023-03-22 at 19 04 33](https://user-images.githubusercontent.com/124098830/227051513-f0cac371-5705-4d86-a425-8593e2521bf5.jpeg)
![WhatsApp Image 2023-03-22 at 19 22 05](https://user-images.githubusercontent.com/124098830/227051651-3404381f-37bc-470e-9a70-f7623ee5f20b.jpeg)



## Link

https://pedroteixeira1998.github.io/Endereco-que-auto-completa-pelo-CEP/

## Autor

Linkedin: https://www.linkedin.com/in/pedro-teixeira-51a75b265/

Github: https://github.com/pedroteixeira1998
