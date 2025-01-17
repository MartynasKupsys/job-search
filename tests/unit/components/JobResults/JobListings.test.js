import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
// const axios = require("axios");
// import axios from "axios";
// "type": "module",
// jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
  // beforeEach(() => {
  //   axios.get.mockResolvedValue({ data: Array(15).fill({}) });
  // });

  // afterEach(() => {
  //   axios.get.mockReset();
  // });

  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const createStore = (config = {}) => ({
    // state: {
    //   jobs: Array(15).fill({}),
    // },
    getters: {
      // FILTERED_JOBS_BY_ORGANIZATIONS: [],
      FILTERED_JOBS: [],
    },
    dispatch: jest.fn(),
    ...config,
  });

  const createConfig = ($route, $store) => ({
    global: {
      mocks: {
        $route,
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  describe("when component mounts", () => {
    it("makes call to fetch jobs from API", () => {
      const $route = createRoute();
      const dispatch = jest.fn();
      const $store = createStore({ dispatch });
      shallowMount(JobListings, createConfig($route, $store));
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });

  // it("fetches jobs", () => {
  //   // axios.get.mockResolvedValue({ data: [] });
  //   const $route = createRoute();
  //   shallowMount(JobListings, createConfig($route));
  //   // const $route = {
  //   //   query: {
  //   //     page: "5",
  //   //   },
  //   // };

  //   // shallowMount(JobListings, {
  //   //   global: {
  //   //     mocks: {
  //   //       $route,
  //   //     },
  //   //   },
  //   // });
  //   expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  // });

  // it("creates a job listing for each received job", async () => {
  //   axios.get.mockResolvedValue({ data: Array(10).fill({}) });
  //   const wrapper = shallowMount(JobListings);
  //   await flushPromises();
  //   const jobListings = wrapper.findAll("[data-test='job-listing']");
  //   expect(jobListings).toHaveLength(10);
  // });
  it("creates a job listing for maximum of 10 jobs", async () => {
    // axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);
    // const numberOfJobsInStore = 15;
    const $store = createStore({
      getters: {
        // FILTERED_JOBS_BY_ORGANIZATIONS: Array(15).fill({}),
        FILTERED_JOBS: Array(15).fill({}),
      },
      // state: {
      //   jobs: Array(numberOfJobsInStore).fill({}),
      // },
    });

    const wrapper = shallowMount(JobListings, createConfig($route, $store));
    // const $route = {
    //   query: {
    //     page: "1",
    //   },
    // };

    // const wrapper = shallowMount(JobListings, {
    //   global: {
    //     mocks: {
    //       $route,
    //     },
    //   },
    // });
    // const wrapper = shallowMount(JobListings);
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });

  // describe("when query params exclude page number", () => {
  //   fit("displays page number 1", () => {
  //     const queryParams = { page: undefined };
  //     const $route = createRoute(queryParams);
  //     const wrapper = shallowMount(JobListings, createConfig($route));
  //     expect(wrapper.text()).toMatch("Page 1");
  //   });
  // });
  describe("when query params exclude page number", () => {
    it("displays page number 1", () => {
      // axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams);
      const $store = createStore();

      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("when query params include page number", () => {
    it("displays page number", () => {
      // axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: "3" };
      const $route = createRoute(queryParams);
      const $store = createStore();

      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 3");
    });
  });

  describe("when user is on first page of job results", () => {
    it("does not show link to previous page", () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const $store = createStore();

      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("shows link to next page", async () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      // const numberOfJobsInStore = 15;
      const $store = createStore({
        // state: {
        //   jobs: Array(numberOfJobsInStore).fill({}),
        // },
        getters: {
          // FILTERED_JOBS_BY_ORGANIZATIONS: Array(15).fill({}),
          FILTERED_JOBS: Array(15).fill({}),
        },
      });

      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });

  describe("when user is on last page of job results", () => {
    it("does not show link to next page", async () => {
      // axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      // const numberOfJobsInStore = 15;
      const $store = createStore({
        // state: {
        //   jobs: Array(numberOfJobsInStore).fill({}),
        // },
        getters: {
          // FILTERED_JOBS_BY_ORGANIZATIONS: Array(15).fill({}),
          FILTERED_JOBS: Array(15).fill({}),
        },
      });

      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });
    it("shows link to previous page", async () => {
      // axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      // const numberOfJobsInStore = 15;
      const $store = createStore({
        // state: {
        //   jobs: Array(numberOfJobsInStore).fill({}),
        // },
        getters: {
          // FILTERED_JOBS_BY_ORGANIZATIONS: Array(15).fill({}),
          FILTERED_JOBS: Array(15).fill({}),
        },
      });

      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });
  });
});
