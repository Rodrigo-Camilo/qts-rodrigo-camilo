import { assertFalse } from "https://deno.land/std@0.224.0/testing/asserts.ts"; // Importando a função "assertFalse" da biblioteca do DENO.

//Deno.test é uma função responsável por melhorar a organização e a estrutura do código.
Deno.test("Teste de comparação de valores", () => { 

    //Essa assertion tem a funcionalidade de garantir que o retorno do seu teste tenha um valor false.

    assertFalse(1 !== 1, "1 é diferente de 1"); 
    //No exemplo, 1 não é diferente de 1, retornando assim um valor FALSE, fazendo com que essa assertion passe.

    assertFalse(1 !== 2, "1 é diferente de 2"); 
    //No exemplo, 1 é diferente de 2, retornando um valor TRUE, assim fazendo com essa assertion falhe.

});