import { mount } from "@vue/test-utils";
import { nextTick } from "vue";

import Headline from "@/components/JobSearch/Headline.vue";

describe("Headline", () => {
  // describe("Jest playground", () => {
  //   it("tracks whether it has been called", () => {
  //     // const mockFunction = jest.fn();
  //     // mockFunction(1, 2, 5);
  //     // expect(mockFunction).toHaveBeenCalledWith(1, 2, 3);
  //     jest.useFakeTimers("legacy");
  //     console.log(clearInterval);
  //     jest.useRealTimers();
  //     console.log(clearInterval);
  //   });
  // });
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays introductory action verb", () => {
    // jest.useFakeTimers("legacy");
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
    // jest.useRealTimers();
  });

  it("changes action verb at a cosistent interval", () => {
    // jest.useFakeTimers("legacy");
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
    // jest.useRealTimers();
  });

  it("swaps action verb after first interval", async () => {
    // jest.useFakeTimers("legacy");
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers();
    await nextTick();
    console.log(wrapper.vm.action);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
    // jest.useRealTimers();
  });

  it("removes interval when component disappears", () => {
    // jest.useFakeTimers("legacy");
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
    // jest.useRealTimers();
  });
});
