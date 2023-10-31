const nome = 'JeFF'
const emailValido = 'JeFF@gmail.com'
const emailInvalido = 'JeFF.com'
const senhaValida = '123456'
const senhaInvalida = '123'


describe('Desafio', () => {      
    it('Validar Campo Nome Vazio', () => {
        cy.visit('/')
        cy.get('.right_list_fix > :nth-child(2) > a').click()
        cy.get('.account_form > h3').should('be.visible').should('have.text', 'Cadastro de usuário')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('have.text', 'O campo nome deve ser prenchido')
    })
    it('Validar Campo e-mail Vazio', () => {
        cy.visit('/')
        cy.get('.right_list_fix > :nth-child(2) > a').click()
        cy.get('.account_form > h3').should('be.visible').should('have.text', 'Cadastro de usuário')
        cy.get('#user').type(nome)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })
    it('Validar Campo e-mail inválido', () => {
        cy.visit('/')
        cy.get('.right_list_fix > :nth-child(2) > a').click()
        cy.get('.account_form > h3').should('be.visible').should('have.text', 'Cadastro de usuário')
        cy.get('#user').type(nome)
        cy.get('#email').type(emailInvalido)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })
    it('Validar Campo Senha Vazio', () => {
        cy.visit('/')
        cy.get('.right_list_fix > :nth-child(2) > a').click()
        cy.get('.account_form > h3').should('be.visible').should('have.text', 'Cadastro de usuário')
        cy.get('#user').type(nome)
        cy.get('#email').type(emailValido)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })
    it('Validar Campo Senha Inválida', () => {
        cy.visit('/')
        cy.get('.right_list_fix > :nth-child(2) > a').click()
        cy.get('.account_form > h3').should('be.visible').should('have.text', 'Cadastro de usuário')
        cy.get('#user').type(nome)
        cy.get('#email').type(emailValido)
        cy.get('#password').type(senhaInvalida)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })
    it('Cadastro Realizado Com Sucesso', () => {
        cy.visit('/')
        cy.get('.right_list_fix > :nth-child(2) > a').click()
        cy.get('.account_form > h3').should('be.visible').should('have.text', 'Cadastro de usuário')
        cy.get('#user').type(nome)
        cy.get('#email').type(emailValido)
        cy.get('#password').type(senhaValida)
        cy.get('#btnRegister').click()
        cy.get('.swal2-popup').should('be.visible').contains('Cadastro realizado!')
        cy.contains('Bem-vindo ' + nome)
    })
}) 