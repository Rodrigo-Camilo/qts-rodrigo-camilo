import { assertStringIncludes  } from "https://deno.land/std/testing/asserts.ts"; // Importando a função "assertStringIncludes" da biblioteca do DENO.


const nossaStringLinda = "Olá, eu me chamo Rodrigo!";

//Deno.test é uma função responsável por melhorar a organização e a estrutura do código.
Deno.test("Teste de conteúdo contido na String", () => { 

    /*
    Essa assertion tem a função de verificar se a string contém o texto que você deseja, 
    caso não esteja contido, a assertion irá falhar.
    */

    assertStringIncludes(nossaStringLinda, "Rodrigo", 'A string não contém a palavra "Rodrigo" ');
    //Nesse exemplo, a String contém a palavra "Rodrigo", fazendo com que a assertion passe.

    assertStringIncludes(nossaStringLinda, "Batata", 'A string não contém a palavra "Batata" ');
    //Nesse exemplo, como a String NÃO contém a palavra "Batata", a assertion irá falhar.
});