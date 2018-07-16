<template>
  <div class="count-down">
    <CountDownViewer v-if="targetDate" v-bind:target-date="targetDate"></CountDownViewer>
    <CountDownSetup v-else></CountDownSetup>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CountDownSetup from '@/components/CountDownSetup.vue';
import CountDownViewer from '@/components/CountDownViewer.vue';
import * as moment from 'moment';

@Component({
  components: {
    CountDownSetup,
    CountDownViewer,
  },
})
export default class CountDown extends Vue {
  public targetDate: moment.Moment | null = null;

  public created(): void {
    const queryTargetUnixTimestamp = this.$route.query.targetUnixTimestamp;
    if (queryTargetUnixTimestamp) {
      this.targetDate = moment(queryTargetUnixTimestamp);
    }
  }
}
</script>

<style scoped lang="less">
</style>