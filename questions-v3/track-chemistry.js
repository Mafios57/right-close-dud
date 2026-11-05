// Right, Close, Dud questions, version 3: Chemistry (science track, ages 16-19). See README.md for the field names.

// ---------- Level 1 ----------
Q({ id: "x63", s: "Chemistry", t: "science", lv: { "16-19": 1 }, th: "Tech", tp: "Atoms: subatomic particles",
  q: "Which particle in an atom has a negative charge?", key: "negative",
  r: "Electron",
  c: [["Neutron", "Mixing up neutrons and electrons", "Neutrons have no charge."],
      ["Proton", "Mixing up protons and electrons", "Protons are positive."]],
  d: ["A banana", "A banana is not part of an atom."],
  h: "Which particle moves around the outside of the nucleus?",
  st: ["Protons are positive.", "Neutrons have no charge.", "Electrons are negative."],
  tip: "Protons +, neutrons 0, electrons -." });

Q({ id: "x64", s: "Chemistry", t: "science", lv: { "16-19": 1 }, th: "Nature", tp: "Atoms: atomic number",
  q: "Carbon has an atomic number of 6 and a mass number of 12. How many protons does a carbon atom have?", key: "protons",
  r: "6",
  c: [["12", "Using the mass number instead of the atomic number", "12 is the mass number: protons plus neutrons."]],
  d: ["6 kg", "Particles are counted, not weighed in kg."],
  h: "Which number tells you the protons?",
  st: ["The atomic number is the number of protons.", "Carbon's atomic number is 6.", "So carbon has 6 protons."],
  tip: "Atomic number = protons. Mass number = protons + neutrons." });

Q({ id: "x65", s: "Chemistry", t: "science", lv: { "16-19": 1 }, th: "School", tp: "Periodic table: groups",
  q: "Elements in the same group of the periodic table have the same number of what?", key: "group",
  r: "Electrons in the outer shell",
  c: [["Neutrons", "Thinking neutrons decide the group", "Neutrons do not decide the group. The outer electrons do."]],
  d: ["Colours", "Groups are not about colour."],
  h: "What decides how an element reacts?",
  st: ["Groups are the columns of the periodic table.", "Each element in a group has the same number of outer electrons.", "That is why they react in similar ways."],
  tip: "Group number = outer electrons (for groups 1 to 7)." });

Q({ id: "x66", s: "Chemistry", t: "science", lv: { "16-19": 1 }, th: "Tech", tp: "Equations: balancing",
  q: "Complete the balanced equation: 2H₂ + O₂ → ?H₂O. What number goes in front of H₂O?", key: null,
  r: "2",
  c: [["1", "Not balancing the oxygen atoms", "O₂ has 2 oxygen atoms, so you need 2 H₂O on the right."]],
  d: ["2 kg", "The number in an equation counts molecules, not kg."],
  h: "Count the oxygen atoms on the left.",
  st: ["Left: 4 hydrogen atoms and 2 oxygen atoms.", "Each H₂O has 2 hydrogen and 1 oxygen.", "2H₂O gives 4 hydrogen and 2 oxygen. Balanced."],
  tip: "Count each type of atom on both sides." });

Q({ id: "x67", s: "Chemistry", t: "science", lv: { "16-19": 1 }, th: "Kitchen lab", tp: "Bonding: ions",
  q: "A sodium atom loses one electron. What is the charge on the ion it forms?", key: "loses",
  r: "+1",
  c: [["-1", "Thinking losing electrons makes an ion negative", "Electrons are negative. Losing one leaves one more positive charge."]],
  d: ["1 kg", "Charge is not measured in kg."],
  h: "Electrons are negative. What happens when you take a negative away?",
  st: ["A sodium atom has 11 protons and 11 electrons.", "It loses 1 electron, so it has 10.", "11 positive - 10 negative = +1."],
  tip: "Lose electrons: positive. Gain electrons: negative." });

Q({ id: "x68", s: "Chemistry", t: "science", lv: { "16-19": 1 }, th: "Kitchen lab", tp: "Acids: neutralisation",
  q: "An acid reacts with an alkali. What are the products?", key: null,
  r: "A salt and water",
  c: [["A stronger acid", "Thinking an alkali makes an acid stronger", "Alkalis cancel out acids. This is neutralisation."]],
  d: ["Gold", "Acids and alkalis cannot make gold."],
  h: "What is the name of this type of reaction?",
  st: ["Acid + alkali is a neutralisation reaction.", "The H⁺ and OH⁻ ions make water.", "The other ions make a salt."],
  tip: "Acid + alkali → salt + water." });

