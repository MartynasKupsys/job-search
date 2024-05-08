<template>
  <section class="mb-16">
    <h1
      class="font-bold tracking-tighter text-8xl mb-14"
      data-test="action-phrase"
    >
      <span :class="actionClasses">{{ action }}</span
      ><br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Minion Corp.</h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";

export default {
  name: "Headline",
  data() {
    return {
      action: "Build", // {build: true}
      interval: null,
    };
  },

  computed: {
    actionClasses() {
      return {
        // build: this.action === "Build",
        // create: this.action === "Create",
        // design: this.action === "Design",
        // code: this.action === "Code",
        [this.action.toLocaleLowerCase()]: true,
      };
    },
  },

  created() {
    // console.log("Hey, I've been created. My data exists! Look: ", this.sample);
    this.changeTitle();
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },

  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
        // const currentActionIndex = actions.indexOf(this.action); // 3
        // const nextActionIndex = (currentActionIndex + 1) % 4; // 4 % 4 0
        // const nextAction = actions[nextActionIndex];
        // this.action = nextAction;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
