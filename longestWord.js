// longestWord

var longestWord = function(string){
	var result = ""

	string.split(" ").forEach(function(word){

		if (word.length > result.length) {
			result = word
		}

	})

	return result

}

console.log(longestWord("What's the loooooongest word in this sentence?"));