// Right, Close, Dud questions, version 3: Physics (science track, ages 16-19). See README.md for the field names.

// ---------- Level 1 ----------
Q({ id: "x37", s: "Physics", t: "science", lv: { "16-19": 1 }, th: "Sports", tp: "Motion: speed",
  q: "A cyclist rides 300 m in 60 s. What is her average speed?", key: null,
  r: "5 m/s",
  c: [["18,000 m/s", "Multiplying instead of dividing", "Speed = distance ÷ time, not distance × time."]],
  d: ["60 bikes", "The question asks for a speed."],
  h: "The unit m/s means metres divided by seconds.",
  st: ["Speed = distance ÷ time.", "300 m ÷ 60 s.", "Speed = 5 m/s."],
  tip: "Use the unit to see the formula: m/s means m ÷ s." });

Q({ id: "x38", s: "Physics", t: "science", lv: { "16-19": 1 }, th: "Travel", tp: "Forces: weight",
  q: "A bag has a mass of 2 kg. Gravity is 10 N/kg. What is the bag's weight?", key: "weight",
  r: "20 N",
  c: [["2 N", "Mixing up mass and weight", "2 kg is the mass. Weight = mass × gravity."],
      ["20 kg", "Using the wrong unit", "Weight is a force, so it is measured in newtons, not kg."]],
  d: ["10 bags", "There is only one bag."],
  h: "Weight is a force. Which unit do forces use?",
  st: ["Weight = mass × gravitational field strength.", "2 kg × 10 N/kg.", "Weight = 20 N."],
  tip: "Mass in kg. Weight in N." });

Q({ id: "x39", s: "Physics", t: "science", lv: { "16-19": 1 }, th: "Robots", tp: "Electricity: Ohm's law",
  q: "A robot circuit has a 6 V battery and a 3 Ω resistor. What current flows?", key: null,
  r: "2 A",
  c: [["18 A", "Multiplying instead of dividing", "Current = voltage ÷ resistance, not voltage × resistance."]],
  d: ["6 batteries", "There is only one battery."],
  h: "Use V = I × R and rearrange for I.",
  st: ["V = I × R, so I = V ÷ R.", "6 V ÷ 3 Ω.", "I = 2 A."],
  tip: "I = V ÷ R." });

Q({ id: "x40", s: "Physics", t: "science", lv: { "16-19": 1 }, th: "Kitchen lab", tp: "Matter: density",
  q: "A block has a mass of 600 g and a volume of 200 cm³. What is its density?", key: null,
  r: "3 g/cm³",
  c: [["120,000 g/cm³", "Multiplying instead of dividing", "Density = mass ÷ volume."]],
  d: ["200 blocks", "There is only one block."],
  h: "The unit g/cm³ means grams divided by cm³.",
  st: ["Density = mass ÷ volume.", "600 g ÷ 200 cm³.", "Density = 3 g/cm³."],
  tip: "Density = mass ÷ volume." });

Q({ id: "x41", s: "Physics", t: "science", lv: { "16-19": 1 }, th: "Tech", tp: "Light: reflection",
  q: "A light ray hits a mirror at 30° to the normal. What is the angle of reflection?", key: "normal",
  r: "30°",
  c: [["60°", "Measuring from the mirror instead of the normal", "Angles are measured from the normal, so the angle of reflection is also 30°."]],
  d: ["30 cm", "The question asks for an angle."],
  h: "The angle in equals the angle out.",
  st: ["The normal is a line at 90° to the mirror.", "The angle of incidence is 30° from the normal.", "Angle of reflection = angle of incidence = 30°."],
  tip: "Always measure from the normal." });

