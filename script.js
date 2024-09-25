const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const ai_call = document.querySelector(".ai-call");



function Speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text); // speaks api in js
    text_speak.volume = 1;   // Max volume
    text_speak.rate = 0.9;   // Slightly slower for more clarity
    text_speak.pitch = 0.9;  // Lower pitch for a deeper voice
    text_speak.lang = 'hi-IN';  // Hindi language for India
    text_speak.lang = 'hi-GN';
    window.speechSynthesis.speak(text_speak);

}




function wish_me() {
    let date = new Date();
    let hour = date.getHours();

    if (hour > 0 && hour < 12) {
        Speak('Good Morning');
    }
    else if (hour >= 12 && hour < 18) {
        Speak('Good Afternoon');
    }
    else {
        Speak('Good Evening');
    }
}



window.addEventListener('load', () => {
    wish_me();
});



let speechRecognition1 = window.SpeechRecognition || window.webkitSpeechRecognition;
if (speechRecognition1) {
    var recognition = new speechRecognition1(); // object of speech recognition
} else {
    alert("Speech Recognition is not supported in this browser.");
}



// Handle the result when recognition returns text----------------------------





recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerHTML = transcript;
    console.log(event);
    takeCommand(transcript.toLowerCase());
};

recognition.onerror = (event) => {
    alert(event.error);
    content.innerHTML = event.error;
};


btn.addEventListener('click', () => {
    recognition.start(); // Start recognition on button click
    btn.style.display = "none";
    ai_call.style.display = "block";

});

