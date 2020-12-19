<template>
  <v-avatar class="mx-a" size="125" tile>
    <v-img :src="pokemonImage" lazy-src="/unknown.jpg"></v-img>
  </v-avatar>
</template>

<script>
export default {
  props: {
    pokemonImage: String
  }
};
</script>

<style></style>
