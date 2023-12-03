import * as fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  const data_lines = data.split("\n");

  let calibration_value = 0;

  data_lines.forEach((line) => {
    let calibration_string = "";

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const char_int = parseInt(char);

      if (!isNaN(char_int)) {
        calibration_string += char;
        break;
      }
    }

    for (let i = line.length - 1; i >= 0; i--) {
      const char = line[i];
      const char_int = parseInt(char);

      if (!isNaN(char_int)) {
        calibration_string += char;
        break;
      }
    }

    calibration_value += parseInt(calibration_string);
  });

  console.log(calibration_value);
});
