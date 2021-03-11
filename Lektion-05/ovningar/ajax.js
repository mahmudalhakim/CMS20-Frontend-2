//  My Ajax Library

function load(endpoint) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", endpoint);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
      render(data);
    }
  };
}
