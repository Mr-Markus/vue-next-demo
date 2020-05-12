import { ref } from "vue";

export default function useCounter() {
  const count = ref(0);

  function increase() {
    count.value++;
  }

  function decrease() {
    count.value--;
  }

  return {
    count,
    increase,
    decrease,
  };
}