Q({ id: "x42", s: "Physics", t: "science", lv: { "16-19": 1 }, th: "Sports", tp: "Forces: pressure",
  q: "A force of 100 N acts on an area of 2 m². What is the pressure?", key: null,
  r: "50 Pa",
  c: [["200 Pa", "Multiplying instead of dividing", "Pressure = force ÷ area."]],
  d: ["100 m", "Pressure is not a length."],
  h: "Pressure is force spread over an area.",
  st: ["Pressure = force ÷ area.", "100 N ÷ 2 m².", "Pressure = 50 Pa."],
  tip: "Bigger area, smaller pressure." });

Q({ id: "x43", s: "Physics", t: "science", lv: { "16-19": 1 }, th: "Market", tp: "Energy: work done",
  q: "You push a box with a force of 50 N for 4 m. How much work do you do?", key: null,
  r: "200 J",
  c: [["12.5 J", "Dividing instead of multiplying", "Work = force × distance."]],
  d: ["4 boxes", "There is only one box."],
  h: "Work = force × distance moved.",
  st: ["Work done = force × distance.", "50 N × 4 m.", "Work = 200 J."],
  tip: "Work done = force × distance in the direction of the force." });

Q({ id: "x44", s: "Physics", t: "science", lv: { "16-19": 1 }, th: "Music", tp: "Waves: frequency and period",
  q: "A wave has a period of 0.5 s. What is its frequency?", key: "frequency",
  r: "2 Hz",
  c: [["0.5 Hz", "Mixing up period and frequency", "Period is the time for one wave. Frequency is waves per second: 1 ÷ 0.5."]],
  d: ["5 m", "Frequency is not a length."],
  h: "How many 0.5 s waves fit into 1 second?",
  st: ["Frequency = 1 ÷ period.", "1 ÷ 0.5 s.", "Frequency = 2 Hz."],
  tip: "f = 1 ÷ T." });

Q({ id: "x45", s: "Physics", t: "science", lv: { "16-19": 1 }, th: "Tech", tp: "Energy: efficiency",
  q: "A bulb uses 100 J of energy and gives out 20 J as light. What is its efficiency?", key: null,
  r: "20%",
  c: [["80%", "Giving the wasted energy instead of the useful energy", "80 J is wasted as heat. Efficiency uses the useful 20 J."]],
  d: ["100 bulbs", "There is only one bulb."],
  h: "Which energy is useful for a bulb?",
  st: ["Useful energy out: 20 J of light.", "Total energy in: 100 J.", "Efficiency = 20 ÷ 100 = 20%."],
  tip: "Efficiency = useful energy out ÷ total energy in." });

Q({ id: "x46", s: "Physics", t: "science", lv: { "16-19": 1 }, th: "Robots", tp: "Electricity: series resistance",
  q: "A 4 Ω resistor and a 6 Ω resistor are in series. What is the total resistance?", key: "series",
  r: "10 Ω",
  c: [["2.4 Ω", "Using the parallel rule for series", "2.4 Ω is the parallel answer. In series you just add."]],
  d: ["24 V", "Resistance is in ohms, not volts."],
  h: "In series, the current goes through both resistors one after the other.",
  st: ["Resistors in series: add them.", "4 Ω + 6 Ω.", "Total = 10 Ω."],
  tip: "Series: add. Parallel: the total is less than the smallest one." });

// ---------- Level 2 ----------
Q({ id: "x47", s: "Physics", t: "science", lv: { "16-19": 2 }, th: "Travel", tp: "Motion: acceleration",
  q: "A car starts from rest and speeds up at 2 m/s² for 5 s. What is its final speed?", key: null,
  r: "10 m/s",
  c: [["2.5 m/s", "Dividing instead of multiplying", "Each second adds 2 m/s. After 5 s: 2 × 5 = 10 m/s."]],
  d: ["5 cars", "There is only one car."],
  h: "Acceleration of 2 m/s² means the speed goes up 2 m/s each second.",
  st: ["v = u + at.", "u = 0, a = 2, t = 5.", "v = 0 + 2 × 5 = 10 m/s."],
  tip: "v = u + at." });

