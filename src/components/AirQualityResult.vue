<template>
  <div class="air-quality-result">
    <div class="title">
      <h1 class="city">{{ airQuality?.city }}</h1>
      <p class="country">{{ airQuality?.country }}</p>
    </div>

    <div v-if="airQuality?.current?.pollution" class="pollution">
      <h2>Air Quality Index</h2>
      <span class="aqius">{{ airQuality.current.pollution.aqius }}</span>
      (good)
      <a
        href="#"
        v-if="!state.showExplination"
        @click.prevent="state.showExplination = true"
      >
        What is this?
      </a>
      <div
        v-if="state.showExplination"
        class="aqi-explained"
      >
        <p
          v-for="aqiLevel in aqiExplained"
          :key="aqiLevel.level"
        >{{ aqiLevel.description }}</p>
        <a
          href="#"
          @click.prevent="state.showExplination = false"
        >Close</a>
      </div>
    </div>

    <div v-if="airQuality?.current?.weather" class="weather">
      <h2>Weather</h2>
      <dl>
        <dt>Humidity:</dt>
        <dd>{{ airQuality.current.weather.hu }}%</dd>

        <dt>Tempreture:</dt>
        <dd>{{ airQuality.current.weather.tp }}&#8451;</dd>

        <dt>Wind:</dt>
        <dd>
          {{ airQuality.current.weather.wd }}&#176;
          <img
            class="arrow"
            src="@/assets/arrow.svg"
            :style="{'transform': `rotate(${airQuality.current.weather.wd}deg)`,}"
          />
        </dd>
        <dd>
          {{ airQuality.current.weather.ws * 3.6 /* Convers m/s into km/h */ }}km/h
        </dd>

        <dt>Air Pressure:</dt>
        <dd>{{ airQuality.current.weather.pr }}mb</dd>
      </dl>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  props: {
    airQuality: null,
  },
  setup() {
    const state = reactive({
      showExplination: false,
    });

    const aqiExplained = [
      {
        color: 'rgb(0, 228, 0)',
        min: 0,
        max: 50,
        level: 'Good',
        description: 'Air quality is satisfactory, and air pollution poses little or no risk.',
      },
      {
        color: 'yellow',
        min: 51,
        max: 100,
        level: 'Moderate',
        description: 'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.',
      },
      {
        color: 'rgb(255, 126, 0)',
        min: 101,
        max: 150,
        level: 'Unhealthy for Sensitive Groups',
        description: 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.',
      },
      {
        color: 'red',
        min: 151,
        max: 200,
        level: 'Unhealthy',
        description: 'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.',
      },
      {
        color: 'rgb(143, 63, 151)',
        min: 201,
        max: 300,
        level: 'Very Unhealthy',
        description: 'Health alert: The risk of health effects is increased for everyone.',
      },
      {
        color: 'rgb(126, 0, 35 )',
        min: 301,
        max: 1000000,
        level: 'Unhealthy',
        description: 'Health warning of emergency conditions: everyone is more likely to be affected.',
      },
    ];

    return {
      state,
      aqiExplained,
    };
  },
});
</script>

<style lang="scss" scoped>
  .air-quality-result{
    background-color: rgba(255, 255, 255, .15);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: .5rem;
    max-width: 96vw;
    width: 38rem;
    margin: auto;
    padding: 1rem 1.25rem;
    display: grid;
    row-gap: 2rem;
    column-gap: .5rem;
    grid-template-columns: 1fr 1fr;
    margin: 2rem 0;
  }

  .title{
    text-align: left;
    grid-row: 1;
    grid-column: 1 / 3;
    p {
      font-size: .85rem;
      text-transform: uppercase;
      line-height: 1rem;
    }
  }

  h1 {
    font-size: 4rem;
    line-height: 1;
    font-weight: 700;
    margin: 0;
    font-family: var(--font-title);
  }

  h2{
    font-weight: 700;
    font-family: var(--font-title);
    font-size: 1.25rem;
    line-height: 1.25rem;
    margin: 0 0 .5rem;
  }

  .pollution{
    h2{
      text-align: center;
    }
    .aqius{
      font-size: 4rem;
      line-height: 1.5;
      font-weight: bold;
      display: block;
    }

    a{
      display: block;
      font-size: .75rem;
    }
  }

  .weather {
    dl{
      display: grid;
      grid-template-columns: 1fr 2fr;
      column-gap: 1rem;
      row-gap: .5rem;
      align-items: baseline;
    }
    dt {
      font-size: 14px;
      font-weight: 700;
      text-align: right;
    }
    dd {
      grid-column: 2;
      text-align: left;
    }
  }

  .arrow{
    display: inline-block;
    position: relative;
    height: .9rem;
    width: .9rem;
  }

  @media screen and (max-width: 500px) {
    .air-quality-result{
      grid-template-columns: 1fr;
    }
    .title{
      grid-column: 1;
    }
  }
</style>
