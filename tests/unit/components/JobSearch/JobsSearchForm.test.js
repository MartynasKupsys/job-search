import { mount } from "@vue/test-utils";

import JobsSearchForm from "@/components/JobSearch/JobsSearchForm.vue";

describe("JobSearchForm", () => {
  describe("when the user submits form", () => {
    it("directs user to job results page with user's search parameters", async () => {
      const push = jest.fn();
      const $router = { push };

      const wrapper = mount(JobsSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue("Vue Developer");

      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("Dallas");

      const submitButton = wrapper.find("[data-test='form-submit-button']");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue Developer",
          location: "Dallas",
        },
      });
    });
  });
});