Q({ id: "x69", s: "Chemistry", t: "science", lv: { "16-19": 1 }, th: "Kitchen lab", tp: "Energy: exothermic reactions",
  q: "A reaction makes its container feel hot. What type of reaction is it?", key: "hot",
  r: "Exothermic",
  c: [["Endothermic", "Mixing up exothermic and endothermic", "Endothermic reactions take in heat, so they feel cold."]],
  d: ["Magnetic", "Magnetic is not a type of energy change."],
  h: "Exo means out. Endo means in.",
  st: ["The container feels hot, so heat is given out.", "Giving out heat is exothermic.", "Taking in heat is endothermic."],
  tip: "Exo: heat goes out. Endo: heat goes in." });

Q({ id: "x70", s: "Chemistry", t: "science", lv: { "16-19": 1 }, th: "Nature", tp: "Calculations: formula mass",
  q: "What is the relative formula mass of CO₂? (C = 12, O = 16)", key: null,
  r: "44",
  c: [["28", "Counting each atom only once", "CO₂ has two oxygen atoms: 12 + 2 × 16."]],
  d: ["Blue", "A mass is a number, not a colour."],
  h: "How many oxygen atoms are in CO₂?",
  st: ["CO₂ has 1 carbon and 2 oxygen atoms.", "12 + 16 + 16.", "Relative formula mass = 44."],
  tip: "The small number counts the atom just before it." });

Q({ id: "x71", s: "Chemistry", t: "science", lv: { "16-19": 1 }, th: "Tech", tp: "Metals: reactivity",
  q: "Which metal reacts most strongly with cold water?", key: "most",
  r: "Potassium",
  c: [["Iron", "Thinking everyday metals are the most reactive", "Iron reacts very slowly. Potassium, a group 1 metal, reacts fast."]],
  d: ["Plastic", "Plastic is not a metal."],
  h: "Group 1 metals are very reactive.",
  st: ["Potassium is in group 1 of the periodic table.", "Group 1 metals react strongly with water.", "Iron only rusts slowly."],
  tip: "Use the reactivity series: potassium is near the top." });

Q({ id: "x72", s: "Chemistry", t: "science", lv: { "16-19": 1 }, th: "Travel", tp: "Separating: distillation",
  q: "How can you get pure water from salty water?", key: "pure",
  r: "Distillation",
  c: [["Filtering", "Thinking filtering removes dissolved things", "Dissolved salt goes straight through filter paper."]],
  d: ["Freezing it with a magnet", "Magnets do not freeze water."],
  h: "How can you turn the water into a gas and leave the salt behind?",
  st: ["Boil the salty water. The water turns into steam.", "The salt stays behind.", "Cool the steam to get pure water. This is distillation."],
  tip: "Filters remove solid bits, not dissolved ones." });

// ---------- Level 2 ----------
Q({ id: "x73", s: "Chemistry", t: "science", lv: { "16-19": 2 }, th: "Nature", tp: "Bonding: covalent bonds",
  q: "In a water molecule, how are the atoms held together?", key: null,
  r: "By shared pairs of electrons",
  c: [["By electrons moving from one atom to another to make ions", "Mixing up ionic and covalent bonding", "Non-metal atoms share electrons. Ions form between metals and non-metals."]],
  d: ["By glue", "There is no glue in a molecule."],
  h: "Hydrogen and oxygen are both non-metals.",
  st: ["Hydrogen and oxygen are non-metals.", "Non-metals bond by sharing electrons.", "Each shared pair is a covalent bond."],
  tip: "Non-metal + non-metal: covalent. Metal + non-metal: ionic." });

Q({ id: "x74", s: "Chemistry", t: "science", lv: { "16-19": 2 }, th: "Kitchen lab", tp: "Calculations: concentration",
  q: "You dissolve 10 g of salt to make 0.5 dm³ of solution. What is the concentration?", key: null,
  r: "20 g/dm³",
  c: [["5 g/dm³", "Multiplying instead of dividing", "Concentration = mass ÷ volume: 10 ÷ 0.5."]],
  d: ["0.5 kg", "Concentration is not a mass."],
  h: "The unit g/dm³ means grams divided by dm³.",
  st: ["Concentration = mass ÷ volume.", "10 g ÷ 0.5 dm³.", "= 20 g/dm³."],
  tip: "Dividing by a number less than 1 makes the answer bigger." });

