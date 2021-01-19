function merge(arr, start, end) {
  const mid = Math.floor((start + end) / 2);
  const leftArr = arr.slice(start, mid + 1);
  leftArr.push(Infinity);
  const rightArr = arr.slice(mid + 1, end + 1);
  rightArr.push(Infinity);
  let left = 0;
  let right = 0;
  let p = start;
  while (p <= end) {
    if (leftArr[left] <= rightArr[right]) {
      arr[p] = leftArr[left];
      left++;
    } else {
      arr[p] = rightArr[right];
      right++;
    }
    p++;
  }
}

function mergeSort(arr, start, end) {
  if (start >= end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, end);
}

module.exports = mergeSort;

function sort(arr) {
  mergeSort(arr, 0, arr.length - 1);
}

const arr = [5, 3, 8, 6, 2, 7, 1, 4];
console.log('before sorting', arr);
sort(arr);
console.log('after sorting', arr);
