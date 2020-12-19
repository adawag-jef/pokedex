export const state = () => ({
  listMode: true,
  search: "",

  pokemons: [],
  next: "",
  isLoading: false,

  chain: {},
  description: "",

  error: { open: false, message: "" }
});

export const getters = {
  listMode(state) {
    return state.listMode;
  },
  isLoading(state) {
    return state.isLoading;
  },
  next(state) {
    return state.next;
  },
  pokemons(state) {
    return state.pokemons;
  },
  chain(state) {
    return state.chain;
  },
  error(state) {
    return state.error;
  },
  search(state) {
    return state.search;
  },
  description(state) {
    return state.description;
  }
};
export const mutations = {
  RESET_POKEMONS(state) {
    state.pokemons = [];
  },

  SET_POKEMONS(state, pokemon) {
    state.pokemons = [...state.pokemons, ...pokemon];
  },
  SET_NEXT(state, next) {
    state.next = next;
  },
  SET_IS_LOADING(state, val) {
    state.isLoading = val;
  },

  SET_CHAIN(state, chain) {
    state.chain = chain;
  },

  SET_ERROR(state, error) {
    state.error = error;
  },

  SET_SEARCH(state, val) {
    state.search = val;
  },

  SET_LIST_MODE(state, val) {
    state.listMode = val;
  },
  SET_DESCRIPTION(state, val) {
    state.description = val;
  }
};
export const actions = {
  async fetchPokemons(ctx, payload) {
    try {
      ctx.commit("SET_IS_LOADING", true);
      const { next, results } = await this.$axios.$get(payload);
      ctx.commit("SET_NEXT", next);

      let async_pokemons = results.map(p => {
        return this.$axios.$get(p.url);
      });

      Promise.all(async_pokemons).then(pokemon => {
        ctx.commit("SET_POKEMONS", pokemon);
        ctx.commit("SET_IS_LOADING", false);
      });
    } catch (error) {
      ctx.commit("RESET_POKEMONS");
      ctx.commit("SET_IS_LOADING", false);
      ctx.commit("SET_ERROR", { open: true, message: error.response.message });
    }
  },

  async fetchPokemonDetail(ctx, payload) {
    try {
      ctx.commit("SET_IS_LOADING", true);
      const { evolution_chain } = await this.$axios.$get(payload.species.url);
      const { chain } = await this.$axios.$get(evolution_chain.url);
      const res = await this.$axios.$get(
        `https://cors-anywhere.herokuapp.com/https://pokeapi.glitch.me/v1/pokemon/${payload.id}/`
      );

      ctx.commit("SET_DESCRIPTION", res[0].description);
      ctx.commit("SET_CHAIN", chain);
      ctx.commit("SET_IS_LOADING", false);
    } catch (error) {
      ctx.commit("SET_IS_LOADING", false);
      ctx.commit("SET_ERROR", { open: true, message: error.response.message });
    }
  },

  async searchPokemon(ctx, search) {
    ctx.commit("SET_IS_LOADING", true);
    if (search == "") {
      ctx.commit("RESET_POKEMONS");
      ctx.commit("SET_LIST_MODE", true);
      ctx.commit("SET_NEXT", "");
      return;
    }
    try {
      ctx.commit("SET_LIST_MODE", false);
      ctx.commit("RESET_POKEMONS");
      const pokemon = await this.$axios.$get(
        `https://pokeapi.co/api/v2/pokemon/${search}/`
      );
      ctx.commit("SET_POKEMONS", [pokemon]);
      ctx.commit("SET_IS_LOADING", false);
    } catch (error) {
      ctx.commit("RESET_POKEMONS");
      ctx.commit("SET_IS_LOADING", false);
    }
  }
};
