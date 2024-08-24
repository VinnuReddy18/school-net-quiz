export const questions = {
    cars: {
      easy: [
        { type: "mcq", question: "Which car brand has a logo with four rings?", options: ["BMW", "Audi", "Mercedes", "Tesla"], answer: "Audi" },
        { type: "truefalse", question: "Electric cars produce zero emissions.", options: ["True", "False"], answer: "False" },
        { type: "multi", question: "Which of the following are types of car engines?", options: ["V8", "Wankel", "Steam", "Rotary"], answer: ["V8", "Rotary"] },
        { type: "mcq", question: "Which company produces the Model S?", options: ["Tesla", "Ford", "Toyota", "BMW"], answer: "Tesla" },
        { type: "truefalse", question: "Bugatti Veyron is an electric car.", options: ["True", "False"], answer: "False" }
      ],
      medium: [
        { type: "mcq", question: "Which car is known as the 'Godzilla'?", options: ["Nissan GTR", "Mustang", "Porsche 911", "Audi R8"], answer: "Nissan GTR" },
        { type: "truefalse", question: "The Ferrari logo is a prancing horse.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following brands are Italian?", options: ["Lamborghini", "Bugatti", "Ferrari", "Porsche"], answer: ["Lamborghini", "Ferrari"] },
        { type: "mcq", question: "Which car brand produces the Mustang?", options: ["Ford", "Chevrolet", "Dodge", "BMW"], answer: "Ford" },
        { type: "truefalse", question: "The McLaren F1 was the fastest car in the 90s.", options: ["True", "False"], answer: "True" }
      ],
      hard: [
        { type: "mcq", question: "Which car was known as 'The Widowmaker'?", options: ["Porsche 911 Turbo", "Corvette C7", "Ferrari Enzo", "Ford GT"], answer: "Porsche 911 Turbo" },
        { type: "truefalse", question: "Koenigsegg Jesko is a Swedish hypercar.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following are hybrid supercars?", options: ["Porsche 918", "Ferrari LaFerrari", "Bugatti Chiron", "McLaren P1"], answer: ["Porsche 918", "Ferrari LaFerrari", "McLaren P1"] },
        { type: "mcq", question: "Which car holds the Nürburgring lap record?", options: ["Porsche 911 GT2 RS", "Lamborghini Huracan", "Ferrari 488 Pista", "McLaren 720S"], answer: "Porsche 911 GT2 RS" },
        { type: "truefalse", question: "The Lamborghini Countach was introduced in the 80s.", options: ["True", "False"], answer: "False" }
      ]
    },
    tech: {
      easy: [
        { type: "mcq", question: "What does 'HTML' stand for?", options: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "High-level Text Markup Language", "Hypertext and Markup Language"], answer: "Hypertext Markup Language" },
        { type: "truefalse", question: "CSS is used for styling HTML elements.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following are programming languages?", options: ["JavaScript", "HTML", "Python", "CSS"], answer: ["JavaScript", "Python"] },
        { type: "mcq", question: "Which company developed the Windows operating system?", options: ["Apple", "Microsoft", "Google", "IBM"], answer: "Microsoft" },
        { type: "truefalse", question: "JavaScript is a server-side language.", options: ["True", "False"], answer: "False" }
      ],
      medium: [
        { type: "mcq", question: "What is the latest version of HTML?", options: ["HTML4", "HTML5", "HTML6", "HTML7"], answer: "HTML5" },
        { type: "truefalse", question: "Python is an interpreted language.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following are frameworks for JavaScript?", options: ["React", "Django", "Angular", "Spring"], answer: ["React", "Angular"] },
        { type: "mcq", question: "What does 'SQL' stand for?", options: ["Structured Query Language", "Sequential Query Language", "Standard Query Language", "Structured Question Language"], answer: "Structured Query Language" },
        { type: "truefalse", question: "PHP stands for Personal Home Page.", options: ["True", "False"], answer: "False" }
      ],
      hard: [
        { type: "mcq", question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["Refers to the global object", "Refers to the object that called the function", "Refers to the function itself", "Refers to the constructor function"], answer: "Refers to the object that called the function" },
        { type: "truefalse", question: "In which language was the Linux kernel primarily written?", options: ["C", "C++", "Assembly", "Python"], answer: "C" },
        { type: "multi", question: "Which of the following are types of NoSQL databases?", options: ["MongoDB", "PostgreSQL", "MySQL", "Redis"], answer: ["MongoDB", "Redis"] },
        { type: "mcq", question: "Which protocol is used for secure data transfer over the web?", options: ["HTTP", "FTP", "SMTP", "HTTPS"], answer: "HTTPS" },
        { type: "truefalse", question: "The 'fetch' API is used for making HTTP requests.", options: ["True", "False"], answer: "True" }
      ]
    },
    science: {
      easy: [
        { type: "mcq", question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
        { type: "truefalse", question: "The Earth orbits the Sun.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following are states of matter?", options: ["Solid", "Liquid", "Gas", "Plasma"], answer: ["Solid", "Liquid", "Gas"] },
        { type: "mcq", question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Saturn", "Neptune"], answer: "Jupiter" },
        { type: "truefalse", question: "Humans have 206 bones in their body.", options: ["True", "False"], answer: "True" }
      ],
      medium: [
        { type: "mcq", question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
        { type: "truefalse", question: "Light travels faster than sound.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following elements are noble gases?", options: ["Neon", "Argon", "Krypton", "Bromine"], answer: ["Neon", "Argon", "Krypton"] },
        { type: "mcq", question: "What is the basic unit of life?", options: ["Atom", "Molecule", "Cell", "Tissue"], answer: "Cell" },
        { type: "truefalse", question: "The human brain is the largest organ in the body.", options: ["True", "False"], answer: "False" }
      ],
      hard: [
        { type: "mcq", question: "What is the name of the process by which plants make their food?", options: ["Respiration", "Photosynthesis", "Digestion", "Absorption"], answer: "Photosynthesis" },
        { type: "truefalse", question: "The speed of light is approximately 300,000 kilometers per second.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following are fundamental forces of nature?", options: ["Gravitational", "Electromagnetic", "Strong", "Weak", "Nuclear"], answer: ["Gravitational", "Electromagnetic", "Strong", "Weak"] },
        { type: "mcq", question: "Who is known as the father of modern physics?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], answer: "Albert Einstein" },
        { type: "truefalse", question: "The Earth is closer to the Sun than Venus.", options: ["True", "False"], answer: "False" }
      ]
    },
    history: {
      easy: [
        { type: "mcq", question: "Who was the first President of the United States?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], answer: "George Washington" },
        { type: "truefalse", question: "The Great Wall of China was built to protect against invaders.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following were ancient civilizations?", options: ["Egyptians", "Greeks", "Romans", "Mongols"], answer: ["Egyptians", "Greeks", "Romans"] },
        { type: "mcq", question: "Who was the famous queen of ancient Egypt?", options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Elizabeth"], answer: "Cleopatra" },
        { type: "truefalse", question: "The Titanic sank on its maiden voyage.", options: ["True", "False"], answer: "True" }
      ],
      medium: [
        { type: "mcq", question: "Which event started World War I?", options: ["Assassination of Archduke Franz Ferdinand", "Attack on Pearl Harbor", "Fall of Berlin Wall", "Invasion of Poland"], answer: "Assassination of Archduke Franz Ferdinand" },
        { type: "truefalse", question: "The Berlin Wall fell in 1989.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following were major World War II powers?", options: ["USA", "Germany", "Japan", "Italy", "Spain"], answer: ["USA", "Germany", "Japan", "Italy"] },
        { type: "mcq", question: "Who was the leader of the Soviet Union during World War II?", options: ["Joseph Stalin", "Leon Trotsky", "Vladimir Lenin", "Nikita Khrushchev"], answer: "Joseph Stalin" },
        { type: "truefalse", question: "The Roman Empire lasted over a thousand years.", options: ["True", "False"], answer: "True" }
      ],
      hard: [
        { type: "mcq", question: "Which battle was a turning point in the American Civil War?", options: ["Battle of Gettysburg", "Battle of Antietam", "Battle of Fort Sumter", "Battle of Appomattox"], answer: "Battle of Gettysburg" },
        { type: "truefalse", question: "The Magna Carta was signed in 1215.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following were part of the Axis Powers during World War II?", options: ["Germany", "Italy", "Japan", "France", "USA"], answer: ["Germany", "Italy", "Japan"] },
        { type: "mcq", question: "Who was the first emperor of China?", options: ["Qin Shi Huang", "Han Wudi", "Liu Bang", "Zhu Yuanzhang"], answer: "Qin Shi Huang" },
        { type: "truefalse", question: "The French Revolution began in 1789.", options: ["True", "False"], answer: "True" }
      ]
    },
    sports: {
      easy: [
        { type: "mcq", question: "Which sport is known as 'the beautiful game'?", options: ["Football", "Basketball", "Tennis", "Baseball"], answer: "Football" },
        { type: "truefalse", question: "The Olympics are held every four years.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following are Olympic sports?", options: ["Swimming", "Table Tennis", "Cricket", "Golf"], answer: ["Swimming", "Table Tennis", "Golf"] },
        { type: "mcq", question: "Which country won the FIFA World Cup in 2018?", options: ["France", "Croatia", "Germany", "Brazil"], answer: "France" },
        { type: "truefalse", question: "The NBA is a professional basketball league in Europe.", options: ["True", "False"], answer: "False" }
      ],
      medium: [
        { type: "mcq", question: "Which tennis player has the most Grand Slam titles?", options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Serena Williams"], answer: "Serena Williams" },
        { type: "truefalse", question: "In cricket, a 'hat-trick' is when a bowler takes three wickets in three consecutive balls.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following sports are played with a ball?", options: ["Football", "Volleyball", "Golf", "Archery"], answer: ["Football", "Volleyball", "Golf"] },
        { type: "mcq", question: "What is the length of a standard soccer pitch?", options: ["90-120 meters", "60-80 meters", "50-70 meters", "120-150 meters"], answer: "90-120 meters" },
        { type: "truefalse", question: "A touchdown is worth 7 points in American football.", options: ["True", "False"], answer: "False" }
      ],
      hard: [
        { type: "mcq", question: "Which swimmer holds the record for the most Olympic gold medals?", options: ["Michael Phelps", "Ian Thorpe", "Ryan Lochte", "Mark Spitz"], answer: "Michael Phelps" },
        { type: "truefalse", question: "The Tour de France is a cycling race.", options: ["True", "False"], answer: "True" },
        { type: "multi", question: "Which of the following are considered major golf tournaments?", options: ["The Masters", "U.S. Open", "The Open Championship", "Ryder Cup"], answer: ["The Masters", "U.S. Open", "The Open Championship"] },
        { type: "mcq", question: "Which team has won the most NBA championships?", options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"], answer: "Boston Celtics" },
        { type: "truefalse", question: "The Super Bowl is the championship game of the NFL.", options: ["True", "False"], answer: "True" }
      ]
    }
  };
  