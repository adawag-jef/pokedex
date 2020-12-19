<template>
  <v-app dark>
    <NotFound />
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
import NotFound from "~/components/Common/NotFound";
export default {
  layout: "empty",
  components: {
    NotFound
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
