Scenario:

Test Code: 
describe('Button click test', function() {
    it('should be clickable', function() {
        var button = document.getElementById('button');
        expect(button.click).toBeDefined();
    });
});