Q({ id: "x48", s: "Physics", t: "science", lv: { "16-19": 2 }, th: "Sports", tp: "Forces: momentum",
  q: "A 3 kg ball moves at 4 m/s. What is its momentum?", key: "momentum",
  r: "12 kg m/s",
  c: [["24 J", "Mixing up momentum and kinetic energy", "½ × 3 × 4² = 24 J is the kinetic energy. Momentum = mass × velocity."]],
  d: ["3 balls", "There is only one ball."],
  h: "Momentum = mass × velocity.",
  st: ["Momentum p = m × v.", "3 kg × 4 m/s.", "p = 12 kg m/s."],
  tip: "Momentum uses v. Kinetic energy uses v²." });

Q({ id: "x49", s: "Physics", t: "science", lv: { "16-19": 2 }, th: "Robots", tp: "Energy: power",
  q: "A motor lifts a 50 N load up 4 m in 10 s. What is its power?", key: "power",
  r: "20 W",
  c: [["200 W", "Forgetting to divide by time", "200 J is the work done. Power = work ÷ time."]],
  d: ["10 s", "Power is not a time."],
  h: "Find the work done first.",
  st: ["Work = force × distance = 50 × 4 = 200 J.", "Power = work ÷ time.", "200 J ÷ 10 s = 20 W."],
  tip: "Power is energy per second." });

Q({ id: "x50", s: "Physics", t: "science", lv: { "16-19": 2 }, th: "Tech", tp: "Light: refraction",
  q: "A light ray goes from air into glass at an angle. What happens to it?", key: null,
  r: "It slows down and bends toward the normal",
  c: [["It speeds up and bends away from the normal", "Getting the direction of bending backwards", "Glass is denser than air, so light slows down and bends toward the normal."]],
  d: ["It turns into sound", "Light cannot turn into sound in glass."],
  h: "Is light faster in air or in glass?",
  st: ["Light is slower in glass than in air.", "When light slows down, it bends toward the normal.", "So it slows down and bends toward the normal."],
  tip: "Into a slower material: toward the normal." });

Q({ id: "x51", s: "Physics", t: "science", lv: { "16-19": 2 }, th: "Kitchen lab", tp: "Energy: specific heat capacity",
  q: "How much energy does it take to heat 2 kg of water by 10 °C? (c = 4,200 J/kg °C)", key: null,
  r: "84,000 J",
  c: [["8,400 J", "Leaving out one of the values", "You must use all three: 2 × 4,200 × 10."]],
  d: ["10 kg", "The question asks for energy."],
  h: "Use E = m × c × ΔT.",
  st: ["E = m × c × ΔT.", "2 × 4,200 × 10.", "E = 84,000 J."],
  tip: "Check you have used mass, c and the temperature change." });

Q({ id: "x52", s: "Physics", t: "science", lv: { "16-19": 2 }, th: "Sports", tp: "Motion: projectiles",
  q: "A ball rolls off a table at 3 m/s horizontally. Ignore air resistance. What is its horizontal speed 0.4 s later?", key: "horizontal",
  r: "3 m/s",
  c: [["7 m/s", "Thinking gravity changes the horizontal speed", "Gravity only pulls down. It changes the vertical speed, not the horizontal speed."]],
  d: ["0.4 m", "The question asks for a speed."],
  h: "Which way does gravity pull?",
  st: ["Gravity acts straight down.", "No force acts sideways, because air resistance is ignored.", "So the horizontal speed stays 3 m/s."],
  tip: "Treat horizontal and vertical motion separately." });

Q({ id: "x53", s: "Physics", t: "science", lv: { "16-19": 2 }, th: "Tech", tp: "Electricity: transformers",
  q: "A transformer has 100 turns on the primary coil and 400 turns on the secondary coil. The input is 12 V. What is the output?", key: null,
  r: "48 V",
  c: [["3 V", "Using the turns ratio upside down", "More turns on the secondary means a higher voltage: 12 × 400 ÷ 100."]],
  d: ["400 turns", "The question asks for a voltage."],
  h: "Does the secondary have more or fewer turns?",
  st: ["Vs ÷ Vp = Ns ÷ Np.", "Vs = 12 × 400 ÷ 100.", "Vs = 48 V. This is a step-up transformer."],
  tip: "More turns on the output side means higher voltage." });

