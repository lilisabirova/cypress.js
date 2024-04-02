describe('Тестирование staya', function () {
    
    it('Неправильный логин без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('germandolnikov.ru'); // ввел логин
        cy.get('#loginButton').should('be.disabled') // кнопка не кликабельна

        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
        cy.get('#loginButton').should('be.enabled') // кнопка кликабельна

        cy.get('#loginButton').click(); // нажимаю войти

        cy.get('#loginButton').should('be.visible') // текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка текста

        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик

         })
})