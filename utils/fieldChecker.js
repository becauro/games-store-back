// [ABOUT]: Bem vindo ao "fieldCheck". Essa função (módulo) criei visando diminuir a complexidade de middlewares que recebem muitos campos.
// Pequena, porém MUITO útil se souber usar.

// [DESCRIÇÃO]: Sabemos que nem sempre é fácil validar um middleware que recebe muitos campos e 
// ficar de bem com o ESLinter. Sem contar quando alguns desses campos são chaves para um objeto de "subcampos".
// Ter que validar todos esses campos dentro de uma única função de validação, incorre em mais quantiodades de linhas
// e, talvez, a famigerada clomplexidade do ESLinter, que não é uma tarefa muito agradável.
// É por isso que surgiu esse fieldCheck, uma funçãozinha genérica de utilidade para ajudar middlewares eliminar essas "issues" na validação de seus campos.

// [REQUISTO / CONTEXTO]: Precisa ter um middleware de error definido em algum lugar.

// [ADAPTAÇÃO]: Se precisa de retornos diretos --- ou seja, sem next, sem middleware de erros, basta remover esse parâmetro e modificar o return.

// [LÓGICA]: Ao invés de ter que gastar pelo menos umas 5 linhas ( ou deixar uma linha muito larga),
// Apenas usamos esse fieldChecker passando alguns parâmetros que ficariam em linhas diferentes --- geralmente com espaços entre elas.

// [CASES]:
// Já consegui diminuir complexidade de 14 para 3 fazendo combinção com esse fieldChecker
// Já consegui diminuir quase metade de linhas.

// [PARAMENTROS(4)]:
// status: O status de retorno do middleware de acordo com o "bool" definido.
// msg: A mensagem a ser retornada.
// next: Callback do parâmentro "next" dos middlewares.
// Bool: Um lógica boolean qualquer, usada para validação de um campo.

// [FUTURO]:
// Testar performace.

// [AUTOR]: Michel (becauro).

module.exports = function fieldChecker(status, msg, next, bool) {
    if (bool) {
  return next({ status, message: msg });
  }
};