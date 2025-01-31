import { convertMetersToYards } from '../meterstoyards.js'

describe("A suite", function() {
    it("converts 3 meters", function() {
      let yards = convertMetersToYards(3);
      expect(yards).toBe(3.28083);
    });
  });
  
  