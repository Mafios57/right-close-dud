// Right, Close, Dud questions, version 3: Advanced Math (science track, ages 16-19). See README.md for the field names.

// ---------- Level 1 ----------
Q({ id: "x9", s: "Advanced Math", t: "science", lv: { "16-19": 1 }, th: "Puzzles", tp: "Algebra: expanding brackets",
  q: "Expand 3(x + 4).", key: null,
  r: "3x + 12",
  c: [["3x + 4", "Multiplying only the first term", "The 3 multiplies everything in the bracket, so 3 × 4 = 12 too."]],
  d: ["34x", "There is no 34 in the question."],
  h: "The number outside multiplies every term inside.",
  st: ["3 × x = 3x.", "3 × 4 = 12.", "So 3(x + 4) = 3x + 12."],
  tip: "Multiply every term inside the bracket." });

Q({ id: "x10", s: "Advanced Math", t: "science", lv: { "16-19": 1 }, th: "Tech", tp: "Algebra: index laws",
  q: "Simplify x³ × x⁴.", key: null,
  r: "x⁷",
  c: [["x¹²", "Multiplying the powers instead of adding them", "x³ × x⁴ is x × x × x × x × x × x × x. That is 7 x's, not 12."]],
  d: ["7", "The answer must still have x in it."],
  h: "Write out how many x's are multiplied together.",
  st: ["x³ is three x's multiplied. x⁴ is four.", "Together that is 3 + 4 = 7 x's.", "So x³ × x⁴ = x⁷."],
  tip: "Multiplying the same base: add the powers." });

Q({ id: "x11", s: "Advanced Math", t: "science", lv: { "16-19": 1 }, th: "Puzzles", tp: "Algebra: linear equations",
  q: "Solve 5x - 3 = 2x + 9.", key: null,
  r: "x = 4",
  c: [["x = 2", "Moving a term without changing its sign", "Moving -3 to the other side makes it +3: 3x = 12."]],
  d: ["x = 4 cm", "This equation has no units."],
  h: "Get the x terms on one side and the numbers on the other.",
  st: ["Take 2x from both sides: 3x - 3 = 9.", "Add 3 to both sides: 3x = 12.", "Divide by 3: x = 4."],
  tip: "Do the same thing to both sides, and check your answer." });

Q({ id: "x12", s: "Advanced Math", t: "science", lv: { "16-19": 1 }, th: "Sports", tp: "Algebra: straight lines",
  q: "What is the gradient of the line y = 3x - 5?", key: "gradient",
  r: "3",
  c: [["-5", "Mixing up the gradient and the y-intercept", "-5 is where the line crosses the y-axis. The gradient is the number with x."]],
  d: ["y", "The gradient is a number, not a letter."],
  h: "In y = mx + c, which letter is the gradient?",
  st: ["A straight line can be written y = mx + c.", "m is the gradient. c is the y-intercept.", "Here m = 3."],
  tip: "y = mx + c: m is the slope, c is where it crosses the y-axis." });

Q({ id: "x13", s: "Advanced Math", t: "science", lv: { "16-19": 1 }, th: "Puzzles", tp: "Algebra: factorising",
  q: "Factorise 6x + 9.", key: null,
  r: "3(2x + 3)",
  c: [["3(2x + 9)", "Dividing only one term", "Both terms must be divided by 3: 9 ÷ 3 = 3."],
      ["15x", "Adding unlike terms", "6x and 9 are different kinds of term. You cannot add them."]],
  d: ["A circle", "The answer is an expression, not a shape."],
  h: "Find the biggest number that divides 6 and 9.",
  st: ["3 divides both 6 and 9.", "6x ÷ 3 = 2x and 9 ÷ 3 = 3.", "So 6x + 9 = 3(2x + 3)."],
  tip: "Expand your answer to check it." });

Q({ id: "x14", s: "Advanced Math", t: "science", lv: { "16-19": 1 }, th: "Tech", tp: "Algebra: negative powers",
  q: "What is 2⁻³?", key: null,
  r: "1/8",
  c: [["-8", "Thinking a negative power makes a negative number", "A negative power means 1 divided by. It does not make the answer negative."],
      ["-6", "Multiplying the base by the power", "2⁻³ is not 2 × -3."]],
  d: ["2 cm", "This question has no units."],
  h: "A negative power means \"one over\".",
  st: ["2⁻³ = 1 ÷ 2³.", "2³ = 8.", "So 2⁻³ = 1/8."],
  tip: "x⁻ⁿ = 1/xⁿ." });

