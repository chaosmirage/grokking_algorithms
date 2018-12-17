describe('quickSort', () => {
  it('1', () => {
    expect(quickSort([])).toEqual([]);
  });

  it('2', () => {
    expect(quickSort([1])).toEqual([1]);
  });

  it('3', () => {
    expect(quickSort([5, 1, 2, 13, 3, 4, 100, -1])).toEqual([-1, 1, 2, 3, 4, 5, 13, 100]);
  });
});
