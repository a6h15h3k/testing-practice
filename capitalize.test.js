let capitalize = require('./capitalize');

test('capitalize sam to show Sam', () => {
    expect(capitalize('sam')).toBe('Sam');
});