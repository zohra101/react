//  export function output(
// 		message = "",
// 		outputTag = "outputTag",
// 		shouldAppend = true
//  ) {
// 		if (shouldAppend) window[outputTag].innerHTML;
// 		else window[outputTag].innerHTML = message;
//  }
   
    
 export function output(
		message = "",
		outputTag = "outputTag",
		shouldAppend = true
 ) { debugger;
		const outputElement = document.getElementById(outputTag);
		if (shouldAppend) outputElement.innerHTML += message;
		else outputElement.innerHTML += message;
 }   