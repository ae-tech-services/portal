var _0x11fe60=_0x5456;!function(){for(var e=_0x5456,t=_0x593a();;)try{if(722582==+parseInt(e(468))*(-parseInt(e(582))/2)+parseInt(e(561))/3+parseInt(e(480))/4+parseInt(e(639))/5+parseInt(e(565))/6*(parseInt(e(544))/7)+-parseInt(e(617))/8*(-parseInt(e(597))/9)+-parseInt(e(571))/10)break;t.push(t.shift())}catch(e){t.push(t.shift())}}();var voucher=getStorageValue("activeVoucher"),activeMac=getStorageValue(_0x11fe60(646)),tempMac=getStorageValue("tempMac"),invalidUser=getStorageValue(_0x11fe60(701)),insertcoinbg=new Audio,coinCount=new Audio,dateNow=Date[_0x11fe60(605)](),totalCoinReceived=!1,extendTimeCriteria=!1,totalextCoinReceived=!1,vcTopUp=!1,voucherToConvert="",macVoucher="",vendorIpAddress="",currency="",apiStatus="",ipAddress="",mac="",macNoColon="",payment_gateway="",portal_key="",internet_status="",intervalID=null,timer=null,insertingCoin=!1,username_only=!1,pause=!1,unlimited=!1,randomtempMac=!1,prefix=!1,coinslotExit=!1,pause_button=!0,member_logout_button=!0,subscription=!1,subscription_prefix=[],body=document[_0x11fe60(689)](_0x11fe60(524)),interfaceName=body.dataset[_0x11fe60(685)],icmodal=document[_0x11fe60(593)](_0x11fe60(663)),insertBtn=document[_0x11fe60(689)](_0x11fe60(489)),svmodal=document[_0x11fe60(593)](_0x11fe60(636)),pauseBtn=document[_0x11fe60(689)]("pauseBtn"),dialog=document.querySelector(_0x11fe60(661)),ssid=document[_0x11fe60(593)](_0x11fe60(497)),vendor=document[_0x11fe60(593)]("[data-vendo]"),selectVendo=document[_0x11fe60(689)](_0x11fe60(515)),link=document[_0x11fe60(689)](_0x11fe60(575));body[_0x11fe60(471)][_0x11fe60(564)]=_0x11fe60(699),pauseBtn[_0x11fe60(471)][_0x11fe60(652)]="none";var ajaxsettings=new XMLHttpRequest;function api(){var n=_0x11fe60,o=document[n(689)]("exp"),a=document.getElementById(n(635)),i=document[n(689)](n(658)),r=document[n(689)](n(613)),s=document[n(689)]("userID"),e=new XMLHttpRequest;e.open("GET",n(631),!0),e[n(516)](),e[n(573)]=function(){var e,t=n;4==this[t(482)]&&(200==this[t(635)]?(e=JSON.parse(this[t(512)]),mac=e[t(581)],macNoColon=replaceAll(mac,":"),ipAddress=e.ip,a[t(530)]=e[t(635)],apiStatus=e[t(635)],null!=voucher&&""!=voucher||(voucher=macNoColon),insertingCoin?(o[t(530)]=t(622),setTimeout(function(){getValidity(1)},3e3)):getData(1),e[t(635)]==t(678)?(null!==getCookie(t(637))&&(i[t(608)]=getCookie("timeLeft"),a[t(530)]=t(621),pauseBtn.style[t(564)]="block"),tempMac!==mac&&null!==tempMac&&(randomtempMac=!0),pauseBtn[t(471)][t(652)]="auto",intervalManager(0),r[t(471)].pointerEvents=t(547),body.style[t(564)]="block"):e[t(635)]==t(552)&&(voucher=e[t(546)],setStorageValue(t(614),voucher),null!==getCookie(t(637))&&eraseCookie(t(637)),removeStorageValue(t(701)),r.style[t(652)]="none",setStorageValue(t(695),mac),pause=!1,a.textContent=t(552),null!=activeMac&&null!=activeMac||setStorageValue("activeMac",mac),pause_button?prefix||(pauseBtn[t(471)].display=t(662),pauseBtn[t(471)][t(652)]=t(547),pauseBtn.textContent="Pause"):(pauseBtn[t(471)][t(564)]="none",pauseBtn.style.pointerEvents=t(699)),subscription&&(0===voucher.indexOf(subscription_prefix[0])||0===voucher[t(492)](subscription_prefix[1])||0===voucher[t(492)](subscription_prefix[2])||0===voucher[t(492)](subscription_prefix[3])&&voucher[t(619)]<12)&&(insertBtn[t(471)][t(564)]=t(699),pauseBtn[t(471)][t(564)]=t(699),prefix=!0,document[t(593)](t(545)).style[t(564)]="none",i[t(608)]=t(558)),null!=e[t(591)]||prefix?prefix||(intervalManager(!0,animate,1e3),i[t(608)]=secondsToDhms(e[t(591)])):(unlimited=!0,intervalManager(0),i[t(608)]=t(554),insertBtn.style[t(564)]=t(699),member_logout_button?(pauseBtn[t(471)][t(564)]=t(662),pauseBtn.style[t(652)]=t(547),pauseBtn[t(530)]=t(559)):pauseBtn[t(471)][t(564)]=t(699),document[t(593)](".btn-group .input-group").style.display=t(699)),body[t(471)][t(564)]=t(662)),voucher!=macNoColon&&(s[t(608)]=t(609)+voucher+"</span></td>")):body[t(471)][t(564)]="block")}}function getInternetStatus(n,o,a,i){var r=_0x11fe60,s=document.getElementById(r(490)),l=document[r(593)](r(655)),e=new XMLHttpRequest;e[r(601)](r(627),r(594),!0),e.setRequestHeader(r(538),r(487)),e[r(529)](r(684),r(657)),e[r(573)]=function(){var e,t=r;4!=this[t(482)]||200!=this[t(635)]||(e=this[t(512)])==t(505)&&(openModal(l),l[t(593)](".header")[t(530)]=a,document[t(593)]("#message")[t(530)]=i,n||(internet_status=e,s[t(471)].pointerEvents=t(547)),o&&null!==intervalID&&paused(300))},e[r(516)]()}function getValidity(o){var e,t,a=_0x11fe60,i=document.getElementById(a(643));5<o?i[a(530)]=a(477):(e=null!=activeMac?replaceAll(activeMac,":"):macNoColon,(t=new XMLHttpRequest).open("GET",a(638)+e+a(540),!0),t[a(529)](a(538),a(487)),t[a(529)]("Pragma",a(657)),t[a(516)](),t[a(573)]=function(){var e,t,n=a;4==this[n(482)]&&(200==this[n(635)]?(t=(e=this.responseText)[n(651)]("#"),i[n(530)]=t[1],50<e.length&&(i[n(530)]=n(622),setTimeout(function(){getValidity(o+1)},1e3))):i[n(530)]=n(477))})}function getData(o){var e,t,a=_0x11fe60,i=document[a(689)]("exp");5<o?fallbackData():(e=null!=activeMac?replaceAll(activeMac,":"):macNoColon,pauseBtn.innerHTML=a(572),(t=new XMLHttpRequest)[a(601)](a(627),a(638)+e+a(540),!0),t[a(529)](a(538),a(487)),t[a(529)]("Pragma",a(657)),t.send(),t[a(573)]=function(){var e=a;if(4==this.readyState)if(200==this.status){var t=this[e(512)],n=t[e(651)]("#");if(macVoucher=n[0],i.textContent=n[1],50<t[e(619)])return i[e(530)]=e(622),void setTimeout(function(){getData(o+1)},1e3);apiStatus==e(678)?(pauseBtn[e(471)][e(652)]=e(547),pause=!0,null==voucher?(macVoucher==e(692)&&""==macVoucher||(voucher=macVoucher),pauseBtn[e(530)]=e(611)):pauseBtn[e(530)]="Resume",null==invalidUser&&getTimeleft()):unlimited||(pauseBtn[e(530)]="Pause")}else fallbackData()})}function fallbackData(){var e=_0x11fe60,t=document[e(689)](e(643)),n=document.getElementById("status");apiStatus!==e(552)?(null==invalidUser&&getTimeleft(),pauseBtn[e(471)].pointerEvents=e(547),pause=!0,n[e(530)]==e(678)?pauseBtn[e(530)]=e(611):pauseBtn.textContent=e(510)):t.textContent=e(477)}function getTimeleft(){var e=_0x11fe60;randomtempMac?setTimeout(function(){doConnect(!1,!1,voucher)},300):null==getCookie(e(637))&&setTimeout(function(){doConnect(!1,!0,voucher)},300)}function paused(e){var n=_0x11fe60,o=document[n(689)](n(635));pauseBtn[n(471)][n(652)]="none",timeleft=document.getElementById(n(658)),pauseBtn.innerHTML=n(572),setTimeout(function(){var e,t=n;pauseBtn[t(471)][t(652)]="auto",pause?doConnect(!1,!1,voucher):(intervalManager(0),(e=new XMLHttpRequest)[t(601)](t(688),t(470),!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e[t(516)]("erase-cookie=true"),e[t(573)]=function(){var e=t;4==this[e(482)]&&200==this.status&&(unlimited?(removeStorageValue("activeMac"),removeStorageValue(e(695)),removeStorageValue(e(614)),location.reload()):(o.textContent="Time Paused",pauseBtn[e(530)]="Resume",setCookie(e(637),timeleft[e(608)],30)))},pause=!0)},e)}function doConnect(e,n,t,o){var a=_0x11fe60,i=document[a(593)](a(500)),r=document[a(689)](a(635));e?(closeModal(i),openModal(dialog),dialog.querySelector(a(519))[a(471)][a(564)]="none",dialog.querySelector(".header").textContent="Checking User..."):o=username_only?"":t,(i=new XMLHttpRequest).open(a(688),a(536),!0),i[a(573)]=function(){var t=a;4==this[t(482)]&&200==this[t(635)]&&(""!=this[t(512)][t(651)](t(466))[0]?e?(dialog[t(593)](t(610))[t(530)]="Invalid Username or Password!",setTimeout(function(){closeModal(dialog)},1500)):(null!==getCookie("timeLeft")&&eraseCookie(t(637)),removeStorageValue(t(646)),removeStorageValue(t(695)),removeStorageValue(t(614)),document[t(689)]("timer").innerHTML=secondsToDhms(0),r[t(530)]=t(678),n?setStorageValue(t(701),t(623)):(dialog[t(593)](t(519))[t(471)][t(564)]=t(699),openModal(dialog),dialog[t(593)](".header").textContent=t(475),setTimeout(function(){var e=t;pauseBtn[e(530)]=e(611),closeModal(dialog)},1500))):(e?(dialog[t(593)](t(610))[t(530)]="Connected Successfully!",setTimeout(function(){location[t(667)]()},1500)):n&&paused(300),api()))},i[a(516)](a(543)+t+a(550)+o)}function forceLogin(){var e=_0x11fe60,t=document[e(593)](e(661));t[e(593)](e(519))[e(471)].width=e(577),t[e(593)](e(610))[e(530)]="Done",setTimeout(function(){closeModal(t),api()},1e3)}function insertBtnManual(e){var t=_0x11fe60,n=e.dataset,o=document[t(593)]("[data-ssid]"),e=document[t(593)]("[data-vendo]");closeModal(svmodal),insertBtn[t(471)].pointerEvents=t(699),insertBtn.innerHTML=t(572),vendorIpAddress=n[t(535)],o[t(608)]=n[t(693)],e.innerHTML=n[t(533)],vcTopUp=!1,insertCoin(0),setStorageValue("vendoIp",n[t(535)]),setStorageValue(t(693),n[t(693)]),setStorageValue(t(533),n[t(533)])}function insertCoin(n){var o=_0x11fe60;removeStorageValue("invalidUser");var t=getStorageValue(o(614));return extendTimeCriteria=null==t?0:1,(t=new XMLHttpRequest).open(o(688),o(602)+vendorIpAddress+"/topUp",!0),t[o(529)]("Content-type",o(665)),t[o(573)]=function(){var e,n=o;4==this[n(482)]&&200==this[n(635)]&&("true"==(e=JSON.parse(this[n(512)]))[n(635)]?(vcTopUp?(dialog.querySelector(n(519)).style[n(564)]=n(662),dialog.querySelector(n(519))[n(471)][n(562)]="10%",dialog[n(593)](n(610))[n(530)]="Voucher checking, Please wait!",convertextVoucher(),openModal(dialog)):(audioPlay(!0),coinslotExit=!1,icmodal.querySelector(n(610))[n(530)]=n(645),insertBtn[n(471)][n(652)]="auto",insertBtn[n(530)]=n(563),icmodal[n(593)](n(519))[n(471)].width=n(577),document[n(593)]("[data-ic-close]")[n(530)]=n(486),null==timer&&(timer=window.setInterval(function(){var e=n,t=new XMLHttpRequest;t[e(601)](e(688),e(602)+vendorIpAddress+e(560),!0),t[e(529)]("Content-type","application/x-www-form-urlencoded"),t.onreadystatechange=function(){4==this.readyState&&200==this.status&&checkCoin(JSON.parse(this[e(512)]))},t[e(516)](e(566)+voucher)},1e3)),openModal(icmodal)),voucher=e.voucher,insertingCoin=!0):(notifyCoinSlotError(e[n(498)]),timer=null,clearInterval(timer)))},t[o(467)]=function(){var t=o;n<5?(insertBtn[t(471)].pointerEvents="none",openModal(dialog),dialog[t(593)](".progress-bar").style[t(564)]=t(699),dialog.querySelector(t(610)).textContent=t(673),setTimeout(function(){insertCoin(e,n+1)},1e3)):(dialog.querySelector(t(610))[t(530)]=vendor.textContent+t(641),setTimeout(function(){closeModal(dialog)},1500),insertBtn.textContent=t(563),insertBtn[t(471)][t(652)]=t(547))},t.send(o(566)+voucher+"&mac="+mac+"&ipAddress="+ipAddress+o(671)+extendTimeCriteria),totalCoinReceived=!1}ajaxsettings[_0x11fe60(601)](_0x11fe60(627),_0x11fe60(537),!0),ajaxsettings[_0x11fe60(529)](_0x11fe60(538),_0x11fe60(487)),ajaxsettings[_0x11fe60(529)](_0x11fe60(684),_0x11fe60(657)),ajaxsettings[_0x11fe60(516)](),ajaxsettings[_0x11fe60(573)]=function(){var e=_0x11fe60;if(4==this.readyState&&200==this[e(635)]){var t=JSON[e(628)](this[e(512)]);if(pause_button=t.Settings[e(518)],member_logout_button=t[e(517)][e(507)],currency=t[e(517)][e(508)],username_only=t[e(517)].username_only,link[e(589)]=t[e(517)].footer_link,link[e(530)]=t[e(517)].footer_text,t[e(517)][e(676)]&&(document[e(574)][e(471)][e(660)](e(649),t.custom_theme[e(618)]),document[e(574)].style.setProperty(e(474),t[e(676)][e(698)]),document.documentElement[e(471)][e(660)](e(634),t.custom_theme[e(592)]),document[e(574)][e(471)][e(660)](e(694),t.custom_theme[e(640)])),t[e(517)][e(587)]?(payment_gateway=t[e(587)].payment_gateway,portal_key=t[e(587)].portal_key):document[e(689)](e(653))[e(471)][e(564)]=e(699),t[e(517)][e(501)]||(document[e(593)](e(545))[e(471)][e(564)]="none"),t[e(517)][e(668)]&&getInternetStatus(t.no_internet_settings[e(525)],t.no_internet_settings[e(494)],t[e(648)][e(469)],t.no_internet_settings[e(522)]),t.Settings[e(588)]&&(subscription=!0,subscription_prefix=t[e(539)]),0==t[e(517)][e(478)])ssid[e(608)]=t[e(650)][0][e(693)],vendor[e(530)]=t[e(650)][0][e(533)],vendorIpAddress=t.VendoAddresses[0][e(535)];else if(1==t.Settings[e(478)]){autoSelect=!1,null==getStorageValue(e(535))?(vendorIpAddress=t[e(650)][0][e(535)],ssid[e(608)]=t[e(650)][0][e(693)],vendor.innerHTML=t[e(650)][0].vendoName,setStorageValue(e(535),t[e(650)][0][e(535)]),setStorageValue(e(693),t[e(650)][0].ssid),setStorageValue(e(533),t[e(650)][0][e(533)])):(vendorIpAddress=getStorageValue("vendoIp"),ssid[e(608)]=getStorageValue(e(693)),vendor.innerHTML=getStorageValue(e(533)));for(var n=0;n<t[e(650)].length;n++)selectVendo.innerHTML=selectVendo[e(608)]+'<button type="button" class="btn btn-primary" onclick="insertBtnManual(this)" data-vendo-ip="'+t[e(650)][n].vendoIp+e(585)+t.VendoAddresses[n][e(693)]+e(491)+t[e(650)][n][e(533)]+'">'+t[e(650)][n][e(533)]+"</button>"}else if(2==t[e(517)][e(478)])for(n=0;n<t[e(650)].length;n++){var o=interfaceName;t[e(650)][n].interfaceName==o&&(ssid[e(608)]=t.VendoAddresses[n].ssid,vendor.textContent=t[e(650)][n][e(533)],vendorIpAddress=t.VendoAddresses[n][e(535)])}1!==t[e(517)].vendo_option&&(autoSelect=!0,removeStorageValue(e(535)),removeStorageValue(e(693)),removeStorageValue(e(533))),api()}},ajaxsettings[_0x11fe60(467)]=function(){var e=_0x11fe60;body[e(471)][e(564)]=e(662),alert(e(677))},insertBtn.onclick=function(){var e=_0x11fe60;autoSelect?(insertBtn[e(471)][e(652)]="none",insertBtn[e(608)]=e(572),vcTopUp=!1,insertCoin(0)):internet_status==e(505)?notifyCoinSlotError(e(629)):openModal(svmodal)},document[_0x11fe60(593)](_0x11fe60(647))[_0x11fe60(481)]=function(){donepaying()},document[_0x11fe60(593)]("[data-sv-close]")[_0x11fe60(481)]=function(){closeModal(svmodal)},document[_0x11fe60(593)](_0x11fe60(542)).onclick=function(){closeModal(document.querySelector(_0x11fe60(555)))},document[_0x11fe60(593)](_0x11fe60(548))[_0x11fe60(481)]=function(){closeModal(document.querySelector("[data-member]"))},document[_0x11fe60(593)](_0x11fe60(586))[_0x11fe60(481)]=function(){closeModal(document.querySelector(_0x11fe60(655)))},pauseBtn[_0x11fe60(481)]=function(){paused(1e3)},document[_0x11fe60(689)](_0x11fe60(490)).onclick=function(){getWifiRate(0)},document[_0x11fe60(689)](_0x11fe60(653))[_0x11fe60(481)]=function(){var e=_0x11fe60;openModal(document[e(593)](e(607)))},document[_0x11fe60(593)]("[data-gc-close]").onclick=function(){closeModal(document.querySelector("[data-gcash]"))},document[_0x11fe60(593)](_0x11fe60(520))[_0x11fe60(481)]=function(){var e=_0x11fe60,t=document[e(689)](e(569))[e(654)],n=document[e(689)]("gcAmount")[e(654)];location[e(589)]=payment_gateway+e(606)+portal_key+"&mobile="+t+e(702)+n},document[_0x11fe60(689)](_0x11fe60(613))[_0x11fe60(481)]=function(){var e=_0x11fe60,t=document.querySelector(e(500));document.getElementById(e(488))[e(471)][e(564)]=e(662),t.querySelector(e(610)).textContent=e(680),openModal(t)},document.querySelector(_0x11fe60(496)).onclick=function(){var e=_0x11fe60;doConnect(!0,!1,document.getElementById(e(511)).value,document[e(689)](e(568))[e(654)])},document[_0x11fe60(689)]("submit").onclick=function(){var e=_0x11fe60,t=document[e(689)](e(596))[e(654)];internet_status==e(505)?notifyCoinSlotError(e(629)):""==t?(openModal(dialog),dialog[e(593)](".progress-bar")[e(471)][e(564)]=e(699),dialog[e(593)](".header")[e(530)]=e(475),setTimeout(function(){closeModal(dialog)},2e3)):(vcTopUp=!0,insertCoin(0))};var remainTime=null;function checkCoin(e){var t,n,o,a,i=_0x11fe60;vcTopUp?e.status==i(623)?(null!==intervalID&&(intervalManager(0),(o=new XMLHttpRequest).open(i(688),i(470),!0),o.send(i(615))),totalCoinReceived=parseInt(e[i(513)])):e[i(498)]==i(664)?(totalCoinReceived=parseInt(e[i(513)]),donepaying()):"coinslot.busy"==e[i(498)]?(clearInterval(timer),0==totalCoinReceived?insertCoinhidden(!0,i(681)):donepaying()):clearInterval(timer):(t=document[i(593)]("#validity"),n=document[i(593)](i(647)),o=document[i(593)]("#totalTime"),e.status==i(623)?(n[i(471)].pointerEvents="none",setStorageValue(i(614),voucher),null!==intervalID&&(intervalManager(0),(a=new XMLHttpRequest).open(i(688),i(470),!0),a.send(i(615))),totalCoinReceived=parseInt(e[i(513)]),document[i(593)](i(675)).textContent=currency+" "+e[i(513)],0==e[i(669)]?o[i(530)]=i(502):o[i(530)]=credits(parseInt(e[i(669)])),0==e[i(509)]?t[i(530)]=i(502):t[i(530)]=credits(parseInt(60*e[i(509)])),coindropPlay()):e[i(498)]==i(696)?(icmodal[i(593)](".header")[i(530)]=i(616),n[i(530)]="Wait"):e[i(498)]==i(664)?(totalCoinReceived=parseInt(e.totalCoin),n.style[i(652)]=i(547),coinslotExit||(icmodal.querySelector(i(610))[i(530)]=i(645)),remainTime=parseInt(parseInt(e.remainTime)/1e3),a=parseFloat(e.waitTime),a=parseInt(1e3*remainTime/a*100),0<(totalCoinReceived=parseInt(e[i(513)]))&&(n.textContent="Done Paying"),0==remainTime?0<totalCoinReceived?donepaying():insertCoinhidden(!0,"Coin slot expired"):(totalCoinReceived=parseInt(e[i(513)]),document[i(593)]("#totalCoin")[i(530)]=currency+" "+e.totalCoin,0==e[i(669)]?o[i(530)]=i(502):o[i(530)]=credits(parseInt(e[i(669)])),0==e[i(509)]?t[i(530)]=i(502):t[i(530)]=credits(parseInt(60*e[i(509)])),icmodal.querySelector(i(519))[i(471)][i(562)]=a+"%")):e.errorCode==i(504)?(audioPlay(!1),clearInterval(timer),0==totalCoinReceived?insertCoinhidden(!0,i(681)):donepaying()):clearInterval(timer))}function donepaying(){var e,t=_0x11fe60;0<totalCoinReceived?(vcTopUp||(audioPlay(!1),closeModal(icmodal)),clearInterval(timer),timer=null,openModal(dialog),dialog[t(593)](t(519))[t(471)][t(562)]="50%",dialog[t(593)](t(610))[t(530)]=t(579),(e=new XMLHttpRequest)[t(601)](t(688),t(602)+vendorIpAddress+"/useVoucher",!0),e[t(529)](t(503),t(665)),e[t(516)]("voucher="+voucher),e[t(573)]=function(){var e=t;totalCoinReceived=0,4==this[e(482)]&&200==this.status&&(JSON[e(628)](this[e(512)])[e(635)]==e(623)?(dialog[e(593)](e(519))[e(471)][e(562)]=e(644),dialog[e(593)](e(610))[e(530)]=e(576),setTimeout(function(){forceLogin()},500)):insertCoinhidden(!1))},e[t(467)]=function(){var e=t;dialog[e(593)](e(519)).style[e(562)]=e(644),dialog[e(593)](e(610))[e(530)]="Force login, Please wait!",setTimeout(function(){forceLogin()},5e3)}):insertCoinhidden(!1)}function convertextVoucher(){var t=_0x11fe60,e=document[t(689)](t(596))[t(654)];voucherToConvert=e,(e=new XMLHttpRequest)[t(601)](t(688),t(602)+vendorIpAddress+t(604),!0),e[t(529)](t(557),t(665)),e.send("voucher="+voucher+"&convertVoucher="+voucherToConvert),e[t(573)]=function(){var n=t;4==this[n(482)]&&200==this.status&&(JSON[n(628)](this[n(512)])[n(635)]==n(598)?insertCoinhidden(!0,"Invalid Voucher"):null==timer&&(timer=window.setInterval(function(){var t=n;dialog.querySelector(t(519))[t(471)][t(562)]="30%",dialog[t(593)](t(610))[t(530)]=t(526);var e=new XMLHttpRequest;e[t(601)]("POST","http://"+vendorIpAddress+t(560),!0),e[t(529)]("Content-Type",t(665)),e[t(516)]("voucher="+voucher),e[t(573)]=function(){var e=t;4==this[e(482)]&&200==this[e(635)]&&checkCoin(JSON[e(628)](this[e(512)]))}},1e3)),document[n(689)](n(596))[n(654)]="")},e.onerror=function(){var e=t;document[e(689)](e(596))[e(654)]=""}}function _0x5456(e,t){var n=_0x593a();return(_0x5456=function(e,t){return n[e-=465]})(e,t)}function insertCoinhidden(e,t){var n=_0x11fe60;closeModal(icmodal),clearInterval(timer),timer=null,insertingCoin=!1,vcTopUp||audioPlay(!1),e&&(dialog[n(593)](n(519))[n(471)][n(564)]=n(699),openModal(dialog),coinslotExit=!0,dialog[n(593)](".header")[n(530)]=t,setTimeout(function(){closeModal(dialog)},2e3)),0==totalCoinReceived&&cancelTopUp()}function cancelTopUp(){var e=_0x11fe60,t=new XMLHttpRequest;t.open(e(688),e(602)+vendorIpAddress+e(534),!0),t.setRequestHeader(e(557),e(665)),t[e(516)]("voucher="+voucher+e(521)+mac)}function getWifiRate(n){var u=_0x11fe60,m=document[u(689)](u(490)),p=document[u(689)](u(595));document[u(689)]("ratesBody")[u(471)].display=u(662),m[u(471)].pointerEvents=u(699),p[u(471)][u(564)]=u(699),wrmodal=document[u(593)](u(555)),m[u(608)]='<div class="loader"></div>';var e=new XMLHttpRequest;e[u(601)]("GET",u(602)+vendorIpAddress+u(541)+Date[u(605)](),!0),e[u(529)](u(503),"text/plain"),e.send(),e[u(573)]=function(){var s=u;if(4==this[s(482)]&&200==this[s(635)]){var e=this.responseText;m.style[s(652)]=s(547),p[s(471)][s(564)]=s(662),m.textContent=s(682),wrmodal[s(593)](s(610)).textContent=s(682),openModal(wrmodal);var t,n=e[s(651)]("|"),o="";for(t in n){var a=n[t][s(651)]("#"),i=60*parseInt(a[2]),r=60*parseInt(a[3]);function l(e){var t=s,n=Math[t(674)](e/86400),o=Math[t(674)](e%86400/3600),a=Math[t(674)](e%3600/60),i=0<n?n+t(1===n?700:485):"",r=0<o?o+"":"0",e=0<a?a+"":"0";return 0<n&&0==o&&0==a?i:0<a&&0==o&&0==n?e+"min":0<o&&0==a&&0==n?r+t(656):i+r+"h:"+e+"m"}var d=l(i),c=l(r);c==s(626)||0==r?c=s(690):i==r&&(c=s(612)),o=(o=(o=(o+="<tr>")+s(527)+currency+" "+a[1]+".00</td>")+"<td>"+d+s(479))+"<td>"+c+s(479),o+=s(666),document.getElementById(s(495))[s(608)]=o}}},e.onerror=function(){var e=u,t=document[e(689)](e(490));n<4?(openModal(wrmodal),wrmodal[e(593)](e(610))[e(530)]=e(697),setTimeout(function(){getWifiRate(n+1)},1e3)):(wrmodal[e(593)](e(610))[e(530)]=e(499),setTimeout(function(){closeModal(wrmodal)},2e3),t[e(471)][e(652)]=e(547),t[e(530)]="Wifi Rates")}}var animate=function(){var n=_0x11fe60,e=new XMLHttpRequest;e[n(601)]("GET",n(631),!0),e.send(),e.onreadystatechange=function(){var e,t=n;4===this[t(482)]&&200===this[t(635)]&&(e=JSON[t(628)](this[t(512)]),null==getStorageValue("ip")?setStorageValue("ip",e.ip):getStorageValue("ip")!==e.ip&&(removeStorageValue("ip"),location.reload()),mac=e[t(581)],macNoColon=replaceAll(mac,":"),ipAddress=e.ip,document[t(689)](t(658))[t(608)]=secondsToDhms(e[t(591)]),stats.textContent=e.status,e.status==t(678)&&intervalManager(0),0==e[t(591)]&&((e=new XMLHttpRequest)[t(601)](t(688),t(470),!0),e[t(529)](t(557),t(665)),e[t(516)](t(672)),e[t(573)]=function(){var e=t;4==this[e(482)]&&200==this[e(635)]&&location.reload()},null!==getCookie(t(637))&&eraseCookie(t(637)),removeStorageValue(t(646)),removeStorageValue(t(695)),removeStorageValue(t(614))),pause_button?prefix||(pauseBtn.style[t(564)]=t(662),pauseBtn[t(471)][t(652)]="auto"):(pauseBtn.style[t(564)]=t(699),pauseBtn[t(471)][t(652)]=t(699)))},e[n(467)]=function(){notifyCoinSlotError(n(590))}};function intervalManager(e,t,n){var o=_0x11fe60;e?(intervalID=setInterval(t,n),pauseBtn[o(530)]=o(476)):(clearInterval(intervalID),intervalID=null)}function _0x593a(){var e=["ssid","--text-color","tempMac","coin.is.reading","Retrying, Please wait!","container","none","Day ","invalidUser","&amount=","toUTCString","Error!","<script>","onerror","344617PabbaM","internet_status_tittle","/logout","style","Warning!","clear","--container","Invalid Voucher!","Pause","Not Available","vendo_option","</td>","454380JnhtJi","onclick","readyState",'<div class="d-flex flex-fill align-content-stretch">',"</div><div>seconds</div></div>","Days ","Cancel","Tue, 01 Jan 1980 1:00:00 GMT","mlBody","insertBtn","ratesBtn",'" data-vendo-name="',"indexOf","No internet connection as of the moment, Please try again later","auto_pause","rates","[data-login]","[data-ssid]","errorCode","Wifi rates is not availabe at this moment.","[data-member]","voucher_input","--:--","Content-type","coinslot.busy","down"," Days ","member_logout_button","currency","validity","Resume","Muser","responseText","totalCoin","src","selectVendo","send","Settings","pause_button",".progress-bar","[data-gc-pay]","&mac=","internet_status_text","cookie","body","insertcoin","Converting, Please wait!","<td>","classList","setRequestHeader","textContent",'<div class="inner-wrapper"><div id="hr">',"play","vendoName","/cancelTopUp","vendoIp","/login","settings.json","Expires","subscription_prefix",".txt","/getRates?date=","[data-wr-close]","username=","282989suXnfI",".btn-group .input-group","voucher","auto","[data-ml-close]","; expires=","&password=","replace","Connected","https://ae-tech-services.github.io/portal/sounds/coinreceived.mp3?date=",'<div class="d-flex flex-fill align-content-stretch"><div class="inner-wrapper"><div>UNLIMITED</div><div></div></div></div>',"[data-rates]","Error connecting to ","Content-Type",'<div class="d-flex flex-fill align-content-stretch"><div class="inner-wrapper"><div>Subscription</div><div></div></div></div>',"Logout","/checkCoin","2829831Rimhjh","width","Insert Coin","display","210ZWIBjm","voucher=","currentTime","Mpass","gcNumber","substring","15641000IJJtYC",'<div class="loader"></div>',"onreadystatechange","documentElement","link","Connecting, Please wait!","100%","getTime","Processing, Please wait!","</div><div>day</div></div>","mac","6uDXCVC","load","setTime",'" data-ssid="',"[data-msg-close]","gcash_payment","subscription","href","offline","timeleft","color","querySelector","internetstatus.txt","ratesBody","username","9xGuVxi","false","coin.slot.banned","show","open","http://","getItem","/convertVoucher","now","?portal_key=","[data-gcash]","innerHTML","<td><p><b>User:</b></td><td><span>",".header","Connect","No Pause Time","memberBtn","activeVoucher","erase-cookie=false","Reading coin, please wait","435592wspysL","background","length","=; Max-Age=-99999999;","Time Paused","Loading...","true","Coin slot is busy, Please try again later","add","0h:0m","GET","parse","no.internet.detected","</div><div>days</div></div>","/api",'</div><div>minutes</div></div><div class="inner-wrapper"><div id="sec">',"#message","--color-primary","status","[data-select-vendo]","timeLeft","/data/","3971335joNvHe","textcolor"," is offline!","; path=/","exp","75%","Please Insert Coin","activeMac","[data-ic-close]","no_internet_settings","--background","VendoAddresses","split","pointerEvents","gcashBtn","value","[data-message]","hour","no-cache","timer","setItem","setProperty","[data-dialog]","block","[data-insert-coin]","coin.not.inserted","application/x-www-form-urlencoded","</tr>","reload","internet_status","timeAdded",'<div class="inner-wrapper"><div id="min">',"&extendTime=","erase-cookie=true","Retrying, Please Wait!","floor","#totalCoin","custom_theme","Note: Changes takes effects only after uploading to mikrotik","Disconnected"," Day ","Login to Connect","Coinslot was cancelled","Wifi Rates","</div><div>hours</div></div>","Pragma","interface","</div><div>seconds</div></div></div>","modal-active","POST","getElementById","Unlimited",", Please check your wifi connection","null"];return(_0x593a=function(){return e})()}function audioPlay(e){var t=_0x11fe60;4===insertcoinbg[t(482)]?e?insertcoinbg[t(532)]():(insertcoinbg.pause(),insertcoinbg[t(567)]=0):(insertcoinbg[t(514)]="https://ae-tech-services.github.io/portal/sounds/insertcoinbg.mp3?date="+Date[t(605)](),insertcoinbg[t(583)](),insertcoinbg.loop=!0,insertcoinbg[t(532)]())}function coindropPlay(){var e=_0x11fe60;4===coinCount[e(482)]||(coinCount[e(514)]=e(553)+Date.now(),coinCount[e(583)]()),coinCount[e(532)]()}function credits(e){var t=_0x11fe60;e=Number(e);var n=Math[t(674)](e/86400),o=Math[t(674)](e%86400/3600),e=Math[t(674)](e%3600/60);return(0<n?n+t(1==n?679:506):"")+""+(0<o?o+"":"0")+"h:"+(0<e?e+"":"0")+"m"}function secondsToDhms(e){var t=_0x11fe60;e=Number(e);var n=Math[t(674)](e/86400),o=Math[t(674)](e%86400/3600),a=Math[t(674)](e%3600/60),i=Math[t(674)](e%60);if(n<10&&(n="0"+n),o<10&&(o="0"+o),a<10&&(a="0"+a),i<10&&(i="0"+i),e=0<n?'<div class="inner-wrapper"><div id="day">'+n+t(1==n?580:630):"",a=0<a?a+"":"00",i=0<i?i+"":"00",0<n&&0==o){var r=0<o?o+"":"00";return t(483)+e+t(531)+r+'</div><div>hours</div></div><div class="inner-wrapper"><div id="min">'+a+t(632)+i+t(484)}return r=0<o?t(531)+o+t(683)+"":"",t(483)+e+r+t(670)+a+t(632)+i+t(686)}function setStorageValue(e,t){null!=localStorage&&localStorage[_0x11fe60(659)](e,t)}function removeStorageValue(e){null!=localStorage&&localStorage.removeItem(e)}function getStorageValue(e){if(null!=localStorage)return localStorage[_0x11fe60(603)](e)}function clearStorageValue(){null!=localStorage&&localStorage[_0x11fe60(473)]()}function setCookie(e,t,n){var o,a=_0x11fe60,i="";n&&((o=new Date)[a(584)](o[a(578)]()+1e3*n),i=a(549)+o[a(703)]()),document[a(523)]=e+"="+(t||"")+i+a(642)}function getCookie(e){for(var t=_0x11fe60,n=e+"=",o=document.cookie[t(651)](";"),a=0;a<o.length;a++){for(var i=o[a];" "==i.charAt(0);)i=i[t(570)](1,i[t(619)]);if(0==i[t(492)](n))return i[t(570)](n.length,i[t(619)])}return null}function eraseCookie(e){var t=_0x11fe60;document[t(523)]=e+t(620)}function replaceAll(e,t){for(var n=_0x11fe60,o=e;0<o.indexOf(t);)o=o[n(551)](t,"");return o}function notifyCoinSlotError(e){var t=_0x11fe60,n=document[t(593)](t(655));openModal(n),e==t(504)&&(n[t(593)](t(610)).textContent="Error!",document.querySelector(t(633)).textContent=t(624)),e==t(599)&&(n[t(593)](t(610))[t(530)]=t(472),document[t(593)]("#message").textContent="You have been banned from using coin slot, due to multiple request for insert coin, please try again later!"),e==t(629)&&(n[t(593)](t(610))[t(530)]=t(465),document.querySelector(t(633))[t(530)]=t(493)),e==t(590)?(n[t(593)](t(610))[t(530)]="Error!",document[t(593)](t(633))[t(530)]=t(556)+'"'+document[t(593)](t(497))[t(530)]+'"'+t(691)):setTimeout(function(){var e=t;insertBtn[e(471)][e(652)]=e(547),insertBtn.textContent=e(563)},3e3)}function openModal(e){var t=_0x11fe60;null!=e&&(e[t(528)].add(t(600)),body.classList[t(625)](t(687)))}function closeModal(e){var t=_0x11fe60;null!=e&&(e[t(528)].remove("show"),body[t(528)].remove("modal-active"))}function updateButtonColors(){document.querySelectorAll("[data-ic-close].btn.btn-secondary").forEach(e=>{"Cancel"===e.textContent.trim()?e.style.backgroundColor="#f44336":"Done Paying"===e.textContent.trim()&&(e.style.backgroundColor="#4caf50")})}function updateNewTimer(){var e=document.querySelector(".inner-wrapper div")?document.querySelector(".inner-wrapper div").innerText.trim():"";if("UNLIMITED"===e||"Subscription"===e)return document.getElementById("newDay").style.display="none",document.getElementById("dayLabel").style.display="none",document.getElementById("newHour").style.display="none",document.getElementById("hourLabel").style.display="none",document.getElementById("newMin").style.display="none",document.getElementById("minLabel").style.display="none",document.getElementById("newSec").style.display="none",document.getElementById("secLabel").style.display="none",document.getElementById("dashDiv").style.display="inline",void(document.getElementById("dashDiv").innerText=e);var t=document.getElementById("day")?document.getElementById("day").innerText:"0",n=document.getElementById("hr")?document.getElementById("hr").innerText:"0",o=document.getElementById("min")?document.getElementById("min").innerText:"0",e=document.getElementById("sec")?document.getElementById("sec").innerText:"0";document.getElementById("newDay").style.display=0<t?"inline":"none",document.getElementById("dayLabel").style.display=0<t?"inline":"none",document.getElementById("newHour").style.display=0<n||0<t?"inline":"none",document.getElementById("hourLabel").style.display=0<n||0<t?"inline":"none",document.getElementById("newMin").style.display=0<o||0<n||0<t?"inline":"none",document.getElementById("minLabel").style.display=0<o||0<n||0<t?"inline":"none",document.getElementById("newSec").style.display=0<e||0<o||0<n||0<t?"inline":"none",document.getElementById("secLabel").style.display=0<e||0<o||0<n||0<t?"inline":"none",document.getElementById("newDay").innerText=t,document.getElementById("newHour").innerText=n,document.getElementById("newMin").innerText=o,document.getElementById("newSec").innerText=e;e=0==t&&0==n&&0==o&&0==e;document.getElementById("dashDiv").style.display=e?"inline":"none",document.getElementById("dashDiv").innerText=e?"--":""}document.addEventListener("DOMContentLoaded",function(){setInterval(function(){const e=document.getElementById("status"),t=document.getElementById("statusImg"),n=document.getElementById("vendoAlert");if(e&&t)switch(e.textContent.trim()){case"Connected":t.src="https://ae-tech-services.github.io/portal/IMG/connected.png",t.classList.remove("blink"),e.style.color="rgb(21, 214, 79)",n&&(n.style.marginBottom="");break;case"Disconnected":t.src="https://ae-tech-services.github.io/portal/IMG/disconnected.png",t.classList.remove("blink"),e.style.color="red",n&&(n.style.marginBottom="");break;case"Time Paused":t.src="https://ae-tech-services.github.io/portal/IMG/pause.png",t.classList.add("blink"),e.style.color="grey",n&&(n.style.marginBottom="");break;default:t.src="assets/IMG/unknown.png",t.classList.remove("blink"),e.style.color="black",n&&(n.style.marginBottom="")}},1e3)}),window.addEventListener("load",function(){const e=document.getElementById("loading"),t=document.getElementById("content");setTimeout(function(){e.style.display="none",t.style.display="block"},2500)}),setInterval(updateButtonColors,10),updateNewTimer(),setInterval(updateNewTimer,1);
