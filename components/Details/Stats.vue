<template>
  <div>
    <div>Statistics</div>
    <br />
    <div v-for="stat in stats" :key="stat.stat.name">
      <div>{{ stat.stat.name }}</div>
      <v-progress-linear
        v-model="stat.base_stat"
        :color="setColor(stat.stat.name)"
        height="15"
      >
        <strong>{{ stat.base_stat }}</strong>
      </v-progress-linear>
      <br />
    </div>
  </div>
</template>

<script>
const colors = {
  hp: "#16c103",
  attack: "#c10316",
  defense: "#0369c1",
  "special-attack": "#9803c1",
  "special-defense": "#03c1bb",
  speed: "#eab412"
};
export default {
  props: { stats: Array },

  methods: {
    setColor(name) {
      return colors[name];
    }
  }
};
</script>

<style></style>
