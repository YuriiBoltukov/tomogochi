
class Tomogochi {
  /**
   * Instance of HTMLProgressElement
   */
  progressBar;
  
  tomogochi;

  slot;

  config;

  constructor(slot, config){
    this.config = config;
    this.slot = slot;
    this.init();
  }
  /**
   * method for initialization
   */
  init() {
    this.createTomogochi();
    this.progressBar = this.tomogochi.querySelector('progress'); 
    this.decreaseHealth();
    this.increaseHealth();
  }
  /**
   * Method for increase  health
   */
  increaseHealth() {
    const btnIncrease = this.tomogochi.querySelector('.increase');

    btnIncrease.addEventListener('click', ()=> {
      if (this.progressBar.value < this.config.health) this.progressBar.value += this.config.eat
    })
  }
  /**
   * Method for decrease health
   */
  decreaseHealth() {
    const intervalId = setInterval(()=>{
      if (this.progressBar.value <= 0) {
        this.kill();
        clearInterval(intervalId);
      }
      this.progressBar.value -= this.config.hungry;
    }, this.config.timer);
  }
  /**
   * Method for change picture 
   */
  kill() {
    const progress = this.tomogochi.querySelector('progress');
    const button = this.tomogochi.querySelector('.increase');

    this.tomogochi.style.backgroundImage = 'url(./assets/images/rip.png)';
    progress.style.display = 'none';
    button.style.display = 'none';
  }

  /**
   * Method for creating tomogochi
   */
  createTomogochi() {
    this.tomogochi = document.createElement('div');
    this.tomogochi.classList.add('gochi');
    this.tomogochi.style.backgroundImage = this.config.src;

    if ('content' in document.createElement('template')) { 
      const template = document.querySelector('#tomagochi');
      const clone = template.content.cloneNode(true);

      this.tomogochi.appendChild(clone);
    } else {
      const progress = document.createElement('progress');
      progress.setAttribute('value', this.config.health);
      progress.setAttribute('max', this.config.health);

      const btnIncrease = document.createElement('button');
      btnIncrease.setAttribute('class','increase');
      btnIncrease.textContent ='Feed';

      this.tomogochi.appendChild(progress);
      this.tomogochi.appendChild(btnIncrease);
    }

    this.slot.appendChild(this.tomogochi);
  }
}