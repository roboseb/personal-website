let animated = false;

const projects = {
    CDFCG: {
        code: 'CDFCG',
        repo: 'roboseb.github.io',
        live: '',
        title: 'Cool Deviantart',
        desc: "This site is included for the sake of completeness. It's essentially just a collection of images masquerading as a copy of deviantart.",
        tech: ['html.png', 'css.png', '', ''],
    },
    OdinRecipes: {
        code: 'OdinRecipes',
        repo: 'odin-recipes',
        live: 'odin-recipes',
        title: 'Odin Recipes',
        desc: "The beginning of my journey with the Odin Project. A simple site that navigates between a home page and three recipe pages.",
        tech: ['html.png', 'css.png', '', ''],
    },
    OdinLandingPage: {
        code: 'OdinLandingPage',
        repo: 'odin-landing-page',
        live: 'odin-landing-page',
        title: 'Odin Landing Page',
        desc: "A site which aims to copy the reference images on the site itself. Another early Odin Project project.",
        tech: ['html.png', 'css.png', '', ''],
    },

    EtchASketch: {
        code: 'EtchASketch',
        repo: 'etch-a-sketch',
        live: 'etch-a-sketch',
        title: 'Etch-a-Sketch',
        desc: "This is essentially a grid-based drawing tool. Your two options are to reset the grid, or to generate a new grid with your choice of dimensions.",
        tech: ['html.png', 'css.png', 'js.png', ''],
    },

    RockPaperScissors: { 
        code: 'RockPaperScissors',
        repo: 'rock-paper-scissors',
        live: 'rock-paper-scissors',
        title: 'Rock Paper Scissors',
        desc: "Rock paper scissors. You play as an elf who is afraid of losing. Watch her react as you either beat or lose to the computer opponent.",
        tech: ['html.png', 'css.png', 'js.png', ''],
    },

    Calculator: { 
        code: 'Calculator',
        repo: 'calculator',
        live: 'calculator',
        title: 'Calculator',
        desc: "A calculator. Similar to rock paper scissors, a little pumpkin guy will give reactions to your inputs, including some secret ones.",
        tech: ['html.png', 'css.png', 'js.png', ''],
    },

    SignUpForm: {
        code: 'SignUpForm',
        repo: 'sign-up-form',
        live: 'sign-up-form',
        title: 'Sign-up Form',
        desc: "A straightforward sign-up form that signs you up for nothing. Click the little head and see what happens.",
        tech: ['html.png', 'css.png', 'js.png', ''],
    },

    AdminDashboard: {
        code: 'AdminDashboard',
        repo: 'admin-dashboard',
        live: 'admin-dashboard',
        title: 'Waifunet',
        desc: "A static mock up for a fake social media site focused on anime/manga waifus. Click on kurippi, your virtual assistant, for her tip of the day.",
        tech: ['html.png', 'css.png', 'js.png', ''],
    },

    TicTacToe: {
        code: 'TicTacToe',
        repo: 'tic-tac-toe',
        live: 'tic-tac-toe',
        title: 'Tic-Tac-Toe',
        desc: "Play tic-tac-toe against an android who has been cursed with the inability to lose for all eternity.",
        tech: ['html.png', 'css.png', 'js.png', ''],
    },

    Library: {
        code: 'Library',
        repo: 'library',
        live: 'library',
        title: 'Library',
        desc: "An app that could theoretically track books which you've read. Includes some retro styling, and some randomly chosen cover art.",
        tech: ['html.png', 'css.png', 'js.png', ''],
    },

    RestaurantPage: {
        code: 'RestaurantPage',
        repo: 'restaurant-page',
        live: 'restaurant-page',
        title: 'Restaurant Page',
        desc: "A fake page for a real restaurant. The home page includes a unique dynamic image grid, which expands and shrinks images as you hover around it.",
        tech: ['css.png', 'js.png', 'npm.png', 'webpack.png'],
    },

    ToDoList: {
        code:'ToDoList',
        repo: 'to-do-list',
        live: 'to-do-list',
        title: 'To-Do List',
        desc: "A unique spin on the to-do list. Or it was, but after some research it may be slightly less clever than I thought.",
        tech: ['css.png', 'js.png', 'npm.png', 'webpack.png'],
    },

    MobileFirst: {
        code: 'MobileFirst',
        repo: 'mobile-first',
        live: 'mobile-first',
        title: 'Mocchan and Jake',
        desc: "A simple app designed initially with mobile in mind. Learn the heartwarming tale of Mocchan, a precocious little girl, and Jake, her baseball bat.",
        tech: ['css.png', 'js.png', 'npm.png', 'webpack.png'],
    },

    WeatherApp: {
        code: 'WeatherApp',
        repo: 'weather-app',
        live: 'weather-app',
        title: 'Weather App',
        desc: "An API-connected weather app. Animates current time and weather with our old friends, the sun and the moon.",
        tech: ['css.png', 'js.png', 'npm.png', 'webpack.png'],
    },

    JSValidate: {
        code: 'JSValidate',
        repo: 'js-validate',
        live: 'js-validate',
        title: 'JS Validate',
        desc: "A simple validation form that uses Javascript for custom validation parameters. Includes fun background animations!",
        tech: ['html.png', 'css.png', 'js.png', ''],
    },

    HearthstoneAPI: {
        code: 'HearthstoneAPI',
        repo: 'hearthstone-api',
        live: 'hearthstone-api',
        title: 'Hearthstone Memory',
        desc: "A memory game that used to be connected to an API, until the API briefly went down. It now uses a static set of cards.",
        tech: ['html.png', 'css.png', 'js.png', ''],
    },

    Battleship: {
        code: 'Battleship',
        repo: 'battleship',
        live: 'battleship',
        title: 'Battleship',
        desc: "A game of battleship where you are accompanied by your doting shipgirls. Don't fail them, for their love may begin to dwindle.",
        tech: ['css.png', 'js.png', 'npm.png', 'webpack.png'],
    },

    CVProject: {
        code: 'CVProject',
        repo: 'cv-project',
        live: 'cv-project',
        title: 'CVGenDUO',
        desc: "A resume building app. Enter some basic info to create a simple resume. Or find out what happens when you click 'click me'",
        tech: ['css.png', 'js.png', 'npm.png', 'webpack.png'],
    },

    MemoryCard: {
        code: 'MemoryCard',
        repo: 'memory-card-real',
        live: 'memory-card-real',
        title: 'Memory Card',
        desc: "An API-based game of memory. Click each card in a set of 9 once, but the cards change place between each click.",
        tech: ['css.png', 'js.png', 'npm.png', 'react.svg'],

    },

    ShoppingCart: {
        code: 'ShoppingCart',
        repo: 'shopping-cart',
        live: 'shopping-cart',
        title: 'laythere.ca',
        desc: "A mock shopping site that uses images from an API to generate item listings that identical to wayfair's.",
        tech: ['css.png', 'js.png', 'npm.png', 'react.svg'],
    },

    DragonQuest: {
        code: 'DragonQuest',
        repo: 'dragon-quest',
        live: 'dragon-quest',
        title: 'Dragon Quest',
        desc: "Similar to Where's Waldo, but stolen from a different book. Connects to Firebase for tracking high scores.",
        tech: ['js.png', 'npm.png', 'react.svg', 'firebase.png'],
    },

    NubeClicker: {
        code: 'NubeClicker',
        repo: 'js-final-project',
        live: 'js-final-project',
        title: 'Nube',
        desc: "A mobile-focused app in which you buy and sell Bored Apes. Sign in with Google, and have all your game data saved with Firebase.",
        tech: ['js.png', 'npm.png', 'react.svg', 'firebase.png'],
    },

    Portfolio: {
        code: 'Portfolio',
        repo: 'portfolio',
        live: 'portfolio',
        title: 'Portfolio',
        desc: 'My last portfolio project. Join Miko as you explore the immersive and relaxing island of my past work.',
        tech: ['css.png', 'js.png', 'npm.png', 'react.svg'],
    },

    MiniMessagebricks: {
        code: 'MiniMessagebricks',
        repo: 'mini-message-board',
        heroku: 'https://secret-reef-82420.herokuapp.com',
        title: 'Mini Messagebricks',
        desc: 'A simple Node app for sharing messages. Click on bricks to have them slide around!',
        tech: ['npm.png', 'express.png', 'node-js.svg', 'pug.png'],
    },

    Crudworld: {
        code: 'Crudworld',
        repo: 'inventory-application',
        heroku: 'https://crudworld.herokuapp.com/catalog/world/63190230ffaf580f3a523e3c',
        title: 'Crudworld',
        desc: 'A simulated world populated by cruddies, and created by users.',
        tech: ['node-js.svg', 'mongodb.svg', 'mongoose.png', 'pug.png'],
    },

    DIM: {
        code: 'DIM',
        repo: 'members-only',
        heroku: 'https://guarded-fjord-47833.herokuapp.com/',
        title: 'Discord Instant Messenger',
        desc: 'A corrupted version of discord, with working accounts and messaging.',
        tech: ['node-js.svg', 'mongodb.svg', 'passport.svg', 'pug.png',],
    },

    BlogApi: {
        code: 'BlogApi',
        repo: 'blog-api-client',
        live: 'blog-api-client',
        title: 'Blog API',
        desc: 'A Blog API client. Built with react, and connected to a Node based API made by me.',
        tech: ['react.svg', 'mongodb.svg', 'mongoose.png', 'pug.png'],
    },

    SaikoKismet: {
        code: 'SaikoKismet',
        repo: 'odin-book',
        heroku: 'https://nameless-thicket-69102.herokuapp.com/',
        title: 'Saiko Kismet',
        desc: 'A multiplayer dice game built into a full social media site. Very much a work in progress.',
        tech: ['node-js.svg', 'mongodb.svg', 'socket.svg', 'pug.png'],
    },
}

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


        // Initialize position for cards. 
        setRoloPositions(1);
    }
}

