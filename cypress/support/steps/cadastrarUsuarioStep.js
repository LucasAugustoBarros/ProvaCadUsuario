/**
 * File: cadastrarUsuarioStep.js
 * Author: Lucas Barros
 * Date: 24/01/2022
 */

import CadastrarUsuario from '../pageobjects/cadastrarUsuario'
//import SucessoForm from '../pageobjects/sucessoForm'
const cadastrarUsuario = new CadastrarUsuario
//const sucessoForm = new SucessoForm

Given(/^eu estou na página de cadastro de usuario$/, () => {
    cadastrarUsuario.acessarSite();
})

When(/^eu preencho todos os campos solicitados "([^"]*)" "([^"]*)" "([^"]*)"$/, (nome,email,senha) => {
    cadastrarUsuario.validarFormulario();
    cadastrarUsuario.inserirDadosRegistro(nome,email,senha);
    cadastrarUsuario.salvarCadastro();
})

Then(/^eu visualizo que cadastrei com sucesso "([^"]*)" "([^"]*)"$/, (nomeTabela, emailTabela) => {
    cadastrarUsuario.validaradastro(nomeTabela, emailTabela);
})

Then(/^eu visualizo a mensagem de alerta "([^"]*)"$/, (msgError) => {
    cadastrarUsuario.validarMsgError(msgError);
})