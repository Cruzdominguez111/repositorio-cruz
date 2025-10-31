// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector ("#titulo");

    titulo.addEventListener ( "mouseover", function(){
        let nombre = prompt("cual es su nombre?")
        let parrafo = document.querySelector("#saludo")
        if (nombre == undefined) {
            parrafo.innerText= "bienvenido usuario"
        }
        else
            {parrafo.innerText = "bienvenido "  +  nombre
                parrafo.style.textTransform = "uppercase"
            }

            titulo.style.display = "none"
            selector_personajes = document.querySelector("#cruzado")
            selector_personajes.style.display= "block"

            selector_personajes.addEventListener("click", function(){
            document.querySelector(".bienvenida") .style.display = "none"
            document.querySelector(".personajes") .style.display = "flex"
            })
           
            let bart = document.querySelector ("#bart")
            let lisa = document.querySelector ("#lisa")
            let homero = document.querySelector ("#homero")
            let marge = document.querySelector ("#marge")
            let maggie = document.querySelector ("#maggie")
            let milhouse = document.querySelector ("#milhouse")
            let burns = document.querySelector ("#burns")
            let bobpatiño = document.querySelector ("#bobpatiño")
            let flanders = document.querySelector ("#flanders")
            let duffman = document.querySelector ("#duffman")
            let gregory = Document.querySelector ("#gregory")
             let nelson = document.querySelector ("#nelson")


             bart.addEventListener ("click", function() 
             {this.style.backgroundcolor = "yellow"

             })

            lisa.addEventListener ("dblclick", function() 
             {this.style.backgroundcolor = "yellow"
                
             })

             homero.addEventListener ("click", function() 
             {this.style.backgroundcolor = "yellow"
                
             }
            )

            marge.addEventListener ("mouseover", function() 
             {this.style.backgroundcolor = "yellow"
                
             }
            )

            maggie.addEventListener ("mouseover", function() 
             {this.style.backgroundcolor = "yellow"
                
             }
            )

            milhouse.addEventListener ("click", function() 
             {this.style.backgroundcolor = "yellow"
                
             }
            )

            burns.addEventListener ("mouseover", function() 
             {this.style.backgroundcolor = "yellow"
                
             }
            )
            bobpatiño.addEventListener ("dblclick", function() 
             {this.style.backgroundcolor = "yellow"
                
             }
            )
            flanders.addEventListener ("mouseover", function() 
             {this.style.backgroundcolor = "yellow"
                
             }
            )

            duffman.addEventListener ("dblclick", function() 
             {this.style.backgroundcolor = "yellow"
                
             }
            )

            gregory.addEventListener ("mouseover", function() 
             {this.style.backgroundcolor = "yellow"
                
             }
            )

            nelson.addEventListener ("click", function() 
             {this.style.backgroundcolor = "yellow"
                
             }
            )


























})

 
  /*  let saludo = ;
 
    let span = ;
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
   /* let boton = ;*/
 
 
 }) 