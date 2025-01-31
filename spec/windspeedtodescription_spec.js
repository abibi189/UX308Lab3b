import { convertWindSpeedToDescription } from '../windspeedtodescription.js'

describe("A suite", function() {
    it("should return 'Calm Breeze' for 5 knots", function() {
      expect(convertWindSpeedToDescription(5)).toBe("Calm Breeze");
    });
    it("should return 'Moderate Breeze' for 15 knots", function() {
      expect(convertWindSpeedToDescription(15)).toBe("Moderate Breeze");
    });
  it("should return 'Severe Gale' for 50 knots", function() {
    expect(convertWindSpeedToDescription(50)).toBe("Severe Gale");
  });