const socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

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

  let navLists = document.querySelectorAll('.socialmediaicons');
  for (let i = 0; i < navLists.length; i++) {
    navLists[i].innerHTML = output;
  }


})(socialMedia);