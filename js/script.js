"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"campinfo": {
		"Title": "2019顛島文藝營",
		"Subtitle": "對、對不起，這就是完結畫面了",
		"Message": "<p><a href='https://www.facebook.com/DefyIslandstlc/'>需要更多營隊資訊歡迎來我們的臉書專頁！</a></p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "歡迎",
		body: "",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// define show ending page
function showEndingPage() {
	// hide panel
	$_("#game").hide();
	$_("[data-menu='ending']").show();
    return true;
}

// Define the music used in the game.
const music = {
	'gentle': 'bgm_gentle.mp3',
	'lively': 'bgm_lively.mp3',
	'odd': 'bgm_odd.mp3',
	'steady': 'bgm_steady.mp3',
	'title': 'bgm_title.mp3',
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {
	'school_bell': 'se_school_bell.mp3',
	'glass': 'se_glass.mp3',
};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	'road': 'bg_road.jpg',
	'gate': 'bg_gate.jpg',
	'hall': 'bg_hall.jpg',
	'corridor': 'bg_corridor.jpg',
	// 'end': 'ui_end.jpg',
};

// Define the Characters
const characters = {
	"l": {
		"Name": "文學",
		"Color": "#aaffaa",
        // "Directory": "l", // Optional*
        // "Images":{
        //     "normal": "normal.png",
        // },
        // "Face": "face.png", // Optional, side image to show every time the character speaks.
        // "Side": { // Side images identifiers to show on dialogs
        //      "Smiling": "smiling.png"
        // }
	},
	"drama": {
		"Name": "戲劇",
		"Color": "#5bffca",
        "Directory": "drama", // Optional*
        "Images":{
			"normal": "戲劇_一般.png",
            "sad": "戲劇_難過.png",
            "serious": "戲劇_嚴肅.png",
            "shy": "戲劇_害羞.png",
        },
        // "Face": "face.png", // Optional, side image to show every time the character speaks.
        // "Side": { // Side images identifiers to show on dialogs
        //      "Smiling": "smiling.png"
        // }
	},
	"movie": {
		"Name": "電影",
		"Color": "#ffcc77",
        "Directory": "movie", // Optional*
        "Images":{
            "normal": "電影_一般.png",
            "exciting": "電影_激動.png",
            "guilty": "電影_心虛.png",
            "speechless": "電影_==.png",
        },
        // "Face": "face.png", // Optional, side image to show every time the character speaks.
        // "Side": { // Side images identifiers to show on dialogs
        //      "Smiling": "smiling.png"
        // }
	},
	"paint": {
		"Name": "繪畫",
		"Color": "#77cccc",
        "Directory": "paint", // Optional*
        "Images":{
			"normal": "繪畫_一般.png",
            "surprised": "繪畫_驚訝.png",
            "worry": "繪畫_擔憂.png",
            "wry_smile": "繪畫_苦笑.png",
        },
        // "Face": "face.png", // Optional, side image to show every time the character speaks.
        // "Side": { // Side images identifiers to show on dialogs
        //      "Smiling": "smiling.png"
        // }
	},
	"music": {
		"Name": "音樂",
		"Color": "#5bcaff",
        "Directory": "music", // Optional*
        "Images":{
			"normal": "音樂哥_一般.png",
            "speechless": "音樂哥_閉眼.png",
            "serious": "音樂哥_生氣.png",
        },
        // "Face": "face.png", // Optional, side image to show every time the character speaks.
        // "Side": { // Side images identifiers to show on dialogs
        //      "Smiling": "smiling.png"
        // }
	},
	"game": {
		"Name": "遊戲",
		"Color": "#ffcaff",
        "Directory": "game", // Optional*
        "Images":{
            "normal": "遊戲_一般.png",
            "smile": "遊戲_笑臉.png",
            "sad": "遊戲_難過.png",
            "shock": "遊戲_驚懼.png",
        },
		// "Images":{
        //     "Normal": "normal.png",
        //     "Mad": "hmph!.png",
        //     "Doubt": "uhh.png",
        //     "Disappointed":"ngggg....png",
        //     "Happy": "hehehehe.png"
        // },
        // "Face": "face.png", // Optional, side image to show every time the character speaks.
        // "Side": { // Side images identifiers to show on dialogs
        //      "Smiling": "smiling.png"
        // }
	},
	"homo": {
		"Name": "HOMO獸親衛隊",
        "Images":{
            "normal": "homo.png",
        },
		"Color": "#ffcccc",
	},
	"q": {
		"Name": "？？？",
		"Color": "#aaaaaa",
	},
	"ga": {
		"Name": "女同學Ａ",
		"Color": "#ffcaca",
	},
	"gb": {
		"Name": "女同學Ｂ",
		"Color": "#ffcaca",
	},
};

