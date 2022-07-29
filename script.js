alert (questions);

const questions  = [
    {
        question : 
        "Commbien de temps à durée la seconde guerre mondiale ? \n1. 4 ans \n2. 6 ans",
        reponse: 2
    },
    {

        question:
        "En quelle année Hitler est il devenu chancelier de l'Allemange ? \n1. En 1933 \n2. En 1936",
        reponse : 1
    },

    {
        question : 
        "En quelle année a eu lieu l'opération Overlord ? \n1. En 1942 \n2. En 1944",
        reponse: 2
    },
]




for (let i = 0; i < questions.length; i +=1 ) {
    let repUser = prompt(questions[i].question);

    if (repUser == questions[i].reponse) {
        alert ( "Bonne réponse !");
    }
    else{
            alert("Mauvaise réponse");
            
    }
        if (repUser == questions[i].reponse) {
            alert ( "Bonne réponse !");
            
        }
        else{
                alert("Mauvaise réponse");
        }
    
        if (repUser == questions[i].reponse) {
            alert ( "Bonne réponse !");
            
        }
        else{
            
                alert("Mauvaise réponse");
                
            }
 }
    


    

