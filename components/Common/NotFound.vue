<template>
  <div>
    <img
      :src="isLoading ? '/loading.svg' : '/no_data.svg'"
      alt="not found"
      class="not-found"
    />
    <div class="headline text-center mt-12">
      {{ isLoading ? "Catching Pokemon" : "No Pokemon Found" }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isLoading: "pokemon/isLoading"
    })
  }
};
</script>

<style>
.not-found {
  max-width: 100%;
}
</style>
