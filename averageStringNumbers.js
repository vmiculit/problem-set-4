// Helper Function

var addNumbers = function(string){

	var words = string.split(" ")

	var result = 0

	words.forEach(function(word){

		var wordResult = []

			word.split("").forEach(function(char){

				if (parseInt(char) > 0 && parseInt(char) <= 9){
					wordResult.push(char)
				}

			})

		wordResult = wordResult.join("")

		result += Number(wordResult)

		wordResult = []

	})

	return result

}

// averageStringNumbers

var averageStringNumbers = function(string){

	return Math.ceil(addNumbers(string)/string.length)

}


console.log(averageStringNumbers('Hello6 9World 2, Nic8e D7ay!'));