import { assert } from "https://deno.land/std@0.224.0/testing/asserts.ts";

let idade = 15; //Declaração da variável idade

assert(idade >= 18, "Idade não pode ser menor que 18 anos!");
// Essa assertion irá lançar um erro caso a condição seja falsa
// A condição usada de exemplo foi: Se a idade for maior ou igual a 18, 
// caso o retorno seja falso, irá retornar um erro!

