function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var FormAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (FormAno.value.length == 0 || Number(FormAno.value) > ano)
    {
        alert('[ERRO] Verifique os dados!')
    }
    else
    {
        var ForSex = document.getElementsByName('radsex')
        var idade = ano - Number(FormAno.value)
        var genero = '' 
        var img = document.createElement('img')//cria uma tag img...
        img.setAttribute('id','foto')//Para a tag img crie o atributo id="foto"
        if(ForSex[0].checked)
        {
            genero = 'Masculino'
            if(idade >= 18 && idade <= 50)
            {
                //Adulto
                img.setAttribute('src','imagem/Homem.png')
            }
            else 
            {
                //Idoso
                img.setAttribute('src','imagem/Idoso.png')
            }
        }   
        else if(ForSex[1].checked)
        {
            genero = 'Feminino'
            if(idade >=18 && idade <= 50)
            {
                //Adulta
                img.setAttribute('src','imagem/Mulher.png')
            }
            else
            {
                //Idosa
                img.setAttribute('src','imagem/Idosa.png')
            }
        }
        res.style.textAlign = 'center'  
        res.innerHTML = `Você é do gênero:${genero} e tem idade de ${idade} Anos.`
        res.appendChild(img)
    }
}