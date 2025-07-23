import { validateBug } from '../../src/utils/validation';

describe('Bug Validation', () => {
  it('should return true for valid bug data', () => {
    const validBug = { title: 'Crash Issue', description: 'App crashes' };
    expect(validateBug(validBug)).toBe(true);
  });

  it('should return false for missing title', () => {
    const invalidBug = { description: 'App crashes' };
    expect(validateBug(invalidBug)).toBe(false);
  });
});
