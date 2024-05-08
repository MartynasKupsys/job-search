import { mount } from "@vue/test-utils";

import SubNav from "@/components/Navigation/SubNav";

describe("SubNav", () => {
  const createConfig = (routeName, $store = {}) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
        $store,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("when user is on job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";
      // const $route = {
      //   name: "JobResults",
      // };
      const $store = {
        getters: {
          // FILTER_JOBS_BY_ORGANIZATIONS: [{ id: 1 }, { id: 2 }],
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      };
      const wrapper = mount(SubNav, createConfig(routeName, $store));
      // const wrapper = mount(SubNav, {
      // global: {
      //   mocks: {
      //     $route,
      //   },
      //   stubs: {
      //     FontAwesomeIcon: true,
      //   },
      // },
      // data() {
      //   return {
      //     onJobResultPage: true,
      //   };
      // },
      // });
      const jobCount = wrapper.find("[data-test='job-count']");
      // expect(jobCount.exists()).toBe(true);
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("when user is not on job page", () => {
    it("does NOT display job count", () => {
      const routeName = "Home";
      // const $route = {
      //   name: "Home",
      // };
      const wrapper = mount(SubNav, createConfig(routeName));
      // const wrapper = mount(SubNav, {
      // global: {
      //   mocks: {
      //     $route,
      //   },
      //   stubs: {
      //     FontAwesomeIcon: true,
      //   },
      // },
      // data() {
      //   return {
      //     onJobResultPage: false,
      //   };
      // },
      // });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
