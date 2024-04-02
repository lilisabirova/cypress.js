describe('Тестирование staya', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru'); // ввел логин
        cy.get('#loginButton').should('be.disabled') // кнопка не кликабельна

        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
        cy.get('#loginButton').should('be.enabled') // кнопка кликабельна

        cy.get('#loginButton').click(); // нажимаю войти

        cy.get('#loginButton').should('be.visible') // текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста

        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик

         })
})