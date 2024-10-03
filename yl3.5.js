let poialpoisid = 6

let ounad = 14

for(let poiss = 1; poiss <= poialpoisid; poiss++){
    let ounadPoisile = Math.ceil(Math.random() * 2)
    console.log(ounadPoisile)
    ounad = ounad - ounadPoisile
} 
console.log('Lumevalgekele on jäänud ' + ounad + ' õunu')