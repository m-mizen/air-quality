<template>
  <div class="home">
    <div class="intro" v-if="!state.airQuality">
      <h1>My Air Quality</h1>
      <use-location @user-location="handleUserLocation" />
    </div>
    <air-quality-result v-else :air-quality="state.airQuality"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

// Components
import UseLocation from '@/components/UseLocation.vue';
import AirQualityResult from '@/components/AirQualityResult.vue';

// Services
import { airQualityByLatLong, airQualityByIP } from '@/services/air-quality.service';

// Models
import { AirVisualData } from '@/models/air-visual.model';

interface ComponentState {
  airQuality?: AirVisualData;
}

export default defineComponent({
  components: {
    UseLocation,
    AirQualityResult,
  },
  setup() {
    const state = reactive<ComponentState>({
      airQuality: undefined,
    });

    const handleUserLocation = async (coords: Coordinates) => {
      let data: AirVisualData | null;

      if (!coords) {
        data = await airQualityByIP();
      } else {
        const { latitude, longitude } = coords;
        data = await airQualityByLatLong(latitude, longitude);
      }
      if (data) {
        state.airQuality = data;
      }
    };

    return {
      state,
      handleUserLocation,
    };
  },
});
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(131,58,180);
  background: linear-gradient(
    167deg,
    rgba(208,176,230,1) 0%,
    rgba(226,171,171,1) 50%,
    rgba(238,196,136,1) 100%
  );
  font-size: 1.25rem;
  text-align: center;
}

h1{
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: 700;
  font-family: var(--font-title);
  text-transform: capitalize;
}

.intro {
  max-width: 96vw;
  padding: 0 1rem;
  margin-bottom: 4rem;
  width: 50rem;
}
</style>
