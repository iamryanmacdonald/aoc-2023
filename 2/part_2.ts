import * as fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  const data_lines = data.split("\n");

  let power_sum = 0;

  data_lines.forEach((line) => {
    const [game_string, value_string] = line.split(": ");
    const [_, game_number_string] = game_string.split(" ");
    const game_number = parseInt(game_number_string);

    const colour_values: { [key: string]: number } = {};

    const game_sets = value_string.split("; ");

    game_sets.forEach((game_set) => {
      const amounts = game_set.split(", ");

      amounts.forEach((amount) => {
        const [value, colour] = amount.split(" ");
        colour_values[colour] = isNaN(colour_values[colour])
          ? parseInt(value)
          : Math.max(colour_values[colour], parseInt(value));
      });
    });

    console.log(game_number);
    console.log(game_sets);
    console.log(colour_values);

    const power =
      colour_values["blue"] * colour_values["green"] * colour_values["red"];
    power_sum += power;
  });

  console.log(power_sum);
});
