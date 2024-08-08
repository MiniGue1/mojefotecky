UPLOADCARE_PUBLIC_KEY = "demopublickey";
UPLOADCARE_TABS = 'robots';
var robo_url, img_tag;

function robots(container, button, dialogApi, settings) {
  button[0].title = "Robots";
  var count = 500;
  while (count--) {
    robo_url = `https://robohash.org/${count}.png`;
    img_tag = `<img width=200 height=200 data-src='${robo_url}'>`;
    container.append(img_tag);
  };
  
  // Delay the creation of the LazyLoad instance
  setTimeout(function() {
    var myLazyLoad = new LazyLoad({
      container: container[0] // Ensure this targets the correct container
    });
    console.log(myLazyLoad); // For debugging purposes
  }, 1); // Minimal delay to ensure images are in the DOM
}

uploadcare.registerTab('robots', robots);