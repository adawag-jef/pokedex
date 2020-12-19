<template>
  <v-card max-width="400" class="mx-auto">
    <AppBar />
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="95vh"
    >
      <v-container style="min-height: 90vh">
        <v-row dense class="mt-12">
          <v-col cols="12" class="mt-6">
            <Search />
          </v-col>
          <template v-if="pokemons.length > 0">
            <v-col v-for="(item, i) in pokemons" :key="i" cols="12">
              <PokemonCard :pokemon="item" />
            </v-col>
          </template>
          <v-col v-else>
            <NotFound />
          </v-col>
        </v-row>

        <div v-intersect="onIntersect" v-if="listMode"></div>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import PokemonCard from "~/components/PokemonCard";
import NotFound from "~/components/Common/NotFound";
import Search from "~/components/Common/Search";
import AppBar from "~/components/Common/AppBar";

import { mapGetters } from "vuex";

export default {
  components: {
    PokemonCard,
    NotFound,
    AppBar
  },

  data: () => ({
    fab: true,
    limit: 6,
    isIntersecting: false
  }),

  computed: {
    ...mapGetters({
      pokemons: "pokemon/pokemons",
      next: "pokemon/next",
      listMode: "pokemon/listMode"
    })
  },

  methods: {
    onIntersect(entries, observer) {
      this.isIntersecting = entries[0].isIntersecting;
      let page = 0;
      if (this.isIntersecting) {
        if (this.next) {
          this.fetchPokemons(this.next);
        } else {
          this.fetchPokemons();
        }
      }
    },

    async fetchPokemons(nxt) {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}`;
      if (nxt) {
        url = nxt;
      }
      await this.$store.dispatch("pokemon/fetchPokemons", url);
    }
  }
};
</script>

<style>
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #3b4cca #ffde00;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #ffde00;
}

*::-webkit-scrollbar-thumb {
  background-color: #3b4cca;
  border-radius: 20px;
  border: 3px solid #ffde00;
}
</style>
