<template>
  <div class="countdown">
    <h1>Counting down to: {{ getTargetDate() }}</h1>
    {{ remaining }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as moment from 'moment';
import { setInterval, clearInterval } from 'timers';

@Component
export default class CountdownViewer extends Vue {
  public remaining: string = '';

  @Prop() private targetDate!: moment.Moment;
  private timer: any;

  public created(): void {
    this.timer = setInterval(() => this.refreshRemaining(), 500);
  }

  public destroyed(): void {
    clearInterval(this.timer);
  }

  public getTargetDate(): string {
    return `${this.targetDate.format('llll')}`;
  }

  private refreshRemaining(): void {
    const diff = moment.duration(this.targetDate.diff(moment(new Date())));
    this.remaining = `${diff.days()} days, ${diff.hours()} hours, ${diff.minutes()} minutes, ${diff.seconds()} seconds remaining`;
  }
}
</script>

<style scoped lang="less">
</style>