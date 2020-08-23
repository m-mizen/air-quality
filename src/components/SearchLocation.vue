<template>
  <form @submit.prevent="handleFormSubmit">
    <label>
      <span>Search for your location:</span>
      <input
        type="text"
        name="location"
        v-model="state.searchTerm"
        placeholder='Search'
      />
    </label>
    <button type="submit">Search</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import { getLocation } from '../services/geolocation.service';

export default defineComponent({
  emits: [
    'search-location',
  ],
  setup(props, { emit }) {
    const state = reactive({
      searchTerm: '',
    });

    const handleFormSubmit = (): void => {
      emit('search-location', state.searchTerm);
    };

    return {
      state,
      handleFormSubmit,
    };
  },
});
</script>
