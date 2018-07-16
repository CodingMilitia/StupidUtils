<template>
  <div class="count-down">
    <h1>Specify target date</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CountDownSetup extends Vue {
  // get unix timestamp
  // new Date('2012.08.10').getTime() / 1000
}
</script>

<style scoped lang="less">
</style>