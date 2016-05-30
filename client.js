/*
glorious webao
made by sD
credits to aleks for original idea and source
*/
var AO_HOST = "http://weedlan.de/";
//var AO_HOST = "../client/base/";
var MUSIC_HOST = AO_HOST + "sounds/music/";
var BAR_WIDTH = 90;
var BAR_HEIGHT = 20;
var textnow = "";
var chatmsg = {
    "isnew": false
};
var blip = new Audio(AO_HOST + 'sounds/general/sfx-blipmale.wav');
var womboblip = new Audio(AO_HOST + 'sounds/general/sfx-blipmale.wav');
var comboblip = new Audio(AO_HOST + 'sounds/general/sfx-blipmale.wav');
blip.volume = 0.5
womboblip.volume = 0.5
comboblip.volume = 0.5
var music = new Audio();
music.play();
var combo = false;
var musiclist = Object();
var ex = false;
var tempchars = [];
var chars = [];
var emotes = [];
var charcheck;
var pid = 1;
var charsound = new Audio();
var bgname = 'gs4';
var bgfolder = AO_HOST + "background/" + bgname + "/";
// 0 = objection shout, 1 = pre-anim, 2 = speaking, 3 = silent
var chatstate = 3
var position;
var me = -1;
var myemotion = -1;
var myschar = -1;
var updater;
var serv;
var carea = 0;
var linifile;
var pinifile;
var queryDict = {};
location.search.substr(1).split("&").forEach(function(item) {
        queryDict[item.split("=")[0]] = item.split("=")[1]
    })
    //document.getElementById("client_wrapper").style = "width: 800px;";
    /* Server magic */
    //serv = new WebSocket("ws://51.255.160.217:50000");
    //serv = new WebSocket("ws://85.25.196.172:5000");
serv = new WebSocket("ws://" + queryDict.ip);
var mode = queryDict.mode;
serv.onopen = function(evt) {
    onOpen(evt)
};
serv.onclose = function(evt) {
    onClose(evt)
};
serv.onmessage = function(evt) {
    onMessage(evt)
};
serv.onerror = function(evt) {
    onError(evt)
};
/* Making elements undraggable - looks much nicer */
function undrag() {
    var a = document.getElementsByTagName("img");
    for (var i = 0; i < a.length; i++) {
        a[i].addEventListener("dragstart", function(ev) {
            ev.preventDefault();
        }, false);
    }
}
undrag();

function parseINI(data) {
    var regex = {
        section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
        param: /^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/,
        comment: /^\s*;.*$/
    };
    var value = {};
    var lines = data.split(/\r\n|\r|\n/);
    var section = null;
    lines.forEach(function(line) {
        if (regex.comment.test(line)) {
            return;
        } else if (regex.param.test(line)) {
            var match = line.match(regex.param);
            if (section) {
                value[section][match[1]] = match[2];
            } else {
                value[match[1]] = match[2];
            }
        } else if (regex.section.test(line)) {
            var match = line.match(regex.section);
            value[match[1]] = {};
            section = match[1];
        } else if (line.length == 0 && section) {
            section = null;
        };
    });
    return value;
}

function onOOCEnter(event) {
    if (event.keyCode == 13) {
        serv.send("CT#web" + pid + "#" + document.getElementById("client_oocinputbox").value + "#%");
        document.getElementById("client_oocinputbox").value = "";
    }
}

function onEnter(event) {
    if (event.keyCode == 13) {
            mychar = chars[me]
    myemo = emotes[myemotion]
    serv.send("MS#chat#" + myemo.speaking + "#" + mychar.name + "#" + myemo.silent + "#" + document.getElementById("client_inputbox").value + "#"+mychar.side+"#0#0#0#0#0#0#0#0#0#0#0#0#0#%" );
    document.getElementById("client_inputbox").value = '';
    }
}

function musiclist_click(event) {
	var playtrack = document.getElementById("client_musiclist").value;
	serv.send("MC#"+playtrack+"#"+me+"#%");
}

function changeMusicVolume() {
    music.volume = document.getElementById("client_mvolume").value / 100;
}

