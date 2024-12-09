const generate = require('./trailsum');

test('snapshot matches', () => {
    const user = generate();
    expect(user).toMatchSnapshot({
        id:expect.any(Number),
    });
});