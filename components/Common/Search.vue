<template>
  <v-form @submit.prevent="handleSearch">
    <v-text-field
      color="primary"
      dense
      filled
      outlined
      label="Search"
      append-icon="mdi-magnify"
      :value="search"
      @change="handleChange"
    ></v-text-field>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      search: "pokemon/search"
    })
  },
  methods: {
    handleChange(val) {
      this.$store.commit("pokemon/SET_SEARCH", val);
    },

    handleSearch() {
      this.$store.dispatch("pokemon/searchPokemon", this.search);
    }
  }
};
</script>

<style></style>
