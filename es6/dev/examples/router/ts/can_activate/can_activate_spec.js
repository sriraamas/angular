import { verifyNoBrowserErrors } from 'angular2/src/testing/e2e_util';
function waitForElement(selector) {
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    browser.wait(EC.presenceOf($(selector)), 20000);
}
describe('reuse example app', function () {
    afterEach(verifyNoBrowserErrors);
    var URL = 'angular2/examples/router/ts/can_activate/';
    it('should navigate to user 1', function () {
        browser.get(URL);
        waitForElement('home-cmp');
        element(by.css('#user-1-link')).click();
        waitForElement('control-panel-cmp');
        expect(browser.getCurrentUrl()).toMatch(/\/user-settings\/1$/);
        expect(element(by.css('control-panel-cmp')).getText()).toContain('Settings');
    });
    it('should not navigate to user 2', function () {
        browser.get(URL);
        waitForElement('home-cmp');
        element(by.css('#user-2-link')).click();
        waitForElement('home-cmp');
        expect(element(by.css('home-cmp')).getText()).toContain('Welcome Home!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuX2FjdGl2YXRlX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9leGFtcGxlcy9yb3V0ZXIvdHMvY2FuX2FjdGl2YXRlL2Nhbl9hY3RpdmF0ZV9zcGVjLnRzIl0sIm5hbWVzIjpbIndhaXRGb3JFbGVtZW50Il0sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sK0JBQStCO0FBRW5FLHdCQUF3QixRQUFRO0lBQzlCQSxJQUFJQSxFQUFFQSxHQUFTQSxVQUFXQSxDQUFDQSxrQkFBa0JBLENBQUNBO0lBQzlDQSxnRUFBZ0VBO0lBQ2hFQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtBQUNsREEsQ0FBQ0E7QUFFRCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFFNUIsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFFakMsSUFBSSxHQUFHLEdBQUcsMkNBQTJDLENBQUM7SUFFdEQsRUFBRSxDQUFDLDJCQUEyQixFQUFFO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRS9ELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0UsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0JBQStCLEVBQUU7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0UsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dmVyaWZ5Tm9Ccm93c2VyRXJyb3JzfSBmcm9tICdhbmd1bGFyMi9zcmMvdGVzdGluZy9lMmVfdXRpbCc7XG5cbmZ1bmN0aW9uIHdhaXRGb3JFbGVtZW50KHNlbGVjdG9yKSB7XG4gIHZhciBFQyA9ICg8YW55PnByb3RyYWN0b3IpLkV4cGVjdGVkQ29uZGl0aW9ucztcbiAgLy8gV2FpdHMgZm9yIHRoZSBlbGVtZW50IHdpdGggaWQgJ2FiYycgdG8gYmUgcHJlc2VudCBvbiB0aGUgZG9tLlxuICBicm93c2VyLndhaXQoRUMucHJlc2VuY2VPZigkKHNlbGVjdG9yKSksIDIwMDAwKTtcbn1cblxuZGVzY3JpYmUoJ3JldXNlIGV4YW1wbGUgYXBwJywgZnVuY3Rpb24oKSB7XG5cbiAgYWZ0ZXJFYWNoKHZlcmlmeU5vQnJvd3NlckVycm9ycyk7XG5cbiAgdmFyIFVSTCA9ICdhbmd1bGFyMi9leGFtcGxlcy9yb3V0ZXIvdHMvY2FuX2FjdGl2YXRlLyc7XG5cbiAgaXQoJ3Nob3VsZCBuYXZpZ2F0ZSB0byB1c2VyIDEnLCBmdW5jdGlvbigpIHtcbiAgICBicm93c2VyLmdldChVUkwpO1xuICAgIHdhaXRGb3JFbGVtZW50KCdob21lLWNtcCcpO1xuXG4gICAgZWxlbWVudChieS5jc3MoJyN1c2VyLTEtbGluaycpKS5jbGljaygpO1xuICAgIHdhaXRGb3JFbGVtZW50KCdjb250cm9sLXBhbmVsLWNtcCcpO1xuICAgIGV4cGVjdChicm93c2VyLmdldEN1cnJlbnRVcmwoKSkudG9NYXRjaCgvXFwvdXNlci1zZXR0aW5nc1xcLzEkLyk7XG5cbiAgICBleHBlY3QoZWxlbWVudChieS5jc3MoJ2NvbnRyb2wtcGFuZWwtY21wJykpLmdldFRleHQoKSkudG9Db250YWluKCdTZXR0aW5ncycpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIG5vdCBuYXZpZ2F0ZSB0byB1c2VyIDInLCBmdW5jdGlvbigpIHtcbiAgICBicm93c2VyLmdldChVUkwpO1xuICAgIHdhaXRGb3JFbGVtZW50KCdob21lLWNtcCcpO1xuXG4gICAgZWxlbWVudChieS5jc3MoJyN1c2VyLTItbGluaycpKS5jbGljaygpO1xuICAgIHdhaXRGb3JFbGVtZW50KCdob21lLWNtcCcpO1xuXG4gICAgZXhwZWN0KGVsZW1lbnQoYnkuY3NzKCdob21lLWNtcCcpKS5nZXRUZXh0KCkpLnRvQ29udGFpbignV2VsY29tZSBIb21lIScpO1xuICB9KTtcbn0pO1xuIl19