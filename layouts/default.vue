<template>
  <v-app dark>
    <v-main class="bg">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Loader :loading="isLoading" />
    <AlertError :error="error" />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Loader from "~/components/Common/Loader";
import AlertError from "~/components/Common/AlertError";
export default {
  components: {
    Loader,
    AlertError
  },

  computed: {
    ...mapGetters({
      isLoading: "pokemon/isLoading",
      error: "pokemon/error"
    })
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style>
.bg {
  height: 100%;
  background-image: url("/pikachu2.gif"), url("/ground.png"), url("/bushes.png"),
    url("/background2_1.png");
  background-color: #006df0;
  background-repeat: no-repeat, repeat-x, repeat-x, repeat-x;
  background-position: left 80% bottom 10px, left 0px bottom 0px,
    left 0px bottom 24px, left 0px bottom 0px;
  -webkit-animation: back 15s infinite linear;
}

@-webkit-keyframes back {
  0% {
    background-position: left 80% bottom 10px, left 0px bottom 0px,
      left 0px bottom 24px, left 0px bottom 0px;
  }
  50% {
    background-position: left 85% bottom 10px, left -816px bottom 0px,
      left -508px bottom 24px, left -256px bottom 0px;
  }
  100% {
    background-position: left 80% bottom 10px, left -1632px bottom 0px,
      left -1016px bottom 24px, left -512px bottom 0px;
  }
}
</style>
