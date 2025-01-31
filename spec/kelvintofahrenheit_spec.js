import { convertKelvinToFahrenheit } from '../kelvintofahrenheit.js'

describe("A suite", function() {
    it("convert -300 kelvin", function() {
      let fahrenheit = convertKelvinToFahrenheit(300);
      expect(fahrenheit).toBeCloseTo(80.33, 2);
    });
  });
  
  