Q({ id: "x15", s: "Advanced Math", t: "science", lv: { "16-19": 1 }, th: "Puzzles", tp: "Algebra: fractional powers",
  q: "What is 16 to the power 1/2?", key: null,
  r: "4",
  c: [["8", "Halving instead of taking the square root", "A power of 1/2 means square root, not divide by 2."],
      ["1/16", "Treating a fraction power like a negative power", "Only negative powers mean \"one over\"."]],
  d: ["16 kg", "This question has no units."],
  h: "A power of 1/2 is the same as a square root.",
  st: ["Power 1/2 means square root.", "√16 = 4.", "So 16 to the power 1/2 is 4."],
  tip: "Power 1/2: square root. Power 1/3: cube root." });

Q({ id: "x16", s: "Advanced Math", t: "science", lv: { "16-19": 1 }, th: "Puzzles", tp: "Algebra: simultaneous equations",
  q: "x + y = 10 and x - y = 2. Find x.", key: null,
  r: "6",
  c: [["4", "Finding the wrong unknown", "4 is y. Adding the equations gives 2x = 12, so x = 6."]],
  d: ["10 cm", "This question has no units."],
  h: "What happens to y if you add the two equations?",
  st: ["Add the equations: (x + y) + (x - y) = 10 + 2.", "The y's cancel: 2x = 12.", "x = 6. Then y = 4."],
  tip: "Check which letter the question asks for." });

Q({ id: "x17", s: "Advanced Math", t: "science", lv: { "16-19": 1 }, th: "Games", tp: "Algebra: functions",
  q: "f(x) = 2x + 1. Find f(3).", key: null,
  r: "7",
  c: [["6", "Leaving out part of the rule", "2 × 3 = 6, but the rule also says + 1."]],
  d: ["f", "f is the name of the function, not a value."],
  h: "Put 3 in place of x.",
  st: ["f(3) means put x = 3 into the rule.", "2 × 3 + 1.", "6 + 1 = 7."],
  tip: "f(3) means replace every x with 3." });

Q({ id: "x18", s: "Advanced Math", t: "science", lv: { "16-19": 1 }, th: "Tech", tp: "Number: surds",
  q: "Simplify √50.", key: null,
  r: "5√2",
  c: [["25√2", "Taking out the square, not its root", "√50 = √25 × √2. √25 is 5, not 25."]],
  d: ["50 m", "This question has no units."],
  h: "Find a square number that divides 50.",
  st: ["50 = 25 × 2, and 25 is a square number.", "√50 = √25 × √2.", "√25 = 5, so √50 = 5√2."],
  tip: "Split off the biggest square factor." });

// ---------- Level 2 ----------
Q({ id: "x19", s: "Advanced Math", t: "science", lv: { "16-19": 2 }, th: "Sports", tp: "Calculus: differentiation",
  q: "Find dy/dx when y = 4x³.", key: null,
  r: "12x²",
  c: [["4x²", "Lowering the power without multiplying", "You must also multiply by the old power: 3 × 4 = 12."],
      ["12x³", "Multiplying but not lowering the power", "After multiplying by 3, the power goes down by 1."]],
  d: ["12 m/s", "This question has no units."],
  h: "Multiply by the power, then take 1 from the power.",
  st: ["Bring the power 3 down: 3 × 4 = 12.", "Take 1 from the power: 3 - 1 = 2.", "dy/dx = 12x²."],
  tip: "d/dx of axⁿ is naxⁿ⁻¹." });

