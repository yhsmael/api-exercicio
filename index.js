const meuObjLista = new XMLHttpRequest();
meuObjLista.open("GET", "https://raw.githubusercontent.com/DS-Senai/json/refs/heads/main/tecnologias.json");
meuObjLista.responseType = "json";
meuObjLista.send();

meuObjLista.onload  = () => {
  let texto = document.querySelector('.json');
  let tec = meuObjLista.response;
  let array = tec.tecnologias
  //let innerarray = tec.tecnologias[0].bibliotecas_populares[0].name;
    //console.log(innerarray);
    let html = ''
    array.forEach((element)=> {
      for(let chave in element){
        html += `
        <p> ${chave} ${element[chave]}</p>
      `;
      }
    
    });
  
    texto.innerHTML += html
};





























