import { translate } from './Translate';

test('should return untranslated value if undefined', () => {
  const value = translate('pokemon');

  expect(value).toBe('pokemon');
})