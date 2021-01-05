function partition(arr, start, end) {
  const pivot = arr[end];
  let j = start;
  let i = j - 1;
  for (; j < end; j++) {
    if (pivot >= arr[j]) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, ++i, end);
  return i;
}
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, start, end) {
  if (start >= end) return;
  const i = partition(arr, start, end);
  quickSort(arr, start, i - 1);
  quickSort(arr, i + 1, end);
}

module.exports = quickSort;
