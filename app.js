function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Loga a seção no console para fins de depuração

  let campoPesquisa = document.getElementById("campo-pesquisa").value
  // se campoPesquisa for uma string sem nada
  if(!campoPesquisa){
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um livro do século XX</p>"
return
  }
  
campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
let tags = "";
  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase ()
    descricao = dado.descricao.toLowerCase ()
    tags = dado.tags.toLowerCase()
// se titulo includes campoPesquisa
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a> </h2>
        <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Mais informações</a> </div>
    `;
    } 
    if (!resultados){
resultados = "<p> Nada foi encontrado<p>"
    }
    
    console.log(dado.titulo.includes(campoPesquisa))
    // Cria um novo elemento HTML para cada dado
   
  }

  // Atualiza o conteúdo da seção com os resultados gerados
  section.innerHTML = resultados;
}


