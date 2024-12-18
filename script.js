let count = 0;
       const image = document.querySelector('img');
        const counterDisplay = document.getElementById('count');
        const heart = document.querySelector('.heart');
       
        image.addEventListener('click', () => {
             count++;
            counterDisplay.textContent = count;

            
            //  dynamically applies pre-defined styles (.show) to the heart element, triggering its animation and visibility change

          heart.classList.add('show');
          
          setTimeout(() => {
          heart.classList.remove('show');
         }, 1000);




        });