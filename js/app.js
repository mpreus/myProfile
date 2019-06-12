$(document).ready(function() {
// nazwa technologii do zmiennych:
	var technoName = $("h4");
// kliknięcie w nazwę technologii (h4) uruchamia funkcję:
	technoName.on("click", function() {
		$(this).next().toggle("slow");
		});
/* 
element 'p' ma właściwość 'display', którą metoda 'toggle()' żongluje wartościami 'none' i 'block'
*/

	var aboutMeModule = $("h3.myStory");
	aboutMeModule.on("click", function() {
		$(this).next().toggle("slow")
	});
	var beginnings = $("h3#beginnings");
	beginnings.on("click", function() {
		$("div.pictureAdditional").toggle("slow")
	});
	

//sprawdź przy ładowaniu strony rozmiar okna przeglądarki...
	var windowWidth = $(window).width();
	if (windowWidth < 920) { // ...i dostosuj sposób wyświetlania
		$(".twoSections").css("display", "block");
		$(".section2").css(
		{
			"display": "block",
			"width": "90%",
			"margin": "0 auto"
		});
		$(".section3").css(
		{
			"display": "block",
			"width": "90%",
			"margin": "0 auto"
		});
		$(".section4").css(
		{
			"display": "block",
			"width": "90%",
			"margin": "0 auto"
		});
		$(".section5").css(
		{
			"display": "block",
			"width": "90%",
			"margin": "0 auto"
		});
		$("h2").css(
		{
			"fontSize": "6vw" // dodatkowo - wcześniej nie było
		});
		$("h3").css(
		{
			"fontSize": "5vw" // dodatkowo - wcześniej nie było
		});
		$(".aboutMe, .my-works, .my-interests").css(
		{
			"fontSize": "3.5vw", // było 2.5 - za mało!
			"text-align": "left"
		});
		$("h4").css( //.techno
		{
			"fontSize": "4vw", // było 3.5 - za mało!
			"textAlign": "center"
		});
		$(".techno p").css(
		{
			"fontSize": "3.5vw" // było 2.5 - za mało!
		});
		$(".my-works img").css(
		{
			"width": "45vw",
			"height": "24vw"
		});
		$(".aboutMe img#gitHub").css(
		{
			"width": "45vw",
			"height": "36vw"
		});
		$(".my-interests img").css(
		{
			"width": "45vw",
			"height": "24vw"
		});
		$(".pictureAdditional img").css(
		{
			"width": "90vw",
			"height": "75vw",
			"margin": "0 auto"
		});
		$("#obrazek img").css(
		{
			"width": "40vw"
		});
		$(".photo p").css(
		{
			"fontSize": "3.5vw" // było 2.5 - za mało!
		})
		$("a").css(
		{
			"fontSize": "4vw" // było 2 - za mało!
		});
		$(".littleTitle").css(
		{
			"lineHeight": "2vw"
		});
	};
		 	
});

