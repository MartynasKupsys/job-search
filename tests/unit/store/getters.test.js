import getters from "@/store/getters";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Google" },
        ],
      };
      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });

  // describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
  //   it("identifies jobs that are associated with the given organizationa", () => {
  //     const state = {
  //       jobs: [
  //         { organization: "Google" },
  //         { organization: "Amazon" },
  //         { organization: "Microsoft" },
  //       ],
  //       selectedOrganizations: ["Google", "Microsoft"],
  //     };

  //     const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
  //     expect(filteredJobs).toEqual([
  //       { organization: "Google" },
  //       { organization: "Microsoft" },
  //     ]);
  //   });

  //   describe("when user has not selected any organizations", () => {
  //     it("return all jobs", () => {
  //       const state = {
  //         jobs: [
  //           { organization: "Google" },
  //           { organization: "Amazon" },
  //           { organization: "Microsoft" },
  //         ],
  //         selectedOrganizations: [],
  //       };

  //       const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
  //       expect(filteredJobs).toEqual([
  //         { organization: "Google" },
  //         { organization: "Amazon" },
  //         { organization: "Microsoft" },
  //       ]);
  //     });
  //   });
  // });

  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from list of jobs", () => {
      const state = {
        jobs: [
          { jobType: "Full-time" },
          { jobType: "Temporary" },
          { jobType: "Full-time" },
        ],
      };
      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Full-time", "Temporary"]));
    });
  });

  // describe("FILTERED_JOBS_BY_JOB_TYPES", () => {
  //   it("identifies jobs that are associated with the given job types", () => {
  //     const state = {
  //       jobs: [
  //         { jobType: "Full-time" },
  //         { jobType: "Temporary" },
  //         { jobType: "Part-time" },
  //       ],
  //       selectedJobTypes: ["Full-time", "Part-time"],
  //     };

  //     const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);
  //     expect(filteredJobs).toEqual([
  //       { jobType: "Full-time" },
  //       { jobType: "Part-time" },
  //     ]);
  //   });

  //   describe("when user has not selected any job type", () => {
  //     it("return all jobs", () => {
  //       const state = {
  //         jobs: [
  //           { jobType: "Full-time" },
  //           { jobType: "Temporary" },
  //           { jobType: "Part-time" },
  //         ],
  //         selectedJobTypes: [],
  //       };

  //       const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);
  //       expect(filteredJobs).toEqual([
  //         { jobType: "Full-time" },
  //         { jobType: "Temporary" },
  //         { jobType: "Part-time" },
  //       ]);
  //     });
  //   });
  // });

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("when the user has not selected any organizations", () => {
      it("include job", () => {
        const state = {
          selectedOrganizations: [],
        };
        const job = { organization: "Google" };
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });

    it("identifies if job is associeated with given organizations", () => {
      const state = {
        selectedOrganizations: ["Google", "Microsoft"],
      };
      const job = { organization: "Google" };
      const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
      expect(includeJob).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("when the user has not selected any job types", () => {
      it("include job", () => {
        const state = {
          selectedJobTypes: [],
        };
        const job = { jobType: "Full-time" };
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });
    });

    it("identifies if job is associated with given job types", () => {
      const state = {
        selectedJobTypes: ["Full-time", "Part-time"],
      };
      const job = { jobType: "Part-time" };
      const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
      expect(includeJob).toBe(true);
    });
  });

  describe("FILTERED_JOBS", () => {
    it("filters jobs by organization and job type", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);

      const mockGetters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
      };

      const job = { id: 1, title: "Best job ever" };
      const state = {
        jobs: [job],
      };

      const result = getters.FILTERED_JOBS(state, mockGetters);
      expect(result).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
    });
  });
});
