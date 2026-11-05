// Right, Close, Dud questions, version 3: Math. See README.md for the field names.

// ---------- Ages 12-15, Level 1 ----------
Q({ id: "m12", s: "Math", t: "core", lv: { "12-15": 1 }, th: "Market", tp: "Number: multiplying",
  q: "One mango costs 3 coins. How much do 4 mangoes cost?", key: null,
  r: "12 coins",
  c: [["7 coins", "Adding when you should multiply", "7 is 3 + 4. You need 4 groups of 3 coins."]],
  d: ["40 kg of mangoes", "The question asks for a price, not a weight."],
  h: "Count in threes, one three for each mango.",
  st: ["Each mango costs 3 coins.", "You buy 4 mangoes, so you pay 3 coins four times.", "3 + 3 + 3 + 3 = 12. That is 4 × 3."],
  tip: "\"Each\" and \"for every\" often mean multiply." });

Q({ id: "m13", s: "Math", t: "core", lv: { "12-15": 1 }, th: "Sports", tp: "Number: rounding",
  q: "A runner finishes a race in 9.7 seconds. Round this to the nearest whole second.", key: "nearest",
  r: "10 seconds",
  c: [["9 seconds", "Cutting off the decimal instead of rounding", "0.7 is more than half, so you round up, not down."]],
  d: ["97 minutes", "The race took seconds, not minutes."],
  h: "Is 9.7 closer to 9 or to 10?",
  st: ["Look at the digit after the point: 7.", "5 or more means round up.", "So 9.7 rounds up to 10."],
  tip: "Look at the first digit after the point. 5 or more, round up." });

Q({ id: "m14", s: "Math", t: "core", lv: { "12-15": 1 }, th: "Gaming", tp: "Number: place value",
  q: "Your game score is 4,582. What is the value of the digit 5?", key: "value",
  r: "500",
  c: [["5", "Reading the digit, not its value", "The digit is 5, but it sits in the hundreds place, so it is worth 500."]],
  d: ["4,582,000", "That is a different, much bigger number."],
  h: "Which place is the 5 in: ones, tens, hundreds or thousands?",
  st: ["Write the places: 4 thousands, 5 hundreds, 8 tens, 2 ones.", "The 5 is in the hundreds place.", "5 hundreds is 500."],
  tip: "A digit's value depends on its place." });

Q({ id: "m15", s: "Math", t: "core", lv: { "12-15": 1 }, th: "Food", tp: "Number: percentages",
  q: "A cake is cut into 10 equal slices. You eat 3 slices. What percent of the cake did you eat?", key: null,
  r: "30%",
  c: [["3%", "Forgetting percent means out of 100", "3 out of 10 is the same as 30 out of 100."]],
  d: ["300 cakes", "There is only one cake."],
  h: "Percent means out of 100. How many slices would that be out of 100?",
  st: ["You ate 3 out of 10 slices: 3/10.", "Multiply top and bottom by 10: 30/100.", "30 out of 100 is 30%."],
  tip: "Percent means out of 100. Change the bottom number to 100." });

Q({ id: "m16", s: "Math", t: "core", lv: { "12-15": 1 }, th: "Movies", tp: "Measure: time",
  q: "A film starts at 2:45 pm. It lasts 30 minutes. When does it end?", key: null,
  r: "3:15 pm",
  c: [["2:75 pm", "Treating time like normal numbers", "An hour has 60 minutes, not 100. 2:75 is not a real time."]],
  d: ["Last year", "A 30 minute film cannot end last year."],
  h: "How many minutes until 3:00 pm?",
  st: ["From 2:45 to 3:00 is 15 minutes.", "The film lasts 30 minutes, so 15 more minutes are left.", "3:00 plus 15 minutes is 3:15 pm."],
  tip: "Count up to the next whole hour first." });

Q({ id: "m17", s: "Math", t: "core", lv: { "12-15": 1 }, th: "Weather", tp: "Number: negative numbers",
  q: "It is -3 °C at night. By noon it is 5 degrees warmer. What is the temperature at noon?", key: "warmer",
  r: "2 °C",
  c: [["-8 °C", "Moving the wrong way on the number line", "Warmer means the number goes up, not down."],
      ["8 °C", "Ignoring the minus sign", "Start at -3, not at 3."]],
  d: ["5 metres", "A temperature is in degrees, not metres."],
  h: "Picture a number line. Start at -3 and move up.",
  st: ["Start at -3.", "Warmer means count up 5: -2, -1, 0, 1, 2.", "You land on 2 °C."],
  tip: "Warmer means up the number line. Colder means down." });

