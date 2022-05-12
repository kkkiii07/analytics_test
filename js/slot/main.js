
'use strict';

class Person {
  constructor() {
    const section = document.createElement('section');
    section.classList.add('person');

    this.img2 = document.createElement('img');

    this.person = document.createElement('div');
    this.person.classList.add('person');
    this.person = document.createElement('img2');
    this.img2.src = 'images/slot//woman1.png';

    section.appendChild(this.img2);

    const header = document.querySelector('header');
    header.appendChild(section);
  }

  changeImage() {
    this.img2.src = 'images/slot//woman2.png';
  }

}

const person = new Person();


class Panel {
  constructor() {
    const section = document.createElement('section');
    section.classList.add('panel');

    this.img = document.createElement('img');
    this.img.src = this.getRandomImage();

    this.img2 = document.createElement('img');
    this.img2.src = this.changeImage();

    this.timeoutId = undefined;

    this.person = document.createElement('div');
    this.person.classList.add('person');
    this.person = document.createElement('img2');
    this.img2.src = 'images/slot//woman1.png';

    this.stop = document.createElement('div');
    this.stop.textContent = 'すとっぷ';
    this.stop.classList.add('stop', 'inactive');


    this.stop.addEventListener('click', () => {

      person.changeImage();
      // person.img2.src = 'images/slot//woman1.png';

      if (this.stop.classList.contains('inactive')) {
        return;
      }
      this.stop.classList.add('inactive');
      clearTimeout(this.timeoutId);

      panelsLeft -= 1;

      if (panelsLeft === 0) {
        spin.classList.remove('inactive');
        panelsLeft = 1;
      }
    });

    const spin = document.getElementById('spin');

    spin.addEventListener('click', () => {
      person.img2.src = 'images/slot//woman1.png';
    });

    section.appendChild(this.img);
    section.appendChild(this.stop);

    const main = document.querySelector('main');
    main.appendChild(section);
  }

  getRandomImage() {

    const images = [
      'images/slot//img1.png',
      'images/slot//img2.png',
      'images/slot//img3.png',
      'images/slot//img4.png',
      'images/slot//img5.png',
      'images/slot//img6.png',
      'images/slot//img7.png',
      'images/slot//img8.png',
      'images/slot//img9.png',
      'images/slot//img10.png',
      'images/slot//img11.png',
      'images/slot//img12.png',
      'images/slot//img13.png',
      'images/slot//img14.png',
      'images/slot//img15.png',
      'images/slot//img16.png',
      'images/slot//img17.png',
      'images/slot//img18.png',
      'images/slot//img19.png',
      'images/slot//img20.png',
      'images/slot//img21.png',
      'images/slot//img22.png',
    ];
    return images[Math.floor(Math.random() * images.length)];
  }

  changeImage() {
    const images = [
      'images/slot//woman1.png',
      'images/slot//woman2.png',
    ];
  }

  spin() {
    this.img.src = this.getRandomImage();

    this.timeoutId = setTimeout(() => {
      this.spin();
    }, 20);
  }

  isUnmatched(p1, p2) {
    return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
  }

  unmatch() {
    this.img.classList.add('unmatched');
  }

  activate() {
    this.img.classList.remove('unmatched');
    this.stop.classList.remove('inactive');
  }
}

const panels = [
  new Panel(),
];


let panelsLeft = 1;

const spin = document.getElementById('spin');

spin.addEventListener('click', () => {
  if (spin.classList.contains('inactive')) {
    return;
  }
  spin.classList.add('inactive');

  panels.forEach(panel => {
    panel.activate();
    panel.spin();
  });
});
