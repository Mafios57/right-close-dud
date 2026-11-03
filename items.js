// Right, Close, Dud question bank, version 2 (global). In the data, "trap" is the Close answer.
// Each item: one "correct", at least one "trap" (with "mis" and "why"), one "dud".
// level: difficulty per age group. 1 = one step, everyday words. 2 = one idea, the trap needs a check. 3 = exam level.
// track: "core" for every student, "science" for students who take advanced math or sciences.
// target: a clear trick word in the question, or null.
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
    tip: "Ask what the canteen and a beehive have in common."
  }
];
