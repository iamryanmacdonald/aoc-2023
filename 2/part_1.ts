import * as fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  const data_lines = data.split("\n");

  let id_sum = 0;

  data_lines.forEach((line) => {
    const [game_string, value_string] = line.split(": ");
    const [_, game_number_string] = game_string.split(" ");
    const game_number = parseInt(game_number_string);

    const colour_values: { [key: string]: number } = {
      blue: 0,
      green: 0,
      red: 0,
    };

    const game_sets = value_string.split("; ");

    game_sets.forEach((game_set) => {
      const amounts = game_set.split(", ");

      amounts.forEach((amount) => {
        const [value, colour] = amount.split(" ");
        colour_values[colour] = Math.max(
          colour_values[colour],
          parseInt(value)
        );
      });
    });

    if (
      colour_values["blue"] <= 14 &&
      colour_values["green"] <= 13 &&
      colour_values["red"] <= 12
    )
      id_sum += game_number;
  });

  console.log(id_sum);
});
