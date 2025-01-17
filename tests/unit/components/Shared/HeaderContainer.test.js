import { mount } from "@vue/test-utils";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("Allows parent component to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h2>Some title</h2>",
      },
    });
    expect(wrapper.text()).toMatch("Some title");
  });

  it("Allows parent component to provide subtitle content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h3>Some subtitle</h3>",
      },
    });
    expect(wrapper.text()).toMatch("Some subtitle");
  });
});
