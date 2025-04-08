let nightday = document.getElementById("night-day")
let imgnightday = document.getElementById("imgNightDay")
let main = document.querySelector("body")
let but = document.querySelector("button")
let foto = document.querySelector(".foto-principal")

//Abreviar nome
window.onresize = ()=>{

    let tela = window.innerWidth
    if (tela > 1250){
        document.querySelector("#MyName").innerHTML = "Welington Ferreira de Souza"

        
    }else{
        document.querySelector("#MyName").innerHTML = "Welington F. S."

    }
}



//MODO CLARO E ESCURO
nightday.onclick = () =>{
    console.log("clique")
    if(imgnightday.ariaChecked === "true"){
        imgnightday.src = "./img/moon_560897.png"
        main.classList.add ("color-darkMode")
        main.classList.remove ("color-lightMode")
        imgnightday.ariaChecked = "false"
        // foto.src = "./img/novoEuLight.svg"
    }else{
        imgnightday.ariaChecked = "true"
        imgnightday.src = "./img/sun_7218604.png"
        main.classList.add ("color-lightMode")
        main.classList.remove ("color-darkMode")
        // foto.src = "./img/novoEu2.svg"
        
    }
}

//criando habilidades
let habilidades = document.querySelector(".geral")
var variaveis = document.getElementById("variaveis")
function hab(name,tam,t){
    habilidades.innerHTML +=
                    `
                    <div class="org-progress-bar">
                        <p>${name}</p>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${tam};" data-content="${t}"></div>
                        </div>
                    </div>
                    `
}
hab("CSS", "70%","70%")
hab("JavaScript", "50%","50%")
hab("python", "15%","15%")
hab("Banco de Dados", "30%","30%")
hab("Node JS", "20%","5%")
hab("UI/UX", "50%","50%")


//criando novos projetos
let grid = document.querySelector("#projetos") 
let project = document.querySelector(".grid-project")
var img2 = document.querySelector(".box-img-project")

let adicionar = (img, titulo, descrição, link)=>{
    project.innerHTML +=

    `
                   <div class="box-project">
                        <img class="box-img-project" src="./img/${img}.png" alt="">
                        <div class="box-text-project">
                            <h4>${titulo}</h4>
                        <p> ${descrição}</p>
                        </div>
                        <a class="bot-proj" href="${link}" target="_blank">Saiba mais</a>
                    </div>
        `
    
}

adicionar("proj_churrascometro", "Churrascometro", "Churrascometro é uma ferramenta que irá auxiliar você a saber o que precisa para um churrasco, baseado na quantidade de pessoas e tempo de churrasco.")
adicionar("portifolioIMG", "Portifolio", "Aqui é onde você vai conhecer um pouco sobre mim, minhas habilidades e alguns projetos, tanto praticos quanto reais.","#")
adicionar("novaBrasiliaIMG", "Nova Brasília", "Landing Page real feita para uma empresa que presta atividades de terceirização de serviços condominais.","https://welington3399.github.io/Nova-Brasilia-servicos/")




