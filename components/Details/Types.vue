<template>
  <div>
    <div>Types</div>
    <span v-for="type in types" :key="type.type.name" class="text-center">
      <v-chip class="ma-2 black--text" :color="setColor(type.type.name)">
        {{ type.type.name }}
      </v-chip>
    </span>
  </div>
</template>

<script>
export default {
  props: { types: Array },

  methods: {
    setColor(name) {
      const colors = this.$utilities.colorPallette();
      return colors[name];
    }
  }
};
</script>

<style></style>
