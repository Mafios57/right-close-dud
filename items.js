// Right, Close, Dud question bank, version 2 (global). In the data, "trap" is the Close answer.
// Each item: one "correct", at least one "trap" (with "mis" and "why"), one "dud".
// level: difficulty per age group. 1 = one step, everyday words. 2 = one idea, the trap needs a check. 3 = exam level.
// track: "core" for every student, "science" for students who take advanced math or sciences.
// target: a clear trick word in the question, or null.
// steps: short, child-friendly steps that walk to the Right answer. "Show me the steps" shows them one at a time.
// hint: optional nudge for "Need a hint?". If missing, the hint is step 1. Never give the answer away in a hint.
// Works with the current game. The game ignores level, track, theme and topic until the next code update.

window.ITEMS = [
  // ---------- Math ----------
  {
    id: "m1", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Animals", topic: "Number: comparing decimals", syllabus: "Number: comparing decimals",
    stem: "Two snails race. Snail A moves 0.5 m. Snail B moves 0.45 m. Which snail moved farther?",
    target: "farther",
    answers: [
      { text: "Snail A, 0.5 m", type: "correct" },
      { text: "Snail B, 0.45 m", type: "trap", mis: "Thinking more digits means bigger", why: "45 is bigger than 5, but 0.45 is smaller than 0.5." },
      { text: "Both moved 5 m", type: "dud", why: "Neither snail moved 5 m." }
    ],
    hint: "Give both numbers the same number of digits after the point. Then compare.",
    steps: [
      "Look at the two distances: 0.5 m and 0.45 m.",
      "Give them the same number of digits. Add a zero: 0.5 becomes 0.50.",
      "Now compare 50 hundredths with 45 hundredths. 50 is bigger.",
      "So 0.5 m is farther. Snail A wins."
    ],
    tip: "Give both numbers the same number of digits: 0.50 and 0.45. Now compare."
  },
  {
    id: "m2", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Food", topic: "Number: comparing decimals", syllabus: "Number: comparing decimals",
    stem: "Three friends drink juice. Mei drinks 0.3 L, Omar drinks 0.25 L, and Priya drinks 0.125 L. Who drinks the most?",
    target: "most",
    answers: [
      { text: "Mei, 0.3 L", type: "correct" },
      { text: "Omar, 0.25 L", type: "trap", mis: "Reading decimals like whole numbers", why: "25 looks bigger than 3, but 0.25 is less than 0.3." },
      { text: "Priya, 0.125 L", type: "trap", mis: "Thinking more digits means bigger", why: "0.125 has the most digits, but it is the smallest amount." },
      { text: "Nobody drinks any juice", type: "dud", why: "The question says all three drink juice." }
    ],
    steps: [
      "Write each amount with three digits after the point: 0.300, 0.250, 0.125.",
      "Now compare them like whole numbers: 300, 250, 125.",
      "300 is the biggest, so Mei drinks the most."
    ],
    tip: "Write all three with three digits: 0.300, 0.250, 0.125."
  },
  {
    id: "m3", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Food", topic: "Number: adding fractions", syllabus: "Number: adding fractions",
    stem: "You eat 1/4 of a pizza. Your friend eats 1/4 of the same pizza. How much of the pizza is gone?",
    target: null,
    answers: [
      { text: "2/4, which is 1/2", type: "correct" },
      { text: "2/8", type: "trap", mis: "Adding the tops and the bottoms", why: "2/8 is the same as 1/4. Two people ate more than one person." },
      { text: "8 pizzas", type: "dud", why: "There is only one pizza." }
    ],
    steps: [
      "Think of the pizza cut into 4 equal slices. Each slice is 1/4.",
      "You eat 1 slice. Your friend eats 1 slice. That is 2 slices.",
      "2 slices out of 4 is 2/4.",
      "2/4 is the same as 1/2. Half the pizza is gone."
    ],
    tip: "Quarters add like apples: 1 quarter + 1 quarter = 2 quarters."
  },
  {
    id: "m4", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Sports", topic: "Number: adding fractions", syllabus: "Number: adding fractions",
    stem: "Ana fills 1/2 of her water bottle. Then she adds another 1/3 of a bottle. How full is it now?",
    target: null,
    answers: [
      { text: "5/6 full", type: "correct" },
      { text: "2/5 full", type: "trap", mis: "Adding the tops and the bottoms", why: "2/5 is less than 1/2. Adding water cannot make the bottle less full." },
      { text: "6 bottles full", type: "dud", why: "She only has one bottle." }
    ],
    steps: [
      "You cannot add halves and thirds straight away. The bottoms must match first.",
      "2 and 3 both go into 6. So change both to sixths.",
      "1/2 = 3/6 and 1/3 = 2/6.",
      "3/6 + 2/6 = 5/6. Add the tops and keep the bottom."
    ],
    tip: "Make the bottoms match first: 1/2 = 3/6 and 1/3 = 2/6."
  },
  {
    id: "m5", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Gaming", topic: "Word problems: comparing amounts", syllabus: "Word problems: comparing amounts",
    stem: "Sam has 24 game coins. Zara has 6 more coins than Sam. How many coins does Zara have?",
    target: null,
    answers: [
      { text: "30 coins", type: "correct" },
      { text: "18 coins", type: "trap", mis: "Taking away when you should add", why: "Zara has more than Sam, so her number must be bigger than 24." },
      { text: "144 coins", type: "dud", why: "Nothing in the story multiplies." }
    ],
    hint: "Zara has more than Sam. Should your answer be bigger or smaller than 24?",
    steps: [
      "Sam has 24 coins.",
      "Zara has 6 more than Sam. More means add.",
      "24 + 6 = 30. Zara has 30 coins."
    ],
    tip: "Ask who has more. Zara has more, so add."
  },
  {
    id: "m6", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Gaming", topic: "Word problems: comparing amounts", syllabus: "Word problems: comparing amounts",
    stem: "Sam has 24 game coins. That is 6 fewer coins than Zara has. How many coins does Zara have?",
    target: null,
    answers: [
      { text: "30 coins", type: "correct" },
      { text: "18 coins", type: "trap", mis: "Seeing a word and grabbing an operation", why: "\"Fewer\" made you take away. But Sam has fewer, so Zara has more." },
      { text: "144 coins", type: "dud", why: "Nothing in the story multiplies." }
    ],
    hint: "Who has more coins? Read the second sentence slowly.",
    steps: [
      "Read it slowly: Sam has 6 fewer coins than Zara.",
      "That means Zara has 6 more coins than Sam.",
      "24 + 6 = 30. Zara has 30 coins.",
      "Check: 30 take away 6 is 24. That matches Sam."
    ],
    tip: "Ask who has more. Sam has fewer, so Zara has more than 24."
  },
  {
    id: "m7", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 3 },
    theme: "Food", topic: "Word problems: two steps", syllabus: "Word problems: two steps",
    stem: "A food truck sells 15 tacos at lunch. After lunch, it still has 3 times as many tacos as it sold. How many tacos did it have at the start?",
    target: "start",
    answers: [
      { text: "60 tacos", type: "correct" },
      { text: "45 tacos", type: "trap", mis: "Answering a different question", why: "45 is how many are left. The question asks about the start." },
      { text: "5 tacos", type: "trap", mis: "Seeing a word and grabbing an operation", why: "\"Times\" means multiply, not divide." },
      { text: "10 tacos", type: "dud", why: "It sold 15, so it must have started with more than 15." }
    ],
    hint: "First work out how many tacos are left. Then add the ones it sold.",
    steps: [
      "The truck sold 15 tacos.",
      "After lunch it has 3 times as many as it sold: 3 × 15 = 45 tacos left.",
      "At the start it had the tacos it sold plus the tacos left.",
      "15 + 45 = 60 tacos at the start."
    ],
    tip: "Draw it: 15 sold, 45 left, 60 at the start."
  },
  {
    id: "m8", subject: "Math", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 2 },
    theme: "Puzzles", topic: "Algebra: solving equations", syllabus: "Algebra: solving equations",
    stem: "A secret door opens with a code. The clue says 3x + 4 = 19. The code is 2x. What is the code?",
    target: "2x",
    answers: [
      { text: "10", type: "correct" },
      { text: "5", type: "trap", mis: "Answering a different question", why: "5 is x. The code is 2x." },
      { text: "46", type: "dud", why: "No step in solving this gives 46." }
    ],
    hint: "Find x first. Then look again at what the question asks for.",
    steps: [
      "Start with the clue: 3x + 4 = 19.",
      "Take 4 away from both sides: 3x = 15.",
      "Divide both sides by 3: x = 5.",
      "The code is 2x, so double x: 2 × 5 = 10."
    ],
    tip: "Circle what the question asks for before you solve."
  },
  {
    id: "m9", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Movies", topic: "Algebra: two equations", syllabus: "Algebra: two equations",
    stem: "At the cinema, 2 drinks and 3 popcorns cost 31 coins. 2 drinks and 1 popcorn cost 17 coins. How much is one popcorn?",
    target: null,
    answers: [
      { text: "7 coins", type: "correct" },
      { text: "14 coins", type: "trap", mis: "Stopping halfway", why: "14 is the price of 2 popcorns." },
      { text: "5 coins", type: "trap", mis: "Finding the wrong unknown", why: "5 is the price of a drink." },
      { text: "48 coins", type: "dud", why: "This adds every number in the question." }
    ],
    hint: "Compare the two orders. What is different between them?",
    steps: [
      "Line up the two orders. 2 drinks + 3 popcorns = 31 coins. 2 drinks + 1 popcorn = 17 coins.",
      "The only difference is 2 more popcorns. The price goes up by 31 − 17 = 14 coins.",
      "So 2 popcorns cost 14 coins. 1 popcorn costs 14 ÷ 2 = 7 coins.",
      "Check: a drink costs (17 − 7) ÷ 2 = 5. Then 2(5) + 3(7) = 31. It works."
    ],
    tip: "Check both purchases: 2(5) + 3(7) = 31 and 2(5) + 7 = 17."
  },
  {
    id: "m10", subject: "Math", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 2, "16-19": 1 },
    theme: "Sports", topic: "Probability", syllabus: "Probability",
    stem: "A referee flips a fair coin. It lands heads 5 times in a row. What is the chance the next flip is heads?",
    target: null,
    answers: [
      { text: "1 in 2", type: "correct" },
      { text: "Less than 1 in 2, because tails is due", type: "trap", mis: "Thinking luck has to even out", why: "The coin does not remember earlier flips." },
      { text: "More than 1 in 2, because heads is on a streak", type: "trap", mis: "Thinking a streak will continue", why: "Each flip is new. Past flips do not change the chance." },
      { text: "A coin cannot land on heads", type: "dud", why: "It just landed on heads 5 times." }
    ],
    steps: [
      "A fair coin has 2 sides: heads and tails.",
      "Each flip is new. The coin does not remember the last 5 flips.",
      "So the chance of heads is still 1 in 2."
    ],
    tip: "Ask: does the coin remember the last flip?"
  },
  {
    id: "m11", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Gaming", topic: "Statistics: averages", syllabus: "Statistics: averages",
    stem: "Five players scored 300, 320, 340, 350, and 2,000 points. Which number best describes a typical player's score?",
    target: null,
    answers: [
      { text: "340, the median", type: "correct" },
      { text: "662, the mean", type: "trap", mis: "Thinking average always means the mean", why: "One huge score pulls the mean up. Four of five players scored under 400." },
      { text: "2,000", type: "dud", why: "Only one player scored that." }
    ],
    hint: "One score is much bigger than the rest. Which kind of average does it pull up?",
    steps: [
      "Put the scores in order: 300, 320, 340, 350, 2,000.",
      "The median is the middle score: 340.",
      "The mean is the total divided by 5: 3,310 ÷ 5 = 662.",
      "Four of the five players scored under 400. So 662 does not describe a typical player. 340 does."
    ],
    tip: "Check that your answer sits near most of the scores."
  },

  // ---------- Science ----------
  {
    id: "s1", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Nature", topic: "Plants: making food", syllabus: "Plants: making food",
    stem: "Green plants make their own food. What do they need to do it?",
    target: null,
    answers: [
      { text: "Sunlight, water, and carbon dioxide from the air", type: "correct" },
      { text: "Soil, water, and sunlight", type: "trap", mis: "Thinking plants eat soil", why: "Roots sit in soil, so soil looks like food. Plants take a gas from the air to make food." },
      { text: "Darkness and ice", type: "dud", why: "Plants need light to make food." }
    ],
    steps: [
      "Plants make their own food. This is called photosynthesis.",
      "They need three things: sunlight, water, and carbon dioxide from the air.",
      "Roots take in water. Leaves take in carbon dioxide and catch the sunlight.",
      "Soil holds the plant up and gives a few minerals. It is not the food."
    ],
    tip: "Remember: plants take in a gas through their leaves."
  },
  {
    id: "s2", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Nature", topic: "Plants: photosynthesis", syllabus: "Plants: photosynthesis",
    stem: "A 1 g seed grows into a tree that weighs 1,000 kg. Where did most of that mass come from?",
    target: null,
    answers: [
      { text: "Carbon dioxide from the air", type: "correct" },
      { text: "The soil", type: "trap", mis: "Thinking plants eat soil", why: "The soil around a tree hardly gets lighter as the tree grows." },
      { text: "Water", type: "trap", mis: "Thinking water builds the plant", why: "Water matters, but most of the dry wood is carbon from the air." },
      { text: "Birds that sat on the tree", type: "dud", why: "Birds do not give their mass to the tree." }
    ],
    steps: [
      "Wood is made mostly of carbon.",
      "During photosynthesis, leaves take in carbon dioxide from the air.",
      "The tree uses that carbon to build sugar, and then wood.",
      "So most of the tree's mass came from the air. The soil hardly gets lighter."
    ],
    tip: "Wood is mostly carbon. Ask where a plant gets its carbon."
  },
  {
    id: "s3", subject: "Science", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 2, "16-19": 1 },
    theme: "Nature", topic: "Living things: respiration", syllabus: "Living things: respiration",
    stem: "A plant sits on your windowsill. When does it respire, using food for energy?",
    target: null,
    answers: [
      { text: "All the time, day and night", type: "correct" },
      { text: "Never. Plants make food instead.", type: "trap", mis: "Thinking plants do not respire", why: "Making food and using food are two different jobs. Plants do both." },
      { text: "Only at night", type: "trap", mis: "Thinking plants take turns", why: "Respiration does not stop when the sun comes up." },
      { text: "Only on Sundays", type: "dud", why: "Plants do not follow the days of the week." }
    ],
    steps: [
      "Respiration means using food to get energy.",
      "Every living cell needs energy all the time, day and night.",
      "Photosynthesis makes food when there is light. Respiration uses food all the time.",
      "So the plant respires all the time, day and night."
    ],
    tip: "Ask where a plant's cells get energy at midday."
  },
  {
    id: "s4", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Food", topic: "Materials: dissolving", syllabus: "Materials: dissolving",
    stem: "You stir sugar into hot tea. Soon you cannot see the sugar. What happened to it?",
    target: null,
    answers: [
      { text: "It broke into pieces too small to see. It is still in the tea.", type: "correct" },
      { text: "It is gone, so it weighs nothing now", type: "trap", mis: "Thinking dissolved things disappear", why: "You cannot see it, but the tea tastes sweet. The sugar is still there." },
      { text: "It melted", type: "trap", mis: "Mixing up dissolving and melting", why: "Melting is a solid turning to liquid by heat alone. The sugar mixed into the tea." },
      { text: "It turned into milk", type: "dud", why: "Sugar cannot change into milk." }
    ],
    steps: [
      "When sugar mixes into tea, it breaks into tiny pieces.",
      "The pieces are too small to see.",
      "The tea tastes sweet, so the sugar is still there.",
      "Melting is different. It happens to a solid on its own when it gets hot."
    ],
    tip: "Taste it. If the tea is sweet, the sugar is still there."
  },
  {
    id: "s5", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Kitchen lab", topic: "Materials: dissolving and mass", syllabus: "Materials: dissolving and mass",
    stem: "You weigh 100 g of water and 10 g of salt. You stir until the salt dissolves. What does the salt water weigh?",
    target: null,
    answers: [
      { text: "110 g", type: "correct" },
      { text: "100 g", type: "trap", mis: "Thinking dissolved things disappear", why: "The salt splits into tiny particles, but none of its mass is lost." },
      { text: "Less than 100 g", type: "trap", mis: "Thinking dissolving uses up mass", why: "Nothing escapes from the cup, so nothing is lost." },
      { text: "10 kg", type: "dud", why: "That is far more than everything in the cup." }
    ],
    hint: "Does anything leave the cup when the salt dissolves?",
    steps: [
      "You start with 100 g of water and 10 g of salt.",
      "Dissolving splits the salt into tiny particles. None of it leaves the cup.",
      "So the mass stays the same: 100 g + 10 g = 110 g."
    ],
    tip: "Mass in = mass out when nothing leaves the cup."
  },
  {
    id: "s6", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Animals", topic: "Living things: animal groups", syllabus: "Living things: animal groups",
    stem: "Which of these animals is NOT a mammal?",
    target: "NOT",
    answers: [
      { text: "Shark", type: "correct" },
      { text: "Whale", type: "trap", mis: "Thinking all sea animals are fish", why: "Whales live in the sea, but they breathe air and feed milk to their babies." },
      { text: "Bat", type: "trap", mis: "Thinking anything that flies is a bird", why: "Bats fly, but they have fur and feed milk to their babies." },
      { text: "A rock", type: "dud", why: "A rock is not an animal." }
    ],
    steps: [
      "Circle NOT. You want the animal that is not a mammal.",
      "Mammals breathe air, have hair or fur, and feed milk to their babies.",
      "Whales and bats do all of these, so they are mammals.",
      "A shark is a fish. It breathes through gills. So the shark is NOT a mammal."
    ],
    tip: "Circle NOT. Then ask which animal does not feed milk to its babies."
  },

  // ---------- Science track (advanced math and sciences) ----------
  {
    id: "x1", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Games", topic: "Algebra: expanding brackets", syllabus: "Algebra: expanding brackets",
    stem: "A square game board has sides of (x + 3) cm. Which expression gives its area?",
    target: null,
    answers: [
      { text: "x² + 6x + 9", type: "correct" },
      { text: "x² + 9", type: "trap", mis: "Squaring each part on its own", why: "This misses the middle term 6x." },
      { text: "6x", type: "dud", why: "This drops the squared terms completely." }
    ],
    steps: [
      "The area of a square is side × side.",
      "So the area is (x + 3)(x + 3).",
      "Multiply every part by every part: x·x + x·3 + 3·x + 3·3.",
      "Add them up: x² + 3x + 3x + 9 = x² + 6x + 9."
    ],
    tip: "Test with x = 1. (1 + 3)² = 16, but 1 + 9 = 10."
  },
  {
    id: "x2", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Gaming", topic: "Calculus: chain rule", syllabus: "Calculus: chain rule",
    stem: "A game's score follows y = (2x + 1)³. Find dy/dx.",
    target: null,
    answers: [
      { text: "6(2x + 1)²", type: "correct" },
      { text: "3(2x + 1)²", type: "trap", mis: "Forgetting the chain rule", why: "You also multiply by the derivative of 2x + 1, which is 2." },
      { text: "(2x + 1)⁴/8", type: "trap", mis: "Integrating instead of differentiating", why: "This goes the wrong direction." },
      { text: "0", type: "dud", why: "y changes when x changes, so dy/dx cannot be 0." }
    ],
    steps: [
      "Treat the bracket as one block: y = (block)³.",
      "Bring the power down and lower it by 1: 3(2x + 1)².",
      "Chain rule: multiply by the derivative of the inside. The inside is 2x + 1. Its derivative is 2.",
      "3(2x + 1)² × 2 = 6(2x + 1)²."
    ],
    tip: "If the inside of the bracket changes with x, use the chain rule."
  },
  {
    id: "x3", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Sports", topic: "Forces: gravity", syllabus: "Forces: gravity",
    stem: "A basketball player throws the ball straight up. At the very top, what is the net force on the ball?",
    target: null,
    answers: [
      { text: "Downward, equal to its weight", type: "correct" },
      { text: "Zero", type: "trap", mis: "Thinking no motion means no force", why: "The ball stops for a moment, but gravity still pulls on it." },
      { text: "Upward, from the throw", type: "trap", mis: "Thinking a throw stores force in the ball", why: "The hand stopped pushing when the ball left it." },
      { text: "Sideways", type: "dud", why: "Nothing pushes the ball sideways." }
    ],
    hint: "At the top, is gravity still pulling on the ball?",
    steps: [
      "At the top, the ball stops for a moment.",
      "Stopping does not mean no force. Gravity still pulls the ball down.",
      "The hand stopped pushing as soon as the ball left it.",
      "So the only force is gravity: downward, equal to the ball's weight."
    ],
    tip: "Ask whether gravity ever switches off."
  },
  {
    id: "x4", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Robots", topic: "Electricity: parallel circuits", syllabus: "Electricity: parallel circuits",
    stem: "A robot has two 6 Ω lamps connected in parallel to a 12 V battery. What current flows from the battery?",
    target: "parallel",
    answers: [
      { text: "4 A", type: "correct" },
      { text: "1 A", type: "trap", mis: "Using the series rule for parallel", why: "Adding the resistors to 12 Ω is the rule for series." },
      { text: "2 A", type: "trap", mis: "Counting only one path", why: "Current flows through both lamps." },
      { text: "12 V", type: "dud", why: "Volts measure voltage, not current." }
    ],
    steps: [
      "In parallel, each lamp gets the full 12 V.",
      "Current through one lamp: I = V ÷ R = 12 ÷ 6 = 2 A.",
      "There are two lamps, so the battery gives 2 + 2 = 4 A.",
      "Another way: two 6 Ω lamps in parallel act like 3 Ω. 12 ÷ 3 = 4 A."
    ],
    tip: "Two paths let more current through, so total resistance is less than 6 Ω."
  },
  {
    id: "x5", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Drones", topic: "Motion: acceleration", syllabus: "Motion: acceleration",
    stem: "A drone flies at a constant 20 m/s for 5 s. What is its acceleration?",
    target: "constant",
    answers: [
      { text: "0 m/s²", type: "correct" },
      { text: "4 m/s²", type: "trap", mis: "Using whatever numbers are given", why: "Dividing speed by time fits a formula, but speed never changed." },
      { text: "25 kg", type: "dud", why: "Kilograms measure mass, not acceleration." }
    ],
    steps: [
      "Acceleration = change in speed ÷ time.",
      "The speed stays at 20 m/s the whole time. The change is 0.",
      "0 ÷ 5 = 0 m/s²."
    ],
    tip: "Constant speed means no change in speed, so no acceleration."
  },
  {
    id: "x6", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Sports", topic: "Energy: kinetic energy", syllabus: "Energy: kinetic energy",
    stem: "A 2 kg ball flies at 36 km/h. What is its kinetic energy?",
    target: "km/h",
    answers: [
      { text: "100 J", type: "correct" },
      { text: "1,296 J", type: "trap", mis: "Skipping unit changes", why: "36 km/h must become 10 m/s first." },
      { text: "10 J", type: "trap", mis: "Forgetting to square", why: "The formula is ½mv², so speed is squared." },
      { text: "100 kg", type: "dud", why: "Energy is measured in joules, not kilograms." }
    ],
    steps: [
      "Change km/h to m/s first: 36 × 1,000 ÷ 3,600 = 10 m/s.",
      "Kinetic energy = ½ × mass × speed².",
      "Speed² = 10 × 10 = 100.",
      "½ × 2 × 100 = 100 J."
    ],
    tip: "Change every unit to m, kg, and s before you calculate."
  },
  {
    id: "x7", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Diving", topic: "Chemistry: moles", syllabus: "Chemistry: moles",
    stem: "A diver's tank holds 8 g of oxygen gas, O₂. How many moles is that? (O = 16)",
    target: "O₂",
    answers: [
      { text: "0.25 mol", type: "correct" },
      { text: "0.5 mol", type: "trap", mis: "Using the atom's mass for the molecule", why: "O₂ has two atoms, so its mass is 32 g/mol." },
      { text: "4 mol", type: "trap", mis: "Dividing the wrong way round", why: "Moles = mass ÷ molar mass = 8 ÷ 32." },
      { text: "256 g", type: "dud", why: "The question asks for moles, not grams." }
    ],
    steps: [
      "Write the formula first: O₂. It has 2 oxygen atoms.",
      "Molar mass of O₂ = 2 × 16 = 32 g/mol.",
      "Moles = mass ÷ molar mass = 8 ÷ 32.",
      "8 ÷ 32 = 0.25 mol."
    ],
    tip: "Write the formula first, then work out its molar mass."
  },
  {
    id: "x8", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Human body", topic: "Cells: osmosis", syllabus: "Cells: osmosis",
    stem: "A red blood cell is placed in pure water, a hypotonic solution. What happens to the cell?",
    target: null,
    answers: [
      { text: "Water moves in, the cell swells and can burst", type: "correct" },
      { text: "The cell shrinks", type: "trap", mis: "Mixing up hypotonic and hypertonic", why: "Shrinking happens in a salty, hypertonic solution." },
      { text: "The cell turns into a plant cell", type: "dud", why: "A cell cannot change into a different kind of cell." }
    ],
    steps: [
      "Pure water has nothing dissolved in it. The cell has more dissolved stuff inside.",
      "In osmosis, water moves toward the side with more dissolved stuff.",
      "So water moves into the cell.",
      "The cell swells. A red blood cell has no cell wall, so it can burst."
    ],
    tip: "Water moves toward the side with more dissolved stuff. Here that is inside the cell."
  },

  // ---------- Language ----------
  {
    id: "l1", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Food", topic: "Reading: phrases", syllabus: "Reading: phrases",
    stem: "Diego says: \"The food was anything but tasty.\" What does he mean?",
    target: null,
    answers: [
      { text: "The food was not tasty", type: "correct" },
      { text: "The food was tasty", type: "trap", mis: "Reading a phrase word by word", why: "\"Anything but\" means the opposite." },
      { text: "The food was a car", type: "dud", why: "Food cannot be a car." }
    ],
    steps: [
      "\"Anything but\" means \"not at all\".",
      "So \"anything but tasty\" means \"not tasty at all\".",
      "Diego did not like the food."
    ],
    tip: "Learn \"anything but\" as one phrase. It means \"not at all\"."
  },
  {
    id: "l2", subject: "Language", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 2, "16-19": 1 },
    theme: "Sports", topic: "Reading: phrases", syllabus: "Reading: phrases",
    stem: "After the match, the coach said: \"Our defending was anything but solid.\" What does the coach mean?",
    target: null,
    answers: [
      { text: "The team defended badly", type: "correct" },
      { text: "The team defended well", type: "trap", mis: "Reading a phrase word by word", why: "\"Solid\" stands out, but \"anything but\" flips it." },
      { text: "The team played tennis", type: "dud", why: "The coach is talking about a match with defending, not tennis." }
    ],
    steps: [
      "Find the phrase \"anything but\".",
      "It flips the word after it. \"Anything but solid\" means \"not solid at all\".",
      "Solid defending is good. Not solid means bad.",
      "So the team defended badly."
    ],
    tip: "Find \"anything but\" and flip the word after it."
  },
  {
    id: "l3", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "School trip", topic: "Reading: finding details", syllabus: "Reading: finding details",
    stem: "Lina missed the school trip because she was sick and the bus left early. Which is NOT a reason she missed the trip?",
    target: "NOT",
    answers: [
      { text: "She lost her ticket", type: "correct" },
      { text: "She was sick", type: "trap", mis: "Skipping the word NOT", why: "This matches the story, but the question asks for what is NOT a reason." },
      { text: "Lina is a planet", type: "dud", why: "Lina is a girl in the story." }
    ],
    steps: [
      "Circle NOT. You want the answer that is not a reason.",
      "The story gives two reasons: she was sick, and the bus left early.",
      "Cross those two out.",
      "What is left is \"She lost her ticket\". The story never says that."
    ],
    tip: "Circle NOT. Cross out every reason the story gives."
  },
  {
    id: "l4", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Tech", topic: "Reading: answering in your own words", syllabus: "Reading: answering in your own words",
    stem: "A review says: \"The new phone's battery life is dismal.\" In your own words, what is the battery life like?",
    target: "own",
    answers: [
      { text: "Very poor. It runs out fast.", type: "correct" },
      { text: "It is dismal", type: "trap", mis: "Copying words from the text", why: "The question asks for your own words, not the review's words." },
      { text: "The phone is expensive", type: "trap", mis: "Answering a different question", why: "It may be true, but the question asks about the battery." },
      { text: "The phone is a banana", type: "dud", why: "A phone is not a banana." }
    ],
    steps: [
      "Underline the instruction: in your own words.",
      "Find the hard word: dismal.",
      "Dismal means very bad or very poor.",
      "Say it your way: the battery is very poor and runs out fast."
    ],
    tip: "Underline the instruction words, such as \"in your own words\", before you answer."
  },
  {
    id: "l5", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "School", topic: "Writing: explaining images", syllabus: "Writing: explaining images",
    stem: "A writer says: \"At lunchtime, the school canteen was a beehive.\" Which answer explains this best?",
    target: null,
    answers: [
      { text: "The canteen was busy and noisy, with many people moving at once, like bees in a hive", type: "correct" },
      { text: "The canteen was like a beehive", type: "trap", mis: "Repeating the picture without explaining it", why: "This repeats the image but does not say what the two things share." },
      { text: "There were bees in the canteen", type: "trap", mis: "Taking a picture word as real", why: "The writer is comparing, not saying real bees were there." },
      { text: "The canteen was empty and silent", type: "dud", why: "A beehive is busy, not empty." }
    ],
    steps: [
      "\"A beehive\" is a picture word. The writer is comparing the canteen to a beehive.",
      "Ask what a beehive is like: busy, noisy, many bees moving at once.",
      "Ask what the canteen is like at lunch: busy, noisy, many students moving at once.",
      "A good answer says what they share: busy and noisy, like bees in a hive."
    ],
    tip: "Ask what the canteen and a beehive have in common."
  }
];
