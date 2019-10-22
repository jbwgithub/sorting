/* eslint-disable no-undef */
describe('Bubble Sort', function () {
  beforeAll(function () {
    spyOn(checkObj, 'swap').and.callThrough();
    spyOn(checkObj, 'compare').and.callThrough();
  });
  it('returns an array', function () {
    expect(Array.isArray(bubbleSort([]))).toEqual(true);
  });
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handle single item', function () {
    expect(bubbleSort([2])).toEqual([2]);
  })
  it('handles multiples items', function () {
    expect(bubbleSort([3, 2])).toEqual([2, 3]);
    expect(bubbleSort([3, 2, 7, 5])).toEqual([2, 3, 5, 7]);
    expect(bubbleSort([9, 1, 7, 4, 32])).toEqual([1, 4, 7, 9, 32]);
  })
  it('counts number of swaps', function () {
    bubbleSort([9, 1, 7, 4, 32]);
    expect(checkObj.swap.calls.count()).toEqual(11);
  })
  it('counts number of comarisons', function () {
    bubbleSort([9, 1, 7, 4, 32]);
    expect(checkObj.compare.calls.count()).toEqual(12);
  })
})
