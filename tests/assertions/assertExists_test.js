import { assertExists } from "https://deno.land/std@0.224.0/testing/asserts.ts"; //Importando a função "assertExists" da biblioteca do DENO.


//Essa assertion tem a funcionalidade de verificar se a variável tem o valor NULL ou UNDEFINED.

const nome = "Rodrigo"; //Declaração da variável nome.
assertExists(nome, "Variável nome não existe"); 
//No exemplo a variável nome recebe o valor "Rodrigo", fazendo com que essa assertion passe.

const idade = null; //Declaração da variável idade.
assertExists(idade, "Variável idade não existe");
//No exemplo a variável idade recebe um valor NULO, fazendo com que essa assertion falhe.