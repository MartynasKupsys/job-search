<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filters-sidebar />
    <job-listings />
    <!-- <h1 class="text-6xl font-bold">Job Results View</h1>
    <button @click="goToHome">Go to Home Page</button> -->
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },

  // computed: {
  //   experiment() {
  //     console.log(this.$router);
  //     return "Irrelevant";
  //   },
  // },

  methods: {
    goToHome() {
      // this.$router.push("/");
      // this.$router.push({ path: "/" });
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