Q({ id: "m18", s: "Math", t: "core", lv: { "12-15": 1 }, th: "Travel", tp: "Number: subtracting",
  q: "A bus has 40 seats. 26 people are sitting on it. How many seats are empty?", key: "empty",
  r: "14 seats",
  c: [["66 seats", "Adding when you should take away", "There cannot be more empty seats than seats. Take 26 away from 40."]],
  d: ["40 buses", "There is only one bus."],
  h: "Empty seats are the seats nobody is using.",
  st: ["The bus has 40 seats.", "26 seats are used.", "40 - 26 = 14 seats are empty."],
  tip: "Ask: should the answer be bigger or smaller than 40?" });

// ---------- Ages 12-15, Level 2 ----------
Q({ id: "m19", s: "Math", t: "core", lv: { "12-15": 2 }, th: "Shopping", tp: "Number: percentages",
  q: "A T-shirt costs 20 coins. It is 25% off today. What is the new price?", key: "new",
  r: "15 coins",
  c: [["5 coins", "Giving the discount, not the new price", "5 coins is how much you save. The new price is 20 - 5."]],
  d: ["45 T-shirts", "The question asks for a price."],
  h: "First find 25% of 20. Then think about what the question asks for.",
  st: ["25% is a quarter.", "A quarter of 20 coins is 5 coins. That is the saving.", "New price: 20 - 5 = 15 coins."],
  tip: "Read the end of the question again: saving or new price?" });

Q({ id: "m20", s: "Math", t: "core", lv: { "12-15": 2 }, th: "Food", tp: "Number: ratio",
  q: "A juice recipe uses 2 cups of mango for every 3 cups of water. You use 6 cups of mango. How much water do you need?", key: null,
  r: "9 cups",
  c: [["7 cups", "Adding the same amount instead of scaling", "You did not add 4 to the mango. You made it 3 times bigger, so make the water 3 times bigger too."]],
  d: ["6 lemons", "The recipe has no lemons."],
  h: "How many times bigger is 6 than 2?",
  st: ["2 cups of mango became 6 cups. That is 3 times as much.", "Do the same to the water: 3 cups × 3.", "You need 9 cups of water."],
  tip: "In a ratio, multiply both parts by the same number." });

Q({ id: "m21", s: "Math", t: "core", lv: { "12-15": 2 }, th: "Sports", tp: "Measure: perimeter and area",
  q: "A small football pitch is 20 m long and 10 m wide. How much fence goes all the way around it?", key: "around",
  r: "60 m",
  c: [["200 m", "Mixing up area and perimeter", "200 is the area in square metres. Around the edge means adding the sides."],
      ["30 m", "Adding only two sides", "A rectangle has four sides: 20 + 10 + 20 + 10."]],
  d: ["20 footballs", "The question asks for a length of fence."],
  h: "Walk around the pitch in your head. How many sides do you pass?",
  st: ["The pitch has four sides: 20 m, 10 m, 20 m and 10 m.", "Add them: 20 + 10 + 20 + 10.", "The fence is 60 m long."],
  tip: "\"Around\" means perimeter. Add all the sides." });

Q({ id: "m22", s: "Math", t: "core", lv: { "12-15": 2 }, th: "Gaming", tp: "Number: order of operations",
  q: "Your score is 5 + 3 × 4. What is your score?", key: null,
  r: "17",
  c: [["32", "Working from left to right every time", "Multiply before you add: 3 × 4 = 12, then 5 + 12."]],
  d: ["-100", "There is no minus sign, so the score cannot be negative."],
  h: "Which comes first, the + or the ×?",
  st: ["Multiply first: 3 × 4 = 12.", "Then add: 5 + 12.", "The score is 17."],
  tip: "Multiply and divide before you add and subtract." });

