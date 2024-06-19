import { assertStringIncludes  } from "https://deno.land/std/testing/asserts.ts"; // Importando a função "assertStringIncludes" da biblioteca do DENO.

/*
Essa assertion tem a função de verificar se a string contém o texto que você deseja, 
caso não esteja contido, a assertion irá falhar.
*/

const nossaStringLinda = "Olá, eu me chamo Rodrigo!";

assertStringIncludes(nossaStringLinda, "Rodrigo", 'A string não contém a palavra "Rodrigo" ');
//Nesse exemplo, a String contém a palavra "Rodrigo", fazendo com que a assertion passe.

assertStringIncludes(nossaStringLinda, "Batata", 'A string não contém a palavra "Batata" ');
//Nesse exemplo, como a String NÃO contém a palavra "Batata", a assertion irá falhar.