const i18n = {
  de: {
    letsTalkAbout: 'Lass uns reden über:',
    book: 'Book a Session',
    oneMoreStep: 'Nur noch ein Schritt bis zu deiner Mentoring-Session',
    modalContent: 'CoffeeCodeBreak lebt von einem <strong>wertschätzenden und fairen Miteinander.</strong><br> Unser Ziel ist es, uns gegenseitig durch <strong>hochqualitatives Mentoring</strong> und den Aufbau eines <strong>inspirierenden Netzwerkes</strong> zu unterstützen.Und das gelingt uns nur dann, wenn jede von uns ihren Teil dazu beiträgt.<br> Berücksichtige deshalb bitte die folgenden Punkte:<br><ul class="booking-list" style="list-style-type: disc;"><li>Solltest du deine Mentoring-Session doch nicht wahrnehmen können, <strong>sage diese bitte rechtzeitig ab.</strong><br></li><li>Bitte denk daran, dass unser Netzwerk am nachhaltigsten wächst, wenn auch andere Frauen genügend Gelegenheit zum Autausch haben. Handle daher <strong>nach bestem Wissen und Gewissen</strong>, was die <strong>Anzahl deiner Sessions</strong> betrifft.<br></li><li>Unsere Mentorinnen schenken dir ihre Zeit, weil sie gerne ihre Erfahrungen mit dir teilen, etwas zurückgeben und von dir lernen möchten. Nutze also die Zeit für einen guten Austausch. CoffeeCodeBreak ist ausdrücklich <strong>nicht zur Verbreitung eigener kommerzieller oder ideologischer Interessen</strong> gedacht.</li></ul>Mehr dazu findest du in den<a href="../html/nutzungsbedingungen.html" class="underline-link">Nutzungsbedingungen</a>. Du erklärst dich mit diesen einverstanden, wenn du eine Mentoring-Session buchst.',
    letsGo: 'Alles klar. Los geht\'s!',
  },
  en: {
    letsTalkAbout: 'Let\'s talk about:',
    book: 'Book a Session',
    oneMoreStep: 'Only one step away from your mentoring session',
    modalContent: 'CoffeeCodeBreak lives from a <strong>respectful and fair way of networking.</strong><br> Our goal is to support each other through <strong>high-quality mentoring</strong> and by building up an <strong>inspiriring network</strong>.And we can only succeed if each of us makes her own contribution.<br> Therefore please consider the following points:<br><ul class="booking-list" style="list-style-type: disc;">\<li>If you are not able to attend your mentoring session after all, <strong>please cancel it in time.</strong><br</li><li>Please remember that our network grows most sustainably when other women also have enough opportunities for mentoring. Therefore <strong>act to the best of your knowledge and belief regarding the number of your sessions.</strong><br</li><li>Our mentors spend their time with you because they would like to share their experience with you, give something back and learn from you. So use the time for a good conversation. CoffeeCodeBreak is explicitly <strong>not meant for spreading your own commercial or ideological interests.</strong></li></ul>More information can be found in our<a href="./terms-en.html" class="underline-link">Terms and Conditions</a>. You agree to them when you book a mentoring session.',
    letsGo: 'Alright. Let\'s go!',
  },
}
function getTranslation(key, lang = 'de') {
  return i18n[lang][key];
}

