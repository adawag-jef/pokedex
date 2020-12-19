import _ from "lodash";
import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";

import mockData from "./mockData";

describe("store/pokemon", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let NuxtStore;
  let store;

  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`;
    NuxtStore = await import(storePath);
  });

  beforeEach(async () => {
    store = await NuxtStore.createStore();
  });

  describe("pokemon list", () => {
    let pokemons;
    const data = mockData.pokemons;

    beforeEach(() => {
      store.commit("pokemon/SET_POKEMONS", data);
      pokemons = store.getters["pokemon/pokemons"];
    });

    test("should be 6 pokemons total", () => {
      expect(pokemons.length).toBe(6);
    });
  });
});
