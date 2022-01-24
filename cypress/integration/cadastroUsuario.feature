# Arquivo : cadastroUsuario.feature
# Autor   : Lucas Barros
# Data    : 24/01/2022
Feature: Realizar cadastro de usuário
    EU COMO usuário do sistema.
    DESEJO realizar o cadastro de novos usuários.
    PARA QUE seja possível armazenar e gerenciar seus dados.

    Scenario: Realizar cadastro com sucesso.
        Given eu estou na página de cadastro de usuario
        When eu preencho todos os campos solicitados "Lucas Augusto" "Lucas@lucas.com" "12345678" 
        Then eu visualizo que cadastrei com sucesso "Lucas Augusto" "Lucas@lucas.com"
    
    Scenario: Realizar cadastro com nome incompleto.
        Given eu estou na página de cadastro de usuario
        When eu preencho todos os campos solicitados "Lucas" "lucas@lucas.com" "12345678" 
        Then eu visualizo a mensagem de alerta "Por favor, insira um nome completo."

    Scenario: Realizar cadastro com email incompleto.
        Given eu estou na página de cadastro de usuario
        When eu preencho todos os campos solicitados "Lucas Augusto" "lucas" "12345678" 
        Then eu visualizo a mensagem de alerta "Por favor, insira um e-mail válido."

    Scenario: Realizar cadastro com senha incompleta.
        Given eu estou na página de cadastro de usuario
        When eu preencho todos os campos solicitados "Lucas Augusto" "lucas@lucas.com" "11" 
        Then eu visualizo a mensagem de alerta "A senha deve conter ao menos 8 caracteres."

     Scenario: Realizar cadastro sem nome.
        Given eu estou na página de cadastro de usuario
        When eu preencho todos os campos solicitados "" "lucas@lucas.com" "12345678" 
        Then eu visualizo a mensagem de alerta "O campo Nome é obrigatório."

    Scenario: Realizar cadastro sem email.
        Given eu estou na página de cadastro de usuario
        When eu preencho todos os campos solicitados "Lucas Augusto" "" "12345678" 
        Then eu visualizo a mensagem de alerta "O campo E-mail é obrigatório."

    Scenario: Realizar cadastro sem senha.
        Given eu estou na página de cadastro de usuario
        When eu preencho todos os campos solicitados "Lucas Augusto" "lucas@lucas.com" "" 
        Then eu visualizo a mensagem de alerta "O campo Senha é obrigatório."