# startup
Matthew Lund's repository for CS260 @ BYU

Elevator pitch: Lots of tabletop games, like Dungeons and Dragons, require dice rolling. Recently, many online platforms allow for digital dice rolling for those who don't have dice. However, in order to prevent the egregious crime that is dishonesty in games, I propose a service which allows a player to roll one or more dice digitally, simultaneously displaying the result to another device, keeping both players on the same page of what the result actually is. Fund me?

(Sketch in repository)

Key Features:
- Ability to choose what kind of dice to roll
- Ability to choose how many dice to roll
- Ability to apply a "modifier," or a value that gets added to whatever result is rolled
- Instantly displays the roll for the roller and the one who they connect with, which is probably the person administering the game
- Rolls up to 8 dice at once, both displaying their values and providing a sum at the bottom

-=NOTES FOR SIMON=-

HTML:
It was way easier than I expected! I tried to basically go through each thing and code it as it was written in the example thing. Some things I did a tiny bit different. For the actual buttons in play.html, I did copy what was there, but I looked through to try and understand what it was saying. But yeah I got some more experience putting together html, and got to see the process of turning my html from VSCode into an actual subdomain in my website!

JAVASCRIPT AND SERVICE:
I must have forgotten to commit the last notes. For Javascript, I was able to learn a lot about the methods for linking HTML with JS functionality. There is a lot of other stuff used, like promises and stuff, and that is all useful, but the ease with which HTML and JS link together with `<script>` as well as `onclick` is incredible. A lot smoother of a connection than I would have expected. Service functionality, it seems to me, is an upgrade upon localstorage as far as your ability to remember things between visits, and now between computers. I can see this being very useful for my startup application, where I need to be able to remember and communicate randomly generated numbers between devices. This is probably going to be better once we get to websockets and stuff, but for now this works great.

DATABASE:
I love the idea and functionality of using databases, but I really want to sit and spend more time understanding the implementation. The passing of information in this way between servers is still a little confusing, especially when handled in JavaScript. The concept in general makes sense though, and I'm excited to see how I can work it into my startup.

LOGIN:
This is going to be the most useful piece yet for my startup. Being able to uniquely identify the users is more than just a security thing (my startup doesn't care about security much anyway), but is actually part of the base functionality of why the app exists in the first place. I want to look more into how to interact with others who are logged in and treat different logged in individuals differently.

WEBSOCKET:
I spent some time looking at all of the different functions within the PeerProxy class, and it seems like most of the code is pretty necessary for all extended communications between peers. I'll be needing this in order for my app to work. Will I mostly be copying the code I see here or will mine look unique depending on the needs of my startup?

REACT:
I looked into how it seems like there are lots and lots of jsx files, whereas there were fewer js and html files before. It's good to segment your code like that and I'll probably reference the simon for how to do this in my startup.

-=NOTES FOR STARTUP=-

HTML and CSS:
Messing around with CSS helps you to learn a lot about how it goes together. I am by no means a pro at it yet, but I was able to figure out how to make my application work well, mostly within a mobile phone's dimensions. Currently it uses some crappy dice png files, but once I learn how to implement my dice rolling into the project, I will make these fit into the site better. They are currently more of a placeholder for that feature.

JAVASCRIPT:
Lots of stuff in JavaScript was new to me because it was hard to understand right away from class and homework. I tried to better understand things like eventListeners, etc. 

SERVICE:
This part taught me a lot about exactly how javascript interacts with "other" (I want to call them third-party but idk if that's right) services like a mongo database and the actual AWS hosting platform itself. There were a lot of errors I ran into which pertained to the package.json file which taught me about package dependencies and how they jive with the deployment script, etc. 
