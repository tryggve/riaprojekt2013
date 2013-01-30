PTS - Project Tracking System
===========

Jag har valt att ta fram ett enkelt projektplaneringssystem. Jag vill fokusera på att lära mig hur jag skall arbeta när jag utvecklar mina single-page applikationer och de nya verktyg jag behöver sätta mig in i. Projekthanteringssystem är en domän jag har bekantat mig med tidigare vilket gör att jag kan fokusera mer på utvecklingsarbetet. Sen har jag faktiskt fått frågan av min tidigare chef som behöver ett enkelt verktyg i sin vardag så jag hoppas på att kunna göra en god vän glad samtidigt som jag får äta kakan. Win win!

Nu sitter jag på ett hotellrum i Malmö och alla papper från mitt möte med Sofie finns i Kalmar så beskrivningen på applikationen kan halta lite eftersom jag får dra den ur minnet.

Alla goda ting är tre och i korta drag kan applikationens domän beskrivas genom tre saker.

![Enkel domänmodell](http://image.jpg)

En aktivitet har en eller flera uppgifter knutna till sig. Varje aktivitet likväl som varje uppgift har en ansvarig person. Personen kan vara en användare av systemet eller skriven i klartext.

Jag har ett [arbetsdokument][12] som kommer uppdateras under processen. Jag arbetar agilt =)


De tekniker jag tänker använda när jag utvecklar applikationen är:

- [Backbone.js][1]
	Backbone är ett MVC-Ramverk som hjälper till med att ge applikationen en struktur och tydlig separation mellan modell och vy. Det är ett ganska "åsiktslöst" ramverk till skillnad från andra tillgängliga alternativ. Detta kan vara en fördel på samma sätt som en nackdel. Det beror helt på vilken utveclingsstil du har och applikationen du skall utveckla. Jag har bara ramverket [AngularJS][11] att jämföra med då jag har utvecklat lite i det. Jag kommer smyga in en och annan referens till skillnaderna mellan de två ramverken under utvecklingens gång.
- [Underscore.js][2]
	Underscore är backbones enda beroende. Underscore är ett verktyg som har många väldigt användbara funktioner som du kan använda på Arrayer, Objekt och Collections som är en speciell typ utav samling specifik för Backbone.
- [Backbone Relational][3]
	Detta bibliotek har jag blivit tipsad om och jag vill gärna testa det under kursen. Det utökar backbone med funktionalitet för att skapa relationer mellan modellklasser.
- [Require.js][4]
	Jag vill att min kod blir modulbaserad och även ha möjlighet att påverka vilka metoder som är publikt tillgämngliga i min applikation. RequireJS skall förhoppningsvis ge mig detta.
- [Jasmine][5]
	Enhetstester kommer skrivas i Jasmine.
- [Testacular][6]
	Testacular är ett program som exekverar mina enhetstester i Jasmine. Det är en liten node-modul som behöver en nodeserver för att fungera. Eftersom jag har arbetat lite med testacular tidigare och det integreras bra med min IDE WebStorm så kommer jag köra med det när jag utvekcklar lokalt. Dock kommer jag lägga till Jasmines egna testrunner så andra kan ladda hem och köra mina tester direkt i en webbläsare.
- [Twitter Bootstrap][7]
	Eftersom jag är en kråka på design så hoppas jag att Bootstrap kan hjälpa mig få applikationen att se lite trevlig ut. Även om bootstrap är det nya ostilade...
- [jQuery][8]
	Backbone hade jQuery som ett beroende i tidigare versioner men har arbetat med att bli av med det. jQuery är bra att ha när man arbetar mot DOM:en och det kommer göras en del sådant i vylagret. Eftersom jag är ute efter att använda vissa grafiska hjälpmedel i jQuery UI behövs den rackarn för att det skall fungera också.
- [jQuery UI][9]
	Vissa av de funktionella krav min kund efterfrågar från applikationen kan förhoppningsvis jQuery UI hjälpa mig att ta fram så de blir mer användarvänliga. Som till exempel datumväljare och kalendervy.
- [Brocco][10]
	Jag skall såklart dokumentera min kod. Till hjälp för att skapa en onlinedokumentation tänkte jag ge Brocco ett varv på stan för att se hur den beter sig bland folk.

Min primära användare kommer förmodligen nyttja applikationen på en och samma surfplatta vid varje tillfälle så jag har möjlighet att utgå ifrån detta scenario vid planering av design och "cachening"...
Utöver detta tänkte jag titta på om jag kan ge stöd för offline-arbete och hur local storage kan vara behjälpligt.

Men nu när jag tittar på listan med vapen känner jag att kampen mot klockan kanske kommer få mig att begränsa mig lite. Som junior i svängen kommer det ta tid att lära mig behärska varje verktyg. Jag skall räkna lite på det.


[1]: http://backbonejs.org/ "Backbone.js officiella webplats med dokumentation"
[2]: http://underscorejs.org/ "Underscores officiella webplats med dokumentation"
[3]: https://github.com/PaulUithol/Backbone-relational/ "Backbone Relational på github"
[13]: http://handlebarsjs.com/ "Handlebars är ett hjälpmedel som kan användas till att skapa HTML-vyer"
[4]: http://requirejs.org/ "Require.js officiella webplats med dokumentation"
[5]: http://pivotal.github.com/jasmine/ "En introduktion till testramverket Jasmine"
[6]: http://vojtajina.github.com/testacular/ "En kort introduktion till testexekverarapplikationen Testacular"
[7]: http://twitter.github.com/bootstrap/ "Twitter Bootstrap är ett hjälpmedel för front end utveckling"
[8]: http://jquery.com "jQuery är ett bibliotek med genvägar till att manipulera DOM-strukturen"
[9]: http://jqueryui.com "jQuery UI har färdiga komponenter för vissa grafiska hjälpmedel till användargränssnittet"
[10]: http://toolness.github.com/brocco/ "Brocco skapar dokumentation utifrån din dokumenterade kod"
[11]: http://angularjs.org/ "Ramverket Angular.js är framtidens melodi"
[12]: https://docs.google.com/document/d/1JL0SXpobb4EvMf17dBEV2Q8Tw7jC8qz2w-tM4-rio0I/edit "Vision och lite annat smått och gott beträffande min applikation"
