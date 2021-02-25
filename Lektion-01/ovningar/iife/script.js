const socialMedia = {
  facebook: 'http://facebook.com',
  twitter:  'http://twitter.com' ,
  flickr:   'http://flickr.com'  ,
  youtube:  'http://youtube.com'
};

// IIFE 
(function (socialMedia) {

  let output = '<ul>';

  for (let key in socialMedia) {

    output += `  
    <li>
    <a href="${socialMedia[key]}">
      <img src="images/${key}.png">
    </a>
    </li>`;
  }

  output += '</ul>';

  let navElements = document.querySelectorAll('.socialmediaicons');
  for (let i = 0; i < navElements.length; i++)
    navElements[i].innerHTML = output;

})(socialMedia);