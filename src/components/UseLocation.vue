<template>
  <div>
    <button
      @click="handleClick"
      aria-describedby="location-description"
    >
      <span>Use my location</span>
      <img src="@/assets/target-focus.svg" alt="Target"/>
    </button>
    <div id="location-description">
      <p>Click above to view the pollution levels in your local area.</p>
      <p>
        For more accurate results please use this on a device with location services,
        otherwise it will estimate your location based on your IP.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { getLocation } from '../services/geolocation.service';

export default defineComponent({
  emits: [
    'user-location',
  ],
  setup(props, { emit }) {
    const handleClick = async (): Promise<void> => {
      const location = await getLocation();
      if (location) {
        emit('user-location', location);
      }
    };

    return {
      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped>
button{
  padding: 1rem 1.25rem;
  font-size: 1.5rem;
  border: none;
  display: flex;
  align-items: center;
  margin: 1rem auto 2rem;
  line-height: 1;
  cursor: pointer;
  gap: 1ch;
  text-transform: uppercase;
  font-family: var(--font-title);
  font-weight: 700;
  color: rgba(0, 0, 0, 0.85);
  img{
    height: 2rem;
    width: 2rem;
    display: block;
    opacity: 0.85;
  }
}

p{
  margin: 1rem 0;
}
</style>