// Calculate an offset % for card tabs based on index.
const getOffset = (index) => {
    let pos = index;

    if (pos > 9 && pos <= 19) {
        pos = pos - 10;
    } else if (pos > 19 && pos <= 29) {
        pos = pos - 20;
    }

    return `${pos * 10}%`;
}

document.defaultView.addEventListener('click', animateContent);

let scrollIndex = 0;

// Add a card to the rolodex based on project info.
const addCard = (projectData, index) => {
    const rolodex = document.getElementById('rolodex');
    const card = document.createElement('div');
    card.classList.add('card', 'transform-wrapper');
    card.dataset.index = index;
    card.dataset.name = projectData.code;
    card.dataset.position = index;

    const tab = document.createElement('div');
    tab.classList.add('card-tab');
    tab.style.left = getOffset(index);
    card.appendChild(tab);

    const tabText = document.createElement('div');
    tabText.classList.add('card-tab-text');
    tabText.innerText = index + 1;
    tab.appendChild(tabText);

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    card.appendChild(cardBack);

    cardBackText = document.createElement('div');
    cardBackText.classList.add('card-back-text');
    cardBackText.innerText = projectData.title;
    cardBack.appendChild(cardBackText);

    const project = document.createElement('div');
    project.classList.add('project', 'featured-project', 'box');
    card.appendChild(project);

    const titleDescBox = document.createElement('div');
    titleDescBox.classList.add('title-description-box');
    project.appendChild(titleDescBox);

    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('project-title')
    projectTitle.innerText = projectData.title;
    titleDescBox.appendChild(projectTitle);

    const projectDesc = document.createElement('p');
    projectDesc.classList.add('project-description');
    projectDesc.innerText = projectData.desc;
    titleDescBox.appendChild(projectDesc);

    const projectImg = document.createElement('div');
    projectImg.classList.add('project-img');
    projectImg.style.backgroundImage = `url("site_images/${projectData.code}.png")`;
    project.appendChild(projectImg);

    rolodex.appendChild(card);
}

