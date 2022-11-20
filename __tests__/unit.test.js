// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//test matches valid phone numbers
test('valid phone number case 1', () => {
    expect(functions.isPhoneNumber('626-123-4567')).toBe(true);
    });

    test('valid phone number case 2', () => {
    expect(functions.isPhoneNumber('858-123-4567')).toBe(true);
    });

    test('not valid phone number case 1', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
    });

    test('not valid phone number case 2', () => {
    expect(functions.isPhoneNumber('a153266')).toBe(false);
    });

//test matches valid emails
test('valid email case 1', () => {
    expect(functions.isEmail('abcdes@gmail.com')).toBe(true);
    });

test('valid email case 2', () => {
    expect(functions.isEmail('123abjsa@hot.edu')).toBe(true);
    });

test('not valid email case 1', () => {
    expect(functions.isEmail('32ssda1gmail.com')).toBe(false);
    });

test('not valid email case 2', () => {
    expect(functions.isEmail('abcdes@gmail.comvvv')).toBe(false);
    });


//test matches StrongPassword
test('StrongPassword case 1', () => {
    expect(functions.isStrongPassword('sdsa2334')).toBe(true);
    });

test('StrongPassword case 2', () => {
    expect(functions.isStrongPassword('ada353')).toBe(true);
    });   

test('not StrongPassword case 1', () => {
    expect(functions.isStrongPassword('12345')).toBe(false);
    });

test('not StrongPassword case 2', () => {
    expect(functions.isStrongPassword('sda')).toBe(false);
    });


//test is Date
test('is Date case 1', () => {
    expect(functions.isDate('10/01/1997')).toBe(true);
    });

test('is Date case 2', () => {
    expect(functions.isDate('07/15/2033')).toBe(true);
    });

test('is not Date case 1', () => {
    expect(functions.isDate('12314')).toBe(false);
    });

test('is not Date case 2', () => {
    expect(functions.isDate('95559a')).toBe(false);
    });

//test is HexColor
test('is HexColor case 1', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
    });

test('is HexColor case 2', () => {
    expect(functions.isHexColor('#354689')).toBe(true);
    });

test('is not HexColor case 1', () => {
    expect(functions.isHexColor('#SDAD')).toBe(false);
    });

test('is not HexColor case 2', () => {
    expect(functions.isHexColor('#95559aAAD')).toBe(false);
    });