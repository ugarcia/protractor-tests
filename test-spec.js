describe('gamewheel dashboard page', function() {

    beforeAll(function() {
        browser.get(browser.baseUrl);    
    });

    it('should navigate to proper page', function() {
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/dashboard');
        expect(browser.getTitle()).toEqual('Gamewheel');
    });

    it('should have something', function() {

        // var todoList = element.all(by.repeater('todo in todoList.todos'));
        // expect(todoList.count()).toEqual(3);
        // expect(todoList.get(2).getText()).toEqual('write first protractor test');
        expect(5).toEqual(5);
        // You wrote your first test, cross it off the list
        // todoList.get(2).element(by.css('input')).click();
        // var completedAmount = element.all(by.css('.done-true'));
        // expect(completedAmount.count()).toEqual(2);
    });
});