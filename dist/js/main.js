class UI {
  constructor() {
    this.body = document.querySelector('body');
    this.burgerBtn = document.querySelector('.burger-btn');
    this.burgerBtnLine = document.querySelectorAll('.burger-line');
    this.mobileMenuOverlay = document.querySelector('#mobile-overlay');
    this.contactForm = document.querySelector('#contact-form');
  }

  burgerMenu() {
    this.burgerBtn.addEventListener('click', () => {
      // ngecek ada class show overlay apa ngga, kalo ada 
      // remove2in dan balikin ke awal lagi style nya
      if(this.burgerBtn.classList.contains('show-overlay')) {
        this.burgerBtn.classList.remove('show-overlay');
        this.burgerBtnLine.forEach(line => {
          line.style.transform = 'unset';
          line.style.transformOrigin = 'unset';
          line.style.width = '22px';
        });
        this.mobileMenuOverlay.style.left = '-100%';
        this.body.style.overflow = 'auto';
      } else {
        this.burgerBtn.classList.add('show-overlay');

        // loop per div yg berfungsi sebagai garis di burger menu
        this.burgerBtnLine.forEach((line, index) => {
          // ubah style per garis sesuai index dan di atur waktu mulainya pake set timeout
          if(index == 0) {
            setTimeout(() => {
              line.style.width = '0';
            }, 0)

            setTimeout(() => {
              line.style.transformOrigin = '1px 3px';
              line.style.transform = 'rotate(45deg)';
              line.style.width = '22px';
            }, 500)
          } else if(index == 1) {
            setTimeout(() => {
              line.style.width = '0';
            }, 200)
          } else {
            setTimeout(() => {
              line.style.width = '0';
            }, 400)

            setTimeout(() => {
              line.style.transformOrigin = '4px 1px';
              line.style.transform = 'rotate(-45deg)';
              line.style.width = '22px';
            }, 700)
          }
        });

        // munculin mobile menu overlay nya
        setTimeout(() => {
          this.mobileMenuOverlay.style.left = '0';
          this.body.style.overflow = 'hidden';
        }, 600);
      }
    });
  }

  formValidation() {
    const contactInputField = document.querySelectorAll('.contact-input-field');
    const nameWarning = document.querySelector('#name-warning');
    const emailWarning = document.querySelector('#email-warning');
    const msgWarning = document.querySelector('#msg-warning');

    this.contactForm.addEventListener('submit', (e) => {
      nameWarning.style.visibility = 'hidden';
      emailWarning.style.visibility = 'hidden';
      msgWarning.style.visibility = 'hidden';

      // ngecek per input field (termasuk textarea)
      contactInputField.forEach((field, index) => {
        field.style.border = '1px solid';

        // diseleksi sesuai index
        switch(index) {
          case 0:
            // kalo udah valid, formnya submit

            if(!field.validity.valid) {
              // kalo belom masuk kesini dan ngatur style tampilan buat warning
              let warningInfo = field.validationMessage;
              nameWarning.textContent = warningInfo;
              nameWarning.style.visibility = 'visible';
              field.style.borderColor = '#d9534f';

              // biar form ga submit dan web ga ngeload
              e.preventDefault();
            }

            break;
          case 1:
            if(!field.validity.valid) {
              let warningInfo = field.validationMessage;
              emailWarning.textContent = warningInfo;
              emailWarning.style.visibility = 'visible';
              field.style.borderColor = '#d9534f';
              
              e.preventDefault();
            }
            
            break;
          case 2:
            if(!field.validity.valid) {
              let warningInfo = field.validationMessage;
              msgWarning.textContent = warningInfo;
              msgWarning.style.visibility = 'visible';
              field.style.borderColor = '#d9534f';
              
              e.preventDefault();
            }

            break;
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();

  ui.burgerMenu();
  ui.formValidation();
});

// SLIDER LOGIC
var slideIndex = 1;
showSlides(slideIndex);

// ngatur next dan previous
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// ngatur gambar
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}