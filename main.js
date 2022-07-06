
const createBtn = document.querySelector('.create');
const section = document.querySelector('.section');
const tomogochiList = [];

/**
 * Method for determining a random number
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getRandomInt (min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function main() {
  createBtn.addEventListener('click', function(){
    // creating instance of Tomogochi
    const index = getRandomInt(0, config.length - 1)
    tomogochiList.push(new Tomogochi(section, config[index]));
  });
}
main()
