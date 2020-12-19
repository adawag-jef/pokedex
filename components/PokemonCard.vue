<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="380px">
      <template v-slot:activator="{ on, attrs }">
        <v-col cols="12" style="cursor: pointer">
          <v-card :color="colorType" dark @click="setPokemonDetail(pokemon)">
            <div
              class="d-flex flex-no-wrap justify-space-between"
              style="width: 100%"
            >
              <div>
                <v-card-title
                  class="headline grey--text"
                  v-text="pokemon.name"
                ></v-card-title>
                <v-card-actions> </v-card-actions>
              </div>
              <PokemonAvatar :pokemonImage="pokemonImage" />
            </div>
          </v-card>
        </v-col>
      </template>
      <v-card>
        <v-card-title>{{ pokemon.name }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 400px;">
          <v-row justify="center">
            <v-col cols="12">
              <PokemonAvatar :pokemonImage="pokemonImage" />
              <p>{{ description }}</p>
            </v-col>
          </v-row>
          <v-row justify="space-around">
            <v-col cols="12">
              <Evolution :chain="chain" />
            </v-col>
            <v-col cols="12">
              <Stats :stats="pokemon.stats" />
            </v-col>
            <v-col cols="12">
              <Types :types="pokemon.types" />
            </v-col>
            <v-col cols="12">
              <Abilities :abilities="pokemon.abilities" />
            </v-col>
            <v-col cols="12">
              <Moves :moves="pokemon.moves" />
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="text-center">
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import Evolution from "~/components/Evolution";
import PokemonAvatar from "~/components/PokemonAvatar";
import Stats from "~/components/Details/Stats";
import Types from "~/components/Details/Types";
import Abilities from "~/components/Details/Abilities";
import Moves from "~/components/Details/Moves";

import { mapGetters } from "vuex";

export default {
  props: {
    pokemon: { type: Object }
  },
  components: {
    Evolution,
    PokemonAvatar,
    Stats,
    Types,
    Abilities,
    Moves
  },
  data() {
    return {
      dialog: false,
      stats: [],
      types: [],
      ablities: [],
      moves: []
    };
  },

  computed: {
    ...mapGetters({
      chain: "pokemon/chain",
      description: "pokemon/description",
      isLoading: "pokemon/isLoading"
    }),
    colorType() {
      const colors = this.$utilities.colorPallette();
      const type = this.pokemon.types[0].type.name;
      return colors[type];
    },
    pokemonImage() {
      return `https://www.serebii.net/pokemongo/pokemon/${this.$utilities.padString(
        this.pokemon.id,
        3
      )}.png`;
    }
  },

  methods: {
    async setPokemonDetail(pokemon) {
      await this.$store.dispatch("pokemon/fetchPokemonDetail", pokemon);

      this.dialog = true;
    }
  }
};
</script>

<style></style>
