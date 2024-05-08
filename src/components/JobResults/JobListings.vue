<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Previous</router-link
          >

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import axios from "axios";
// import { mapState, mapActions } from "vuex";
import { mapActions, mapGetters } from "vuex";
import { FETCH_JOBS, FILTERED_JOBS } from "@/store/constants";

import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },

  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },

  computed: {
    ...mapGetters([FILTERED_JOBS]),

    currentPage() {
      const pageString = this.$route.query.page || "1";
      // const pageNumber = Number.parseInt(pageString);
      return Number.parseInt(pageString);
    },

    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },

    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    },

    displayedJobs() {
      const pageNumber = this.currentPage;
      // const pageString = this.$route.query.page || "1";
      // const pageNumber = Number.parseInt(pageString);
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
    },

    // currentPage() {
    //   const pageString = this.$route.query.page || "1";
    //   // const pageNumber = Number.parseInt(pageString);
    //   return Number.parseInt(pageString);
    // },

    // previousPage() {
    //   const previousPage = this.currentPage - 1;
    //   const firstPage = 1;
    //   return previousPage >= firstPage ? previousPage : undefined;
    // },

    // nextPage() {
    //   const nextPage = this.currentPage + 1;
    //   const maxPage = Math.ceil(this.jobs.length / 10);
    //   return nextPage <= maxPage ? nextPage : undefined;
    // },

    // displayedJobs() {
    //   const pageNumber = this.currentPage;
    //   // const pageString = this.$route.query.page || "1";
    //   // const pageNumber = Number.parseInt(pageString);
    //   const firstJobIndex = (pageNumber - 1) * 10;
    //   const lastJobIndex = pageNumber * 10;
    //   return this.jobs.slice(firstJobIndex, lastJobIndex);
    // },

    // ...mapState(["jobs"]),
  },

  async mounted() {
    // const baseUrl = process.env.VUE_APP_API_URL;
    // const response = await axios.get(`${baseUrl}/jobs`);
    // this.jobs = response.data;
    // // axios.get("http://localhost:3000/jobs").then((response) => {
    // //   this.jobs = response.data;
    // // });
    // /**
    //  * THREE ENVIRONMENTS:
    //  *  - development (HMR) -- localhost:3000/jobs
    //  *  - production -- api.mycompany.com/jobs
    //  *  - test
    //  */
    // this.$store.dispatch(FETCH_JOBS);
    this.FETCH_JOBS();
  },

  methods: {
    ...mapActions([FETCH_JOBS]),
  },
};
</script>