Q({ id: "m23", s: "Math", t: "core", lv: { "12-15": 2 }, th: "Weather", tp: "Statistics: mean",
  q: "It rains 2 mm, 4 mm and 9 mm on three days. What is the mean rainfall per day?", key: "mean",
  r: "5 mm",
  c: [["15 mm", "Adding but not dividing", "15 mm is the total. Share it over the 3 days."],
      ["4 mm", "Choosing the middle number", "4 is the median. The mean shares the total equally."]],
  d: ["9 days", "There were only three days."],
  h: "Find the total first. Then share it equally.",
  st: ["Add the rain: 2 + 4 + 9 = 15 mm.", "There are 3 days.", "15 ÷ 3 = 5 mm per day."],
  tip: "Mean: add them all, then divide by how many there are." });

Q({ id: "m24", s: "Math", t: "core", lv: { "12-15": 2 }, th: "Phones", tp: "Number: fractions and percentages",
  q: "Your phone battery starts full at 100%. You use 3/4 of it. How much battery is left?", key: "left",
  r: "25%",
  c: [["75%", "Giving the part used, not the part left", "75% is what you used. What is left is 100% - 75%."]],
  d: ["4 phones", "You only have one phone."],
  h: "First change 3/4 into a percent.",
  st: ["3/4 is the same as 75%.", "You used 75%.", "100% - 75% = 25% is left."],
  tip: "Check if the question asks for the part used or the part left." });

// ---------- Ages 12-15 Level 3, also ages 16-19 Level 1 ----------
Q({ id: "m25", s: "Math", t: "core", lv: { "12-15": 3, "16-19": 1 }, th: "Shopping", tp: "Number: percentage change",
  q: "A game costs 100 coins. The price goes up 10%. Then the new price goes down 10%. What is the price now?", key: null,
  r: "99 coins",
  c: [["100 coins", "Thinking up and down by the same percent cancel out", "The 10% off is taken from 110, not from 100. 10% of 110 is 11."]],
  d: ["10 games", "The question asks for a price."],
  h: "Work out the price after the first change before you do the second.",
  st: ["Up 10%: 100 + 10 = 110 coins.", "Down 10% of 110: 110 - 11.", "The price is now 99 coins."],
  tip: "Each percent is taken from the price at that moment." });

Q({ id: "m26", s: "Math", t: "core", lv: { "12-15": 3, "16-19": 1 }, th: "Travel", tp: "Measure: speed",
  q: "A train travels 150 km in 2 hours. What is its average speed?", key: null,
  r: "75 km/h",
  c: [["300 km/h", "Multiplying instead of dividing", "Speed is distance ÷ time, not distance × time."]],
  d: ["2 trains", "The question asks for a speed."],
  h: "Speed tells you how far it goes in one hour.",
  st: ["Speed = distance ÷ time.", "150 km ÷ 2 hours.", "The speed is 75 km/h."],
  tip: "The unit km/h means km divided by hours." });

Q({ id: "m27", s: "Math", t: "core", lv: { "12-15": 3, "16-19": 1 }, th: "Puzzles", tp: "Algebra: solving equations",
  q: "Ali thinks of a number. He doubles it and then adds 7. He gets 19. What was his number?", key: null,
  r: "6",
  c: [["12", "Undoing only one step", "19 - 7 = 12 is the double. You still need to halve it."],
      ["45", "Doing the steps forward, not backward", "You must undo the steps: take away 7, then divide by 2."]],
  d: ["Ali has no number", "The question says Ali thinks of a number."],
  h: "Undo the last step first.",
  st: ["The last step was add 7. Undo it: 19 - 7 = 12.", "Before that he doubled. Undo it: 12 ÷ 2 = 6.", "Check: 6 × 2 + 7 = 19."],
  tip: "Work backward and do the opposite of each step." });

Q({ id: "m28", s: "Math", t: "core", lv: { "12-15": 3, "16-19": 1 }, th: "Food", tp: "Probability: single events",
  q: "A bag has 3 red sweets and 5 blue sweets. You take one without looking. What is the chance it is red?", key: null,
  r: "3/8",
  c: [["3/5", "Comparing one group to the other, not to all", "There are 8 sweets in total, so the bottom number is 8."]],
  d: ["8 red sweets", "The bag only has 3 red sweets."],
  h: "How many sweets are in the bag altogether?",
  st: ["Total sweets: 3 + 5 = 8.", "Red sweets: 3.", "Chance of red = 3 out of 8 = 3/8."],
  tip: "Chance = the ones you want ÷ all of them." });

