const helper = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(helper.format_date(date)).toBe('3/20/2020');
});


test('format_plural() returns correct pluralization', () => {
    let one = ["Lion", 1];
    let many = ["Lion", 2];
    let none = ["Lion", 0];

    expect(helper.format_plural(one)).toBe('Lion');
    expect(helper.format_plural(many)).toBe('Lions');
    expect(helper.format_plural(none)).toBe('Lions');
});