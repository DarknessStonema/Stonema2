function toggleMode() {
    var currentStylesheet = document.getElementById('modeStylesheet');
    var isDarkMode = currentStylesheet.href.includes('/css/darkmain.css');
    var isLightkMode = currentStylesheet.href.includes('/css/lightmain.css');

    // Toggle between dark mode and light mode
    if (currentStylesheet.href = '/css/lightmain.css') {
        currentStylesheet.href = '/css/darkmain.css';
     } else {
         currentStylesheet.href = '/css/lightmain.css';
     }
 }

     // Set initial mode (you can choose light mode as defauslt)
   document.getElementById('modeStylesheet').href = '/css/darkmain.css';
