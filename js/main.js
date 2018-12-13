console.log("connected");

// ***********************************************
// ***********************************************
// BAR DATA
// ***********************************************
// ***********************************************

// Bar Data
var bars = [{
	//Amelia Shaw 
	//Pub Details
	name: "Amelia Shaw",
	address: "280 Sydney Rd, Brunswick VIC 3056",
	phone: "0412 907 847",
	webURL: "http://www.ameliashawbar.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.804799112388!2d144.95942131491447!3d-37.77117497976008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6434b36047a67%3A0x893e62d12493cd64!2sAmelia+Shaw+Bar!5e0!3m2!1sen!2sau!4v1539475524017",
	//Crowd
	alternativeHipsters: true,
	workers: false,
	families: false,
	students: true,
	olderCrowd: false,
	//Drinks
	pubStandards: false,
	craftBeer: false,
	cocktails: true,
	wine: false,
	spirits: true,
	//Food
	pubGrub: false,
	somethingFancy: true,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: false,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: true,
}, {
	//Bar Ousso 
	//Pub Details
	name: "Bar Oussou",
	address: "653 Sydney Rd, Victoria VIC 3056",
	phone: "(03) 9384 3040",
	webURL: "http://www.baroussou.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.2049214726026!2d144.96049231491423!3d-37.761792979761815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6435368d3932f%3A0x8e2f6ed723547b9f!2sBar+Oussou!5e0!3m2!1sen!2sau!4v1539475938307",
	//Crowd
	alternativeHipsters: true,
	workers: false,
	families: false,
	students: true,
	olderCrowd: false,
	//Drinks
	pubStandards: false,
	craftBeer: true,
	cocktails: true,
	wine: true,
	spirits: false,
	//Food
	pubGrub: false,
	somethingFancy: true,
	veganOptions: false,
	worldFood: true,
	otherFood: false,
	//Entertainment
	liveMusic: true,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: false,
}, {
	//Browns Corner Hotel 
	//Pub Details
	name: "Browns Corner Hotel",
	address: "502 Sydney Rd, Coburg VIC 3058",
	phone: "(03) 9354 1177",
	webURL: "http://www.brownscornerhotel.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.067698539005!2d144.96467331491354!3d-37.74155597976562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad644b68055887d%3A0x284c5f45630bc5de!2sBrowns+Corner+Hotel!5e0!3m2!1sen!2sau!4v1539476160250",
	//Crowd
	alternativeHipsters: false,
	workers: true,
	families: false,
	students: false,
	olderCrowd: true,
	//Drinks
	pubStandards: true,
	craftBeer: false,
	cocktails: false,
	wine: false,
	spirits: false,
	//Food
	pubGrub: true,
	somethingFancy: false,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: false,
	sports: true,
	gamingBetting: true,
	djs: false,
	otherEnt: false,
}, {
	//Coburg RSL 
	//Pub Details
	name: "Coburg RSL",
	address: "323 Sydney Rd, Coburg VIC 3058",
	phone: "(03) 9386 2171",
	webURL: "http://www.rslvic.com.au/rsl-network/victorian-map-of-all-branches/coburg/",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.8794534084395!2d144.9630807149136!3d-37.745972179764735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad644b233bf4bff%3A0xc90d76872f28771c!2sCoburg+RSL+Club!5e0!3m2!1sen!2sau!4v1539476205455",
	//Crowd
	alternativeHipsters: false,
	workers: true,
	families: true,
	students: false,
	olderCrowd: true,
	//Drinks
	pubStandards: true,
	craftBeer: true,
	cocktails: false,
	wine: false,
	spirits: true,
	//Food
	pubGrub: false,
	somethingFancy: false,
	veganOptions: false,
	worldFood: false,
	otherFood: true,
	//Entertainment
	liveMusic: true,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: false,
}, {
	//Duke of Edinburgh Hotel 
	//Pub Details
	name: "Duke of Edinburgh Hotel",
	address: "430 Sydney Rd, Brunswick VIC 3056",
	phone: "(03) 9380 1771",
	webURL: "http://www.dukeofedinburghhotel.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.945034949721!2d144.9601233149144!3d-37.76788697976066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6434d20979f13%3A0x9fe77de4a76bbb01!2sDuke+of+Edinburgh+Hotel!5e0!3m2!1sen!2sau!4v1539476279817",
	//Crowd
	alternativeHipsters: false,
	workers: true,
	families: false,
	students: false,
	olderCrowd: true,
	//Drinks
	pubStandards: true,
	craftBeer: false,
	cocktails: false,
	wine: false,
	spirits: false,
	//Food
	pubGrub: true,
	somethingFancy: false,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: false,
	sports: true,
	gamingBetting: true,
	djs: false,
	otherEnt: false,
}, {
	//Edinburgh Castle Hotel 
	//Pub Details
	name: "Edinburgh Castle Hotel",
	address: "681 Sydney Rd, Brunswick VIC 3056",
	phone: "(03) 9386 7580",
	webURL: "http://www.edinburghcastle.net.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.242421678572!2d144.96082781491413!3d-37.760913579762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad643549db1580b%3A0xd3a782bbd012ba1c!2sEdinburgh+Castle+Hotel!5e0!3m2!1sen!2sau!4v1539476330711",
	//Crowd
	alternativeHipsters: true,
	workers: false,
	families: true,
	students: true,
	olderCrowd: false,
	//Drinks
	pubStandards: false,
	craftBeer: true,
	cocktails: false,
	wine: true,
	spirits: false,
	//Food
	pubGrub: true,
	somethingFancy: false,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: true,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: false,
}, {
	//Joey Smalls 
	//Pub Details
	name: "Joey Smalls",
	address: "284 Sydney Rd, Brunswick VIC 3056",
	phone: "0421 400 990",
	webURL: "http://www.joeysmalls.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.808744453567!2d144.95951551491447!3d-37.771082479760146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6434b49e14c19%3A0xc9ca0f779b56ff13!2sJoey+Smalls!5e0!3m2!1sen!2sau!4v1539476363605",
	//Crowd
	alternativeHipsters: true,
	workers: false,
	families: false,
	students: true,
	olderCrowd: false,
	//Drinks
	pubStandards: false,
	craftBeer: true,
	cocktails: true,
	wine: false,
	spirits: false,
	//Food
	pubGrub: false,
	somethingFancy: true,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: false,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: true,
}, {
	//Little Mess 
	//Pub Details
	name: "Little Mess",
	address: "408 Sydney Rd, Brunswick VIC 3056",
	phone: "(03) 9388 0297",
	web: "https://thebrunswickmesshall.com.au/little-mess/",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9218762801756!2d144.96003631491445!3d-37.768429979760604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6434cdca72f63%3A0x3c7d72ede86c8852!2sLittle+Mess!5e0!3m2!1sen!2sau!4v1539476403156",
	//Crowd
	alternativeHipsters: true,
	workers: false,
	families: false,
	students: true,
	olderCrowd: false,
	//Drinks
	pubStandards: false,
	craftBeer: true,
	cocktails: true,
	wine: false,
	spirits: true,
	//Food
	pubGrub: false,
	somethingFancy: true,
	veganOptions: false,
	worldFood: true,
	otherFood: false,
	//Entertainment
	liveMusic: false,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: true,
}, {
	//Miss Moses
	//Pub Details
	name: "Miss Moses",
	address: "581 Sydney Rd, Brunswick VIC 3056",
	phone: "(03) 9041 9548",
	webURL: "http://www.missmoses.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.130690706908!2d144.96036061491426!3d-37.763533679761444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64352de26d609%3A0x48384c8253bc771a!2sMiss+Moses!5e0!3m2!1sen!2sau!4v1539476487238",
	//Crowd
	alternativeHipsters: true,
	workers: false,
	families: false,
	students: true,
	olderCrowd: false,
	//Drinks
	pubStandards: false,
	craftBeer: true,
	cocktails: true,
	wine: true,
	spirits: false,
	//Food
	pubGrub: true,
	somethingFancy: true,
	veganOptions: true,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: false,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: true,
}, {
	//Retreat Hotel
	//Pub Details
	name: "Retreat Hotel",
	address: "280 Sydney Rd, Brunswick VIC 3056",
	phone: "(03) 9380 4090",
	webURL: "http://www.retreathotelbrunswick.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.805920869692!2d144.95940621491454!3d-37.77114867976004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6434b49e2da1d%3A0xd94d02f0616f2672!2sRetreat+Hotel!5e0!3m2!1sen!2sau!4v1539476530303",
	//Crowd
	alternativeHipsters: true,
	workers: true,
	families: false,
	students: true,
	olderCrowd: false,
	//Drinks
	pubStandards: true,
	craftBeer: true,
	cocktails: true,
	wine: false,
	spirits: false,
	//Food
	pubGrub: true,
	somethingFancy: false,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: true,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: false,
}, {
	//The Brunswick Club
	//Pub Details
	name: "The Brunswick Club",
	address: "203 Sydney Rd, Brunswick VIC 3056",
	phone: "(03) 9380 5144",
	webURL: "http://www.brunswickclub.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.743318971661!2d144.9588564149145!3d-37.77261637975985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65cb52ce79b47%3A0x963c4675eb4e6a56!2sThe+Brunswick+Club!5e0!3m2!1sen!2sau!4v1539476824841",
	//Crowd
	alternativeHipsters: false,
	workers: true,
	families: false,
	students: false,
	olderCrowd: true,
	//Drinks
	pubStandards: true,
	craftBeer: false,
	cocktails: false,
	wine: false,
	spirits: false,
	//Food
	pubGrub: true,
	somethingFancy: false,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: false,
	sports: true,
	gamingBetting: true,
	djs: false,
	otherEnt: false,
}, {
	//The Brunswick Green
	//Pub Details
	name: "The Brunswick Green",
	address: "313 Sydney Rd, Brunswick VIC 3056",
	phone: "(03) 9381 2413",
	webURL: "http://www.thebrunswickgreen.com",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.848875570479!2d144.95921531491442!3d-37.77014157976035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6434b569d6fd1%3A0xd206e1838d50c5cb!2sThe+Brunswick+Green!5e0!3m2!1sen!2sau!4v1539476861406",
	//Crowd
	alternativeHipsters: true,
	workers: false,
	families: false,
	students: true,
	olderCrowd: true,
	//Drinks
	pubStandards: false,
	craftBeer: true,
	cocktails: true,
	wine: true,
	spirits: true,
	//Food
	pubGrub: true,
	somethingFancy: false,
	veganOptions: true,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: true,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: false,
}, {
	//The Cornish Arms Hotel
	//Pub Details
	name: "The Cornish Arms Hotel",
	address: "203 Sydney Rd, Brunswick VIC 3056",
	phone: "(03) 9380 8383",
	webURL: "http://www.cornisharms.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7098567963976!2d144.9585338149146!3d-37.77340087975972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65cb54bb80947%3A0x21c38bc81cb607b1!2sThe+Cornish+Arms+Hotel!5e0!3m2!1sen!2sau!4v1539476904124",
	//Crowd
	alternativeHipsters: true,
	workers: false,
	families: false,
	students: true,
	olderCrowd: false,
	//Drinks
	pubStandards: true,
	craftBeer: true,
	cocktails: true,
	wine: false,
	spirits: false,
	//Food
	pubGrub: true,
	somethingFancy: false,
	veganOptions: true,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: false,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: true,
}, {
	//The Moreland Hotel
	//Pub Details
	name: "The Moreland Hotel",
	address: "Corner of Sydney Road and Moreland Road",
	phone: "(03) 9386 3748",
	webURL: "http://www.morelandhotel.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.4631819335864!2d144.96205541491403!3d-37.755736279762914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad644aa5f75f9e9%3A0xcf4aa2ef551aa43c!2sMoreland+Hotel!5e0!3m2!1sen!2sau!4v1539476940913",
	//Crowd
	alternativeHipsters: false,
	workers: true,
	families: true,
	students: false,
	olderCrowd: true,
	//Drinks
	pubStandards: true,
	craftBeer: false,
	cocktails: false,
	wine: false,
	spirits: false,
	//Food
	pubGrub: true,
	somethingFancy: false,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: false,
	sports: true,
	gamingBetting: true,
	djs: false,
	otherEnt: false,
}, {
	//The Penny Black
	//Pub Details
	name: "The Penny Black",
	address: "420 Sydney Rd, Brunswick VIC 3056",
	phone: "(03) 9380 8667",
	webURL: "http://www.thepennyblack.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9386802048743!2d144.95993031491437!3d-37.76803597976076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6434cd919aa59%3A0xead6fa6edcc6be19!2sThe+Penny+Black!5e0!3m2!1sen!2sau!4v1539477044023",
	//Crowd
	alternativeHipsters: false,
	workers: false,
	families: false,
	students: true,
	olderCrowd: false,
	//Drinks
	pubStandards: false,
	craftBeer: true,
	cocktails: true,
	wine: true,
	spirits: false,
	//Food
	pubGrub: true,
	somethingFancy: true,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: true,
	sports: false,
	gamingBetting: false,
	djs: true,
	otherEnt: true,
}, {
	//The Post Office Hotel
	//Pub Details
	name: "The Post Office Hotel",
	address: "229-231 Sydney Rd, Coburg VIC 3058",
	phone: "(03) 9386 5300",
	webURL: "http://www.thepostofficehotel.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.75730271929!2d144.96273781491377!3d-37.74883757976415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad644b3e62d18e7%3A0x58c0b5cf46aef982!2sThe+Post+Office+Hotel+Pub+%26+Dining+Hall!5e0!3m2!1sen!2sau!4v1539477257580",
	//Crowd
	alternativeHipsters: true,
	workers: false,
	families: true,
	students: false,
	olderCrowd: false,
	//Drinks
	pubStandards: false,
	craftBeer: true,
	cocktails: true,
	wine: true,
	spirits: true,
	//Food
	pubGrub: true,
	somethingFancy: true,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: true,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: true,
}, {
	//The Snug Public House
	//Pub Details
	name: "The Snug Public House",
	address: "68 Sydney Rd, Brunswick VIC 3056",
	phone: "(03) 9388 8756",
	webURL: "http://www.thepostofficehotel.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.58693527756!2d144.95858351491466!3d-37.77628257975914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64352de8f00ad%3A0x68209dc17f3741bc!2sThe+Snug+Public+House!5e0!3m2!1sen!2sau!4v1539477284965",
	//Crowd
	alternativeHipsters: false,
	workers: true,
	families: false,
	students: true,
	olderCrowd: false,
	//Drinks
	pubStandards: true,
	craftBeer: false,
	cocktails: false,
	wine: true,
	spirits: true,
	//Food
	pubGrub: true,
	somethingFancy: false,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: false,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: true,
}, {
	//The Spotted Mallard
	//Pub Details
	name: "The Spotted Mallard",
	address: "314 Sydney Rd, Brunswick VIC 3056",
	phone: "(03) 9380 8818",
	webURL: "http://www.spottedmallard.com",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8373767211656!2d144.95953261491442!3d-37.77041117976023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6434b513c68a7%3A0xcc97f43a651f5c88!2sSpotted+Mallard!5e0!3m2!1sen!2sau!4v1539476674264",
	//Crowd
	alternativeHipsters: true,
	workers: false,
	families: false,
	students: false,
	olderCrowd: true,
	//Drinks
	pubStandards: false,
	craftBeer: true,
	cocktails: true,
	wine: true,
	spirits: false,
	//Food
	pubGrub: true,
	somethingFancy: true,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: true,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: true,
}, {
	//The Woodlands Hotel
	//Pub Details
	name: "The Woodlands Hotel",
	address: "84-88 Sydney Rd, Coburg VIC 3058",
	phone: "(03) 9384 1122",
	webURL: "http://www.thewoodlandshotel.com.au",
	mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.5834927407486!2d144.9625800149139!3d-37.75291447976345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad644ab8f91f475%3A0x71f4fd5cfab6f8ae!2sThe+Woodlands+Hotel!5e0!3m2!1sen!2sau!4v1539477330175",
	//Crowd
	alternativeHipsters: true,
	workers: false,
	families: true,
	students: false,
	olderCrowd: false,
	//Drinks
	pubStandards: false,
	craftBeer: true,
	cocktails: false,
	wine: true,
	spirits: true,
	//Food
	pubGrub: true,
	somethingFancy: true,
	veganOptions: false,
	worldFood: false,
	otherFood: false,
	//Entertainment
	liveMusic: false,
	sports: false,
	gamingBetting: false,
	djs: false,
	otherEnt: true,
}
];