function changeSFXVolume() {
    charsound.volume = document.getElementById("client_svolume").value / 100;
}

function changeBlipVolume() {
    blip.volume = document.getElementById("client_bvolume").value / 100;
    womboblip.volume = document.getElementById("client_bvolume").value / 100;
    comboblip.volume = document.getElementById("client_bvolume").value / 100;
}

function imgError(image) {
    image.onerror = "";
    image.src = "/misc/placeholder.gif";
    return true;
}

function demoError(image) {
    image.onerror = "";
    image.src = "/misc/placeholder.png";
    return true;
}

function ImageExist(url) {
    var img = new Image();
    console.log(url)
    img.src = url;
    return img.height != 0;
}

function changebg(position) {
    bgfolder = AO_HOST + "background/" + bgname + "/";
    document.getElementById("client_fg").style.display = "none";
    document.getElementById("client_bench").style.display = "none";
    //document.getElementById("client_bench").style.display = "block"
    switch (position) {
        case "def":
            if (ImageExist(bgfolder + "defenseempty.gif")) {
                document.getElementById("client_court").src = bgfolder + "defenseempty.gif"
            } else if (ImageExist(bgfolder + "defenseempty.png")) {
                document.getElementById("client_court").src = bgfolder + "defenseempty.png"
            }
            break;
        case "pro":
            if (ImageExist(bgfolder + "prosecutorempty.gif")) {
                document.getElementById("client_court").src = bgfolder + "prosecutorempty.gif"
            } else if (ImageExist(bgfolder + "prosecutorempty.png")) {
                document.getElementById("client_court").src = bgfolder + "prosecutorempty.png"
            }
            break;
        case "hld":
            if (ImageExist(bgfolder + "helperstand.gif")) {
                document.getElementById("client_court").src = bgfolder + "helperstand.gif"
            } else if (ImageExist(bgfolder + "helperstand.png")) {
                document.getElementById("client_court").src = bgfolder + "helperstand.png"
            }
            break;
        case "hlp":
            if (ImageExist(bgfolder + "prohelperstand.gif")) {
                document.getElementById("client_court").src = bgfolder + "prohelperstand.gif"
            } else if (ImageExist(bgfolder + "prohelperstand.png")) {
                document.getElementById("client_court").src = bgfolder + "prohelperstand.png"
            }
            break;
        case "wit":
            if (ImageExist(bgfolder + "witnessempty.gif")) {
                document.getElementById("client_court").src = bgfolder + "witnessempty.gif"
            } else if (ImageExist(bgfolder + "witnessempty.png")) {
                document.getElementById("client_court").src = bgfolder + "witnessempty.png"
            }
            break;
        case "jud":
            if (ImageExist(bgfolder + "judgestand.gif")) {
                document.getElementById("client_court").src = bgfolder + "judgestand.gif"
            } else if (ImageExist(bgfolder + "judgestand.png")) {
                document.getElementById("client_court").src = bgfolder + "judgestand.png"
            }
            break;
    }
    switch (position) {
        case "def":
            document.getElementById("client_bench").style.display = "block";
            if (ImageExist(bgfolder + "bancodefensa.gif")) {
                document.getElementById("client_bench").src = bgfolder + "bancodefensa.gif"
            } else if (ImageExist(bgfolder + "bancodefensa.png")) {
                document.getElementById("client_bench").src = bgfolder + "bancodefensa.png"
            }
            break;
        case "pro":
            document.getElementById("client_bench").style.display = "block"
            if (ImageExist(bgfolder + "bancoacusacion.gif")) {
                document.getElementById("client_bench").src = bgfolder + "bancoacusacion.gif"
            } else if (ImageExist(bgfolder + "bancoacusacion.png")) {
                document.getElementById("client_bench").src = bgfolder + "bancoacusacion.png"
            }
            break;
        case "wit":
            document.getElementById("client_fg").style.display = "block"
            if (ImageExist(bgfolder + "estrado.gif")) {
                document.getElementById("client_fg").src = bgfolder + "estrado.gif"
            } else if (ImageExist(bgfolder + "estrado.png")) {
                document.getElementById("client_fg").src = bgfolder + "estrado.png"
            }
            break;
    }
}

