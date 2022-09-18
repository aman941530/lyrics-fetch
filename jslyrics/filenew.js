let movielist = document.querySelector(".movielist");

let songlist = document.querySelector(".songlist");

let song1 = document.createElement("option");
song1.textContent = "kabira";
song1.classList.add("kabira");

let song2 = document.createElement("option");
song2.textContent = "dilli wali girlfriend";
song2.classList.add("dilli-wali-girlfriend");
let song3 = document.createElement("option");
song3.textContent = "malang";
song3.classList.add("malang");
let song4 = document.createElement("option");
song4.textContent = "humraah";
song4.classList.add("humraah");
let song5 = document.createElement("option");
song5.textContent = "tum hi ho";
song5.classList.add("tum-hi-ho");
let song6 = document.createElement("option");
song6.textContent = "bhula dena";
song6.classList.add("bhula-dena");



movielist.addEventListener("click", addsonglist);
function addsonglist(e) {
  songlist.innerHTML = "";

  if (movielist.value == "yehjawanihaidiwani") {
    songlist.appendChild(song1);
    songlist.appendChild(song2);
  } else if (movielist.value == "malang") {
    songlist.appendChild(song3);
    songlist.appendChild(song4);
  } else if (movielist.value == "ashiqui2") {
    songlist.appendChild(song5);
    songlist.appendChild(song6);
  }
}

let lyricsbtn = document.querySelector("#getlyricsbtn");

lyricsbtn.addEventListener("click", getlyrics);