const template = document.createElement('template');
template.innerHTML = `
<style>
.body-mentors{
  overflow: inherit !important;
  -webkit-overflow-scrolling: touch;
}
.our-mentors-heading{
  text-align: center;
  padding-bottom: 1rem;
}
.our-mentors-container{
  padding: 3.5rem;
  padding-bottom: 2.5rem;
}
.our-mentors-grid{
  display: grid;
  grid-gap: 3.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.pv3{
  margin-top: 2.5rem;
  margin-left: 3.5rem;
  margin-right: 3.5rem;
}

.filter-button{
  font-family: var(--Montserrat);
  margin-right: 0.4rem;
  margin-top: 0.6rem;
  padding: 0rem 1.1rem;
  height: 40px;
  width: auto;
  border: none;
  border-radius: 20px;
  outline: none;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.7px;
  background: #f2f4f7;
}

.filter-button:hover{
  background: #5d6470;
  color: white;
  cursor: pointer;
}

.button--is-active{
  background: #5d6470;
  color: white;
}

.button--is-active:focus{
  border: none;
  outline: none;
}

.mentor-container{
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  max-width: 460px;
  padding: 3% 1.5rem;
}
.mentor-pic{
  border-radius: 50%;
  width: 90%;
  margin: auto;
}
.mentor-page-img{
  border-radius: 50%;
  width: 100%;
}
.mentor-page-img:hover{
  opacity: 0.77;
  transition: all 300ms ease-in-out;
}
.mentor-name {
  padding-top: 0.5rem;
  padding-bottom: 0.8rem;
  font-size: 1.3rem;
  font-weight: bold;
}
.mentor-home{
  font-size: 0.75rem;
  font-style: italic;
  font-weight: normal;
}
.mentor-prof{
  font-size: 0.9rem;
  font-weight: bold;
  padding-bottom: 0.8rem;
}
.mentor-info {
  font-size: 0.75rem;
  padding-left: .5rem;
  padding-right: .5rem;
}
.mentor-education {
  font-size: 0.75rem;
  font-style: italic;
  padding: 1.5rem 0;
}
.mentor-experience {
  font-size: 0.75rem;
  font-style: italic;
}
.mentor-lang{
  font-size: 0.75rem;
  padding-bottom: 1rem;
  font-style: italic;
}

.fa-linkedin-in{
  font-family: 'Font Awesome 5 Brands';
  font-weight: 400;
  font-size: 0.85rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-decoration: none;
}
.mentor-social{
  color: var(--text-gold);
  font-size: 0.9rem !important;
}
.mentor-social:hover{
  color: #c2910a;
}
.mentor-social:before{
  content: "\\f0e1";
}


/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 5vh;/* Location of the box */
  padding-bottom: 5vh;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  transition: 0.6s ease-in;
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  margin-bottom: 5rem;
  padding: 1rem 2.5rem 3rem 2.5rem;
  width: 75%;
  max-width: 700px;
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.25);
}

.modal-header{
  font-size: 1rem;
  font-weight: bold;
  padding-top: 1.8rem;
  padding-bottom: 1.5rem;
}

.modal-text{
  font-size: 0.8rem;
  padding-top: 0.8rem;
}

.booking-list{
  text-align: left;
  padding-left: 6rem;
  padding-right: 6rem;
}

.booking-list > li{
  padding-bottom: 0.5rem;
}

.underline-link{
  text-decoration: underline;
}

.underline-link:hover{
  color: var(--text-gold);
}

/* The Close Button */
.close {
  color: var(--text-gold);
  float: right;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: -0.7rem;
  margin-right: -0.5rem;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.book-session-btn{
  font-family: var(--Montserrat);
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  outline: none;
  border-radius: 20px;
  background: #f2f4f7;
  padding: 0.72rem 1.5rem;
  margin-bottom: 1.8rem;
  letter-spacing: 0.5px;
}

.book-session-btn:hover{
  color: var(--text-gold);
}

.mentor-card-heart{
  font-family: var(--Caveat);
  font-size: 1.5rem;
  padding-bottom: 1rem;
}

.become-mentee-button-top{
  text-align: center;
  margin-top: 2.8rem;
  margin-bottom: 1.6rem;
}

.become-mentee-button-bottom{
  text-align: center;
}

.style-mentoring-button{
  font-family: var(--Montserrat);
  border: none;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 20px;
  background-color: #f2f4f7;
  padding: 1.1rem 2.8rem;
  width: 255px;
}

.style-mentoring-button:hover{
  color: var(--text-gold);
  cursor: pointer;
}
.style-mentoring-button:focus{
  outline: none;
}
.open-calendly{
  font-family: var(--Montserrat);
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 20px;
  background: #f2f4f7;
  padding: 0.72rem 1.5rem;
  margin-bottom: 1.8rem;
  letter-spacing: 0.5px;
}
.open-calendly:hover{
  color: var(--text-gold);
  cursor: pointer;
}

.open-calendly-for-ios{
  font-family: var(--Montserrat);
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 20px;
  background: #686d73;
  padding: 0.72rem 1.5rem;
  margin-bottom: 1.8rem;
  letter-spacing: 0.5px;
}

.ios-hint{
  font-family: var(--Montserrat);
  font-size: 0.8rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
}
.additional {
  font-size: 0.75rem;
  padding-bottom: 0.5rem;
}
.additional a {
  color: var(--text-gold);
  text-decoration: underline;
}
</style>
<div class="mentor-container" data-order="1">
  <div class="mentor-pic"><img src="" class="mentor-page-img" alt="picture of mentor"></div>
  <div class="mentor-name"></div>
  <div class="mentor-info">
    <span class="mentor-prof"></span><br>
    <span class="mentor-home"></span>
  </div>
  <div class="mentor-education"></div>
  <div class="mentor-experience"></div>
  <div class="mentor-languages"></div>
  <div class="mentor-info">
      <strong class="lets-talk"></strong>
      <div class="mentor-topics"></div>
  </div>
  <br>
  <div class="additional">
    <a class="link"
       href=""
       target="_blank">
    </a>
  </div>
  <div class="mentor-info">
      <a href="" target="_blank" class="fab fa-linkedin-in mentor-social"></a>
  </div>
  <br>

  <button class="book-session-btn"></button>
  <div class="mentoring-modal modal">
    <div class="modal-content">
      <div class="close">&times;</div>
      <div class="modal-header"></div>
      <div class="modal-text"></div><br>

      <!-- Calendly link widget begin -->
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      <a class="open-calendly"></a><br><br>
      <!-- Calendly link widget end -->
      <div class = "ios-hint">iOS:</div>
      <a target="_blank" class="open-calendly-for-ios"></a><br>

    </div>
  </div>
</div>`;

