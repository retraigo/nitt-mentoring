<template>
    <div></div>
</template>
<script setup lang="ts">
const route = useRoute();
let loginerr = route.query.loginerr as string;
if(loginerr){
    navigateTo(`/login?loginerr=${loginerr}`)
}else{
    navigateTo("/login")
}
</script>