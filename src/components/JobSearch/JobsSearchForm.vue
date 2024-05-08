<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="" class="absolute left-0 -top-10">Role</label>
        <text-input
          v-model="role"
          placeholder="Software engineer"
          data-test="role-input"
        />
        <!-- <input
          type="text"
          :value="role"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
          @input="updateRole($event, true)"
        /> -->
        <!-- <text-input placeholder="Software engineer" @handleInput="updateRole" /> -->
        <!-- <text-input
          placeholder="Software engineer"
          :value="role"
          @handleInput="role = $event"
        /> -->
        <!-- <input
          v-model="role"
          type="text"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
        /> -->
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label for="" class="absolute left-0 -top-10">Where?</label>
        <text-input
          v-model="location"
          placeholder="Los Angeles"
          data-test="location-input"
        />
        <!-- <input
          type="text"
          :value="location"
          placeholder="Los Angeles"
          class="w-full text-lg font-normal focus:outline-none"
          @input="location = $event.target.value"
        /> -->
        <!-- <text-input placeholder="Los Angeles" @handleInput="updateLocation" /> -->
        <!-- <text-input
          placeholder="Los Angeles"
          :value="location"
          @handleInput="location = $event"
        /> -->
        <!-- <input
          v-model="location"
          type="text"
          placeholder="Los Angeles"
          class="w-full text-lg font-normal focus:outline-none"
        /> -->
      </div>
    </div>

    <action-button
      text="Search"
      type="secondary"
      class="rounded-r-3xl"
      data-test="form-submit-button"
    />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default {
  name: "JobsSearchForm",
  components: {
    ActionButton,
    TextInput,
  },

  data() {
    return {
      role: "",
      location: "",
    };
  },

  methods: {
    searchForJobs() {
      this.$router.push({
        name: "JobResults",
        query: {
          role: this.role,
          location: this.location,
        },
      });
    },
  },

  // methods: {
  //   updateRole(payload) {
  //     this.role = payload;
  //   },
  //   updateLocation(payload) {
  //     this.location = payload;
  //   },
  // },

  // methods: {
  //   updateRole($event, bool) {
  //     this.role = $event.target.value;
  //     console.log(bool);
  //   },
  //   updateLocation(event) {
  //     this.location = event.target.value;
  //   },
  // },
};
</script>
