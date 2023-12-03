import * as fs from "fs";

const word_map: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  const data_lines = data.split("\n");

  let calibration_value = 0;

  data_lines.forEach((line) => {
    let calibration_string = "";

    outer_loop: for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const char_int = parseInt(char);

      if (!isNaN(char_int)) {
        calibration_string += char;
        break;
      } else {
        for (let j = i; j < line.length; j++) {
          const check_string = line.slice(i, j + 1);
          const check_value = word_map[check_string];

          if (!isNaN(check_value)) {
            calibration_string += check_value.toString();
            break outer_loop;
          }
        }
      }
    }

    outer_loop: for (let i = line.length - 1; i >= 0; i--) {
      const char = line[i];
      const char_int = parseInt(char);

      if (!isNaN(char_int)) {
        calibration_string += char;
        break;
      } else {
        for (let j = i; j >= 0; j--) {
          const check_string = line.slice(j, i + 1);
          const check_value = word_map[check_string];

          if (!isNaN(check_value)) {
            calibration_string += check_value.toString();
            break outer_loop;
          }
        }
      }
    }

    calibration_value += parseInt(calibration_string);
  });

  console.log(calibration_value);
});
