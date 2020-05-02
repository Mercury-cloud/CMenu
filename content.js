chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(configFileName,sender,sendresponse)
{
	
	//alert(configFileName);
	//console.log(configFileName);
	let paragraphs = document.getElementsByTagName("p");
	for(elt of paragraphs)
	{
		elt.style['background-color'] = '#00CED1';
	}


	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		
			config1= JSON.parse(xhttp.response);
			console.log(config1);
			processConfig(config1);
			
		}
	};
	
	xhttp.open("GET", chrome.extension.getURL(configFileName), true);
	xhttp.send();



 function processConfig(config){

		config.Commands.forEach((item)=> 
			{
				var xpathTarget=item.Target.replace("xpath=","");
		
					if(item.Command=='click'){
								
							try {
									var xPathRes = document.evaluate(xpathTarget, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
									if(xPathRes!=null && xPathRes.singleNodeValue!=null){
										xPathRes.singleNodeValue.click();
									   
									}else{
										console.log("Element not found ",item.Target);
									}
									
									
								}
								catch(err) {
								
									console.log(err);
									
								}
								
					}else if(item.Command=='storeEval'){
						window.history.back();
					}
			});

}
}