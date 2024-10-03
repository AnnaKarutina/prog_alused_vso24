let summa = 0

for(let ring = 1; ring <= 6; ring++){
    if (ring % 2 == 0){
        summa = summa + ring
    }    
}
console.log(`Porgandite koguarv ${summa}`)