Q({ id: "x20", s: "Advanced Math", t: "science", lv: { "16-19": 2 }, th: "Puzzles", tp: "Algebra: the discriminant",
  q: "How many real solutions does x² + 4x + 5 = 0 have?", key: "real",
  r: "None",
  c: [["Two", "Thinking every quadratic has two solutions", "b² - 4ac = 16 - 20 = -4. A negative discriminant means no real solutions."]],
  d: ["Five", "A quadratic has at most two solutions."],
  h: "Work out b² - 4ac.",
  st: ["a = 1, b = 4, c = 5.", "b² - 4ac = 16 - 20 = -4.", "It is negative, so there are no real solutions."],
  tip: "b² - 4ac: positive, two. Zero, one. Negative, none." });

Q({ id: "x21", s: "Advanced Math", t: "science", lv: { "16-19": 2 }, th: "Puzzles", tp: "Algebra: completing the square",
  q: "Write x² + 6x + 2 in the form (x + a)² + b.", key: null,
  r: "(x + 3)² - 7",
  c: [["(x + 6)² + 2", "Using the x number instead of half of it", "Halve 6 to get 3. (x + 6)² would give 12x."],
      ["(x + 3)² + 2", "Forgetting to take away the extra square", "(x + 3)² adds an extra 9, so take it away: 2 - 9 = -7."]],
  d: ["x = 6", "This is not an equation to solve."],
  h: "Halve the number in front of x.",
  st: ["Half of 6 is 3, so start with (x + 3)².", "(x + 3)² = x² + 6x + 9. That is 9, but we need 2.", "Take away 7: (x + 3)² - 7."],
  tip: "Expand your answer to check it." });

Q({ id: "x22", s: "Advanced Math", t: "science", lv: { "16-19": 2 }, th: "Tech", tp: "Algebra: logarithms",
  q: "What is log₂ 8?", key: null,
  r: "3",
  c: [["4", "Dividing instead of finding the power", "8 ÷ 2 = 4, but log₂ 8 asks: 2 to what power gives 8?"]],
  d: ["8 kg", "This question has no units."],
  h: "2 to what power makes 8?",
  st: ["log₂ 8 asks: 2 to what power is 8?", "2 × 2 × 2 = 8, so 2³ = 8.", "log₂ 8 = 3."],
  tip: "A log is a power." });

Q({ id: "x23", s: "Advanced Math", t: "science", lv: { "16-19": 2 }, th: "Sports", tp: "Calculus: integration",
  q: "Find the integral of 6x with respect to x.", key: "integral",
  r: "3x² + c",
  c: [["6", "Differentiating instead of integrating", "6 is the derivative of 6x. Integrating goes the other way."],
      ["3x²", "Forgetting the constant", "An indefinite integral always needs + c."]],
  d: ["6 m", "This question has no units."],
  h: "Add 1 to the power, then divide by the new power.",
  st: ["6x = 6x¹. Add 1 to the power: x².", "Divide by the new power: 6 ÷ 2 = 3.", "Add the constant: 3x² + c."],
  tip: "Differentiate your answer to check it." });

Q({ id: "x24", s: "Advanced Math", t: "science", lv: { "16-19": 2 }, th: "Puzzles", tp: "Sequences: arithmetic series",
  q: "Find the sum 1 + 2 + 3 + ... + 100.", key: null,
  r: "5,050",
  c: [["10,100", "Forgetting to halve", "Pairs like 1 + 100 make 101. There are 50 pairs, not 100."]],
  d: ["-5,050", "Adding positive numbers cannot give a negative."],
  h: "Pair the first and last numbers.",
  st: ["1 + 100 = 101, 2 + 99 = 101, and so on.", "100 numbers make 50 pairs.", "50 × 101 = 5,050."],
  tip: "Sum = number of terms × (first + last) ÷ 2." });

Q({ id: "x25", s: "Advanced Math", t: "science", lv: { "16-19": 2 }, th: "Sports", tp: "Trigonometry: exact values",
  q: "What is sin 90°?", key: null,
  r: "1",
  c: [["0", "Mixing up sin and cos", "cos 90° is 0. sin 90° is 1."]],
  d: ["90°", "sin gives a ratio, not an angle."],
  h: "Picture the sine graph. Where is it highest?",
  st: ["The sine graph starts at 0 at 0°.", "It rises to its highest point at 90°.", "Its highest value is 1, so sin 90° = 1."],
  tip: "Sketch the sin and cos graphs to check exact values." });

