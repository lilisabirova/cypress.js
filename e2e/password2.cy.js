describe('Тестирование staya', function () {
    
    it('Забыл пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#forgotEmailButton').click(); // нажимаю забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел email

        cy.get('#restoreEmailButton').click(); // нажимаю отправить код

        cy.get('#messageHeader').should('be.visible') // текст виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка текста

        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик

    })
})