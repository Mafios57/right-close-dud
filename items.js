// Right, Close, Dud question bank, version 3. In the data, "trap" is the Close answer.
// Each item: one "correct", at least one "trap" (with "mis" and "why"), one "dud".
// level: difficulty per age group. 1 = one step, everyday words. 2 = one idea, the trap needs a check. 3 = exam level.
// track: "core" for every student, "science" for students who take advanced math or sciences.
// target: a clear trick word in the question, or null.
// steps: short, child-friendly steps that walk to the Right answer. "Show me the steps" shows them one at a time.
// hint: optional nudge for "Need a hint?". If missing, the hint is step 1. Never give the answer away in a hint.
// New questions are written in ../questions-v3 and added with: node tools/build-items.js

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
  {
    id: "m12", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Market", topic: "Number: multiplying", syllabus: "Number: multiplying",
    stem: "One mango costs 3 coins. How much do 4 mangoes cost?",
    target: null,
    answers: [
      { text: "12 coins", type: "correct" },
      { text: "7 coins", type: "trap", mis: "Adding when you should multiply", why: "7 is 3 + 4. You need 4 groups of 3 coins." },
      { text: "40 kg of mangoes", type: "dud", why: "The question asks for a price, not a weight." }
    ],
    hint: "Count in threes, one three for each mango.",
    steps: [
      "Each mango costs 3 coins.",
      "You buy 4 mangoes, so you pay 3 coins four times.",
      "3 + 3 + 3 + 3 = 12. That is 4 × 3."
    ],
    tip: "\"Each\" and \"for every\" often mean multiply."
  },
  {
    id: "m13", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Sports", topic: "Number: rounding", syllabus: "Number: rounding",
    stem: "A runner finishes a race in 9.7 seconds. Round this to the nearest whole second.",
    target: "nearest",
    answers: [
      { text: "10 seconds", type: "correct" },
      { text: "9 seconds", type: "trap", mis: "Cutting off the decimal instead of rounding", why: "0.7 is more than half, so you round up, not down." },
      { text: "97 minutes", type: "dud", why: "The race took seconds, not minutes." }
    ],
    hint: "Is 9.7 closer to 9 or to 10?",
    steps: [
      "Look at the digit after the point: 7.",
      "5 or more means round up.",
      "So 9.7 rounds up to 10."
    ],
    tip: "Look at the first digit after the point. 5 or more, round up."
  },
  {
    id: "m14", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Gaming", topic: "Number: place value", syllabus: "Number: place value",
    stem: "Your game score is 4,582. What is the value of the digit 5?",
    target: "value",
    answers: [
      { text: "500", type: "correct" },
      { text: "5", type: "trap", mis: "Reading the digit, not its value", why: "The digit is 5, but it sits in the hundreds place, so it is worth 500." },
      { text: "4,582,000", type: "dud", why: "That is a different, much bigger number." }
    ],
    hint: "Which place is the 5 in: ones, tens, hundreds or thousands?",
    steps: [
      "Write the places: 4 thousands, 5 hundreds, 8 tens, 2 ones.",
      "The 5 is in the hundreds place.",
      "5 hundreds is 500."
    ],
    tip: "A digit's value depends on its place."
  },
  {
    id: "m15", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Food", topic: "Number: percentages", syllabus: "Number: percentages",
    stem: "A cake is cut into 10 equal slices. You eat 3 slices. What percent of the cake did you eat?",
    target: null,
    answers: [
      { text: "30%", type: "correct" },
      { text: "3%", type: "trap", mis: "Forgetting percent means out of 100", why: "3 out of 10 is the same as 30 out of 100." },
      { text: "300 cakes", type: "dud", why: "There is only one cake." }
    ],
    hint: "Percent means out of 100. How many slices would that be out of 100?",
    steps: [
      "You ate 3 out of 10 slices: 3/10.",
      "Multiply top and bottom by 10: 30/100.",
      "30 out of 100 is 30%."
    ],
    tip: "Percent means out of 100. Change the bottom number to 100."
  },
  {
    id: "m16", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Movies", topic: "Measure: time", syllabus: "Measure: time",
    stem: "A film starts at 2:45 pm. It lasts 30 minutes. When does it end?",
    target: null,
    answers: [
      { text: "3:15 pm", type: "correct" },
      { text: "2:75 pm", type: "trap", mis: "Treating time like normal numbers", why: "An hour has 60 minutes, not 100. 2:75 is not a real time." },
      { text: "Last year", type: "dud", why: "A 30 minute film cannot end last year." }
    ],
    hint: "How many minutes until 3:00 pm?",
    steps: [
      "From 2:45 to 3:00 is 15 minutes.",
      "The film lasts 30 minutes, so 15 more minutes are left.",
      "3:00 plus 15 minutes is 3:15 pm."
    ],
    tip: "Count up to the next whole hour first."
  },
  {
    id: "m17", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Weather", topic: "Number: negative numbers", syllabus: "Number: negative numbers",
    stem: "It is -3 °C at night. By noon it is 5 degrees warmer. What is the temperature at noon?",
    target: "warmer",
    answers: [
      { text: "2 °C", type: "correct" },
      { text: "-8 °C", type: "trap", mis: "Moving the wrong way on the number line", why: "Warmer means the number goes up, not down." },
      { text: "8 °C", type: "trap", mis: "Ignoring the minus sign", why: "Start at -3, not at 3." },
      { text: "5 metres", type: "dud", why: "A temperature is in degrees, not metres." }
    ],
    hint: "Picture a number line. Start at -3 and move up.",
    steps: [
      "Start at -3.",
      "Warmer means count up 5: -2, -1, 0, 1, 2.",
      "You land on 2 °C."
    ],
    tip: "Warmer means up the number line. Colder means down."
  },
  {
    id: "m18", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Travel", topic: "Number: subtracting", syllabus: "Number: subtracting",
    stem: "A bus has 40 seats. 26 people are sitting on it. How many seats are empty?",
    target: "empty",
    answers: [
      { text: "14 seats", type: "correct" },
      { text: "66 seats", type: "trap", mis: "Adding when you should take away", why: "There cannot be more empty seats than seats. Take 26 away from 40." },
      { text: "40 buses", type: "dud", why: "There is only one bus." }
    ],
    hint: "Empty seats are the seats nobody is using.",
    steps: [
      "The bus has 40 seats.",
      "26 seats are used.",
      "40 - 26 = 14 seats are empty."
    ],
    tip: "Ask: should the answer be bigger or smaller than 40?"
  },
  {
    id: "m19", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Shopping", topic: "Number: percentages", syllabus: "Number: percentages",
    stem: "A T-shirt costs 20 coins. It is 25% off today. What is the new price?",
    target: "new",
    answers: [
      { text: "15 coins", type: "correct" },
      { text: "5 coins", type: "trap", mis: "Giving the discount, not the new price", why: "5 coins is how much you save. The new price is 20 - 5." },
      { text: "45 T-shirts", type: "dud", why: "The question asks for a price." }
    ],
    hint: "First find 25% of 20. Then think about what the question asks for.",
    steps: [
      "25% is a quarter.",
      "A quarter of 20 coins is 5 coins. That is the saving.",
      "New price: 20 - 5 = 15 coins."
    ],
    tip: "Read the end of the question again: saving or new price?"
  },
  {
    id: "m20", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Food", topic: "Number: ratio", syllabus: "Number: ratio",
    stem: "A juice recipe uses 2 cups of mango for every 3 cups of water. You use 6 cups of mango. How much water do you need?",
    target: null,
    answers: [
      { text: "9 cups", type: "correct" },
      { text: "7 cups", type: "trap", mis: "Adding the same amount instead of scaling", why: "You did not add 4 to the mango. You made it 3 times bigger, so make the water 3 times bigger too." },
      { text: "6 lemons", type: "dud", why: "The recipe has no lemons." }
    ],
    hint: "How many times bigger is 6 than 2?",
    steps: [
      "2 cups of mango became 6 cups. That is 3 times as much.",
      "Do the same to the water: 3 cups × 3.",
      "You need 9 cups of water."
    ],
    tip: "In a ratio, multiply both parts by the same number."
  },
  {
    id: "m21", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Sports", topic: "Measure: perimeter and area", syllabus: "Measure: perimeter and area",
    stem: "A small football pitch is 20 m long and 10 m wide. How much fence goes all the way around it?",
    target: "around",
    answers: [
      { text: "60 m", type: "correct" },
      { text: "200 m", type: "trap", mis: "Mixing up area and perimeter", why: "200 is the area in square metres. Around the edge means adding the sides." },
      { text: "30 m", type: "trap", mis: "Adding only two sides", why: "A rectangle has four sides: 20 + 10 + 20 + 10." },
      { text: "20 footballs", type: "dud", why: "The question asks for a length of fence." }
    ],
    hint: "Walk around the pitch in your head. How many sides do you pass?",
    steps: [
      "The pitch has four sides: 20 m, 10 m, 20 m and 10 m.",
      "Add them: 20 + 10 + 20 + 10.",
      "The fence is 60 m long."
    ],
    tip: "\"Around\" means perimeter. Add all the sides."
  },
  {
    id: "m22", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Gaming", topic: "Number: order of operations", syllabus: "Number: order of operations",
    stem: "Your score is 5 + 3 × 4. What is your score?",
    target: null,
    answers: [
      { text: "17", type: "correct" },
      { text: "32", type: "trap", mis: "Working from left to right every time", why: "Multiply before you add: 3 × 4 = 12, then 5 + 12." },
      { text: "-100", type: "dud", why: "There is no minus sign, so the score cannot be negative." }
    ],
    hint: "Which comes first, the + or the ×?",
    steps: [
      "Multiply first: 3 × 4 = 12.",
      "Then add: 5 + 12.",
      "The score is 17."
    ],
    tip: "Multiply and divide before you add and subtract."
  },
  {
    id: "m23", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Weather", topic: "Statistics: mean", syllabus: "Statistics: mean",
    stem: "It rains 2 mm, 4 mm and 9 mm on three days. What is the mean rainfall per day?",
    target: "mean",
    answers: [
      { text: "5 mm", type: "correct" },
      { text: "15 mm", type: "trap", mis: "Adding but not dividing", why: "15 mm is the total. Share it over the 3 days." },
      { text: "4 mm", type: "trap", mis: "Choosing the middle number", why: "4 is the median. The mean shares the total equally." },
      { text: "9 days", type: "dud", why: "There were only three days." }
    ],
    hint: "Find the total first. Then share it equally.",
    steps: [
      "Add the rain: 2 + 4 + 9 = 15 mm.",
      "There are 3 days.",
      "15 ÷ 3 = 5 mm per day."
    ],
    tip: "Mean: add them all, then divide by how many there are."
  },
  {
    id: "m24", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Phones", topic: "Number: fractions and percentages", syllabus: "Number: fractions and percentages",
    stem: "Your phone battery starts full at 100%. You use 3/4 of it. How much battery is left?",
    target: "left",
    answers: [
      { text: "25%", type: "correct" },
      { text: "75%", type: "trap", mis: "Giving the part used, not the part left", why: "75% is what you used. What is left is 100% - 75%." },
      { text: "4 phones", type: "dud", why: "You only have one phone." }
    ],
    hint: "First change 3/4 into a percent.",
    steps: [
      "3/4 is the same as 75%.",
      "You used 75%.",
      "100% - 75% = 25% is left."
    ],
    tip: "Check if the question asks for the part used or the part left."
  },
  {
    id: "m25", subject: "Math", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Shopping", topic: "Number: percentage change", syllabus: "Number: percentage change",
    stem: "A game costs 100 coins. The price goes up 10%. Then the new price goes down 10%. What is the price now?",
    target: null,
    answers: [
      { text: "99 coins", type: "correct" },
      { text: "100 coins", type: "trap", mis: "Thinking up and down by the same percent cancel out", why: "The 10% off is taken from 110, not from 100. 10% of 110 is 11." },
      { text: "10 games", type: "dud", why: "The question asks for a price." }
    ],
    hint: "Work out the price after the first change before you do the second.",
    steps: [
      "Up 10%: 100 + 10 = 110 coins.",
      "Down 10% of 110: 110 - 11.",
      "The price is now 99 coins."
    ],
    tip: "Each percent is taken from the price at that moment."
  },
  {
    id: "m26", subject: "Math", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Travel", topic: "Measure: speed", syllabus: "Measure: speed",
    stem: "A train travels 150 km in 2 hours. What is its average speed?",
    target: null,
    answers: [
      { text: "75 km/h", type: "correct" },
      { text: "300 km/h", type: "trap", mis: "Multiplying instead of dividing", why: "Speed is distance ÷ time, not distance × time." },
      { text: "2 trains", type: "dud", why: "The question asks for a speed." }
    ],
    hint: "Speed tells you how far it goes in one hour.",
    steps: [
      "Speed = distance ÷ time.",
      "150 km ÷ 2 hours.",
      "The speed is 75 km/h."
    ],
    tip: "The unit km/h means km divided by hours."
  },
  {
    id: "m27", subject: "Math", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Puzzles", topic: "Algebra: solving equations", syllabus: "Algebra: solving equations",
    stem: "Ali thinks of a number. He doubles it and then adds 7. He gets 19. What was his number?",
    target: null,
    answers: [
      { text: "6", type: "correct" },
      { text: "12", type: "trap", mis: "Undoing only one step", why: "19 - 7 = 12 is the double. You still need to halve it." },
      { text: "45", type: "trap", mis: "Doing the steps forward, not backward", why: "You must undo the steps: take away 7, then divide by 2." },
      { text: "Ali has no number", type: "dud", why: "The question says Ali thinks of a number." }
    ],
    hint: "Undo the last step first.",
    steps: [
      "The last step was add 7. Undo it: 19 - 7 = 12.",
      "Before that he doubled. Undo it: 12 ÷ 2 = 6.",
      "Check: 6 × 2 + 7 = 19."
    ],
    tip: "Work backward and do the opposite of each step."
  },
  {
    id: "m28", subject: "Math", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Food", topic: "Probability: single events", syllabus: "Probability: single events",
    stem: "A bag has 3 red sweets and 5 blue sweets. You take one without looking. What is the chance it is red?",
    target: null,
    answers: [
      { text: "3/8", type: "correct" },
      { text: "3/5", type: "trap", mis: "Comparing one group to the other, not to all", why: "There are 8 sweets in total, so the bottom number is 8." },
      { text: "8 red sweets", type: "dud", why: "The bag only has 3 red sweets." }
    ],
    hint: "How many sweets are in the bag altogether?",
    steps: [
      "Total sweets: 3 + 5 = 8.",
      "Red sweets: 3.",
      "Chance of red = 3 out of 8 = 3/8."
    ],
    tip: "Chance = the ones you want ÷ all of them."
  },
  {
    id: "m29", subject: "Math", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Travel", topic: "Measure: scale", syllabus: "Measure: scale",
    stem: "On a map, 1 cm stands for 5 km. Two towns are 7 cm apart on the map. How far apart are they really?",
    target: "really",
    answers: [
      { text: "35 km", type: "correct" },
      { text: "12 km", type: "trap", mis: "Adding instead of multiplying", why: "Each cm is 5 km, so 7 cm is 7 groups of 5 km." },
      { text: "7 km", type: "trap", mis: "Forgetting to use the scale", why: "7 cm is the map distance. The real distance is much bigger." },
      { text: "35 maps", type: "dud", why: "The question asks for a distance." }
    ],
    hint: "How many km does each cm stand for?",
    steps: [
      "1 cm stands for 5 km.",
      "The towns are 7 cm apart on the map.",
      "7 × 5 = 35 km."
    ],
    tip: "Multiply the map distance by the scale."
  },
  {
    id: "m30", subject: "Math", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Sports", topic: "Measure: area of a triangle", syllabus: "Measure: area of a triangle",
    stem: "A triangle flag has a base of 6 cm and a height of 4 cm. What is its area?",
    target: "triangle",
    answers: [
      { text: "12 cm²", type: "correct" },
      { text: "24 cm²", type: "trap", mis: "Forgetting to halve for a triangle", why: "6 × 4 = 24 is a rectangle. A triangle is half of that." },
      { text: "10 flags", type: "dud", why: "The question asks for an area." }
    ],
    hint: "A triangle is half of a rectangle.",
    steps: [
      "A rectangle 6 cm by 4 cm has area 24 cm².",
      "The triangle is half of it.",
      "24 ÷ 2 = 12 cm²."
    ],
    tip: "Triangle area = base × height ÷ 2."
  },
  {
    id: "m31", subject: "Math", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Puzzles", topic: "Number: negative numbers", syllabus: "Number: negative numbers",
    stem: "What is -4 × -3?",
    target: null,
    answers: [
      { text: "12", type: "correct" },
      { text: "-12", type: "trap", mis: "Thinking two negatives make a negative", why: "A negative times a negative is positive." },
      { text: "-7", type: "trap", mis: "Adding instead of multiplying", why: "-4 + -3 = -7, but the question says multiply." },
      { text: "3 cm", type: "dud", why: "This question has no units." }
    ],
    hint: "What happens to the sign when you multiply two negatives?",
    steps: [
      "First ignore the signs: 4 × 3 = 12.",
      "Two negatives multiplied give a positive.",
      "So -4 × -3 = 12."
    ],
    tip: "Same signs give a positive. Different signs give a negative."
  },
  {
    id: "m32", subject: "Math", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Kitchen lab", topic: "Measure: converting units", syllabus: "Measure: converting units",
    stem: "A bottle holds 1.5 litres. How many millilitres is that?",
    target: null,
    answers: [
      { text: "1,500 mL", type: "correct" },
      { text: "150 mL", type: "trap", mis: "Using the wrong conversion number", why: "1 litre is 1,000 mL, not 100 mL." },
      { text: "15 bottles", type: "dud", why: "There is only one bottle." }
    ],
    hint: "How many mL are in 1 litre?",
    steps: [
      "1 litre = 1,000 mL.",
      "1.5 litres = 1.5 × 1,000.",
      "That is 1,500 mL."
    ],
    tip: "Milli means a thousandth, so 1 L = 1,000 mL."
  },
  {
    id: "m33", subject: "Math", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Puzzles", topic: "Algebra: sequences", syllabus: "Algebra: sequences",
    stem: "A pattern goes 3, 7, 11, 15. What is the 10th number in the pattern?",
    target: null,
    answers: [
      { text: "39", type: "correct" },
      { text: "43", type: "trap", mis: "Counting one step too many", why: "From the 1st to the 10th number there are 9 steps of 4, not 10." },
      { text: "40", type: "trap", mis: "Multiplying the position by the step only", why: "4 × 10 = 40, but the pattern starts at 3, not 4. The rule is 4n - 1." },
      { text: "Blue", type: "dud", why: "The pattern has numbers, not colours." }
    ],
    hint: "How much does the pattern go up each time?",
    steps: [
      "The pattern goes up by 4 each time.",
      "From the 1st to the 10th number there are 9 steps.",
      "3 + 9 × 4 = 3 + 36 = 39."
    ],
    tip: "Count the steps between numbers, not the numbers."
  },
  {
    id: "m34", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Money", topic: "Number: compound interest", syllabus: "Number: compound interest",
    stem: "You save 1,000 coins at 10% interest a year. The interest is added to your savings each year. How much do you have after 2 years?",
    target: null,
    answers: [
      { text: "1,210 coins", type: "correct" },
      { text: "1,200 coins", type: "trap", mis: "Using simple interest instead of compound", why: "In year 2 you earn interest on 1,100, not on 1,000." },
      { text: "10 coins", type: "dud", why: "Your savings grow. They cannot fall to 10 coins." }
    ],
    hint: "Work out year 1 first. What is the total at the end of year 1?",
    steps: [
      "Year 1: 10% of 1,000 = 100. Total 1,100.",
      "Year 2: 10% of 1,100 = 110. Total 1,210.",
      "Or: 1,000 × 1.1 × 1.1 = 1,210."
    ],
    tip: "Compound interest grows on the new total each year."
  },
  {
    id: "m35", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Travel", topic: "Algebra: linear rules", syllabus: "Algebra: linear rules",
    stem: "A taxi charges 3 coins to start, then 2 coins for every km. Which rule gives the cost C for a trip of d km?",
    target: null,
    answers: [
      { text: "C = 2d + 3", type: "correct" },
      { text: "C = 3d + 2", type: "trap", mis: "Mixing up the start fee and the rate", why: "The 2 coins are paid for every km, so the 2 goes with d." },
      { text: "C = 5 km", type: "dud", why: "A cost is in coins, not km." }
    ],
    hint: "Which number happens once, and which happens for every km?",
    steps: [
      "The start fee is paid once: + 3.",
      "Each km costs 2 coins: 2 × d.",
      "So C = 2d + 3."
    ],
    tip: "The rate goes with the letter. The fixed fee stands alone."
  },
  {
    id: "m36", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Shopping", topic: "Number: reverse percentages", syllabus: "Number: reverse percentages",
    stem: "After a 20% discount, a jacket costs 80 coins. What was the price before the discount?",
    target: "before",
    answers: [
      { text: "100 coins", type: "correct" },
      { text: "96 coins", type: "trap", mis: "Taking the percent of the new price", why: "The 20% came off the old price, not off 80. 80 coins is 80% of the old price." },
      { text: "20 jackets", type: "dud", why: "The question asks for a price." }
    ],
    hint: "80 coins is what percent of the old price?",
    steps: [
      "After 20% off, you pay 80% of the old price.",
      "So 80% = 80 coins, and 1% = 1 coin.",
      "100% = 100 coins."
    ],
    tip: "Find what percent the new price is, then work back to 100%."
  },
  {
    id: "m37", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Puzzles", topic: "Algebra: quadratic equations", syllabus: "Algebra: quadratic equations",
    stem: "Solve x² - 5x + 6 = 0.",
    target: null,
    answers: [
      { text: "x = 2 or x = 3", type: "correct" },
      { text: "x = -2 or x = -3", type: "trap", mis: "Getting the signs wrong", why: "Check x = -2: 4 + 10 + 6 = 20, not 0." },
      { text: "x = 6 cm", type: "dud", why: "This equation has no units." }
    ],
    hint: "Find two numbers that multiply to 6 and add to -5.",
    steps: [
      "Two numbers that multiply to 6 and add to -5: -2 and -3.",
      "So (x - 2)(x - 3) = 0.",
      "x - 2 = 0 or x - 3 = 0, so x = 2 or x = 3."
    ],
    tip: "Put your answers back into the equation to check."
  },
  {
    id: "m38", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Games", topic: "Probability: combined events", syllabus: "Probability: combined events",
    stem: "You flip a fair coin twice. What is the chance of getting two heads?",
    target: null,
    answers: [
      { text: "1/4", type: "correct" },
      { text: "1/2", type: "trap", mis: "Adding chances instead of multiplying", why: "Each flip is 1/2. Both together: 1/2 × 1/2 = 1/4." },
      { text: "1/3", type: "trap", mis: "Treating outcomes as equally likely when they are not", why: "There are 4 equal outcomes: HH, HT, TH, TT. Only HH works." },
      { text: "2 coins", type: "dud", why: "The question asks for a chance." }
    ],
    hint: "List every possible result of two flips.",
    steps: [
      "The results are HH, HT, TH and TT.",
      "That is 4 equally likely results.",
      "Only HH is two heads, so the chance is 1/4."
    ],
    tip: "For \"this and then that\", multiply the chances."
  },
  {
    id: "m39", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Nature", topic: "Number: standard form", syllabus: "Number: standard form",
    stem: "A grain of pollen is 0.00052 m wide. Write 0.00052 in standard form.",
    target: null,
    answers: [
      { text: "5.2 × 10⁻⁴", type: "correct" },
      { text: "5.2 × 10⁴", type: "trap", mis: "Using a positive power for a small number", why: "10⁴ makes a big number, 52,000. 0.00052 is tiny." },
      { text: "52 kg", type: "dud", why: "The question is about a width, not a weight." }
    ],
    hint: "How many places must the point move to make 5.2?",
    steps: [
      "Move the point to get a number from 1 to 10: 5.2.",
      "The point moved 4 places to the right.",
      "A small number has a negative power: 5.2 × 10⁻⁴."
    ],
    tip: "Numbers smaller than 1 have a negative power of 10."
  },
  {
    id: "m40", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "School", topic: "Geometry: Pythagoras", syllabus: "Geometry: Pythagoras",
    stem: "A ladder is 5 m long. Its foot is 3 m from a wall. How high up the wall does the ladder reach?",
    target: null,
    answers: [
      { text: "4 m", type: "correct" },
      { text: "5.8 m", type: "trap", mis: "Adding the squares when you should subtract", why: "The ladder is the longest side. 5² - 3² = 16, not 5² + 3²." },
      { text: "3 ladders", type: "dud", why: "There is only one ladder." }
    ],
    hint: "Which side of the triangle is the ladder?",
    steps: [
      "The ladder is the longest side, the hypotenuse: 5 m.",
      "Height² = 5² - 3² = 25 - 9 = 16.",
      "Height = √16 = 4 m."
    ],
    tip: "To find a short side, subtract the squares."
  },
  {
    id: "m41", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Market", topic: "Number: best value", syllabus: "Number: best value",
    stem: "A 500 g pack of rice costs 4 coins. A 2 kg pack costs 14 coins. Which pack is better value?",
    target: null,
    answers: [
      { text: "The 2 kg pack, 0.7 coins per 100 g", type: "correct" },
      { text: "The 500 g pack, because it costs less", type: "trap", mis: "Comparing prices without comparing amounts", why: "It costs less, but you get less. Per 100 g it costs 0.8 coins." },
      { text: "Rice is free", type: "dud", why: "Both packs have a price." }
    ],
    hint: "Find the cost of the same amount in each pack.",
    steps: [
      "500 g for 4 coins: 4 ÷ 5 = 0.8 coins per 100 g.",
      "2 kg = 2,000 g for 14 coins: 14 ÷ 20 = 0.7 coins per 100 g.",
      "0.7 is less, so the 2 kg pack is better value."
    ],
    tip: "Compare the price of the same amount."
  },
  {
    id: "m42", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Phones", topic: "Number: depreciation", syllabus: "Number: depreciation",
    stem: "A phone loses 20% of its value each year. It cost 500 coins new. What is it worth after 2 years?",
    target: null,
    answers: [
      { text: "320 coins", type: "correct" },
      { text: "300 coins", type: "trap", mis: "Taking the percent of the first price every year", why: "In year 2 it loses 20% of 400, not 20% of 500." },
      { text: "2 phones", type: "dud", why: "The question asks for a value." }
    ],
    hint: "Find the value after year 1 first.",
    steps: [
      "Year 1: 20% of 500 = 100. Value 400.",
      "Year 2: 20% of 400 = 80. Value 320.",
      "Or: 500 × 0.8 × 0.8 = 320."
    ],
    tip: "Each year's percent is taken from the value at the start of that year."
  },
  {
    id: "m43", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Sports", topic: "Algebra: gradient", syllabus: "Algebra: gradient",
    stem: "A line on a training graph goes through (1, 2) and (3, 8). What is its gradient?",
    target: null,
    answers: [
      { text: "3", type: "correct" },
      { text: "1/3", type: "trap", mis: "Putting the x change over the y change", why: "Gradient is the change in y ÷ the change in x: 6 ÷ 2." },
      { text: "A hill", type: "dud", why: "Here the gradient is a number, not a place." }
    ],
    hint: "How much does y change? How much does x change?",
    steps: [
      "Change in y: 8 - 2 = 6.",
      "Change in x: 3 - 1 = 2.",
      "Gradient = 6 ÷ 2 = 3."
    ],
    tip: "Gradient = up ÷ across."
  },
  {
    id: "m44", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Puzzles", topic: "Algebra: inequalities", syllabus: "Algebra: inequalities",
    stem: "Solve -2x > 6.",
    target: null,
    answers: [
      { text: "x < -3", type: "correct" },
      { text: "x > -3", type: "trap", mis: "Forgetting to flip the sign when dividing by a negative", why: "Dividing by -2 flips > to <. Test x = 0: -2 × 0 > 6 is false." },
      { text: "x > 600 km", type: "dud", why: "This question has no units." }
    ],
    hint: "What happens to the sign when you divide by a negative number?",
    steps: [
      "Divide both sides by -2.",
      "Dividing by a negative flips the sign: > becomes <.",
      "So x < -3. Check x = -4: 8 > 6 is true."
    ],
    tip: "Test a number in your answer to check the sign."
  },
  {
    id: "m45", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "School", topic: "Probability: conditional", syllabus: "Probability: conditional",
    stem: "In a class of 30, 12 students play football. 4 of the football players also play chess. You pick a football player at random. What is the chance they play chess?",
    target: "football",
    answers: [
      { text: "1/3", type: "correct" },
      { text: "4/30", type: "trap", mis: "Using the whole group instead of the group you picked from", why: "You picked from the 12 football players, so the chance is 4/12." },
      { text: "30 chess boards", type: "dud", why: "The question asks for a chance." }
    ],
    hint: "Who are you picking from: the whole class or only the football players?",
    steps: [
      "You only pick from the football players: 12 students.",
      "4 of them play chess.",
      "4/12 = 1/3."
    ],
    tip: "Find the group you are choosing from. That is the bottom number."
  },
  {
    id: "m46", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Algebra: geometric sequences", syllabus: "Algebra: geometric sequences",
    stem: "A video gets 100 views on day 1. The views double every day. How many views does it get on day 6?",
    target: null,
    answers: [
      { text: "3,200", type: "correct" },
      { text: "6,400", type: "trap", mis: "Counting one doubling too many", why: "From day 1 to day 6 there are 5 doublings: 100 × 2⁵." },
      { text: "600", type: "trap", mis: "Adding instead of doubling", why: "600 is what you get if the views go up by 100 a day. Doubling multiplies." },
      { text: "6 videos", type: "dud", why: "There is only one video." }
    ],
    hint: "How many times do the views double between day 1 and day 6?",
    steps: [
      "Day 1: 100. Each day multiply by 2.",
      "Day 2: 200, day 3: 400, day 4: 800, day 5: 1,600.",
      "Day 6: 3,200."
    ],
    tip: "Count the jumps between days, not the days."
  },
  {
    id: "m47", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Geometry: similar shapes", syllabus: "Geometry: similar shapes",
    stem: "A photo is enlarged so every length is 3 times bigger. How many times bigger is its area?",
    target: "area",
    answers: [
      { text: "9 times", type: "correct" },
      { text: "3 times", type: "trap", mis: "Thinking area grows like length", why: "Area uses two lengths, so it grows 3 × 3 times." },
      { text: "The photo turns black", type: "dud", why: "Making a photo bigger does not change its colour." }
    ],
    hint: "Try a 1 cm by 1 cm square. What happens when each side is 3 times bigger?",
    steps: [
      "A 1 cm by 1 cm square has area 1 cm².",
      "Make each side 3 times bigger: 3 cm by 3 cm.",
      "The area is 9 cm², so 9 times bigger."
    ],
    tip: "Length scale k means area scale k²."
  },
  {
    id: "m48", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "School", topic: "Statistics: mean", syllabus: "Statistics: mean",
    stem: "The mean of 4 test scores is 70. A fifth test score of 90 is added. What is the new mean?",
    target: null,
    answers: [
      { text: "74", type: "correct" },
      { text: "80", type: "trap", mis: "Averaging the old mean and the new score", why: "The old mean stands for 4 tests, so it counts 4 times. 90 counts once." },
      { text: "90 tests", type: "dud", why: "There are only 5 tests." }
    ],
    hint: "Find the total of the first 4 scores.",
    steps: [
      "Total of 4 scores: 4 × 70 = 280.",
      "Add the new score: 280 + 90 = 370.",
      "New mean: 370 ÷ 5 = 74."
    ],
    tip: "Go back to the total, then divide by the new count."
  },
  {
    id: "m49", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Puzzles", topic: "Algebra: rearranging formulas", syllabus: "Algebra: rearranging formulas",
    stem: "The area of a circle is A = πr². Make r the subject.",
    target: null,
    answers: [
      { text: "r = √(A/π)", type: "correct" },
      { text: "r = A/(2π)", type: "trap", mis: "Halving instead of taking a square root", why: "r is squared, so you undo it with a square root, not by dividing by 2." },
      { text: "r = π", type: "dud", why: "π is a fixed number. r changes when A changes." }
    ],
    hint: "Undo the π first. Then undo the square.",
    steps: [
      "Divide both sides by π: A/π = r².",
      "Undo the square with a square root.",
      "r = √(A/π)."
    ],
    tip: "Undo each step in reverse order."
  },
  {
    id: "m50", subject: "Math", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Sports", topic: "Geometry: trigonometry", syllabus: "Geometry: trigonometry",
    stem: "A ramp makes a right triangle. The side opposite angle θ is 5 m. The hypotenuse is 10 m. What is θ?",
    target: null,
    answers: [
      { text: "30°", type: "correct" },
      { text: "60°", type: "trap", mis: "Using cos when you need sin", why: "Opposite over hypotenuse is sin. sin θ = 0.5 gives 30°." },
      { text: "10 m", type: "dud", why: "The question asks for an angle, not a length." }
    ],
    hint: "Which ratio uses the opposite side and the hypotenuse?",
    steps: [
      "Opposite and hypotenuse means sin.",
      "sin θ = 5 ÷ 10 = 0.5.",
      "θ = 30°."
    ],
    tip: "SOH CAH TOA: label the sides first."
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
  {
    id: "s7", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Kitchen lab", topic: "Matter: changes of state", syllabus: "Matter: changes of state",
    stem: "An ice cube is left on a warm table. What happens to it?",
    target: null,
    answers: [
      { text: "It melts into liquid water", type: "correct" },
      { text: "It turns straight into gas", type: "trap", mis: "Mixing up melting and evaporating", why: "Melting turns a solid into a liquid. Turning into a gas is evaporating, and that comes later." },
      { text: "It turns into a rock", type: "dud", why: "Ice is frozen water. It cannot become rock." }
    ],
    hint: "Ice is a solid. What does a solid become when it warms up?",
    steps: [
      "Ice is solid water.",
      "Warmth makes a solid melt.",
      "The ice becomes liquid water on the table."
    ],
    tip: "Solid to liquid is melting. Liquid to gas is evaporating."
  },
  {
    id: "s8", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Tech", topic: "Forces: magnets", syllabus: "Forces: magnets",
    stem: "Which of these does a magnet pull?",
    target: null,
    answers: [
      { text: "An iron nail", type: "correct" },
      { text: "A copper coin", type: "trap", mis: "Thinking all metals are magnetic", why: "Only some metals, like iron, steel, nickel and cobalt, are pulled. Copper is not." },
      { text: "A cloud", type: "dud", why: "A cloud is made of water drops. Magnets do not pull it." }
    ],
    hint: "Not every metal is magnetic. Which metal is?",
    steps: [
      "Magnets pull iron, steel, nickel and cobalt.",
      "Copper is a metal, but it is not magnetic.",
      "So the magnet pulls the iron nail."
    ],
    tip: "Iron and steel stick to magnets. Most other metals do not."
  },
  {
    id: "s9", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Nature", topic: "Light: shadows", syllabus: "Light: shadows",
    stem: "Why do you have a shadow on a sunny day?",
    target: null,
    answers: [
      { text: "Your body blocks some of the sunlight", type: "correct" },
      { text: "Your body gives out dark light", type: "trap", mis: "Thinking a shadow is a thing, not missing light", why: "There is no dark light. A shadow is a place the light cannot reach." },
      { text: "Your shadow is your twin", type: "dud", why: "A shadow is not a person." }
    ],
    hint: "Can light go through your body?",
    steps: [
      "Sunlight travels in straight lines.",
      "Your body stops the light.",
      "The dark patch behind you, where no light lands, is your shadow."
    ],
    tip: "A shadow is where light is blocked."
  },
  {
    id: "s10", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Human body", topic: "Light: how we see", syllabus: "Light: how we see",
    stem: "How do you see a book on a table?",
    target: null,
    answers: [
      { text: "Light bounces off the book into your eyes", type: "correct" },
      { text: "Light comes out of your eyes onto the book", type: "trap", mis: "Thinking eyes send out light", why: "Eyes take light in. In a dark room you cannot see the book." },
      { text: "The book shouts at you", type: "dud", why: "Books do not make sounds, and we see with light." }
    ],
    hint: "Can you see the book when the room is totally dark?",
    steps: [
      "Light from a lamp or the Sun lands on the book.",
      "Some light bounces off the book.",
      "That light enters your eyes, and you see the book."
    ],
    tip: "We see things when light from them enters our eyes."
  },
  {
    id: "s11", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Human body", topic: "Body: organs", syllabus: "Body: organs",
    stem: "What is the main job of your heart?",
    target: "heart",
    answers: [
      { text: "It pumps blood around your body", type: "correct" },
      { text: "It moves air in and out of your body", type: "trap", mis: "Mixing up the heart and the lungs", why: "Breathing is the job of the lungs." },
      { text: "It stores your memories", type: "dud", why: "Memories are stored in the brain." }
    ],
    hint: "Put your hand on your chest. What do you feel beating?",
    steps: [
      "The heart is a strong muscle.",
      "Each beat squeezes blood out.",
      "The blood travels around the whole body."
    ],
    tip: "Heart pumps blood. Lungs move air."
  },
  {
    id: "s12", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Animals", topic: "Living things: food chains", syllabus: "Living things: food chains",
    stem: "A food chain is grass → rabbit → fox. What does the arrow from grass to rabbit show?",
    target: "arrow",
    answers: [
      { text: "The rabbit eats the grass, so energy goes to the rabbit", type: "correct" },
      { text: "The grass eats the rabbit", type: "trap", mis: "Reading food chain arrows the wrong way", why: "The arrow points to the eater. It shows where the energy goes." },
      { text: "The fox plants the grass", type: "dud", why: "Foxes do not plant anything." }
    ],
    hint: "The arrow points to where the energy goes.",
    steps: [
      "Grass gets energy from sunlight.",
      "The rabbit eats the grass and gets its energy.",
      "So the arrow points from the grass to the rabbit."
    ],
    tip: "Arrows in a food chain point to the eater."
  },
  {
    id: "s13", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Nature", topic: "Space: day and night", syllabus: "Space: day and night",
    stem: "Why do we have day and night?",
    target: null,
    answers: [
      { text: "The Earth spins around once every day", type: "correct" },
      { text: "The Sun goes around the Earth every day", type: "trap", mis: "Thinking the Sun moves around the Earth", why: "The Sun looks like it moves, but it is the Earth that turns." },
      { text: "The Earth goes around the Sun every day", type: "trap", mis: "Mixing up spinning and orbiting", why: "One trip around the Sun takes a year, not a day." },
      { text: "The Moon switches the Sun off", type: "dud", why: "The Moon cannot switch off the Sun." }
    ],
    hint: "Is the Earth still, or is it turning?",
    steps: [
      "The Earth spins like a ball on a finger.",
      "The side facing the Sun has day.",
      "The side facing away has night. One spin takes 24 hours."
    ],
    tip: "Spin gives day and night. A trip around the Sun gives a year."
  },
  {
    id: "s14", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Weather", topic: "Waves: light and sound", syllabus: "Waves: light and sound",
    stem: "In a storm, thunder and lightning happen at the same time. Why do you see the lightning first?",
    target: "first",
    answers: [
      { text: "Light travels much faster than sound", type: "correct" },
      { text: "The lightning really happens first", type: "trap", mis: "Thinking what you notice first happened first", why: "They happen together. The sound just takes longer to reach you." },
      { text: "Your ears are asleep", type: "dud", why: "Your ears work. The sound simply arrives later." }
    ],
    hint: "Which is faster, light or sound?",
    steps: [
      "Thunder and lightning start at the same moment.",
      "Light reaches you almost at once.",
      "Sound is much slower, so you hear the thunder later."
    ],
    tip: "Light is about a million times faster than sound."
  },
  {
    id: "s15", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Sports", topic: "Forces: gravity", syllabus: "Forces: gravity",
    stem: "You drop a heavy ball and a light ball from the same height at the same time. Air resistance is very small. Which ball lands first?",
    target: null,
    answers: [
      { text: "They land at about the same time", type: "correct" },
      { text: "The heavy ball", type: "trap", mis: "Thinking heavier things fall faster", why: "When air resistance is tiny, gravity speeds up all objects in the same way." },
      { text: "Neither, they float up", type: "dud", why: "Dropped balls fall down." }
    ],
    hint: "Does gravity speed up heavy things more than light things?",
    steps: [
      "Gravity pulls both balls down.",
      "With little air resistance, both speed up at the same rate.",
      "So they land at about the same time."
    ],
    tip: "Without air resistance, all objects fall at the same rate."
  },
  {
    id: "s16", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Travel", topic: "Space: seasons", syllabus: "Space: seasons",
    stem: "Why is it hotter in summer than in winter?",
    target: null,
    answers: [
      { text: "Your half of the Earth is tilted toward the Sun", type: "correct" },
      { text: "The Earth is closer to the Sun in summer", type: "trap", mis: "Thinking seasons come from distance", why: "When it is summer in the north, it is winter in the south. Distance cannot explain that." },
      { text: "The Sun gets bigger in summer", type: "dud", why: "The Sun stays the same size all year." }
    ],
    hint: "When it is summer in Europe, it is winter in Australia. What could cause that?",
    steps: [
      "The Earth is tilted.",
      "In summer your half leans toward the Sun.",
      "Sunlight hits more directly and days are longer, so it is hotter."
    ],
    tip: "Seasons come from the tilt, not the distance."
  },
  {
    id: "s17", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Weather", topic: "Energy: insulation", syllabus: "Energy: insulation",
    stem: "Why does a wool jumper keep you warm on a cold day?",
    target: null,
    answers: [
      { text: "It traps air and slows down heat leaving your body", type: "correct" },
      { text: "It makes heat by itself", type: "trap", mis: "Thinking clothes make heat", why: "A jumper left on a chair stays cold. It only slows heat loss." },
      { text: "It is made of sunshine", type: "dud", why: "Wool comes from sheep, not sunshine." }
    ],
    hint: "Does a jumper on a chair feel warm?",
    steps: [
      "Your body makes heat.",
      "Heat moves from your warm body to the cold air.",
      "The wool traps air, which slows this heat loss."
    ],
    tip: "Insulators slow heat down. They do not make heat."
  },
  {
    id: "s18", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Nature", topic: "Matter: evaporation", syllabus: "Matter: evaporation",
    stem: "Wet clothes dry on a washing line. Where does the water go?",
    target: null,
    answers: [
      { text: "It evaporates into the air as water vapour", type: "correct" },
      { text: "It just disappears", type: "trap", mis: "Thinking water can vanish", why: "Water does not vanish. It turns into a gas in the air." },
      { text: "It turns into salt", type: "dud", why: "Water does not turn into salt." }
    ],
    hint: "Water can be a solid, a liquid or a gas.",
    steps: [
      "The water in the clothes is a liquid.",
      "Warm air and wind help it turn into a gas.",
      "The gas, water vapour, mixes into the air."
    ],
    tip: "Water that dries up has turned into a gas."
  },
  {
    id: "s19", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Tech", topic: "Electricity: conductors", syllabus: "Electricity: conductors",
    stem: "Which material lets electricity flow through it easily?",
    target: "easily",
    answers: [
      { text: "Copper", type: "correct" },
      { text: "Plastic", type: "trap", mis: "Mixing up conductors and insulators", why: "Plastic is an insulator. It covers wires to keep us safe." },
      { text: "Sunlight", type: "dud", why: "Sunlight is not a material." }
    ],
    hint: "What are the wires inside a cable made of?",
    steps: [
      "Metals let electricity flow. They are conductors.",
      "Plastic stops electricity. It is an insulator.",
      "Copper is a metal, so it conducts well."
    ],
    tip: "Metals conduct. Plastic, rubber and wood insulate."
  },
  {
    id: "s20", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Space", topic: "Forces: mass and weight", syllabus: "Forces: mass and weight",
    stem: "An astronaut has a mass of 60 kg on Earth. What is her mass on the Moon?",
    target: "mass",
    answers: [
      { text: "60 kg", type: "correct" },
      { text: "10 kg", type: "trap", mis: "Mixing up mass and weight", why: "Her weight is smaller on the Moon, but her mass, the amount of matter, stays the same." },
      { text: "60 km", type: "dud", why: "Mass is measured in kg, not km." }
    ],
    hint: "Does the amount of matter in her body change when she travels?",
    steps: [
      "Mass is the amount of matter in something.",
      "Travelling does not add or remove matter.",
      "So her mass is still 60 kg. Only her weight changes."
    ],
    tip: "Mass stays the same everywhere. Weight depends on gravity."
  },
  {
    id: "s21", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Nature", topic: "Plants: photosynthesis", syllabus: "Plants: photosynthesis",
    stem: "Which gas do green plants give out in sunlight?",
    target: "out",
    answers: [
      { text: "Oxygen", type: "correct" },
      { text: "Carbon dioxide", type: "trap", mis: "Mixing up what plants take in and give out", why: "In sunlight, plants take in carbon dioxide and give out oxygen." },
      { text: "Smoke", type: "dud", why: "Plants do not make smoke." }
    ],
    hint: "Which gas do animals need to breathe?",
    steps: [
      "Plants make food in sunlight. This is photosynthesis.",
      "They take in carbon dioxide and water.",
      "They give out oxygen."
    ],
    tip: "Photosynthesis: carbon dioxide in, oxygen out."
  },
  {
    id: "s22", subject: "Science", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Travel", topic: "Forces: floating", syllabus: "Forces: floating",
    stem: "A huge steel ship floats, but a small steel nail sinks. Why?",
    target: null,
    answers: [
      { text: "The ship's shape holds lots of air, so it pushes aside a lot of water", type: "correct" },
      { text: "Big things always float", type: "trap", mis: "Thinking size decides floating", why: "A big rock sinks. Floating depends on shape and density, not size." },
      { text: "The ship is made of paper", type: "dud", why: "The question says the ship is steel." }
    ],
    hint: "What is inside a ship besides steel?",
    steps: [
      "The ship is hollow and full of air.",
      "Its shape pushes aside a lot of water.",
      "The water pushes up hard enough to hold the ship up."
    ],
    tip: "Floating depends on shape and density, not only size."
  },
  {
    id: "s23", subject: "Science", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Tech", topic: "Matter: particles and heating", syllabus: "Matter: particles and heating",
    stem: "When a metal rod is heated, it gets a little longer. What happens to its particles?",
    target: null,
    answers: [
      { text: "They vibrate more and move slightly further apart", type: "correct" },
      { text: "The particles get bigger", type: "trap", mis: "Thinking particles grow when heated", why: "The particles stay the same size. The spaces between them grow." },
      { text: "New metal appears", type: "dud", why: "Heating cannot make new metal." }
    ],
    hint: "Does each particle change size, or does the space between them change?",
    steps: [
      "Heat gives the particles more energy.",
      "They vibrate more.",
      "They push slightly further apart, so the rod gets longer."
    ],
    tip: "Particles do not grow. The gaps between them do."
  },
  {
    id: "s24", subject: "Science", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Kitchen lab", topic: "Chemistry: burning", syllabus: "Chemistry: burning",
    stem: "A candle burns and gets smaller. Where did the wax go?",
    target: null,
    answers: [
      { text: "It reacted with oxygen and became gases such as carbon dioxide and water vapour", type: "correct" },
      { text: "It was destroyed", type: "trap", mis: "Thinking matter can be destroyed", why: "Matter is not destroyed. The atoms are now in gases you cannot see." },
      { text: "It turned into light bulbs", type: "dud", why: "Wax cannot turn into light bulbs." }
    ],
    hint: "Burning needs a gas from the air. Which one?",
    steps: [
      "Burning is a reaction with oxygen.",
      "The wax reacts and makes carbon dioxide and water vapour.",
      "These gases go into the air, so the candle gets smaller."
    ],
    tip: "In a reaction, atoms are rearranged, never destroyed."
  },
  {
    id: "s25", subject: "Science", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Sports", topic: "Biology: respiration", syllabus: "Biology: respiration",
    stem: "Your muscles use aerobic respiration during a long run. What does aerobic respiration make?",
    target: "make",
    answers: [
      { text: "Carbon dioxide, water and energy for the cells", type: "correct" },
      { text: "Oxygen and glucose", type: "trap", mis: "Mixing up respiration and photosynthesis", why: "Oxygen and glucose go in. They are used up, not made." },
      { text: "New bones", type: "dud", why: "Respiration releases energy. It does not build bones." }
    ],
    hint: "Respiration uses glucose and oxygen. What comes out?",
    steps: [
      "Glucose and oxygen go into the reaction.",
      "Energy is released for the cells.",
      "Carbon dioxide and water are made as waste."
    ],
    tip: "Respiration is the opposite of photosynthesis."
  },
  {
    id: "s26", subject: "Science", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Kitchen lab", topic: "Chemistry: pH", syllabus: "Chemistry: pH",
    stem: "A liquid has a pH of 2. What is it?",
    target: null,
    answers: [
      { text: "A strong acid", type: "correct" },
      { text: "A weak acid, because 2 is a small number", type: "trap", mis: "Thinking a low pH number means weak", why: "A lower pH means more acidic. pH 2 is strongly acidic." },
      { text: "An alkali", type: "trap", mis: "Mixing up acids and alkalis", why: "Alkalis have a pH above 7." },
      { text: "A rock", type: "dud", why: "A rock is not a liquid." }
    ],
    hint: "Where is 2 on the pH scale from 0 to 14?",
    steps: [
      "pH 7 is neutral.",
      "Below 7 is acidic. The lower the number, the stronger the acid.",
      "pH 2 is a strong acid."
    ],
    tip: "Low pH: strong acid. High pH: strong alkali."
  },
  {
    id: "s27", subject: "Science", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Tech", topic: "Electricity: series circuits", syllabus: "Electricity: series circuits",
    stem: "Two bulbs are in a series circuit. One bulb breaks. What happens to the other bulb?",
    target: "series",
    answers: [
      { text: "It goes out too", type: "correct" },
      { text: "It gets brighter", type: "trap", mis: "Thinking current can go around a break", why: "In series there is only one path. A break stops all the current." },
      { text: "It turns blue", type: "dud", why: "Bulbs do not change colour when a circuit breaks." }
    ],
    hint: "How many paths does the current have in a series circuit?",
    steps: [
      "A series circuit has only one path.",
      "A broken bulb makes a gap in the path.",
      "No current flows, so the other bulb goes out."
    ],
    tip: "Series: one path. Break it anywhere and everything stops."
  },
  {
    id: "s28", subject: "Science", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Travel", topic: "Forces: balanced forces", syllabus: "Forces: balanced forces",
    stem: "A car moves at a steady speed in a straight line. What can you say about the forces on it?",
    target: "steady",
    answers: [
      { text: "They are balanced", type: "correct" },
      { text: "The forward force is bigger", type: "trap", mis: "Thinking moving things need an unbalanced force", why: "An unbalanced force would make it speed up. A steady speed means balanced forces." },
      { text: "The car has no mass", type: "dud", why: "Every car has mass." }
    ],
    hint: "What would happen if the forward force were bigger?",
    steps: [
      "An unbalanced force changes speed or direction.",
      "The car's speed and direction stay the same.",
      "So the forces must be balanced."
    ],
    tip: "Steady speed in a straight line means balanced forces."
  },
  {
    id: "s29", subject: "Science", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Human body", topic: "Health: vaccines", syllabus: "Health: vaccines",
    stem: "How does a vaccine protect you from a disease?",
    target: null,
    answers: [
      { text: "It trains your immune system to recognise the germ", type: "correct" },
      { text: "It kills all the germs in your body straight away", type: "trap", mis: "Thinking vaccines are medicines that kill germs", why: "A vaccine does not kill germs. It teaches your body to fight them later." },
      { text: "It makes you invisible to germs", type: "dud", why: "Nothing can make you invisible." }
    ],
    hint: "What does your body remember after it fights a germ once?",
    steps: [
      "A vaccine contains a harmless part or copy of a germ.",
      "Your immune system learns to recognise it.",
      "If the real germ comes, your body fights it fast."
    ],
    tip: "Vaccines prepare the body. They do not cure an illness you already have."
  },
  {
    id: "s30", subject: "Science", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Human body", topic: "Health: antibiotics", syllabus: "Health: antibiotics",
    stem: "Antibiotics can treat which of these?",
    target: null,
    answers: [
      { text: "An infection caused by bacteria", type: "correct" },
      { text: "A cold caused by a virus", type: "trap", mis: "Thinking antibiotics kill viruses", why: "Antibiotics do not work on viruses." },
      { text: "A broken leg", type: "dud", why: "A broken bone is not an infection." }
    ],
    hint: "Antibiotics work on one kind of germ. Which kind?",
    steps: [
      "There are different kinds of germs, such as bacteria and viruses.",
      "Antibiotics kill bacteria.",
      "They do nothing to viruses, like the ones that cause colds."
    ],
    tip: "Antibiotics: bacteria only. Not viruses."
  },
  {
    id: "s31", subject: "Science", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Sports", topic: "Energy: energy stores", syllabus: "Energy: energy stores",
    stem: "A ball is dropped from a window. As it falls, which energy change happens?",
    target: null,
    answers: [
      { text: "Gravitational potential energy changes to kinetic energy", type: "correct" },
      { text: "Kinetic energy changes to gravitational potential energy", type: "trap", mis: "Getting the energy change backwards", why: "The ball loses height and gains speed, so potential energy turns into kinetic energy." },
      { text: "Sound energy turns into the ball", type: "dud", why: "Energy cannot turn into a ball." }
    ],
    hint: "As it falls, does the ball get higher or faster?",
    steps: [
      "High up, the ball has gravitational potential energy.",
      "As it falls it loses height and gains speed.",
      "Speed means kinetic energy. So potential energy changes to kinetic."
    ],
    tip: "Higher means more potential energy. Faster means more kinetic energy."
  },
  {
    id: "s32", subject: "Science", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Kitchen lab", topic: "Chemistry: elements and compounds", syllabus: "Chemistry: elements and compounds",
    stem: "Water is H₂O. What kind of substance is water?",
    target: null,
    answers: [
      { text: "A compound of hydrogen and oxygen", type: "correct" },
      { text: "An element", type: "trap", mis: "Mixing up elements and compounds", why: "An element has only one type of atom. Water has two." },
      { text: "A mixture of hydrogen gas and oxygen gas", type: "trap", mis: "Mixing up compounds and mixtures", why: "In water the atoms are joined together. It is not two gases mixed." },
      { text: "A metal", type: "dud", why: "Water is not a metal." }
    ],
    hint: "How many types of atom are in H₂O? Are they joined?",
    steps: [
      "H₂O has two types of atom: hydrogen and oxygen.",
      "The atoms are chemically joined.",
      "Two or more elements joined together make a compound."
    ],
    tip: "Element: one type of atom. Compound: different atoms joined."
  },
  {
    id: "s33", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Human body", topic: "Biology: inheritance", syllabus: "Biology: inheritance",
    stem: "Brown eyes (B) are dominant over blue eyes (b). Both parents are Bb. What is the chance their child has blue eyes?",
    target: null,
    answers: [
      { text: "1 in 4", type: "correct" },
      { text: "1 in 2", type: "trap", mis: "Thinking one copy is enough for a recessive trait", why: "Blue eyes need bb. Only 1 of the 4 boxes in the Punnett square is bb." },
      { text: "The child will have green hair", type: "dud", why: "The question is about eye colour." }
    ],
    hint: "Draw a Punnett square with B and b from each parent.",
    steps: [
      "Each parent can pass on B or b.",
      "The four results are BB, Bb, bB and bb.",
      "Only bb gives blue eyes: 1 in 4."
    ],
    tip: "A recessive trait needs two copies."
  },
  {
    id: "s34", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Tech", topic: "Physics: half-life", syllabus: "Physics: half-life",
    stem: "A radioactive sample has a half-life of 2 hours. You start with 80 g. How much is left after 6 hours?",
    target: null,
    answers: [
      { text: "10 g", type: "correct" },
      { text: "20 g", type: "trap", mis: "Counting the wrong number of half-lives", why: "6 hours is 3 half-lives, not 2." },
      { text: "0 g", type: "trap", mis: "Thinking it all decays after a few half-lives", why: "Each half-life only halves what is left. It does not reach zero this fast." },
      { text: "6 hours", type: "dud", why: "The question asks for a mass." }
    ],
    hint: "How many half-lives fit into 6 hours?",
    steps: [
      "6 hours ÷ 2 hours = 3 half-lives.",
      "80 g → 40 g → 20 g → 10 g.",
      "10 g is left."
    ],
    tip: "Count the half-lives, then halve that many times."
  },
  {
    id: "s35", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Human body", topic: "Biology: enzymes", syllabus: "Biology: enzymes",
    stem: "An enzyme works best at 37 °C. You heat it to 70 °C. What happens to it?",
    target: null,
    answers: [
      { text: "It changes shape, is denatured and stops working", type: "correct" },
      { text: "It works twice as fast", type: "trap", mis: "Thinking hotter always means faster", why: "Above its best temperature, the enzyme's shape breaks down." },
      { text: "It turns into a vitamin", type: "dud", why: "Heat cannot turn an enzyme into a vitamin." }
    ],
    hint: "What happens to an enzyme's shape at very high temperatures?",
    steps: [
      "An enzyme's shape must fit the molecule it works on.",
      "High heat breaks the bonds that hold the shape.",
      "The enzyme is denatured and stops working."
    ],
    tip: "Warmer helps enzymes only up to their best temperature."
  },
  {
    id: "s36", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Kitchen lab", topic: "Chemistry: rates of reaction", syllabus: "Chemistry: rates of reaction",
    stem: "A powder reacts with acid faster than one big lump of the same mass. Why?",
    target: null,
    answers: [
      { text: "The powder has more surface area, so more particles can collide", type: "correct" },
      { text: "The powder has more mass", type: "trap", mis: "Thinking more surface means more stuff", why: "The mass is the same. Only the surface area is bigger." },
      { text: "The acid likes powder better", type: "dud", why: "Acids do not have likes. Collisions decide the rate." }
    ],
    hint: "Which particles can the acid touch in a big lump?",
    steps: [
      "Acid can only react with particles on the surface.",
      "Crushing a lump makes much more surface.",
      "More surface means more collisions, so a faster reaction."
    ],
    tip: "Smaller pieces mean more surface and faster reactions."
  },
  {
    id: "s37", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Diving", topic: "Physics: waves", syllabus: "Physics: waves",
    stem: "A water wave has a frequency of 5 Hz and a wavelength of 2 m. What is its speed?",
    target: null,
    answers: [
      { text: "10 m/s", type: "correct" },
      { text: "2.5 m/s", type: "trap", mis: "Dividing instead of multiplying", why: "Wave speed = frequency × wavelength." },
      { text: "5 waves", type: "dud", why: "The question asks for a speed." }
    ],
    hint: "Which formula links speed, frequency and wavelength?",
    steps: [
      "Wave speed = frequency × wavelength.",
      "5 Hz × 2 m.",
      "Speed = 10 m/s."
    ],
    tip: "v = f × λ."
  },
  {
    id: "s38", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Animals", topic: "Biology: energy in food chains", syllabus: "Biology: energy in food chains",
    stem: "In a food chain, about 10% of the energy passes to the next level. Grass has 10,000 kJ. How much reaches the fox in grass → rabbit → fox?",
    target: "fox",
    answers: [
      { text: "100 kJ", type: "correct" },
      { text: "1,000 kJ", type: "trap", mis: "Stopping one level too early", why: "1,000 kJ reaches the rabbit. The fox gets 10% of that." },
      { text: "10,000 foxes", type: "dud", why: "The question asks for energy." }
    ],
    hint: "How many steps are there from the grass to the fox?",
    steps: [
      "Grass to rabbit: 10% of 10,000 = 1,000 kJ.",
      "Rabbit to fox: 10% of 1,000 = 100 kJ.",
      "The fox gets 100 kJ."
    ],
    tip: "Take 10% once for each arrow."
  },
  {
    id: "s39", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Kitchen lab", topic: "Physics: heat transfer", syllabus: "Physics: heat transfer",
    stem: "A metal spoon in hot soup quickly gets hot at the handle. How does the heat reach the handle?",
    target: null,
    answers: [
      { text: "By conduction through the metal", type: "correct" },
      { text: "By convection, as hot air rises into the spoon", type: "trap", mis: "Mixing up convection and conduction", why: "The heat travels through the solid spoon itself. Convection happens in liquids and gases." },
      { text: "The spoon is on fire", type: "dud", why: "There is no fire in the soup." }
    ],
    hint: "Heat moves through solids in one main way. Which?",
    steps: [
      "The spoon is a solid metal.",
      "Particles in the hot end vibrate and pass energy along.",
      "This is conduction. Metals conduct heat well."
    ],
    tip: "Solids: conduction. Liquids and gases: convection."
  },
  {
    id: "s40", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Human body", topic: "Biology: natural selection", syllabus: "Biology: natural selection",
    stem: "An antibiotic kills most bacteria in a group, but a few survive. Over time, more and more of the bacteria are resistant. Why?",
    target: null,
    answers: [
      { text: "Resistant bacteria survive and reproduce, so their numbers grow", type: "correct" },
      { text: "The bacteria decide to become resistant", type: "trap", mis: "Thinking living things change on purpose", why: "Bacteria cannot choose. A few already had resistance from random mutations." },
      { text: "The antibiotic turns into bacteria", type: "dud", why: "Medicines cannot turn into bacteria." }
    ],
    hint: "Which bacteria are left after the antibiotic?",
    steps: [
      "A few bacteria already had a mutation for resistance.",
      "The antibiotic kills the others.",
      "The resistant ones reproduce, so the next group is mostly resistant."
    ],
    tip: "Natural selection: survivors pass on their genes."
  },
  {
    id: "s41", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Nature", topic: "Earth: greenhouse effect", syllabus: "Earth: greenhouse effect",
    stem: "Why does more carbon dioxide in the air make the Earth warmer?",
    target: null,
    answers: [
      { text: "It traps heat that the Earth gives off", type: "correct" },
      { text: "It makes a hole in the ozone layer that lets more heat in", type: "trap", mis: "Mixing up the ozone hole and the greenhouse effect", why: "The ozone hole is a different problem. Carbon dioxide traps heat going out." },
      { text: "It makes the Sun bigger", type: "dud", why: "Gases on Earth cannot change the Sun." }
    ],
    hint: "Think about heat leaving the Earth, not light arriving.",
    steps: [
      "Sunlight warms the ground.",
      "The warm ground gives off heat.",
      "Carbon dioxide absorbs some of this heat and keeps it near the Earth."
    ],
    tip: "Greenhouse gases trap outgoing heat."
  },
  {
    id: "s42", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Sports", topic: "Chemistry: moles", syllabus: "Chemistry: moles",
    stem: "A sports bottle holds 36 g of water, H₂O. How many moles is that? (H = 1, O = 16)",
    target: null,
    answers: [
      { text: "2 mol", type: "correct" },
      { text: "36 mol", type: "trap", mis: "Using the mass as the number of moles", why: "You must divide the mass by the molar mass, 18 g/mol." },
      { text: "2.25 mol", type: "trap", mis: "Using only one atom's mass", why: "The molar mass of H₂O is 1 + 1 + 16 = 18, not 16." },
      { text: "18 bottles", type: "dud", why: "There is only one bottle." }
    ],
    hint: "First find the mass of one mole of H₂O.",
    steps: [
      "Molar mass of H₂O: 2 × 1 + 16 = 18 g/mol.",
      "Moles = mass ÷ molar mass.",
      "36 ÷ 18 = 2 mol."
    ],
    tip: "Moles = mass ÷ molar mass."
  },
  {
    id: "s43", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Kitchen lab", topic: "Physics: power and energy", syllabus: "Physics: power and energy",
    stem: "A 2,000 W kettle runs for 3 minutes. How much energy does it transfer?",
    target: null,
    answers: [
      { text: "360,000 J", type: "correct" },
      { text: "6,000 J", type: "trap", mis: "Skipping unit changes", why: "Time must be in seconds: 3 minutes = 180 s." },
      { text: "2,000 kettles", type: "dud", why: "There is only one kettle." }
    ],
    hint: "Watts mean joules per second. What is 3 minutes in seconds?",
    steps: [
      "3 minutes = 180 s.",
      "Energy = power × time.",
      "2,000 × 180 = 360,000 J."
    ],
    tip: "Change minutes to seconds before using E = P × t."
  },
  {
    id: "s44", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Travel", topic: "Physics: force and acceleration", syllabus: "Physics: force and acceleration",
    stem: "A 1,000 kg car speeds up from 0 to 20 m/s in 10 s. What is the resultant force on it?",
    target: null,
    answers: [
      { text: "2,000 N", type: "correct" },
      { text: "20,000 N", type: "trap", mis: "Using speed instead of acceleration", why: "F = m × a, and a = 20 ÷ 10 = 2 m/s², not 20." },
      { text: "10 s", type: "dud", why: "The question asks for a force." }
    ],
    hint: "Find the acceleration first.",
    steps: [
      "Acceleration = change in speed ÷ time = 20 ÷ 10 = 2 m/s².",
      "Force = mass × acceleration.",
      "1,000 × 2 = 2,000 N."
    ],
    tip: "F = m × a. Use acceleration, not speed."
  },
  {
    id: "s45", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Kitchen lab", topic: "Biology: osmosis", syllabus: "Biology: osmosis",
    stem: "Potato pieces are put in very salty water. After an hour, they are lighter. Why?",
    target: null,
    answers: [
      { text: "Water left the potato cells by osmosis", type: "correct" },
      { text: "Salt moved into the potato", type: "trap", mis: "Mixing up which way water moves", why: "Salt moving in would make the potato heavier. Water moved out, toward the saltier side." },
      { text: "The potato grew roots", type: "dud", why: "Roots would not make the potato lighter in an hour." }
    ],
    hint: "Water moves from where there is more water to where there is less.",
    steps: [
      "The salty water has less free water than the potato cells.",
      "Water moves out of the cells by osmosis.",
      "The potato loses water, so it gets lighter."
    ],
    tip: "In osmosis, water moves toward the more concentrated solution."
  },
  {
    id: "s46", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Travel", topic: "Physics: specific heat capacity", syllabus: "Physics: specific heat capacity",
    stem: "Towns by the sea often have milder weather than towns far inland. Why?",
    target: null,
    answers: [
      { text: "Water has a high specific heat capacity, so the sea warms and cools slowly", type: "correct" },
      { text: "The sea always stays at the same temperature", type: "trap", mis: "Thinking the sea has a fixed temperature", why: "The sea does warm up and cool down, just slowly." },
      { text: "Fish blow warm air onto the land", type: "dud", why: "Fish do not blow air." }
    ],
    hint: "Does water heat up quickly or slowly compared with land?",
    steps: [
      "Water needs a lot of energy to change temperature.",
      "So the sea warms slowly in summer and cools slowly in winter.",
      "The sea keeps nearby land from getting very hot or very cold."
    ],
    tip: "High specific heat capacity means slow temperature change."
  },
  {
    id: "s47", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Animals", topic: "Biology: surface area to volume", syllabus: "Biology: surface area to volume",
    stem: "Why do large animals need lungs and blood vessels, while single cells do not?",
    target: null,
    answers: [
      { text: "Large animals have a small surface area for their volume, so diffusion alone is too slow", type: "correct" },
      { text: "Large animals have a bigger surface area to volume ratio", type: "trap", mis: "Getting the ratio backwards", why: "As size goes up, surface area grows more slowly than volume, so the ratio gets smaller." },
      { text: "Single cells are not alive", type: "dud", why: "Single cells are living things." }
    ],
    hint: "As a cube gets bigger, which grows faster: its surface or its volume?",
    steps: [
      "Small things have a large surface area for their volume.",
      "Large animals have a small surface area for their volume.",
      "Diffusion through the skin is too slow, so they need lungs and blood."
    ],
    tip: "Bigger body, smaller surface area to volume ratio."
  },
  {
    id: "s48", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Chemistry: electrolysis", syllabus: "Chemistry: electrolysis",
    stem: "Molten sodium chloride is electrolysed. What forms at the negative electrode?",
    target: "negative",
    answers: [
      { text: "Sodium metal", type: "correct" },
      { text: "Chlorine gas", type: "trap", mis: "Mixing up which ions go to which electrode", why: "Positive sodium ions are pulled to the negative electrode. Chloride ions go to the positive one." },
      { text: "Sugar", type: "dud", why: "There is no sugar in sodium chloride." }
    ],
    hint: "Opposite charges attract. Which ion is positive?",
    steps: [
      "Sodium chloride has Na⁺ and Cl⁻ ions.",
      "Positive Na⁺ ions move to the negative electrode.",
      "They gain electrons and become sodium metal."
    ],
    tip: "Positive ions go to the negative electrode."
  },
  {
    id: "s49", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Space", topic: "Physics: red shift", syllabus: "Physics: red shift",
    stem: "Light from distant galaxies is red-shifted. What does this tell us?",
    target: null,
    answers: [
      { text: "The galaxies are moving away from us", type: "correct" },
      { text: "The galaxies are red in colour", type: "trap", mis: "Taking a science word too literally", why: "Red shift means the wavelength is stretched, not that the galaxy looks red." },
      { text: "The galaxies are moving toward us", type: "trap", mis: "Mixing up red shift and blue shift", why: "Moving toward us squashes the waves and gives blue shift." },
      { text: "Our telescopes are dirty", type: "dud", why: "Dirt does not shift the wavelength of light." }
    ],
    hint: "Red light has a longer wavelength than blue light.",
    steps: [
      "Red shift means the light's wavelength is longer than expected.",
      "Waves are stretched when the source moves away.",
      "So the galaxies are moving away from us."
    ],
    tip: "Red shift: moving away. Blue shift: moving closer."
  },
  {
    id: "s50", subject: "Science", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "School", topic: "Working scientifically: fair tests", syllabus: "Working scientifically: fair tests",
    stem: "A student tests if fertiliser helps plants grow. She gives fertiliser to 1 plant and none to 1 other plant. The fertilised plant grows taller. What is the biggest problem with her test?",
    target: "biggest",
    answers: [
      { text: "With only one plant in each group, the result could be chance", type: "correct" },
      { text: "She should give both plants fertiliser", type: "trap", mis: "Removing the control group", why: "Then there is nothing to compare with." },
      { text: "Plants cannot grow", type: "dud", why: "Plants do grow." }
    ],
    hint: "Could one plant just be a stronger plant?",
    steps: [
      "One plant might grow taller for other reasons.",
      "With only one plant per group, you cannot tell.",
      "Use many plants in each group to make the result reliable."
    ],
    tip: "One of each is not enough. Repeat with many."
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
    id: "x9", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Puzzles", topic: "Algebra: expanding brackets", syllabus: "Algebra: expanding brackets",
    stem: "Expand 3(x + 4).",
    target: null,
    answers: [
      { text: "3x + 12", type: "correct" },
      { text: "3x + 4", type: "trap", mis: "Multiplying only the first term", why: "The 3 multiplies everything in the bracket, so 3 × 4 = 12 too." },
      { text: "34x", type: "dud", why: "There is no 34 in the question." }
    ],
    hint: "The number outside multiplies every term inside.",
    steps: [
      "3 × x = 3x.",
      "3 × 4 = 12.",
      "So 3(x + 4) = 3x + 12."
    ],
    tip: "Multiply every term inside the bracket."
  },
  {
    id: "x10", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Tech", topic: "Algebra: index laws", syllabus: "Algebra: index laws",
    stem: "Simplify x³ × x⁴.",
    target: null,
    answers: [
      { text: "x⁷", type: "correct" },
      { text: "x¹²", type: "trap", mis: "Multiplying the powers instead of adding them", why: "x³ × x⁴ is x × x × x × x × x × x × x. That is 7 x's, not 12." },
      { text: "7", type: "dud", why: "The answer must still have x in it." }
    ],
    hint: "Write out how many x's are multiplied together.",
    steps: [
      "x³ is three x's multiplied. x⁴ is four.",
      "Together that is 3 + 4 = 7 x's.",
      "So x³ × x⁴ = x⁷."
    ],
    tip: "Multiplying the same base: add the powers."
  },
  {
    id: "x11", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Puzzles", topic: "Algebra: linear equations", syllabus: "Algebra: linear equations",
    stem: "Solve 5x - 3 = 2x + 9.",
    target: null,
    answers: [
      { text: "x = 4", type: "correct" },
      { text: "x = 2", type: "trap", mis: "Moving a term without changing its sign", why: "Moving -3 to the other side makes it +3: 3x = 12." },
      { text: "x = 4 cm", type: "dud", why: "This equation has no units." }
    ],
    hint: "Get the x terms on one side and the numbers on the other.",
    steps: [
      "Take 2x from both sides: 3x - 3 = 9.",
      "Add 3 to both sides: 3x = 12.",
      "Divide by 3: x = 4."
    ],
    tip: "Do the same thing to both sides, and check your answer."
  },
  {
    id: "x12", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Sports", topic: "Algebra: straight lines", syllabus: "Algebra: straight lines",
    stem: "What is the gradient of the line y = 3x - 5?",
    target: "gradient",
    answers: [
      { text: "3", type: "correct" },
      { text: "-5", type: "trap", mis: "Mixing up the gradient and the y-intercept", why: "-5 is where the line crosses the y-axis. The gradient is the number with x." },
      { text: "y", type: "dud", why: "The gradient is a number, not a letter." }
    ],
    hint: "In y = mx + c, which letter is the gradient?",
    steps: [
      "A straight line can be written y = mx + c.",
      "m is the gradient. c is the y-intercept.",
      "Here m = 3."
    ],
    tip: "y = mx + c: m is the slope, c is where it crosses the y-axis."
  },
  {
    id: "x13", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Puzzles", topic: "Algebra: factorising", syllabus: "Algebra: factorising",
    stem: "Factorise 6x + 9.",
    target: null,
    answers: [
      { text: "3(2x + 3)", type: "correct" },
      { text: "3(2x + 9)", type: "trap", mis: "Dividing only one term", why: "Both terms must be divided by 3: 9 ÷ 3 = 3." },
      { text: "15x", type: "trap", mis: "Adding unlike terms", why: "6x and 9 are different kinds of term. You cannot add them." },
      { text: "A circle", type: "dud", why: "The answer is an expression, not a shape." }
    ],
    hint: "Find the biggest number that divides 6 and 9.",
    steps: [
      "3 divides both 6 and 9.",
      "6x ÷ 3 = 2x and 9 ÷ 3 = 3.",
      "So 6x + 9 = 3(2x + 3)."
    ],
    tip: "Expand your answer to check it."
  },
  {
    id: "x14", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Tech", topic: "Algebra: negative powers", syllabus: "Algebra: negative powers",
    stem: "What is 2⁻³?",
    target: null,
    answers: [
      { text: "1/8", type: "correct" },
      { text: "-8", type: "trap", mis: "Thinking a negative power makes a negative number", why: "A negative power means 1 divided by. It does not make the answer negative." },
      { text: "-6", type: "trap", mis: "Multiplying the base by the power", why: "2⁻³ is not 2 × -3." },
      { text: "2 cm", type: "dud", why: "This question has no units." }
    ],
    hint: "A negative power means \"one over\".",
    steps: [
      "2⁻³ = 1 ÷ 2³.",
      "2³ = 8.",
      "So 2⁻³ = 1/8."
    ],
    tip: "x⁻ⁿ = 1/xⁿ."
  },
  {
    id: "x15", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Puzzles", topic: "Algebra: fractional powers", syllabus: "Algebra: fractional powers",
    stem: "What is 16 to the power 1/2?",
    target: null,
    answers: [
      { text: "4", type: "correct" },
      { text: "8", type: "trap", mis: "Halving instead of taking the square root", why: "A power of 1/2 means square root, not divide by 2." },
      { text: "1/16", type: "trap", mis: "Treating a fraction power like a negative power", why: "Only negative powers mean \"one over\"." },
      { text: "16 kg", type: "dud", why: "This question has no units." }
    ],
    hint: "A power of 1/2 is the same as a square root.",
    steps: [
      "Power 1/2 means square root.",
      "√16 = 4.",
      "So 16 to the power 1/2 is 4."
    ],
    tip: "Power 1/2: square root. Power 1/3: cube root."
  },
  {
    id: "x16", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Puzzles", topic: "Algebra: simultaneous equations", syllabus: "Algebra: simultaneous equations",
    stem: "x + y = 10 and x - y = 2. Find x.",
    target: null,
    answers: [
      { text: "6", type: "correct" },
      { text: "4", type: "trap", mis: "Finding the wrong unknown", why: "4 is y. Adding the equations gives 2x = 12, so x = 6." },
      { text: "10 cm", type: "dud", why: "This question has no units." }
    ],
    hint: "What happens to y if you add the two equations?",
    steps: [
      "Add the equations: (x + y) + (x - y) = 10 + 2.",
      "The y's cancel: 2x = 12.",
      "x = 6. Then y = 4."
    ],
    tip: "Check which letter the question asks for."
  },
  {
    id: "x17", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Games", topic: "Algebra: functions", syllabus: "Algebra: functions",
    stem: "f(x) = 2x + 1. Find f(3).",
    target: null,
    answers: [
      { text: "7", type: "correct" },
      { text: "6", type: "trap", mis: "Leaving out part of the rule", why: "2 × 3 = 6, but the rule also says + 1." },
      { text: "f", type: "dud", why: "f is the name of the function, not a value." }
    ],
    hint: "Put 3 in place of x.",
    steps: [
      "f(3) means put x = 3 into the rule.",
      "2 × 3 + 1.",
      "6 + 1 = 7."
    ],
    tip: "f(3) means replace every x with 3."
  },
  {
    id: "x18", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Tech", topic: "Number: surds", syllabus: "Number: surds",
    stem: "Simplify √50.",
    target: null,
    answers: [
      { text: "5√2", type: "correct" },
      { text: "25√2", type: "trap", mis: "Taking out the square, not its root", why: "√50 = √25 × √2. √25 is 5, not 25." },
      { text: "50 m", type: "dud", why: "This question has no units." }
    ],
    hint: "Find a square number that divides 50.",
    steps: [
      "50 = 25 × 2, and 25 is a square number.",
      "√50 = √25 × √2.",
      "√25 = 5, so √50 = 5√2."
    ],
    tip: "Split off the biggest square factor."
  },
  {
    id: "x19", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Sports", topic: "Calculus: differentiation", syllabus: "Calculus: differentiation",
    stem: "Find dy/dx when y = 4x³.",
    target: null,
    answers: [
      { text: "12x²", type: "correct" },
      { text: "4x²", type: "trap", mis: "Lowering the power without multiplying", why: "You must also multiply by the old power: 3 × 4 = 12." },
      { text: "12x³", type: "trap", mis: "Multiplying but not lowering the power", why: "After multiplying by 3, the power goes down by 1." },
      { text: "12 m/s", type: "dud", why: "This question has no units." }
    ],
    hint: "Multiply by the power, then take 1 from the power.",
    steps: [
      "Bring the power 3 down: 3 × 4 = 12.",
      "Take 1 from the power: 3 - 1 = 2.",
      "dy/dx = 12x²."
    ],
    tip: "d/dx of axⁿ is naxⁿ⁻¹."
  },
  {
    id: "x20", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Puzzles", topic: "Algebra: the discriminant", syllabus: "Algebra: the discriminant",
    stem: "How many real solutions does x² + 4x + 5 = 0 have?",
    target: "real",
    answers: [
      { text: "None", type: "correct" },
      { text: "Two", type: "trap", mis: "Thinking every quadratic has two solutions", why: "b² - 4ac = 16 - 20 = -4. A negative discriminant means no real solutions." },
      { text: "Five", type: "dud", why: "A quadratic has at most two solutions." }
    ],
    hint: "Work out b² - 4ac.",
    steps: [
      "a = 1, b = 4, c = 5.",
      "b² - 4ac = 16 - 20 = -4.",
      "It is negative, so there are no real solutions."
    ],
    tip: "b² - 4ac: positive, two. Zero, one. Negative, none."
  },
  {
    id: "x21", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Puzzles", topic: "Algebra: completing the square", syllabus: "Algebra: completing the square",
    stem: "Write x² + 6x + 2 in the form (x + a)² + b.",
    target: null,
    answers: [
      { text: "(x + 3)² - 7", type: "correct" },
      { text: "(x + 6)² + 2", type: "trap", mis: "Using the x number instead of half of it", why: "Halve 6 to get 3. (x + 6)² would give 12x." },
      { text: "(x + 3)² + 2", type: "trap", mis: "Forgetting to take away the extra square", why: "(x + 3)² adds an extra 9, so take it away: 2 - 9 = -7." },
      { text: "x = 6", type: "dud", why: "This is not an equation to solve." }
    ],
    hint: "Halve the number in front of x.",
    steps: [
      "Half of 6 is 3, so start with (x + 3)².",
      "(x + 3)² = x² + 6x + 9. That is 9, but we need 2.",
      "Take away 7: (x + 3)² - 7."
    ],
    tip: "Expand your answer to check it."
  },
  {
    id: "x22", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Tech", topic: "Algebra: logarithms", syllabus: "Algebra: logarithms",
    stem: "What is log₂ 8?",
    target: null,
    answers: [
      { text: "3", type: "correct" },
      { text: "4", type: "trap", mis: "Dividing instead of finding the power", why: "8 ÷ 2 = 4, but log₂ 8 asks: 2 to what power gives 8?" },
      { text: "8 kg", type: "dud", why: "This question has no units." }
    ],
    hint: "2 to what power makes 8?",
    steps: [
      "log₂ 8 asks: 2 to what power is 8?",
      "2 × 2 × 2 = 8, so 2³ = 8.",
      "log₂ 8 = 3."
    ],
    tip: "A log is a power."
  },
  {
    id: "x23", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Sports", topic: "Calculus: integration", syllabus: "Calculus: integration",
    stem: "Find the integral of 6x with respect to x.",
    target: "integral",
    answers: [
      { text: "3x² + c", type: "correct" },
      { text: "6", type: "trap", mis: "Differentiating instead of integrating", why: "6 is the derivative of 6x. Integrating goes the other way." },
      { text: "3x²", type: "trap", mis: "Forgetting the constant", why: "An indefinite integral always needs + c." },
      { text: "6 m", type: "dud", why: "This question has no units." }
    ],
    hint: "Add 1 to the power, then divide by the new power.",
    steps: [
      "6x = 6x¹. Add 1 to the power: x².",
      "Divide by the new power: 6 ÷ 2 = 3.",
      "Add the constant: 3x² + c."
    ],
    tip: "Differentiate your answer to check it."
  },
  {
    id: "x24", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Puzzles", topic: "Sequences: arithmetic series", syllabus: "Sequences: arithmetic series",
    stem: "Find the sum 1 + 2 + 3 + ... + 100.",
    target: null,
    answers: [
      { text: "5,050", type: "correct" },
      { text: "10,100", type: "trap", mis: "Forgetting to halve", why: "Pairs like 1 + 100 make 101. There are 50 pairs, not 100." },
      { text: "-5,050", type: "dud", why: "Adding positive numbers cannot give a negative." }
    ],
    hint: "Pair the first and last numbers.",
    steps: [
      "1 + 100 = 101, 2 + 99 = 101, and so on.",
      "100 numbers make 50 pairs.",
      "50 × 101 = 5,050."
    ],
    tip: "Sum = number of terms × (first + last) ÷ 2."
  },
  {
    id: "x25", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Sports", topic: "Trigonometry: exact values", syllabus: "Trigonometry: exact values",
    stem: "What is sin 90°?",
    target: null,
    answers: [
      { text: "1", type: "correct" },
      { text: "0", type: "trap", mis: "Mixing up sin and cos", why: "cos 90° is 0. sin 90° is 1." },
      { text: "90°", type: "dud", why: "sin gives a ratio, not an angle." }
    ],
    hint: "Picture the sine graph. Where is it highest?",
    steps: [
      "The sine graph starts at 0 at 0°.",
      "It rises to its highest point at 90°.",
      "Its highest value is 1, so sin 90° = 1."
    ],
    tip: "Sketch the sin and cos graphs to check exact values."
  },
  {
    id: "x26", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Drones", topic: "Vectors: magnitude", syllabus: "Vectors: magnitude",
    stem: "A drone moves along the vector (3, 4). How far does it move?",
    target: null,
    answers: [
      { text: "5", type: "correct" },
      { text: "7", type: "trap", mis: "Adding the parts instead of using Pythagoras", why: "The parts are at right angles. Length = √(3² + 4²) = √25." },
      { text: "(4, 3)", type: "dud", why: "That is a different vector, not a length." }
    ],
    hint: "The parts 3 and 4 make a right triangle.",
    steps: [
      "The two parts are at right angles.",
      "Length² = 3² + 4² = 9 + 16 = 25.",
      "Length = √25 = 5."
    ],
    tip: "Magnitude of (a, b) = √(a² + b²)."
  },
  {
    id: "x27", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Sports", topic: "Calculus: stationary points", syllabus: "Calculus: stationary points",
    stem: "y = x² - 6x + 1. At what value of x is the minimum point?",
    target: null,
    answers: [
      { text: "x = 3", type: "correct" },
      { text: "x = -3", type: "trap", mis: "Getting the sign wrong", why: "dy/dx = 2x - 6 = 0 gives x = 3, not -3." },
      { text: "x = a parabola", type: "dud", why: "x is a number here." }
    ],
    hint: "At a minimum point, the gradient is 0.",
    steps: [
      "Differentiate: dy/dx = 2x - 6.",
      "At the minimum, dy/dx = 0: 2x - 6 = 0.",
      "x = 3."
    ],
    tip: "Stationary point: set dy/dx = 0."
  },
  {
    id: "x28", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Music", topic: "Calculus: product rule", syllabus: "Calculus: product rule",
    stem: "Differentiate y = x² sin x.",
    target: null,
    answers: [
      { text: "2x sin x + x² cos x", type: "correct" },
      { text: "2x cos x", type: "trap", mis: "Differentiating each part and multiplying", why: "For a product, use the product rule: u'v + uv'." },
      { text: "0", type: "dud", why: "y changes as x changes, so dy/dx is not always 0." }
    ],
    hint: "y is a product of two parts. Which rule fits?",
    steps: [
      "Let u = x² and v = sin x.",
      "u' = 2x and v' = cos x.",
      "dy/dx = u'v + uv' = 2x sin x + x² cos x."
    ],
    tip: "Product: u'v + uv'. Never just multiply the derivatives."
  },
  {
    id: "x29", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Calculus: integration by parts", syllabus: "Calculus: integration by parts",
    stem: "Find the integral of x eˣ with respect to x.",
    target: null,
    answers: [
      { text: "x eˣ - eˣ + c", type: "correct" },
      { text: "(x²/2) eˣ + c", type: "trap", mis: "Integrating each part of a product separately", why: "You cannot integrate a product part by part. Use integration by parts." },
      { text: "x + e", type: "dud", why: "This is not an integral of the expression." }
    ],
    hint: "Choose u = x, because it gets simpler when you differentiate it.",
    steps: [
      "Let u = x and dv/dx = eˣ. So du/dx = 1 and v = eˣ.",
      "Integration by parts: uv - ∫ v du/dx dx = x eˣ - ∫ eˣ dx.",
      "= x eˣ - eˣ + c."
    ],
    tip: "Differentiate your answer to check it."
  },
  {
    id: "x30", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Sports", topic: "Calculus: definite integrals", syllabus: "Calculus: definite integrals",
    stem: "Find the integral of 3x² from x = 0 to x = 2.",
    target: null,
    answers: [
      { text: "8", type: "correct" },
      { text: "12", type: "trap", mis: "Differentiating instead of integrating", why: "12 is the derivative 6x at x = 2. You need to integrate." },
      { text: "-8", type: "dud", why: "3x² is never negative, so this area cannot be negative." }
    ],
    hint: "Integrate first, then put in the limits.",
    steps: [
      "The integral of 3x² is x³.",
      "Put in the limits: 2³ - 0³.",
      "8 - 0 = 8."
    ],
    tip: "Integrate, then top limit minus bottom limit."
  },
  {
    id: "x31", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Nature", topic: "Algebra: exponential equations", syllabus: "Algebra: exponential equations",
    stem: "Solve eˣ = 5.",
    target: null,
    answers: [
      { text: "x = ln 5", type: "correct" },
      { text: "x = 5/e", type: "trap", mis: "Dividing by e instead of taking ln", why: "e is not multiplying x. x is the power, so use ln to undo it." },
      { text: "x = 5 cm", type: "dud", why: "This equation has no units." }
    ],
    hint: "Which function undoes eˣ?",
    steps: [
      "ln is the opposite of eˣ.",
      "Take ln of both sides: ln(eˣ) = ln 5.",
      "x = ln 5, about 1.61."
    ],
    tip: "To bring down a power, take logs."
  },
  {
    id: "x32", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Games", topic: "Probability: binomial", syllabus: "Probability: binomial",
    stem: "A fair coin is flipped 3 times. What is the chance of exactly 2 heads?",
    target: "exactly",
    answers: [
      { text: "3/8", type: "correct" },
      { text: "1/8", type: "trap", mis: "Forgetting the number of orders", why: "HHT, HTH and THH all give 2 heads. That is 3 ways, each with chance 1/8." },
      { text: "2 heads", type: "dud", why: "The question asks for a chance." }
    ],
    hint: "List the ways to get exactly 2 heads.",
    steps: [
      "Each result like HHT has chance 1/2 × 1/2 × 1/2 = 1/8.",
      "The ways to get 2 heads: HHT, HTH, THH. That is 3 ways.",
      "3 × 1/8 = 3/8."
    ],
    tip: "Multiply by the number of different orders."
  },
  {
    id: "x33", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Calculus: chain rule", syllabus: "Calculus: chain rule",
    stem: "Differentiate y = ln(3x).",
    target: null,
    answers: [
      { text: "1/x", type: "correct" },
      { text: "1/(3x)", type: "trap", mis: "Forgetting the chain rule", why: "You must also multiply by the derivative of 3x, which is 3. 3 × 1/(3x) = 1/x." },
      { text: "3x cm", type: "dud", why: "This question has no units." }
    ],
    hint: "Use the chain rule: the derivative of ln(u) is u'/u.",
    steps: [
      "Let u = 3x, so u' = 3.",
      "d/dx ln(u) = u'/u = 3/(3x).",
      "3/(3x) = 1/x."
    ],
    tip: "ln(3x) = ln 3 + ln x, so the 3 disappears when you differentiate."
  },
  {
    id: "x34", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Algebra: laws of logarithms", syllabus: "Algebra: laws of logarithms",
    stem: "Simplify log 8 + log 5 - log 4, where log is base 10.",
    target: null,
    answers: [
      { text: "1", type: "correct" },
      { text: "log 9", type: "trap", mis: "Adding and subtracting the numbers inside the logs", why: "log a + log b = log(ab), not log(a + b). Here it is log(8 × 5 ÷ 4)." },
      { text: "10 kg", type: "dud", why: "This question has no units." }
    ],
    hint: "Adding logs means multiplying inside. Subtracting means dividing.",
    steps: [
      "log 8 + log 5 = log 40.",
      "log 40 - log 4 = log 10.",
      "log 10 = 1 in base 10."
    ],
    tip: "Logs turn × into + and ÷ into -."
  },
  {
    id: "x35", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Puzzles", topic: "Sequences: sum to infinity", syllabus: "Sequences: sum to infinity",
    stem: "Find the sum to infinity of 8 + 4 + 2 + 1 + ...",
    target: "infinity",
    answers: [
      { text: "16", type: "correct" },
      { text: "15", type: "trap", mis: "Adding only the terms you can see", why: "The terms keep going forever, so the sum keeps growing toward 16." },
      { text: "It has no end, so it has no sum", type: "trap", mis: "Thinking an endless sum must be endless", why: "The terms halve each time, so the sum gets closer and closer to 16." },
      { text: "8 cm", type: "dud", why: "This question has no units." }
    ],
    hint: "First term a = 8. What is the ratio r?",
    steps: [
      "a = 8 and each term is half the last, so r = 1/2.",
      "Sum to infinity = a ÷ (1 - r).",
      "8 ÷ 1/2 = 16."
    ],
    tip: "If -1 < r < 1, the sum to infinity is a ÷ (1 - r)."
  },
  {
    id: "x36", subject: "Advanced Math", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Sports", topic: "Trigonometry: equations", syllabus: "Trigonometry: equations",
    stem: "Solve sin x = 0.5 for 0° ≤ x ≤ 360°.",
    target: null,
    answers: [
      { text: "x = 30° or x = 150°", type: "correct" },
      { text: "x = 30° only", type: "trap", mis: "Missing the second solution", why: "sin is also positive between 90° and 180°: 180° - 30° = 150°." },
      { text: "x = 0.5 m", type: "dud", why: "x is an angle here." }
    ],
    hint: "Sketch the sine graph from 0° to 360°. How many times does it reach 0.5?",
    steps: [
      "Your calculator gives x = 30°.",
      "The sine graph is symmetric about 90°, so 180° - 30° = 150° also works.",
      "Both are in the range: 30° and 150°."
    ],
    tip: "Sketch the graph to find every solution in the range."
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
    id: "x37", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Sports", topic: "Motion: speed", syllabus: "Motion: speed",
    stem: "A cyclist rides 300 m in 60 s. What is her average speed?",
    target: null,
    answers: [
      { text: "5 m/s", type: "correct" },
      { text: "18,000 m/s", type: "trap", mis: "Multiplying instead of dividing", why: "Speed = distance ÷ time, not distance × time." },
      { text: "60 bikes", type: "dud", why: "The question asks for a speed." }
    ],
    hint: "The unit m/s means metres divided by seconds.",
    steps: [
      "Speed = distance ÷ time.",
      "300 m ÷ 60 s.",
      "Speed = 5 m/s."
    ],
    tip: "Use the unit to see the formula: m/s means m ÷ s."
  },
  {
    id: "x38", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Travel", topic: "Forces: weight", syllabus: "Forces: weight",
    stem: "A bag has a mass of 2 kg. Gravity is 10 N/kg. What is the bag's weight?",
    target: "weight",
    answers: [
      { text: "20 N", type: "correct" },
      { text: "2 N", type: "trap", mis: "Mixing up mass and weight", why: "2 kg is the mass. Weight = mass × gravity." },
      { text: "20 kg", type: "trap", mis: "Using the wrong unit", why: "Weight is a force, so it is measured in newtons, not kg." },
      { text: "10 bags", type: "dud", why: "There is only one bag." }
    ],
    hint: "Weight is a force. Which unit do forces use?",
    steps: [
      "Weight = mass × gravitational field strength.",
      "2 kg × 10 N/kg.",
      "Weight = 20 N."
    ],
    tip: "Mass in kg. Weight in N."
  },
  {
    id: "x39", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Robots", topic: "Electricity: Ohm's law", syllabus: "Electricity: Ohm's law",
    stem: "A robot circuit has a 6 V battery and a 3 Ω resistor. What current flows?",
    target: null,
    answers: [
      { text: "2 A", type: "correct" },
      { text: "18 A", type: "trap", mis: "Multiplying instead of dividing", why: "Current = voltage ÷ resistance, not voltage × resistance." },
      { text: "6 batteries", type: "dud", why: "There is only one battery." }
    ],
    hint: "Use V = I × R and rearrange for I.",
    steps: [
      "V = I × R, so I = V ÷ R.",
      "6 V ÷ 3 Ω.",
      "I = 2 A."
    ],
    tip: "I = V ÷ R."
  },
  {
    id: "x40", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Kitchen lab", topic: "Matter: density", syllabus: "Matter: density",
    stem: "A block has a mass of 600 g and a volume of 200 cm³. What is its density?",
    target: null,
    answers: [
      { text: "3 g/cm³", type: "correct" },
      { text: "120,000 g/cm³", type: "trap", mis: "Multiplying instead of dividing", why: "Density = mass ÷ volume." },
      { text: "200 blocks", type: "dud", why: "There is only one block." }
    ],
    hint: "The unit g/cm³ means grams divided by cm³.",
    steps: [
      "Density = mass ÷ volume.",
      "600 g ÷ 200 cm³.",
      "Density = 3 g/cm³."
    ],
    tip: "Density = mass ÷ volume."
  },
  {
    id: "x41", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Tech", topic: "Light: reflection", syllabus: "Light: reflection",
    stem: "A light ray hits a mirror at 30° to the normal. What is the angle of reflection?",
    target: "normal",
    answers: [
      { text: "30°", type: "correct" },
      { text: "60°", type: "trap", mis: "Measuring from the mirror instead of the normal", why: "Angles are measured from the normal, so the angle of reflection is also 30°." },
      { text: "30 cm", type: "dud", why: "The question asks for an angle." }
    ],
    hint: "The angle in equals the angle out.",
    steps: [
      "The normal is a line at 90° to the mirror.",
      "The angle of incidence is 30° from the normal.",
      "Angle of reflection = angle of incidence = 30°."
    ],
    tip: "Always measure from the normal."
  },
  {
    id: "x42", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Sports", topic: "Forces: pressure", syllabus: "Forces: pressure",
    stem: "A force of 100 N acts on an area of 2 m². What is the pressure?",
    target: null,
    answers: [
      { text: "50 Pa", type: "correct" },
      { text: "200 Pa", type: "trap", mis: "Multiplying instead of dividing", why: "Pressure = force ÷ area." },
      { text: "100 m", type: "dud", why: "Pressure is not a length." }
    ],
    hint: "Pressure is force spread over an area.",
    steps: [
      "Pressure = force ÷ area.",
      "100 N ÷ 2 m².",
      "Pressure = 50 Pa."
    ],
    tip: "Bigger area, smaller pressure."
  },
  {
    id: "x43", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Market", topic: "Energy: work done", syllabus: "Energy: work done",
    stem: "You push a box with a force of 50 N for 4 m. How much work do you do?",
    target: null,
    answers: [
      { text: "200 J", type: "correct" },
      { text: "12.5 J", type: "trap", mis: "Dividing instead of multiplying", why: "Work = force × distance." },
      { text: "4 boxes", type: "dud", why: "There is only one box." }
    ],
    hint: "Work = force × distance moved.",
    steps: [
      "Work done = force × distance.",
      "50 N × 4 m.",
      "Work = 200 J."
    ],
    tip: "Work done = force × distance in the direction of the force."
  },
  {
    id: "x44", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Music", topic: "Waves: frequency and period", syllabus: "Waves: frequency and period",
    stem: "A wave has a period of 0.5 s. What is its frequency?",
    target: "frequency",
    answers: [
      { text: "2 Hz", type: "correct" },
      { text: "0.5 Hz", type: "trap", mis: "Mixing up period and frequency", why: "Period is the time for one wave. Frequency is waves per second: 1 ÷ 0.5." },
      { text: "5 m", type: "dud", why: "Frequency is not a length." }
    ],
    hint: "How many 0.5 s waves fit into 1 second?",
    steps: [
      "Frequency = 1 ÷ period.",
      "1 ÷ 0.5 s.",
      "Frequency = 2 Hz."
    ],
    tip: "f = 1 ÷ T."
  },
  {
    id: "x45", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Tech", topic: "Energy: efficiency", syllabus: "Energy: efficiency",
    stem: "A bulb uses 100 J of energy and gives out 20 J as light. What is its efficiency?",
    target: null,
    answers: [
      { text: "20%", type: "correct" },
      { text: "80%", type: "trap", mis: "Giving the wasted energy instead of the useful energy", why: "80 J is wasted as heat. Efficiency uses the useful 20 J." },
      { text: "100 bulbs", type: "dud", why: "There is only one bulb." }
    ],
    hint: "Which energy is useful for a bulb?",
    steps: [
      "Useful energy out: 20 J of light.",
      "Total energy in: 100 J.",
      "Efficiency = 20 ÷ 100 = 20%."
    ],
    tip: "Efficiency = useful energy out ÷ total energy in."
  },
  {
    id: "x46", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Robots", topic: "Electricity: series resistance", syllabus: "Electricity: series resistance",
    stem: "A 4 Ω resistor and a 6 Ω resistor are in series. What is the total resistance?",
    target: "series",
    answers: [
      { text: "10 Ω", type: "correct" },
      { text: "2.4 Ω", type: "trap", mis: "Using the parallel rule for series", why: "2.4 Ω is the parallel answer. In series you just add." },
      { text: "24 V", type: "dud", why: "Resistance is in ohms, not volts." }
    ],
    hint: "In series, the current goes through both resistors one after the other.",
    steps: [
      "Resistors in series: add them.",
      "4 Ω + 6 Ω.",
      "Total = 10 Ω."
    ],
    tip: "Series: add. Parallel: the total is less than the smallest one."
  },
  {
    id: "x47", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Travel", topic: "Motion: acceleration", syllabus: "Motion: acceleration",
    stem: "A car starts from rest and speeds up at 2 m/s² for 5 s. What is its final speed?",
    target: null,
    answers: [
      { text: "10 m/s", type: "correct" },
      { text: "2.5 m/s", type: "trap", mis: "Dividing instead of multiplying", why: "Each second adds 2 m/s. After 5 s: 2 × 5 = 10 m/s." },
      { text: "5 cars", type: "dud", why: "There is only one car." }
    ],
    hint: "Acceleration of 2 m/s² means the speed goes up 2 m/s each second.",
    steps: [
      "v = u + at.",
      "u = 0, a = 2, t = 5.",
      "v = 0 + 2 × 5 = 10 m/s."
    ],
    tip: "v = u + at."
  },
  {
    id: "x48", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Sports", topic: "Forces: momentum", syllabus: "Forces: momentum",
    stem: "A 3 kg ball moves at 4 m/s. What is its momentum?",
    target: "momentum",
    answers: [
      { text: "12 kg m/s", type: "correct" },
      { text: "24 J", type: "trap", mis: "Mixing up momentum and kinetic energy", why: "½ × 3 × 4² = 24 J is the kinetic energy. Momentum = mass × velocity." },
      { text: "3 balls", type: "dud", why: "There is only one ball." }
    ],
    hint: "Momentum = mass × velocity.",
    steps: [
      "Momentum p = m × v.",
      "3 kg × 4 m/s.",
      "p = 12 kg m/s."
    ],
    tip: "Momentum uses v. Kinetic energy uses v²."
  },
  {
    id: "x49", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Robots", topic: "Energy: power", syllabus: "Energy: power",
    stem: "A motor lifts a 50 N load up 4 m in 10 s. What is its power?",
    target: "power",
    answers: [
      { text: "20 W", type: "correct" },
      { text: "200 W", type: "trap", mis: "Forgetting to divide by time", why: "200 J is the work done. Power = work ÷ time." },
      { text: "10 s", type: "dud", why: "Power is not a time." }
    ],
    hint: "Find the work done first.",
    steps: [
      "Work = force × distance = 50 × 4 = 200 J.",
      "Power = work ÷ time.",
      "200 J ÷ 10 s = 20 W."
    ],
    tip: "Power is energy per second."
  },
  {
    id: "x50", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Tech", topic: "Light: refraction", syllabus: "Light: refraction",
    stem: "A light ray goes from air into glass at an angle. What happens to it?",
    target: null,
    answers: [
      { text: "It slows down and bends toward the normal", type: "correct" },
      { text: "It speeds up and bends away from the normal", type: "trap", mis: "Getting the direction of bending backwards", why: "Glass is denser than air, so light slows down and bends toward the normal." },
      { text: "It turns into sound", type: "dud", why: "Light cannot turn into sound in glass." }
    ],
    hint: "Is light faster in air or in glass?",
    steps: [
      "Light is slower in glass than in air.",
      "When light slows down, it bends toward the normal.",
      "So it slows down and bends toward the normal."
    ],
    tip: "Into a slower material: toward the normal."
  },
  {
    id: "x51", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Kitchen lab", topic: "Energy: specific heat capacity", syllabus: "Energy: specific heat capacity",
    stem: "How much energy does it take to heat 2 kg of water by 10 °C? (c = 4,200 J/kg °C)",
    target: null,
    answers: [
      { text: "84,000 J", type: "correct" },
      { text: "8,400 J", type: "trap", mis: "Leaving out one of the values", why: "You must use all three: 2 × 4,200 × 10." },
      { text: "10 kg", type: "dud", why: "The question asks for energy." }
    ],
    hint: "Use E = m × c × ΔT.",
    steps: [
      "E = m × c × ΔT.",
      "2 × 4,200 × 10.",
      "E = 84,000 J."
    ],
    tip: "Check you have used mass, c and the temperature change."
  },
  {
    id: "x52", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Sports", topic: "Motion: projectiles", syllabus: "Motion: projectiles",
    stem: "A ball rolls off a table at 3 m/s horizontally. Ignore air resistance. What is its horizontal speed 0.4 s later?",
    target: "horizontal",
    answers: [
      { text: "3 m/s", type: "correct" },
      { text: "7 m/s", type: "trap", mis: "Thinking gravity changes the horizontal speed", why: "Gravity only pulls down. It changes the vertical speed, not the horizontal speed." },
      { text: "0.4 m", type: "dud", why: "The question asks for a speed." }
    ],
    hint: "Which way does gravity pull?",
    steps: [
      "Gravity acts straight down.",
      "No force acts sideways, because air resistance is ignored.",
      "So the horizontal speed stays 3 m/s."
    ],
    tip: "Treat horizontal and vertical motion separately."
  },
  {
    id: "x53", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Tech", topic: "Electricity: transformers", syllabus: "Electricity: transformers",
    stem: "A transformer has 100 turns on the primary coil and 400 turns on the secondary coil. The input is 12 V. What is the output?",
    target: null,
    answers: [
      { text: "48 V", type: "correct" },
      { text: "3 V", type: "trap", mis: "Using the turns ratio upside down", why: "More turns on the secondary means a higher voltage: 12 × 400 ÷ 100." },
      { text: "400 turns", type: "dud", why: "The question asks for a voltage." }
    ],
    hint: "Does the secondary have more or fewer turns?",
    steps: [
      "Vs ÷ Vp = Ns ÷ Np.",
      "Vs = 12 × 400 ÷ 100.",
      "Vs = 48 V. This is a step-up transformer."
    ],
    tip: "More turns on the output side means higher voltage."
  },
  {
    id: "x54", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Robots", topic: "Electricity: parallel resistance", syllabus: "Electricity: parallel resistance",
    stem: "Two 10 Ω resistors are connected in parallel. What is the total resistance?",
    target: "parallel",
    answers: [
      { text: "5 Ω", type: "correct" },
      { text: "20 Ω", type: "trap", mis: "Using the series rule for parallel", why: "20 Ω is the series answer. In parallel the current has two paths, so the total is less." },
      { text: "10 V", type: "dud", why: "Resistance is in ohms, not volts." }
    ],
    hint: "Two paths make it easier or harder for current to flow?",
    steps: [
      "For parallel: 1/R = 1/10 + 1/10 = 2/10.",
      "So R = 10 ÷ 2.",
      "R = 5 Ω."
    ],
    tip: "Parallel total is always less than the smallest resistor."
  },
  {
    id: "x55", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Travel", topic: "Motion: circular motion", syllabus: "Motion: circular motion",
    stem: "A car goes around a roundabout at a steady speed. Which way does the resultant force on the car point?",
    target: null,
    answers: [
      { text: "Toward the centre of the circle", type: "correct" },
      { text: "Outward, away from the centre", type: "trap", mis: "Thinking circular motion needs an outward force", why: "You feel pushed out, but the real resultant force points in, toward the centre." },
      { text: "Nowhere, it is zero because the speed is steady", type: "trap", mis: "Thinking steady speed means no force", why: "The direction keeps changing, so the car is accelerating and needs a force." },
      { text: "Straight up", type: "dud", why: "Nothing pushes the car up into the air." }
    ],
    hint: "Is the car's velocity changing? Think about direction.",
    steps: [
      "The speed is steady, but the direction changes all the time.",
      "A change in velocity needs a resultant force.",
      "For a circle, that force points toward the centre."
    ],
    tip: "Circular motion: the resultant force points to the centre."
  },
  {
    id: "x56", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Sports", topic: "Energy: conservation of energy", syllabus: "Energy: conservation of energy",
    stem: "A 0.5 kg ball is dropped from 20 m. Ignore air resistance. How fast is it moving just before it lands? (g = 10 m/s²)",
    target: null,
    answers: [
      { text: "20 m/s", type: "correct" },
      { text: "400 m/s", type: "trap", mis: "Forgetting the square root", why: "v² = 400, so v = √400 = 20 m/s." },
      { text: "0.5 kg", type: "dud", why: "The question asks for a speed." }
    ],
    hint: "Potential energy at the top becomes kinetic energy at the bottom.",
    steps: [
      "mgh = ½mv², so v² = 2gh.",
      "v² = 2 × 10 × 20 = 400.",
      "v = √400 = 20 m/s. The mass cancels."
    ],
    tip: "If you solve for v², remember to take the square root."
  },
  {
    id: "x57", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Diving", topic: "Matter: gas laws", syllabus: "Matter: gas laws",
    stem: "A sealed gas tank is heated from 27 °C to 54 °C. Its volume stays the same. Does its pressure double?",
    target: "double",
    answers: [
      { text: "No. In kelvin, 300 K to 327 K is only about 9% more", type: "correct" },
      { text: "Yes, because the temperature doubled", type: "trap", mis: "Using °C instead of kelvin", why: "Gas laws need kelvin. 27 °C = 300 K and 54 °C = 327 K. That is not double." },
      { text: "The gas turns into water", type: "dud", why: "Heating a gas does not turn it into water." }
    ],
    hint: "Change both temperatures to kelvin first.",
    steps: [
      "Add 273: 27 °C = 300 K and 54 °C = 327 K.",
      "Pressure is proportional to kelvin temperature.",
      "327 ÷ 300 is about 1.09, so the pressure rises about 9%."
    ],
    tip: "Always use kelvin in gas laws."
  },
  {
    id: "x58", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Quantum: photoelectric effect", syllabus: "Quantum: photoelectric effect",
    stem: "Red light shines on a metal and releases no electrons. You make the red light much brighter. Still no electrons come out. Why?",
    target: null,
    answers: [
      { text: "Each red photon has too little energy, and brightness does not change photon energy", type: "correct" },
      { text: "The light is not bright enough yet", type: "trap", mis: "Thinking brighter light gives each photon more energy", why: "Brighter light means more photons, not stronger ones. Only a higher frequency helps." },
      { text: "Metals do not like red", type: "dud", why: "Metals have no likes or dislikes." }
    ],
    hint: "What decides the energy of one photon?",
    steps: [
      "One photon gives its energy to one electron.",
      "Photon energy depends on frequency: E = hf.",
      "Red light's frequency is too low, however bright it is."
    ],
    tip: "Photon energy depends on frequency, not brightness."
  },
  {
    id: "x59", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Robots", topic: "Electricity: potential dividers", syllabus: "Electricity: potential dividers",
    stem: "A 12 V supply is connected to a 2 kΩ resistor and a 4 kΩ resistor in series. What is the voltage across the 4 kΩ resistor?",
    target: null,
    answers: [
      { text: "8 V", type: "correct" },
      { text: "4 V", type: "trap", mis: "Splitting the voltage the wrong way round", why: "The bigger resistor gets the bigger share: 12 × 4 ÷ 6." },
      { text: "6 V", type: "trap", mis: "Splitting the voltage equally", why: "Voltage splits in proportion to resistance, not equally." },
      { text: "4 kΩ", type: "dud", why: "The question asks for a voltage." }
    ],
    hint: "The voltage splits in the same ratio as the resistances.",
    steps: [
      "Total resistance: 2 + 4 = 6 kΩ.",
      "The 4 kΩ resistor has 4/6 of the resistance.",
      "4/6 × 12 V = 8 V."
    ],
    tip: "In series, the bigger resistor takes the bigger voltage."
  },
  {
    id: "x60", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Music", topic: "Oscillations: pendulums", syllabus: "Oscillations: pendulums",
    stem: "A pendulum is made 4 times longer. What happens to its period?",
    target: null,
    answers: [
      { text: "It doubles", type: "correct" },
      { text: "It becomes 4 times longer", type: "trap", mis: "Thinking the period is proportional to the length", why: "The period depends on the square root of the length. √4 = 2." },
      { text: "The pendulum stops forever", type: "dud", why: "A longer pendulum still swings." }
    ],
    hint: "T = 2π√(L/g). What does a square root do to 4?",
    steps: [
      "T = 2π√(L/g).",
      "Make L 4 times bigger: √4 = 2.",
      "So the period doubles."
    ],
    tip: "The period depends on √L, not on L."
  },
  {
    id: "x61", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Travel", topic: "Forces: Newton's third law", syllabus: "Forces: Newton's third law",
    stem: "A truck crashes into a small car. Which feels the bigger force?",
    target: "bigger",
    answers: [
      { text: "Both feel forces of the same size", type: "correct" },
      { text: "The car, because it is damaged more", type: "trap", mis: "Mixing up a force and its effect", why: "The forces are equal. The car is damaged more because its mass is smaller, so it accelerates more." },
      { text: "The road", type: "dud", why: "The question is about the truck and the car." }
    ],
    hint: "Newton's third law: what can you say about the two forces?",
    steps: [
      "The truck pushes the car. The car pushes the truck.",
      "Newton's third law: these forces are equal and opposite.",
      "The car has less mass, so the same force changes its motion more."
    ],
    tip: "Equal forces can have very different effects."
  },
  {
    id: "x62", subject: "Physics", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Nuclear: half-life", syllabus: "Nuclear: half-life",
    stem: "A radioactive source has an activity of 800 Bq. Its half-life is 3 days. What is its activity after 12 days?",
    target: null,
    answers: [
      { text: "50 Bq", type: "correct" },
      { text: "100 Bq", type: "trap", mis: "Counting the wrong number of half-lives", why: "12 days is 4 half-lives: 800 → 400 → 200 → 100 → 50." },
      { text: "200 Bq", type: "trap", mis: "Dividing by the number of half-lives", why: "Each half-life halves the activity. 800 ÷ 4 is not the same as halving 4 times." },
      { text: "12 days", type: "dud", why: "The question asks for an activity." }
    ],
    hint: "How many half-lives are in 12 days?",
    steps: [
      "12 ÷ 3 = 4 half-lives.",
      "Halve 4 times: 800 → 400 → 200 → 100 → 50.",
      "Activity = 50 Bq."
    ],
    tip: "Count the half-lives, then halve that many times."
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
    id: "x63", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Tech", topic: "Atoms: subatomic particles", syllabus: "Atoms: subatomic particles",
    stem: "Which particle in an atom has a negative charge?",
    target: "negative",
    answers: [
      { text: "Electron", type: "correct" },
      { text: "Neutron", type: "trap", mis: "Mixing up neutrons and electrons", why: "Neutrons have no charge." },
      { text: "Proton", type: "trap", mis: "Mixing up protons and electrons", why: "Protons are positive." },
      { text: "A banana", type: "dud", why: "A banana is not part of an atom." }
    ],
    hint: "Which particle moves around the outside of the nucleus?",
    steps: [
      "Protons are positive.",
      "Neutrons have no charge.",
      "Electrons are negative."
    ],
    tip: "Protons +, neutrons 0, electrons -."
  },
  {
    id: "x64", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Nature", topic: "Atoms: atomic number", syllabus: "Atoms: atomic number",
    stem: "Carbon has an atomic number of 6 and a mass number of 12. How many protons does a carbon atom have?",
    target: "protons",
    answers: [
      { text: "6", type: "correct" },
      { text: "12", type: "trap", mis: "Using the mass number instead of the atomic number", why: "12 is the mass number: protons plus neutrons." },
      { text: "6 kg", type: "dud", why: "Particles are counted, not weighed in kg." }
    ],
    hint: "Which number tells you the protons?",
    steps: [
      "The atomic number is the number of protons.",
      "Carbon's atomic number is 6.",
      "So carbon has 6 protons."
    ],
    tip: "Atomic number = protons. Mass number = protons + neutrons."
  },
  {
    id: "x65", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "School", topic: "Periodic table: groups", syllabus: "Periodic table: groups",
    stem: "Elements in the same group of the periodic table have the same number of what?",
    target: "group",
    answers: [
      { text: "Electrons in the outer shell", type: "correct" },
      { text: "Neutrons", type: "trap", mis: "Thinking neutrons decide the group", why: "Neutrons do not decide the group. The outer electrons do." },
      { text: "Colours", type: "dud", why: "Groups are not about colour." }
    ],
    hint: "What decides how an element reacts?",
    steps: [
      "Groups are the columns of the periodic table.",
      "Each element in a group has the same number of outer electrons.",
      "That is why they react in similar ways."
    ],
    tip: "Group number = outer electrons (for groups 1 to 7)."
  },
  {
    id: "x66", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Tech", topic: "Equations: balancing", syllabus: "Equations: balancing",
    stem: "Complete the balanced equation: 2H₂ + O₂ → ?H₂O. What number goes in front of H₂O?",
    target: null,
    answers: [
      { text: "2", type: "correct" },
      { text: "1", type: "trap", mis: "Not balancing the oxygen atoms", why: "O₂ has 2 oxygen atoms, so you need 2 H₂O on the right." },
      { text: "2 kg", type: "dud", why: "The number in an equation counts molecules, not kg." }
    ],
    hint: "Count the oxygen atoms on the left.",
    steps: [
      "Left: 4 hydrogen atoms and 2 oxygen atoms.",
      "Each H₂O has 2 hydrogen and 1 oxygen.",
      "2H₂O gives 4 hydrogen and 2 oxygen. Balanced."
    ],
    tip: "Count each type of atom on both sides."
  },
  {
    id: "x67", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Kitchen lab", topic: "Bonding: ions", syllabus: "Bonding: ions",
    stem: "A sodium atom loses one electron. What is the charge on the ion it forms?",
    target: "loses",
    answers: [
      { text: "+1", type: "correct" },
      { text: "-1", type: "trap", mis: "Thinking losing electrons makes an ion negative", why: "Electrons are negative. Losing one leaves one more positive charge." },
      { text: "1 kg", type: "dud", why: "Charge is not measured in kg." }
    ],
    hint: "Electrons are negative. What happens when you take a negative away?",
    steps: [
      "A sodium atom has 11 protons and 11 electrons.",
      "It loses 1 electron, so it has 10.",
      "11 positive - 10 negative = +1."
    ],
    tip: "Lose electrons: positive. Gain electrons: negative."
  },
  {
    id: "x68", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Kitchen lab", topic: "Acids: neutralisation", syllabus: "Acids: neutralisation",
    stem: "An acid reacts with an alkali. What are the products?",
    target: null,
    answers: [
      { text: "A salt and water", type: "correct" },
      { text: "A stronger acid", type: "trap", mis: "Thinking an alkali makes an acid stronger", why: "Alkalis cancel out acids. This is neutralisation." },
      { text: "Gold", type: "dud", why: "Acids and alkalis cannot make gold." }
    ],
    hint: "What is the name of this type of reaction?",
    steps: [
      "Acid + alkali is a neutralisation reaction.",
      "The H⁺ and OH⁻ ions make water.",
      "The other ions make a salt."
    ],
    tip: "Acid + alkali → salt + water."
  },
  {
    id: "x69", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Kitchen lab", topic: "Energy: exothermic reactions", syllabus: "Energy: exothermic reactions",
    stem: "A reaction makes its container feel hot. What type of reaction is it?",
    target: "hot",
    answers: [
      { text: "Exothermic", type: "correct" },
      { text: "Endothermic", type: "trap", mis: "Mixing up exothermic and endothermic", why: "Endothermic reactions take in heat, so they feel cold." },
      { text: "Magnetic", type: "dud", why: "Magnetic is not a type of energy change." }
    ],
    hint: "Exo means out. Endo means in.",
    steps: [
      "The container feels hot, so heat is given out.",
      "Giving out heat is exothermic.",
      "Taking in heat is endothermic."
    ],
    tip: "Exo: heat goes out. Endo: heat goes in."
  },
  {
    id: "x70", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Nature", topic: "Calculations: formula mass", syllabus: "Calculations: formula mass",
    stem: "What is the relative formula mass of CO₂? (C = 12, O = 16)",
    target: null,
    answers: [
      { text: "44", type: "correct" },
      { text: "28", type: "trap", mis: "Counting each atom only once", why: "CO₂ has two oxygen atoms: 12 + 2 × 16." },
      { text: "Blue", type: "dud", why: "A mass is a number, not a colour." }
    ],
    hint: "How many oxygen atoms are in CO₂?",
    steps: [
      "CO₂ has 1 carbon and 2 oxygen atoms.",
      "12 + 16 + 16.",
      "Relative formula mass = 44."
    ],
    tip: "The small number counts the atom just before it."
  },
  {
    id: "x71", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Tech", topic: "Metals: reactivity", syllabus: "Metals: reactivity",
    stem: "Which metal reacts most strongly with cold water?",
    target: "most",
    answers: [
      { text: "Potassium", type: "correct" },
      { text: "Iron", type: "trap", mis: "Thinking everyday metals are the most reactive", why: "Iron reacts very slowly. Potassium, a group 1 metal, reacts fast." },
      { text: "Plastic", type: "dud", why: "Plastic is not a metal." }
    ],
    hint: "Group 1 metals are very reactive.",
    steps: [
      "Potassium is in group 1 of the periodic table.",
      "Group 1 metals react strongly with water.",
      "Iron only rusts slowly."
    ],
    tip: "Use the reactivity series: potassium is near the top."
  },
  {
    id: "x72", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Travel", topic: "Separating: distillation", syllabus: "Separating: distillation",
    stem: "How can you get pure water from salty water?",
    target: "pure",
    answers: [
      { text: "Distillation", type: "correct" },
      { text: "Filtering", type: "trap", mis: "Thinking filtering removes dissolved things", why: "Dissolved salt goes straight through filter paper." },
      { text: "Freezing it with a magnet", type: "dud", why: "Magnets do not freeze water." }
    ],
    hint: "How can you turn the water into a gas and leave the salt behind?",
    steps: [
      "Boil the salty water. The water turns into steam.",
      "The salt stays behind.",
      "Cool the steam to get pure water. This is distillation."
    ],
    tip: "Filters remove solid bits, not dissolved ones."
  },
  {
    id: "x73", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Nature", topic: "Bonding: covalent bonds", syllabus: "Bonding: covalent bonds",
    stem: "In a water molecule, how are the atoms held together?",
    target: null,
    answers: [
      { text: "By shared pairs of electrons", type: "correct" },
      { text: "By electrons moving from one atom to another to make ions", type: "trap", mis: "Mixing up ionic and covalent bonding", why: "Non-metal atoms share electrons. Ions form between metals and non-metals." },
      { text: "By glue", type: "dud", why: "There is no glue in a molecule." }
    ],
    hint: "Hydrogen and oxygen are both non-metals.",
    steps: [
      "Hydrogen and oxygen are non-metals.",
      "Non-metals bond by sharing electrons.",
      "Each shared pair is a covalent bond."
    ],
    tip: "Non-metal + non-metal: covalent. Metal + non-metal: ionic."
  },
  {
    id: "x74", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Kitchen lab", topic: "Calculations: concentration", syllabus: "Calculations: concentration",
    stem: "You dissolve 10 g of salt to make 0.5 dm³ of solution. What is the concentration?",
    target: null,
    answers: [
      { text: "20 g/dm³", type: "correct" },
      { text: "5 g/dm³", type: "trap", mis: "Multiplying instead of dividing", why: "Concentration = mass ÷ volume: 10 ÷ 0.5." },
      { text: "0.5 kg", type: "dud", why: "Concentration is not a mass." }
    ],
    hint: "The unit g/dm³ means grams divided by dm³.",
    steps: [
      "Concentration = mass ÷ volume.",
      "10 g ÷ 0.5 dm³.",
      "= 20 g/dm³."
    ],
    tip: "Dividing by a number less than 1 makes the answer bigger."
  },
  {
    id: "x75", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Kitchen lab", topic: "Calculations: percentage yield", syllabus: "Calculations: percentage yield",
    stem: "You expect to make 50 g of product, but you make 40 g. What is the percentage yield?",
    target: null,
    answers: [
      { text: "80%", type: "correct" },
      { text: "125%", type: "trap", mis: "Dividing the wrong way round", why: "Yield = actual ÷ expected: 40 ÷ 50. It cannot be over 100%." },
      { text: "40 kg", type: "dud", why: "The question asks for a percentage." }
    ],
    hint: "Which mass goes on top: the one you made or the one you expected?",
    steps: [
      "Percentage yield = actual ÷ expected × 100.",
      "40 ÷ 50 = 0.8.",
      "0.8 × 100 = 80%."
    ],
    tip: "A yield over 100% means something went wrong."
  },
  {
    id: "x76", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Kitchen lab", topic: "Reactions: conservation of mass", syllabus: "Reactions: conservation of mass",
    stem: "Marble chips react with acid in an open flask on a balance. The mass goes down. Why?",
    target: "open",
    answers: [
      { text: "Carbon dioxide gas escapes into the air", type: "correct" },
      { text: "Some mass is destroyed in the reaction", type: "trap", mis: "Thinking matter can be destroyed", why: "Mass is never destroyed. A gas leaves the open flask." },
      { text: "The flask melts", type: "dud", why: "The flask does not melt." }
    ],
    hint: "The flask is open. What could leave it?",
    steps: [
      "Marble (calcium carbonate) and acid make carbon dioxide gas.",
      "The flask is open, so the gas escapes.",
      "The balance only weighs what is left, so the mass goes down."
    ],
    tip: "If mass seems to change, look for a gas going in or out."
  },
  {
    id: "x77", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Tech", topic: "Rates: catalysts", syllabus: "Rates: catalysts",
    stem: "What does a catalyst do in a reaction?",
    target: null,
    answers: [
      { text: "It speeds up the reaction without being used up", type: "correct" },
      { text: "It is used up to give the reaction more energy", type: "trap", mis: "Thinking a catalyst is a reactant", why: "A catalyst is not used up. It gives the reaction an easier path." },
      { text: "It stops all reactions forever", type: "dud", why: "Catalysts speed reactions up." }
    ],
    hint: "Is there still the same amount of catalyst at the end?",
    steps: [
      "A catalyst gives the reaction a path with lower activation energy.",
      "So more collisions succeed and the reaction is faster.",
      "The catalyst is left unchanged at the end."
    ],
    tip: "Catalysts speed up reactions and are not used up."
  },
  {
    id: "x78", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Nature", topic: "Atoms: isotopes", syllabus: "Atoms: isotopes",
    stem: "Carbon-12 and carbon-14 are isotopes. What is different between them?",
    target: "different",
    answers: [
      { text: "The number of neutrons", type: "correct" },
      { text: "The number of protons", type: "trap", mis: "Mixing up protons and neutrons", why: "If the protons changed, it would be a different element." },
      { text: "Their colour", type: "dud", why: "Isotopes are not about colour." }
    ],
    hint: "They are both carbon. What must stay the same for an element?",
    steps: [
      "Both are carbon, so both have 6 protons.",
      "Carbon-12 has 6 neutrons. Carbon-14 has 8.",
      "Isotopes differ only in neutrons."
    ],
    tip: "Same element, same protons. Isotopes differ in neutrons."
  },
  {
    id: "x79", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Tech", topic: "Reactions: equilibrium", syllabus: "Reactions: equilibrium",
    stem: "A reversible reaction reaches equilibrium in a closed flask. What is true at equilibrium?",
    target: null,
    answers: [
      { text: "The forward and backward reactions go at the same rate", type: "correct" },
      { text: "Both reactions have stopped", type: "trap", mis: "Thinking equilibrium means nothing is happening", why: "Both reactions keep going. They just balance each other." },
      { text: "The flask is empty", type: "dud", why: "The flask still holds the chemicals." }
    ],
    hint: "At equilibrium, do the amounts change? Do the reactions stop?",
    steps: [
      "The forward reaction keeps making products.",
      "The backward reaction keeps making reactants.",
      "They go at the same rate, so the amounts stay the same."
    ],
    tip: "Equilibrium is dynamic: busy, but balanced."
  },
  {
    id: "x80", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Kitchen lab", topic: "Organic: alkanes", syllabus: "Organic: alkanes",
    stem: "Propane is the alkane with 3 carbon atoms. What is its formula?",
    target: "alkane",
    answers: [
      { text: "C₃H₈", type: "correct" },
      { text: "C₃H₆", type: "trap", mis: "Using the alkene formula", why: "C₃H₆ is propene, an alkene. Alkanes follow CₙH₂ₙ₊₂." },
      { text: "H₂O", type: "dud", why: "That is water, which has no carbon." }
    ],
    hint: "Alkanes follow CₙH₂ₙ₊₂.",
    steps: [
      "Alkanes: CₙH₂ₙ₊₂.",
      "n = 3, so 2 × 3 + 2 = 8 hydrogens.",
      "Propane is C₃H₈."
    ],
    tip: "Alkanes: CₙH₂ₙ₊₂. Alkenes: CₙH₂ₙ."
  },
  {
    id: "x81", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Diving", topic: "Calculations: gas volumes", syllabus: "Calculations: gas volumes",
    stem: "At room temperature, 1 mole of any gas fills 24 dm³. What volume does 0.5 mol of oxygen fill?",
    target: null,
    answers: [
      { text: "12 dm³", type: "correct" },
      { text: "48 dm³", type: "trap", mis: "Dividing by the moles instead of multiplying", why: "Volume = moles × 24 = 0.5 × 24." },
      { text: "0.5 g", type: "dud", why: "The question asks for a volume." }
    ],
    hint: "Half a mole fills half the space of one mole.",
    steps: [
      "1 mol fills 24 dm³.",
      "Volume = moles × 24.",
      "0.5 × 24 = 12 dm³."
    ],
    tip: "Gas volume = moles × 24 dm³ at room temperature."
  },
  {
    id: "x82", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Tech", topic: "Reactions: oxidation", syllabus: "Reactions: oxidation",
    stem: "Magnesium burns in oxygen to make magnesium oxide. What happens to the magnesium?",
    target: null,
    answers: [
      { text: "It is oxidised", type: "correct" },
      { text: "It is reduced", type: "trap", mis: "Mixing up oxidation and reduction", why: "Gaining oxygen, and losing electrons, is oxidation." },
      { text: "It becomes water", type: "dud", why: "There is no hydrogen to make water." }
    ],
    hint: "Does magnesium gain oxygen or lose oxygen?",
    steps: [
      "Magnesium joins with oxygen.",
      "Gaining oxygen is oxidation.",
      "Magnesium also loses electrons, which is also oxidation."
    ],
    tip: "OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons)."
  },
  {
    id: "x83", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Calculations: limiting reactants", syllabus: "Calculations: limiting reactants",
    stem: "2H₂ + O₂ → 2H₂O. You have 4 mol of H₂ and 3 mol of O₂. Which reactant runs out first?",
    target: "first",
    answers: [
      { text: "Hydrogen", type: "correct" },
      { text: "Oxygen, because there is less of it", type: "trap", mis: "Comparing amounts without using the ratio", why: "4 mol H₂ needs only 2 mol O₂. Hydrogen runs out, and 1 mol O₂ is left over." },
      { text: "Water", type: "dud", why: "Water is a product, not a reactant." }
    ],
    hint: "How much O₂ does 4 mol of H₂ need?",
    steps: [
      "The ratio is 2 H₂ : 1 O₂.",
      "4 mol H₂ needs 2 mol O₂. You have 3 mol O₂.",
      "So oxygen is in excess and hydrogen runs out first."
    ],
    tip: "Use the ratio, not just the amounts."
  },
  {
    id: "x84", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Kitchen lab", topic: "Calculations: titration", syllabus: "Calculations: titration",
    stem: "25.0 cm³ of NaOH is neutralised by 20.0 cm³ of 0.10 mol/dm³ HCl. They react 1 : 1. What is the concentration of the NaOH?",
    target: null,
    answers: [
      { text: "0.080 mol/dm³", type: "correct" },
      { text: "0.125 mol/dm³", type: "trap", mis: "Putting the volumes the wrong way round", why: "Moles of HCl = 0.10 × 0.020 = 0.002. Then divide by the NaOH volume, 0.025 dm³." },
      { text: "25 cm³", type: "dud", why: "The question asks for a concentration." }
    ],
    hint: "Find the moles of HCl first.",
    steps: [
      "Moles of HCl = 0.10 × 20.0/1000 = 0.0020 mol.",
      "1 : 1, so moles of NaOH = 0.0020 mol.",
      "Concentration = 0.0020 ÷ 0.025 = 0.080 mol/dm³."
    ],
    tip: "Moles first, then divide by the volume in dm³."
  },
  {
    id: "x85", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Equilibrium: pressure", syllabus: "Equilibrium: pressure",
    stem: "N₂ + 3H₂ ⇌ 2NH₃. The pressure is increased. Which way does the equilibrium shift?",
    target: null,
    answers: [
      { text: "To the right, toward fewer gas molecules", type: "correct" },
      { text: "To the left, toward more gas molecules", type: "trap", mis: "Getting the pressure rule backwards", why: "Higher pressure favours the side with fewer gas molecules: 2 on the right, 4 on the left." },
      { text: "It turns into a solid", type: "dud", why: "Changing pressure here does not make a solid." }
    ],
    hint: "Count the gas molecules on each side.",
    steps: [
      "Left side: 1 + 3 = 4 gas molecules. Right side: 2.",
      "Higher pressure favours fewer gas molecules.",
      "So the equilibrium shifts right, making more NH₃."
    ],
    tip: "More pressure: shift to fewer gas molecules."
  },
  {
    id: "x86", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Kitchen lab", topic: "Energy: bond energies", syllabus: "Energy: bond energies",
    stem: "Breaking bonds in a reaction takes in 500 kJ. Making new bonds gives out 700 kJ. What is the overall energy change?",
    target: null,
    answers: [
      { text: "-200 kJ, exothermic", type: "correct" },
      { text: "+200 kJ, endothermic", type: "trap", mis: "Getting the sign of the energy change backwards", why: "More energy is given out than taken in, so the change is negative and exothermic." },
      { text: "700 kg", type: "dud", why: "Energy is not measured in kg." }
    ],
    hint: "Energy change = energy taken in - energy given out.",
    steps: [
      "ΔH = bonds broken - bonds made.",
      "500 - 700 = -200 kJ.",
      "Negative means exothermic."
    ],
    tip: "Negative ΔH: exothermic. Positive ΔH: endothermic."
  },
  {
    id: "x87", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Nature", topic: "Calculations: empirical formula", syllabus: "Calculations: empirical formula",
    stem: "A compound is 75% carbon and 25% hydrogen by mass. What is its empirical formula? (C = 12, H = 1)",
    target: null,
    answers: [
      { text: "CH₄", type: "correct" },
      { text: "C₃H", type: "trap", mis: "Using the mass percentages as the atom ratio", why: "75 : 25 is a mass ratio. Divide each by its atomic mass first." },
      { text: "H₂O", type: "dud", why: "There is no oxygen in the compound." }
    ],
    hint: "Divide each percentage by the atomic mass.",
    steps: [
      "Carbon: 75 ÷ 12 = 6.25. Hydrogen: 25 ÷ 1 = 25.",
      "Divide both by the smaller: 6.25 ÷ 6.25 = 1 and 25 ÷ 6.25 = 4.",
      "The ratio is 1 : 4, so CH₄."
    ],
    tip: "Mass ÷ atomic mass, then find the simplest ratio."
  },
  {
    id: "x88", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Kitchen lab", topic: "Acids: calculating pH", syllabus: "Acids: calculating pH",
    stem: "What is the pH of a 0.01 mol/dm³ solution of hydrochloric acid, a strong acid?",
    target: null,
    answers: [
      { text: "2", type: "correct" },
      { text: "0.01", type: "trap", mis: "Giving the concentration instead of the pH", why: "pH = -log[H⁺] = -log(0.01)." },
      { text: "-2", type: "trap", mis: "Forgetting the minus sign in the pH formula", why: "log(0.01) = -2, so -log(0.01) = 2." },
      { text: "2 litres", type: "dud", why: "pH has no units." }
    ],
    hint: "pH = -log[H⁺].",
    steps: [
      "A strong acid fully ionises, so [H⁺] = 0.01 mol/dm³.",
      "pH = -log(0.01).",
      "log(0.01) = -2, so pH = 2."
    ],
    tip: "Every 10 times more H⁺ lowers the pH by 1."
  },
  {
    id: "x89", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Kitchen lab", topic: "Atoms: electron shells", syllabus: "Atoms: electron shells",
    stem: "Sodium has 11 electrons. What is its electron arrangement?",
    target: null,
    answers: [
      { text: "2, 8, 1", type: "correct" },
      { text: "2, 9", type: "trap", mis: "Overfilling the second shell", why: "The second shell holds 8 at most, so the 11th electron starts a third shell." },
      { text: "11 kg", type: "dud", why: "Electrons are counted, not weighed in kg." }
    ],
    hint: "How many electrons fit in the first and second shells?",
    steps: [
      "The first shell holds 2.",
      "The second shell holds up to 8.",
      "11 - 2 - 8 = 1 in the third shell: 2, 8, 1."
    ],
    tip: "Shells fill 2, then 8, then 8."
  },
  {
    id: "x90", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Rates: order of reaction", syllabus: "Rates: order of reaction",
    stem: "In an experiment, doubling the concentration of one reactant doubles the rate. What is the order with respect to that reactant?",
    target: "doubles",
    answers: [
      { text: "First order", type: "correct" },
      { text: "Second order", type: "trap", mis: "Thinking doubling means second order", why: "Second order would make the rate 4 times faster, because 2² = 4." },
      { text: "Zero cm", type: "dud", why: "Order is not a length." }
    ],
    hint: "Rate = k[A]ⁿ. If [A] doubles and the rate doubles, what is n?",
    steps: [
      "Rate = k[A]ⁿ.",
      "Doubling [A] multiplies the rate by 2ⁿ.",
      "2ⁿ = 2, so n = 1: first order."
    ],
    tip: "Doubling gives ×2 for first order, ×4 for second, ×1 for zero."
  },
  {
    id: "x91", subject: "Chemistry", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Nature", topic: "Bonding: forces between molecules", syllabus: "Bonding: forces between molecules",
    stem: "Why does water have a much higher boiling point than methane?",
    target: null,
    answers: [
      { text: "Water molecules form hydrogen bonds with each other", type: "correct" },
      { text: "Water has stronger covalent bonds inside each molecule", type: "trap", mis: "Mixing up bonds inside molecules with forces between them", why: "Boiling separates molecules. It does not break the bonds inside them." },
      { text: "Water is heavier than the Sun", type: "dud", why: "That is not true, and it does not explain boiling." }
    ],
    hint: "When water boils, what is pulled apart: the atoms in a molecule, or the molecules?",
    steps: [
      "Boiling pulls molecules apart from each other.",
      "Water has O-H bonds, so its molecules form hydrogen bonds.",
      "These strong forces between molecules need more energy to break."
    ],
    tip: "Boiling points depend on forces between molecules."
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
  {
    id: "x92", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Human body", topic: "Cells: cell parts", syllabus: "Cells: cell parts",
    stem: "Which part of a cell holds the DNA and controls the cell's activities?",
    target: null,
    answers: [
      { text: "The nucleus", type: "correct" },
      { text: "The cell membrane", type: "trap", mis: "Mixing up the nucleus and the membrane", why: "The membrane controls what goes in and out of the cell." },
      { text: "The skeleton", type: "dud", why: "A single cell has no skeleton of bones." }
    ],
    hint: "Which part is the cell's control centre?",
    steps: [
      "The nucleus contains the DNA.",
      "DNA holds the instructions for the cell.",
      "So the nucleus controls the cell."
    ],
    tip: "Nucleus: control. Membrane: entry and exit."
  },
  {
    id: "x93", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Nature", topic: "Cells: plant and animal cells", syllabus: "Cells: plant and animal cells",
    stem: "Which structure is found in plant cells but not in animal cells?",
    target: "not",
    answers: [
      { text: "A cell wall", type: "correct" },
      { text: "Mitochondria", type: "trap", mis: "Thinking plants do not respire", why: "Plant cells have mitochondria too. Plants respire all the time." },
      { text: "Bones", type: "dud", why: "Cells do not contain bones." }
    ],
    hint: "What makes a plant cell stiff?",
    steps: [
      "Both plant and animal cells have a nucleus, membrane and mitochondria.",
      "Only plant cells have a cell wall, chloroplasts and a large vacuole.",
      "So the cell wall is the plant-only structure here."
    ],
    tip: "Plant-only: cell wall, chloroplasts, large vacuole."
  },
  {
    id: "x94", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "School", topic: "Cells: diffusion", syllabus: "Cells: diffusion",
    stem: "Someone sprays perfume. Soon you can smell it across the room. What process is this?",
    target: null,
    answers: [
      { text: "Diffusion", type: "correct" },
      { text: "Osmosis", type: "trap", mis: "Using osmosis for any spreading", why: "Osmosis is only water moving through a membrane." },
      { text: "Photosynthesis", type: "dud", why: "Photosynthesis is how plants make food." }
    ],
    hint: "Particles spread from where there are many to where there are few.",
    steps: [
      "Perfume particles start in one place.",
      "They spread from high concentration to low concentration.",
      "This spreading is diffusion."
    ],
    tip: "Diffusion: any particles, high to low. Osmosis: water only."
  },
  {
    id: "x95", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Sports", topic: "Circulation: blood vessels", syllabus: "Circulation: blood vessels",
    stem: "Which blood vessels carry blood away from the heart?",
    target: "away",
    answers: [
      { text: "Arteries", type: "correct" },
      { text: "Veins", type: "trap", mis: "Mixing up arteries and veins", why: "Veins carry blood back to the heart." },
      { text: "Nerves", type: "dud", why: "Nerves carry signals, not blood." }
    ],
    hint: "A for arteries, A for away.",
    steps: [
      "Arteries carry blood away from the heart.",
      "Veins carry blood back to the heart.",
      "Capillaries connect them."
    ],
    tip: "Arteries: Away. Veins: back in."
  },
  {
    id: "x96", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "School", topic: "Cells: microscopes", syllabus: "Cells: microscopes",
    stem: "A microscope has a 10× eyepiece and a 40× lens. What is the total magnification?",
    target: null,
    answers: [
      { text: "400×", type: "correct" },
      { text: "50×", type: "trap", mis: "Adding instead of multiplying", why: "Magnifications multiply: 10 × 40." },
      { text: "40 cm", type: "dud", why: "Magnification has no units." }
    ],
    hint: "Each lens makes the image bigger again.",
    steps: [
      "The lens makes it 40 times bigger.",
      "The eyepiece makes that 10 times bigger again.",
      "10 × 40 = 400×."
    ],
    tip: "Total magnification = eyepiece × lens."
  },
  {
    id: "x97", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Food", topic: "Digestion: enzymes", syllabus: "Digestion: enzymes",
    stem: "Which enzyme breaks down starch?",
    target: "starch",
    answers: [
      { text: "Amylase", type: "correct" },
      { text: "Protease", type: "trap", mis: "Mixing up digestive enzymes", why: "Protease breaks down protein, not starch." },
      { text: "Salt", type: "dud", why: "Salt is not an enzyme." }
    ],
    hint: "This enzyme is in your saliva.",
    steps: [
      "Starch is a carbohydrate.",
      "Amylase breaks starch into sugars.",
      "Protease breaks proteins, and lipase breaks fats."
    ],
    tip: "Amylase: starch. Protease: protein. Lipase: fat."
  },
  {
    id: "x98", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Sports", topic: "Breathing: gas exchange", syllabus: "Breathing: gas exchange",
    stem: "Where does oxygen pass into the blood in the lungs?",
    target: null,
    answers: [
      { text: "In the alveoli", type: "correct" },
      { text: "In the windpipe", type: "trap", mis: "Thinking air enters the blood as soon as you breathe in", why: "The windpipe only carries air. Gas exchange happens in the tiny alveoli." },
      { text: "In the stomach", type: "dud", why: "The stomach is for food, not air." }
    ],
    hint: "Look for the tiny air sacs at the ends of the airways.",
    steps: [
      "Air travels down the windpipe and the bronchi.",
      "It reaches tiny air sacs called alveoli.",
      "Oxygen diffuses from the alveoli into the blood."
    ],
    tip: "Alveoli: tiny, thin and close to blood, so gases pass easily."
  },
  {
    id: "x99", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Human body", topic: "Genetics: genes", syllabus: "Genetics: genes",
    stem: "What is a gene?",
    target: null,
    answers: [
      { text: "A section of DNA that codes for a protein", type: "correct" },
      { text: "A whole chromosome", type: "trap", mis: "Mixing up genes and chromosomes", why: "A chromosome holds many genes." },
      { text: "A pair of jeans", type: "dud", why: "Jeans are clothes. Genes are in your cells." }
    ],
    hint: "Is a gene bigger or smaller than a chromosome?",
    steps: [
      "DNA is a long molecule packed into chromosomes.",
      "A gene is a short section of that DNA.",
      "Each gene codes for a protein."
    ],
    tip: "DNA > chromosome > gene, from whole to part."
  },
  {
    id: "x100", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Animals", topic: "Classification: mammals", syllabus: "Classification: mammals",
    stem: "Bats can fly. Why are they mammals, not birds?",
    target: null,
    answers: [
      { text: "They have fur and feed their young on milk", type: "correct" },
      { text: "Because they fly at night", type: "trap", mis: "Thinking how an animal moves decides its group", why: "Flying does not decide the group. Fur and milk do." },
      { text: "Because bats are made of plastic", type: "dud", why: "Bats are living animals." }
    ],
    hint: "What do all mammals have in common?",
    steps: [
      "Mammals have hair or fur.",
      "Mammals feed their young on milk.",
      "Bats have both, so they are mammals."
    ],
    tip: "Classify by body features, not by how an animal moves."
  },
  {
    id: "x101", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 1 },
    theme: "Nature", topic: "Ecology: producers", syllabus: "Ecology: producers",
    stem: "In an ecosystem, what is a producer?",
    target: "producer",
    answers: [
      { text: "A living thing that makes its own food, like a plant", type: "correct" },
      { text: "An animal that eats plants", type: "trap", mis: "Mixing up producers and consumers", why: "That is a primary consumer." },
      { text: "A factory", type: "dud", why: "In ecology, a producer is a living thing." }
    ],
    hint: "Who makes food from sunlight?",
    steps: [
      "Producers make their own food by photosynthesis.",
      "Plants and algae are producers.",
      "Animals that eat them are consumers."
    ],
    tip: "Producers make food. Consumers eat food."
  },
  {
    id: "x102", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Human body", topic: "Cells: mitosis", syllabus: "Cells: mitosis",
    stem: "A body cell with 46 chromosomes divides by mitosis. How many chromosomes does each new cell have?",
    target: "mitosis",
    answers: [
      { text: "46", type: "correct" },
      { text: "23", type: "trap", mis: "Mixing up mitosis and meiosis", why: "Meiosis halves the number. Mitosis makes exact copies." },
      { text: "46 cells", type: "dud", why: "The question asks about chromosomes in each cell." }
    ],
    hint: "Mitosis is for growth and repair. Should the new cells be the same as the old one?",
    steps: [
      "Mitosis makes two identical cells.",
      "Each new cell gets a full copy of the chromosomes.",
      "So each new cell has 46."
    ],
    tip: "Mitosis: same number. Meiosis: half."
  },
  {
    id: "x103", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Food", topic: "Hormones: blood sugar", syllabus: "Hormones: blood sugar",
    stem: "Your blood sugar rises after a meal. Which hormone lowers it?",
    target: "lowers",
    answers: [
      { text: "Insulin", type: "correct" },
      { text: "Glucagon", type: "trap", mis: "Mixing up insulin and glucagon", why: "Glucagon raises blood sugar when it is too low." },
      { text: "Saliva", type: "dud", why: "Saliva is not a hormone." }
    ],
    hint: "This hormone is missing or not working in diabetes.",
    steps: [
      "After a meal, glucose in the blood rises.",
      "The pancreas releases insulin.",
      "Insulin helps cells take in glucose, so blood sugar falls."
    ],
    tip: "Insulin lowers sugar. Glucagon raises it."
  },
  {
    id: "x104", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Nature", topic: "Cells: active transport", syllabus: "Cells: active transport",
    stem: "Root hair cells take in minerals, even when the soil has fewer minerals than the cell. How?",
    target: "fewer",
    answers: [
      { text: "By active transport, using energy", type: "correct" },
      { text: "By diffusion", type: "trap", mis: "Thinking diffusion can move things from low to high", why: "Diffusion only moves particles from high to low concentration." },
      { text: "By magic soil", type: "dud", why: "Soil is not magic." }
    ],
    hint: "Moving against a concentration difference needs something extra.",
    steps: [
      "The minerals move from low concentration to high.",
      "That is against the gradient, so diffusion cannot do it.",
      "Active transport uses energy from respiration to do it."
    ],
    tip: "Against the gradient: active transport, which needs energy."
  },
  {
    id: "x105", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Sports", topic: "Circulation: the heart", syllabus: "Circulation: the heart",
    stem: "Which chamber of the heart pumps blood to the whole body?",
    target: "whole",
    answers: [
      { text: "The left ventricle", type: "correct" },
      { text: "The right ventricle", type: "trap", mis: "Mixing up the two sides of the heart", why: "The right ventricle pumps blood only to the lungs." },
      { text: "The stomach", type: "dud", why: "The stomach is not part of the heart." }
    ],
    hint: "Which chamber has the thickest wall?",
    steps: [
      "The right side pumps blood to the lungs.",
      "The left side pumps blood to the body.",
      "The left ventricle has the thickest wall to pump hardest."
    ],
    tip: "Right to the lungs, left to the body."
  },
  {
    id: "x106", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Nature", topic: "Plants: limiting factors", syllabus: "Plants: limiting factors",
    stem: "A plant is in bright light and warm air, but it grows slowly. Adding more carbon dioxide makes it grow faster. What was limiting photosynthesis?",
    target: "limiting",
    answers: [
      { text: "Carbon dioxide", type: "correct" },
      { text: "Light", type: "trap", mis: "Ignoring the evidence", why: "The light was already bright. Adding carbon dioxide helped, so carbon dioxide was limiting." },
      { text: "Music", type: "dud", why: "Music does not limit photosynthesis." }
    ],
    hint: "What did adding something extra change?",
    steps: [
      "Light and temperature were already high.",
      "Adding carbon dioxide sped up growth.",
      "So carbon dioxide was the limiting factor."
    ],
    tip: "The limiting factor is the one that, when raised, raises the rate."
  },
  {
    id: "x107", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Kitchen lab", topic: "Nerves: reflexes", syllabus: "Nerves: reflexes",
    stem: "You touch a hot pan and pull your hand away before you feel pain. Why is it so fast?",
    target: null,
    answers: [
      { text: "The signal goes through the spinal cord, without waiting for the brain", type: "correct" },
      { text: "Your brain thinks very quickly", type: "trap", mis: "Thinking the brain decides every reaction", why: "A reflex skips the thinking part of the brain. That is why it is so fast." },
      { text: "The pan pushes your hand away", type: "dud", why: "Pans do not push." }
    ],
    hint: "Does a reflex wait for you to decide?",
    steps: [
      "A sensor in your skin sends a signal.",
      "In the spinal cord, a relay neurone passes it straight to a motor neurone.",
      "Your muscle moves before the brain feels the pain."
    ],
    tip: "Reflexes are automatic and skip conscious thought."
  },
  {
    id: "x108", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Human body", topic: "Body: kidneys", syllabus: "Body: kidneys",
    stem: "What is the main job of the kidneys?",
    target: null,
    answers: [
      { text: "Filtering the blood and making urine", type: "correct" },
      { text: "Digesting food", type: "trap", mis: "Mixing up the jobs of organs", why: "Digestion happens in the gut, not the kidneys." },
      { text: "Pumping air", type: "dud", why: "Air is moved by the lungs." }
    ],
    hint: "The kidneys remove waste from something that flows through them.",
    steps: [
      "Blood flows through the kidneys.",
      "They filter out waste such as urea and extra water.",
      "This waste leaves the body as urine."
    ],
    tip: "Kidneys clean the blood."
  },
  {
    id: "x109", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Human body", topic: "Genetics: variation", syllabus: "Genetics: variation",
    stem: "Identical twins grow up in different countries and end up with different weights. What does this show?",
    target: "Identical",
    answers: [
      { text: "The environment affects weight", type: "correct" },
      { text: "Their genes are different", type: "trap", mis: "Thinking all differences come from genes", why: "Identical twins have the same genes." },
      { text: "Weight is a colour", type: "dud", why: "Weight is not a colour." }
    ],
    hint: "What do identical twins share?",
    steps: [
      "Identical twins have the same genes.",
      "So genes cannot explain the difference.",
      "The difference must come from the environment, such as diet and exercise."
    ],
    tip: "Same genes, different results: look at the environment."
  },
  {
    id: "x110", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Nature", topic: "Ecology: sampling", syllabus: "Ecology: sampling",
    stem: "You count 4 daisies in a 1 m² square. The field is 500 m². Estimate the number of daisies in the field.",
    target: null,
    answers: [
      { text: "2,000", type: "correct" },
      { text: "504", type: "trap", mis: "Adding instead of multiplying", why: "There are about 4 daisies in every 1 m², so multiply: 4 × 500." },
      { text: "4 fields", type: "dud", why: "There is only one field." }
    ],
    hint: "How many 1 m² squares fit in the field?",
    steps: [
      "The field holds 500 squares of 1 m².",
      "Each has about 4 daisies.",
      "4 × 500 = 2,000 daisies."
    ],
    tip: "Estimate = count per m² × total area. More squares give a better estimate."
  },
  {
    id: "x111", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Human body", topic: "Immunity: antibodies", syllabus: "Immunity: antibodies",
    stem: "What do white blood cells make to fight one particular germ?",
    target: null,
    answers: [
      { text: "Antibodies", type: "correct" },
      { text: "Antibiotics", type: "trap", mis: "Mixing up antibodies and antibiotics", why: "Antibiotics are medicines. Antibodies are made by your body." },
      { text: "Bones", type: "dud", why: "White blood cells do not make bones." }
    ],
    hint: "This word starts with \"anti\" and is made inside you.",
    steps: [
      "White blood cells recognise a germ.",
      "Some make antibodies that fit that germ.",
      "The antibodies help destroy it."
    ],
    tip: "Antibodies: made by you. Antibiotics: medicine."
  },
  {
    id: "x112", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Human body", topic: "Genetics: meiosis", syllabus: "Genetics: meiosis",
    stem: "Why does meiosis create variation?",
    target: null,
    answers: [
      { text: "Chromosomes are shuffled and mixed, so each gamete gets a different set", type: "correct" },
      { text: "Meiosis makes cells identical to the parent cell", type: "trap", mis: "Mixing up mitosis and meiosis", why: "That describes mitosis. Meiosis makes cells that are all different." },
      { text: "Gametes choose their genes", type: "dud", why: "Cells cannot choose." }
    ],
    hint: "In meiosis, how are the chromosome pairs split up?",
    steps: [
      "Pairs of chromosomes line up in a random order.",
      "Parts of chromosomes can swap places.",
      "So each gamete gets a different mix of genes."
    ],
    tip: "Meiosis: half the chromosomes, all different."
  },
  {
    id: "x113", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Human body", topic: "Genetics: sex-linked traits", syllabus: "Genetics: sex-linked traits",
    stem: "Colour blindness is recessive and on the X chromosome. A carrier mother (XᴮXᵇ) and a father with normal vision (XᴮY) have a son. What is the chance he is colour blind?",
    target: "son",
    answers: [
      { text: "1 in 2", type: "correct" },
      { text: "1 in 4", type: "trap", mis: "Using all children instead of only sons", why: "1 in 4 of all children are colour-blind boys. But we already know this child is a son." },
      { text: "The son will be a daughter", type: "dud", why: "A son cannot be a daughter." }
    ],
    hint: "A son gets his X chromosome from which parent?",
    steps: [
      "A son gets Y from his father and one X from his mother.",
      "The mother passes Xᴮ or Xᵇ, each with chance 1/2.",
      "If he gets Xᵇ, he is colour blind: 1 in 2."
    ],
    tip: "Read who the chance is about: all children, or only sons."
  },
  {
    id: "x114", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Genetics: protein synthesis", syllabus: "Genetics: protein synthesis",
    stem: "During protein synthesis, what does mRNA do?",
    target: "mRNA",
    answers: [
      { text: "It carries a copy of a gene from the nucleus to a ribosome", type: "correct" },
      { text: "It joins amino acids together by itself", type: "trap", mis: "Mixing up the jobs of mRNA and ribosomes", why: "The ribosome joins the amino acids. mRNA carries the code." },
      { text: "It digests food", type: "dud", why: "Digestion happens in the gut." }
    ],
    hint: "DNA stays in the nucleus. How does its code reach the ribosome?",
    steps: [
      "DNA is copied into mRNA in the nucleus.",
      "mRNA leaves the nucleus and goes to a ribosome.",
      "The ribosome reads it and joins the amino acids."
    ],
    tip: "mRNA is the messenger. The ribosome is the builder."
  },
  {
    id: "x115", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Nature", topic: "Cells: osmosis in plants", syllabus: "Cells: osmosis in plants",
    stem: "Plant cells are put in pure water. Red blood cells burst in pure water, but the plant cells do not. Why?",
    target: null,
    answers: [
      { text: "The cell wall stops them bursting, so they become firm", type: "correct" },
      { text: "Plant cells do not take in water", type: "trap", mis: "Thinking plant cells stop osmosis", why: "Water does move in. The strong wall holds the cell in shape." },
      { text: "Plants cannot get wet", type: "dud", why: "Plants get wet in the rain." }
    ],
    hint: "What do plant cells have that red blood cells do not?",
    steps: [
      "Water moves into both kinds of cell by osmosis.",
      "Red blood cells have only a membrane, so they burst.",
      "Plant cells have a strong cell wall, so they swell and become firm (turgid)."
    ],
    tip: "The cell wall protects plant cells from bursting."
  },
  {
    id: "x116", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Sports", topic: "Homeostasis: temperature control", syllabus: "Homeostasis: temperature control",
    stem: "Your body temperature rises during hard exercise. What does your body do?",
    target: "rises",
    answers: [
      { text: "It sweats and widens blood vessels near the skin to lose heat", type: "correct" },
      { text: "It shivers to cool down", type: "trap", mis: "Mixing up responses to heat and cold", why: "Shivering makes heat. It happens when you are cold." },
      { text: "It turns off the Sun", type: "dud", why: "Your body cannot affect the Sun." }
    ],
    hint: "Does your body need to lose heat or make heat?",
    steps: [
      "The body detects that it is too hot.",
      "Sweat evaporates from the skin and cools it.",
      "Wider blood vessels near the skin let more heat escape."
    ],
    tip: "Too hot: sweat and widen vessels. Too cold: shiver and narrow vessels."
  },
  {
    id: "x117", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "School", topic: "Working scientifically: data", syllabus: "Working scientifically: data",
    stem: "Two groups of plants have mean heights of 20 cm and 22 cm. The ranges of the two groups overlap a lot. What can you conclude?",
    target: "overlap",
    answers: [
      { text: "The difference may be due to chance. You need more data or a statistical test", type: "correct" },
      { text: "Group B is definitely taller", type: "trap", mis: "Treating a small difference as proof", why: "With a big overlap, a 2 cm difference could happen by chance." },
      { text: "Plants have no height", type: "dud", why: "Plants do have height." }
    ],
    hint: "If the ranges overlap a lot, how sure can you be?",
    steps: [
      "The means differ by only 2 cm.",
      "The ranges overlap a lot, so many plants in each group are similar.",
      "You cannot be sure. Use a statistical test or collect more data."
    ],
    tip: "Check the spread, not just the means."
  },
  {
    id: "x118", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Sports", topic: "Respiration: anaerobic", syllabus: "Respiration: anaerobic",
    stem: "During very hard exercise, your muscles respire anaerobically. What does this make in humans?",
    target: "humans",
    answers: [
      { text: "Lactic acid, and much less energy", type: "correct" },
      { text: "Ethanol and carbon dioxide", type: "trap", mis: "Mixing up anaerobic respiration in animals and yeast", why: "That is what yeast makes. Human muscles make lactic acid." },
      { text: "Oxygen", type: "dud", why: "Anaerobic means without oxygen. It does not make oxygen." }
    ],
    hint: "Is the question about yeast or about people?",
    steps: [
      "Anaerobic respiration happens without oxygen.",
      "In human muscles, glucose becomes lactic acid.",
      "It releases much less energy than aerobic respiration."
    ],
    tip: "Humans: lactic acid. Yeast: ethanol and carbon dioxide."
  },
  {
    id: "x119", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Genetics: mutations", syllabus: "Genetics: mutations",
    stem: "A mutation changes one base in a gene, but the protein stays exactly the same. How can this happen?",
    target: null,
    answers: [
      { text: "The new triplet still codes for the same amino acid", type: "correct" },
      { text: "Every mutation changes the protein", type: "trap", mis: "Thinking every mutation has an effect", why: "The genetic code has spare triplets, so some changes are silent." },
      { text: "The protein is made of plastic", type: "dud", why: "Proteins are made of amino acids." }
    ],
    hint: "Can two different triplets code for the same amino acid?",
    steps: [
      "Three bases, a triplet, code for one amino acid.",
      "Many amino acids have more than one triplet.",
      "If the new triplet codes for the same amino acid, the protein does not change."
    ],
    tip: "The genetic code has more triplets than amino acids."
  },
  {
    id: "x120", subject: "Biology", track: "science", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Nature", topic: "Ecology: carbon cycle", syllabus: "Ecology: carbon cycle",
    stem: "Which process removes carbon dioxide from the air?",
    target: "removes",
    answers: [
      { text: "Photosynthesis", type: "correct" },
      { text: "Respiration", type: "trap", mis: "Mixing up respiration and photosynthesis", why: "Respiration releases carbon dioxide into the air." },
      { text: "Volcanoes erupting", type: "trap", mis: "Mixing up what adds and what removes carbon", why: "Volcanoes add carbon dioxide to the air." },
      { text: "Clouds eating it", type: "dud", why: "Clouds do not eat." }
    ],
    hint: "Which process uses carbon dioxide to make glucose?",
    steps: [
      "Plants take in carbon dioxide.",
      "They use it to make glucose in photosynthesis.",
      "This removes carbon dioxide from the air."
    ],
    tip: "Photosynthesis takes CO₂ in. Respiration and burning put it out."
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
  },
  {
    id: "l6", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "School", topic: "Vocabulary: prefixes", syllabus: "Vocabulary: prefixes",
    stem: "Unhappy means not happy. What does unkind mean?",
    target: "unkind",
    answers: [
      { text: "Not kind", type: "correct" },
      { text: "Very kind", type: "trap", mis: "Ignoring the prefix", why: "Un- means not. It flips the meaning of the word." },
      { text: "A kind of bird", type: "dud", why: "Unkind describes how someone acts. It is not an animal." }
    ],
    hint: "Look at the first part of the word: un-.",
    steps: [
      "Unkind has two parts: un + kind.",
      "Un- means not.",
      "So unkind means not kind."
    ],
    tip: "Un-, dis- and im- at the start often mean not."
  },
  {
    id: "l7", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Phones", topic: "Reading: pronouns", syllabus: "Reading: pronouns",
    stem: "Tom called his grandmother. She was happy to hear from him. Who was happy?",
    target: "She",
    answers: [
      { text: "Tom's grandmother", type: "correct" },
      { text: "Tom", type: "trap", mis: "Linking a pronoun to the wrong person", why: "\"She\" is used for a woman or girl. In this story, Tom is \"him\"." },
      { text: "The phone", type: "dud", why: "A phone cannot feel happy." }
    ],
    hint: "Who in the story could be called \"she\"?",
    steps: [
      "Find the pronoun: she.",
      "Look back for a woman or girl.",
      "The grandmother is the only one. She was happy."
    ],
    tip: "Look back to find who a pronoun stands for."
  },
  {
    id: "l8", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "School", topic: "Grammar: words that sound the same", syllabus: "Grammar: words that sound the same",
    stem: "Which sentence uses \"their\" correctly?",
    target: null,
    answers: [
      { text: "The students left their bags at the door.", type: "correct" },
      { text: "Their is a cat on the roof.", type: "trap", mis: "Mixing up words that sound the same", why: "This needs \"There\", which tells where something is." },
      { text: "Their their their.", type: "dud", why: "That is not a sentence." }
    ],
    hint: "\"Their\" means belonging to them.",
    steps: [
      "Their means it belongs to them.",
      "There tells you a place, or that something exists.",
      "The bags belong to the students, so \"their bags\" is right."
    ],
    tip: "Their = belongs to them. There = a place. They're = they are."
  },
  {
    id: "l9", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Food", topic: "Reading: order words", syllabus: "Reading: order words",
    stem: "Read: \"First, wash your hands. Then cut the bread. Finally, add the cheese.\" What do you do second?",
    target: "second",
    answers: [
      { text: "Cut the bread", type: "correct" },
      { text: "Add the cheese", type: "trap", mis: "Mixing up the order words", why: "\"Finally\" means last, not second." },
      { text: "Eat the plate", type: "dud", why: "Plates are not food." }
    ],
    hint: "Find the words First, Then and Finally.",
    steps: [
      "First: wash your hands.",
      "Then, the second step: cut the bread.",
      "Finally, the last step: add the cheese."
    ],
    tip: "Order words tell you the steps: first, then, next, finally."
  },
  {
    id: "l10", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Travel", topic: "Vocabulary: opposites", syllabus: "Vocabulary: opposites",
    stem: "What is the opposite of \"ancient\"?",
    target: "opposite",
    answers: [
      { text: "Modern", type: "correct" },
      { text: "Old", type: "trap", mis: "Choosing a word with the same meaning", why: "Old means almost the same as ancient. The opposite is new or modern." },
      { text: "Purple", type: "dud", why: "Purple is a colour. It is not the opposite of ancient." }
    ],
    hint: "Ancient means very, very old.",
    steps: [
      "Ancient means very old.",
      "The opposite of old is new.",
      "Modern means new, from now."
    ],
    tip: "Opposite means it is not the same. It is the other end."
  },
  {
    id: "l11", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "School", topic: "Reading: instruction words", syllabus: "Reading: instruction words",
    stem: "A sign says: \"All students may leave EXCEPT those in Class 2.\" Can Class 2 students leave?",
    target: "EXCEPT",
    answers: [
      { text: "No, they must stay", type: "correct" },
      { text: "Yes, everyone can leave", type: "trap", mis: "Skipping the word EXCEPT", why: "EXCEPT takes Class 2 out of the group that can leave." },
      { text: "Class 2 is a fish", type: "dud", why: "Class 2 is a group of students." }
    ],
    hint: "What does EXCEPT do to Class 2?",
    steps: [
      "\"All students may leave\" is the main rule.",
      "EXCEPT means \"but not\".",
      "So Class 2 cannot leave. They must stay."
    ],
    tip: "Words like EXCEPT and NOT change the whole answer."
  },
  {
    id: "l12", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Sports", topic: "Vocabulary: meaning from context", syllabus: "Vocabulary: meaning from context",
    stem: "Leila was exhausted after the long race, so she went straight to bed. What does exhausted mean?",
    target: "exhausted",
    answers: [
      { text: "Very tired", type: "correct" },
      { text: "Very excited", type: "trap", mis: "Guessing from how a word looks", why: "Exhausted and excited both start with ex, but the clue is that she went to bed." },
      { text: "Very tall", type: "dud", why: "Height has nothing to do with the race or bed." }
    ],
    hint: "What did Leila do after the race? Use that clue.",
    steps: [
      "She ran a long race.",
      "Then she went straight to bed.",
      "People go to bed when they are very tired."
    ],
    tip: "Look at the rest of the sentence for clues to a new word."
  },
  {
    id: "l13", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Nature", topic: "Reading: fact and opinion", syllabus: "Reading: fact and opinion",
    stem: "Which sentence is a fact?",
    target: "fact",
    answers: [
      { text: "The Nile is a river in Africa.", type: "correct" },
      { text: "Football is the best sport in the world.", type: "trap", mis: "Mixing up facts and opinions", why: "\"Best\" is what some people think. Not everyone agrees, so it is an opinion." },
      { text: "Banana banana banana.", type: "dud", why: "That is not a sentence." }
    ],
    hint: "A fact can be checked. Can you check \"best\"?",
    steps: [
      "A fact can be proved true.",
      "An opinion is what someone thinks or feels.",
      "You can check a map: the Nile is in Africa. That is a fact."
    ],
    tip: "Words like best, worst and beautiful often show an opinion."
  },
  {
    id: "l14", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Weather", topic: "Reading: inference", syllabus: "Reading: inference",
    stem: "Kofi looked at the dark clouds and took his umbrella. What does Kofi think?",
    target: null,
    answers: [
      { text: "It might rain soon", type: "correct" },
      { text: "It is a hot, sunny day", type: "trap", mis: "Ignoring clues in the text", why: "Dark clouds and an umbrella are clues for rain, not sun." },
      { text: "Umbrellas are food", type: "dud", why: "Umbrellas are not food." }
    ],
    hint: "Why do people take an umbrella?",
    steps: [
      "Clue 1: the clouds are dark.",
      "Clue 2: Kofi takes his umbrella.",
      "Together they show he thinks it will rain."
    ],
    tip: "Use clues in the text to work out what is not said."
  },
  {
    id: "l15", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Nature", topic: "Reading: main idea", syllabus: "Reading: main idea",
    stem: "Read: \"Bees carry pollen from flower to flower. This helps plants make seeds and fruit. Without bees, many foods would be hard to grow.\" What is the main idea?",
    target: null,
    answers: [
      { text: "Bees are important for growing food", type: "correct" },
      { text: "Bees carry pollen", type: "trap", mis: "Choosing a detail instead of the main idea", why: "That is one detail. The main idea joins all the sentences together." },
      { text: "Bees can drive cars", type: "dud", why: "The text says nothing like this." }
    ],
    hint: "Which answer covers all three sentences?",
    steps: [
      "Sentence 1: bees carry pollen.",
      "Sentences 2 and 3: this helps plants and food grow.",
      "Together: bees are important for growing food."
    ],
    tip: "The main idea fits the whole text, not one sentence."
  },
  {
    id: "l16", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Sports", topic: "Grammar: tenses", syllabus: "Grammar: tenses",
    stem: "Which sentence talks about the past?",
    target: "past",
    answers: [
      { text: "We played football yesterday.", type: "correct" },
      { text: "We will play football tomorrow.", type: "trap", mis: "Mixing up past and future", why: "\"Will\" and \"tomorrow\" show the future." },
      { text: "Football yesterday the.", type: "dud", why: "That is not a sentence." }
    ],
    hint: "Look for time words and verb endings like -ed.",
    steps: [
      "Past means it already happened.",
      "\"Played\" ends in -ed, a past ending.",
      "\"Yesterday\" is also a past time word."
    ],
    tip: "Past: -ed, yesterday, last week. Future: will, tomorrow."
  },
  {
    id: "l17", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Travel", topic: "Reading: cause and effect", syllabus: "Reading: cause and effect",
    stem: "The road was icy, so the bus was late. Why was the bus late?",
    target: "so",
    answers: [
      { text: "Because the road was icy", type: "correct" },
      { text: "Because the bus was late", type: "trap", mis: "Mixing up the cause and the effect", why: "That is the result. The reason comes before \"so\"." },
      { text: "Because buses hate Mondays", type: "dud", why: "Buses do not have feelings." }
    ],
    hint: "What comes before the word \"so\"?",
    steps: [
      "\"So\" joins a reason and a result.",
      "Before \"so\": the road was icy. That is the reason.",
      "After \"so\": the bus was late. That is the result."
    ],
    tip: "Reason, so result. Result, because reason."
  },
  {
    id: "l18", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Weather", topic: "Vocabulary: idioms", syllabus: "Vocabulary: idioms",
    stem: "Your friend says: \"It's raining cats and dogs!\" What does this mean?",
    target: null,
    answers: [
      { text: "It is raining very hard", type: "correct" },
      { text: "Animals are falling from the sky", type: "trap", mis: "Reading a phrase word by word", why: "This is an idiom. Its meaning is not the meaning of each word." },
      { text: "It is a sunny day", type: "dud", why: "The friend says it is raining." }
    ],
    hint: "Is your friend talking about real animals?",
    steps: [
      "Some phrases do not mean what the words say. They are idioms.",
      "\"Raining cats and dogs\" is an idiom.",
      "It means a lot of heavy rain."
    ],
    tip: "If the words sound silly, it may be an idiom."
  },
  {
    id: "l19", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Food", topic: "Grammar: commas", syllabus: "Grammar: commas",
    stem: "Look at \"Let's eat, Grandma!\" and \"Let's eat Grandma!\" What does the comma in the first one show?",
    target: null,
    answers: [
      { text: "We are talking to Grandma", type: "correct" },
      { text: "Grandma is the food", type: "trap", mis: "Ignoring punctuation", why: "That is the meaning without the comma. The comma shows we are speaking to her." },
      { text: "Grandma is a comma", type: "dud", why: "A person cannot be a comma." }
    ],
    hint: "Read both sentences out loud with a pause at the comma.",
    steps: [
      "With a comma, \"Grandma\" is the person we speak to.",
      "Without a comma, \"Grandma\" is what we eat.",
      "So the comma shows we are talking to Grandma."
    ],
    tip: "Small marks like commas can change the whole meaning."
  },
  {
    id: "l20", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Movies", topic: "Vocabulary: words with two meanings", syllabus: "Vocabulary: words with two meanings",
    stem: "The film was so dull that Amir fell asleep. What does dull mean here?",
    target: "dull",
    answers: [
      { text: "Boring", type: "correct" },
      { text: "Not shiny", type: "trap", mis: "Choosing the wrong meaning of a word", why: "Dull can mean not shiny, but a film that makes you sleep is boring." },
      { text: "Delicious", type: "dud", why: "Films are not food." }
    ],
    hint: "Why did Amir fall asleep?",
    steps: [
      "Dull has more than one meaning.",
      "The clue: Amir fell asleep.",
      "So here dull means boring."
    ],
    tip: "Use the sentence to pick the right meaning."
  },
  {
    id: "l21", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Market", topic: "Grammar: comparing", syllabus: "Grammar: comparing",
    stem: "Which sentence is correct?",
    target: null,
    answers: [
      { text: "This box is heavier than that one.", type: "correct" },
      { text: "This box is more heavier than that one.", type: "trap", mis: "Using more with an -er word", why: "Heavier already means more heavy. Do not use both." },
      { text: "Box heavy box heavy.", type: "dud", why: "That is not a sentence." }
    ],
    hint: "Does \"heavier\" already mean \"more heavy\"?",
    steps: [
      "Short words add -er to compare: heavy becomes heavier.",
      "Long words use more: more beautiful.",
      "Never use both. \"Heavier than\" is correct."
    ],
    tip: "Use -er or more, not both."
  },
  {
    id: "l22", subject: "Language", track: "core", ages: ["12-15"], level: { "12-15": 2 },
    theme: "Market", topic: "Reading: finding details", syllabus: "Reading: finding details",
    stem: "A sign says: \"Open 9:00 to 17:00. Closed on Sundays.\" Can you buy bread there on Sunday at 10:00?",
    target: "Sunday",
    answers: [
      { text: "No, the shop is closed on Sundays", type: "correct" },
      { text: "Yes, because 10:00 is between 9:00 and 17:00", type: "trap", mis: "Missing an important detail", why: "The time fits, but the sign says the shop is closed on Sundays." },
      { text: "The shop sells cars", type: "dud", why: "The sign does not say this." }
    ],
    hint: "Check the day as well as the time.",
    steps: [
      "The shop opens 9:00 to 17:00.",
      "But it is closed on Sundays.",
      "So on Sunday at 10:00 it is closed."
    ],
    tip: "Check every part of the question against the text."
  },
  {
    id: "l23", subject: "Language", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Weather", topic: "Reading: tone and sarcasm", syllabus: "Reading: tone and sarcasm",
    stem: "A message says: \"Oh great, another rainy weekend. Just what I wanted.\" How does the writer really feel?",
    target: "really",
    answers: [
      { text: "Annoyed", type: "correct" },
      { text: "Happy, because they say \"great\"", type: "trap", mis: "Missing sarcasm", why: "The writer says the opposite of what they mean. That is sarcasm." },
      { text: "Hungry", type: "dud", why: "The message is about rain, not food." }
    ],
    hint: "Do most people want a rainy weekend?",
    steps: [
      "The words say \"great\" and \"just what I wanted\".",
      "But a rainy weekend is usually bad news.",
      "The writer means the opposite: they are annoyed."
    ],
    tip: "If happy words describe bad news, the writer may be sarcastic."
  },
  {
    id: "l24", subject: "Language", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Sports", topic: "Reading: purpose", syllabus: "Reading: purpose",
    stem: "Which text is written mainly to persuade?",
    target: "persuade",
    answers: [
      { text: "Buy SuperShoes today! You will run faster than ever!", type: "correct" },
      { text: "SuperShoes are made of rubber and cloth.", type: "trap", mis: "Mixing up informing and persuading", why: "This gives facts. It does not try to make you do something." },
      { text: "The number 7", type: "dud", why: "A number is not a text." }
    ],
    hint: "Persuade means trying to make someone do or think something.",
    steps: [
      "To persuade is to try to change what someone does or thinks.",
      "\"Buy SuperShoes today!\" tells you to do something.",
      "\"You will run faster\" gives a reason to buy."
    ],
    tip: "Persuasive texts often give orders and big promises."
  },
  {
    id: "l25", subject: "Language", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Tech", topic: "Writing: formal and informal", syllabus: "Writing: formal and informal",
    stem: "You are writing an email to apply for a job. Which opening is best?",
    target: null,
    answers: [
      { text: "Dear Ms Lee,", type: "correct" },
      { text: "Hey Lee, what's up?", type: "trap", mis: "Using friendly language in a formal text", why: "This is fine for a friend, but too casual for a job email." },
      { text: "Goodbye forever,", type: "dud", why: "That is a way to end, not start, and it is not polite." }
    ],
    hint: "Is a job email for a friend or for someone you do not know well?",
    steps: [
      "A job email is formal.",
      "Formal openings use \"Dear\" and a title, like Ms or Mr.",
      "\"Dear Ms Lee,\" is formal and polite."
    ],
    tip: "Match your words to your reader: formal for work, casual for friends."
  },
  {
    id: "l26", subject: "Language", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "School", topic: "Reading: inference about feelings", syllabus: "Reading: inference about feelings",
    stem: "Read: \"Nadia's hands shook as she walked onto the stage. She held her notes tightly.\" How does Nadia feel?",
    target: null,
    answers: [
      { text: "Nervous", type: "correct" },
      { text: "Bored", type: "trap", mis: "Ignoring clues in the text", why: "Shaking hands and holding notes tightly are signs of nerves, not boredom." },
      { text: "Invisible", type: "dud", why: "People cannot feel invisible on a stage like this." }
    ],
    hint: "What do shaking hands often show?",
    steps: [
      "Clue 1: her hands shook.",
      "Clue 2: she held her notes tightly.",
      "Both are signs that she is nervous."
    ],
    tip: "Body language in a story shows feelings."
  },
  {
    id: "l27", subject: "Language", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Sports", topic: "Grammar: passive voice", syllabus: "Grammar: passive voice",
    stem: "\"The window was broken by the ball.\" What broke the window?",
    target: "by",
    answers: [
      { text: "The ball", type: "correct" },
      { text: "The window", type: "trap", mis: "Thinking the first noun did the action", why: "The window is the thing that was broken. \"By the ball\" tells you what did it." },
      { text: "Nobody, the window is fine", type: "dud", why: "The sentence says the window was broken." }
    ],
    hint: "Look at the words after \"by\".",
    steps: [
      "This sentence is passive: the thing that was hit comes first.",
      "\"By the ball\" tells you who or what did the action.",
      "So the ball broke the window."
    ],
    tip: "In a passive sentence, the doer comes after \"by\"."
  },
  {
    id: "l28", subject: "Language", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Food", topic: "Reading: bias", syllabus: "Reading: bias",
    stem: "A juice company writes: \"Our juice is the healthiest drink in the world.\" Why should you be careful with this claim?",
    target: null,
    answers: [
      { text: "The company wants to sell juice, so the claim may not be fair", type: "correct" },
      { text: "Companies always tell the whole truth", type: "trap", mis: "Trusting a source without asking why it was written", why: "A company gains if you believe it, so it may make its product sound better than it is." },
      { text: "Juice cannot be written about", type: "dud", why: "People write about juice all the time." }
    ],
    hint: "Who wrote this, and what do they want?",
    steps: [
      "Ask who wrote it: the juice company.",
      "Ask what they want: to sell juice.",
      "So the claim may be one-sided. Check other sources."
    ],
    tip: "Ask who wrote it and what they gain."
  },
  {
    id: "l29", subject: "Language", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Music", topic: "Writing: summarising", syllabus: "Writing: summarising",
    stem: "Read: \"Rami practised the guitar every day for a year. At first he made many mistakes. In the end he played at the school concert.\" Which is the best summary?",
    target: "summary",
    answers: [
      { text: "Rami practised for a year and got good enough to play at a concert.", type: "correct" },
      { text: "Rami made many mistakes.", type: "trap", mis: "Choosing a detail instead of the main idea", why: "That is one part. A summary covers the start, middle and end." },
      { text: "Guitars are made of cheese.", type: "dud", why: "The text says nothing like this, and it is not true." }
    ],
    hint: "A good summary covers the whole story in a few words.",
    steps: [
      "Start: Rami practised every day.",
      "Middle: he made mistakes at first.",
      "End: he played at a concert. The summary joins these."
    ],
    tip: "A summary is short but covers the whole text."
  },
  {
    id: "l30", subject: "Language", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Nature", topic: "Vocabulary: prefixes and suffixes", syllabus: "Vocabulary: prefixes and suffixes",
    stem: "What does \"reusable\" mean in \"a reusable bottle\"?",
    target: null,
    answers: [
      { text: "It can be used again", type: "correct" },
      { text: "It can only be used once", type: "trap", mis: "Ignoring the prefix", why: "Re- means again. The word means the opposite of used once." },
      { text: "It is a kind of fruit", type: "dud", why: "A bottle is not a fruit." }
    ],
    hint: "Split the word into parts: re + use + able.",
    steps: [
      "Re- means again.",
      "-able means can be.",
      "Reusable means can be used again."
    ],
    tip: "Break long words into parts you know."
  },
  {
    id: "l31", subject: "Language", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "Games", topic: "Vocabulary: idioms", syllabus: "Vocabulary: idioms",
    stem: "People say: \"Time flies when you are having fun.\" What does this mean?",
    target: null,
    answers: [
      { text: "Time seems to pass quickly when you enjoy yourself", type: "correct" },
      { text: "Clocks grow wings when you play", type: "trap", mis: "Reading a phrase word by word", why: "Time cannot really fly. This is a saying about how time feels." },
      { text: "Fun is a kind of bird", type: "dud", why: "Fun is a feeling, not an animal." }
    ],
    hint: "How does time feel during a great game?",
    steps: [
      "\"Flies\" here means goes fast.",
      "When you enjoy something, you do not watch the clock.",
      "So time feels like it goes quickly."
    ],
    tip: "Sayings use pictures. Ask what the picture means."
  },
  {
    id: "l32", subject: "Language", track: "core", ages: ["12-15", "16-19"], level: { "12-15": 3, "16-19": 1 },
    theme: "School", topic: "Grammar: linking words", syllabus: "Grammar: linking words",
    stem: "\"Pablo studied hard, but he failed the test.\" What does \"but\" show here?",
    target: "but",
    answers: [
      { text: "The result was not what you would expect", type: "correct" },
      { text: "Studying hard made him fail", type: "trap", mis: "Mixing up but and because", why: "\"Because\" gives a reason. \"But\" shows a surprise or contrast." },
      { text: "Pablo is a test", type: "dud", why: "Pablo is a person." }
    ],
    hint: "Would you expect hard study to lead to a pass or a fail?",
    steps: [
      "Studying hard usually leads to passing.",
      "But Pablo failed.",
      "\"But\" shows the result is the opposite of what you expect."
    ],
    tip: "But, however and although show a contrast."
  },
  {
    id: "l33", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "School", topic: "Exams: command words", syllabus: "Exams: command words",
    stem: "An exam question asks you to \"compare\" two poems. What must you do?",
    target: "compare",
    answers: [
      { text: "Say how the poems are similar and how they are different", type: "correct" },
      { text: "Describe each poem on its own", type: "trap", mis: "Ignoring the command word", why: "Compare means you must link the poems and show likenesses and differences." },
      { text: "Copy both poems out", type: "dud", why: "Copying is not answering." }
    ],
    hint: "What does \"compare\" ask you to do with the two poems together?",
    steps: [
      "Find the command word: compare.",
      "Compare means look at both together.",
      "Show what is the same and what is different, using both poems."
    ],
    tip: "Underline the command word: describe, explain, compare, evaluate."
  },
  {
    id: "l34", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Tech", topic: "Reading: implied meaning", syllabus: "Reading: implied meaning",
    stem: "A report says: \"The new manager has many new ideas. Several staff have already left the company.\" What is the writer suggesting?",
    target: "suggesting",
    answers: [
      { text: "Some staff may not like the new manager's ideas", type: "correct" },
      { text: "The manager has many ideas, so everyone is happy", type: "trap", mis: "Ignoring clues in the text", why: "Staff leaving is a clue that not everyone is happy." },
      { text: "The office is on the Moon", type: "dud", why: "The text says nothing about the Moon." }
    ],
    hint: "Why might the writer put these two sentences together?",
    steps: [
      "Sentence 1: the manager has new ideas.",
      "Sentence 2: staff have left.",
      "Putting them together hints that the ideas made some staff leave."
    ],
    tip: "Writers can suggest things by placing ideas side by side."
  },
  {
    id: "l35", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "School", topic: "Grammar: subject and verb", syllabus: "Grammar: subject and verb",
    stem: "Choose the correct word: \"The list of names ___ on the wall.\"",
    target: null,
    answers: [
      { text: "is", type: "correct" },
      { text: "are", type: "trap", mis: "Matching the verb to the nearest noun", why: "The subject is \"the list\", which is one thing. \"Of names\" just describes it." },
      { text: "banana", type: "dud", why: "Banana is not a verb." }
    ],
    hint: "Find the main noun. One thing or many?",
    steps: [
      "Find the main noun: the list.",
      "\"Of names\" tells you what kind of list.",
      "One list, so the verb is \"is\"."
    ],
    tip: "Find the real subject. Ignore the words that describe it."
  },
  {
    id: "l36", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Tech", topic: "Reading: claims and evidence", syllabus: "Reading: claims and evidence",
    stem: "An advert says: \"9 out of 10 users loved our app!\" Only 10 people were asked. What is the problem?",
    target: "Only",
    answers: [
      { text: "10 people is too few to show what most users think", type: "correct" },
      { text: "9 out of 10 is a high number, so it must be true", type: "trap", mis: "Trusting numbers without checking where they come from", why: "A big percent from a tiny group does not tell you much." },
      { text: "10 is not a number", type: "dud", why: "10 is a number." }
    ],
    hint: "How many people would you want to ask before you trust this?",
    steps: [
      "The advert sounds strong: 9 out of 10.",
      "But only 10 people were asked.",
      "A tiny group may not match most users."
    ],
    tip: "Ask how many people were asked and who they were."
  },
  {
    id: "l37", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Money", topic: "Vocabulary: connotation", syllabus: "Vocabulary: connotation",
    stem: "Which word gives the most positive picture of a person who is careful with money?",
    target: "positive",
    answers: [
      { text: "Thrifty", type: "correct" },
      { text: "Stingy", type: "trap", mis: "Missing the feeling behind a word", why: "Stingy also means careful with money, but it sounds unkind and negative." },
      { text: "Purple", type: "dud", why: "Purple is a colour, not a way to describe saving." }
    ],
    hint: "Which word would you be happy to be called?",
    steps: [
      "Both thrifty and stingy describe being careful with money.",
      "Stingy suggests mean and selfish.",
      "Thrifty suggests wise and sensible, so it is positive."
    ],
    tip: "Words with the same meaning can carry different feelings."
  },
  {
    id: "l38", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Sports", topic: "Reading: linking words", syllabus: "Reading: linking words",
    stem: "Which sentence means the same as \"Despite the rain, the match went ahead\"?",
    target: "Despite",
    answers: [
      { text: "It rained, but the match still happened.", type: "correct" },
      { text: "The match was cancelled because of the rain.", type: "trap", mis: "Missing the meaning of a linking word", why: "Despite means \"even though\". The match did not stop." },
      { text: "The rain played the match.", type: "dud", why: "Rain cannot play a match." }
    ],
    hint: "Despite means \"even though\".",
    steps: [
      "Despite means even though.",
      "\"Went ahead\" means it happened.",
      "So: it rained, but the match still happened."
    ],
    tip: "Despite and although show something happened anyway."
  },
  {
    id: "l39", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Phones", topic: "Writing: arguments", syllabus: "Writing: arguments",
    stem: "An essay says: \"Some people say phones distract students. However, phones can also help students learn.\" What is the job of the first sentence?",
    target: null,
    answers: [
      { text: "It gives an opposing view before the writer answers it", type: "correct" },
      { text: "It is the writer's own opinion", type: "trap", mis: "Mixing up the writer's view with a view they report", why: "\"Some people say\" shows the writer is reporting other people's view." },
      { text: "It is a recipe", type: "dud", why: "There is no cooking in the essay." }
    ],
    hint: "Look at the words \"Some people say\" and \"However\".",
    steps: [
      "\"Some people say\" reports other people's view.",
      "\"However\" turns to a different view.",
      "So the first sentence is an opposing view the writer answers."
    ],
    tip: "\"Some people say... However...\" shows a counter-argument."
  },
  {
    id: "l40", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Nature", topic: "Grammar: unclear sentences", syllabus: "Grammar: unclear sentences",
    stem: "\"I saw a man on a hill with a telescope.\" Why is this sentence unclear?",
    target: "unclear",
    answers: [
      { text: "We cannot tell who has the telescope", type: "correct" },
      { text: "It has a spelling mistake", type: "trap", mis: "Looking for the wrong kind of problem", why: "Every word is spelled correctly. The problem is the meaning." },
      { text: "Hills cannot be seen", type: "dud", why: "Hills can be seen." }
    ],
    hint: "Who could \"with a telescope\" belong to?",
    steps: [
      "\"With a telescope\" could describe me, the man or the hill.",
      "The sentence does not say which.",
      "So we cannot tell who has the telescope."
    ],
    tip: "Put describing words next to what they describe."
  },
  {
    id: "l41", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 2 },
    theme: "Travel", topic: "Vocabulary: meaning from context", syllabus: "Vocabulary: meaning from context",
    stem: "The hikers were famished, so they ate everything in their bags. What does famished mean?",
    target: "famished",
    answers: [
      { text: "Very hungry", type: "correct" },
      { text: "Very famous", type: "trap", mis: "Guessing from how a word looks", why: "Famished looks a bit like famous, but the clue is that they ate everything." },
      { text: "Very blue", type: "dud", why: "Colour has nothing to do with the clue." }
    ],
    hint: "What did the hikers do next? Use that clue.",
    steps: [
      "The clue: they ate everything in their bags.",
      "People eat a lot when they are very hungry.",
      "So famished means very hungry."
    ],
    tip: "Use what happens next as a clue to a new word."
  },
  {
    id: "l42", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Tech", topic: "Reading: irony", syllabus: "Reading: irony",
    stem: "A fire station burns down. Why is this an example of irony?",
    target: "irony",
    answers: [
      { text: "It is the opposite of what you would expect from a place that fights fires", type: "correct" },
      { text: "Because it is sad", type: "trap", mis: "Thinking irony means sad or unlucky", why: "Irony is about the opposite of what you expect, not just bad luck." },
      { text: "Because fire stations are made of iron", type: "dud", why: "Irony has nothing to do with the metal iron." }
    ],
    hint: "What would you expect a fire station to be good at?",
    steps: [
      "A fire station fights fires.",
      "You would not expect it to burn down.",
      "When something is the opposite of what you expect, that is irony."
    ],
    tip: "Irony: what happens is the opposite of what you expect."
  },
  {
    id: "l43", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Weather", topic: "Writing: effect of language", syllabus: "Writing: effect of language",
    stem: "A writer describes a storm: \"The wind screamed and the trees begged for mercy.\" What is the main effect of this language?",
    target: "effect",
    answers: [
      { text: "It makes the storm seem alive, violent and frightening", type: "correct" },
      { text: "It shows the writer heard real screaming", type: "trap", mis: "Taking a picture word as real", why: "Wind cannot scream. The writer gives the storm human actions." },
      { text: "It is a shopping list", type: "dud", why: "There is nothing to buy in the sentence." }
    ],
    hint: "Can wind scream or trees beg? Why would a writer say so?",
    steps: [
      "Screaming and begging are human actions. This is personification.",
      "Screaming is loud and scary. Begging for mercy shows fear.",
      "The storm feels alive, violent and frightening."
    ],
    tip: "Name the technique, then say what it makes the reader feel."
  },
  {
    id: "l44", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Phones", topic: "Reading: weak arguments", syllabus: "Reading: weak arguments",
    stem: "\"Everyone at my school uses this app, so it must be safe.\" What is wrong with this argument?",
    target: null,
    answers: [
      { text: "Many people using something does not prove it is safe", type: "correct" },
      { text: "Nothing is wrong. If everyone uses it, it is safe", type: "trap", mis: "Thinking popular means right", why: "Lots of people can use something unsafe. Popularity is not proof." },
      { text: "Schools cannot use apps", type: "dud", why: "Many schools use apps." }
    ],
    hint: "Does \"popular\" mean the same as \"safe\"?",
    steps: [
      "The reason given: everyone uses it.",
      "The claim: it must be safe.",
      "The reason does not prove the claim. You need facts about safety."
    ],
    tip: "Ask if the reason really proves the claim."
  },
  {
    id: "l45", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Food", topic: "Reading: cause and link", syllabus: "Reading: cause and link",
    stem: "An article says: \"Students who eat breakfast get better marks. So breakfast makes you clever.\" What is the problem with this?",
    target: null,
    answers: [
      { text: "Two things happening together does not prove one causes the other", type: "correct" },
      { text: "Breakfast has no vitamins", type: "trap", mis: "Answering a different question", why: "The problem is the reasoning, not what is in breakfast." },
      { text: "Marks are made of bread", type: "dud", why: "Marks are scores, not food." }
    ],
    hint: "Could something else explain both breakfast and good marks?",
    steps: [
      "The article sees two things together: breakfast and good marks.",
      "It says one causes the other.",
      "Something else, like sleep or home support, could explain both."
    ],
    tip: "A link is not proof of a cause."
  },
  {
    id: "l46", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Movies", topic: "Writing: structure", syllabus: "Writing: structure",
    stem: "A story begins with a car crash, then goes back to that morning. Why might the writer do this?",
    target: null,
    answers: [
      { text: "To make readers curious about how the crash happened", type: "correct" },
      { text: "Because the writer forgot the right order", type: "trap", mis: "Missing the writer's choice", why: "Writers choose the order on purpose to shape the reader's feelings." },
      { text: "To save paper", type: "dud", why: "Changing the order does not save paper." }
    ],
    hint: "How do you feel when a story starts at a dramatic moment?",
    steps: [
      "The crash is shown first, so you know something bad happens.",
      "Going back to the morning makes you ask how it happened.",
      "This keeps the reader curious and reading."
    ],
    tip: "Ask what the order makes the reader feel or want."
  },
  {
    id: "l47", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "School", topic: "Writing: formal style", syllabus: "Writing: formal style",
    stem: "Which is the most formal way to say \"The test was super hard and loads of kids flunked\"?",
    target: "formal",
    answers: [
      { text: "The test was very difficult, and many students failed.", type: "correct" },
      { text: "The test was super difficult and loads of students failed.", type: "trap", mis: "Keeping some informal words", why: "\"Super\" and \"loads of\" are still informal." },
      { text: "Test hard kids sad lol.", type: "dud", why: "This is not formal, and it is not a full sentence." }
    ],
    hint: "Find every informal word and change each one.",
    steps: [
      "Informal words: super, hard, loads of, kids, flunked.",
      "Formal words: very, difficult, many, students, failed.",
      "Change every one, not only some."
    ],
    tip: "Check every word, not just the first one you notice."
  },
  {
    id: "l48", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Travel", topic: "Reading: using two sources", syllabus: "Reading: using two sources",
    stem: "Source A says a new park will bring tourists. Source B says the park will cost too much. Which sentence sums up both fairly?",
    target: "both",
    answers: [
      { text: "The park may bring tourists, but some say it will cost too much.", type: "correct" },
      { text: "The park is a bad idea because it costs too much.", type: "trap", mis: "Using only one source", why: "This only uses Source B. The question asks for both." },
      { text: "Parks are made of money.", type: "dud", why: "Neither source says this." }
    ],
    hint: "Does your answer use Source A and Source B?",
    steps: [
      "Source A: the park brings tourists.",
      "Source B: the park costs too much.",
      "A fair summary gives both points."
    ],
    tip: "When asked for both sources, check that both appear."
  },
  {
    id: "l49", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Nature", topic: "Writing: rhetorical questions", syllabus: "Writing: rhetorical questions",
    stem: "A speech asks: \"Do we really want our rivers full of plastic?\" Why does the speaker ask this?",
    target: null,
    answers: [
      { text: "To make listeners think, and agree that the answer is no", type: "correct" },
      { text: "Because the speaker does not know the answer", type: "trap", mis: "Treating a rhetorical question as a real question", why: "The speaker knows the answer. The question is used to persuade." },
      { text: "To test the microphone", type: "dud", why: "A test would not be about rivers." }
    ],
    hint: "Does the speaker expect anyone to answer out loud?",
    steps: [
      "This is a rhetorical question. No answer is expected.",
      "The answer is obvious: no.",
      "It makes listeners agree with the speaker."
    ],
    tip: "Rhetorical questions persuade. They do not ask for information."
  },
  {
    id: "l50", subject: "Language", track: "core", ages: ["16-19"], level: { "16-19": 3 },
    theme: "Human body", topic: "Reading: careful language", syllabus: "Reading: careful language",
    stem: "A scientist writes: \"The results suggest the drug may reduce pain.\" How sure is the scientist?",
    target: "may",
    answers: [
      { text: "Careful: the drug might work, but it is not proven", type: "correct" },
      { text: "Completely sure the drug works", type: "trap", mis: "Missing careful words like may and suggest", why: "\"Suggest\" and \"may\" show the writer is not claiming proof." },
      { text: "The scientist is a drug", type: "dud", why: "The scientist is a person." }
    ],
    hint: "Look at the words \"suggest\" and \"may\".",
    steps: [
      "\"Suggest\" means points toward, not proves.",
      "\"May\" means possibly.",
      "So the scientist thinks it might work but is not sure."
    ],
    tip: "Words like may, might and suggest show the writer is not sure."
  }
];