Q({ id: "x26", s: "Advanced Math", t: "science", lv: { "16-19": 2 }, th: "Drones", tp: "Vectors: magnitude",
  q: "A drone moves along the vector (3, 4). How far does it move?", key: null,
  r: "5",
  c: [["7", "Adding the parts instead of using Pythagoras", "The parts are at right angles. Length = √(3² + 4²) = √25."]],
  d: ["(4, 3)", "That is a different vector, not a length."],
  h: "The parts 3 and 4 make a right triangle.",
  st: ["The two parts are at right angles.", "Length² = 3² + 4² = 9 + 16 = 25.", "Length = √25 = 5."],
  tip: "Magnitude of (a, b) = √(a² + b²)." });

Q({ id: "x27", s: "Advanced Math", t: "science", lv: { "16-19": 2 }, th: "Sports", tp: "Calculus: stationary points",
  q: "y = x² - 6x + 1. At what value of x is the minimum point?", key: null,
  r: "x = 3",
  c: [["x = -3", "Getting the sign wrong", "dy/dx = 2x - 6 = 0 gives x = 3, not -3."]],
  d: ["x = a parabola", "x is a number here."],
  h: "At a minimum point, the gradient is 0.",
  st: ["Differentiate: dy/dx = 2x - 6.", "At the minimum, dy/dx = 0: 2x - 6 = 0.", "x = 3."],
  tip: "Stationary point: set dy/dx = 0." });

// ---------- Level 3 ----------
Q({ id: "x28", s: "Advanced Math", t: "science", lv: { "16-19": 3 }, th: "Music", tp: "Calculus: product rule",
  q: "Differentiate y = x² sin x.", key: null,
  r: "2x sin x + x² cos x",
  c: [["2x cos x", "Differentiating each part and multiplying", "For a product, use the product rule: u'v + uv'."]],
  d: ["0", "y changes as x changes, so dy/dx is not always 0."],
  h: "y is a product of two parts. Which rule fits?",
  st: ["Let u = x² and v = sin x.", "u' = 2x and v' = cos x.", "dy/dx = u'v + uv' = 2x sin x + x² cos x."],
  tip: "Product: u'v + uv'. Never just multiply the derivatives." });

Q({ id: "x29", s: "Advanced Math", t: "science", lv: { "16-19": 3 }, th: "Tech", tp: "Calculus: integration by parts",
  q: "Find the integral of x eˣ with respect to x.", key: null,
  r: "x eˣ - eˣ + c",
  c: [["(x²/2) eˣ + c", "Integrating each part of a product separately", "You cannot integrate a product part by part. Use integration by parts."]],
  d: ["x + e", "This is not an integral of the expression."],
  h: "Choose u = x, because it gets simpler when you differentiate it.",
  st: ["Let u = x and dv/dx = eˣ. So du/dx = 1 and v = eˣ.", "Integration by parts: uv - ∫ v du/dx dx = x eˣ - ∫ eˣ dx.", "= x eˣ - eˣ + c."],
  tip: "Differentiate your answer to check it." });

Q({ id: "x30", s: "Advanced Math", t: "science", lv: { "16-19": 3 }, th: "Sports", tp: "Calculus: definite integrals",
  q: "Find the integral of 3x² from x = 0 to x = 2.", key: null,
  r: "8",
  c: [["12", "Differentiating instead of integrating", "12 is the derivative 6x at x = 2. You need to integrate."]],
  d: ["-8", "3x² is never negative, so this area cannot be negative."],
  h: "Integrate first, then put in the limits.",
  st: ["The integral of 3x² is x³.", "Put in the limits: 2³ - 0³.", "8 - 0 = 8."],
  tip: "Integrate, then top limit minus bottom limit." });

Q({ id: "x31", s: "Advanced Math", t: "science", lv: { "16-19": 3 }, th: "Nature", tp: "Algebra: exponential equations",
  q: "Solve eˣ = 5.", key: null,
  r: "x = ln 5",
  c: [["x = 5/e", "Dividing by e instead of taking ln", "e is not multiplying x. x is the power, so use ln to undo it."]],
  d: ["x = 5 cm", "This equation has no units."],
  h: "Which function undoes eˣ?",
  st: ["ln is the opposite of eˣ.", "Take ln of both sides: ln(eˣ) = ln 5.", "x = ln 5, about 1.61."],
  tip: "To bring down a power, take logs." });

