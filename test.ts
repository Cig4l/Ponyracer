import {computed, signal} from '@angular/core';

const count = signal(1);
const double = computed(() => {
  console.log(`computing double of ${count()}`);
  return count() * 2;
});
console.log(double());
count.set(2);
count.set(3);
count.set(4);
console.log(double());
console.log(double());
console.log(double());
