<template>
  <v-dialog v-model="error.open" max-width="290">
    <v-card>
      <v-card-title class="headline">
        Error
      </v-card-title>

      <v-card-text>
        {{ error.message }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="close">
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: { error: Object },

  methods: {
    close() {
      this.$store.commit("pokemon/SET_ERROR", { open: false, message: "" });
    }
  }
};
</script>

<style></style>
