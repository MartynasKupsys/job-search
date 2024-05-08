import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("Displays company name", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    expect(wrapper.text()).toMatch("Minion Careers");
  });

  it("displays menu items for navigation", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Minion",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const $store = {
        state: {
          isLoggedIn: false,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });

    it("issues call to Vuex to login user", async () => {
      const commit = jest.fn();
      const $store = {
        state: {
          isLoggedIn: false,
        },
        commit,
      };

      $store.commit = commit;
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");

      await loginButton.trigger("click");

      expect(commit).toHaveBeenCalledWith("LOGIN_USER");
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile picture", () => {
      const $store = {
        state: {
          isLoggedIn: true,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));

      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
    it("displays subnavigation menu with additional information", () => {
      const $store = {
        state: {
          isLoggedIn: true,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));

      const subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});

/////// OLD VERSION /////////////

// // import { mount } from "@vue/test-utils";
// import { shallowMount, RouterLinkStub } from "@vue/test-utils";
// // import { createStore } from "vuex";
// import MainNav from "@/components/Navigation/MainNav.vue";

// describe("MainNav", () => {
//   // let wrapper;
//   const createConfig = ($store) => ({
//     global: {
//       // plugins: [store],
//       mocks: {
//         $store,
//       },
//       stubs: {
//         "router-link": RouterLinkStub,
//       },
//     },
//   });

//   // beforeEach(() => {
//   //   wrapper = shallowMount(MainNav, {});
//   // });

//   // beforeEach(() => {
//   //   wrapper = shallowMount(MainNav, {
//   //     global: {
//   //       stubs: {
//   //         "router-link": RouterLinkStub,
//   //       },
//   //     },
//   //   });
//   // });

//   it("Displays company name", () => {
//     // const store = createStore();
//     // const wrapper = shallowMount(MainNav, {
//     //   global: {
//     //     stubs: {
//     //       "router-link": RouterLinkStub,
//     //     },
//     //   },
//     // });
//     const $store = {
//       state: {
//         isLoggedIn: false,
//       },
//     };
//     const wrapper = shallowMount(MainNav, createConfig($store));
//     expect(wrapper.text()).toMatch("Minion Careers");
//   });

//   it("displays menu items for navigation", () => {
//     // const wrapper = shallowMount(MainNav, {
//     //   global: {
//     //     stubs: {
//     //       "router-link": RouterLinkStub,
//     //     },
//     //   },
//     // });
//     // const store = createStore();
//     const $store = {
//       state: {
//         isLoggedIn: false,
//       },
//     };
//     const wrapper = shallowMount(MainNav, createConfig($store));
//     const navigationMenuItems = wrapper.findAll(
//       "[data-test='main-nav-list-item']"
//     );
//     const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
//     expect(navigationMenuTexts).toEqual([
//       "Teams",
//       "Locations",
//       "Life at Minion",
//       "How we hire",
//       "Students",
//       "Jobs",
//     ]);
//   });

//   describe("when user is logged out", () => {
//     it("prompts user to sign in", () => {
//       // const wrapper = shallowMount(MainNav, {
//       //   global: {
//       //     stubs: {
//       //       "router-link": RouterLinkStub,
//       //     },
//       //   },
//       // });
//       // const store = createStore();
//       const $store = {
//         state: {
//           isLoggedIn: false,
//         },
//       };
//       const wrapper = shallowMount(MainNav, createConfig($store));
//       const loginButton = wrapper.find("[data-test='login-button']");
//       expect(loginButton.exists()).toBe(true);
//     });

//     it("issues call to Vuex to login user", async () => {
//       // const store = createStore();
//       const commit = jest.fn();
//       const $store = {
//         state: {
//           isLoggedIn: false,
//         },
//         commit,
//       };

//       $store.commit = commit;
//       const wrapper = shallowMount(MainNav, createConfig($store));
//       const loginButton = wrapper.find("[data-test='login-button']");

//       await loginButton.trigger("click");

//       expect(commit).toHaveBeenCalledWith("LOGIN_USER");
//     });
//   });

//   describe("when user is logged in", () => {
//     it("displays user profile picture", () => {
//       // const wrapper = shallowMount(MainNav, {
//       //   global: {
//       //     stubs: {
//       //       "router-link": RouterLinkStub,
//       //     },
//       //   },
//       // });
//       // const store = createStore({
//       //   state() {
//       //     return {
//       //       isLoggedIn: true,
//       //     };
//       //   },
//       // });
//       const $store = {
//         state: {
//           isLoggedIn: true,
//         },
//       };
//       const wrapper = shallowMount(MainNav, createConfig($store));
//       // let profileImage = wrapper.find("[data-test='profile-image']");
//       // expect(profileImage.exists()).toBe(false);

//       // const loginButton = wrapper.find("[data-test='login-button']");
//       // await loginButton.trigger("click"); // trigger is asychronous method

//       const profileImage = wrapper.find("[data-test='profile-image']");
//       expect(profileImage.exists()).toBe(true);
//     });
//     it("displays subnavigation menu with additional information", () => {
//       // const wrapper = shallowMount(MainNav, {
//       //   global: {
//       //     stubs: {
//       //       "router-link": RouterLinkStub,
//       //     },
//       //   },
//       // });
//       // const store = createStore({
//       //   state() {
//       //     return {
//       //       isLoggedIn: true,
//       //     };
//       //   },
//       // });
//       const $store = {
//         state: {
//           isLoggedIn: true,
//         },
//       };
//       const wrapper = shallowMount(MainNav, createConfig($store));
//       // let subnav = wrapper.find("[data-test='subnav']");
//       // expect(subnav.exists()).toBe(false);

//       // const loginButton = wrapper.find("[data-test='login-button']");
//       // await loginButton.trigger("click"); // trigger is asychronous method

//       const subnav = wrapper.find("[data-test='subnav']");
//       expect(subnav.exists()).toBe(true);
//     });
//   });

//   // describe("when user is logged out", () => {

//   // });
// });
