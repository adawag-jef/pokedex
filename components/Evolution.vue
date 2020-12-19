<template>
  <div>
    <p>Evolutions</p>
    <tree :tree-data="chain"></tree>
  </div>
</template>

<script>
import Tree from "./Tree";

export default {
  props: { chain: Object },
  components: {
    Tree
  }
};
</script>