Q({ id: "x32", s: "Advanced Math", t: "science", lv: { "16-19": 3 }, th: "Games", tp: "Probability: binomial",
  q: "A fair coin is flipped 3 times. What is the chance of exactly 2 heads?", key: "exactly",
  r: "3/8",
  c: [["1/8", "Forgetting the number of orders", "HHT, HTH and THH all give 2 heads. That is 3 ways, each with chance 1/8."]],
  d: ["2 heads", "The question asks for a chance."],
  h: "List the ways to get exactly 2 heads.",
  st: ["Each result like HHT has chance 1/2 × 1/2 × 1/2 = 1/8.", "The ways to get 2 heads: HHT, HTH, THH. That is 3 ways.", "3 × 1/8 = 3/8."],
  tip: "Multiply by the number of different orders." });

Q({ id: "x33", s: "Advanced Math", t: "science", lv: { "16-19": 3 }, th: "Tech", tp: "Calculus: chain rule",
  q: "Differentiate y = ln(3x).", key: null,
  r: "1/x",
  c: [["1/(3x)", "Forgetting the chain rule", "You must also multiply by the derivative of 3x, which is 3. 3 × 1/(3x) = 1/x."]],
  d: ["3x cm", "This question has no units."],
  h: "Use the chain rule: the derivative of ln(u) is u'/u.",
  st: ["Let u = 3x, so u' = 3.", "d/dx ln(u) = u'/u = 3/(3x).", "3/(3x) = 1/x."],
  tip: "ln(3x) = ln 3 + ln x, so the 3 disappears when you differentiate." });

Q({ id: "x34", s: "Advanced Math", t: "science", lv: { "16-19": 3 }, th: "Tech", tp: "Algebra: laws of logarithms",
  q: "Simplify log 8 + log 5 - log 4, where log is base 10.", key: null,
  r: "1",
  c: [["log 9", "Adding and subtracting the numbers inside the logs", "log a + log b = log(ab), not log(a + b). Here it is log(8 × 5 ÷ 4)."]],
  d: ["10 kg", "This question has no units."],
  h: "Adding logs means multiplying inside. Subtracting means dividing.",
  st: ["log 8 + log 5 = log 40.", "log 40 - log 4 = log 10.", "log 10 = 1 in base 10."],
  tip: "Logs turn × into + and ÷ into -." });

Q({ id: "x35", s: "Advanced Math", t: "science", lv: { "16-19": 3 }, th: "Puzzles", tp: "Sequences: sum to infinity",
  q: "Find the sum to infinity of 8 + 4 + 2 + 1 + ...", key: "infinity",
  r: "16",
  c: [["15", "Adding only the terms you can see", "The terms keep going forever, so the sum keeps growing toward 16."],
      ["It has no end, so it has no sum", "Thinking an endless sum must be endless", "The terms halve each time, so the sum gets closer and closer to 16."]],
  d: ["8 cm", "This question has no units."],
  h: "First term a = 8. What is the ratio r?",
  st: ["a = 8 and each term is half the last, so r = 1/2.", "Sum to infinity = a ÷ (1 - r).", "8 ÷ 1/2 = 16."],
  tip: "If -1 < r < 1, the sum to infinity is a ÷ (1 - r)." });

Q({ id: "x36", s: "Advanced Math", t: "science", lv: { "16-19": 3 }, th: "Sports", tp: "Trigonometry: equations",
  q: "Solve sin x = 0.5 for 0° ≤ x ≤ 360°.", key: null,
  r: "x = 30° or x = 150°",
  c: [["x = 30° only", "Missing the second solution", "sin is also positive between 90° and 180°: 180° - 30° = 150°."]],
  d: ["x = 0.5 m", "x is an angle here."],
  h: "Sketch the sine graph from 0° to 360°. How many times does it reach 0.5?",
  st: ["Your calculator gives x = 30°.", "The sine graph is symmetric about 90°, so 180° - 30° = 150° also works.", "Both are in the range: 30° and 150°."],
  tip: "Sketch the graph to find every solution in the range." });
