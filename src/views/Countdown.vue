<template>
  <div class="countdown">
    <CountdownViewer v-if="targetDate" v-bind:target-date="targetDate"></CountdownViewer>
    <CountdownSetup v-else></CountdownSetup>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import * as moment from 'moment';

import CountdownSetup from '@/components/CountdownSetup.vue';
import CountdownViewer from '@/components/CountdownViewer.vue';

@Component({
  components: {
    CountdownSetup,
    CountdownViewer,
  },
})
export default class Countdown extends Vue {
  public targetDate: moment.Moment | null = null;

  @Watch('$route')
  private routeChanged(): void {
    const queryTargetDate = this.$route.query.targetDate;
    if (queryTargetDate) {
      this.targetDate = moment(queryTargetDate);
    } else {
      this.targetDate = null;
    }
  }
}
</script>

<style scoped lang="less">
</style>