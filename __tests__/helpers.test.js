const helper = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(helper.format_date(date)).toBe('3/20/2020');
});


test('format_plural() returns correct pluralization', () => {

    expect(helper.format_plural("Lion", 1)).toBe('Lion');
    expect(helper.format_plural("Lion", 8)).toBe('Lions');
    expect(helper.format_plural("Lion", 0)).toBe('Lions');
});

test('format_url() returns a simplified url string', () => {
    const url1 = helper.format_url('http://test.com/page/1');
    const url2 = helper.format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = helper.format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});