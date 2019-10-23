var a = document.createElement('a');
document.body.appendChild(a);
a.href = '#';
a.textContent = 'DOWNLOAD';
a.style.position = 'fixed';
a.style.bottom = '10px';
a.style.right = '10px';
a.style.zIndex = '99999';
a.style.background = '#fff';
a.style.padding = '10px';
a.addEventListener('click', function(e){
	e.preventDefault();
	var a = document.createElement('a');
	var href = document.querySelector('#mp3flashPlayer').currentSrc;
	console.log('href', href);
	if(!href){
		href = document.querySelector('#mp3flashPlayer source');
		href = href ? href.getAttribute('src') : null;
	}
	if(href){
		var name = href.match(/[a-z0-9\-\_\s\.]+\.mp3/i);
		a.download = name || '';
		a.href = href;
		a.click();
	} else {
		document.title = 'no src mp3';
	}
});
