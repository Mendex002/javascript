var idade = 71
if (idade < 16 ) {
    console.log(`não vota`);
} else if (idade >= 16 && idade <= 18){
    console.log(`voto opcional`);
} else if (idade == 19 && idade <= 70){
    console.log(`voto obrigatorio`);
}else {
    console.log(`voto opcional (acima de 70 anos)`);
}