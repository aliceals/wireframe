# Wireframe
Wireframe for a mobile first responsive website

# Accessibility
Ran a lighthouse report for accessibility and it came out as 94% following the design supplied in the PSD. 

The only thing holding it back from 100 was the contrast - Background and foreground colors do not have a sufficient contrast ratio. I have made the colour of the notification box and button to be a darker colour to make it easier to read for all users. 


# Live reload
In order to make it easier to check the updates made were what I was after I used live reload npm. 

To do this I added the following code to my JS script

document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
        ':35729/livereload.js?snipver=1"></' + 'script>')
        
To run the livereload I used the command line
  npm install -g livereload
  
 Then ran livereload . in my command line to get it working on my localhost