Q({ id: "x75", s: "Chemistry", t: "science", lv: { "16-19": 2 }, th: "Kitchen lab", tp: "Calculations: percentage yield",
  q: "You expect to make 50 g of product, but you make 40 g. What is the percentage yield?", key: null,
  r: "80%",
  c: [["125%", "Dividing the wrong way round", "Yield = actual ÷ expected: 40 ÷ 50. It cannot be over 100%."]],
  d: ["40 kg", "The question asks for a percentage."],
  h: "Which mass goes on top: the one you made or the one you expected?",
  st: ["Percentage yield = actual ÷ expected × 100.", "40 ÷ 50 = 0.8.", "0.8 × 100 = 80%."],
  tip: "A yield over 100% means something went wrong." });

Q({ id: "x76", s: "Chemistry", t: "science", lv: { "16-19": 2 }, th: "Kitchen lab", tp: "Reactions: conservation of mass",
  q: "Marble chips react with acid in an open flask on a balance. The mass goes down. Why?", key: "open",
  r: "Carbon dioxide gas escapes into the air",
  c: [["Some mass is destroyed in the reaction", "Thinking matter can be destroyed", "Mass is never destroyed. A gas leaves the open flask."]],
  d: ["The flask melts", "The flask does not melt."],
  h: "The flask is open. What could leave it?",
  st: ["Marble (calcium carbonate) and acid make carbon dioxide gas.", "The flask is open, so the gas escapes.", "The balance only weighs what is left, so the mass goes down."],
  tip: "If mass seems to change, look for a gas going in or out." });

Q({ id: "x77", s: "Chemistry", t: "science", lv: { "16-19": 2 }, th: "Tech", tp: "Rates: catalysts",
  q: "What does a catalyst do in a reaction?", key: null,
  r: "It speeds up the reaction without being used up",
  c: [["It is used up to give the reaction more energy", "Thinking a catalyst is a reactant", "A catalyst is not used up. It gives the reaction an easier path."]],
  d: ["It stops all reactions forever", "Catalysts speed reactions up."],
  h: "Is there still the same amount of catalyst at the end?",
  st: ["A catalyst gives the reaction a path with lower activation energy.", "So more collisions succeed and the reaction is faster.", "The catalyst is left unchanged at the end."],
  tip: "Catalysts speed up reactions and are not used up." });

Q({ id: "x78", s: "Chemistry", t: "science", lv: { "16-19": 2 }, th: "Nature", tp: "Atoms: isotopes",
  q: "Carbon-12 and carbon-14 are isotopes. What is different between them?", key: "different",
  r: "The number of neutrons",
  c: [["The number of protons", "Mixing up protons and neutrons", "If the protons changed, it would be a different element."]],
  d: ["Their colour", "Isotopes are not about colour."],
  h: "They are both carbon. What must stay the same for an element?",
  st: ["Both are carbon, so both have 6 protons.", "Carbon-12 has 6 neutrons. Carbon-14 has 8.", "Isotopes differ only in neutrons."],
  tip: "Same element, same protons. Isotopes differ in neutrons." });

Q({ id: "x79", s: "Chemistry", t: "science", lv: { "16-19": 2 }, th: "Tech", tp: "Reactions: equilibrium",
  q: "A reversible reaction reaches equilibrium in a closed flask. What is true at equilibrium?", key: null,
  r: "The forward and backward reactions go at the same rate",
  c: [["Both reactions have stopped", "Thinking equilibrium means nothing is happening", "Both reactions keep going. They just balance each other."]],
  d: ["The flask is empty", "The flask still holds the chemicals."],
  h: "At equilibrium, do the amounts change? Do the reactions stop?",
  st: ["The forward reaction keeps making products.", "The backward reaction keeps making reactants.", "They go at the same rate, so the amounts stay the same."],
  tip: "Equilibrium is dynamic: busy, but balanced." });

Q({ id: "x80", s: "Chemistry", t: "science", lv: { "16-19": 2 }, th: "Kitchen lab", tp: "Organic: alkanes",
  q: "Propane is the alkane with 3 carbon atoms. What is its formula?", key: "alkane",
  r: "C₃H₈",
  c: [["C₃H₆", "Using the alkene formula", "C₃H₆ is propene, an alkene. Alkanes follow CₙH₂ₙ₊₂."]],
  d: ["H₂O", "That is water, which has no carbon."],
  h: "Alkanes follow CₙH₂ₙ₊₂.",
  st: ["Alkanes: CₙH₂ₙ₊₂.", "n = 3, so 2 × 3 + 2 = 8 hydrogens.", "Propane is C₃H₈."],
  tip: "Alkanes: CₙH₂ₙ₊₂. Alkenes: CₙH₂ₙ." });

