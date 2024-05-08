import { mount } from "@vue/test-utils";

import TextInput from "@/components/Shared/TextInput.vue";

describe("TextInput", () => {
  it("communicates that user enterred character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    // console.log(wrapper.emitted());
    input.setValue("N");
    input.setValue("NY");
    input.setValue("NYC");
    // console.log(wrapper.emitted());
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["N"], ["NY"], ["NYC"]]);
  });
});