let roloIndex = [];

// Variables for properly spacing and rotating cards.
let usedSpace = 200;
let cardGap;
let cardSpacer;

// Shift the position of all cards in the rolodex.
const setRoloPositions = (mod) => {

    // Calculate angles to evenly space cards using round numbers.
    cardGap = Math.round(usedSpace / (roloIndex.length - 1))
    cardSpacer = 360 - (cardGap * (roloIndex.length - 1));
    console.log(cardGap, cardSpacer)

    // Update card angles and stacking contexts.
    const cards = Array.from(document.querySelectorAll('.card'));
    cards.forEach((card, index) => {
        let angle = (index) * (cardGap);

        card.dataset.angle = angle;
        card.style.transform = `rotateX(${angle}deg)`;

        //Fix stacking context based on card position.
        if (angle < 90) {
            card.style.zIndex = roloIndex[index] * -1;
        } else {
            card.style.zIndex = roloIndex[index];
        }
    });
}

let topIndex = 0;

// Update positions for each card in the rolodex.
const updateRoloPositions = (mod) => {

    // Shift all elements or roloIndex, either forwards or backwards.
    if (mod === -1) {
        const el = roloIndex.pop();
        roloIndex.unshift(el);
    } else if (mod === 1) {
        const el = roloIndex.shift();
        roloIndex.push(el);
    }

    // Loop rolodex if overflowing in either direction.
    if (topIndex > roloIndex.length - 1) topIndex = 0;
    if (topIndex < 0) topIndex = roloIndex.length - 1;

    let bottomIndex = topIndex - 1;
    if (bottomIndex < 0) bottomIndex = roloIndex.length - 1;

    // Update angle and stacking context for each card.
    const cards = Array.from(document.querySelectorAll('.card'));

    cards.forEach((card, index) => {

        let bonus = cardGap;

        // If top or bottom card, depending on mod, increase bonus.
        if (mod === -1 && parseInt(card.dataset.index) === topIndex) {
            bonus = cardSpacer;
            const content = card.querySelector('.project');
            content.classList.add('back');
        } else {
            const content = card.querySelector('.project');
            content.classList.remove('back');
        }

        if (mod === 1 && parseInt(card.dataset.index) === bottomIndex) {
            bonus = cardSpacer;
        }

        const angle = parseInt(card.dataset.angle) + (bonus * mod);

        card.style.transform = `rotateX(${angle}deg)`;
        card.dataset.angle = angle;

        // Update stacking context.
        if (mod === -1) {
            card.style.zIndex = roloIndex.length - 1 - parseInt(card.dataset.position);
        } else {
            card.style.zIndex = roloIndex.length - 1 + parseInt(card.dataset.position);
        }
    });

    // Update positions on all cards.
    cards.forEach(card => {
        card.dataset.position = roloIndex[parseInt(card.dataset.index)];
    });

    topIndex += (mod * -1);

    // Animate the rolodex scrolling cap/knob.
    const cap = document.getElementById('rolodex-cap');
    const capAngle = parseInt(cap.dataset.angle) + (cardGap * mod * -1);
    cap.dataset.angle = capAngle;
    cap.style.transform = `translate(-100%, 50%) rotateY(-90deg) rotateZ(${capAngle}deg)`;
}

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
    const section = document.querySelector('#featured-projects');
    content.addEventListener('wheel', (e) => {

        // If not animated, skip snap scrolling.
        if (!animated) return;

        // Prevent scrolling page when scrolling in rolodex.
        if (e.target && e.target.id === 'rolodex' ||
            e.target.parentElement && e.target.parentElement.id === 'rolodex' ||
            e.target.parentElement.parentElement && e.target.parentElement.parentElement.id === 'rolodex' ||
            e.target.parentElement.parentElement.parentElement && e.target.parentElement.parentElement.parentElement.id === 'rolodex' ||
            e.target.parentElement.parentElement.parentElement.parentElement && e.target.parentElement.parentElement.parentElement.parentElement.id === 'rolodex') {
            return;
        }

        console.log(e.target);

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
        }
    });

    // Add all projects as cards to the rolodex.
    Object.keys(projects).forEach((key, index) => {
        addCard(projects[key], index);
        roloIndex.push(roloIndex.length);
    });

    const rolodex = document.getElementById('rolodex');
    rolodex.addEventListener('wheel', (e) => {

        // If not animated, skip snap scrolling.
        if (!animated) return;

        e.preventDefault();

        if (e.deltaY > 0) {
            updateRoloPositions(-1);
        } else {
            updateRoloPositions(1);
        }
    });

    const capSides = Array.from(document.querySelectorAll('.cap-side'));
    capSides.forEach((side, index) => {
        side.style.transform = `translate(-50%, -50%) 
                                rotate(${index * 36}deg) 
                                translate(100%, 0%) 
                                rotateY(90deg) 
                                translate(50%, 0%)`;
    });

    // Initialize all tech pops based on tech array.
    const techGrid = document.getElementById('tech-grid');
    const gridTech = ['html', 'css', 'js', 'npm', 'webpack', 'react', 'firebase', 'node', 'express', 'pug', 'passport', 'socket'];
    const titles = ['HTML', 'CSS', 'Javascript', 'npm', 'Webpack', 'React', 'Firebase', 'Node.js', 'Exprese', 'Pug.js', 'Passport.js', 'Socket.io']
    const rarities = ['Common', 'Common', 'Common', 'Common', 'Uncommon', 'Uncommon', 'Uncommon', 'Uncommon', 'Uncommon', 'Rare', 'Rare', 'Mythic']


    gridTech.forEach((item, index) => {
        const techItem = document.createElement('div');
        techItem.classList.add('grid-pop');
        techItem.style.backgroundImage = 'url("dudes/dude-base.png")';
        techGrid.appendChild(techItem);

        const icon = document.createElement('div');
        icon.classList.add('pop-icon');
        icon.style.backgroundImage = `url("dudes/${item}-face.png")`;
        techItem.appendChild(icon);

        const name = document.createElement('div');
        name.classList.add('pop-name');
        name.innerText = titles[index];
        techItem.appendChild(name);

        const rarity = document.createElement('div');
        rarity.classList.add('pop-rarity');
        rarity.innerText = rarities[index];

        // Set rarity text color based on rarity.
        if (rarities[index] === 'Common') {
            rarity.style.color = 'black';
        } else if (rarities[index] === 'Uncommon') {
            rarity.style.color = 'darkgreen';
        } else if (rarities[index] === 'Rare') {
            rarity.style.color = 'darkblue';
        } else if (rarities[index] === 'Mythic') {
            rarity.style.color = 'darkred';
        }

        techItem.appendChild(rarity);
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

// Add event listeners to project cards for loading that particular project.
const projectCards = Array.from(document.querySelectorAll('.project'));
projectCards.forEach(project => {
    project.addEventListener('click', () => {
        let box = document.querySelector('.selected-project-box');

        if (project.parentElement.classList.contains('card')) {
            box = document.querySelector('.rolodex-project-box');

            const name = project.parentElement.dataset.name;
            console.log(name)

            loadProject(projects[name], box, name);
            return;
        }

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
    img.style.backgroundImage = `url("site_images/${code}.gif")`;

    const repoBox = box.querySelector('.selected-project-github');
    const repo = repoBox.querySelector('a');
    repo.setAttribute('href', `http://github.com/roboseb/${project.repo}`);

    const liveBox = box.querySelector('.selected-project-live');
    const live = liveBox.querySelector('a');

    // Have link send user to either github live or heroku app.
    if (project.live) {
        live.setAttribute('href', `http://roboseb.github.io/${project.live}`);
    } else {
        live.setAttribute('href', project.heroku);
    }
    

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