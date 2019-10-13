  	let slider_content = document.querySelector('.slide-content');
    const vide = [
    '<iframe src="https://www.youtube.com/embed/689GoEBjMhY" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/Ts20_7v14ZA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/fwM-OMcE4so" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/UrM5MkPt6yY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/1q_t6RNuH8c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/IllfzwIYbgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  ];
    let i = vide.length;

    function nextVi(){
    	if (i < vide.length) {
    		i= i+1;
    	}else{
    		i = 1;
    	}
    	  slider_content.innerHTML = vide[i-1];
    }
    function prewVi(){
    	if (i < vide.length+1 && i>1) {
    		i= i-1;
    	}else{
    		i = vide.length;
    	}
    	  slider_content.innerHTML =vide[i-1];

    }
    console.log(vide[1])
