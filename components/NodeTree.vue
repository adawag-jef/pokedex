<template>
  <li>
    <span>{{ node.species.name }}</span>
    <template v-if="node.evolves_to && node.evolves_to.length">
      <node
        v-for="(child, index) in node.evolves_to"
        :node="child"
        :key="index"
      ></node>
    </template>
  </li>
</template>

<script>
export default {
  name: "node",
  props: {
    node: Object
  }
};
</script>
