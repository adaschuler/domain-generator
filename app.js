
function domainGenerator (type){

var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon','puedes'];
var extension = ['.com','.cl','.org',".net"];

for (let i=0;i<pronoun.length;i++){
    for (let j=0;j<adj.length;j++){
        for (let k=0;k<noun.length;k++){

            if (type==="extension"){

                for (let l=0;l<extension.length;l++){
        console.log(pronoun[i]+adj[j]+noun[k]+extension[l])
    }

            }else{

                console.log(pronoun[i]+adj[j]+"."+noun[k])
            }
            
            /* for (let l=0;l<extension.length;l++){
        console.log(pronoun[i]+adj[j]+noun[k]+extension[l])
    } */
    }
    }
    /* let domain = pronoun[Math.floor(Math.random() * 1)]+adj[Math.floor(Math.random() * 1)]+noun[Math.floor(Math.random() * 2)]+extension[Math.floor(Math.random() * 3)]; 
    esto funciona, pero esta solo concatenando y arroja solo 1 vez x ejecucion, el ejercicio solicitaba recorrer todas las opciones */

    
    }
/* return domain */
}

domainGenerator()
domainGenerator("extension")
/* console.log(domainGenerator ()); */