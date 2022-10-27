let animated = false;

// Add styled class to body to style all elements.
const animateContent = () => {

    const content = document.getElementById('content');
    const body = document.querySelector('body');

    if (animated) {
        content.classList.remove('styled');
        animated = false;
        
        body.classList.remove('no-scroll');
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    } else {
        content.classList.add('styled');
        animated = true;
        
        body.classList.add('no-scroll');
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
}

document.defaultView.addEventListener('click', animateContent);

let scrollIndex = 0;

// Initialize values and listeners.
const init = (()  => {
    // Add inline style to sections for smooth transitioning.
    const sections = Array.from(document.querySelectorAll('.section'));
    sections.forEach(section => {
        section.style.height = `${section.offsetHeight}px`;
    });

    const itemBoxes = Array.from(document.querySelectorAll('.item-box'));
    itemBoxes.forEach(item => {
        item.style.width = `${item.offsetWidth}px`;
    })

    // Add scroll listener for full page scrolling.
    const content = document.getElementById('content');
    const section = document.querySelector('.section');
    content.addEventListener('wheel', (e) => {
        
        // If not animated, skip snap scrolling.
        if (!animated) return;

        e.preventDefault();

        if (e.deltaY > 0) {
            scrollIndex++;
            if (scrollIndex > sections.length - 1) scrollIndex = sections.length - 1;

            content.style.top =`${scrollIndex * section.offsetHeight * -1}px` 
        } else {
            scrollIndex--;
            if (scrollIndex < 0) scrollIndex = 0;

            content.style.top =`${scrollIndex * section.offsetHeight * -1}px` 
        }
    });

    // Split up certain elements into individual spans.
    const flickerables = Array.from(document.querySelectorAll('.flicker'));
    flickerables.forEach(item => {
        const textArray = item.innerText.split('');
        console.log(textArray);
        item.innerText = ' ';
        textArray.forEach((letter, index) => {
            
            let space = false;
            if (letter === ' ') space = true;

            const span = document.createElement('pre');
            span.innerText = textArray[index];
            span.classList.add('flickered');

            span.addEventListener('mouseenter', () => flickerSpan(span));


            span.style.animationDelay = `${(index * 100) + 500}ms`;

            item.appendChild(span);
        });
    })

    // Animate a flickered span.
    const flickerSpan = (target) => {

        // Prevent adding class and timeouts in HTML only mode.
        if (!document.querySelector('.styled')) {
            return;
        }

        target.style.animationDelay = '0s';

        target.classList.remove('flickered');
        void target.offsetHeight;
        target.classList.add('flickered');

        target.style.pointerEvents = 'none';
        setTimeout(() => {
            target.style.pointerEvents = 'all';
        }, 1500);
    }
})();