Q({ id: "m29", s: "Math", t: "core", lv: { "12-15": 3, "16-19": 1 }, th: "Travel", tp: "Measure: scale",
  q: "On a map, 1 cm stands for 5 km. Two towns are 7 cm apart on the map. How far apart are they really?", key: "really",
  r: "35 km",
  c: [["12 km", "Adding instead of multiplying", "Each cm is 5 km, so 7 cm is 7 groups of 5 km."],
      ["7 km", "Forgetting to use the scale", "7 cm is the map distance. The real distance is much bigger."]],
  d: ["35 maps", "The question asks for a distance."],
  h: "How many km does each cm stand for?",
  st: ["1 cm stands for 5 km.", "The towns are 7 cm apart on the map.", "7 × 5 = 35 km."],
  tip: "Multiply the map distance by the scale." });

Q({ id: "m30", s: "Math", t: "core", lv: { "12-15": 3, "16-19": 1 }, th: "Sports", tp: "Measure: area of a triangle",
  q: "A triangle flag has a base of 6 cm and a height of 4 cm. What is its area?", key: "triangle",
  r: "12 cm²",
  c: [["24 cm²", "Forgetting to halve for a triangle", "6 × 4 = 24 is a rectangle. A triangle is half of that."]],
  d: ["10 flags", "The question asks for an area."],
  h: "A triangle is half of a rectangle.",
  st: ["A rectangle 6 cm by 4 cm has area 24 cm².", "The triangle is half of it.", "24 ÷ 2 = 12 cm²."],
  tip: "Triangle area = base × height ÷ 2." });

Q({ id: "m31", s: "Math", t: "core", lv: { "12-15": 3, "16-19": 1 }, th: "Puzzles", tp: "Number: negative numbers",
  q: "What is -4 × -3?", key: null,
  r: "12",
  c: [["-12", "Thinking two negatives make a negative", "A negative times a negative is positive."],
      ["-7", "Adding instead of multiplying", "-4 + -3 = -7, but the question says multiply."]],
  d: ["3 cm", "This question has no units."],
  h: "What happens to the sign when you multiply two negatives?",
  st: ["First ignore the signs: 4 × 3 = 12.", "Two negatives multiplied give a positive.", "So -4 × -3 = 12."],
  tip: "Same signs give a positive. Different signs give a negative." });

Q({ id: "m32", s: "Math", t: "core", lv: { "12-15": 3, "16-19": 1 }, th: "Kitchen lab", tp: "Measure: converting units",
  q: "A bottle holds 1.5 litres. How many millilitres is that?", key: null,
  r: "1,500 mL",
  c: [["150 mL", "Using the wrong conversion number", "1 litre is 1,000 mL, not 100 mL."]],
  d: ["15 bottles", "There is only one bottle."],
  h: "How many mL are in 1 litre?",
  st: ["1 litre = 1,000 mL.", "1.5 litres = 1.5 × 1,000.", "That is 1,500 mL."],
  tip: "Milli means a thousandth, so 1 L = 1,000 mL." });

Q({ id: "m33", s: "Math", t: "core", lv: { "12-15": 3, "16-19": 1 }, th: "Puzzles", tp: "Algebra: sequences",
  q: "A pattern goes 3, 7, 11, 15. What is the 10th number in the pattern?", key: null,
  r: "39",
  c: [["43", "Counting one step too many", "From the 1st to the 10th number there are 9 steps of 4, not 10."],
      ["40", "Multiplying the position by the step only", "4 × 10 = 40, but the pattern starts at 3, not 4. The rule is 4n - 1."]],
  d: ["Blue", "The pattern has numbers, not colours."],
  h: "How much does the pattern go up each time?",
  st: ["The pattern goes up by 4 each time.", "From the 1st to the 10th number there are 9 steps.", "3 + 9 × 4 = 3 + 36 = 39."],
  tip: "Count the steps between numbers, not the numbers." });

