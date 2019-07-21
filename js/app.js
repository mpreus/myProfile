$(document).ready(function() {
// nazwa technologii do zmiennych:
	let technoName = $("h4");
// kliknięcie w nazwę technologii (h4) uruchamia funkcję:
	technoName.on("click", function() {
		$(this).next().toggle("slow");
		});
/* 
element 'p' ma właściwość 'display', którą metoda 'toggle()' żongluje wartościami 'none' i 'block'
*/

	let aboutMeModule = $("h3.myStory");
	aboutMeModule.on("click", function() {
		$(this).next().toggle("slow")
	});	

// clock na stronie:
	let myClock = setInterval(timer, 1000);
	function timer() {
		let theDate = new Date();
		let theTime = theDate.toLocaleTimeString();
		$("#clock").html(theTime);
	}


//sprawdź przy ładowaniu strony rozmiar okna przeglądarki...
	let windowWidth = $(window).width();
	if (windowWidth < 920) { // ...i dostosuj sposób wyświetlania
		aboutMeModule.next().css("display", "none");
		$(".twoSections").css("display", "block");
		
		$(".section2, .section3, .section4, .section5").css(
		{
			"display": "block",
			"width": "90%",
			"margin": "0 auto"
		});

		$(".jumbotron").css(
		{
			"padding-top": "4vw",
			"margin-bottom": "2vw"
		});
		
		$("h2").css(
		{
			"fontSize": "6vw" // dodatkowo - wcześniej nie było
		});
		
		$("h3").css(
		{
			"fontSize": "5vw", // dodatkowo - wcześniej nie było
			"margin-top": "2vw"
		});
		
		$("#interests1 h3, #interests2 h3").css(
		{
			"padding-top": "2vw"
		});
		
		$(".aboutMe, .my-works, .my-interests").css(
		{
			"fontSize": "4vw", // było 2.5 - za mało!
			"text-align": "left"
		});
		
		$("h4").css( //.techno
		{
			"fontSize": "4vw", // było 3.5 - za mało!
			"textAlign": "center"
		});
		
		$(".techno p").css(
		{
			"fontSize": "4vw", // było 2.5 - za mało!
			"color": "white"
		});

		$(".my-works img").css(
		{
			"width": "40vw",
			"height": "24vw"
		});
		
		$(".aboutMe img.gitHub").css(
		{
			"width": "45vw",
			"height": "36vw"
		});
		
		$(".my-interests img").css(
		{
			"width": "40vw",
			"height": "24vw"
		});
		
		$(".obrazek").css(
		{
			"text-align": "center"
		});
		
		$(".obrazek img").css(
		{
			"width": "42vw"
		});
		
		$(".photo p").css(
		{
			"fontSize": "3.5vw", // było 2.5 - za mało!
			"margin-bottom": "1vw"
		});
		
		$(".photo p.my-pictures").css(
		{
			"fontSize": "3.5vw", // było 2.5 - za mało!
			"padding-bottom": "2vw"
		});
		
		$("a").css(
		{
			"fontSize": "3.5vw" // było 2 - za mało!
		});
		
		$(".littleTitle p").css(
		{
			"font-size": "3vw",
			"lineHeight": "4vw"
		});
		
		$("footer p, footer a").css(
		{
			"fontSize": "2vw",
			"lineHeight": "2.5vw"
		});

		$("#clock").css(
		{
			"font-size": "3vw"
		});
	};	 	
});

