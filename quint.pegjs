value = pi / float / integer

pi = "pi" { return { value: "pi", rational: false }; }

float = [0-9]+ "." [0-9]+ { return { value: parseFloat(text()), rational: true }; }

integer = [0-9]+ { return { value: parseInt(text()), rational: true }; }

_ "whitespace" = [ \t\n\r]*
