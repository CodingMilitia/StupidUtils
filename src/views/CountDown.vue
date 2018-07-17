<template>
  <div class="count-down">
    <CountDownViewer v-if="targetDate" v-bind:target-date="targetDate"></CountDownViewer>
    <CountDownSetup v-else></CountDownSetup>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import * as moment from 'moment';

import CountDownSetup from '@/components/CountDownSetup.vue';
import CountDownViewer from '@/components/CountDownViewer.vue';

@Component({
  components: {
    CountDownSetup,
    CountDownViewer
  }
})
export default class CountDown extends Vue {
  public targetDate: moment.Moment | null = null;

  @Watch('$route')
  private routeChanged(): void {
    const queryTargetDate = this.$route.query.targetDate;
    if (queryTargetDate) {
      this.targetDate = moment(queryTargetDate);
    }
  }
}
</script>

<style scoped lang="less">
</style>