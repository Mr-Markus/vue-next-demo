<template>
    <div class="about">
        <PropDemo msg="This is an about page" />
    </div>
</template>
<script>
import { defineComponent } from "vue";
import PropDemo from "../components/PropDemo";

export default defineComponent({
    components: {
        PropDemo
    }
});
</script>
