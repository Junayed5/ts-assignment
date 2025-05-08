// Problem 1

function formatString(input: string, toUpper?: boolean) {
  if (toUpper || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

const result = formatString("bangladesh",false);
