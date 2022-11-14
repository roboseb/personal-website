# Seb's Personal Website

![Gif of Seb's personal site](site_images/PersonalWebsite.gif)

[Live](https://roboseb.github.io/personal-website/)

## Features

- A personal website for me, or more accurately a portfolio
- Tons of custom animations for various features, many in 3D!
- All at the cost of performance and rendering time!
- Can my PC run Crysis? Yeah bro, can yours run this portfolio?
- Gifs and information for all sites I've ever made!
- Links to repos and live versions of all sites I've ever made!
- Floral motif and off-white accents!
- Borrowed and modified, but credited, effects!
- <details> <summary>What do I mean by that?</summary>(If you're wondering, the cards on the featured projects page use some borrowed code for most of the perspective shift on mouse position. The buttons on the contact page also use this as part of their animation. The coin flipping animation uses a stackoverflow answer for the animation of going up and coming back down. I'm not a scientist or mathematicion, and I'm barely a web developer. Every other animation you see, including all the 3D stuff, is completely original.)</details>
- Grid displaying tech stacks I've worked with as collectible vinyl toys! Cute or cringe, you decide!
- Authentic Cunningham box!
- Tooltips!
- 11-sided magic coin!

## Known Issues

- Firefox does not support background-image transitions, so the animation for switching between project images looks different in that browser.
- Very slow load due to size and amount of images/3D elements.

## Devlog

October 25th, 2022

    Sorta got my Odin-Book project done, so here we go with this one. Spent most of the day reading a bunch of the assigned articles, so I've really only got about three days to do this in the time frame I set up. Regardless, the site is basically hard coded data with no fanciness added on top, and it won't be nearly as customized as my last portfolio. Oh yeah, the outline says to make this a personal website, but I think that basically just means, "Do the portfolio again, since you fucked it up so bad last time."

    By the way, last few days have been powered by the excellent POW! Right in the kisser! by Hail the Sun. Audio is for some reason really quiet on the album, but it's great. Their first two releases are very different from the later stuff that came after they were signed, but the later stuff is also good. First song on this album is about doing heroin. My arm is thirsty!

    Main outline for this portfolio is an idea of mine from a few months back. When it first loads in , it looks like plain html that hasn't loaded the CSS properly. Then, when you interact with it in any way, it smoothly springs to life to some sort of sexy modern layout.

October 26th, 2022

    Two full days, and then maybe a half day. Seems pretty reasonable.

October 27th, 2022

    Lost a game of Hearthstone in legend today because my phone is ass. Literally missed out on swinging with a minion with 32 attack cause my phone just said to me, "Not today!"

October 28th, 2022

    So technically one day left. I don't think I'll have this done to a satisfactory level within that timeframe, so I'll just add it to the other projects I need clean up early next month. 

November 2nd, 2022

    Short holiday over. Now to finish up the personal website so that I can start applying to jobs. Found an online svg editor that I think I can use to make my icons fit with eachother a bit better.

November 3rd, 2022

    Tired.

November 4th, 2022

    Less tired.

    I think the rolodex is almost done, which is nice. My past projects are mostly digitized, outside of having the repo/live links. There is however a noticible error in my math when scrolling a few times in the same direction, where the entire rolodex starts to rotate excessively backwards, which I will probably need to fix first thing today. Then I just need to come up with a cute section for technologies, and decide what I want on the final contact page. Maybe a section to email me.

    I believe the issue with the rolodex related to some rounding at some point during the process. So I just did a bit of math at the begginning, and now all the numbers start as whole, removing the problem. Works and looks great. Still not sure how I would clean up the z-index stuff. Still not sure why the cards aren't just stacked properly since they're in 3D space, but whatever.

    Rolodex is done, and it looks pretty great.

November 5th, 2022

    Met two web developers on omegle last night. One didn't seems particularly insightful, but the other took a look at this project. He seemed to think the rolodex was pretty cool, which was my intent, but he also looked at Discord Instant Messenger and mentioned that it would be more informative to a potential employer. Also mentioned figma, and that if I can recreate UIs from mock-ups, that's pretty valuable. Also we tested the site with devtools' lighthouse, and the performance was shit, which was mostly expected. This portfolio is not practical, but instead more of a cute little showcase of the kinds of things I can make.

    Many collectable toys come with a small sheet listing all available toys in a given set. My technology section is gonna be one of those, with each framework or library being a little funko pop ripoff guy. 

November 7th, 2022

    Back at it again. Contact page is the last big thing to get done, then just some minor additions throughout. Contact page should be easily done today, and then with the rest of the day and all of tomorrow it might be looking pretty good. Definitely took longer than I thought, but even now it looks pretty dope.

November 8th, 2022

    Last day? Who knows, but we'll see. Hoping I can quickly fix the text blur issue on some elements, as that's one of the most annoying things left. Then to start finishing up some items from the to-do list.

Novemeber 9th, 2022

    Apparently one of the guys living upstairs is planning to sue me because he thinks I'm vaping indoors, which I'm not.

    Tooltips are done and look serviceable. Just realized I should have a favicon.

    Am I done? I think once I've styled the README it'll be done. Only took me like 11.5 days.


November 10th, 2022

    So everything was basically done yesterday, and I had my mom test all the site features out on her laptop, which is considerably less powerful than mine. Good for testing. She had a scrollbar in the styled mode, for some reason. This broke the full page scroll and navigation buttons. She also couldn't flip the coin at all. Apparently she's on firefox, so I install firefox and have the exact same problems she was having. Progress. Now to get firefox on my VM and see if I can fix this at all.

## To-Do

-Properly style README / add live github and gifs/photos
DONE-add this project to all projects list (recursive)
DONE-animated pips 
CANCEL-differnt background colors for different sections
DONE-more floral motif
DONE-credits page (Armandocanals.com for 3d transform)
CANCEL-folder clicking and emptying out animation (including for rolodex)
DONE-fix project 3d folders not snapping back
CANCEL-folders that actually open?
CANCEL-retrigger animations on scroll in
DONE-replace images with gifs in the end
DONE?????-fix tech item red bar rounding error
CANCEL-add reminder text to tech logos
DONE-flower cutouts on slidey buttons

DONE-add setdata to rolodex cards
Done-fix repo button transition being too fast
DONE-realistic letter tab and tab position based on project name.
DONE-fix rolodex angle after scrolling bug
DONE?????-fix blurry html/css icons (%resize issue?)
DONE(SORTA)-email section on the contact page?
DONE-scroll indicator for page/rolodex
DONE-different font for p elements
DONE?(What did I mean by this)-custom little pointy help box
DONE-"haha, jk" when loading into main styled page
DONE-explanation in credits for what the contact pages office equipment is
CANCEL-flat looking credits page that transitions seamlessly to 3d buttons
DONE-faq section
DONE-modals
DONE-reminder text bubbles
DONE-favicon
-verify font loading in time for animation
-dry code
DONE-fix contact page on mobile
DONE-fix overly wide page on mobile