// ---------- Ages 16-19, Level 2 ----------
Q({ id: "m34", s: "Math", t: "core", lv: { "16-19": 2 }, th: "Money", tp: "Number: compound interest",
  q: "You save 1,000 coins at 10% interest a year. The interest is added to your savings each year. How much do you have after 2 years?", key: null,
  r: "1,210 coins",
  c: [["1,200 coins", "Using simple interest instead of compound", "In year 2 you earn interest on 1,100, not on 1,000."]],
  d: ["10 coins", "Your savings grow. They cannot fall to 10 coins."],
  h: "Work out year 1 first. What is the total at the end of year 1?",
  st: ["Year 1: 10% of 1,000 = 100. Total 1,100.", "Year 2: 10% of 1,100 = 110. Total 1,210.", "Or: 1,000 × 1.1 × 1.1 = 1,210."],
  tip: "Compound interest grows on the new total each year." });

Q({ id: "m35", s: "Math", t: "core", lv: { "16-19": 2 }, th: "Travel", tp: "Algebra: linear rules",
  q: "A taxi charges 3 coins to start, then 2 coins for every km. Which rule gives the cost C for a trip of d km?", key: null,
  r: "C = 2d + 3",
  c: [["C = 3d + 2", "Mixing up the start fee and the rate", "The 2 coins are paid for every km, so the 2 goes with d."]],
  d: ["C = 5 km", "A cost is in coins, not km."],
  h: "Which number happens once, and which happens for every km?",
  st: ["The start fee is paid once: + 3.", "Each km costs 2 coins: 2 × d.", "So C = 2d + 3."],
  tip: "The rate goes with the letter. The fixed fee stands alone." });

Q({ id: "m36", s: "Math", t: "core", lv: { "16-19": 2 }, th: "Shopping", tp: "Number: reverse percentages",
  q: "After a 20% discount, a jacket costs 80 coins. What was the price before the discount?", key: "before",
  r: "100 coins",
  c: [["96 coins", "Taking the percent of the new price", "The 20% came off the old price, not off 80. 80 coins is 80% of the old price."]],
  d: ["20 jackets", "The question asks for a price."],
  h: "80 coins is what percent of the old price?",
  st: ["After 20% off, you pay 80% of the old price.", "So 80% = 80 coins, and 1% = 1 coin.", "100% = 100 coins."],
  tip: "Find what percent the new price is, then work back to 100%." });

Q({ id: "m37", s: "Math", t: "core", lv: { "16-19": 2 }, th: "Puzzles", tp: "Algebra: quadratic equations",
  q: "Solve x² - 5x + 6 = 0.", key: null,
  r: "x = 2 or x = 3",
  c: [["x = -2 or x = -3", "Getting the signs wrong", "Check x = -2: 4 + 10 + 6 = 20, not 0."]],
  d: ["x = 6 cm", "This equation has no units."],
  h: "Find two numbers that multiply to 6 and add to -5.",
  st: ["Two numbers that multiply to 6 and add to -5: -2 and -3.", "So (x - 2)(x - 3) = 0.", "x - 2 = 0 or x - 3 = 0, so x = 2 or x = 3."],
  tip: "Put your answers back into the equation to check." });

Q({ id: "m38", s: "Math", t: "core", lv: { "16-19": 2 }, th: "Games", tp: "Probability: combined events",
  q: "You flip a fair coin twice. What is the chance of getting two heads?", key: null,
  r: "1/4",
  c: [["1/2", "Adding chances instead of multiplying", "Each flip is 1/2. Both together: 1/2 × 1/2 = 1/4."],
      ["1/3", "Treating outcomes as equally likely when they are not", "There are 4 equal outcomes: HH, HT, TH, TT. Only HH works."]],
  d: ["2 coins", "The question asks for a chance."],
  h: "List every possible result of two flips.",
  st: ["The results are HH, HT, TH and TT.", "That is 4 equally likely results.", "Only HH is two heads, so the chance is 1/4."],
  tip: "For \"this and then that\", multiply the chances." });

Q({ id: "m39", s: "Math", t: "core", lv: { "16-19": 2 }, th: "Nature", tp: "Number: standard form",
  q: "A grain of pollen is 0.00052 m wide. Write 0.00052 in standard form.", key: null,
  r: "5.2 × 10⁻⁴",
  c: [["5.2 × 10⁴", "Using a positive power for a small number", "10⁴ makes a big number, 52,000. 0.00052 is tiny."]],
  d: ["52 kg", "The question is about a width, not a weight."],
  h: "How many places must the point move to make 5.2?",
  st: ["Move the point to get a number from 1 to 10: 5.2.", "The point moved 4 places to the right.", "A small number has a negative power: 5.2 × 10⁻⁴."],
  tip: "Numbers smaller than 1 have a negative power of 10." });