Q({ id: "x54", s: "Physics", t: "science", lv: { "16-19": 2 }, th: "Robots", tp: "Electricity: parallel resistance",
  q: "Two 10 Ω resistors are connected in parallel. What is the total resistance?", key: "parallel",
  r: "5 Ω",
  c: [["20 Ω", "Using the series rule for parallel", "20 Ω is the series answer. In parallel the current has two paths, so the total is less."]],
  d: ["10 V", "Resistance is in ohms, not volts."],
  h: "Two paths make it easier or harder for current to flow?",
  st: ["For parallel: 1/R = 1/10 + 1/10 = 2/10.", "So R = 10 ÷ 2.", "R = 5 Ω."],
  tip: "Parallel total is always less than the smallest resistor." });

// ---------- Level 3 ----------
Q({ id: "x55", s: "Physics", t: "science", lv: { "16-19": 3 }, th: "Travel", tp: "Motion: circular motion",
  q: "A car goes around a roundabout at a steady speed. Which way does the resultant force on the car point?", key: null,
  r: "Toward the centre of the circle",
  c: [["Outward, away from the centre", "Thinking circular motion needs an outward force", "You feel pushed out, but the real resultant force points in, toward the centre."],
      ["Nowhere, it is zero because the speed is steady", "Thinking steady speed means no force", "The direction keeps changing, so the car is accelerating and needs a force."]],
  d: ["Straight up", "Nothing pushes the car up into the air."],
  h: "Is the car's velocity changing? Think about direction.",
  st: ["The speed is steady, but the direction changes all the time.", "A change in velocity needs a resultant force.", "For a circle, that force points toward the centre."],
  tip: "Circular motion: the resultant force points to the centre." });

Q({ id: "x56", s: "Physics", t: "science", lv: { "16-19": 3 }, th: "Sports", tp: "Energy: conservation of energy",
  q: "A 0.5 kg ball is dropped from 20 m. Ignore air resistance. How fast is it moving just before it lands? (g = 10 m/s²)", key: null,
  r: "20 m/s",
  c: [["400 m/s", "Forgetting the square root", "v² = 400, so v = √400 = 20 m/s."]],
  d: ["0.5 kg", "The question asks for a speed."],
  h: "Potential energy at the top becomes kinetic energy at the bottom.",
  st: ["mgh = ½mv², so v² = 2gh.", "v² = 2 × 10 × 20 = 400.", "v = √400 = 20 m/s. The mass cancels."],
  tip: "If you solve for v², remember to take the square root." });

Q({ id: "x57", s: "Physics", t: "science", lv: { "16-19": 3 }, th: "Diving", tp: "Matter: gas laws",
  q: "A sealed gas tank is heated from 27 °C to 54 °C. Its volume stays the same. Does its pressure double?", key: "double",
  r: "No. In kelvin, 300 K to 327 K is only about 9% more",
  c: [["Yes, because the temperature doubled", "Using °C instead of kelvin", "Gas laws need kelvin. 27 °C = 300 K and 54 °C = 327 K. That is not double."]],
  d: ["The gas turns into water", "Heating a gas does not turn it into water."],
  h: "Change both temperatures to kelvin first.",
  st: ["Add 273: 27 °C = 300 K and 54 °C = 327 K.", "Pressure is proportional to kelvin temperature.", "327 ÷ 300 is about 1.09, so the pressure rises about 9%."],
  tip: "Always use kelvin in gas laws." });

