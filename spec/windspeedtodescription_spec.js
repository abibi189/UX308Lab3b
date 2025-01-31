import { convertWindSpeedToDescription } from '../windspeedtodescription.js';

describe("A suite", function() {
    it("should return 'Calm Breeze' for 5 knots", function() {
        let wSpeed = convertWindSpeedToDescription(5);
        expect(wSpeed).toBe("Calm Breeze");
    });

    it("should return 'Moderate Breeze' for 15 knots", function() {
        let wSpeed = convertWindSpeedToDescription(15);
        expect(wSpeed).toBe("Moderate Breeze");
    });

    it("should return 'Severe Gale' for 50 knots", function() {
        let wSpeed = convertWindSpeedToDescription(50); 
        expect(wSpeed).toBe("Severe Gale");
    });
});