Q({ id: "x81", s: "Chemistry", t: "science", lv: { "16-19": 2 }, th: "Diving", tp: "Calculations: gas volumes",
  q: "At room temperature, 1 mole of any gas fills 24 dm³. What volume does 0.5 mol of oxygen fill?", key: null,
  r: "12 dm³",
  c: [["48 dm³", "Dividing by the moles instead of multiplying", "Volume = moles × 24 = 0.5 × 24."]],
  d: ["0.5 g", "The question asks for a volume."],
  h: "Half a mole fills half the space of one mole.",
  st: ["1 mol fills 24 dm³.", "Volume = moles × 24.", "0.5 × 24 = 12 dm³."],
  tip: "Gas volume = moles × 24 dm³ at room temperature." });

Q({ id: "x82", s: "Chemistry", t: "science", lv: { "16-19": 2 }, th: "Tech", tp: "Reactions: oxidation",
  q: "Magnesium burns in oxygen to make magnesium oxide. What happens to the magnesium?", key: null,
  r: "It is oxidised",
  c: [["It is reduced", "Mixing up oxidation and reduction", "Gaining oxygen, and losing electrons, is oxidation."]],
  d: ["It becomes water", "There is no hydrogen to make water."],
  h: "Does magnesium gain oxygen or lose oxygen?",
  st: ["Magnesium joins with oxygen.", "Gaining oxygen is oxidation.", "Magnesium also loses electrons, which is also oxidation."],
  tip: "OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons)." });

// ---------- Level 3 ----------
Q({ id: "x83", s: "Chemistry", t: "science", lv: { "16-19": 3 }, th: "Tech", tp: "Calculations: limiting reactants",
  q: "2H₂ + O₂ → 2H₂O. You have 4 mol of H₂ and 3 mol of O₂. Which reactant runs out first?", key: "first",
  r: "Hydrogen",
  c: [["Oxygen, because there is less of it", "Comparing amounts without using the ratio", "4 mol H₂ needs only 2 mol O₂. Hydrogen runs out, and 1 mol O₂ is left over."]],
  d: ["Water", "Water is a product, not a reactant."],
  h: "How much O₂ does 4 mol of H₂ need?",
  st: ["The ratio is 2 H₂ : 1 O₂.", "4 mol H₂ needs 2 mol O₂. You have 3 mol O₂.", "So oxygen is in excess and hydrogen runs out first."],
  tip: "Use the ratio, not just the amounts." });

Q({ id: "x84", s: "Chemistry", t: "science", lv: { "16-19": 3 }, th: "Kitchen lab", tp: "Calculations: titration",
  q: "25.0 cm³ of NaOH is neutralised by 20.0 cm³ of 0.10 mol/dm³ HCl. They react 1 : 1. What is the concentration of the NaOH?", key: null,
  r: "0.080 mol/dm³",
  c: [["0.125 mol/dm³", "Putting the volumes the wrong way round", "Moles of HCl = 0.10 × 0.020 = 0.002. Then divide by the NaOH volume, 0.025 dm³."]],
  d: ["25 cm³", "The question asks for a concentration."],
  h: "Find the moles of HCl first.",
  st: ["Moles of HCl = 0.10 × 20.0/1000 = 0.0020 mol.", "1 : 1, so moles of NaOH = 0.0020 mol.", "Concentration = 0.0020 ÷ 0.025 = 0.080 mol/dm³."],
  tip: "Moles first, then divide by the volume in dm³." });

Q({ id: "x85", s: "Chemistry", t: "science", lv: { "16-19": 3 }, th: "Tech", tp: "Equilibrium: pressure",
  q: "N₂ + 3H₂ ⇌ 2NH₃. The pressure is increased. Which way does the equilibrium shift?", key: null,
  r: "To the right, toward fewer gas molecules",
  c: [["To the left, toward more gas molecules", "Getting the pressure rule backwards", "Higher pressure favours the side with fewer gas molecules: 2 on the right, 4 on the left."]],
  d: ["It turns into a solid", "Changing pressure here does not make a solid."],
  h: "Count the gas molecules on each side.",
  st: ["Left side: 1 + 3 = 4 gas molecules. Right side: 2.", "Higher pressure favours fewer gas molecules.", "So the equilibrium shifts right, making more NH₃."],
  tip: "More pressure: shift to fewer gas molecules." });

Q({ id: "x86", s: "Chemistry", t: "science", lv: { "16-19": 3 }, th: "Kitchen lab", tp: "Energy: bond energies",
  q: "Breaking bonds in a reaction takes in 500 kJ. Making new bonds gives out 700 kJ. What is the overall energy change?", key: null,
  r: "-200 kJ, exothermic",
  c: [["+200 kJ, endothermic", "Getting the sign of the energy change backwards", "More energy is given out than taken in, so the change is negative and exothermic."]],
  d: ["700 kg", "Energy is not measured in kg."],
  h: "Energy change = energy taken in - energy given out.",
  st: ["ΔH = bonds broken - bonds made.", "500 - 700 = -200 kJ.", "Negative means exothermic."],
  tip: "Negative ΔH: exothermic. Positive ΔH: endothermic." });

