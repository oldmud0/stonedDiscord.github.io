!function(e){var t={};function n(i){if(t[i])return t[i].exports;var c=t[i]={i:i,l:!1,exports:{}};return e[i].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(i,c,function(t){return e[t]}.bind(null,c));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.onOOCEnter=v,t.onEnter=_,t.musiclist_click=E,t.area_click=I,t.changeMusicVolume=b,t.changeSFXVolume=B,t.changeBlipVolume=k,t.changeCharacter=w,t.imgError=C,t.demoError=x,t.ReconnectButton=N,t.RetryButton=O,t.pickchar=L,t.pickemotion=A,t.pickevidence=P,t.addevidence=D,t.editevidence=H,t.delevidence=j,t.cancelevidence=R,t.getIndexFromSelect=V,t.updateEvidenceIcon=F,t.changeBackgroundOOC=U,t.updateBackgroundPreview=z,t.toggleaffect=X,t.toggleflip=G,t.togglepresent=q,t.togglemenu=K,t.toggleshout=W;var a={};location.search.substr(1).split("&").forEach(function(e){a[e.split("=")[0]]=e.split("=")[1]});var o=a.ip,s=a.mode,l=a.asset||"http://assets.aceattorneyonline.com/base/",d=l+"sounds/music/",r=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&(r=!0);var u=0,m=1,h=0,g=new Date(0),p=function(){function e(t){var n=this;c(this,e),this.serv=new WebSocket("ws://"+t),this.serv.onopen=function(e){return n.onOpen(e)},this.serv.onclose=function(e){return n.onClose(e)},this.serv.onmessage=function(e){return n.onMessage(e)},this.serv.onerror=function(e){return n.onError(e)},this.flip=!1,this.presentable=!1,this.playerID=1,this.charID=-1,this.chars=[],this.emotes=[],this.evidences=[],this.selectedEmote=-1,this.selectedEvidence=0,this.checkUpdater=null,this.musicList=Object(),this.handlers={MS:function(e){return n.handleMS(e)},CT:function(e){return n.handleCT(e)},MC:function(e){return n.handleMC(e)},RMC:function(e){return n.handleRMC(e)},CI:function(e){return n.handleCI(e)},SC:function(e){return n.handleSC(e)},EI:function(e){return n.handleEI(e)},LE:function(e){return n.handleLE(e)},EM:function(e){return n.handleEM(e)},SM:function(e){return n.handleSM(e)},music:function(e){return n.handlemusic(e)},DONE:function(e){return n.handleDONE(e)},BN:function(e){return n.handleBN(e)},NBG:function(e){return n.handleNBG(e)},HP:function(e){return n.handleHP(e)},ID:function(e){return n.handleID(e)},PN:function(e){return n.handlePN(e)},SI:function(e){return n.handleSI(e)},CharsCheck:function(e){return n.handleCharsCheck(e)},PV:function(e){return n.handlePV(e)},CHECK:function(e){}},this._lastTimeICReceived=new Date(0)}return i(e,[{key:"me",value:function(){return this.chars[this.charID]}},{key:"myEmote",value:function(){return this.emotes[this.selectedEmote]}},{key:"myEvidence",value:function(){return this.presentable?this.selectedEvidence:0}},{key:"sendOOC",value:function(e){this.serv.send("CT#web"+this.playerID+"#"+J(Y(e))+"#%")}},{key:"sendIC",value:function(e,t,n,i,c,a,o,s,l,d,r,u,m){this.serv.send("MS#chat#"+e+"#"+t+"#"+n+"#"+J(Y(i))+"#"+c+"#"+a+"#"+o+"#"+this.charID+"#"+s+"#"+h+"#"+d+"#"+r+"#"+u+"#"+m+"#%")}},{key:"sendPE",value:function(e,t,n){this.serv.send("PE#"+J(Y(e))+"#"+J(Y(t))+"#"+n+"#%")}},{key:"sendEE",value:function(e,t,n,i){this.serv.send("EE#"+e+"#"+J(Y(t))+"#"+J(Y(n))+"#"+i+"#%")}},{key:"sendDE",value:function(e,t,n,i){this.serv.send("DE#"+e+"#%")}},{key:"sendMusicChange",value:function(e){this.serv.send("MC#"+e+"#"+this.charID+"#%")}},{key:"sendLeaveRoom",value:function(){this.serv.send("FC#%")}},{key:"joinServer",value:function(){var e=this;this.serv.send("HI#"+navigator.userAgent.hashCode()+"#%"),this.serv.send("ID#webAO#2.4.5#%"),this.checkUpdater=setInterval(function(){return e.sendCheck()},5e3)}},{key:"loadResources",value:function(){var e=document.getElementById("evi_select");e.add(new Option("Custom",0));for(var t=1;t<=evidence_arr.length;t++)e.add(new Option(evidence_arr[t-1]));var n=document.getElementById("bg_select");n.add(new Option("Custom",0));for(var i=1;i<=background_arr.length;i++)n.add(new Option(background_arr[i-1]))}},{key:"initialObservBBCode",value:function(){var e=document.getElementById("client_inner_chat");new MutationObserver(function(e){e.forEach(function(e){var t=e.addedNodes;null!==t&&t.forEach(function(e){"C"==e.tagName?e.style.color=e.getAttribute("a"):"M"==e.tagName&&(e.hasAttribute("a")?e.style.backgroundColor=e.getAttribute("a"):(e.style.backgroundColor="yellow",e.style.color="black"))})})}).observe(e,{attributes:!0,childList:!0})}},{key:"sendCharacter",value:function(e){this.serv.send("CC#"+this.playerID+"#"+e+"#web#%")}},{key:"sendMusic",value:function(e){this.serv.send("MC#"+e)}},{key:"sendCheck",value:function(){this.serv.send("CH#"+this.charID+"#%")}},{key:"onOpen",value:function(e){"watch"===s?(document.getElementById("client_loading").style.display="none",document.getElementById("client_charselect").style.display="none"):te.joinServer()}},{key:"onClose",value:function(e){console.error("The connection was closed: "+e.reason+" ("+e.code+")"),1001!==e.code&&(document.getElementById("client_error").style.display="block",document.getElementById("error_id").textContent=e.code,this.cleanup())}},{key:"onMessage",value:function(e){var t=e.data;console.debug(t);var n=t.split("%")[0].split("#"),i=n[0],c=this.handlers[i];void 0!==c?c(n):console.warn("Invalid packet header "+i)}},{key:"onError",value:function(e){console.error("A network error occurred: "+e.reason+" ("+e.code+")"),document.getElementById("client_error").style.display="block",document.getElementById("error_id").textContent=e.code,this.cleanup()}},{key:"cleanup",value:function(){try{this.serv.close(1001)}catch(e){}clearInterval(this.checkUpdater)}},{key:"handleMS",value:function(e){if(e[4]!=ne.chatmsg.content){document.getElementById("client_inner_chat").innerHTML="";for(var t={character:-1,preanim:escape(e[2]),nameplate:e[3],name:e[3],speaking:"(b)"+escape(e[4]),silent:"(a)"+escape(e[4]),content:function(e){return e.replace(/\\n/g,"<br>").replace(/\[(\/?)b\]/g,"<$1b>").replace(/\[(\/?)i\]/g,"<$1i>").replace(/\[(\/?)del\]/g,"<$1del>").replace(/\[(\/?)u\]/g,"<$1ins>").replace(/\[(\/?)sub\]/g,"<$1sub>").replace(/\[(\/?)sup\]/g,"<$1sup>").replace(/\[m=([#a-zA-Z0-9]+)\]/g,'<m a="$1">').replace(/\[(\/?)m\]/g,"<$1m>").replace(/\[c=?([#a-zA-Z0-9]+)\]/g,'<c a="$1">').replace(/\[\/c\]/g,"</c>")}(Z(ee(Q(e[5])))),side:e[6],sound:escape(e[7]),type:e[8],snddelay:e[10],objection:e[11],evidence:e[12],flip:e[13],flash:e[14],color:e[15],isnew:!0},n=0;n<this.chars.length;n++)if(this.chars[n].name==e[3]){t.character=n;break}t.character==this.charID&&function(){document.getElementById("client_inputbox").value="",u&&(document.getElementById("button_effect_"+u).className="client_button",u=0);h&&(document.getElementById("button_"+h).className="client_button",h=0)}(),ne.say(t)}}},{key:"handleCT",value:function(e){var t=document.getElementById("client_ooclog");t.innerHTML+=ee(Q(e[1]))+": "+ee(Q(e[2]))+"\r\n",t.scrollTop>t.scrollHeight-60&&(t.scrollTop=t.scrollHeight)}},{key:"handleMC",value:function(e){var t=ne.music;(t.pause(),t.src=d+e[1],t.play(),e[2]>=0)?S(this.chars[e[2]].name+" changed music to "+e[1]):S("The music was changed to "+e[1])}},{key:"handleRMC",value:function(e){ne.music.pause(),ne.music=new Audio(this.musicList[e[1]]);var t=ne.music;t.totime=e[1],t.offset=(new Date).getTime()/1e3,t.addEventListener("loadedmetadata",function(){t.currentTime+=parseFloat(t.totime+((new Date).getTime()/1e3-t.offset)).toFixed(3),t.play()},!1)}},{key:"handleCI",value:function(e){document.getElementById("client_loadingtext").innerHTML="Loading Character "+e[1],this.serv.send("AN#"+(e[1]/10+1)+"#%");for(var t=2;t<e.length-1;t++)if(t%2==0){var n=e[t].split("&");this.chars[e[t-1]]={name:n[0],desc:n[1],evidence:n[3],icon:l+"characters/"+escape(n[0])+"/char_icon.png"}}}},{key:"handleSC",value:function(e){document.getElementById("client_loadingtext").innerHTML="Loading Characters";for(var t=1;t<e.length-1;t++){var n=e[t].split("&");this.chars[t-1]={name:n[0],desc:n[1],evidence:n[3],icon:l+"characters/"+escape(n[0])+"/char_icon.png"}}this.serv.send("RM#%")}},{key:"handleEI",value:function(e){document.getElementById("client_loadingtext").innerHTML="Loading Evidence "+e[1],this.serv.send("RM#%")}},{key:"handleLE",value:function(e){this.evidences=[];for(var t=1;t<e.length-1;t++){var n=e[t].split("&");this.evidences[t-1]={name:Z(ee(Q(n[0]))),desc:Z(ee(Q(n[1]))),filename:escape(n[2]),icon:l+"evidence/"+escape(n[2])}}var i=document.getElementById("evidences");i.innerHTML="";for(var c=1;c<=this.evidences.length;c++)i.innerHTML+='<img src="'+this.evidences[c-1].icon+'" id="evi_'+c+'" alt="'+this.evidences[c-1].name+'" class="client_button" onclick="pickevidence('+c+')">'}},{key:"handleEM",value:function(e){document.getElementById("client_loadingtext").innerHTML="Loading Music "+e[1],this.serv.send("AM#"+(e[1]/10+1)+"#%");for(var t=document.getElementById("client_musiclist"),n=2;n<e.length-1;n++)if(n%2==0){var i=document.createElement("OPTION");i.text=e[n],t.options.add(i)}}},{key:"handleSM",value:function(e){document.getElementById("client_loadingtext").innerHTML="Loading Music ";for(var t=document.getElementById("client_musiclist"),n=!1,i=1;i<e.length-1;i++)if(/\.(?:wav|mp3|mp4|ogg|mid)$/i.test(e[i])&&!n&&(n=!0),n){var c=document.createElement("OPTION");c.text=e[i],t.options.add(c)}else{var a=document.createElement("SPAN");a.className="location-box",a.textContent=e[i],a.onclick=function(){I(this)},document.getElementById("areas").appendChild(a)}var o=document.getElementById("areas"),s=document.createElement("OPTION");s.text=o.lastChild.textContent,t.insertBefore(s,t.firstChild),o.removeChild(o.lastChild),this.serv.send("RD#%")}},{key:"handlemusic",value:function(e){for(var t=0;t<e.length/2;t++)this.musicList[e[2*t]]=e[2*t+1]}},{key:"handleDONE",value:function(e){document.getElementById("client_loading").style.display="none",document.getElementById("client_charselect").style.display="block"}},{key:"handleBN",value:function(e){ne.bgname=escape(e[1]);var t=V("bg_select",escape(e[1]));document.getElementById("bg_select").selectedIndex=t,z(),0==t&&(document.getElementById("bg_filename").value=escape(e[1])),document.getElementById("bg_preview").src=l+"background/"+escape(e[1])+"/defenseempty.png"}},{key:"handleNBG",value:function(e){}},{key:"handleHP",value:function(e){1==e[1]?document.getElementById("client_defense_hp").style.clip="rect(0px,"+90*e[2]/10+"px,20px,0px)":document.getElementById("client_prosecutor_hp").style.clip="rect(0px,"+90*e[2]/10+"px,20px,0px)"}},{key:"handleID",value:function(e){this.playerID=e[1]}},{key:"handlePN",value:function(e){this.serv.send("askchaa#%")}},{key:"handleSI",value:function(e){r?this.serv.send("askchar2#%"):this.serv.send("RC#%")}},{key:"handleCharsCheck",value:function(e){document.getElementById("client_chartable").innerHTML="";for(var t=0;t<this.chars.length;t++){if(t%8==0)var n=document.createElement("TR");var i=document.createElement("TD"),c=void 0,a=this.chars[t].icon;c="-1"==e[t+1]?" dark":"",i.innerHTML="<img class='demothing"+c+"' id='demo_"+t+"' src='"+a+"' alt='"+this.chars[t].name+"' onclick='pickchar("+t+")' onerror='demoError(this);'>",n.appendChild(i),t%8==0&&document.getElementById("client_chartable").appendChild(n)}M("def")}},{key:"handlePV",value:function(e){this.charID=e[3],document.getElementById("client_charselect").style.display="none";var t=this.me(),n=this.emotes,i=new XMLHttpRequest;i.open("GET",l+"characters/"+escape(this.me().name)+"/char.ini",!0),i.responseType="text",i.onload=function(e){if(200==this.status){var i=this.responseText,c=y.parse(i);t.side=c.Options.side;for(var a=1;a<c.Emotions.number;a++){var o=c.Emotions[a].split("#"),s="0",d="0";void 0!==c.SoundN&&(s=c.SoundN[a]),void 0!==c.SoundT&&(d=c.SoundT[a]),n[a]={desc:o[0],speaking:o[1],silent:o[2],zoom:o[3],sfx:s,sfxdelay:d,button_off:l+"characters/"+escape(t.name)+"/emotions/button"+a+"_off.png",button_on:l+"characters/"+escape(t.name)+"/emotions/button"+a+"_on.png"},document.getElementById("client_emo").innerHTML+="<img src='"+n[a].button_off+"' id='emo_"+a+"' alt='"+n[a].desc+"' class='client_button' onclick='pickemotion("+a+")'>"}A(1)}},i.send()}}]),e}(),f=function(){function e(){c(this,e),this.textnow="",this.chatmsg={isnew:!1,content:"",objection:"0",sound:"",startpreanim:!1,startspeaking:!1,side:null,color:"0",snddelay:0,preanimdelay:0},this.blip=new Audio(l+"sounds/general/sfx-blipmale.wav"),this.blip.volume=.5,this.blipChannels=new Array(6);for(var t=0;t<this.blipChannels.length;t++)this.blipChannels[t]=new Audio(l+"sounds/general/sfx-blipmale.wav"),this.blipChannels[t].volume=.5;this.currentBlipChannel=0,this.sfxaudio=new Audio(l+"sounds/general/sfx-blipmale.wav"),this.sfxplayed=0,this.music=new Audio,this.music.play(),this.updater=null,this.bgname="gs4",this.shoutTimer=0,this.textTimer=0,this._animating=!1}return i(e,[{key:"isAnimating",value:function(){return this._animating}},{key:"setBlipVolume",value:function(e){for(var t=0;t<this.blipChannels.length;t++)this.blipChannels[t].volume=e}},{key:"bgFolder",value:function(){return l+"background/"+this.bgname+"/"}},{key:"say",value:function(e){this.chatmsg=e,S(e.content,e.nameplate),M(e.side),this.textnow="",this.sfxplayed=0,this.textTimer=0,this._animating=!0,clearTimeout(this.updater),"-"!=e.preanim?e.preanimdelay=this.getAnimLength(l+"characters/"+escape(e.name)+"/"+e.preanim+".gif",this.initUpdater):this.initUpdater(0)}},{key:"initUpdater",value:function(e){ne.chatmsg.preanimdelay=parseInt(e),ne.updater=setTimeout(function(){return ne.updateText()},65)}},{key:"getAnimLength",value:function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.addEventListener("load",function(){for(var e=new Uint8Array(n.response),i=0,c=0;c<e.length;c++)if(String.fromCharCode(e[c]),33==e[c]&&249==e[c+1]&&4==e[c+2]&&0==e[c+7]){var a=e[c+5]<<8|255&e[c+4];i+=a<2?10:a}t(10*i)}),n.send()}},{key:"updateText",value:function(){var e=this;if(1==this.chatmsg.flip?document.getElementById("client_char").style.transform="scaleX(-1)":document.getElementById("client_char").style.transform="scaleX(1)",this._animating&&(this.updater=setTimeout(function(){return e.updateText()},65)),this.chatmsg.isnew){document.getElementById("client_background").style.backgroundColor="transparent",document.getElementById("client_name").style.display="none",document.getElementById("client_chat").style.display="none",document.getElementById("client_evi").style.opacity="0",document.getElementById("client_evi").style.height="0%";var t={1:"holdit",2:"objection",3:"takethat"}[this.chatmsg.objection];void 0!==t?(document.getElementById("client_shout").src=l+"misc/"+t+".gif",new Audio(l+"/characters/"+this.chatmsg.name+"/"+t+".wav").play(),this.shoutTimer=850):this.shoutTimer=0,this.chatmsg.isnew=!1,this.chatmsg.startpreanim=!0}if(this.textTimer>=this.shoutTimer&&this.chatmsg.startpreanim)2==this.chatmsg.flash?(this.sfxaudio.pause(),this.sfxplayed=1,this.sfxaudio.src=l+"sounds/general/sfx-stab.wav",this.sfxaudio.play(),$("#client_gamewindow").effect("shake",{direction:"up"})):1==this.chatmsg.flash&&(document.getElementById("client_background").style.backgroundColor="white",this.sfxaudio.pause(),this.sfxplayed=1,this.sfxaudio.src=l+"sounds/general/sfx-realization.wav",this.sfxaudio.play(),$("#client_gamewindow").effect("pulsate")),this.chatmsg.preanimdelay>0&&(document.getElementById("client_shout").src="misc/placeholder.gif",M(this.chatmsg.side),document.getElementById("client_char").src=l+"characters/"+escape(this.chatmsg.name)+"/"+this.chatmsg.preanim+".gif"),this.chatmsg.startpreanim=!1,this.chatmsg.startspeaking=!0;else if(this.textTimer>=this.shoutTimer+this.chatmsg.preanimdelay&&!this.chatmsg.startpreanim)if(this.chatmsg.startspeaking){this.chatmsg.evidence>0&&(document.getElementById("client_evi").style.backgroundImage="url('"+te.evidences[this.chatmsg.evidence-1].icon+"')","def"==this.chatmsg.side?(document.getElementById("client_evi").style.right="1.5em",document.getElementById("client_evi").style.left="initial",$("#client_evi").animate({height:"30%",opacity:1,marginLeft:"10.6in"},250)):(document.getElementById("client_evi").style.right="initial",document.getElementById("client_evi").style.left="1.5em",$("#client_evi").animate({height:"30%",opacity:1,marginRight:"10.6in"},250))),$("#client_name").toggle("fade"),$("#client_chat").toggle("drop",{direction:"down"}),0==this.chatmsg.preanimdelay&&(document.getElementById("client_shout").src="misc/placeholder.gif",M(this.chatmsg.side)),document.getElementById("client_char").src=l+"characters/"+escape(this.chatmsg.name)+"/"+this.chatmsg.speaking+".gif",document.getElementById("client_name").style.fontSize=.7*document.getElementById("client_name").offsetHeight+"px",document.getElementById("client_chat").style.fontSize=.25*document.getElementById("client_chat").offsetHeight+"px",document.getElementById("client_name").innerHTML="<p>"+Z(this.chatmsg.nameplate)+"</p>";var n="color: "+({0:"#ffffff",1:"#00ff00",2:"#ff0000",3:"#ffaa00",4:"#0000ff",5:"#ffff00",6:"#aa00aa"}[this.chatmsg.color]||"#ffffff");document.getElementById("client_inner_chat").style=n,this.chatmsg.startspeaking=!1,this.textnow==this.chatmsg.content&&(document.getElementById("client_char").src=l+"characters/"+escape(this.chatmsg.name)+"/"+this.chatmsg.silent+".gif",this._animating=!1,clearTimeout(this.updater))}else this.textnow!=this.chatmsg.content&&(" "!=this.chatmsg.content.charAt(this.textnow.length)&&(this.blipChannels[this.currentBlipChannel].play(),this.currentBlipChannel++,this.currentBlipChannel%=this.blipChannels.length),this.textnow=this.chatmsg.content.substring(0,this.textnow.length+1),document.getElementById("client_inner_chat").innerHTML=this.textnow,this.textnow==this.chatmsg.content&&(this.textTimer=0,this._animating=!1,document.getElementById("client_char").src=l+"characters/"+escape(this.chatmsg.name)+"/"+this.chatmsg.silent+".gif",clearTimeout(this.updater)));!this.sfxplayed&&this.chatmsg.snddelay+this.shoutTimer>=this.textTimer&&(this.sfxaudio.pause(),this.sfxplayed=1,"0"!=this.chatmsg.sound&&"1"!=this.chatmsg.sound&&(this.sfxaudio.src=l+"sounds/general/"+escape(this.chatmsg.sound)+".wav",this.sfxaudio.play())),this.textTimer=this.textTimer+65}}]),e}(),y=function(){function e(){c(this,e)}return i(e,null,[{key:"parse",value:function(e){var t={section:/^\s*\[\s*([^\]]*)\s*\]\s*$/,param:/^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/,comment:/^\s*;.*$/},n={},i=null;return e.split(/\r\n|\r|\n/).forEach(function(e){if(!t.comment.test(e)&&0!=e.length)if(t.param.test(e)){var c=e.match(t.param);i?n[i][c[1]]=c[2]:n[c[1]]=c[2]}else if(t.section.test(e)){var a=e.match(t.section);n[a[1]]={},i=a[1]}}),n}}]),e}();function v(e){13==e.keyCode&&(te.sendOOC(document.getElementById("client_oocinputbox").value),document.getElementById("client_oocinputbox").value="")}function _(e){if(13==e.keyCode){var t=te.me(),n=te.myEmote(),i=te.myEvidence(),c=te.flip?1:0,a=document.getElementById("textcolor").value,o="0",s="0";document.getElementById("sendsfx").checked&&(o=n.sfx,s=n.sfxdelay),te.sendIC(n.speaking,t.name,n.silent,document.getElementById("client_inputbox").value,t.side,o,n.zoom,s,h,i,c,u,a)}}function E(e){var t=document.getElementById("client_musiclist").value;te.sendMusicChange(t)}function I(e){var t=e.textContent;te.sendMusicChange(t)}function b(){ne.music.volume=document.getElementById("client_mvolume").value/100}function B(){ne.sfxaudio.volume=document.getElementById("client_svolume").value/100}function k(){ne.setBlipVolume(document.getElementById("client_bvolume").value/100)}function w(e){te.sendLeaveRoom(),document.getElementById("client_charselect").style.display="block",document.getElementById("client_emo").innerHTML=""}function C(e){return e.onerror="",e.src="misc/placeholder.gif",!0}function x(e){return e.onerror="",e.src="/misc/placeholder.png",!0}function T(e){var t=new Image;return t.src=e,0!=t.height}function M(e){var t,n=ne.bgFolder();switch(document.getElementById("client_fg").style.display="none",document.getElementById("client_bench").style.display="none",e){case"def":document.getElementById("client_court").src=n+"defenseempty.png",document.getElementById("client_bench").style.display="block",T(n+"defensedesk.png")?document.getElementById("client_bench").src=n+"defensedesk.png":document.getElementById("client_bench").src=n+"bancodefensa.png",t="defense";break;case"pro":document.getElementById("client_court").src=n+"prosecutorempty.png",document.getElementById("client_bench").style.display="block",T(n+"defensedesk.png")?document.getElementById("client_bench").src=n+"prosecutiondesk.png":document.getElementById("client_bench").src=n+"bancoacusacion.png",t="prosecution";break;case"hld":document.getElementById("client_court").src=n+"helperstand.png",t="defense";break;case"hlp":document.getElementById("client_court").src=n+"prohelperstand.png",t="prosecution";break;case"wit":document.getElementById("client_court").src=n+"witnessempty.png",document.getElementById("client_bench").style.display="block",document.getElementById("client_bench").src=n+"estrado.png",t="prosecution";break;case"jud":document.getElementById("client_court").src=n+"judgestand.png",t="prosecution"}5==ne.chatmsg.type&&(document.getElementById("client_bench").style.display="none",document.getElementById("client_court").src=l+"themes/default/"+t+"_speedlines.gif")}function N(){te.cleanup(),(te=new p(o))&&(s="join",document.getElementById("client_error").style.display="none")}function O(){te.joinServer()}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date,i=document.createElement("p"),c=document.createElement("span");if(c.id="iclog_name",c.appendChild(document.createTextNode(t)),i.appendChild(c),i.appendChild(document.createTextNode(e)),g.getMinutes()!==n.getMinutes()){var a=document.createElement("span");a.id="iclog_time",a.innerText=n.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"}),i.appendChild(a)}var o=document.getElementById("client_log");o.appendChild(i),o.scrollTop>o.scrollHeight-600&&(o.scrollTop=o.scrollHeight),g=new Date}function L(e){e<1e3?te.sendCharacter(e):(document.getElementById("client_charselect").style.display="none",document.getElementById("client_inputbox").style.display="none",document.getElementById("client_emo").style.display="none")}function A(e){-1!=te.selectedEmote&&(document.getElementById("emo_"+te.selectedEmote).src=te.myEmote().button_off),te.selectedEmote=e,document.getElementById("emo_"+e).src=te.myEmote().button_on}function P(e){if(te.selectedEvidence!=e){te.selectedEvidence>0&&(document.getElementById("evi_"+te.selectedEvidence).className="client_button"),document.getElementById("evi_"+e).className="client_button dark",te.selectedEvidence=e,document.getElementById("evi_name").value=te.evidences[e-1].name,document.getElementById("evi_desc").value=te.evidences[e-1].desc;var t=V("evi_select",te.evidences[e-1].filename);document.getElementById("evi_select").selectedIndex=t,0==t&&(document.getElementById("evi_filename").value=te.evidences[e-1].filename),F(),document.getElementById("evi_add").className="client_button hover_button inactive",document.getElementById("evi_edit").className="client_button hover_button",document.getElementById("evi_cancel").className="client_button hover_button",document.getElementById("evi_del").className="client_button hover_button"}else R()}function D(){var e=document.getElementById("evi_select");te.sendPE(document.getElementById("evi_name").value,document.getElementById("evi_desc").value,0==e.selectedIndex?document.getElementById("evi_filename").value:e.options[e.selectedIndex].text),R()}function H(){var e=document.getElementById("evi_select"),t=parseInt(te.selectedEvidence)-1;te.sendEE(t,document.getElementById("evi_name").value,document.getElementById("evi_desc").value,0==e.selectedIndex?document.getElementById("evi_filename").value:e.options[e.selectedIndex].text),R()}function j(){var e=parseInt(te.selectedEvidence)-1;te.sendDE(e),R()}function R(){te.selectedEvidence>0&&(document.getElementById("evi_"+te.selectedEvidence).className="client_button"),te.selectedEvidence=0,document.getElementById("evi_select").selectedIndex=0,F(),document.getElementById("evi_filename").value="",document.getElementById("evi_name").value="",document.getElementById("evi_desc").value="",document.getElementById("evi_icon").style.backgroundImage="url('misc/empty.png')",document.getElementById("evi_add").className="client_button hover_button",document.getElementById("evi_edit").className="client_button hover_button inactive",document.getElementById("evi_cancel").className="client_button hover_button inactive",document.getElementById("evi_del").className="client_button hover_button inactive"}function V(e,t){for(var n=document.getElementById(e),i=1;i<n.length;++i)if(n.options[i].value==t)return i;return 0}function F(){var e=document.getElementById("evi_select"),t=document.getElementById("evi_filename"),n=document.getElementById("evi_icon");0==e.selectedIndex?(t.style.display="initial",n.style.backgroundImage="url('"+l+"evidence/"+t.value+"')"):(t.style.display="none",n.style.backgroundImage="url('"+l+"evidence/"+e.value+"')")}function U(){var e="",t=document.getElementById("bg_select"),n=document.getElementById("bg_command").value;e=0==t.selectedIndex?document.getElementById("bg_filename").value:t.value,te.sendOOC("/"+n.replace("$1",e))}function z(){var e=document.getElementById("bg_select"),t=document.getElementById("bg_filename"),n=document.getElementById("bg_preview");0==e.selectedIndex?(t.style.display="initial",n.src=l+"background/"+t.value+"/defenseempty.png"):(t.style.display="none",n.src=l+"background/"+e.value+"/defenseempty.png")}function X(e){e==u?(document.getElementById("button_effect_"+e).className="client_button",u=0):(document.getElementById("button_effect_"+e).className="client_button dark",u&&(document.getElementById("button_effect_"+u).className="client_button"),u=e)}function G(){te.flip?document.getElementById("button_flip").className="client_button":document.getElementById("button_flip").className="client_button dark",te.flip=!te.flip}function q(){te.presentable?document.getElementById("button_present").className="client_button":document.getElementById("button_present").className="client_button dark",te.presentable=!te.presentable}function K(e){e!=m&&(document.getElementById("menu_"+e).className="menu_icon active",document.getElementById("content_"+e).className="menu_content active",document.getElementById("menu_"+m).className="menu_icon",document.getElementById("content_"+m).className="menu_content",m=e)}function W(e){e==h?(document.getElementById("button_"+e).className="client_button",h=0):(document.getElementById("button_"+e).className="client_button dark",h&&(document.getElementById("button_"+h).className="client_button"),h=e)}function Z(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function J(e){return e.replace(/#/g,"<pound>").replace(/&/g,"<and>").replace(/%/g,"<percent>").replace(/\$/g,"<dollar>")}function Q(e){return e.replace(/<pound>/g,"#").replace(/<and>/g,"&").replace(/<percent>/g,"%").replace(/<dollar>/g,"$")}function Y(e){var t=document.getElementById("client_encoding").value;if("unicode"==t)return e.replace(/[^\0-~]/g,function(e){return"\\u"+("000"+e.charCodeAt().toString(16)).slice(-4)});if("utf16"==t){for(var n=new ArrayBuffer(2*e.length),i=new Uint16Array(n),c=0,a=e.length;c<a;c++)i[c]=e.charCodeAt(c);return String(i)}return e}function ee(e){var t=document.getElementById("client_decoding").value;return"unicode"==t?e.replace(/\\u([\d\w]{1,})/gi,function(e,t){return String.fromCharCode(parseInt(t,16))}):"utf16"==t?String.fromCharCode.apply(null,new Uint16Array(e.split(","))):e}window.onOOCEnter=v,window.onEnter=_,window.musiclist_click=E,window.area_click=I,window.changeMusicVolume=b,window.changeSFXVolume=B,window.changeBlipVolume=k,window.changeCharacter=w,window.imgError=C,window.demoError=x,window.ReconnectButton=N,window.RetryButton=O,window.pickchar=L,window.pickemotion=A,window.pickevidence=P,window.addevidence=D,window.editevidence=H,window.delevidence=j,window.cancelevidence=R,window.getIndexFromSelect=V,window.updateEvidenceIcon=F,window.changeBackgroundOOC=U,window.updateBackgroundPreview=z,window.toggleaffect=X,window.toggleflip=G,window.togglepresent=q,window.togglemenu=K,window.toggleshout=W,void 0===String.prototype.trim&&(String.prototype.trim=function(){return String(this).replace(/^\s+|\s+$/g,"")}),String.prototype.hashCode=function(){var e,t=0;if(0===this.length)return t;for(e=0;e<this.length;e++)t=(t<<5)-t+this.charCodeAt(e),t|=0;return t};var te=new p(o),ne=new f;$(document).ready(function(){te.initialObservBBCode(),te.loadResources()})}});
//# sourceMappingURL=client.b.js.map