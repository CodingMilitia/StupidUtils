<template>
  <div class="count-down">
    <h1>Specify target date</h1>
    <form>
      <div>
        <input type="date" name="date" v-model="date" />
        <input type="number" name="hours" v-model="hours" />
        <input type="number" name="minutes" v-model="minutes" />
      </div>
      <div>
        <input type="button" value="Go" @click="generateTargetLink()" />
      </div>      
    </form>
    <div>
        <div v-if="targetDate">
          <router-link :to="{ path: 'count-down', query: { targetDate: targetDate }}">Link</router-link>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as moment from 'moment';

@Component
export default class CountDownSetup extends Vue {
  public targetDate: string | null = null;
  public date: moment.Moment | null = null;
  public hours: number | null = null;
  public minutes: number | null = null;

  public generateTargetLink(): void {    
    this.targetDate = moment(this.date!)
      .hour(+this.hours!)
      .minute(+this.minutes!)
      .toISOString(true);
  }
}
</script>

<style scoped lang="less">
</style>