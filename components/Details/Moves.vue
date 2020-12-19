<template>
  <div>
    <div>Moves</div>
    <br />
    <ul>
      <li v-for="(item, index) in moves" :key="index">
        {{ item.move.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    moves: Array
  }
};
</script>

<style></style>
