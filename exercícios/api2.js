const cep = document.querySelector('#cep');

const resultado = (result)=>{
    for(const infos in result){
        if(document.querySelector('#'+infos)){
            document.querySelector('#'+infos).value = result[infos];
        }
    }
}

cep.addEventListener('blur',evento=>{
    //console.log(cep.value);
    let busca = evento.target.value.replace('-','');
    const info = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }
    fetch(`https://viacep.com.br/ws/${busca}/json/`)
    .then(response=>{response.json()
        .then(ev=>resultado(ev))
        .catch(e=>console.log('Algo de errado não está certo: '+e.message));
    })
    
})
