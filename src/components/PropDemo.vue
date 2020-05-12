<template>
    <h1>{{ msg }}</h1>
</template>
<script>
import { ref } from "vue";

export default {
    props: {
        msg: String
    },
    setup(props) {
        console.log(props.msg);
    }
};
</script>