function updateText() {
    if (chatmsg.content == "") {
        document.getElementById("client_name").style.display = "none";
        document.getElementById("client_chat").style.display = "none";
    } else {
        document.getElementById("client_name").style.display = "block";
        document.getElementById("client_chat").style.display = "block";
    }
    if (chatmsg.isnew) {
        console.log("new message")
        document.getElementById("client_name").style.fontSize = (document.getElementById("client_name").offsetHeight * 0.7) + "px";
        document.getElementById("client_chat").style.fontSize = (document.getElementById("client_chat").offsetHeight * 0.2) + "px";
        document.getElementById("client_name").innerHTML = "<p>" + escapeHtml(chatmsg.nameplate) + "</p>";
        chatmsg.isnew = false;
        changebg(chatmsg.side);
        document.getElementById("client_char").src = AO_HOST + "characters/" + chatmsg.name + "/(b)" + chatmsg.speaking + ".gif";
    } else {
        if (textnow != chatmsg.content) {
            combo = (combo + 1) % 3;
            switch (combo) {
                case 0:
                    blip.play()
                    break;
                case 1:
                    womboblip.play()
                    break;
                case 2:
                    comboblip.play()
                    break;
            }
            textnow = chatmsg.content.substring(0, textnow.length + 1);
            document.getElementById("client_inner_chat").innerHTML = escapeHtml(textnow);
        } else {
            document.getElementById("client_char").src = AO_HOST + "characters/" + chatmsg.name + "/(a)" + chatmsg.silent + ".gif";
            chatstate = 3;
            clearInterval(updater);
        }
    }
}

function onOpen(e) {
	if(mode=="join"){
    serv.send("HI#" + navigator.userAgent + "#%");
	} else {
		document.getElementById("client_loading").style.display = "none";
	}
};

function onClose(e) {
    var errorm = document.createElement("div");
    errorm.setAttribute('class', 'error');
    errorm.innerHTML = "CONNECTION LOST";
    document.body.appendChild(errorm);
};

function onError(e) {
    var errorm = document.createElement("div");
    errorm.setAttribute('class', 'error');
    errorm.innerHTML = "ERROR";
    document.body.appendChild(errorm);
};