function getlyrics() {
  if (songlist.value == "kabira") {
    document.querySelector(".printedlyrics").innerText =
      "Kaisi teri khudgarzi \n Na dhoop chune na chhanv\nKaise teri khudgarzi\n Kisi thaur tike na paanv\n Kaisi teri khudgarzi\nNa dhoop chune na chhanv\n Kaise teri khudgarzi\n \n Kisi thaur tike na paanv\nBan liya apna paigambar\n Tair liyaa saat samandar\n Phir bhi sooukha man ke andar\nKyon rahega..\nReKabira maan jaa\nRe fakeera maan jaa\nAaja tujhko pukaarein\nTeri parchhaiyaan\nReKabira maan ja\nRe fakeera maan ja\nAisa tu hai mere mohi kaisa\nHarjaaiyaa..\n\nTuti chaarpaai mohi\nThandi purvaai rasta dekhe\nDoodhoon ki malaai mohi\nMitti ki suraahi rasta dekhe";
  }
  if (songlist.value == "dilli wali girlfriend") {
    document.querySelector(".printedlyrics").innerText =
      "Tere liye hi toh signal tod taad ke\nAaya dilliwali girlfriend chhod chhad ke\nTere liye hi toh signal tod taad ke\nAaya dilliwali girlfriend chhod chhad ke\nO teri ankh da ishaara mujhe fraud lage\nTu toh Majnu aawaara by God lage\nO kasme waade khake\nApni pocket money bacha ke\nAaya tere liye paise waise jod jaad ke…\nGhar waalon ko bhi bye-shye bol baal ke\nAaya dilliwali girlfriend chhod chhad ke\nTere liye hi toh signal tod taad ke\nAaya Dilli wali girlfriend chhod chhad ke\nTeri galli mein bhi aana start kar diya\nIk tere naam apna heart kar diya\nKarne laga aankh matakka\nAb toh aashiq ban gaya pakka\nAaj abhi maine tera boycott kar diya\nTeri saari harqatein main toh note karu\nTujhe thaane mein le jaake main report karu oye\nTu na kar aise fight\nTera mood main karu light\nTujhe scene mein dikha ke film Golmaal ke…\nNaam tera hi likhaya maine wedding card pe\nAaya dilliwali girlfriend chhod chhad ke\nTere liye hi toh signal tod taad ke\nAaya dilliwali girlfriend chhod chhad ke\nYeh to ishq mein dekho badtameez ho gaya\nBina baat ke hi mujh pe ye freeze ho gaya\nRefuse kiya sau baari\nPhir bhi karna chahe yaari\nPassion tere liye mera increase ho gaya\nTu hi day lage\nMujhe meri night lage\nMujhe future mera tere sang bright lage\nTujh se bhi zyada shona\nKoi handsome munda hona\nLeke jayega sone mein tol tal ke Oye…\nO tere liye aaj gaddi main toh mod-maad ke\nAaya dilliwali girlfriend chhod chaad ke\nChal jhutta… mere liye signal tod taad ke\nAaya dilliwali girlfriend chhod chhad ke\nGhar waalon ko bhi bye-shye bol baal ke\nAaya dilliwaali girlfriend chhod chhad ke\nTere liye hi toh signal tod taad ke\nAaya dilliwaali girlfriend chhod chhad ke\n";
  }
  if (songlist.value == "malang") {
    document.querySelector(".printedlyrics").innerText =
      "Kaafira Toh Chal Diya Iss Safar Ke Sang\nKaafira Toh Chal Diya Iss Safar Ke Sang\nManzilein Na Dor Koyi Leke Apna Rang\nRahun Main Malang, Malang, Malang\nRahun Main Malang, Malang, Malang\nRahun Main Malang, Malang, Malang\nMain Malang Haye Re\nMain Bairagi Sa Jeeu Ye Bhatakta Mann\nMain Bairagi Sa Jeeu Ye Bhatakta Mann\nAb Kahan Le Jayega Ye Awarapan\nRahun Main Malang, Malang, Malang\nRahun Main Malang, Malang, Malang\nRahun Main Malang, Malang, Malang\nMain Malang, Haye Re\nHai Nasibon Mein Safar Toh\nMain Kahi Bhi Kyun Rukun\nOh Ho Oh\nHai Nasibon Mein Safar Toh\nMain Kahi Bhi Kyun Rukun\nChodke Aaya Kinare\nBeh Saku Jitna Bahun\nDin Guzarte Hi Rahe\nYun Hi Be-Mausam\nRaaste Tham Jaye Par\nRuk Na Paye Hum\nRahun Main Malang, Malang, Malang\nRahun Main Malang, Malang, Malang\nRahun Main Malang, Malang, Malang\nMain Malang Haye Re\nRubaru Khud Se Huya Hu\nMujhe Mein Mujhko Tu Mila\nOh Ho Oh\nRubaru Khudse Huwa Hu\nMujhe Mein Mujhko Tu Mila\nBadalo Ke Iss Jahan Mein\nAasmaan Tujhme Mila\nPighli Hai Ab Raat Bhi\nHai Sehar Bhi Ye Nam\nNaa Khuda Main To Raha\nBan Gaya Tu Dharam\nRahun Main Malang, Malang, Malang\nRahun Main Malang, Malang, Malang\n";
  }
  if (songlist.value == "humraah") {
    document.querySelector(".printedlyrics").innerText =
      "Dil Ko Jaane Kya Hua Hai\nMilke Apna Sa Tu Laga\nKaise Main Karun Bayaan\nTumse Ye Junoon Hai Ya Gumaan\nAise Mujhe Tum Mile Tum Mile\nJaise Koyi Din Khile Din Khile\nJaane Kahan Hum Chale Hum Chale\nChahe Jo Bhi Dil Kare\nJis Raah Jis Raah Bhi Jaaun\nTujhko Tukho Hi Chaahun\nHumrah Abse Mera Tu\nHumraah Main Bhi Tera Hu\nJis Raah Jis Raah Bhi Jaaun\nTujhko Tukho Hi Chaahun\nHumrah Abse Mera Tu\nHumraah Main Bhi Tera Hu\nEhshaan Mand Hai Dil Ab Se Tera\nYe Fraz Kaisa Hai Kya Naam Du Bata\nKoyi Jaane Na Dusra\nSamjhe Tuhi Meri Zubaan\nMaine Mujh Sa Deewanapan\nHo Ho Oh Dekha\nNa Kahin Tere Siva\nTujhse Hi Din Shuru Shaamein Dhale\nAb Toh Nazar Se Bhi Na Tu Hate\nJitni Hai Fursatein Fursatein\nDe Du Saari Main Tujhe Tu Mujhe\nJis Raah Jis Raah Bhi Jaaun\nTujhko Tukho Hi Chaahun\nHumrah Abse Mera Tu\nHumraah Main Bhi Tera Hu\nJis Raah Jis Raah Bhi Jaaun\nTujhko Tukho Hi Chaahun\nHumrah Abse Mera Tu\nHumraah Main Bhi Tera Hu\nEhshaan Mand Hai Dil Ab Se Tera\nYe Fraz Kaisa Hai Kya Naam Du Bata\nGhar Ki Diwaarein Tuti Hai\nDil Ka Jahan Dikha Hai\nAankhon Ne Aaj Dekha Khaawon Ka Aasman Hai\nTera Karta Hu Shukriyan\nJis Raah Jis Raah Bhi Jaaun\nTujhko Tukho Hi Chaahun\nHumrah Abse Mera Tu\nHumraah Main Bhi Tera Hu\nJis Raah Jis Raah Bhi Jaaun\nTujhko Tukho Hi Chaahun\nHumrah Abse Mera Tu\nHumraah Main Bhi Tera Hu\n";
  }
  if (songlist.value == "tum hi ho") {
    document.querySelector(".printedlyrics").innerText =
      "Hum Tere Bin Ab Reh Nahi Sakte\nTere Bina Kya Wajood Mera\nHum Tere Bin Ab Reh Nahi Sakte\nTere Bina Kya Wajood Mera\nTujhse Juda Agar Ho Jayenge\nToh Khud Se Hi Ho Jayenge Judaa\nKyunki Tum Hi Ho, Ab Tum Hi Ho\nZindagi Ab Tum Hi Ho\nChain Bhi, Mera Dard Bhi\nMeri Aashiqui Ab Tum Hi Ho\nTera Mera Rishta Hai Kaisa\nIk Pal Door Gawara Nahi\nTere Liye Har Roj Hai Jeete\nTujhko Diya Mera Wakt Sabhi\nKoyi Lamha Mera Na Ho Tere Bina\nHar Saans Pe Naam Tera\nKyunki Tum Hi Ho, Ab Tum Hi Ho\nZindagi Ab Tum Hi Ho\nChain Bhi, Mera Dard Bhi\nMeri Aashiqui Ab Tum Hi Ho\nTumhi Ho, Tumhi Ho\nTere Liye Hi Jiya Main\nKhud Ko Jo Yun De Diya Hai\nTeri Wafa Ne Mujhko Sambhala\nSaare Ghamon Ko Dil Se Nikala\nTere Sath Mera Hai Naseeb Juda\nTujhe Paake Adhoora Na Raha Hmmm..\nKyunki Tum Hi Ho, Ab Tum Hi Ho\nZindagi Ab Tum Hi Ho\nChain Bhi, Mera Dard Bhi\nMeri Aashiqui Ab Tum Hi Ho\n";
  }
  if (songlist.value == "bhula dena") {
    document.querySelector(".printedlyrics").innerText =
      "Bhula dena mujhe\nHai alvida tujhe\nTujhe jeena hai mere bina\nSafar yeh hai tera\nYeh raasta tera\nTujhe jeena hai.. mere bina\nHo teri saari shoharatein\nHai yeh duaa..\nTujhi pe saari rehamatein\nHai yeh duaa..\nTujhe jeena hai mere bina\nBhula dena mujhe\nHai alvida tujhe\nTujhe jeena hai mere bina\nTu hi hai kinaara tera\nTu hi to sahaara tera\nTu hi hai taraana kal ka\nTu hi to fasaana kal ka\nKhud pe yaqeen tu karna\Ban.na tu apna khuda… (x2)\nKhizaan ki shaam hoon main (khiza: Autumn)\nTu hai nayi subah\nTujhe jeena hai mere bina\nTujhe jeena hai mere bina\nKhilengi jahaan.. bahaarein sabhi\nMujhe tu wahaan.. paayega\nRahengi jahaan.. humaari wafa\nMujhe tu wahaan.. paayega\nMilunga main iss tarah, waada raha\nRahunga sang main sada, waada raha\nTujhe jeena hai mere bina!";
  }
}