Q({ id: "x58", s: "Physics", t: "science", lv: { "16-19": 3 }, th: "Tech", tp: "Quantum: photoelectric effect",
  q: "Red light shines on a metal and releases no electrons. You make the red light much brighter. Still no electrons come out. Why?", key: null,
  r: "Each red photon has too little energy, and brightness does not change photon energy",
  c: [["The light is not bright enough yet", "Thinking brighter light gives each photon more energy", "Brighter light means more photons, not stronger ones. Only a higher frequency helps."]],
  d: ["Metals do not like red", "Metals have no likes or dislikes."],
  h: "What decides the energy of one photon?",
  st: ["One photon gives its energy to one electron.", "Photon energy depends on frequency: E = hf.", "Red light's frequency is too low, however bright it is."],
  tip: "Photon energy depends on frequency, not brightness." });

Q({ id: "x59", s: "Physics", t: "science", lv: { "16-19": 3 }, th: "Robots", tp: "Electricity: potential dividers",
  q: "A 12 V supply is connected to a 2 kΩ resistor and a 4 kΩ resistor in series. What is the voltage across the 4 kΩ resistor?", key: null,
  r: "8 V",
  c: [["4 V", "Splitting the voltage the wrong way round", "The bigger resistor gets the bigger share: 12 × 4 ÷ 6."],
      ["6 V", "Splitting the voltage equally", "Voltage splits in proportion to resistance, not equally."]],
  d: ["4 kΩ", "The question asks for a voltage."],
  h: "The voltage splits in the same ratio as the resistances.",
  st: ["Total resistance: 2 + 4 = 6 kΩ.", "The 4 kΩ resistor has 4/6 of the resistance.", "4/6 × 12 V = 8 V."],
  tip: "In series, the bigger resistor takes the bigger voltage." });

Q({ id: "x60", s: "Physics", t: "science", lv: { "16-19": 3 }, th: "Music", tp: "Oscillations: pendulums",
  q: "A pendulum is made 4 times longer. What happens to its period?", key: null,
  r: "It doubles",
  c: [["It becomes 4 times longer", "Thinking the period is proportional to the length", "The period depends on the square root of the length. √4 = 2."]],
  d: ["The pendulum stops forever", "A longer pendulum still swings."],
  h: "T = 2π√(L/g). What does a square root do to 4?",
  st: ["T = 2π√(L/g).", "Make L 4 times bigger: √4 = 2.", "So the period doubles."],
  tip: "The period depends on √L, not on L." });

Q({ id: "x61", s: "Physics", t: "science", lv: { "16-19": 3 }, th: "Travel", tp: "Forces: Newton's third law",
  q: "A truck crashes into a small car. Which feels the bigger force?", key: "bigger",
  r: "Both feel forces of the same size",
  c: [["The car, because it is damaged more", "Mixing up a force and its effect", "The forces are equal. The car is damaged more because its mass is smaller, so it accelerates more."]],
  d: ["The road", "The question is about the truck and the car."],
  h: "Newton's third law: what can you say about the two forces?",
  st: ["The truck pushes the car. The car pushes the truck.", "Newton's third law: these forces are equal and opposite.", "The car has less mass, so the same force changes its motion more."],
  tip: "Equal forces can have very different effects." });

Q({ id: "x62", s: "Physics", t: "science", lv: { "16-19": 3 }, th: "Tech", tp: "Nuclear: half-life",
  q: "A radioactive source has an activity of 800 Bq. Its half-life is 3 days. What is its activity after 12 days?", key: null,
  r: "50 Bq",
  c: [["100 Bq", "Counting the wrong number of half-lives", "12 days is 4 half-lives: 800 → 400 → 200 → 100 → 50."],
      ["200 Bq", "Dividing by the number of half-lives", "Each half-life halves the activity. 800 ÷ 4 is not the same as halving 4 times."]],
  d: ["12 days", "The question asks for an activity."],
  h: "How many half-lives are in 12 days?",
  st: ["12 ÷ 3 = 4 half-lives.", "Halve 4 times: 800 → 400 → 200 → 100 → 50.", "Activity = 50 Bq."],
  tip: "Count the half-lives, then halve that many times." });
