expression = sum / value

sum = left:value _ "+" _ right:value { return { left: left, right: right } }

value = real / ket

ket = "|" angle:real ">" { return { angle: angle } }

real = variable / pi / float / integer

pi = "pi" { return { value: "pi" }; }

float = [0-9]+ "." [0-9]+ { return { value: parseFloat(text()) }; }

integer = [0-9]+ { return { value: parseInt(text()) }; }

variable = theta / [xyz] { return { identifier: text() } }

theta = "theta" { return { identifier: "theta" } }

_ "whitespace" = [ \t\n\r]*