let script = {
	// The game starts here.
	"Start": [
		// "scene black",
		"play music gentle loop",
		"scene road with fadeIn",
		"我是文學，今年十七歲。",
		"我想我不是一個外向的人。我喜歡在個人意識中將想法獨自消化成文字的過程。",
		"這種對平靜的渴望在最近變得奢侈。",
		"ga 「早安，文學！」",
		"gb 「你今天怎麼來得比較晚？」",
		"我笑著敷衍過同學，說只是正好睡得比較晚。",
		// "scene black with fadeIn",
		// "wait 2000",
		"scene gate with fadeIn",
		"顛島藝術學園正要開始新的學期。",
		"這所菁英學園由富可敵國的想像朋友財團創立，為了守護藝術價值與世界的和平，從全世界招攬來了各領域的菁英。",
		"破壞、探索與重構。這是校方對藝術的展望。",
		"說真的我感覺有點累。",
		"我不是那麼習慣改變，我想像中的學園生活應該要更安穩更優雅一點。",
		"ga 「你聽說了嗎？我們班要來一個轉學生。」",
		"l 「是嗎？」",
		"我沒有聽說。不過我本來就沒聽說大部分的事。",
		"ga 「要是個隨和的人就好了。」",
		"gb 「我也希望能多點好相處的人。你覺得呢，文學？」",
		"l 「我沒有什麼想法耶。」",
		"這回答被嫌棄為掃興，她們很快就跑去找別的聊天對象。",
		"wait 1000",
		// "背景相互fade",
		"scene hall with fadeIn",
		"正是此時一個不算太熟悉的聲音冒出來。",
		"pause music",
		"q 「文學？」",
		"wait 1000",
		// "立繪1淡入",
		"show drama normal center with fadeIn",
		// "BGM淡入",
		"play music lively loop",
		"drama 「啊，抱歉。」戲劇站得直挺挺。「你看起來沒什麼精神，你還好嗎？」",
		"l 我說：「沒事，熬夜看了一本小說。」",
		"一定是沒這麼晚進過校門，我第一次在這裡遇到戲劇。",
		"自從上了高中後我們就很少講話了。",
		"小時候明明那麼形影不離，現在想起來真是很久以前的事了。",
		"show drama serious center",
		"drama 「真的嗎？你沒事嗎？會很累嗎？需不需要去保健室？」",

		{"Choice":{
			"不必那麼誇張啦":{
				"Text": "不必那麼誇張啦",
				"Do": "jump p02_1"
			},
			"沒關係，你不用擔心":{
				"Text": "沒關係，你不用擔心",
				"Do": "jump p02_2"
			},
		}
		},
	],
	"p02_1": [
		"l 「不必那麼誇張啦！」",
		"show drama shy center",
		"drama 「是、是嗎？」",
		"jump p03",
	],
	"p02_2": [
		"l 「沒關係，你不用擔心。」",
		"show drama normal center",
		"drama 「真的嗎？那就好。嗯……我是不是又大驚小怪了？」",
		"jump p03",
	],
	"p03": [
		"戲劇生硬地別過臉。",
		"drama 「呃，抱歉，我只是……我只是要說這學期我們還沒──」",
		"q 「卡卡卡，太尷尬了吧。」",
		"wait 1000",
		// "立繪1淡出",
		"hide drama with fadeOut",
		"show drama shy left with fadeIn",
		"show movie normal center with fadeIn",
		"不知何時起一個鏡頭對著我們。",
		"show drama serious left",
		"drama 「電影，學校不可以帶數位相機。」",
		"movie 「這是DSLR。」",
		"電影是跳級入學的資優生。",
		"前陣子他才以極輕的年紀橫空出世，空降般席捲學園，不費多少時間就成為整個時代的寵兒。",
		"所以即使無禮地對學長姊指手畫腳，對他而言好像也不算什麼大事。",
		"movie 「這卡時間不長，你什麼時候要約她，快點。」",
		"show drama shy left",
		"drama 「欸……」",
		"l 「約什麼？」",
		"drama 「我、我只是想說！明明同班卻沒什麼機會講話！很可惜！只是這樣！」",
		"l 「我們同班？」",
		"show drama sad left",
		"磅。",
		"vibrate 100",
		"這是一盞冷色調的燈在戲劇頭上打開的聲音。",
		"drama 「已經……開學一個禮拜了……」",
		"show movie speechless",
		"movie 「她沒在關心啦。」電影看著觀景窗。「她一進教室就是偷看書，前天在看《蜂蜜花火》，昨天是《花開時節》，她才不會注意到教室有誰咧。」",

		"movie 「對吧？」電影問我。",
		{"Choice": {
			"你怎麼會知道": {
				"Text": "你怎麼會知道",
				"Do": "jump p04_1"
			},
			"我沒有那麼明目張膽": {
				"Text": "我沒有那麼明目張膽",
				"Do": "jump p04_2"
			},
		}},
	],
	"p04_1": [
		"l 「你怎麼會知道？」",
		"movie 「咦？沒、沒有啊，那麼明顯，大家都看得到吧。」",
		"jump p05",
	],
	"p04_2": [
		"l 「我沒有那麼明目張膽……」",
		"movie 「是沒錯，但沒有東西躲得過導演視角喔。」",
		"jump p05",
	],
	"p05": [

		"我心虛地抓緊書包。而戲劇變了臉色。",
		"show drama serious left",
		"drama 「等一下電影，你怎麼知道，你又不在我們教室。」",
		"show movie guilty",
		"movie 「咦？沒有。」電影關了相機。",
		"drama 「你很可疑，你是不是在偷拍。」",
		"show movie exciting",
		"movie 「才不是！這是紀實。不是！」",
		"wait 1000",
		"hide drama with fadeOut",
		"hide movie with fadeOut",
		"戲劇吵著要檢查記憶卡，追著電影雙雙消失在穿堂盡頭。",
		"他們好合得來，真好。",
		"wait 1000",
		"scene corridor with fadeIn",
		"我一面反省上課時心是不是分得太明目張膽，一面盯著他們離開的方向，沒有在看路。",
		"等撞到人時已經來不及了。",
		"scene corridor with shake",
		"vibrate 100",
		"pause music",
		"q 「哇！對不起。」對方說。我也應該立刻道歉的，但抬頭見到的面孔令人目瞪口呆。",
		"show paint normal center with fadeIn",
		"wait 1000",
		"play music steady loop",
		"那是繪畫學長完成度遠離凡物的別緻笑臉。",
		"paint 「對不起，我沒有看到你。」他單膝蹲下來替我撿跌落的手提袋。",
		"雖然不如其他人那麼狂熱，但我也曾想過畢業前要是有機會和他說上話就好了，所以不禁緊張得措手不及。",
		"show paint worry",
		"他瀟灑地站起來，因我遲遲沒有反應而彎下腰。",
		"paint 「你還好嗎？我有沒有害你受傷？」",
		"l 「啊沒有，對不起，學長。」",
		"然後那些約定成俗的就冒出來了。",
		"wait 1000",
		"show homo normal right with bounceInRight",
		// "立繪3淡入在下層",
		"我稱這票人為宮廷親衛隊。",
		"「這是誰？」、「是誰膽敢接近繪畫學長！」、「哪來的書呆子學妹？」、「說好不要有女主。」一陣陣耳語窸窣得我冷汗直流。",
		"show paint normal",
		"但繪畫不太在意來自遠景的聲音，笑容完美到幾乎在發亮。",
		"paint 「沒關係，別緊張，是我的錯。我好像沒見過你，你是新生嗎？」",

		{"Choice":{
			"自我介紹": {
				"Text": "自我介紹",
				"Do": "jump p06_1"
			},
			"趕緊離開": {
				"Text": "趕緊離開",
				"Do": "jump p06_2"
			},
		}},
	],
	"p06_1": [
		"l 「喔，不是，我是二年級的文學。學長你好。」",
		"show paint surprised",
		"paint 他睜大眼。「你就是文學？」",
		"jump p07",
		"這有點怪，學長沒道理認得我。但一個低音在我回話前打破一片祥和。",
	],
	"p06_2": [
		"l 「嗯……」我看看自己製造出的騷動。「我該進教室了，不好意思。」",
		"show paint normal",
		"paint 「噢，哈哈，別擔心，我這裡每天都是這個樣子。」",
		"jump p07",
	],
	"p07": [

		"q 「繪畫，你在磨蹭什麼？」",
		// "停頓，立繪1淡出",
		// "立繪1淡入至左",
		// "立繪2淡入至右",
		"hide paint with fadeOut",
		"show paint normal left with fadeIn",
		"show music normal center with fadeIn",
		"show homo normal right with wobble",
		"親衛隊躁動了。「噎噎噎噎！」、「我大學長組不可拆。」她們遠遠觀望著音樂學長走過來。可以的話我也想退遠一點。",
		"music 「不是叫你等我嗎？」",
		"paint 「抱歉，我撞到人了。」",
		"show music serious",
		"於是金屬弦般銳利的目光流轉過來瞪我。",
		"實在說不上音樂學長是哪裡難以接近，我想是氣氛給人某種高不可攀的嚴肅性。",
		"music 「我最討厭做事的節奏被打斷。」我的背頸涼了一截。",
		"show paint wry_smile left",
		"paint 「不要這樣，打斷什麼，不過就是走去上廁所。」",
		"音樂看了看在旁耳語的群眾，再看看我。",
		"show music normal",
		"music 「所以你有做錯什麼事嗎？」",

		{"Choice":{
			"沒有": {
				"Text": "沒有",
				"Do": "jump p08_1"
			},
			"我不是故意的": {
				"Text": "我不是故意的",
				"Do": "jump p08_2"
			},
		}},
	],
	"p08_1": [
		"l 「沒、沒有……」",
		"music 「那就不要管別人說什麼。快走。」",
		"jump p09",
	],
	"p08_2": [
		"l 「我不是故意的……」",
		"show music speechless",
		"music 「想也知道。真浪費時間，走了。」",
		"jump p09",
	],
	"p09": [

		"hide paint with fadeOut",
		"hide music with fadeOut",
		"wait 1000",
		// "立繪1淡出",
		// "立繪2淡出",
		"show paint wry_smile center with fadeIn",
		// "立繪1淡入至中",
		"音樂沒有多停，在下一拍轉身離去。於是繪畫也不再留下殘像。",
		"paint 「抱歉，有空再說吧！」",
		"wait 1000",
		"hide paint with fadeOut",
		"hide homo with fadeOut",
		"我呆呆目送他們離開。",
		"目睹這一切的人紛紛躲進教室迴避，只有一個男生雙手抱著後腦走到我旁邊來。",
		"pause music",
		// "停頓，立繪1淡入，BGM淡入",
		"show game normal center with fadeIn",
		"wait 1000",
		"play music odd loop",
		"q 「哇，超可怕的。」",
		"show game smile",
		"q 「不過音樂學長其實只是比較講規矩，不是真的在生氣，不用太擔心啦。」",
		"q 「就像學姊你有時不理人只是因為在發呆，其實沒有惡意一樣嘛。」",
		"他笑得很爽朗，使勁在稚氣未脫的臉上擠出說服力，就為了安慰我。",
		"只有一個問題。",
		"l 「你是誰啊？」",
		"show game shock",
		"q 「咦？」",
		"q 「什麼意思，學姊你不認識我嗎？！」",
		"l 「呃。」",
		"這就真的不是我上課偷看小說的問題了。",
		"q 「我是遊戲啊！我很小的時候就知道你！我是你們大家的粉絲！」",
		"game 「而且我每天早上都有跟你打招呼。」",
		"l 「真的假的。」",
		"他看起來很挫折。可是我真的不記得什麼時候開始學園裡有這個人啊。",
		"show game sad",
		"game 「嗚嗚，」他不甘地咬著嘴唇。「昨天音樂學長也這樣說。」那你剛才還講得好像跟他很熟一樣。",
		"game 「嗚嗚，難道學姊也不覺得我算是學園的一分子嗎？」",

		{"Choice":{
			"我要認識後才知道": {
				"Text": "我要認識後才知道",
				"Do": "jump p10_1"
			},
			"算啦算啦": {
				"Text": "算啦算啦",
				"Do": "jump p10_2"
			},
		}},
	],
	"p10_1": [
		"l 「呃，我可能要先認識你才會知道嗎？」",
		"show game smile",
		"game 「真的嗎？你願意嗎？太好了！」",
		"game 「那我們今天放學後繞去吃可麗餅。」",
		"l 「不要。」",
		"show game sad",
		"game 「哇你回答得好快！」",
		"jump p11",
	],
	"p10_2": [
		"l 「算啦算啦。」",
		"show game sad",
		"game 「哇！你在敷衍我！」",
		"jump p11",
	],
	"p11": [
		"可惡！遊戲跳了跳腳，大聲說他不會輸的，要我再等等他，便逕自往走廊盡頭跑掉了。",
		"hide game with fadeOut",
		"play sound school_bell",
		"「啊我明天早上還是會跟你打招呼喔！」遠遠地他回頭大喊，聲音交融在早自習開始的鐘聲裡。",

		"pause music",
		"我把握最後一個沈著的片刻嘆了口氣。",
		"我也不清楚該怎麼說，總之大家似乎都對新學期抱持各種期待，想找到新的自己或新的朋友。",
		"但我期望的從來不那麼多。",
		"可能是性格比較獨立吧，或許大家認為這個年紀的學生該廣泛交友，但我想我喜歡的東西很明確，對自我也足夠認同，不必透過別人了解自己是誰。",
		"想來或許還真有點自負。",
		"該進教室了，我快步穿過走廊。",
		"就是這時候驚叫傳來。「小心！」窗外有人大喊。",
		"play sound glass",
		"scene black",
		"我甚至沒看見發生什麼事。",
		"一陣鈍痛打在頭上，黑幕瞬間刷過眼前，意識旋即朦朧。",
		"平靜與自識也離我遠去……",
		"wait 1000",
		showEndingPage,
		// "display message campinfo",
	],
};
