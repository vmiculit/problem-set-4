// addNumbers

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

console.log(addNumbers("88Hello 3World!"))