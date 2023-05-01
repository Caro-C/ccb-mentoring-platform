const mentors = [
  {
    name: "Hanna",
    img: "hanna-mentor.jpeg",
    prof: "Product Owner",
    category: "product agile",
    home: "Deutschland",
    education: "Master of Education, Humboldt Universität Berlin",
    experience: "Experience: 2-5 years",
    languages: "German, English, French",
    topics: "Scrum, Conversational (AI), Process Automation, Start Ups, Career Entry into tech",
    linkedin: "https://www.linkedin.com/in/hanna-l-649487186/",
    calendly: "https://calendly.com/hanna-j/45min"
  },
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
      lang="en"
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
