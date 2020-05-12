import { ref, computed, onUnmounted } from "vue";

export default function useOnline() {
  const isOnline = ref(true);

  isOnline.value = window.navigator ? window.navigator.onLine : true;

  const onlineHandler = () => (isOnline.value = true);
  const offlineHandler = () => (isOnline.value = false);
  window.addEventListener("online", onlineHandler, false);
  window.addEventListener("offline", offlineHandler, false);

  onUnmounted(() => {
    window.removeEventListener("online", onlineHandler);
    window.removeEventListener("offline", offlineHandler);
  });

  return computed(() => isOnline.value);
}
