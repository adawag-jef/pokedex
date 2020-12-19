<template>
  <div>
    <div>Abilities</div>
    <span
      v-for="item in abilities"
      :key="item.ability.name"
      class="text-center"
    >
      <v-chip class="ma-2" color="orange" label>
        {{ item.ability.name }}
      </v-chip>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    abilities: Array
  }
};
</script>

<style></style>
