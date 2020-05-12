<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <hr />
        <PropDemo msg="Hello World!" />
        <hr />
        <p>IsOnline: {{ isOnline }}</p>
        <Counter />
    </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import PropDemo from "@/components/PropDemo.vue";
import { defineComponent } from "vue";
import useOnline from "../functions/useOnline";

export default defineComponent({
    name: "Home",
    components: {
        Counter,
        PropDemo
    },
    setup() {
        const isOnline = useOnline();
        return {
            isOnline
        };
    }
});
</script>