Q({ id: "m40", s: "Math", t: "core", lv: { "16-19": 2 }, th: "School", tp: "Geometry: Pythagoras",
  q: "A ladder is 5 m long. Its foot is 3 m from a wall. How high up the wall does the ladder reach?", key: null,
  r: "4 m",
  c: [["5.8 m", "Adding the squares when you should subtract", "The ladder is the longest side. 5² - 3² = 16, not 5² + 3²."]],
  d: ["3 ladders", "There is only one ladder."],
  h: "Which side of the triangle is the ladder?",
  st: ["The ladder is the longest side, the hypotenuse: 5 m.", "Height² = 5² - 3² = 25 - 9 = 16.", "Height = √16 = 4 m."],
  tip: "To find a short side, subtract the squares." });

Q({ id: "m41", s: "Math", t: "core", lv: { "16-19": 2 }, th: "Market", tp: "Number: best value",
  q: "A 500 g pack of rice costs 4 coins. A 2 kg pack costs 14 coins. Which pack is better value?", key: null,
  r: "The 2 kg pack, 0.7 coins per 100 g",
  c: [["The 500 g pack, because it costs less", "Comparing prices without comparing amounts", "It costs less, but you get less. Per 100 g it costs 0.8 coins."]],
  d: ["Rice is free", "Both packs have a price."],
  h: "Find the cost of the same amount in each pack.",
  st: ["500 g for 4 coins: 4 ÷ 5 = 0.8 coins per 100 g.", "2 kg = 2,000 g for 14 coins: 14 ÷ 20 = 0.7 coins per 100 g.", "0.7 is less, so the 2 kg pack is better value."],
  tip: "Compare the price of the same amount." });

// ---------- Ages 16-19, Level 3 ----------
Q({ id: "m42", s: "Math", t: "core", lv: { "16-19": 3 }, th: "Phones", tp: "Number: depreciation",
  q: "A phone loses 20% of its value each year. It cost 500 coins new. What is it worth after 2 years?", key: null,
  r: "320 coins",
  c: [["300 coins", "Taking the percent of the first price every year", "In year 2 it loses 20% of 400, not 20% of 500."]],
  d: ["2 phones", "The question asks for a value."],
  h: "Find the value after year 1 first.",
  st: ["Year 1: 20% of 500 = 100. Value 400.", "Year 2: 20% of 400 = 80. Value 320.", "Or: 500 × 0.8 × 0.8 = 320."],
  tip: "Each year's percent is taken from the value at the start of that year." });

Q({ id: "m43", s: "Math", t: "core", lv: { "16-19": 3 }, th: "Sports", tp: "Algebra: gradient",
  q: "A line on a training graph goes through (1, 2) and (3, 8). What is its gradient?", key: null,
  r: "3",
  c: [["1/3", "Putting the x change over the y change", "Gradient is the change in y ÷ the change in x: 6 ÷ 2."]],
  d: ["A hill", "Here the gradient is a number, not a place."],
  h: "How much does y change? How much does x change?",
  st: ["Change in y: 8 - 2 = 6.", "Change in x: 3 - 1 = 2.", "Gradient = 6 ÷ 2 = 3."],
  tip: "Gradient = up ÷ across." });

Q({ id: "m44", s: "Math", t: "core", lv: { "16-19": 3 }, th: "Puzzles", tp: "Algebra: inequalities",
  q: "Solve -2x > 6.", key: null,
  r: "x < -3",
  c: [["x > -3", "Forgetting to flip the sign when dividing by a negative", "Dividing by -2 flips > to <. Test x = 0: -2 × 0 > 6 is false."]],
  d: ["x > 600 km", "This question has no units."],
  h: "What happens to the sign when you divide by a negative number?",
  st: ["Divide both sides by -2.", "Dividing by a negative flips the sign: > becomes <.", "So x < -3. Check x = -4: 8 > 6 is true."],
  tip: "Test a number in your answer to check the sign." });

