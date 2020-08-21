
function buscarNoticias(){
    axios.get(`http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia`)
    .then(response => {
            let dados = response.data;
            console.log(dados);

            let itens1 = dados.items[0];
            let itens2 = dados.items[50];
            let itens3 = dados.items[3];
            let itens4 = dados.items[8];
            let itens5 = dados.items[9];

            let link1 = dados.items[0].link;
            document.getElementById("link1").href = link1;
            let link2 = dados.items[50].link;
            document.getElementById("link2").href = link2;
            let link3 = dados.items[3].link;
            document.getElementById("link3").href = link3;
            let link4 = dados.items[8].link;
            document.getElementById("link4").href = link4;
            let link5 = dados.items[9].link;
            document.getElementById("link5").href = link5;
            
            document.getElementById("titulo1").innerHTML = itens1.titulo;
            document.getElementById("texto1").innerHTML = itens1.introducao;
            document.getElementById("titulo2").innerHTML = itens2.titulo;
            document.getElementById("texto2").innerHTML = itens2.introducao;
            document.getElementById("titulo3").innerHTML = itens3.titulo;
            document.getElementById("texto3").innerHTML = itens3.introducao;
            document.getElementById("titulo4").innerHTML = itens4.titulo;
            document.getElementById("texto4").innerHTML = itens4.introducao;
            document.getElementById("titulo5").innerHTML = itens5.titulo;
            document.getElementById("texto5").innerHTML = itens5.introducao;
    })
    apagardados();
  }

  function buscarReleased(){
    axios.get(`http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=released`)
    .then(response => {
            let dados = response.data;
            let itens1 = dados.items[0];
            let itens2 = dados.items[1];
            let itens3 = dados.items[2];
            let itens4 = dados.items[3];
            let itens5 = dados.items[4];
            document.getElementById("titulo1").innerHTML = itens1.titulo;
            document.getElementById("texto1").innerHTML = itens1.introducao;
            document.getElementById("titulo2").innerHTML = itens2.titulo;
            document.getElementById("texto2").innerHTML = itens2.introducao;
            document.getElementById("titulo3").innerHTML = itens3.titulo;
            document.getElementById("texto3").innerHTML = itens3.introducao;
            document.getElementById("titulo4").innerHTML = itens4.titulo;
            document.getElementById("texto4").innerHTML = itens4.introducao;
            document.getElementById("titulo5").innerHTML = itens5.titulo;
            document.getElementById("texto5").innerHTML = itens5.introducao;
    });
    apagardados();
  }

  function apagardados(){
    document.getElementById("titulo1").innerHTML = ""
    document.getElementById("texto1").innerHTML = ""
    document.getElementById("titulo2").innerHTML = ""
    document.getElementById("texto2").innerHTML = ""
    document.getElementById("titulo3").innerHTML = ""
    document.getElementById("texto3").innerHTML = ""
    document.getElementById("titulo4").innerHTML = ""
    document.getElementById("texto4").innerHTML = ""
    document.getElementById("titulo5").innerHTML = ""
    document.getElementById("texto5").innerHTML = ""
  }