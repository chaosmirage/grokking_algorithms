describe('add', () => {
  it('1', () => {
    expect(binarySearchRecursion([1, 12, 33, 44, 50, 60, 77, 90], 33)).toBe(2);
  });

  it('2', () => {
    expect(binarySearchRecursion([12, 33, 44, 50, 60, 77, 90], 33)).toBe(1);
  });

  it('3', () => {
    expect(binarySearchRecursion([12, 33, 44, 50, 60, 77, 90], 100)).toBe(null);
  });

  it('4', () => {
    expect(binarySearchRecursion([], 100)).toBe(null);
  });
});
