### Motivation

This is all about adding/updating as quickly as possible when creating training courses on the [thinkific](thinkific.com) platform.

The final result here can be used with any training platform really but the following shortcomings in thinkific, drove me to the approch adopted by this github project:
1. The best way to present data on thinkific is via google presentations. After a slide is added, recorded audio can be attached on top of it ... BUT that audio cannot be detached so updating those slides is a pain. The audio has to be rerecorded and reattached and the slides have to be readded too.
1. Next I tried adding text directly but that isn't great because the audio has to be added via publicly available URL. Who has time to set that up? On top of that, the preview for thinkific's text editor does not match the final result! This defeats the whole point of being a What-You-See-Is-What-You-Get (WYSIWYG) editor.
1. So finally I settled for at least presenting my content the way I want by adding it to thinkific as PDF files. In order to make this approach quick, this project takes markdown files and generateds PDFs from them.

### Resources

Markdown Hints/Clues:
* https://github.com/alanshaw/markdown-pdf
* https://github.com/jonschlinkert/remarkable
    * http://jonschlinkert.github.io/remarkable/demo/
* https://github.com/mixu/markdown-styles


NPM Goodies:
* https://ashleygwilliams.github.io/npm-by-the-numbers/#39
* https://training.shoppinpal.com/unify-testing-with-npm.html
* https://engineering.gosquared.com/testing-with-docker
* http://www.marcusoft.net/2015/08/pre-and-post-hooks-for-npm-scripting.html
* http://www.marcusoft.net/2015/08/npm-scripting-configs-and-arguments.html#passing-through-command-line-argument