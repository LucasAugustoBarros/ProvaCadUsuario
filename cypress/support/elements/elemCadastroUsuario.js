/**
 * File: elemCadastroUsuario.js
 * Author: Lucas Barros
 * Date: 24/01/2022
 */


 class ElemCadastroUsuario {
    headerSite = () => { return 'h1' }  // "Cadastro de usuários"
    //Dados Registro
    nomeInput = () => { return '#name'}
    erroNameMsg = () => { return 'div#root form > div:nth-child(1) > p'}
    emailInput = () => { return '#email'}
    erroEmailMsg = () => { return 'div#root div:nth-child(2) > p'}
    senhaInput = () => { return '#password'}
    erroSenhaMsg = () => { return 'div#root div:nth-child(3) > p'}
    // Botão Cadastrar
    cadastrarBtn = () => { return '#register'} // Botão de voltar
    // tabela usuário cadastrado
    nomeLbl = () => { return '#tdUserName1'}
    emailLbl = () => { return '#tdUserEmail1'}
    // Botão excluir
    excluirBtn = () => { return '#removeUser1'} // Botão de voltar
  }
  
  export default ElemCadastroUsuario;