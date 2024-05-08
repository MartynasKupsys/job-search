<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <!-- <a :href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a> -->
        <!-- <router-link to="/" class="flex items-center h-full text-xl"
          >Minion Careers</router-link
        > -->
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >Minion Careers</router-link
        >

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <!-- <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a> -->
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign in"
            type="primary"
            data-test="login-button"
            @click="LOGIN_USER()"
          />
          <!-- LOGIN_USER su () del testavimo -->
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";

import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";

import { LOGIN_USER } from "@/store/constants";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },

  data() {
    return {
      // company: "Minion Careers",
      // url: "https://careers.google.com",
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/" },
        { text: "Life at Minion", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
      // isLoggedIn: false,
    };
  },

  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn;
    // },
    // ...mapState({
    //   isLoggedIn: (state) => state.isLoggedIn,
    //   // isLoggedIn: "isLoggedIn",
    // }),
    // arba
    ...mapState(["isLoggedIn"]), // access the store state
  },

  methods: {
    // LOGIN_USER() {
    //   // this.isLoggedIn = !this.isLoggedIn;
    //   this.$store.commit(LOGIN_USER);
    // },
    // ...mapMutations([LOGIN_USER]), // this.LOGIN_USER
    ...mapMutations({
      LOGIN_USER: LOGIN_USER,
    }),
  },
};
</script>
