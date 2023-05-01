const mentors = [
  {
    name: "Hanna",
    img: "hanna-mentor.jpeg",
    prof: "Product Owner",
    category: "product agile",
    home: "Deutschland",
    education: "Master of Education, Humboldt Universität Berlin",
    experience: "Berufserfahrung: 2-5 Jahre",
    languages: "Deutsch, Englisch, Französisch",
    topics: "Scrum, Conversational (AI), Process Automation, Start Ups, Career Entry into tech",
    linkedin: "https://www.linkedin.com/in/hanna-l-649487186/",
    calendly: "https://calendly.com/hanna-j/45min"
  },
  {
    name: "Neele",
    img: "neele-mentor.JPG",
    prof: "Associate Consultant Data Analytics and AI (seit April 23), Cassini Consulting AG",
    category: "data",
    home: "Köln, Deutschland",
    education: "2. Staatsexamen Lebensmittelchemie, Universität Bonn",
    experience: "Berufserfahrung: 5-10 Jahre insgesamt",
    languages: "Deutsch, Englisch",
    topics: "Quereinstieg in die IT, Von der Naturwissenschaft in die Beratung, Data Science/ Data Analytics, Perfektionismus",
    linkedin: "https://www.linkedin.com/in/neele-glameyer-15a305190/",
    calendly: "https://calendly.com/neele-g"
  },
  {
    name: "Katja",
    category: "software agile",
    img: "katjam-mentor.jpg",
    prof: "Test Consultant & Team Lead Testing, QualityMinds GmbH",
    home: "München, Deutschland",
    education: "PhD Molecular Biology, Bielefeld University",
    experience: "Berufserfahrung: 2-5 Jahre IT, 5-10 Jahre insgesamt",
    languages: "Deutsch, Englisch",
    topics: "Agile testing, career change into IT, agile leadership, getting started with test automation, yoga",
    linkedin: "https://www.linkedin.com/in/katja-meyer-2bab6a1b0/",
    calendly: "https://calendly.com/meyerkatja"
  },
  {
    name: "Anna",
    img: "annam-mentor.jpg",
    prof: "Senior IT-Consultant, codecentric AG",
    category: "software consulting",
    home: "Mettmann, Deutschland",
    education: "Diplom Computerlinguistik, Universität des Saarlandes",
    experience: "Berufserfahrung: > 15 Jahre",
    languages: "Deutsch, Englisch",
    topics: "Software development (Java & Javascript), Accessibility, Working remotely, Holding talks (as an introvert person), Writing (technical articles), Being a nerdy mother",
    linkedin: "https://www.linkedin.com/in/anna-m-045739143/",
    calendly: "https://calendly.com/anna_maier/coffee-code-break-mentoring-session"
  },
  {
    category: "data",
    name: "Tereza",
    img: "tereza-mentor.png",
    prof: "Data Leadership Coach | Head of Data Science, neuefische",
    home: "Hamburg, Deutschland",
    education: "PhD in Information Retrieval (Computer Science), L3S",
    experience: "Berufserfahrung: > 15 Jahre",
    languages: "Englisch, Rumänisch, Deutsch",
    topics: "data leadership, inclusive leadership, stepping into leadership",
    linkedin: "https://www.linkedin.com/in/tereza-iofciu/",
    additionalLink: "https://www.terezaiofciu.com",
    additionalLinkName: "Terezas Coaching Seite",
    calendly: "https://calendly.com/terezaif/coffee-code-break"
  }
];

function renderMentors(category) {
  const showMentors = category && category !== "all"
    ? mentors.filter(m => m.category.includes(category))
    : mentors;
  // shuffle elements so that everyone gets shown on top from time to time
  const shuffledMentors = showMentors.sort((a, b) => 0.5 - Math.random())
  let mentorHtml = '';
  shuffledMentors.forEach(mentor => {
    mentorHtml += `
    <mentor-card
      name="${mentor.name}"
      img="${mentor.img}"
      prof="${mentor.prof}"
      category="${mentor.category}"
      home="${mentor.home}"
      education="${mentor.education}"
      experience="${mentor.experience}"
      languages="${mentor.lang}"
      topics="${mentor.topics}"
      linkedin="${mentor.linkedin}"
      additionalLink="${mentor.additionalLink}"
      additionalLinkName="${mentor.additionalLinkName}"
      calendly="${mentor.calendly}"
      lang="de"
    ></mentor-card>
  `;
  });
  document.querySelector('.our-mentors-grid').innerHTML = mentorHtml;
};
/** @Caro diesen Teil hier wieder einkommentieren

renderMentors();

const filters = document.querySelectorAll('.filter-button');
filters.forEach(filter => {
  const category = filter.getAttribute('data-category');
  filter.onclick = () => {
    renderMentors(category);
  }
})

*/
