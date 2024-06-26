import { assert } from "https://deno.land/std@0.224.0/testing/asserts.ts"; //Importando a função "assert" da biblioteca do DENO.

let idade = 15; //Declaração da variável idade.

//Deno.test é uma função responsável por melhorar a organização e a estrutura do código.
Deno.test("Teste de verificação da variável idade", () => { 

    //Essa assertion tem a funcionalidade de garantir que o retorno do seu teste tenha um valor true.
    assert(idade < 18, "Idade maior que 18 anos!");
    //No exemplo a variável idade recebe o valor 15, fazendo com que essa assertion passe por 15 ser menor que 18.

    assert(idade >= 18, "Idade menor ou igual que 18 anos!");
    //No exemplo a variável idade recebe o valor 15, fazendo com que essa assertion falhe por 15 ser menor que 18.
});