Q({ id: "x87", s: "Chemistry", t: "science", lv: { "16-19": 3 }, th: "Nature", tp: "Calculations: empirical formula",
  q: "A compound is 75% carbon and 25% hydrogen by mass. What is its empirical formula? (C = 12, H = 1)", key: null,
  r: "CH₄",
  c: [["C₃H", "Using the mass percentages as the atom ratio", "75 : 25 is a mass ratio. Divide each by its atomic mass first."]],
  d: ["H₂O", "There is no oxygen in the compound."],
  h: "Divide each percentage by the atomic mass.",
  st: ["Carbon: 75 ÷ 12 = 6.25. Hydrogen: 25 ÷ 1 = 25.", "Divide both by the smaller: 6.25 ÷ 6.25 = 1 and 25 ÷ 6.25 = 4.", "The ratio is 1 : 4, so CH₄."],
  tip: "Mass ÷ atomic mass, then find the simplest ratio." });

Q({ id: "x88", s: "Chemistry", t: "science", lv: { "16-19": 3 }, th: "Kitchen lab", tp: "Acids: calculating pH",
  q: "What is the pH of a 0.01 mol/dm³ solution of hydrochloric acid, a strong acid?", key: null,
  r: "2",
  c: [["0.01", "Giving the concentration instead of the pH", "pH = -log[H⁺] = -log(0.01)."],
      ["-2", "Forgetting the minus sign in the pH formula", "log(0.01) = -2, so -log(0.01) = 2."]],
  d: ["2 litres", "pH has no units."],
  h: "pH = -log[H⁺].",
  st: ["A strong acid fully ionises, so [H⁺] = 0.01 mol/dm³.", "pH = -log(0.01).", "log(0.01) = -2, so pH = 2."],
  tip: "Every 10 times more H⁺ lowers the pH by 1." });

Q({ id: "x89", s: "Chemistry", t: "science", lv: { "16-19": 3 }, th: "Kitchen lab", tp: "Atoms: electron shells",
  q: "Sodium has 11 electrons. What is its electron arrangement?", key: null,
  r: "2, 8, 1",
  c: [["2, 9", "Overfilling the second shell", "The second shell holds 8 at most, so the 11th electron starts a third shell."]],
  d: ["11 kg", "Electrons are counted, not weighed in kg."],
  h: "How many electrons fit in the first and second shells?",
  st: ["The first shell holds 2.", "The second shell holds up to 8.", "11 - 2 - 8 = 1 in the third shell: 2, 8, 1."],
  tip: "Shells fill 2, then 8, then 8." });

Q({ id: "x90", s: "Chemistry", t: "science", lv: { "16-19": 3 }, th: "Tech", tp: "Rates: order of reaction",
  q: "In an experiment, doubling the concentration of one reactant doubles the rate. What is the order with respect to that reactant?", key: "doubles",
  r: "First order",
  c: [["Second order", "Thinking doubling means second order", "Second order would make the rate 4 times faster, because 2² = 4."]],
  d: ["Zero cm", "Order is not a length."],
  h: "Rate = k[A]ⁿ. If [A] doubles and the rate doubles, what is n?",
  st: ["Rate = k[A]ⁿ.", "Doubling [A] multiplies the rate by 2ⁿ.", "2ⁿ = 2, so n = 1: first order."],
  tip: "Doubling gives ×2 for first order, ×4 for second, ×1 for zero." });

Q({ id: "x91", s: "Chemistry", t: "science", lv: { "16-19": 3 }, th: "Nature", tp: "Bonding: forces between molecules",
  q: "Why does water have a much higher boiling point than methane?", key: null,
  r: "Water molecules form hydrogen bonds with each other",
  c: [["Water has stronger covalent bonds inside each molecule", "Mixing up bonds inside molecules with forces between them", "Boiling separates molecules. It does not break the bonds inside them."]],
  d: ["Water is heavier than the Sun", "That is not true, and it does not explain boiling."],
  h: "When water boils, what is pulled apart: the atoms in a molecule, or the molecules?",
  st: ["Boiling pulls molecules apart from each other.", "Water has O-H bonds, so its molecules form hydrogen bonds.", "These strong forces between molecules need more energy to break."],
  tip: "Boiling points depend on forces between molecules." });