function onMessage(e) {
    var musicname = "undefined";
    msg = e.data;
    console.log(msg)
    lines = msg.split('%');
    arguments = lines[0].split('#');
    header = arguments[0];
    switch (header) {
        case "NMS":
            if ( /*arguments[2] != chatmsg.content*/ true) {
                document.getElementById("client_inner_chat").innerHTML = '';
                chatmsg.character = arguments[0];
                msgchar = chars[chatmsg.character]
                msgemo = msgchar.emotions[arguments[1]]
                chatmsg.pre = msgemo.pre;
                chatmsg.speaking = msgemo.speaking
                chatmsg.silent = msgemo.silent
                chatmsg.side = msgchar.side;
                chatmsg.sound = msgemo.soundn;
                chatmsg.type = msgemo.type;
                if (msgchar.hasOwnProperty("showname")) {
                    chatmsg.nameplate = msgchar.showname;
                } else {
                    chatmsg.nameplate = msgchar.name;
                }
                chatmsg.snddelay = msgemo.soundt;
                chatmsg.content = arguments[2];
                chatmsg.objection = arguments[3];
                chatmsg.evidence = arguments[4];
                chatmsg.flash = arguments[5];
                chatmsg.color = arguments[6];
                chatmsg.isnew = true;
                textnow = '';
                addlog(chatmsg.nameplate + ": " + escapeHtml(chatmsg.content))
                console.log("Message received: " + chatmsg.content);
            }
            break;
        case "MS":
            if (arguments[4] != chatmsg.content) {
                document.getElementById("client_inner_chat").innerHTML = '';
                chatmsg.pre = arguments[2];
                chatmsg.character = -1;
                for (var i = 0; i < chars.length; i++) {
                    if (chars[i].name == arguments[3]) {
                        chatmsg.character = i;
                        break;
                    }
                }
                chatmsg.speaking = arguments[2];
                chatmsg.silent = arguments[4];
                chatmsg.content = arguments[5];
                chatmsg.side = arguments[6];
                chatmsg.sound = arguments[7];
                chatmsg.type = arguments[8];
                console.log(arguments[8]);
                chatmsg.nameplate = arguments[3];
                chatmsg.name = arguments[3];
                chatmsg.snddelay = arguments[9];
                chatmsg.objection = arguments[10];
                chatmsg.evidence = arguments[11];
                chatmsg.flash = arguments[12];
                chatmsg.color = arguments[13];
                chatmsg.isnew = true;
                changebg(chatmsg.side);
                textnow = '';
                addlog(chatmsg.nameplate + ": " + escapeHtml(arguments[5]))
                console.log("Message received: " + arguments[5]);
                updater = setInterval(updateText, 80);
            }
            break;
        case "CT":
            document.getElementById("client_ooclog").innerHTML = document.getElementById("client_ooclog").innerHTML + arguments[1] + ": " + arguments[2] + "\r\n"
            break;
        case "MC":
            console.log(music.currentTime)
            music.pause();
            music = new Audio(MUSIC_HOST + arguments[1]);
            music.play();
            console.log("Now playing: " + arguments[1] + "(" + musiclist[arguments[1]] + ")");
            musicname = chars[arguments[2]].name;
            addlog(musicname + " changed music to " + arguments[1]);
            break;
        case "RMC":
            music.pause();
            music = new Audio(musiclist[arguments[0]]);
            music.totime = arguments[1]
            music.offset = new Date().getTime() / 1000
            music.addEventListener('loadedmetadata', function() {
                music.currentTime += parseFloat(music.totime + (new Date().getTime() / 1000 - music.offset)).toFixed(3);
                music.play();
            }, false)
            console.log("Now playing: " + arguments[0] + "(" + musiclist[arguments[0]] + ") from " + arguments[1]);
            break;
        case "CI":
            document.getElementById("client_loadingtext").innerHTML = "Loading Character " + arguments[1];
            serv.send("AN#" + ((arguments[1] / 10) + 1) + "#%");
            for (var i = 2; i < arguments.length - 1; i++) {
                if (i % 2 == 0) {
                    charguments = arguments[i].split("&");
                    console.log(charguments);
                    chars[arguments[i - 1]] = {
                        "name": charguments[0],
                        "desc": charguments[1],
                        "evidence": charguments[3],
                        "icon": AO_HOST + "misc/DemoThings/" + charguments[0] + "_char_icon.png",
                        "icon_chosen": AO_HOST + "misc/DemoThings/" + charguments[0] + "_char_icon_chosen.png"
                    };
                }
            }
            break;
        case "EI":
            document.getElementById("client_loadingtext").innerHTML = "Loading Evidence " + arguments[1];
            serv.send("AE#" + (arguments[1] + 1) + "#%");
            break;
        case "EM":
            document.getElementById("client_loadingtext").innerHTML = "Loading Music " + arguments[1];
            serv.send("AM#" + ((arguments[1] / 10) + 1) + "#%");
            var hmusiclist = document.getElementById("client_musiclist");
            for (var i = 2; i < arguments.length - 1; i++) {
                if (i % 2 == 0) {
                    var newentry = document.createElement("OPTION");
                    console.log(i);
                    console.log(arguments[i]);
                    newentry.text = arguments[i];
                    hmusiclist.options.add(newentry);
                }
            }
            break;
        case "music":
            for (var i = 0; i < arguments.length / 2; i++) {
                musiclist[arguments[2 * i]] = arguments[2 * i + 1];
            }
            break;
        case "DONE":
		document.getElementById("client_loading").style.display = "none";
            document.getElementById("client_chatlog").style.display = "block";
            document.getElementById("client_wrapper").style.display = "block";
			document.getElementById("client_charselect").style.display = "block";            
            break;
        case "BN":
            bgname = arguments[1];
            break;
        case "NBG":
            /* TODO */
            break;
        case "HP":
            /* TODO */
            if (arguments[1] == 1) {
                document.getElementById("client_defense_hp").style.clip = "rect(0px," + BAR_WIDTH * arguments[2] / 10 + "px," + BAR_HEIGHT + "px,0px)";
            } else {
                document.getElementById("client_prosecutor_hp").style.clip = "rect(0px," + BAR_WIDTH * arguments[2] / 10 + "px," + BAR_HEIGHT + "px,0px)";
            }
            break;
        case "ID":
            pid = arguments[1];
        case "PN":
            serv.send("askchaa#%");
            break;
		case "SI":
			serv.send("askchar2#%");
            break;
		case "CharsCheck":
		for (var i=0; i < chars.length; i++){
			if (i % 5 == 0){
				var tr = document.createElement('TR');
			}
			var td = document.createElement('TD');
			if (arguments[1+i]=="-1"){
			var thispick = chars[i].icon_chosen;
			} else {
			var thispick = chars[i].icon;
			}			
			td.innerHTML = "<img class='demothing' id='demo_"+i+"' src='"+thispick + "' alt='"+chars[i].desc+"' onclick='pickchar(" + i + ")' onerror='demoError(this);'>";
			tr.appendChild(td);
			if (i % 5 == 0){
				document.getElementById("client_chartable").appendChild(tr);
			}
		}
		break;
        case "PV":
            me = arguments[3]
            document.getElementById("client_charselect").style.display = "none";  
            var xhr = new XMLHttpRequest();
            xhr.open('GET', AO_HOST + 'characters/' + chars[me].name + '/char.ini', true);
            xhr.responseType = 'text';
            xhr.onload = function(e) {
                if (this.status == 200) {
                    linifile = this.responseText;
                    pinifile = parseINI(linifile);
                    chars[me].side = pinifile.Options.side;
                    for (var i = 1; i < pinifile.Emotions.number; i++) {
						var emoteinfo = pinifile.Emotions[i].split('#');
                        emotes[i] = { 
						desc: emoteinfo[0],
						speaking: emoteinfo[1],
						silent: emoteinfo[2],
						zoom: emoteinfo[3],
						button_off: AO_HOST + 'characters/' + chars[me].name + '/emotions/button' + i + '_off.png',
                        button_on: AO_HOST + 'characters/' + chars[me].name + '/emotions/button' + i + '_on.png'};
                        document.getElementById("client_emo").innerHTML += "<img src='" + emotes[i].button_off + "' id='emo_" + i + "' alt='"+emotes[i].desc+"' class='client_button' onclick='pickemotion(" + i + ")'>";
                    }
                }
            };
            xhr.send();
            break;
    }
};

function addlog(toadd) {
    document.getElementById("client_log").innerHTML = toadd + "<br/>" + document.getElementById("client_log").innerHTML
}

function pickchar(ccharacter) {
	console.log(ccharacter);
	if (ccharacter<1000){
    serv.send("CC#" +pid + "#" + ccharacter + "#web#%");
} else {
	//spectator
	document.getElementById("client_charselect").style.display = "none";
	document.getElementById("client_inputbox").style.display = "none";
	document.getElementById("client_emo").style.display = "none";
}
}

function pickemotion(emo) {
    if (myemotion != -1) {
        document.getElementById("emo_" + myemotion).src = emotes[myemotion].button_off;
    }
    document.getElementById("emo_" + emo).src = emotes[emo].button_on;
    myemotion = emo
}

function sendMusic(song) {
    serv.send("MC#" + song);
    console.log("Music sent!");
}

function escapeHtml(unsafe) {
    var transfer = unsafe;
    transfer.replace(/&/g, "&amp;");
    transfer.replace(/</g, "&lt;");
    transfer.replace(/>/g, "&gt;");
    transfer.replace(/"/g, "&quot;");
    transfer.replace(/'/g, "&#039;");
    return transfer;
}