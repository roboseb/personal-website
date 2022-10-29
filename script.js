let animated = false;

// Add styled class to body to style all elements.
const animateContent = () => {

    const content = document.getElementById('content');
    const body = document.querySelector('body');

    if (animated) {
        // content.classList.remove('styled');
        // animated = false;

        // body.classList.remove('no-scroll');
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    } else {
        content.classList.add('styled');
        animated = true;

        body.classList.add('no-scroll');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        initCarousels();
    }
}



document.defaultView.addEventListener('click', animateContent);

let scrollIndex = 0;

// Initialize values and listeners.
const init = (() => {
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

            content.style.top = `${scrollIndex * section.offsetHeight * -1}px`
        } else {
            scrollIndex--;
            if (scrollIndex < 0) scrollIndex = 0;

            content.style.top = `${scrollIndex * section.offsetHeight * -1}px`
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

    let constrainX = 40;
    let constrainY = 150;

    function transforms(x, y, el) {
        let box = el.getBoundingClientRect();
        let calcX = -(y - box.y - (box.height / 2)) / constrainX;
        let calcY = (x - box.x - (box.width / 2)) / constrainY;

        return "perspective(100px) "
            + "   rotateX(" + calcX + "deg) "
            + "   rotateY(" + calcY + "deg) ";
    };

    function transformElement(el, xyEl) {
        el.style.transform = transforms.apply(null, xyEl);
    }

    const containers = Array.from(document.querySelectorAll('.transform-wrapper'));
    containers.forEach(container => {
        let box = container.querySelector('.box');

        container.onmousemove = function (e) {
            if (!animated) return;

            let xy = [e.clientX, e.clientY];
            let position = xy.concat([box]);

            window.requestAnimationFrame(function () {
                transformElement(box, position);
            });


        };

        container.onmouseleave = function (e) {
            box.style.transform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
            console.log('mouse left');
        }
    });
})();

// Setup animations for tech carousels.
const initCarousels = () => {
    // Add animation delays to all carousel items.
    const carousels = Array.from(document.querySelectorAll('.tech-carousel'));
    carousels.forEach(carousel => {

        // Add animation delay and count up width of tech items
        const items = Array.from(carousel.querySelectorAll('.tech-item'));
        items.forEach((item, index) => {

            if (index === 0) {
                item.style.width = `${100 / items.length}%`
            } else {
                item.style.width = '100%';
            }

            item.style.transitionDelay = `${200 * (index - 1)}ms`;

            item.classList.remove('flipped');
            void item.offsetHeight;
            item.classList.add('flipped');
        });
    });
}

const projects = {
    SaikoKismet: {
        title: 'Saiko Kismet',
        desc: 'A multiplayer dice game built into a full social media site. Capable of both online and local play, all without an account!',
        tech: ['node-js.svg', 'mongodb.svg', 'socket.svg', 'pug.png'],
    },
    DIM: {
        title: 'Discord Instant Messenger',
        desc: 'A corrupted version of discord, with working accounts and messaging.',
        tech: ['node-js.svg', 'mongodb.svg', 'passport.svg', 'pug.png',],
    },
    Crudworld: {
        title: 'Crudworld',
        desc: 'A simulated world populated by cruddies, and created by users.',
        tech: ['node-js.svg', 'mongodb.svg', 'mongoose.png', 'pug.png'],
    }
}

// Add event listeners to project cards for loading that particular project.
const projectCards = Array.from(document.querySelectorAll('.project'));
projectCards.forEach(project => {
    project.addEventListener('click', () => {
        const box = document.querySelector('.selected-project-box');
        loadProject(projects[project.dataset.name], box, project.dataset.name);
    })
});

let aniTimer;

// Load a projet into the selected project view using the passed name.
const loadProject = (project, box, code) => {
    const title = box.querySelector('.selected-project-title');
    title.innerText = project.title;

    const desc = box.querySelector('.selected-project-description');
    desc.innerText = project.desc;

    const img = box.querySelector('.selected-project-img');
    img.style.backgroundImage = `url("site_images/${code}.png")`;

    img.classList.remove('visible');
    void img.offsetWidth;
    img.classList.add('visible');

    const carousel = box.querySelector('.tech-carousel');
    const techItems = project.tech;

    // Add each tech item to tech carousel. 
    let index = 0;
    let lastItem;

    // Reverse animate all tech items.
    const oldItems = Array.from(box.querySelectorAll('.tech-item'));
    oldItems.forEach((item, index) => {
        console.log(item)

        item.style.transitionDelay = `${200 * (oldItems.length - index)}ms`;

        void item.offsetHeight;
        item.classList.remove('flipped');
    });


    // Wait for refolding animation before setting up new tech items.
    clearTimeout(aniTimer);
    aniTimer = setTimeout(() => {
        replaceTechItems();
    }, 1000);

    // Regenerate tech items with new info.
    const replaceTechItems = () => {
        carousel.innerText = '';

        techItems.forEach(techItem => {
            const item = document.createElement('div');

            // Add specified classes for animation purposes
            if (index === 0) {
                item.classList.add('first');
            } else {
                item.classList.add(`tech${index}`)
            }

            item.classList.add('tech-item');

            const icon = document.createElement('div');
            icon.classList.add('icon');
            icon.style.backgroundImage = `url('icons/${techItem}')`;
            item.appendChild(icon);

            if (lastItem) {
                lastItem.appendChild(item);
            } else {
                carousel.appendChild(item);
            }

            lastItem = item;
            index++;
        });

        initCarousels();
    }
}