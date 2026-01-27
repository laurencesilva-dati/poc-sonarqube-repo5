// Sample test file for SonarQube analysis
describe('Sample Test Suite', () => {
    test('should pass basic test', () => {
        expect(true).toBe(true);
    });
    
    test('should handle string operations', () => {
        const testString = 'Hello World';
        expect(testString.length).toBe(11);
        expect(testString.toLowerCase()).toBe('hello world');
    });
    
    test('should handle array operations', () => {
        const testArray = [1, 2, 3, 4, 5];
        expect(testArray.length).toBe(5);
        expect(testArray.includes(3)).toBe(true);
    });
});