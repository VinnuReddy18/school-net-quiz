export const questions = {
    cars: {
      easy: [
        {
          type: "mcq",
          question: "Which car brand has a logo with four rings?",
          options: ["BMW", "Audi", "Mercedes", "Tesla"],
          answer: "Audi",
          explanation: "The Audi logo features four rings representing the four companies that merged to form Audi."
        },
        {
          type: "truefalse",
          question: "Electric cars produce zero emissions.",
          options: ["True", "False"],
          answer: "False",
          explanation: "Electric cars do not produce emissions while driving, but the production of electricity and batteries can create emissions."
        },
        {
          type: "multi",
          question: "Which of the following are types of car engines?",
          options: ["V8", "Wankel", "Steam", "Rotary"],
          answer: ["V8", "Rotary"],
          explanation: "V8 and Rotary are types of car engines. Wankel is another name for Rotary engines, but Steam engines are not commonly used in modern cars."
        },
        {
          type: "mcq",
          question: "Which company produces the Model S?",
          options: ["Tesla", "Ford", "Toyota", "BMW"],
          answer: "Tesla",
          explanation: "The Model S is a fully electric car produced by Tesla, Inc."
        },
        {
          type: "truefalse",
          question: "Bugatti Veyron is an electric car.",
          options: ["True", "False"],
          answer: "False",
          explanation: "The Bugatti Veyron is a high-performance gasoline-powered sports car."
        }
      ],
      medium: [
        {
          type: "mcq",
          question: "Which car is known as the 'Godzilla'?",
          options: ["Nissan GTR", "Mustang", "Porsche 911", "Audi R8"],
          answer: "Nissan GTR",
          explanation: "The Nissan GTR is nicknamed 'Godzilla' due to its powerful performance and Japanese origin."
        },
        {
          type: "truefalse",
          question: "The Ferrari logo is a prancing horse.",
          options: ["True", "False"],
          answer: "True",
          explanation: "The Ferrari logo features a prancing horse, symbolizing power and speed."
        },
        {
          type: "multi",
          question: "Which of the following brands are Italian?",
          options: ["Lamborghini", "Bugatti", "Ferrari", "Porsche"],
          answer: ["Lamborghini", "Ferrari"],
          explanation: "Lamborghini and Ferrari are Italian car manufacturers. Bugatti is French, and Porsche is German."
        },
        {
          type: "mcq",
          question: "Which car brand produces the Mustang?",
          options: ["Ford", "Chevrolet", "Dodge", "BMW"],
          answer: "Ford",
          explanation: "The Ford Mustang is a classic American muscle car produced by Ford."
        },
        {
          type: "truefalse",
          question: "The McLaren F1 was the fastest car in the 90s.",
          options: ["True", "False"],
          answer: "True",
          explanation: "The McLaren F1 was the fastest production car of the 1990s."
        }
      ],
      hard: [
        {
          type: "mcq",
          question: "Which car was known as 'The Widowmaker'?",
          options: ["Porsche 911 Turbo", "Corvette C7", "Ferrari Enzo", "Ford GT"],
          answer: "Porsche 911 Turbo",
          explanation: "The Porsche 911 Turbo, especially the older models, earned the nickname 'The Widowmaker' due to its powerful performance and challenging handling characteristics."
        },
        {
          type: "truefalse",
          question: "Koenigsegg Jesko is a Swedish hypercar.",
          options: ["True", "False"],
          answer: "True",
          explanation: "The Koenigsegg Jesko is a Swedish hypercar known for its extreme performance and advanced technology."
        },
        {
          type: "multi",
          question: "Which of the following are hybrid supercars?",
          options: ["Porsche 918", "Ferrari LaFerrari", "Bugatti Chiron", "McLaren P1"],
          answer: ["Porsche 918", "Ferrari LaFerrari", "McLaren P1"],
          explanation: "The Porsche 918, Ferrari LaFerrari, and McLaren P1 are hybrid supercars, while the Bugatti Chiron is a purely gasoline-powered supercar."
        },
        {
          type: "mcq",
          question: "Which car holds the Nürburgring lap record?",
          options: ["Porsche 911 GT2 RS", "Lamborghini Huracan", "Ferrari 488 Pista", "McLaren 720S"],
          answer: "Porsche 911 GT2 RS",
          explanation: "As of the latest updates, the Porsche 911 GT2 RS holds the Nürburgring lap record for production cars."
        },
        {
          type: "truefalse",
          question: "The Tesla Roadster was the first electric car to go to space.",
          options: ["True", "False"],
          answer: "True",
          explanation: "The Tesla Roadster was launched into space by SpaceX, marking it as the first electric car in space."
        }
      ]
    },
    tech: {
      easy: [
        {
          type: "mcq",
          question: "Which company developed the Windows operating system?",
          options: ["Apple", "Google", "Microsoft", "IBM"],
          answer: "Microsoft",
          explanation: "Microsoft developed the Windows operating system, which is widely used on personal computers."
        },
        {
          type: "truefalse",
          question: "HTML stands for Hypertext Markup Language.",
          options: ["True", "False"],
          answer: "True",
          explanation: "HTML stands for Hypertext Markup Language, used for creating and structuring web pages."
        },
        {
          type: "multi",
          question: "Which of the following are programming languages?",
          options: ["JavaScript", "CSS", "HTML", "Python"],
          answer: ["JavaScript", "Python"],
          explanation: "JavaScript and Python are programming languages. CSS and HTML are markup languages used for styling and structuring web pages."
        },
        {
          type: "mcq",
          question: "Which company is known for its iPhone?",
          options: ["Apple", "Samsung", "Sony", "Nokia"],
          answer: "Apple",
          explanation: "Apple is known for developing the iPhone, a popular smartphone."
        },
        {
          type: "truefalse",
          question: "The internet and the World Wide Web are the same thing.",
          options: ["True", "False"],
          answer: "False",
          explanation: "The internet is a global network of interconnected computers, while the World Wide Web is a system of interlinked hypertext documents accessed via the internet."
        }
      ],
      medium: [
        {
          type: "mcq",
          question: "Which language is primarily used for styling web pages?",
          options: ["HTML", "JavaScript", "CSS", "Python"],
          answer: "CSS",
          explanation: "CSS (Cascading Style Sheets) is used to style and layout web pages."
        },
        {
          type: "truefalse",
          question: "The Python programming language was named after a snake.",
          options: ["True", "False"],
          answer: "False",
          explanation: "Python was named after the British comedy series 'Monty Python’s Flying Circus,' not the snake."
        },
        {
          type: "multi",
          question: "Which of the following are web browsers?",
          options: ["Chrome", "Firefox", "Excel", "Word"],
          answer: ["Chrome", "Firefox"],
          explanation: "Chrome and Firefox are web browsers. Excel and Word are applications for spreadsheets and word processing, respectively."
        },
        {
          type: "mcq",
          question: "Which protocol is commonly used for secure web transactions?",
          options: ["HTTP", "HTTPS", "FTP", "SMTP"],
          answer: "HTTPS",
          explanation: "HTTPS (Hypertext Transfer Protocol Secure) is used for secure web transactions, ensuring encrypted communication between the user and the website."
        },
        {
          type: "truefalse",
          question: "Java and JavaScript are the same programming language.",
          options: ["True", "False"],
          answer: "False",
          explanation: "Java and JavaScript are different programming languages. Java is a general-purpose programming language, while JavaScript is primarily used for web development."
        }
      ],
      hard: [
        {
          type: "mcq",
          question: "Which company developed the first computer mouse?",
          options: ["IBM", "Apple", "Xerox", "Microsoft"],
          answer: "Xerox",
          explanation: "Xerox developed the first computer mouse as part of the development of the Xerox Alto computer."
        },
        {
          type: "truefalse",
          question: "Blockchain technology is primarily used for cryptocurrency.",
          options: ["True", "False"],
          answer: "True",
          explanation: "Blockchain technology is the foundational technology behind cryptocurrencies, enabling secure and transparent transactions."
        },
        {
          type: "multi",
          question: "Which of the following are types of machine learning?",
          options: ["Supervised", "Unsupervised", "Reinforcement", "Reactive"],
          answer: ["Supervised", "Unsupervised", "Reinforcement"],
          explanation: "Supervised, Unsupervised, and Reinforcement are types of machine learning. Reactive is not a type of machine learning."
        },
        {
          type: "mcq",
          question: "Which programming paradigm focuses on using functions to perform computations?",
          options: ["Object-Oriented", "Functional", "Procedural", "Declarative"],
          answer: "Functional",
          explanation: "Functional programming focuses on using functions to perform computations, emphasizing immutability and first-class functions."
        },
        {
          type: "truefalse",
          question: "The Linux operating system is proprietary software.",
          options: ["True", "False"],
          answer: "False",
          explanation: "Linux is open-source software, meaning its source code is freely available for modification and distribution."
        }
      ]
    },
    science: {
      easy: [
        {
          type: "mcq",
          question: "What is the chemical symbol for water?",
          options: ["H2O", "O2", "CO2", "H2SO4"],
          answer: "H2O",
          explanation: "The chemical symbol for water is H2O, indicating two hydrogen atoms and one oxygen atom."
        },
        {
          type: "truefalse",
          question: "The Earth is the third planet from the Sun.",
          options: ["True", "False"],
          answer: "True",
          explanation: "The Earth is the third planet from the Sun in our solar system."
        },
        {
          type: "multi",
          question: "Which of the following are planets in our solar system?",
          options: ["Mars", "Venus", "Pluto", "Sun"],
          answer: ["Mars", "Venus", "Pluto"],
          explanation: "Mars, Venus, and Pluto are planets (or dwarf planets) in our solar system. The Sun is a star."
        },
        {
          type: "mcq",
          question: "What is the largest planet in our solar system?",
          options: ["Earth", "Jupiter", "Saturn", "Uranus"],
          answer: "Jupiter",
          explanation: "Jupiter is the largest planet in our solar system."
        },
        {
          type: "truefalse",
          question: "The human body has 206 bones.",
          options: ["True", "False"],
          answer: "True",
          explanation: "The adult human body typically has 206 bones."
        }
      ],
      medium: [
        {
          type: "mcq",
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
          answer: "Mitochondria",
          explanation: "The mitochondria are known as the powerhouse of the cell because they produce energy through cellular respiration."
        },
        {
          type: "truefalse",
          question: "Humans have more than five senses.",
          options: ["True", "False"],
          answer: "True",
          explanation: "In addition to the traditional five senses (sight, hearing, touch, taste, smell), humans have additional senses such as balance and temperature."
        },
        {
          type: "multi",
          question: "Which of the following are types of energy?",
          options: ["Kinetic", "Thermal", "Magnetic", "Sound"],
          answer: ["Kinetic", "Thermal", "Sound"],
          explanation: "Kinetic, thermal, and sound are types of energy. Magnetic is a force rather than a type of energy."
        },
        {
          type: "mcq",
          question: "What is the chemical symbol for gold?",
          options: ["Ag", "Au", "Pb", "Fe"],
          answer: "Au",
          explanation: "The chemical symbol for gold is Au, derived from the Latin word 'aurum.'"
        },
        {
          type: "truefalse",
          question: "Water boils at 100 degrees Celsius at standard atmospheric pressure.",
          options: ["True", "False"],
          answer: "True",
          explanation: "Water boils at 100 degrees Celsius (212 degrees Fahrenheit) at standard atmospheric pressure (1 atmosphere)."
        }
      ],
      hard: [
        {
          type: "mcq",
          question: "What is the most abundant gas in the Earth's atmosphere?",
          options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
          answer: "Nitrogen",
          explanation: "Nitrogen is the most abundant gas in the Earth's atmosphere, making up about 78% of the air."
        },
        {
          type: "truefalse",
          question: "Einstein's theory of relativity includes both special and general relativity.",
          options: ["True", "False"],
          answer: "True",
          explanation: "Einstein's theory of relativity consists of both special relativity (dealing with objects moving at constant speeds) and general relativity (dealing with gravity and acceleration)."
        },
        {
          type: "multi",
          question: "Which of the following are types of electromagnetic radiation?",
          options: ["Gamma Rays", "X-rays", "Microwaves", "Sound Waves"],
          answer: ["Gamma Rays", "X-rays", "Microwaves"],
          explanation: "Gamma rays, X-rays, and microwaves are types of electromagnetic radiation. Sound waves are a different type of wave."
        },
        {
          type: "mcq",
          question: "What is the atomic number of carbon?",
          options: ["6", "12", "8", "14"],
          answer: "6",
          explanation: "The atomic number of carbon is 6, which defines its position in the periodic table."
        },
        {
          type: "truefalse",
          question: "DNA stands for Deoxyribonucleic Acid.",
          options: ["True", "False"],
          answer: "True",
          explanation: "DNA stands for Deoxyribonucleic Acid, which carries genetic information in living organisms."
        }
      ]
    }
  };
  