class MentorCard extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const modal = this.shadowRoot.querySelector(".mentoring-modal");
    const showModal = () => modal.style.display = "block";
    const hideModal = () => modal.style.display = "none";

    const bookSession = this.shadowRoot.querySelector(".book-session-btn");
    const span = this.shadowRoot.querySelector(".close");
    const calendlyBtn = this.shadowRoot.querySelector(".open-calendly");
    const calendlyBtnIos = this.shadowRoot.querySelector(".open-calendly-for-ios");

    bookSession.onclick = showModal;
    span.onclick = hideModal;
    calendlyBtnIos.onclick = hideModal;

    this.setAttributes();
    this.initCalendly(modal);
  }

  setAttributes() {
    this.shadowRoot.querySelector('.mentor-container')
      .setAttribute('data-category', this.getAttribute('category'));
    this.shadowRoot.querySelector('.mentor-page-img').src = `../assets/${this.getAttribute('img')}`;
    this.shadowRoot.querySelector('.mentor-social').href = this.getAttribute('linkedin');
    const additionalLink = this.shadowRoot.querySelector('.link');
    const link = this.getAttribute('additionalLink');
    if (link !== "undefined") {
      additionalLink.href = this.getAttribute('additionalLink');
      additionalLink.innerHTML = this.getAttribute('additionalLinkName');
    } else {
      additionalLink.remove();
    }
    [
      'name',
      'prof',
      'home',
      'education',
      'experience',
      'languages',
      'topics',
    ].forEach(attr => {
      this.shadowRoot.querySelector(`.mentor-${attr}`).innerText = this.getAttribute(attr);
    });

    // i18n
    this.applyI18n(this.getAttribute('lang'));

  }

  applyI18n(lang = 'de') {
    this.shadowRoot.querySelector('.modal-header').innerHTML = getTranslation('oneMoreStep', lang);
    this.shadowRoot.querySelector('.modal-text').innerHTML = getTranslation('modalContent', lang);
    this.shadowRoot.querySelector('.lets-talk').innerHTML = getTranslation('letsTalkAbout', lang);
    this.shadowRoot.querySelector('.book-session-btn').innerHTML = getTranslation('book', lang);
    this.shadowRoot.querySelector('.open-calendly').innerHTML = getTranslation('letsGo', lang);
    this.shadowRoot.querySelector('.open-calendly-for-ios').innerHTML = getTranslation('letsGo', lang);
  }

  initCalendly(modal) {
    const calendly = this.getAttribute('calendly');
    this.shadowRoot.querySelector('.open-calendly-for-ios').href = calendly;
    this.shadowRoot.querySelector('.open-calendly').onclick = () => {
      Calendly.initPopupWidget({url: calendly});
      modal.style.display = "none";
      return false;
    }
  }
}
window.customElements.define('mentor-card', MentorCard);