function takeCommand(message) {
    btn.style.display = "flex";
    ai_call.style.display = "none";





    //special commands-----------------------------------------------------------





    if (message.includes('hello') || message.includes('hii') || message.includes('hey')) {
        Speak('Hello sir, what can i help  you?');
    }
    else if (message.includes('who are you')) {
        Speak('I am a virtual assistant, Created by Mr. Sumit');
    }
    else if (message.includes('who found you')) {
        Speak('I am a virtual assistant, Created by Mr. Sumit');
    }
    else if (message.includes('how are you')) {
        Speak('I am fine, thank you');
    }
    else if (message.includes('what is your name')) {
        Speak('My name is TechMitra ');
    }
    else if (message.includes('what can you do')) {
        Speak('I can do many things like, Open websites, Search on internet, Tell you the current time and date, Open desktop applications, and many more');
    }
    else if (message.includes('thank you')) {
        Speak('Welcome sir, I am always here to help you');
    }
    else if (message.includes('bye')) {
        Speak('Good Bye sir, Have a nice day');
    }
    else if (message.includes('good morning')) {
        Speak('Good Morning sir');
    }
    else if (message.includes('good afternoon')) {
        Speak('Good Afternoon sir');
    }
    else if (message.includes('good evening')) {
        Speak('Good Evening sir');
    }
    else if (message.includes('good night')) {
        Speak('Good Night sir');
    }
    else if (message.includes('what is your age')) {
        Speak('I am a virtual assistant, I do not have any age');
    }
    else if (message.includes('write a note')) {
        Speak('Sorry sir, I am not able to write a note');
    }
    else if (message.includes('open notepad')) {
        Speak('Sorry sir, I am not able to open notepad');
    }
    else if (message.includes('open word')) {
        Speak('Sorry sir, I am not able to open word');
    }
    else if (message.includes('open excel')) {
        Speak('Sorry sir, I am not able to open excel');
    }
    else if (message.includes('open powerpoint')) {
        Speak('Sorry sir, I am not able to open powerpoint');
    }
    else if (message.includes('open outlook')) {
        Speak('Sorry sir, I am not able to open outlook');
    }
    else if (message.includes('open teams')) {
        Speak('Sorry sir, I am not able to open teams');
    }
    else if (message.includes('open zoom')) {
        Speak('Sorry sir, I am not able to open zoom');
    }
    else if (message.includes('open skype')) {
        Speak('Sorry sir, I am not able to open skype');
    }
    else if (message.includes('open telegram')) {
        Speak('Sorry sir, I am not able to open telegram');
    }
    else if (message.includes('open discord')) {
        Speak('Sorry sir, I am not able to open discord');
    }
    else if (message.includes('open slack')) {
        Speak('Sorry sir, I am not able to open slack');
    }
    else if (message.includes('open trello')) {
        Speak('Sorry sir, I am not able to open trello');
    }
    else if (message.includes('open asana')) {
        Speak('Sorry sir, I am not able to open asana');
    }
    else if (message.includes('open google meet')) {
        Speak('Sorry sir, I am not able to open google meet');
    }
    else if (message.includes('open google classroom')) {
        Speak('Sorry sir, I am not able to open google classroom');
    }
    else if (message.includes('open google drive')) {
        Speak('Sorry sir, I am not able to open google drive');
    }
    else if (message.includes('open google docs')) {
        Speak('Sorry sir, I am not able to open google docs');
    }
    else if (message.includes('open google sheets')) {
        Speak('Sorry sir, I am not able to open google sheets');
    }
    else if (message.includes('open google slides')) {
        Speak('Sorry sir, I am not able to open google slides');
    }
    else if (message.includes('open google forms')) {
        Speak('Sorry sir, I am not able to open google forms');
    }
    else if (message.includes('open google keep')) {
        Speak('Sorry sir, I am not able to open google keep');
    }
    else if (message.includes('open google calendar')) {
        Speak('Sorry sir, I am not able to open google calendar');
    }
    else if (message.includes('open google photos')) {
        Speak('Sorry sir, I am not able to open google photos');
    }
    else if (message.includes('open google maps')) {
        Speak('Opening Google Maps');
        window.open('https://www.google.com/maps/');

    }
    else if (message.includes('open google translate')) {
        Speak('Opening Google Translate');
        window.open('https://translate.google.com/');
    }
    else if (message.includes('mean techmitra')|| message.includes('what is meaning techmitra')) {
        Speak('TechMitra is a combination of two words, Tech and Mitra. Tech means Technology and Mitra means Friend. So, TechMitra means Technology Friend');
    }
    else if (message.includes('open google earth')) {
        Speak('Opening Google Earth');
        window.open('https://earth.google.com/web/');
    }
    else if (message.includes('open google news')) {
        Speak('Opening Google News');
        window.open('https://news.google.com/');
    }
    else if (message.includes('open google books')) {
        Speak('Opening Google Books');
        window.open('https://books.google.com/');
    }



    // trading platforms-----------------------------------------------------------   




    else if (message.includes('open trading view')) {
        Speak('Opening Trading View');
        window.open('https://www.tradingview.com/');
    }
    else if (message.includes('open zerodha')) {
        Speak('Opening Zerodha');
        window.open('https://www.zerodha.com/');
    }
    else if (message.includes('open upstox')) {
        Speak('Opening Upstox');
        window.open('https://upstox.com/');
    }
    else if (message.includes('open angel broking')) {
        Speak('Opening Angel Broking');
        window.open('https://www.angelbroking.com/');
    }
    else if (message.includes('open icici direct')) {
        Speak('Opening ICICI Direct');
        window.open('https://www.icicidirect.com/');
    }
    else if (message.includes('open hdfc securities')) {
        Speak('Opening HDFC Securities');
        window.open('https://www.hdfcsec.com/');
    }
    else if (message.includes('open kotak securities')) {
        Speak('Opening Kotak Securities');
        window.open('https://www.kotaksecurities.com/');
    }
    else if (message.includes('open sharekhan')) {
        Speak('Opening Sharekhan');
        window.open('https://www.sharekhan.com/');
    }
    else if (message.includes('open motilal oswal')) {

        Speak('Opening Motilal Oswal');
        window.open('https://www.motilaloswal.com/');
    }
    else if (message.includes('open axis direct')) {
        Speak('Opening Axis Direct');
        window.open('https://www.axisdirect.co.in/');
    }
    else if (message.includes('open sbi securities')) {
        Speak('Opening SBI Securities');
        window.open('https://www.sbismart.com/');
    }
    else if (message.includes('open 5paisa')) {
        Speak('Opening 5paisa');
        window.open('https://www.5paisa.com/');
    }
    else if (message.includes('open edelweiss')) {
        Speak('Opening Edelweiss');
        window.open('https://www.edelweiss.in/');
    }
    else if (message.includes('open karvy')) {
        Speak('Opening Karvy');
        window.open('https://www.karvyonline.com/');
    }
    else if (message.includes('open geojit')) {
        Speak('Opening Geojit');
        window.open('https://www.geojit.com/');
    }
    else if (message.includes('open nirmal bang')) {
        Speak('Opening Nirmal Bang');
        window.open('https://www.nirmalbang.com/');
    }
    else if (message.includes('open anand rathi')) {
        Speak('Opening Anand Rathi');
        window.open('https://www.rathi.com/');
    }
    else if (message.includes('open reliance securities')) {
        Speak('Opening Reliance Securities');
        window.open('https://www.reliancesmartmoney.com/');
    }
    else if (message.includes('open aditya birla money')) {
        Speak('Opening Aditya Birla Money');
        window.open('https://www.adityabirlacapital.com/');
    }



    //social media-----------------------------------------------------------



    else if (message.includes('open twitter')) {
        Speak('Opening Twitter');
        window.open('https://www.twitter.com/');
    }
    else if (message.includes('open facebook')) {
        Speak('Opening Facebook');
        window.open('https://www.facebook.com/');
    }
    else if (message.includes('open instagram')) {
        Speak('Opening Instagram');
        window.open('https://www.instagram.com/');
    }
    else if (message.includes('open linkedin')) {
        Speak('Opening Linkedin');
        window.open('https://www.linkedin.com/');
    }
    else if (message.includes('open pinterest')) {
        Speak('Opening Pinterest');
        window.open('https://www.pinterest.com/');
    }
    else if (message.includes('open snapchat')) {
        Speak('Opening Snapchat');
        window.open('https://www.snapchat.com/');
    }
    else if (message.includes('open tumblr')) {
        Speak('Opening Tumblr');
        window.open('https://www.tumblr.com/');
    }
    else if (message.includes('open reddit')) {
        Speak('Opening Reddit');
        window.open('https://www.reddit.com/');
    }
    else if (message.includes('open tiktok')) {
        Speak('Opening Tiktok');
        window.open('https://www.tiktok.com/');
    }
    else if (message.includes('open youtube')) {
        Speak('Opening Youtube');
        window.open('https://www.youtube.com/');
    }
    else if (message.includes('open whatsapp')) {
        Speak('Opening Whatsapp');
        window.open('https://web.whatsapp.com/');
    }
    else if (message.includes('open telegram')) {
        Speak('Opening Telegram');
        window.open('https://web.telegram.com/');
    }
    else if (message.includes('open signal')) {
        Speak('Opening Signal');
        window.open('https://signal.org/');
    }
    else if (message.includes('open skype')) {
        Speak('Opening Skype');
        window.open('https://www.skype.com/');
    }
    else if (message.includes('open discord')) {
        Speak('Opening Discord');
        window.open('https://discord.com/');
    }
    else if (message.includes('open zoom')) {
        Speak('Opening Zoom');
        window.open('https://zoom.us/');
    }





    //entertainment-----------------------------------------------------------





    else if (message.includes('open netflix')) {
        Speak('Opening Netflix');
        window.open('https://www.netflix.com/');
    }
    else if (message.includes('open amazon prime')) {
        Speak('Opening Amazon Prime');
        window.open('https://www.primevideo.com/');
    }
    else if (message.includes('open hotstar')) {
        Speak('Opening Hotstar');
        window.open('https://www.hotstar.com/');
    }





    //news----------------------------------------------------------------






    else if (message.includes('open times of india')) {
        Speak('Opening Times of India');
        window.open('https://timesofindia.indiatimes.com/');
    }
    else if (message.includes('open the hindu')) {
        Speak('Opening The Hindu');
        window.open('https://www.thehindu.com/');
    }
    else if (message.includes('open indian express')) {
        Speak('Opening Indian Express');
        window.open('https://indianexpress.com/');
    }
    else if (message.includes('open news18')) {
        Speak('Opening News18');
        window.open('https://www.news18.com/');
    }
    else if (message.includes('open ndtv')) {
        Speak('Opening NDTV');
        window.open('https://www.ndtv.com/');
    }
    else if (message.includes('open aaj tak')) {
        Speak('Opening Aaj Tak');
        window.open('https://aajtak.intoday.in/');
    }
    else if (message.includes('open abp news')) {
        Speak('Opening ABP News');
        window.open('https://www.abplive.com/');
    }
    else if (message.includes('open zee news')) {
        Speak('Opening Zee News');
        window.open('https://zeenews.india.com/');
    }
    else if (message.includes('open republic tv')) {
        Speak('Opening Republic TV');
        window.open('https://www.republicworld.com/');
    }
    else if (message.includes('open india tv')) {
        Speak('Opening India TV');
        window.open('https://www.indiatvnews.com/');
    }
    else if (message.includes('open news nation')) {
        Speak('Opening News Nation');
        window.open('https://www.newsnationtv.com/');
    }
    else if (message.includes('open news24')) {
        Speak('Opening News24');
        window.open('https://www.news24online.com/');
    }
    else if (message.includes('open news9')) {
        Speak('Opening News9');
        window.open('https://www.news9live.com/');
    }
    else if (message.includes('open newsx')) {
        Speak('Opening NewsX');
        window.open('https://www.newsx.com/');
    }
    else if (message.includes('open india today')) {
        Speak('Opening India Today');
        window.open('https://www.indiatoday.in/');
    }
    else if (message.includes('open the print')) {

        Speak('Opening The Print');
        window.open('https://theprint.in/');
    }




    //technology-----------------------------------------------------------






    else if (message.includes('open techcrunch')) {
        Speak('Opening TechCrunch');
        window.open('https://techcrunch.com/');
    }
    else if (message.includes('open techradar')) {
        Speak('Opening TechRadar');
        window.open('https://www.techradar.com/');
    }
    else if (message.includes('open wired')) {
        Speak('Opening Wired');
        window.open('https://www.wired.com/');
    }
    else if (message.includes('open cnet')) {
        Speak('Opening CNET');
        window.open('https://www.cnet.com/');
    }
    else if (message.includes('open gizmodo')) {
        Speak('Opening Gizmodo');
        window.open('https://gizmodo.com/');
    }
    else if (message.includes('open the verge')) {
        Speak('Opening The Verge');
        window.open('https://www.theverge.com/');
    }
    else if (message.includes('open engadget')) {
        Speak('Opening Engadget');
        window.open('https://www.engadget.com/');
    }
    else if (message.includes('open ars technica')) {
        Speak('Opening Ars Technica');
        window.open('https://arstechnica.com/');
    }
    else if (message.includes('open digital trends')) {
        Speak('Opening Digital Trends');
        window.open('https://www.digitaltrends.com/');
    }
    else if (message.includes('open android authority')) {
        Speak('Opening Android Authority');
        window.open('https://www.androidauthority.com/');
    }
    else if (message.includes('open android central')) {
        Speak('Opening Android Central');
        window.open('https://www.androidcentral.com/');
    }
    else if (message.includes('open 9to5google')) {
        Speak('Opening 9to5Google');
        window.open('https://9to5google.com/');
    }
    else if (message.includes('open 9to5mac')) {
        Speak('Opening 9to5Mac');
        window.open('https://9to5mac.com/');
    }
    else if (message.includes('open macrumors')) {
        Speak('Opening MacRumors');
        window.open('https://www.macrumors.com/');
    }
    else if (message.includes('open appleinsider')) {
        Speak('Opening AppleInsider');
        window.open('https://appleinsider.com/');
    }




    //coding-----------------------------------------------------------





    else if (message.includes('open github')) {
        Speak('Opening Github');
        window.open('https://www.github.com/');
    }
    else if (message.includes('open stackoverflow')) {
        Speak('Opening Stack Overflow');
        window.open('https://stackoverflow.com/');
    }
    else if (message.includes('open geeksforgeeks')) {
        Speak('Opening GeeksforGeeks');
        window.open('https://www.geeksforgeeks.org/');
    }
    else if (message.includes('open hackerrank')) {
        Speak('Opening HackerRank');
        window.open('https://www.hackerrank.com/');
    }
    else if (message.includes('open hackerearth')) {
        Speak('Opening HackerEarth');
        window.open('https://www.hackerearth.com/');
    }
    else if (message.includes('open codechef')) {
        Speak('Opening CodeChef');
        window.open('https://www.codechef.com/');
    }
    else if (message.includes('open leetcode')) {
        Speak('Opening LeetCode');
        window.open('https://leetcode.com/');
    }
    else if (message.includes('open codeforces')) {
        Speak('Opening Codeforces');
        window.open('https://codeforces.com/');
    }
    else if (message.includes('open atcoder')) {
        Speak('Opening AtCoder');
        window.open('https://atcoder.jp/');
    }
    else if (message.includes('open topcoder')) {
        Speak('Opening TopCoder');
        window.open('https://www.topcoder.com/');
    }
    else if (message.includes('open spoj')) {
        Speak('Opening SPOJ');
        window.open('https://www.spoj.com/');
    }
    else if (message.includes('open interviewbit')) {
        Speak('Opening InterviewBit');
        window.open('https://www.interviewbit.com/');
    }
    else if (message.includes('open codecademy')) {
        Speak('Opening Codecademy');
        window.open('https://www.codecademy.com/');
    }
    else if (message.includes('open udemy')) {
        Speak('Opening Udemy');
        window.open('https://www.udemy.com/');
    }
    else if (message.includes('open coursera')) {
        Speak('Opening Coursera');
        window.open('https://www.coursera.org/');
    }
    else if (message.includes('open edx')) {
        Speak('Opening edX');
        window.open('https://www.edx.org/');
    }
    else if (message.includes('open khan academy')) {
        Speak('Opening Khan Academy');
        window.open('https://www.khanacademy.org/');
    }




    //music--------------------------------------------------------------------




    else if (message.includes('open spotify')) {
        Speak('Opening Spotify');
        window.open('https://www.spotify.com/');
    }
    else if (message.includes('open gaana')) {
        Speak('Opening Gaana');
        window.open('https://gaana.com/');
    }
    else if (message.includes('open jiosaavn')) {
        Speak('Opening JioSaavn');
        window.open('https://www.jiosaavn.com/');
    }
    else if (message.includes('open wynk music')) {
        Speak('Opening Wynk Music');
        window.open('https://wynk.in/music');
    }
    else if (message.includes('open hungama music')) {
        Speak('Opening Hungama Music');
        window.open('https://www.hungama.com/');
    }
    else if (message.includes('open apple music')) {
        Speak('Opening Apple Music');
        window.open('https://www.apple.com/in/music/');
    }
    else if (message.includes('open youtube music')) {
        Speak('Opening Youtube Music');
        window.open('https://music.youtube.com/');
    }
    else if (message.includes('open soundcloud')) {
        Speak('Opening SoundCloud');
        window.open('https://soundcloud.com/');
    }
    else if (message.includes('open bandcamp')) {
        Speak('Opening Bandcamp');
        window.open('https://bandcamp.com/');
    }




    //movies--------------------------------------------------------------------




    else if (message.includes('open imdb')) {
        Speak('Opening IMDb');
        window.open('https://www.imdb.com/');
    }
    else if (message.includes('open rotten tomatoes')) {
        Speak('Opening Rotten Tomatoes');
        window.open('https://www.rottentomatoes.com/');
    }
    else if (message.includes('open metacritic')) {
        Speak('Opening Metacritic');
        window.open('https://www.metacritic.com/');
    }
    else if (message.includes('open letterboxd')) {
        Speak('Opening Letterboxd');
        window.open('https://letterboxd.com/');
    }
    else if (message.includes('open box office mojo')) {
        Speak('Opening Box Office Mojo');
        window.open('https://www.boxofficemojo.com/');
    }
    else if (message.includes('open bollywood hungama')) {
        Speak('Opening Bollywood Hungama');
        window.open('https://www.bollywoodhungama.com/');
    }
    else if (message.includes('open filmfare')) {
        Speak('Opening Filmfare');
        window.open('https://www.filmfare.com/');
    }
    else if (message.includes('open koimoi')) {
        Speak('Opening Koimoi');
        window.open('https://www.koimoi.com/');
    }
    else if (message.includes('open bollywood life')) {
        Speak('Opening Bollywood Life');
        window.open('https://www.bollywoodlife.com/');
    }
    else if (message.includes('open pinkvilla')) {
        Speak('Opening Pinkvilla');
        window.open('https://www.pinkvilla.com/');
    }
    else if (message.includes('open filmibeat')) {

        Speak('Opening Filmibeat');
        window.open('https://www.filmibeat.com/');
    }
    else if (message.includes('open bollywood news')) {
        Speak('Opening Bollywood News');
        window.open('https://www.bollywoodnews.org/');
    }
    else if (message.includes('open bollywood hungama')) {
        Speak('Opening Bollywood Hungama');
        window.open('https://www.bollywoodhungama.com/');
    }
    else if (message.includes('open bollywood bubble')) {
        Speak('Opening Bollywood Bubble');
        window.open('https://www.bollywoodbubble.com/');
    }
    else if (message.includes('open bollywood masala')) {
        Speak('Opening Bollywood Masala');
        window.open('https://www.bollywoodmasala.com/');
    }
    else if (message.includes('open bollywood life')) {
        Speak('Opening Bollywood Life');
        window.open('https://www.bollywoodlife.com/');
    }
    else if (message.includes('open bollywood hungama')) {
        Speak('Opening Bollywood Hungama');
        window.open('https://www.bollywoodhungama.com/');
    }
    else if (message.includes('open bollywood news')) {
        Speak('Opening Bollywood News');
        window.open('https://www.bollywoodnews.org/');
    }







     //trading questions and answers--------------------------------------






    else if (message.includes('what is trading')) { 
        Speak('Trading is the act of buying and selling securities, currencies, or commodities with the aim of making a profit. It is done by conducting analysis of the market and making decisions based on that analysis.');
    }
    else if (message.includes('what is stock market')) {
        Speak('A stock market is a place where shares of publicly listed companies are traded. It is a market where shares of companies are bought and sold.');
    }
    else if (message.includes('what is share market')) {
        Speak('A share market is a place where shares of publicly listed companies are traded. It is a market where shares of companies are bought and sold.');
    }
    else if (message.includes('what is nifty')) {
        Speak('Nifty is the index of the National Stock Exchange of India. It is a benchmark index for the Indian equity market.');
    }
    else if (message.includes('what is sensex')) {
        Speak('Sensex is the index of the Bombay Stock Exchange. It is a benchmark index for the Indian equity market.');
    }
    else if (message.includes('what is intraday trading')) {
        Speak('Intraday trading is the buying and selling of securities on the same day. It is done to take advantage of short-term price movements in the market.');
    }
    else if (message.includes('what is delivery trading')) {
        Speak('Delivery trading is the buying and selling of securities with the intention of taking delivery of the securities. It is done with a long-term investment perspective.');
    }
    else if (message.includes('what is futures trading')) {
        Speak('Futures trading is the buying and selling of futures contracts. It is done to hedge against price fluctuations in the market.');
    }
    else if (message.includes('what is options trading')) {
        Speak('Options trading is the buying and selling of options contracts. It is done to take advantage of price movements in the market.');
    }
    else if (message.includes('what is commodity trading')) {
        Speak('Commodity trading is the buying and selling of commodities. It is done to take advantage of price movements in the commodity market.');
    }
    else if (message.includes('what is forex trading')) {
        Speak('Forex trading is the buying and selling of currencies. It is done to take advantage of price movements in the forex market.');
    }
    else if (message.includes('what is mutual fund')) {
        Speak('A mutual fund is a pool of funds collected from multiple investors to invest in securities such as stocks, bonds, and money market instruments.');
    }
    else if (message.includes('what is ipo')) {
        Speak('IPO stands for Initial Public Offering. It is the first time a company offers its shares to the public.');
    }
    else if (message.includes('what is dividend')) {
        Speak('A dividend is a payment made by a company to its shareholders out of its profits.');
    }
    else if (message.includes('what is bonus share')) {
        Speak('A bonus share is a free share given to existing shareholders of a company.');
    }
    else if (message.includes('what is split')) {
        Speak('A split is a corporate action in which a company divides its existing shares into multiple shares.');
    }
    else if (message.includes('what is buyback')) {

        Speak('A buyback is a corporate action in which a company buys back its own shares from the market.');
    }
    else if (message.includes('what is demat account')) {
        Speak('A demat account is an account that holds shares and securities in electronic form.');
    }



    

//normal search----------------------------------------------------------




    else if (message.includes('what is the time')) {
        let time = new Date();
        let current_time = time.toLocaleTimeString();
        Speak('The current time is ' + current_time);
    }
    else if (message.includes('what is the date')) {
        let date = new Date();
        let current_date = date.toLocaleDateString();
        Speak('The current date is ' + current_date);
    }
    else if (message.includes('open google')) {
        Speak('Opening Google');
        window.open('https://www.google.com/');
    }
    else if (message.includes('open youtube')) {
        Speak('Opening Youtube');
        window.open('https://www.youtube.com/');
    }
    else if (message.includes('open facebook')) {
        Speak('Opening Facebook');
        window.open('https://www.facebook.com/');
    }
    else if (message.includes('open instagram')) {
        Speak('Opening Instagram');
        window.open('https://www.instagram.com/');
    }
    else if (message.includes('open twitter')) {
        Speak('Opening Twitter');
        window.open('https://www.twitter.com/');
    }
    else if (message.includes('open whatsapp')) {
        Speak('Opening Whatsapp');
        window.open('https://web.whatsapp.com/');
    }
    else if (message.includes('open linkedin')) {
        Speak('Opening Linkedin');
        window.open('https://www.linkedin.com/');
    }
    else if (message.includes('open github')) {
        Speak('Opening Github');
        window.open('https://www.github.com/');
    }
    else if (message.includes('open amazon')) {
        Speak('Opening Amazon');
        window.open('https://www.amazon.com/');
    }
    else if (message.includes('open flipkart')) {
        Speak('Opening Flipkart');
        window.open('https://www.flipkart.com/');
    }
    else if (message.includes('open snapdeal')) {
        Speak('Opening Snapdeal');
        window.open('https://www.snapdeal.com/');
    }
    else if (message.includes('open myntra')) {
        Speak('Opening Myntra');
        window.open('https://www.myntra.com/');
    }
    else if (message.includes('open paytm')) {
        Speak('Opening Paytm');
        window.open('https://www.paytm.com/');
    }
    else if (message.includes('open netflix')) {
        Speak('Opening Netflix');
        window.open('https://www.netflix.com/');
    }
    else if (message.includes('open hotstar')) {
        Speak('Opening Hotstar');
        window.open('https://www.hotstar.com/');
    }
    else if (message.includes('open zee5')) {
        Speak('Opening Zee5');
        window.open('https://www.zee5.com/');
    }
    else if (message.includes('open sonyliv')) {
        Speak('Opening Sonyliv');
        window.open('https://www.sonyliv.com/');
    }
    else if (message.includes(' chat gpt')) {
        Speak('Opening chat gpt');
        window.open('https://openai.com/index/chatgpt/');
    }



    //desktop applications--------------------------------------------------------



    else if (message.includes('open calculator')) {
        Speak('Opening calculator');
        window.open('calculator://');
    }
    else if (message.includes('open whatsapp')) {
        Speak('Opening whatsapp');
        window.open('whatsapp://');
    }
    else if (message.includes('microsoft-edge')) {
        Speak('Opening microsoft-edge');
        window.open('microsoft-edge://');
    }
    else if (message.includes('open paint')) {
        Speak('Opening paint');
        window.open('mspaint://');
    }





// Search on internet--------------------------------------------------------------





    else {
        let finalText = message.replace('search', '')
            .replace('search for', '')
            .replace('search about', '')
            .replace('search on', '')
            .replace('search on internet', '')
            .replace('search on google', '')
            .replace('search on web', '')
            .replace('search on browser', '')
            .replace('search on chrome', '')
            .replace('search on firefox', '')
            .replace('search on edge', '')
            .replace('search on opera', '')
            .replace('search on safari', '')
            .replace('Yanthra', '')
            .replace('yantra', '')
            .replace('search me', '')
            .replace('open', '')
            .replace('yantra', '')
            .replace('can i know about', '');
        Speak(`This is what i found on internet regarding ${finalText}`);
        window.open(`https://www.google.com/search?q=${finalText}`);
    }

}