// ***********************************************
// ***********************************************
// SEARCH FUNCTIONALITY
// ***********************************************
// ***********************************************

//Read users chosen search criteria
$("#form-search").click(function(event) {
	event.preventDefault();
	//Page transitions and appearance
	$(".results-bar-list").empty();
	$(".search-nav").slideUp();
	$(".home").slideUp();
	$(".search-no-selection").removeClass("hide");
	$(".individual-details").addClass("hide");
	if ($("body").width() > 600) {
		$(".search").css("display", "flex");
	} else {
		$(".search").css("display", "block").css("height", "100%");
		$(".search-no-selection").css("background-color", "transparent")
	}
	

	//Declare variable containing search filters
	var searchFilters = ['alternativeHipsters', 'workers', 'families', 'students', 'olderCrowd', 'pubStandards', 'craftBeer', 'cocktails', 'wine', 'spirits', 'pubGrub', 'somethingFancy', 'veganOptions', 'worldFood', 'otherFood', 'liveMusic', 'sports', 'gamingBetting', 'djs', 'otherEnt', ];
	

	// Declare user selection variable
	var userSelection = searchFilters.filter(function(searchFilter) {
		return $('input[name=' + searchFilter + ']').prop('checked');
	})

	// Filter results based on user input
	var barResults = bars.filter(function(bar) {
		return userSelection.every(function(selection) {
			return bar[selection]
		})
	})


	//Clear/reset checkboxes after search & filter button is pressed
	$( 'input[type="checkbox"]' ).prop('checked', false);


	//Loop through search results
	Object.keys(barResults).forEach(function(key) {

		//Get key value of name, address, website, phone and map
		var barName = barResults[key]["name"];
		var barAddress = barResults[key]["address"];
		var barWebsite = barResults[key]["webURL"];
		var barPhone = barResults[key]["phone"];
		var barMapEmbed = barResults[key]["mapURL"];


		// Declare variable barListing which contains a div with ID result-item
		var barListing = $(" <div> ").attr("id", "result-item");


		//Append individual bar details #result-item div
		barListing.append("<h3>" + barName + "</h3>" + barAddress + "<br><a href='#' class='read-more'>Read More</a>");


		//Populate results bar with search results
		$(".results-bar-list").append(barListing);


		//Load Chosen bar into main page
		barListing.click(function() {

			//Hide search landing page and show individual listing
			$(".search-no-selection").addClass("hide");
			$(".individual-details").removeClass("hide");

			//Fill in bar contact details
			$(".info-name").text(barName);
			$(".barAddressHolder").text(barAddress);
			$(".barWebsiteHolder").html("<a target='_blank' href='" + barWebsite + "'>Visit Website</a>");
			$(".barPhoneHolder").text(barPhone);
			$(".pub-map").html("<iframe src='" + barMapEmbed + "' frameborder='0' style='border:0' allowfullscreen></iframe>");

			// Empty existing bar qualities in details section
			$(".barCrowdHolder").empty();
			$(".barCrowdHolder").empty();
			$(".barDrinksHolder").empty();
			$(".barFoodHolder").empty();
			$(".barEntertainmentHolder").empty();

			//Append bar qualities
			// Bar Crowd
			if (barResults[key]["alternativeHipsters"] === true) {
				$(".barCrowdHolder").append(" <li>Alternative & hipster crowd</li>");
			}
			if (barResults[key]["workers"] === true) {
				$(".barCrowdHolder").append(" <li>Workers</li>");
			}
			if (barResults[key]["families"] === true) {
				$(".barCrowdHolder").append(" <li>Families</li>");
			}
			if (barResults[key]["students"] === true) {
				$(".barCrowdHolder").append(" <li>Students</li>");
			}
			if (barResults[key]["olderCrowd"] === true) {
				$(".barCrowdHolder").append(" <li>Older crowd</li>");
			}
			// Bar Drinks
			if (barResults[key]["pubStandards"] === true) {
				$(".barDrinksHolder").append(" <li>Pub Standards</li>");
			}
			if (barResults[key]["craftBeer"] === true) {
				$(".barDrinksHolder").append(" <li>Craft Beer</li>");
			}
			if (barResults[key]["cocktails"] === true) {
				$(".barDrinksHolder").append(" <li>Cocktails</li>");
			}
			if (barResults[key]["wine"] === true) {
				$(".barDrinksHolder").append(" <li>Wine</li>");
			}
			if (barResults[key]["spirits"] === true) {
				$(".barDrinksHolder").append(" <li>Whiskey & Spirits</li>");
			}
			// Bar Food
			if (barResults[key]["pubGrub"] === true) {
				$(".barFoodHolder").append(" <li>Classic Pub Grub</li>");
			}
			if (barResults[key]["somethingFancy"] === true) {
				$(".barFoodHolder").append(" <li>Something Fancy</li>");
			}
			if (barResults[key]["veganOptions"] === true) {
				$(".barFoodHolder").append(" <li>Vegan Options</li>");
			}
			if (barResults[key]["worldFood"] === true) {
				$(".barFoodHolder").append(" <li>World Food</li>");
			}
			if (barResults[key]["otherFood"] === true) {
				$(".barFoodHolder").append(" <li>Other/No Food</li>");
			}
			// Bar Entertainment
			if (barResults[key]["liveMusic"] === true) {
				$(".barEntertainmentHolder").append(" <li>Live Music</li>");
			}
			if (barResults[key]["sports"] === true) {
				$(".barEntertainmentHolder").append(" <li>Sports</li>");
			}
			if (barResults[key]["gamingBetting"] === true) {
				$(".barEntertainmentHolder").append(" <li>Gaming/Betting</li>");
			}
			if (barResults[key]["djs"] === true) {
				$(".barEntertainmentHolder").append(" <li>DJ's</li>");
			}
			if (barResults[key]["otherEnt"] === true) {
				$(".barEntertainmentHolder").append(" <li>Other/No Entertainment</li>");
			}
		})
	});
})

// ***********************************************
// ***********************************************
// EXTRA PAGE FUNCTIONS
// ***********************************************
// ***********************************************

//Toggle Search Div - Nav menu and call to action
$(".search-prompt").click(function() {
	$(".search-nav").slideToggle();
})


//Hide Search Div when home link is clicked
$(".home-link").click(function() {
	$(".search-nav").slideUp();
	$(".home").slideDown();
	$(".search").fadeOut();
})