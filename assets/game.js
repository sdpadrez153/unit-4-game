$(document).ready(function() {



	var comp = Math.floor(Math.random() * 120) + 19; 
		console.log("comp: " + comp); 
		$(".randomNumber").html(comp); 

	var emOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 1: " + emOne); 
		$("#img1").html("<img src=" + "/assets/images/Sonic_(Ring).png" + " value=" + emOne + ">"); 

	var emTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 2: " + emTwo); 
		$("#img2").html("<img src=" + "/assets/images/Chaos_Emerald_(Orange).png" + " value=" + emTwo + ">"); 

	var emThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 3: " + emThree); 
		$("#img3").html("<img src=" + "/assets/images/Choas_Emerald_(Green).png" + " value=" + emThree + ">");
	
	var emFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 4: " + emFour); 
		$("#img4").html("<img src=" + "/assets/images/Choas_Emerald_(Pink).png" + " value=" + emFour + ">");
		
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score); 

	function reset () {
		comp = Math.floor(Math.random() * 120) + 19; 
			console.log("compPick: " + comp); 
		$(".randomNumber").html(comp); 

		score = 0; 
		$(".scoreDisplay").html(score); 

		emOne = Math.floor(Math.random() * 12) + 1;  
			console.log("Gem 1: " + emOne); 
		$("#img1").html("<img src=" + "/assets/images/Sonic_(Ring).png" + " value=" + emOne + ">"); 

		emTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 2: " + emTwo); 
		$("#img2").html("<img src=" + "/Users/user/Desktop/project/Chaos_Emerald_(Orange).png" + " value=" + emTwo + ">"); 

		emThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 3: " + emThree); 
		$("#img3").html("<img src=" + "/Users/user/Desktop/project/Choas_Emerald_(Green).png" + " value=" + emThree + ">");
	
		emFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 4: " + emFour); 
		$("#img4").html("<img src=" + "/Users/user/Desktop/project/Choas_Emerald_(Pink).png" + " value=" + emFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === comp) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
			} 

			else if(newScore > comp) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === comp) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > comp) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 