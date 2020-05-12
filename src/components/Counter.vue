<template>
    <div class="hello">
        <p>Capacity: {{ counter.count }}</p>
        <button @click="counter.increase()">Increase</button>
        <button @click="counter.decrease()">Decrease</button>
    </div>
</template>

<script>
import { ref } from "vue";
import useCounter from "../functions/useCounter";

export default {
    setup() {
        const counter = useCounter();

        return { counter };
    }
};
</script>