Q({ id: "m45", s: "Math", t: "core", lv: { "16-19": 3 }, th: "School", tp: "Probability: conditional",
  q: "In a class of 30, 12 students play football. 4 of the football players also play chess. You pick a football player at random. What is the chance they play chess?", key: "football",
  r: "1/3",
  c: [["4/30", "Using the whole group instead of the group you picked from", "You picked from the 12 football players, so the chance is 4/12."]],
  d: ["30 chess boards", "The question asks for a chance."],
  h: "Who are you picking from: the whole class or only the football players?",
  st: ["You only pick from the football players: 12 students.", "4 of them play chess.", "4/12 = 1/3."],
  tip: "Find the group you are choosing from. That is the bottom number." });

Q({ id: "m46", s: "Math", t: "core", lv: { "16-19": 3 }, th: "Tech", tp: "Algebra: geometric sequences",
  q: "A video gets 100 views on day 1. The views double every day. How many views does it get on day 6?", key: null,
  r: "3,200",
  c: [["6,400", "Counting one doubling too many", "From day 1 to day 6 there are 5 doublings: 100 × 2⁵."],
      ["600", "Adding instead of doubling", "600 is what you get if the views go up by 100 a day. Doubling multiplies."]],
  d: ["6 videos", "There is only one video."],
  h: "How many times do the views double between day 1 and day 6?",
  st: ["Day 1: 100. Each day multiply by 2.", "Day 2: 200, day 3: 400, day 4: 800, day 5: 1,600.", "Day 6: 3,200."],
  tip: "Count the jumps between days, not the days." });

Q({ id: "m47", s: "Math", t: "core", lv: { "16-19": 3 }, th: "Tech", tp: "Geometry: similar shapes",
  q: "A photo is enlarged so every length is 3 times bigger. How many times bigger is its area?", key: "area",
  r: "9 times",
  c: [["3 times", "Thinking area grows like length", "Area uses two lengths, so it grows 3 × 3 times."]],
  d: ["The photo turns black", "Making a photo bigger does not change its colour."],
  h: "Try a 1 cm by 1 cm square. What happens when each side is 3 times bigger?",
  st: ["A 1 cm by 1 cm square has area 1 cm².", "Make each side 3 times bigger: 3 cm by 3 cm.", "The area is 9 cm², so 9 times bigger."],
  tip: "Length scale k means area scale k²." });

Q({ id: "m48", s: "Math", t: "core", lv: { "16-19": 3 }, th: "School", tp: "Statistics: mean",
  q: "The mean of 4 test scores is 70. A fifth test score of 90 is added. What is the new mean?", key: null,
  r: "74",
  c: [["80", "Averaging the old mean and the new score", "The old mean stands for 4 tests, so it counts 4 times. 90 counts once."]],
  d: ["90 tests", "There are only 5 tests."],
  h: "Find the total of the first 4 scores.",
  st: ["Total of 4 scores: 4 × 70 = 280.", "Add the new score: 280 + 90 = 370.", "New mean: 370 ÷ 5 = 74."],
  tip: "Go back to the total, then divide by the new count." });

Q({ id: "m49", s: "Math", t: "core", lv: { "16-19": 3 }, th: "Puzzles", tp: "Algebra: rearranging formulas",
  q: "The area of a circle is A = πr². Make r the subject.", key: null,
  r: "r = √(A/π)",
  c: [["r = A/(2π)", "Halving instead of taking a square root", "r is squared, so you undo it with a square root, not by dividing by 2."]],
  d: ["r = π", "π is a fixed number. r changes when A changes."],
  h: "Undo the π first. Then undo the square.",
  st: ["Divide both sides by π: A/π = r².", "Undo the square with a square root.", "r = √(A/π)."],
  tip: "Undo each step in reverse order." });

Q({ id: "m50", s: "Math", t: "core", lv: { "16-19": 3 }, th: "Sports", tp: "Geometry: trigonometry",
  q: "A ramp makes a right triangle. The side opposite angle θ is 5 m. The hypotenuse is 10 m. What is θ?", key: null,
  r: "30°",
  c: [["60°", "Using cos when you need sin", "Opposite over hypotenuse is sin. sin θ = 0.5 gives 30°."]],
  d: ["10 m", "The question asks for an angle, not a length."],
  h: "Which ratio uses the opposite side and the hypotenuse?",
  st: ["Opposite and hypotenuse means sin.", "sin θ = 5 ÷ 10 = 0.5.", "θ = 30°."],
  tip: "SOH CAH TOA: label the sides first." });
