/**
 * File: cadastrarUsuario.js
 * Author: Lucas Barros
 * Date: 24/01/2022
 */

/// <reference types="Cypress" />

// Importar Elementos da Pagina
import ElemCadastroUsuario from '../elements/elemCadastroUsuario'
const elemCadastroUsuario = new ElemCadastroUsuario

//Setar URL
const url = Cypress.config("baseUrl")



class CadastrarUsuarioPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // valida que esta no site correto
    validarFormulario() {
        cy.get(elemCadastroUsuario.headerSite()).should('contain', 'Cadastro de usuários')
    }
  
    // Insere os dados necessário
    inserirDadosRegistro(nome,email,senha) {
        switch (nome){
            case '':
                cy.get(elemCadastroUsuario.nomeInput()).invoke('val', '')
            break;
            default:
            cy.get(elemCadastroUsuario.nomeInput()).type(nome)
        }
        

        switch (email){
            case '':
                cy.get(elemCadastroUsuario.emailInput()).invoke('val', '')
            break;
            default:
            cy.get(elemCadastroUsuario.emailInput()).type(email)
        }

        switch (senha){
            case '':
                cy.get(elemCadastroUsuario.senhaInput()).invoke('val', '')
            break;
            default:
            cy.get(elemCadastroUsuario.senhaInput()).type(senha)
        }
    }

    salvarCadastro(){
        cy.get(elemCadastroUsuario.cadastrarBtn()).click()
    }

    validaradastro(nomeTabela, emailTabela){
        cy.get(elemCadastroUsuario.nomeLbl()).should('contain', nomeTabela)
        cy.get(elemCadastroUsuario.emailLbl()).should('contain', emailTabela)
    }

    validarMsgError(msgError){
        switch(msgError) {
            case 'Por favor, insira um nome completo.' :
                cy.get(elemCadastroUsuario.erroNameMsg())
                .should('contain', msgError)
                break;
            case 'Por favor, insira um e-mail válido.' :
                cy.get(elemCadastroUsuario.erroEmailMsg())
                .should('contain', msgError)
                break;  
            case 'A senha deve conter ao menos 8 caracteres.' :
                cy.get(elemCadastroUsuario.erroSenhaMsg())
                .should('contain', msgError)
                break;  
            case 'O campo Nome é obrigatório.' :
                cy.get(elemCadastroUsuario.erroNameMsg())
                .should('contain', msgError)
                break;  
            case 'O campo E-mail é obrigatório.' :
                cy.get(elemCadastroUsuario.erroEmailMsg())
                .should('contain', msgError)
                break;  
            case 'O campo Senha é obrigatório.' :
                cy.get(elemCadastroUsuario.erroSenhaMsg())
                .should('contain', msgError)
                break;  
        }
    }
}

export default CadastrarUsuarioPage;