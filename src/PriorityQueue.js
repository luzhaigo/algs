class Heap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.compare(this.heap[index], this.heap[this.getParentIndex(index)])
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }
  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }
  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < this.heap.length &&
        this.compare(this.heap[rightChildIndex], this.heap[smallerChildIndex])
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.compare(this.heap[index], this.heap[smallerChildIndex])) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

export default Heap;
