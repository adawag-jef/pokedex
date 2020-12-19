<template>
  <div>
    <ul>
      <NodeTree :node="treeData"></NodeTree>
    </ul>
  </div>
</template>

<script>
import NodeTree from "./NodeTree";

export default {
  props: {
    treeData: Object
  },
  components: {
    NodeTree
  }
};
</script>

<style></style>
