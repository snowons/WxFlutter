// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {"material_community_icons":{"materialdesignicons-url":"https://materialdesignicons.com/","ab-testing":983068,"access-point":61442,"access-point-network":61443,"access-point-network-off":64445,"account":61444,"account-alert":61445,"account-alert-outline":64300,"account-arrow-left":64301,"account-arrow-left-outline":64302,"account-arrow-right":64303,"account-arrow-right-outline":64304,"account-badge":64899,"account-badge-alert":64900,"account-badge-alert-outline":64901,"account-badge-horizontal":65008,"account-badge-horizontal-outline":65009,"account-badge-outline":64902,"account-box":61446,"account-box-multiple":63795,"account-box-outline":61447,"account-card-details":62930,"account-card-details-outline":64903,"account-check":61448,"account-check-outline":64446,"account-child":64136,"account-child-circle":64137,"account-circle":61449,"account-circle-outline":64305,"account-clock":64306,"account-clock-outline":64307,"account-convert":61450,"account-details":63025,"account-edit":63163,"account-edit-outline":983069,"account-group":63560,"account-group-outline":64308,"account-heart":63640,"account-heart-outline":64447,"account-key":61451,"account-key-outline":64448,"account-minus":61453,"account-minus-outline":64235,"account-multiple":61454,"account-multiple-check":63684,"account-multiple-minus":62931,"account-multiple-minus-outline":64449,"account-multiple-outline":61455,"account-multiple-plus":61456,"account-multiple-plus-outline":63487,"account-network":61457,"account-network-outline":64450,"account-off":61458,"account-off-outline":64451,"account-outline":61459,"account-plus":61460,"account-plus-outline":63488,"account-question":64309,"account-question-outline":64310,"account-remove":61461,"account-remove-outline":64236,"account-search":61462,"account-search-outline":63796,"account-settings":63024,"account-star":61463,"account-star-outline":64452,"account-supervisor":64138,"account-supervisor-circle":64139,"account-switch":61465,"account-tie":64703,"accusoft":63561,"adchoices":64798,"adjust":61466,"adobe":63797,"adobe-acrobat":65469,"air-conditioner":61467,"air-filter":64799,"air-horn":64904,"air-purifier":64800,"airbag":64453,"airballoon":61468,"airplane":61469,"airplane-landing":62932,"airplane-off":61470,"airplane-takeoff":62933,"airplay":61471,"airport":63562,"alarm":61472,"alarm-bell":63373,"alarm-check":61473,"alarm-light":63374,"alarm-light-outline":64454,"alarm-multiple":61474,"alarm-note":65166,"alarm-note-off":65167,"alarm-off":61475,"alarm-plus":61476,"alarm-snooze":63117,"album":61477,"alert":61478,"alert-box":61479,"alert-box-outline":64704,"alert-circle":61480,"alert-circle-outline":62934,"alert-decagram":63164,"alert-decagram-outline":64705,"alert-octagon":61481,"alert-octagon-outline":64706,"alert-octagram":63334,"alert-octagram-outline":64707,"alert-outline":61482,"alien":63641,"all-inclusive":63165,"alpha":61483,"alpha-a":65,"alpha-a-box":64237,"alpha-a-box-outline":64455,"alpha-a-circle":64456,"alpha-a-circle-outline":64457,"alpha-b":66,"alpha-b-box":64238,"alpha-b-box-outline":64458,"alpha-b-circle":64459,"alpha-b-circle-outline":64460,"alpha-c":67,"alpha-c-box":64239,"alpha-c-box-outline":64461,"alpha-c-circle":64462,"alpha-c-circle-outline":64463,"alpha-d":68,"alpha-d-box":64240,"alpha-d-box-outline":64464,"alpha-d-circle":64465,"alpha-d-circle-outline":64466,"alpha-e":69,"alpha-e-box":64241,"alpha-e-box-outline":64467,"alpha-e-circle":64468,"alpha-e-circle-outline":64469,"alpha-f":70,"alpha-f-box":64242,"alpha-f-box-outline":64470,"alpha-f-circle":64471,"alpha-f-circle-outline":64472,"alpha-g":71,"alpha-g-box":64243,"alpha-g-box-outline":64473,"alpha-g-circle":64474,"alpha-g-circle-outline":64475,"alpha-h":72,"alpha-h-box":64244,"alpha-h-box-outline":64476,"alpha-h-circle":64477,"alpha-h-circle-outline":64478,"alpha-i":73,"alpha-i-box":64245,"alpha-i-box-outline":64479,"alpha-i-circle":64480,"alpha-i-circle-outline":64481,"alpha-j":74,"alpha-j-box":64246,"alpha-j-box-outline":64482,"alpha-j-circle":64483,"alpha-j-circle-outline":64484,"alpha-k":75,"alpha-k-box":64247,"alpha-k-box-outline":64485,"alpha-k-circle":64486,"alpha-k-circle-outline":64487,"alpha-l":76,"alpha-l-box":64248,"alpha-l-box-outline":64488,"alpha-l-circle":64489,"alpha-l-circle-outline":64490,"alpha-m":77,"alpha-m-box":64249,"alpha-m-box-outline":64491,"alpha-m-circle":64492,"alpha-m-circle-outline":64493,"alpha-n":78,"alpha-n-box":64250,"alpha-n-box-outline":64494,"alpha-n-circle":64495,"alpha-n-circle-outline":64496,"alpha-o":79,"alpha-o-box":64251,"alpha-o-box-outline":64497,"alpha-o-circle":64498,"alpha-o-circle-outline":64499,"alpha-p":80,"alpha-p-box":64252,"alpha-p-box-outline":64500,"alpha-p-circle":64501,"alpha-p-circle-outline":64502,"alpha-q":81,"alpha-q-box":64253,"alpha-q-box-outline":64503,"alpha-q-circle":64504,"alpha-q-circle-outline":64505,"alpha-r":82,"alpha-r-box":64254,"alpha-r-box-outline":64506,"alpha-r-circle":64507,"alpha-r-circle-outline":64508,"alpha-s":83,"alpha-s-box":64255,"alpha-s-box-outline":64509,"alpha-s-circle":64510,"alpha-s-circle-outline":64511,"alpha-t":84,"alpha-t-box":64256,"alpha-t-box-outline":64512,"alpha-t-circle":64513,"alpha-t-circle-outline":64514,"alpha-u":85,"alpha-u-box":64257,"alpha-u-box-outline":64515,"alpha-u-circle":64516,"alpha-u-circle-outline":64517,"alpha-v":86,"alpha-v-box":64258,"alpha-v-box-outline":64518,"alpha-v-circle":64519,"alpha-v-circle-outline":64520,"alpha-w":87,"alpha-w-box":64259,"alpha-w-box-outline":64521,"alpha-w-circle":64522,"alpha-w-circle-outline":64523,"alpha-x":88,"alpha-x-box":64260,"alpha-x-box-outline":64524,"alpha-x-circle":64525,"alpha-x-circle-outline":64526,"alpha-y":89,"alpha-y-box":64261,"alpha-y-box-outline":64527,"alpha-y-circle":64528,"alpha-y-circle-outline":64529,"alpha-z":90,"alpha-z-box":64262,"alpha-z-box-outline":64530,"alpha-z-circle":64531,"alpha-z-circle-outline":64532,"alphabetical":61484,"altimeter":62935,"amazon":61485,"amazon-alexa":63685,"amazon-drive":61486,"ambulance":61487,"ammunition":64708,"ampersand":64140,"amplifier":61488,"anchor":61489,"android":61490,"android-auto":64141,"android-debug-bridge":61491,"android-head":63375,"android-messages":64801,"android-studio":61492,"angle-acute":63798,"angle-obtuse":63799,"angle-right":63800,"angular":63153,"angularjs":63166,"animation":62936,"animation-outline":64142,"animation-play":63801,"animation-play-outline":64143,"anvil":63642,"apple":61493,"apple-finder":61494,"apple-icloud":61496,"apple-ios":61495,"apple-keyboard-caps":63026,"apple-keyboard-command":63027,"apple-keyboard-control":63028,"apple-keyboard-option":63029,"apple-keyboard-shift":63030,"apple-safari":61497,"application":62996,"application-export":64905,"application-import":64906,"approximately-equal":65470,"approximately-equal-box":65471,"apps":61499,"apps-box":64802,"arch":63686,"archive":61500,"arrange-bring-forward":61501,"arrange-bring-to-front":61502,"arrange-send-backward":61503,"arrange-send-to-back":61504,"arrow-all":61505,"arrow-bottom-left":61506,"arrow-bottom-left-bold-outline":63926,"arrow-bottom-left-thick":63927,"arrow-bottom-right":61507,"arrow-bottom-right-bold-outline":63928,"arrow-bottom-right-thick":63929,"arrow-collapse":62997,"arrow-collapse-all":61508,"arrow-collapse-down":63377,"arrow-collapse-horizontal":63563,"arrow-collapse-left":63378,"arrow-collapse-right":63379,"arrow-collapse-up":63380,"arrow-collapse-vertical":63564,"arrow-decision":63930,"arrow-decision-auto":63931,"arrow-decision-auto-outline":63932,"arrow-decision-outline":63933,"arrow-down":61509,"arrow-down-bold":63277,"arrow-down-bold-box":63278,"arrow-down-bold-box-outline":63279,"arrow-down-bold-circle":61511,"arrow-down-bold-circle-outline":61512,"arrow-down-bold-hexagon-outline":61513,"arrow-down-bold-outline":63934,"arrow-down-box":63167,"arrow-down-circle":64695,"arrow-down-circle-outline":64696,"arrow-down-drop-circle":61514,"arrow-down-drop-circle-outline":61515,"arrow-down-thick":61510,"arrow-expand":62998,"arrow-expand-all":61516,"arrow-expand-down":63381,"arrow-expand-horizontal":63565,"arrow-expand-left":63382,"arrow-expand-right":63383,"arrow-expand-up":63384,"arrow-expand-vertical":63566,"arrow-left":61517,"arrow-left-bold":63280,"arrow-left-bold-box":63281,"arrow-left-bold-box-outline":63282,"arrow-left-bold-circle":61519,"arrow-left-bold-circle-outline":61520,"arrow-left-bold-hexagon-outline":61521,"arrow-left-bold-outline":63935,"arrow-left-box":63168,"arrow-left-circle":64697,"arrow-left-circle-outline":64698,"arrow-left-drop-circle":61522,"arrow-left-drop-circle-outline":61523,"arrow-left-right":65168,"arrow-left-right-bold":65169,"arrow-left-right-bold-outline":63936,"arrow-left-thick":61518,"arrow-right":61524,"arrow-right-bold":63283,"arrow-right-bold-box":63284,"arrow-right-bold-box-outline":63285,"arrow-right-bold-circle":61526,"arrow-right-bold-circle-outline":61527,"arrow-right-bold-hexagon-outline":61528,"arrow-right-bold-outline":63937,"arrow-right-box":63169,"arrow-right-circle":64699,"arrow-right-circle-outline":64700,"arrow-right-drop-circle":61529,"arrow-right-drop-circle-outline":61530,"arrow-right-thick":61525,"arrow-split-horizontal":63802,"arrow-split-vertical":63803,"arrow-top-left":61531,"arrow-top-left-bold-outline":63938,"arrow-top-left-bottom-right":65170,"arrow-top-left-bottom-right-bold":65171,"arrow-top-left-thick":63939,"arrow-top-right":61532,"arrow-top-right-bold-outline":63940,"arrow-top-right-bottom-left":65172,"arrow-top-right-bottom-left-bold":65173,"arrow-top-right-thick":63941,"arrow-up":61533,"arrow-up-bold":63286,"arrow-up-bold-box":63287,"arrow-up-bold-box-outline":63288,"arrow-up-bold-circle":61535,"arrow-up-bold-circle-outline":61536,"arrow-up-bold-hexagon-outline":61537,"arrow-up-bold-outline":63942,"arrow-up-box":63170,"arrow-up-circle":64701,"arrow-up-circle-outline":64702,"arrow-up-down":65174,"arrow-up-down-bold":65175,"arrow-up-down-bold-outline":63943,"arrow-up-drop-circle":61538,"arrow-up-drop-circle-outline":61539,"arrow-up-thick":61534,"artist":63490,"artist-outline":64709,"artstation":64311,"aspect-ratio":64035,"assistant":61540,"asterisk":63171,"at":61541,"atlassian":63491,"atm":64803,"atom":63335,"atom-variant":65176,"attachment":61542,"audio-video":63804,"audiobook":61543,"augmented-reality":63567,"auto-fix":61544,"auto-upload":61545,"autorenew":61546,"av-timer":61547,"aws":65010,"axe":63687,"axis":64804,"axis-arrow":64805,"axis-arrow-lock":64806,"axis-lock":64807,"axis-x-arrow":64808,"axis-x-arrow-lock":64809,"axis-x-rotate-clockwise":64810,"axis-x-rotate-counterclockwise":64811,"axis-x-y-arrow-lock":64812,"axis-y-arrow":64813,"axis-y-arrow-lock":64814,"axis-y-rotate-clockwise":64815,"axis-y-rotate-counterclockwise":64816,"axis-z-arrow":64817,"axis-z-arrow-lock":64818,"axis-z-rotate-clockwise":64819,"axis-z-rotate-counterclockwise":64820,"azure":63492,"babel":64036,"baby":61548,"baby-bottle":65366,"baby-bottle-outline":65367,"baby-carriage":63118,"baby-carriage-off":65472,"baby-face":65177,"baby-face-outline":65178,"backburger":61549,"backspace":61550,"backspace-outline":64312,"backspace-reverse":65179,"backspace-reverse-outline":65180,"backup-restore":61551,"bacteria":65266,"bacteria-outline":65267,"badminton":63568,"bag-carry-on":65368,"bag-carry-on-check":64833,"bag-carry-on-off":65369,"bag-checked":65370,"bag-personal":65011,"bag-personal-off":65012,"bag-personal-off-outline":65013,"bag-personal-outline":65014,"baguette":65371,"balloon":64037,"ballot":63944,"ballot-outline":63945,"ballot-recount":64533,"ballot-recount-outline":64534,"bandage":64907,"bandcamp":63092,"bank":61552,"bank-minus":64908,"bank-outline":65181,"bank-plus":64909,"bank-remove":64910,"bank-transfer":64038,"bank-transfer-in":64039,"bank-transfer-out":64040,"barcode":61553,"barcode-scan":61554,"barley":61555,"barley-off":64313,"barn":64314,"barrel":61556,"baseball":63569,"baseball-bat":63570,"basecamp":61557,"basket":61558,"basket-fill":61559,"basket-unfill":61560,"basketball":63493,"basketball-hoop":64535,"basketball-hoop-outline":64536,"bat":64315,"battery":61561,"battery-10":61562,"battery-10-bluetooth":63805,"battery-20":61563,"battery-20-bluetooth":63806,"battery-30":61564,"battery-30-bluetooth":63807,"battery-40":61565,"battery-40-bluetooth":63808,"battery-50":61566,"battery-50-bluetooth":63809,"battery-60":61567,"battery-60-bluetooth":63810,"battery-70":61568,"battery-70-bluetooth":63811,"battery-80":61569,"battery-80-bluetooth":63812,"battery-90":61570,"battery-90-bluetooth":63813,"battery-alert":61571,"battery-alert-bluetooth":63814,"battery-bluetooth":63815,"battery-bluetooth-variant":63816,"battery-charging":61572,"battery-charging-10":63643,"battery-charging-100":61573,"battery-charging-20":61574,"battery-charging-30":61575,"battery-charging-40":61576,"battery-charging-50":63644,"battery-charging-60":61577,"battery-charging-70":63645,"battery-charging-80":61578,"battery-charging-90":61579,"battery-charging-outline":63646,"battery-charging-wireless":63494,"battery-charging-wireless-10":63495,"battery-charging-wireless-20":63496,"battery-charging-wireless-30":63497,"battery-charging-wireless-40":63498,"battery-charging-wireless-50":63499,"battery-charging-wireless-60":63500,"battery-charging-wireless-70":63501,"battery-charging-wireless-80":63502,"battery-charging-wireless-90":63503,"battery-charging-wireless-alert":63504,"battery-charging-wireless-outline":63505,"battery-minus":61580,"battery-negative":61581,"battery-outline":61582,"battery-plus":61583,"battery-positive":61584,"battery-unknown":61585,"battery-unknown-bluetooth":63817,"battlenet":64316,"beach":61586,"beaker":64710,"beaker-outline":63119,"beats":61591,"bed-empty":63647,"bee":65473,"bee-flower":65474,"beer":61592,"behance":61593,"bell":61594,"bell-alert":64821,"bell-alert-outline":65182,"bell-circle":64822,"bell-circle-outline":64823,"bell-off":61595,"bell-off-outline":64144,"bell-outline":61596,"bell-plus":61597,"bell-plus-outline":64145,"bell-ring":61598,"bell-ring-outline":61599,"bell-sleep":61600,"bell-sleep-outline":64146,"beta":61601,"betamax":63946,"biathlon":65015,"bible":61602,"bike":61603,"billiards":64317,"billiards-rack":64318,"bing":61604,"binoculars":61605,"bio":61606,"biohazard":61607,"bitbucket":61608,"bitcoin":63506,"black-mesa":61609,"blackberry":61610,"blender":64711,"blender-software":61611,"blinds":61612,"block-helper":61613,"blogger":61614,"blood-bag":64712,"bluetooth":61615,"bluetooth-audio":61616,"bluetooth-connect":61617,"bluetooth-off":61618,"bluetooth-settings":61619,"bluetooth-transfer":61620,"blur":61621,"blur-linear":61622,"blur-off":61623,"blur-radial":61624,"bolnisi-cross":64713,"bolt":64911,"bomb":63120,"bomb-off":63172,"bone":61625,"book":61626,"book-lock":63385,"book-lock-open":63386,"book-minus":62937,"book-minus-multiple":64147,"book-multiple":61627,"book-open":61629,"book-open-outline":64319,"book-open-page-variant":62938,"book-open-variant":61630,"book-outline":64320,"book-play":65183,"book-play-outline":65184,"book-plus":62939,"book-plus-multiple":64148,"book-remove":64150,"book-remove-multiple":64149,"book-search":65185,"book-search-outline":65186,"book-variant":61631,"book-variant-multiple":61628,"bookmark":61632,"bookmark-check":61633,"bookmark-minus":63947,"bookmark-minus-outline":63948,"bookmark-multiple":65016,"bookmark-multiple-outline":65017,"bookmark-music":61634,"bookmark-off":63949,"bookmark-off-outline":63950,"bookmark-outline":61635,"bookmark-plus":61637,"bookmark-plus-outline":61636,"bookmark-remove":61638,"boom-gate":65187,"boom-gate-alert":65188,"boom-gate-alert-outline":65189,"boom-gate-down":65190,"boom-gate-down-outline":65191,"boom-gate-outline":65192,"boom-gate-up":65193,"boom-gate-up-outline":65194,"boombox":62940,"bootstrap":63173,"border-all":61639,"border-all-variant":63648,"border-bottom":61640,"border-bottom-variant":63649,"border-color":61641,"border-horizontal":61642,"border-inside":61643,"border-left":61644,"border-left-variant":63650,"border-none":61645,"border-none-variant":63651,"border-outside":61646,"border-right":61647,"border-right-variant":63652,"border-style":61648,"border-top":61649,"border-top-variant":63653,"border-vertical":61650,"bottle-wine":63571,"bow-tie":63095,"bowl":62999,"bowling":61651,"box":61652,"box-cutter":61653,"box-shadow":63031,"boxing-glove":64321,"braille":63951,"brain":63952,"bread-slice":64714,"bread-slice-outline":64715,"bridge":63000,"briefcase":61654,"briefcase-account":64716,"briefcase-account-outline":64717,"briefcase-check":61655,"briefcase-download":61656,"briefcase-download-outline":64537,"briefcase-edit":64151,"briefcase-edit-outline":64538,"briefcase-minus":64041,"briefcase-minus-outline":64539,"briefcase-outline":63507,"briefcase-plus":64042,"briefcase-plus-outline":64540,"briefcase-remove":64043,"briefcase-remove-outline":64541,"briefcase-search":64044,"briefcase-search-outline":64542,"briefcase-upload":61657,"briefcase-upload-outline":64543,"brightness-1":61658,"brightness-2":61659,"brightness-3":61660,"brightness-4":61661,"brightness-5":61662,"brightness-6":61663,"brightness-7":61664,"brightness-auto":61665,"brightness-percent":64718,"broom":61666,"brush":61667,"buddhism":63818,"buffer":63001,"bug":61668,"bug-check":64045,"bug-check-outline":64046,"bug-outline":64047,"bugle":64912,"bulldozer":64263,"bullet":64719,"bulletin-board":61669,"bullhorn":61670,"bullhorn-outline":64264,"bullseye":62941,"bullseye-arrow":63688,"bus":61671,"bus-alert":64152,"bus-articulated-end":63387,"bus-articulated-front":63388,"bus-clock":63689,"bus-double-decker":63389,"bus-multiple":65372,"bus-school":63390,"bus-side":63391,"cached":61672,"cactus":64913,"cake":61673,"cake-layered":61674,"cake-variant":61675,"calculator":61676,"calculator-variant":64153,"calendar":61677,"calendar-account":65268,"calendar-account-outline":65269,"calendar-alert":64048,"calendar-blank":61678,"calendar-blank-outline":64322,"calendar-check":61679,"calendar-check-outline":64544,"calendar-clock":61680,"calendar-edit":63654,"calendar-export":64265,"calendar-heart":63953,"calendar-import":64266,"calendar-minus":64824,"calendar-month":65018,"calendar-month-outline":65019,"calendar-multiple":61681,"calendar-multiple-check":61682,"calendar-multiselect":64049,"calendar-outline":64323,"calendar-plus":61683,"calendar-question":63121,"calendar-range":63096,"calendar-range-outline":64324,"calendar-remove":61684,"calendar-remove-outline":64545,"calendar-repeat":65195,"calendar-repeat-outline":65196,"calendar-search":63819,"calendar-star":63954,"calendar-text":61685,"calendar-text-outline":64546,"calendar-today":61686,"calendar-week":64050,"calendar-week-begin":64051,"calendar-weekend":65270,"calendar-weekend-outline":65271,"call-made":61687,"call-merge":61688,"call-missed":61689,"call-received":61690,"call-split":61691,"camcorder":61692,"camcorder-box":61693,"camcorder-box-off":61694,"camcorder-off":61695,"camera":61696,"camera-account":63690,"camera-burst":63122,"camera-control":64325,"camera-enhance":61697,"camera-enhance-outline":64326,"camera-front":61698,"camera-front-variant":61699,"camera-gopro":63392,"camera-image":63691,"camera-iris":61700,"camera-metering-center":63393,"camera-metering-matrix":63394,"camera-metering-partial":63395,"camera-metering-spot":63396,"camera-off":62943,"camera-outline":64825,"camera-party-mode":61701,"camera-plus":65272,"camera-plus-outline":65273,"camera-rear":61702,"camera-rear-variant":61703,"camera-retake":65020,"camera-retake-outline":65021,"camera-switch":61704,"camera-timer":61705,"camera-wireless":64914,"camera-wireless-outline":64915,"campfire":65274,"cancel":63289,"candle":62946,"candycane":61706,"cannabis":63397,"caps-lock":64154,"car":61707,"car-back":65022,"car-battery":61708,"car-brake-abs":64547,"car-brake-alert":64548,"car-brake-hold":64826,"car-brake-parking":64827,"car-child-seat":65475,"car-connected":61709,"car-convertible":63398,"car-cruise-control":64828,"car-defrost-front":64829,"car-defrost-rear":64830,"car-door":64327,"car-electric":64328,"car-esp":64549,"car-estate":63399,"car-hatchback":63400,"car-key":64329,"car-light-dimmed":64550,"car-light-fog":64551,"car-light-high":64552,"car-limousine":63692,"car-multiple":64330,"car-off":65023,"car-parking-lights":64831,"car-pickup":63401,"car-seat":65476,"car-seat-cooler":65477,"car-seat-heater":65478,"car-shift-pattern":65373,"car-side":63402,"car-sports":63403,"car-tire-alert":64553,"car-traction-control":64832,"car-wash":61710,"caravan":63404,"card":64331,"card-bulleted":64332,"card-bulleted-off":64333,"card-bulleted-off-outline":64334,"card-bulleted-outline":64335,"card-bulleted-settings":64336,"card-bulleted-settings-outline":64337,"card-outline":64338,"card-text":64339,"card-text-outline":64340,"cards":63032,"cards-club":63693,"cards-diamond":63694,"cards-heart":63695,"cards-outline":63033,"cards-playing-outline":63034,"cards-spade":63696,"cards-variant":63174,"carrot":61711,"cart":61712,"cart-arrow-down":64834,"cart-arrow-right":64554,"cart-arrow-up":64835,"cart-minus":64836,"cart-off":63083,"cart-outline":61713,"cart-plus":61714,"cart-remove":64837,"case-sensitive-alt":61715,"cash":61716,"cash-100":61717,"cash-marker":64916,"cash-multiple":61718,"cash-refund":64155,"cash-register":64720,"cash-usd":61719,"cassette":63955,"cast":61720,"cast-connected":61721,"cast-education":65133,"cast-off":63369,"castle":61722,"cat":61723,"cctv":63405,"ceiling-light":63336,"cellphone":61724,"cellphone-android":61725,"cellphone-arrow-down":63956,"cellphone-basic":61726,"cellphone-dock":61727,"cellphone-erase":63820,"cellphone-information":65374,"cellphone-iphone":61728,"cellphone-key":63821,"cellphone-link":61729,"cellphone-link-off":61730,"cellphone-lock":63822,"cellphone-message":63698,"cellphone-nfc":65197,"cellphone-off":63823,"cellphone-screenshot":64052,"cellphone-settings":61731,"cellphone-settings-variant":63824,"cellphone-sound":63825,"cellphone-text":63697,"cellphone-wireless":63508,"celtic-cross":64721,"certificate":61732,"chair-rolling":65466,"chair-school":61733,"charity":64555,"chart-arc":61734,"chart-areaspline":61735,"chart-areaspline-variant":65198,"chart-bar":61736,"chart-bar-stacked":63337,"chart-bell-curve":64556,"chart-bell-curve-cumulative":65479,"chart-bubble":62947,"chart-donut":63406,"chart-donut-variant":63407,"chart-gantt":63084,"chart-histogram":61737,"chart-line":61738,"chart-line-stacked":63338,"chart-line-variant":63408,"chart-multiline":63699,"chart-pie":61739,"chart-scatter-plot":65199,"chart-scatter-plot-hexbin":63085,"chart-timeline":63086,"chart-timeline-variant":65200,"chart-tree":65201,"chat":64341,"chat-alert":64342,"chat-outline":65275,"chat-processing":64343,"check":61740,"check-all":61741,"check-bold":65134,"check-box-multiple-outline":64557,"check-box-outline":64558,"check-circle":62944,"check-circle-outline":62945,"check-decagram":63376,"check-network":64559,"check-network-outline":64560,"check-outline":63572,"check-underline":65136,"check-underline-circle":65137,"check-underline-circle-outline":65138,"checkbook":64156,"checkbox-blank":61742,"checkbox-blank-circle":61743,"checkbox-blank-circle-outline":61744,"checkbox-blank-outline":61745,"checkbox-intermediate":63573,"checkbox-marked":61746,"checkbox-marked-circle":61747,"checkbox-marked-circle-outline":61748,"checkbox-marked-outline":61749,"checkbox-multiple-blank":61750,"checkbox-multiple-blank-circle":63035,"checkbox-multiple-blank-circle-outline":63036,"checkbox-multiple-blank-outline":61751,"checkbox-multiple-marked":61752,"checkbox-multiple-marked-circle":63037,"checkbox-multiple-marked-circle-outline":63038,"checkbox-multiple-marked-outline":61753,"checkerboard":61754,"chef-hat":64344,"chemical-weapon":61755,"chess-bishop":63579,"chess-king":63574,"chess-knight":63575,"chess-pawn":63576,"chess-queen":63577,"chess-rook":63578,"chevron-double-down":61756,"chevron-double-left":61757,"chevron-double-right":61758,"chevron-double-up":61759,"chevron-down":61760,"chevron-down-box":63957,"chevron-down-box-outline":63958,"chevron-down-circle":64267,"chevron-down-circle-outline":64268,"chevron-left":61761,"chevron-left-box":63959,"chevron-left-box-outline":63960,"chevron-left-circle":64269,"chevron-left-circle-outline":64270,"chevron-right":61762,"chevron-right-box":63961,"chevron-right-box-outline":63962,"chevron-right-circle":64271,"chevron-right-circle-outline":64272,"chevron-triple-down":64917,"chevron-triple-left":64918,"chevron-triple-right":64919,"chevron-triple-up":64920,"chevron-up":61763,"chevron-up-box":63963,"chevron-up-box-outline":63964,"chevron-up-circle":64273,"chevron-up-circle-outline":64274,"chili-hot":63409,"chili-medium":63410,"chili-mild":63411,"chip":63002,"christianity":63826,"christianity-outline":64722,"church":61764,"circle":63332,"circle-double":65202,"circle-edit-outline":63700,"circle-expand":65203,"circle-medium":63965,"circle-outline":63333,"circle-slice-1":64157,"circle-slice-2":64158,"circle-slice-3":64159,"circle-slice-4":64160,"circle-slice-5":64161,"circle-slice-6":64162,"circle-slice-7":64163,"circle-slice-8":64164,"circle-small":63966,"circular-saw":65139,"cisco-webex":61765,"city":61766,"city-variant":64053,"city-variant-outline":64054,"clipboard":61767,"clipboard-account":61768,"clipboard-account-outline":64561,"clipboard-alert":61769,"clipboard-alert-outline":64723,"clipboard-arrow-down":61770,"clipboard-arrow-down-outline":64562,"clipboard-arrow-left":61771,"clipboard-arrow-left-outline":64724,"clipboard-arrow-right":64725,"clipboard-arrow-right-outline":64726,"clipboard-arrow-up":64563,"clipboard-arrow-up-outline":64564,"clipboard-check":61772,"clipboard-check-outline":63655,"clipboard-flow":63175,"clipboard-outline":61773,"clipboard-play":64565,"clipboard-play-outline":64566,"clipboard-plus":63312,"clipboard-pulse":63580,"clipboard-pulse-outline":63581,"clipboard-text":61774,"clipboard-text-outline":64055,"clipboard-text-play":64567,"clipboard-text-play-outline":64568,"clippy":61775,"clock":63827,"clock-alert":63828,"clock-alert-outline":62926,"clock-check":65480,"clock-check-outline":65481,"clock-digital":65204,"clock-end":61777,"clock-fast":61778,"clock-in":61779,"clock-out":61780,"clock-outline":61776,"clock-start":61781,"close":61782,"close-box":61783,"close-box-multiple":64569,"close-box-multiple-outline":64570,"close-box-outline":61784,"close-circle":61785,"close-circle-outline":61786,"close-network":61787,"close-network-outline":64571,"close-octagon":61788,"close-octagon-outline":61789,"close-outline":63176,"closed-caption":61790,"closed-caption-outline":64921,"cloud":61791,"cloud-alert":63967,"cloud-braces":63412,"cloud-check":61792,"cloud-circle":61793,"cloud-download":61794,"cloud-download-outline":64345,"cloud-off-outline":61796,"cloud-outline":61795,"cloud-print":61797,"cloud-print-outline":61798,"cloud-question":64056,"cloud-search":63829,"cloud-search-outline":63830,"cloud-sync":63039,"cloud-tags":63413,"cloud-upload":61799,"cloud-upload-outline":64346,"clover":63509,"code-array":61800,"code-braces":61801,"code-brackets":61802,"code-equal":61803,"code-greater-than":61804,"code-greater-than-or-equal":61805,"code-less-than":61806,"code-less-than-or-equal":61807,"code-not-equal":61808,"code-not-equal-variant":61809,"code-parentheses":61810,"code-string":61811,"code-tags":61812,"code-tags-check":63123,"codepen":61813,"coffee":61814,"coffee-off":65482,"coffee-off-outline":65483,"coffee-outline":63177,"coffee-to-go":61815,"coffin":64347,"cogs":63701,"coin":61816,"coins":63124,"collage":63040,"collapse-all":64165,"collapse-all-outline":64166,"color-helper":61817,"comma":65140,"comma-box":65141,"comma-box-outline":65142,"comma-circle":65143,"comma-circle-outline":65144,"comment":61818,"comment-account":61819,"comment-account-outline":61820,"comment-alert":61821,"comment-alert-outline":61822,"comment-arrow-left":63968,"comment-arrow-left-outline":63969,"comment-arrow-right":63970,"comment-arrow-right-outline":63971,"comment-check":61823,"comment-check-outline":61824,"comment-eye":64057,"comment-eye-outline":64058,"comment-multiple":63582,"comment-multiple-outline":61825,"comment-outline":61826,"comment-plus":63972,"comment-plus-outline":61827,"comment-processing":61828,"comment-processing-outline":61829,"comment-question":63510,"comment-question-outline":61830,"comment-remove":62942,"comment-remove-outline":61831,"comment-search":64059,"comment-search-outline":64060,"comment-text":61832,"comment-text-multiple":63583,"comment-text-multiple-outline":63584,"comment-text-outline":61833,"compare":61834,"compass":61835,"compass-off":64348,"compass-off-outline":64349,"compass-outline":61836,"console":61837,"console-line":63414,"console-network":63656,"console-network-outline":64572,"contact-mail":61838,"contact-mail-outline":65205,"contact-phone":65206,"contact-phone-outline":65207,"contactless-payment":64838,"contacts":63178,"contain":64061,"contain-end":64062,"contain-start":64063,"content-copy":61839,"content-cut":61840,"content-duplicate":61841,"content-paste":61842,"content-save":61843,"content-save-alert":65375,"content-save-alert-outline":65376,"content-save-all":61844,"content-save-all-outline":65377,"content-save-edit":64727,"content-save-edit-outline":64728,"content-save-move":65145,"content-save-move-outline":65146,"content-save-outline":63511,"content-save-settings":63003,"content-save-settings-outline":64275,"contrast":61845,"contrast-box":61846,"contrast-circle":61847,"controller-classic":64350,"controller-classic-outline":64351,"cookie":61848,"coolant-temperature":62408,"copyright":62950,"cordova":63831,"corn":63415,"counter":61849,"cow":61850,"cowboy":65208,"cpu-32-bit":65276,"cpu-64-bit":65277,"crane":63585,"creation":61897,"creative-commons":64839,"credit-card":983056,"credit-card-clock":65278,"credit-card-clock-outline":65468,"credit-card-marker":63143,"credit-card-marker-outline":64922,"credit-card-minus":65484,"credit-card-minus-outline":65485,"credit-card-multiple":983057,"credit-card-multiple-outline":61852,"credit-card-off":983058,"credit-card-off-outline":62948,"credit-card-outline":61851,"credit-card-plus":983059,"credit-card-plus-outline":63093,"credit-card-refund":983060,"credit-card-refund-outline":64167,"credit-card-remove":65486,"credit-card-remove-outline":65487,"credit-card-scan":983061,"credit-card-scan-outline":61853,"credit-card-settings":983062,"credit-card-settings-outline":63702,"credit-card-wireless":63489,"credit-card-wireless-outline":64840,"cricket":64841,"crop":61854,"crop-free":61855,"crop-landscape":61856,"crop-portrait":61857,"crop-rotate":63125,"crop-square":61858,"crosshairs":61859,"crosshairs-gps":61860,"crosshairs-off":65378,"crown":61861,"cryengine":63832,"crystal-ball":64276,"cube":61862,"cube-outline":61863,"cube-scan":64352,"cube-send":61864,"cube-unfolded":61865,"cup":61866,"cup-off":62949,"cup-water":61867,"cupboard":65379,"cupboard-outline":65380,"cupcake":63833,"curling":63586,"currency-bdt":63587,"currency-brl":64353,"currency-btc":61868,"currency-cny":63417,"currency-eth":63418,"currency-eur":61869,"currency-gbp":61870,"currency-ils":64573,"currency-inr":61871,"currency-jpy":63419,"currency-krw":63420,"currency-kzt":63588,"currency-ngn":61872,"currency-php":63973,"currency-rial":65209,"currency-rub":61873,"currency-sign":63421,"currency-try":61874,"currency-twd":63422,"currency-usd":61875,"currency-usd-off":63097,"current-ac":63834,"current-dc":63835,"cursor-default":61876,"cursor-default-click":64729,"cursor-default-click-outline":64730,"cursor-default-outline":61877,"cursor-move":61878,"cursor-pointer":61879,"cursor-text":62951,"database":61880,"database-check":64168,"database-edit":64354,"database-export":63837,"database-import":63836,"database-lock":64169,"database-minus":61881,"database-plus":61882,"database-refresh":64731,"database-remove":64732,"database-search":63589,"database-settings":64733,"death-star":63703,"death-star-variant":63704,"deathly-hallows":64355,"debian":63705,"debug-step-into":61883,"debug-step-out":61884,"debug-step-over":61885,"decagram":63339,"decagram-outline":63340,"decimal-decrease":61886,"decimal-increase":61887,"delete":61888,"delete-circle":63106,"delete-circle-outline":64356,"delete-empty":63179,"delete-empty-outline":65210,"delete-forever":62952,"delete-forever-outline":64357,"delete-outline":63974,"delete-restore":63512,"delete-sweep":62953,"delete-sweep-outline":64574,"delete-variant":61889,"delta":61890,"desk-lamp":63838,"deskphone":61891,"desktop-classic":63423,"desktop-mac":61892,"desktop-mac-dashboard":63975,"desktop-tower":61893,"desktop-tower-monitor":64170,"details":61894,"dev-to":64842,"developer-board":63126,"deviantart":61895,"devices":65488,"dialpad":63004,"diameter":64575,"diameter-outline":64576,"diameter-variant":64577,"diamond":64358,"diamond-outline":64359,"diamond-stone":61896,"dice-1":61898,"dice-2":61899,"dice-3":61900,"dice-4":61901,"dice-5":61902,"dice-6":61903,"dice-d10":63342,"dice-d12":63590,"dice-d20":62954,"dice-d4":62955,"dice-d6":62956,"dice-d8":62957,"dice-multiple":63341,"dictionary":63005,"dip-switch":63424,"directions":61904,"directions-fork":63041,"disc":62958,"disc-alert":61905,"disc-player":63839,"discord":63087,"dishwasher":64171,"disqus":61906,"disqus-outline":61907,"diving-flippers":64923,"diving-helmet":64924,"diving-scuba":64925,"diving-scuba-flag":64926,"diving-scuba-tank":64927,"diving-scuba-tank-multiple":64928,"diving-snorkel":64929,"division":61908,"division-box":61909,"dlna":64064,"dna":63107,"dns":61910,"dns-outline":64360,"do-not-disturb":63127,"do-not-disturb-off":63128,"docker":63591,"doctor":64065,"dog":64066,"dog-service":64172,"dog-side":64067,"dolby":63154,"dolly":65211,"domain":61911,"domain-off":64843,"donkey":63425,"door":63513,"door-closed":63514,"door-open":63515,"doorbell-video":63592,"dot-net":64173,"dots-horizontal":61912,"dots-horizontal-circle":63426,"dots-horizontal-circle-outline":64361,"dots-vertical":61913,"dots-vertical-circle":63427,"dots-vertical-circle-outline":64362,"douban":63129,"download":61914,"download-multiple":63976,"download-network":63219,"download-network-outline":64578,"download-outline":64363,"drag":61915,"drag-horizontal":61916,"drag-variant":64364,"drag-vertical":61917,"drama-masks":64734,"draw":65382,"drawing":61918,"drawing-box":61919,"dresser":65383,"dresser-outline":65384,"dribbble":61920,"dribbble-box":61921,"drone":61922,"dropbox":61923,"drupal":61924,"duck":61925,"dumbbell":61926,"dump-truck":64579,"ear-hearing":63428,"ear-hearing-off":64068,"earth":61927,"earth-box":63180,"earth-box-off":63181,"earth-off":61928,"edge":61929,"egg":64174,"egg-easter":64175,"eight-track":63977,"eject":61930,"eject-outline":64365,"electric-switch":65212,"elephant":63429,"elevation-decline":61931,"elevation-rise":61932,"elevator":61933,"ellipse":65213,"ellipse-outline":65214,"email":61934,"email-alert":63182,"email-box":64735,"email-check":64176,"email-check-outline":64177,"email-edit":65280,"email-edit-outline":65281,"email-lock":61937,"email-mark-as-unread":64366,"email-minus":65282,"email-minus-outline":65283,"email-multiple":65284,"email-multiple-outline":65285,"email-newsletter":65489,"email-open":61935,"email-open-multiple":65286,"email-open-multiple-outline":65287,"email-open-outline":62959,"email-outline":61936,"email-plus":63978,"email-plus-outline":63979,"email-search":63840,"email-search-outline":63841,"email-variant":62960,"ember":64277,"emby":63155,"emoticon":64580,"emoticon-angry":64581,"emoticon-angry-outline":64582,"emoticon-cool":64583,"emoticon-cool-outline":61939,"emoticon-cry":64584,"emoticon-cry-outline":64585,"emoticon-dead":64586,"emoticon-dead-outline":63130,"emoticon-devil":64587,"emoticon-devil-outline":61940,"emoticon-excited":64588,"emoticon-excited-outline":63131,"emoticon-frown":65385,"emoticon-frown-outline":65386,"emoticon-happy":64589,"emoticon-happy-outline":61941,"emoticon-kiss":64590,"emoticon-kiss-outline":64591,"emoticon-neutral":64592,"emoticon-neutral-outline":61942,"emoticon-outline":61938,"emoticon-poop":61943,"emoticon-poop-outline":64593,"emoticon-sad":64594,"emoticon-sad-outline":61944,"emoticon-tongue":61945,"emoticon-tongue-outline":64595,"emoticon-wink":64596,"emoticon-wink-outline":64597,"engine":61946,"engine-off":64069,"engine-off-outline":64070,"engine-outline":61947,"equal":61948,"equal-box":61949,"equalizer":65215,"equalizer-outline":65216,"eraser":61950,"eraser-variant":63042,"escalator":61951,"eslint":64598,"et":64178,"ethereum":63593,"ethernet":61952,"ethernet-cable":61953,"ethernet-cable-off":61954,"etsy":61955,"ev-station":62961,"eventbrite":63430,"evernote":61956,"exclamation":61957,"exit-run":64071,"exit-to-app":61958,"expand-all":64179,"expand-all-outline":64180,"expansion-card":63661,"expansion-card-variant":65490,"exponent":63842,"exponent-box":63843,"export":61959,"export-variant":64367,"eye":61960,"eye-check":64736,"eye-check-outline":64737,"eye-circle":64368,"eye-circle-outline":64369,"eye-off":61961,"eye-off-outline":63184,"eye-outline":63183,"eye-plus":63594,"eye-plus-outline":63595,"eye-settings":63596,"eye-settings-outline":63597,"eyedropper":61962,"eyedropper-variant":61963,"face":63043,"face-agent":64844,"face-outline":64370,"face-profile":63044,"face-recognition":64599,"facebook":61964,"facebook-box":61965,"facebook-messenger":61966,"facebook-workplace":64278,"factory":61967,"fan":61968,"fan-off":63516,"fast-forward":61969,"fast-forward-10":64845,"fast-forward-30":64738,"fast-forward-outline":63185,"fax":61970,"feather":63186,"feature-search":64072,"feature-search-outline":64073,"fedora":63706,"ferris-wheel":65217,"ferry":61971,"file":61972,"file-account":63290,"file-alert":64074,"file-alert-outline":64075,"file-cabinet":64181,"file-cad":65288,"file-cad-box":65289,"file-cancel":64930,"file-cancel-outline":64931,"file-chart":61973,"file-check":61974,"file-check-outline":65147,"file-cloud":61975,"file-code":61998,"file-compare":63657,"file-delimited":61976,"file-delimited-outline":65218,"file-document":61977,"file-document-box":61978,"file-document-box-check":65219,"file-document-box-check-outline":65220,"file-document-box-minus":65221,"file-document-box-minus-outline":65222,"file-document-box-multiple":64182,"file-document-box-multiple-outline":64183,"file-document-box-outline":63980,"file-document-box-plus":65223,"file-document-box-plus-outline":65224,"file-document-box-remove":65225,"file-document-box-remove-outline":65226,"file-document-box-search":65227,"file-document-box-search-outline":65228,"file-document-edit":64932,"file-document-edit-outline":64933,"file-document-outline":63981,"file-download":63844,"file-download-outline":63845,"file-excel":61979,"file-excel-box":61980,"file-export":61981,"file-eye":64934,"file-eye-outline":64935,"file-find":61982,"file-find-outline":64371,"file-hidden":62995,"file-image":61983,"file-image-outline":65229,"file-import":61984,"file-lock":61985,"file-move":64184,"file-multiple":61986,"file-music":61987,"file-music-outline":65148,"file-outline":61988,"file-pdf":61989,"file-pdf-box":61990,"file-pdf-box-outline":65491,"file-pdf-outline":65149,"file-percent":63517,"file-plus":63313,"file-plus-outline":65290,"file-powerpoint":61991,"file-powerpoint-box":61992,"file-presentation-box":61993,"file-question":63598,"file-remove":64372,"file-replace":64279,"file-replace-outline":64280,"file-restore":63088,"file-search":64600,"file-search-outline":64601,"file-send":61994,"file-swap":65492,"file-swap-outline":65493,"file-table":64602,"file-table-outline":64603,"file-tree":63045,"file-undo":63707,"file-upload":64076,"file-upload-outline":64077,"file-video":61995,"file-video-outline":65040,"file-word":61996,"file-word-box":61997,"film":61999,"filmstrip":62000,"filmstrip-off":62001,"filter":62002,"filter-minus":65291,"filter-minus-outline":65292,"filter-outline":62003,"filter-plus":65293,"filter-plus-outline":65294,"filter-remove":62004,"filter-remove-outline":62005,"filter-variant":62006,"finance":63518,"find-replace":63187,"fingerprint":62007,"fingerprint-off":65230,"fire":62008,"fire-extinguisher":65295,"fire-truck":63658,"firebase":63846,"firefox":62009,"fireplace":65041,"fireplace-off":65042,"firework":65043,"fish":62010,"fishbowl":65296,"fishbowl-outline":65297,"fit-to-page":65298,"fit-to-page-outline":65299,"flag":62011,"flag-checkered":62012,"flag-minus":64373,"flag-outline":62013,"flag-plus":64374,"flag-remove":64375,"flag-triangle":62015,"flag-variant":62016,"flag-variant-outline":62014,"flare":64846,"flash":62017,"flash-alert":65300,"flash-alert-outline":65301,"flash-auto":62018,"flash-circle":63519,"flash-off":62019,"flash-outline":63188,"flash-red-eye":63098,"flashlight":62020,"flashlight-off":62021,"flask":61587,"flask-empty":61588,"flask-empty-outline":61589,"flask-outline":61590,"flattr":62022,"flickr":64739,"flip-to-back":62023,"flip-to-front":62024,"floor-lamp":63708,"floor-plan":63520,"floppy":62025,"floppy-variant":63982,"flower":62026,"flower-outline":63983,"flower-poppy":64740,"flower-tulip":63984,"flower-tulip-outline":63985,"focus-auto":65387,"focus-field":65388,"focus-field-horizontal":65389,"focus-field-vertical":65390,"folder":62027,"folder-account":62028,"folder-account-outline":64376,"folder-alert":64936,"folder-alert-outline":64937,"folder-clock":64185,"folder-clock-outline":64186,"folder-download":62029,"folder-edit":63709,"folder-edit-outline":64938,"folder-google-drive":62030,"folder-image":62031,"folder-key":63659,"folder-key-network":63660,"folder-key-network-outline":64604,"folder-lock":62032,"folder-lock-open":62033,"folder-move":62034,"folder-multiple":62035,"folder-multiple-image":62036,"folder-multiple-outline":62037,"folder-network":63599,"folder-network-outline":64605,"folder-open":63343,"folder-open-outline":64939,"folder-outline":62038,"folder-plus":62039,"folder-plus-outline":64377,"folder-pound":64741,"folder-pound-outline":64742,"folder-remove":62040,"folder-remove-outline":64378,"folder-search":63847,"folder-search-outline":63848,"folder-star":63132,"folder-star-outline":64379,"folder-swap":65494,"folder-swap-outline":65495,"folder-sync":64743,"folder-sync-outline":64744,"folder-text":64606,"folder-text-outline":64607,"folder-upload":62041,"folder-zip":63210,"folder-zip-outline":63416,"font-awesome":61498,"food":62042,"food-apple":62043,"food-apple-outline":64608,"food-croissant":63431,"food-fork-drink":62962,"food-off":62963,"food-variant":62044,"foot-print":65391,"football":62045,"football-australian":62046,"football-helmet":62047,"forklift":63432,"format-align-bottom":63314,"format-align-center":62048,"format-align-justify":62049,"format-align-left":62050,"format-align-middle":63315,"format-align-right":62051,"format-align-top":63316,"format-annotation-minus":64187,"format-annotation-plus":63046,"format-bold":62052,"format-clear":62053,"format-color-fill":62054,"format-color-highlight":65044,"format-color-text":63133,"format-columns":63710,"format-float-center":62055,"format-float-left":62056,"format-float-none":62057,"format-float-right":62058,"format-font":63189,"format-font-size-decrease":63986,"format-font-size-increase":63987,"format-header-1":62059,"format-header-2":62060,"format-header-3":62061,"format-header-4":62062,"format-header-5":62063,"format-header-6":62064,"format-header-decrease":62065,"format-header-equal":62066,"format-header-increase":62067,"format-header-pound":62068,"format-horizontal-align-center":63006,"format-horizontal-align-left":63007,"format-horizontal-align-right":63008,"format-indent-decrease":62069,"format-indent-increase":62070,"format-italic":62071,"format-letter-case":64281,"format-letter-case-lower":64282,"format-letter-case-upper":64283,"format-letter-ends-with":65496,"format-letter-matches":65497,"format-letter-starts-with":65498,"format-line-spacing":62072,"format-line-style":62920,"format-line-weight":62921,"format-list-bulleted":62073,"format-list-bulleted-square":64940,"format-list-bulleted-triangle":65231,"format-list-bulleted-type":62074,"format-list-checkbox":63849,"format-list-checks":63317,"format-list-numbered":62075,"format-list-numbered-rtl":64745,"format-overline":65232,"format-page-break":63190,"format-paint":62076,"format-paragraph":62077,"format-pilcrow":63191,"format-quote-close":62078,"format-quote-open":63318,"format-rotate-90":63145,"format-section":63134,"format-size":62079,"format-strikethrough":62080,"format-strikethrough-variant":62081,"format-subscript":62082,"format-superscript":62083,"format-text":62084,"format-text-rotation-angle-down":65499,"format-text-rotation-angle-up":65500,"format-text-rotation-down":64847,"format-text-rotation-down-vertical":65501,"format-text-rotation-none":64848,"format-text-rotation-up":65502,"format-text-rotation-vertical":65503,"format-text-variant":65045,"format-text-wrapping-clip":64746,"format-text-wrapping-overflow":64747,"format-text-wrapping-wrap":64748,"format-textbox":64749,"format-textdirection-l-to-r":62085,"format-textdirection-r-to-l":62086,"format-title":62964,"format-underline":62087,"format-vertical-align-bottom":63009,"format-vertical-align-center":63010,"format-vertical-align-top":63011,"format-wrap-inline":62088,"format-wrap-square":62089,"format-wrap-tight":62090,"format-wrap-top-bottom":62091,"forum":62092,"forum-outline":63521,"forward":62093,"forwardburger":64849,"fountain":63850,"fountain-pen":64750,"fountain-pen-tip":64751,"foursquare":62094,"freebsd":63711,"frequently-asked-questions":65233,"fridge":62096,"fridge-bottom":62098,"fridge-outline":62095,"fridge-top":62097,"fuel":63433,"fullscreen":62099,"fullscreen-exit":62100,"function":62101,"function-variant":63600,"fuse":64609,"fuse-blade":64610,"gamepad":62102,"gamepad-circle":65046,"gamepad-circle-down":65047,"gamepad-circle-left":65048,"gamepad-circle-outline":65049,"gamepad-circle-right":65050,"gamepad-circle-up":65051,"gamepad-down":65052,"gamepad-left":65053,"gamepad-right":65054,"gamepad-round":65055,"gamepad-round-down":65150,"gamepad-round-left":65151,"gamepad-round-outline":65152,"gamepad-round-right":65153,"gamepad-round-up":65154,"gamepad-square":65234,"gamepad-square-outline":65235,"gamepad-up":65155,"gamepad-variant":62103,"gamepad-variant-outline":65236,"gantry-crane":64941,"garage":63192,"garage-alert":63601,"garage-open":63193,"gas-cylinder":63047,"gas-station":62104,"gas-station-outline":65237,"gate":62105,"gate-and":63712,"gate-nand":63713,"gate-nor":63714,"gate-not":63715,"gate-or":63716,"gate-xnor":63717,"gate-xor":63718,"gatsby":65156,"gauge":62106,"gauge-empty":63602,"gauge-full":63603,"gauge-low":63604,"gavel":62107,"gender-female":62108,"gender-male":62109,"gender-male-female":62110,"gender-transgender":62111,"gentoo":63719,"gesture":63434,"gesture-double-tap":63291,"gesture-pinch":64188,"gesture-spread":64189,"gesture-swipe":64850,"gesture-swipe-down":63292,"gesture-swipe-horizontal":64190,"gesture-swipe-left":63293,"gesture-swipe-right":63294,"gesture-swipe-up":63295,"gesture-swipe-vertical":64191,"gesture-tap":63296,"gesture-tap-hold":64851,"gesture-two-double-tap":63297,"gesture-two-tap":63298,"ghost":62112,"ghost-off":63988,"gif":64852,"gift":65157,"gift-outline":62113,"git":62114,"github-box":62115,"github-circle":62116,"github-face":63194,"gitlab":64380,"glass-cocktail":62294,"glass-flute":62117,"glass-mug":62118,"glass-stange":62119,"glass-tulip":62120,"glass-wine":63605,"glassdoor":62121,"glasses":62122,"globe-model":63720,"gmail":62123,"gnome":62124,"go-kart":64853,"go-kart-track":64854,"gog":64381,"golf":63522,"gondola":63109,"goodreads":64855,"google":62125,"google-adwords":64611,"google-analytics":63435,"google-assistant":63436,"google-cardboard":62126,"google-chrome":62127,"google-circles":62128,"google-circles-communities":62129,"google-circles-extended":62130,"google-circles-group":62131,"google-classroom":62144,"google-controller":62132,"google-controller-off":62133,"google-drive":62134,"google-earth":62135,"google-fit":63851,"google-glass":62136,"google-hangouts":62153,"google-home":63523,"google-keep":63195,"google-lens":63989,"google-maps":62965,"google-nearby":62137,"google-pages":62138,"google-photos":63196,"google-physical-web":62139,"google-play":62140,"google-plus":62141,"google-plus-box":62142,"google-podcast":65238,"google-spreadsheet":63990,"google-street-view":64612,"google-translate":62143,"gradient":63135,"grain":64856,"graphql":63606,"grave-stone":64382,"grease-pencil":63048,"greater-than":63852,"greater-than-or-equal":63853,"grid":62145,"grid-large":63319,"grid-off":62146,"grill":65158,"group":62147,"guitar-acoustic":63344,"guitar-electric":62148,"guitar-pick":62149,"guitar-pick-outline":62150,"guy-fawkes-mask":63524,"hackernews":63012,"hail":64192,"halloween":64383,"hamburger":63108,"hammer":63721,"hand":64078,"hand-left":65159,"hand-okay":64079,"hand-peace":64080,"hand-peace-variant":64081,"hand-pointing-down":64082,"hand-pointing-left":64083,"hand-pointing-right":62151,"hand-pointing-up":64084,"hand-right":65160,"hand-saw":65161,"handball":65392,"hanger":62152,"hard-hat":63854,"harddisk":62154,"hat-fedora":64384,"hazard-lights":64613,"hdr":64857,"hdr-off":64858,"headphones":62155,"headphones-bluetooth":63855,"headphones-box":62156,"headphones-off":63437,"headphones-settings":62157,"headset":62158,"headset-dock":62159,"headset-off":62160,"heart":62161,"heart-box":62162,"heart-box-outline":62163,"heart-broken":62164,"heart-broken-outline":64752,"heart-circle":63856,"heart-circle-outline":63857,"heart-flash":65302,"heart-half":63198,"heart-half-full":63197,"heart-half-outline":63199,"heart-multiple":64085,"heart-multiple-outline":64086,"heart-off":63320,"heart-outline":62165,"heart-pulse":62966,"helicopter":64193,"help":62166,"help-box":63370,"help-circle":62167,"help-circle-outline":63013,"help-network":63220,"help-network-outline":64614,"help-rhombus":64385,"help-rhombus-outline":64386,"hexagon":62168,"hexagon-multiple":63200,"hexagon-outline":62169,"hexagon-slice-1":64194,"hexagon-slice-2":64195,"hexagon-slice-3":64196,"hexagon-slice-4":64197,"hexagon-slice-5":64198,"hexagon-slice-6":64199,"hexagram":64200,"hexagram-outline":64201,"high-definition":63438,"high-definition-box":63607,"highway":62967,"hiking":64859,"hinduism":63858,"history":62170,"hockey-puck":63608,"hockey-sticks":63609,"hololens":62171,"home":62172,"home-account":63525,"home-alert":63610,"home-analytics":65239,"home-assistant":63439,"home-automation":63440,"home-circle":63441,"home-city":64753,"home-city-outline":64754,"home-currency-usd":63662,"home-export-outline":65464,"home-flood":65303,"home-floor-0":64942,"home-floor-1":64860,"home-floor-2":64861,"home-floor-3":64862,"home-floor-a":64863,"home-floor-b":64864,"home-floor-g":64865,"home-floor-l":64866,"home-floor-negative-1":64943,"home-group":64944,"home-heart":63526,"home-import-outline":65465,"home-lock":63722,"home-lock-open":63723,"home-map-marker":62968,"home-minus":63859,"home-modern":62173,"home-outline":63136,"home-plus":63860,"home-thermometer":65393,"home-thermometer-outline":65394,"home-variant":62174,"home-variant-outline":64387,"hook":63201,"hook-off":63202,"hops":62175,"horseshoe":64087,"hospital":983063,"hospital-box":62176,"hospital-box-outline":983064,"hospital-building":62177,"hospital-marker":62178,"hot-tub":63527,"hotel":62179,"houzz":62180,"houzz-box":62181,"hubspot":64755,"hulu":63528,"human":62182,"human-child":62183,"human-female":63049,"human-female-boy":64088,"human-female-female":64089,"human-female-girl":64090,"human-greeting":63050,"human-handsdown":63051,"human-handsup":63052,"human-male":63053,"human-male-boy":64091,"human-male-female":62184,"human-male-girl":64092,"human-male-height":65304,"human-male-height-variant":65305,"human-male-male":64093,"human-pregnant":62927,"humble-bundle":63299,"ice-cream":63529,"ice-pop":65306,"id-card":65504,"identifier":65307,"iframe":64615,"iframe-outline":64616,"image":62185,"image-album":62186,"image-area":62187,"image-area-close":62188,"image-auto-adjust":65505,"image-broken":62189,"image-broken-variant":62190,"image-filter":62191,"image-filter-black-white":62192,"image-filter-center-focus":62193,"image-filter-center-focus-strong":65308,"image-filter-center-focus-strong-outline":65309,"image-filter-center-focus-weak":62194,"image-filter-drama":62195,"image-filter-frames":62196,"image-filter-hdr":62197,"image-filter-none":62198,"image-filter-tilt-shift":62199,"image-filter-vintage":62200,"image-frame":65162,"image-move":63991,"image-multiple":62201,"image-off":63530,"image-outline":63861,"image-plus":63611,"image-search":63862,"image-search-outline":63863,"image-size-select-actual":64617,"image-size-select-large":64618,"image-size-select-small":64619,"import":62202,"inbox":63110,"inbox-arrow-down":62203,"inbox-arrow-up":62417,"inbox-multiple":63663,"inbox-multiple-outline":64388,"incognito":62969,"infinity":63203,"information":62204,"information-outline":62205,"information-variant":63054,"instagram":62206,"instapaper":62207,"internet-explorer":62208,"invert-colors":62209,"invert-colors-off":65163,"ip":64094,"ip-network":64095,"ip-network-outline":64620,"ipod":64621,"islam":63864,"itunes":63094,"jabber":64945,"jeepney":62210,"jellyfish":65310,"jellyfish-outline":65311,"jira":62211,"jquery":63612,"jsfiddle":62212,"json":63014,"judaism":63865,"kabaddi":64867,"karate":63531,"keg":62213,"kettle":62970,"kettle-outline":65395,"key":62214,"key-change":62215,"key-minus":62216,"key-outline":64946,"key-plus":62217,"key-remove":62218,"key-variant":62219,"key-wireless":65506,"keyboard":62220,"keyboard-backspace":62221,"keyboard-caps":62222,"keyboard-close":62223,"keyboard-off":62224,"keyboard-off-outline":65164,"keyboard-outline":63866,"keyboard-return":62225,"keyboard-settings":63992,"keyboard-settings-outline":63993,"keyboard-tab":62226,"keyboard-variant":62227,"kickstarter":63300,"knife":63994,"knife-military":63995,"kodi":62228,"label":62229,"label-off":64202,"label-off-outline":64203,"label-outline":62230,"label-variant":64204,"label-variant-outline":64205,"ladybug":63532,"lambda":63015,"lamp":63156,"lan":62231,"lan-connect":62232,"lan-disconnect":62233,"lan-pending":62234,"language-c":63089,"language-cpp":63090,"language-csharp":62235,"language-css3":62236,"language-go":63442,"language-haskell":64622,"language-html5":62237,"language-java":64284,"language-javascript":62238,"language-lua":63664,"language-php":62239,"language-python":62240,"language-python-text":62241,"language-r":63443,"language-ruby-on-rails":64206,"language-swift":63204,"language-typescript":63205,"laptop":62242,"laptop-chromebook":62243,"laptop-mac":62244,"laptop-off":63206,"laptop-windows":62245,"laravel":64207,"lasso":65312,"lastfm":62246,"lastpass":62534,"latitude":65396,"launch":62247,"lava-lamp":63444,"layers":62248,"layers-minus":65165,"layers-off":62249,"layers-off-outline":63996,"layers-outline":63997,"layers-plus":65072,"layers-remove":65073,"layers-triple":65397,"layers-triple-outline":65398,"lead-pencil":63055,"leaf":62250,"leaf-maple":64623,"leak":64947,"leak-off":64948,"led-off":62251,"led-on":62252,"led-outline":62253,"led-strip":63445,"led-variant-off":62254,"led-variant-on":62255,"led-variant-outline":62256,"less-than":63867,"less-than-or-equal":63868,"library":62257,"library-books":62258,"library-movie":64756,"library-music":62259,"library-music-outline":65313,"library-plus":62260,"library-shelves":64389,"library-video":64757,"license":65507,"lifebuoy":63613,"light-switch":63869,"lightbulb":62261,"lightbulb-off":65074,"lightbulb-off-outline":65075,"lightbulb-on":63207,"lightbulb-on-outline":63208,"lightbulb-outline":62262,"lighthouse":63998,"lighthouse-on":63999,"link":62263,"link-box":64758,"link-box-outline":64759,"link-box-variant":64760,"link-box-variant-outline":64761,"link-off":62264,"link-plus":64624,"link-variant":62265,"link-variant-off":62266,"linkedin":62267,"linkedin-box":62268,"linux":62269,"linux-mint":63724,"litecoin":64096,"loading":63345,"location-enter":65508,"location-exit":65509,"lock":62270,"lock-alert":63725,"lock-clock":63870,"lock-open":62271,"lock-open-outline":62272,"lock-open-variant":65510,"lock-open-variant-outline":65511,"lock-outline":62273,"lock-pattern":63209,"lock-plus":62971,"lock-question":63726,"lock-reset":63346,"lock-smart":63665,"locker":63446,"locker-multiple":63447,"login":62274,"login-variant":62972,"logout":62275,"logout-variant":62973,"longitude":65399,"looks":62276,"loupe":62277,"lumx":62278,"lyft":64285,"magnet":62279,"magnet-on":62280,"magnify":62281,"magnify-close":63871,"magnify-minus":62282,"magnify-minus-cursor":64097,"magnify-minus-outline":63211,"magnify-plus":62283,"magnify-plus-cursor":64098,"magnify-plus-outline":63212,"mail":65240,"mail-ru":62284,"mailbox":63213,"mailbox-open":64868,"mailbox-open-outline":64869,"mailbox-open-up":64870,"mailbox-open-up-outline":64871,"mailbox-outline":64872,"mailbox-up":64873,"mailbox-up-outline":64874,"map":62285,"map-check":65241,"map-check-outline":65242,"map-clock":64762,"map-clock-outline":64763,"map-legend":64000,"map-marker":62286,"map-marker-alert":65314,"map-marker-alert-outline":65315,"map-marker-check":64625,"map-marker-circle":62287,"map-marker-distance":63727,"map-marker-minus":63056,"map-marker-multiple":62288,"map-marker-off":62289,"map-marker-outline":63448,"map-marker-path":64764,"map-marker-plus":63057,"map-marker-question":65316,"map-marker-question-outline":65317,"map-marker-radius":62290,"map-marker-remove":65318,"map-marker-remove-variant":65319,"map-minus":63872,"map-outline":63873,"map-plus":63874,"map-search":63875,"map-search-outline":63876,"mapbox":64390,"margin":62291,"markdown":62292,"markdown-outline":65400,"marker":63058,"marker-cancel":64949,"marker-check":62293,"mastodon":64208,"mastodon-variant":64209,"material-design":63877,"material-ui":62295,"math-compass":62296,"math-cos":64626,"math-integral":65512,"math-integral-box":65513,"math-norm":65514,"math-norm-box":65515,"math-sin":64627,"math-tan":64628,"matrix":63016,"maxcdn":62297,"medal":63878,"medical-bag":63214,"medium":62298,"meetup":64210,"memory":62299,"menu":62300,"menu-down":62301,"menu-down-outline":63157,"menu-left":62302,"menu-left-outline":64001,"menu-open":64391,"menu-right":62303,"menu-right-outline":64002,"menu-swap":64099,"menu-swap-outline":64100,"menu-up":62304,"menu-up-outline":63158,"merge":65401,"message":62305,"message-alert":62306,"message-alert-outline":64003,"message-bulleted":63137,"message-bulleted-off":63138,"message-draw":62307,"message-image":62308,"message-lock":65516,"message-outline":62309,"message-plus":63059,"message-processing":62310,"message-reply":62311,"message-reply-text":62312,"message-settings":63215,"message-settings-variant":63216,"message-text":62313,"message-text-lock":65517,"message-text-outline":62314,"message-video":62315,"meteor":63017,"metronome":63449,"metronome-tick":63450,"micro-sd":63451,"microphone":62316,"microphone-minus":63666,"microphone-off":62317,"microphone-outline":62318,"microphone-plus":63667,"microphone-settings":62319,"microphone-variant":62320,"microphone-variant-off":62321,"microscope":63060,"microsoft":62322,"microsoft-dynamics":63879,"microwave":64629,"middleware":65402,"middleware-outline":65403,"midi":63728,"midi-port":63729,"mine":64950,"minecraft":62323,"mini-sd":64004,"minidisc":64005,"minus":62324,"minus-box":62325,"minus-box-outline":63217,"minus-circle":62326,"minus-circle-outline":62327,"minus-network":62328,"minus-network-outline":64630,"mixcloud":63018,"mixed-martial-arts":64875,"mixed-reality":63614,"mixer":63452,"molecule":64392,"monitor":62329,"monitor-cellphone":63880,"monitor-cellphone-star":63881,"monitor-dashboard":64006,"monitor-lock":64951,"monitor-multiple":62330,"monitor-off":64876,"monitor-screenshot":65076,"monitor-speaker":65404,"monitor-speaker-off":65405,"monitor-star":64952,"moon-first-quarter":65406,"moon-full":65407,"moon-last-quarter":65408,"moon-new":65409,"moon-waning-crescent":65410,"moon-waning-gibbous":65411,"moon-waxing-crescent":65412,"moon-waxing-gibbous":65413,"more":62331,"mother-nurse":64765,"motion-sensor":64877,"motorbike":62332,"mouse":62333,"mouse-bluetooth":63882,"mouse-off":62334,"mouse-variant":62335,"mouse-variant-off":62336,"move-resize":63061,"move-resize-variant":63062,"movie":62337,"movie-open":65518,"movie-open-outline":65519,"movie-outline":64953,"movie-roll":63453,"muffin":63883,"multiplication":62338,"multiplication-box":62339,"mushroom":63454,"mushroom-outline":63455,"music":63321,"music-accidental-double-flat":65414,"music-accidental-double-sharp":65415,"music-accidental-flat":65416,"music-accidental-natural":65417,"music-accidental-sharp":65418,"music-box":62340,"music-box-outline":62341,"music-circle":62342,"music-circle-outline":64211,"music-clef-alto":65419,"music-clef-bass":65420,"music-clef-treble":65421,"music-note":62343,"music-note-bluetooth":62974,"music-note-bluetooth-off":62975,"music-note-eighth":62344,"music-note-eighth-dotted":65422,"music-note-half":62345,"music-note-half-dotted":65423,"music-note-off":62346,"music-note-off-outline":65424,"music-note-outline":65425,"music-note-plus":64954,"music-note-quarter":62347,"music-note-quarter-dotted":65426,"music-note-sixteenth":62348,"music-note-sixteenth-dotted":65427,"music-note-whole":62349,"music-note-whole-dotted":65428,"music-off":63322,"music-rest-eighth":65429,"music-rest-half":65430,"music-rest-quarter":65431,"music-rest-sixteenth":65432,"music-rest-whole":65433,"nail":64955,"nas":63730,"nativescript":63615,"nature":62350,"nature-people":62351,"navigation":62352,"near-me":62925,"necklace":65320,"needle":62353,"netflix":63301,"network":63218,"network-off":64631,"network-off-outline":64632,"network-outline":64633,"network-strength-1":63731,"network-strength-1-alert":63732,"network-strength-2":63733,"network-strength-2-alert":63734,"network-strength-3":63735,"network-strength-3-alert":63736,"network-strength-4":63737,"network-strength-4-alert":63738,"network-strength-off":63739,"network-strength-off-outline":63740,"network-strength-outline":63741,"new-box":62356,"newspaper":62357,"newspaper-minus":65321,"newspaper-plus":65322,"newspaper-variant":983075,"newspaper-variant-multiple":983076,"newspaper-variant-multiple-outline":983077,"newspaper-variant-outline":983078,"nfc":62358,"nfc-off":65077,"nfc-search-variant":65078,"nfc-tap":62359,"nfc-variant":62360,"nfc-variant-off":65079,"ninja":63347,"nintendo-switch":63456,"nodejs":62361,"not-equal":63884,"not-equal-variant":63885,"note":62362,"note-multiple":63159,"note-multiple-outline":63160,"note-outline":62363,"note-plus":62364,"note-plus-outline":62365,"note-text":62366,"notebook":63533,"notebook-multiple":65080,"notebook-outline":65244,"notification-clear-all":62367,"npm":63222,"npm-variant":63886,"npm-variant-outline":63887,"nuke":63139,"null":63457,"numeric":62368,"numeric-0":48,"numeric-0-box":62369,"numeric-0-box-multiple":65323,"numeric-0-box-multiple-outline":62370,"numeric-0-box-outline":62371,"numeric-0-circle":64634,"numeric-0-circle-outline":64635,"numeric-1":49,"numeric-1-box":62372,"numeric-1-box-multiple":65324,"numeric-1-box-multiple-outline":62373,"numeric-1-box-outline":62374,"numeric-1-circle":64636,"numeric-1-circle-outline":64637,"numeric-10":983050,"numeric-10-box":65434,"numeric-10-box-multiple":983051,"numeric-10-box-multiple-outline":983052,"numeric-10-box-outline":65435,"numeric-10-circle":983053,"numeric-10-circle-outline":983054,"numeric-2":50,"numeric-2-box":62375,"numeric-2-box-multiple":65325,"numeric-2-box-multiple-outline":62376,"numeric-2-box-outline":62377,"numeric-2-circle":64638,"numeric-2-circle-outline":64639,"numeric-3":51,"numeric-3-box":62378,"numeric-3-box-multiple":65326,"numeric-3-box-multiple-outline":62379,"numeric-3-box-outline":62380,"numeric-3-circle":64640,"numeric-3-circle-outline":64641,"numeric-4":52,"numeric-4-box":62381,"numeric-4-box-multiple":65327,"numeric-4-box-multiple-outline":62382,"numeric-4-box-outline":62383,"numeric-4-circle":64642,"numeric-4-circle-outline":64643,"numeric-5":53,"numeric-5-box":62384,"numeric-5-box-multiple":65328,"numeric-5-box-multiple-outline":62385,"numeric-5-box-outline":62386,"numeric-5-circle":64644,"numeric-5-circle-outline":64645,"numeric-6":54,"numeric-6-box":62387,"numeric-6-box-multiple":65329,"numeric-6-box-multiple-outline":62388,"numeric-6-box-outline":62389,"numeric-6-circle":64646,"numeric-6-circle-outline":64647,"numeric-7":55,"numeric-7-box":62390,"numeric-7-box-multiple":65330,"numeric-7-box-multiple-outline":62391,"numeric-7-box-outline":62392,"numeric-7-circle":64648,"numeric-7-circle-outline":64649,"numeric-8":56,"numeric-8-box":62393,"numeric-8-box-multiple":65331,"numeric-8-box-multiple-outline":62394,"numeric-8-box-outline":62395,"numeric-8-circle":64650,"numeric-8-circle-outline":64651,"numeric-9":57,"numeric-9-box":62396,"numeric-9-box-multiple":65332,"numeric-9-box-multiple-outline":62397,"numeric-9-box-outline":62398,"numeric-9-circle":64652,"numeric-9-circle-outline":64653,"numeric-9-plus":983055,"numeric-9-plus-box":62399,"numeric-9-plus-box-multiple":65333,"numeric-9-plus-box-multiple-outline":62400,"numeric-9-plus-box-outline":62401,"numeric-9-plus-circle":64654,"numeric-9-plus-circle-outline":64655,"nut":63223,"nutrition":62402,"oar":63099,"ocarina":64956,"octagon":62403,"octagon-outline":62404,"octagram":63224,"octagram-outline":63348,"odnoklassniki":62405,"office":62406,"office-building":63888,"oil":62407,"oil-lamp":65334,"oil-temperature":983065,"omega":62409,"one-up":64393,"onedrive":62410,"onenote":63302,"onepassword":63616,"opacity":62924,"open-in-app":62411,"open-in-new":62412,"open-source-initiative":64394,"openid":62413,"opera":62414,"orbit":61464,"origin":64299,"ornament":62415,"ornament-variant":62416,"outlook":64766,"overscan":983079,"owl":62418,"pac-man":64395,"package":62419,"package-down":62420,"package-up":62421,"package-variant":62422,"package-variant-closed":62423,"page-first":62976,"page-last":62977,"page-layout-body":63225,"page-layout-footer":63226,"page-layout-header":63227,"page-layout-header-footer":65436,"page-layout-sidebar-left":63228,"page-layout-sidebar-right":63229,"page-next":64396,"page-next-outline":64397,"page-previous":64398,"page-previous-outline":64399,"palette":62424,"palette-advanced":62425,"palette-outline":65132,"palette-swatch":63668,"pan":64400,"pan-bottom-left":64401,"pan-bottom-right":64402,"pan-down":64403,"pan-horizontal":64404,"pan-left":64405,"pan-right":64406,"pan-top-left":64407,"pan-top-right":64408,"pan-up":64409,"pan-vertical":64410,"panda":62426,"pandora":62427,"panorama":62428,"panorama-fisheye":62429,"panorama-horizontal":62430,"panorama-vertical":62431,"panorama-wide-angle":62432,"paper-cut-vertical":62433,"paperclip":62434,"parachute":64656,"parachute-outline":64657,"parking":62435,"passport":63458,"passport-biometric":64957,"patio-heater":65437,"patreon":63617,"pause":62436,"pause-circle":62437,"pause-circle-outline":62438,"pause-octagon":62439,"pause-octagon-outline":62440,"paw":62441,"paw-off":63063,"paypal":63618,"pdf-box":65081,"peace":63619,"peanut":983070,"peanut-off":983071,"peanut-off-outline":983073,"peanut-outline":983072,"pen":62442,"pen-lock":64958,"pen-minus":64959,"pen-off":64960,"pen-plus":64961,"pen-remove":64962,"pencil":62443,"pencil-box":62444,"pencil-box-outline":62445,"pencil-circle":63230,"pencil-circle-outline":63349,"pencil-lock":62446,"pencil-lock-outline":64963,"pencil-minus":64964,"pencil-minus-outline":64965,"pencil-off":62447,"pencil-off-outline":64966,"pencil-outline":64658,"pencil-plus":64967,"pencil-plus-outline":64968,"pencil-remove":64969,"pencil-remove-outline":64970,"penguin":65245,"pentagon":63231,"pentagon-outline":63232,"percent":62448,"periodic-table":63669,"periodic-table-co2":63459,"periscope":63303,"perspective-less":64767,"perspective-more":64768,"pharmacy":62449,"phone":62450,"phone-alert":65335,"phone-bluetooth":62451,"phone-classic":62978,"phone-forward":62452,"phone-hangup":62453,"phone-in-talk":62454,"phone-incoming":62455,"phone-lock":62456,"phone-log":62457,"phone-minus":63064,"phone-missed":62458,"phone-off":64971,"phone-outgoing":62459,"phone-outline":64972,"phone-paused":62460,"phone-plus":63065,"phone-return":63534,"phone-rotate-landscape":63620,"phone-rotate-portrait":63621,"phone-settings":62461,"phone-voip":62462,"pi":62463,"pi-box":62464,"pi-hole":64973,"piano":63100,"pickaxe":63670,"picture-in-picture-bottom-right":65082,"picture-in-picture-bottom-right-outline":65083,"picture-in-picture-top-right":65084,"picture-in-picture-top-right-outline":65085,"pier":63622,"pier-crane":63623,"pig":62465,"pig-variant":983080,"piggy-bank":983081,"pill":62466,"pillar":63233,"pin":62467,"pin-off":62468,"pin-off-outline":63791,"pin-outline":63792,"pine-tree":62469,"pine-tree-box":62470,"pinterest":62471,"pinterest-box":62472,"pinwheel":64212,"pinwheel-outline":64213,"pipe":63460,"pipe-disconnected":63461,"pipe-leak":63624,"pirate":64007,"pistol":63234,"piston":63625,"pizza":62473,"play":62474,"play-box-outline":62475,"play-circle":62476,"play-circle-outline":62477,"play-network":63626,"play-network-outline":64659,"play-outline":65336,"play-pause":62478,"play-protected-content":62479,"play-speed":63742,"playlist-check":62919,"playlist-edit":63743,"playlist-minus":62480,"playlist-music":64660,"playlist-music-outline":64661,"playlist-play":62481,"playlist-plus":62482,"playlist-remove":62483,"playlist-star":64974,"playstation":62484,"plex":63161,"plus":62485,"plus-box":62486,"plus-box-outline":63235,"plus-circle":62487,"plus-circle-multiple-outline":62488,"plus-circle-outline":62489,"plus-minus":63889,"plus-minus-box":63890,"plus-network":62490,"plus-network-outline":64662,"plus-one":62491,"plus-outline":63236,"pocket":62492,"podcast":63891,"podium":64769,"podium-bronze":64770,"podium-gold":64771,"podium-silver":64772,"point-of-sale":64878,"pokeball":62493,"pokemon-go":64008,"poker-chip":63535,"polaroid":62494,"poll":62495,"poll-box":62496,"polymer":62497,"pool":62982,"popcorn":62498,"post":983082,"post-outline":983083,"postage-stamp":64663,"pot":63066,"pot-mix":63067,"pound":62499,"pound-box":62500,"power":62501,"power-cycle":63744,"power-off":63745,"power-on":63746,"power-plug":63140,"power-plug-off":63141,"power-settings":62502,"power-sleep":63747,"power-socket":62503,"power-socket-au":63748,"power-socket-eu":63462,"power-socket-uk":63463,"power-socket-us":63464,"power-standby":63749,"powershell":64009,"prescription":63237,"presentation":62504,"presentation-play":62505,"printer":62506,"printer-3d":62507,"printer-3d-nozzle":65086,"printer-3d-nozzle-outline":65087,"printer-alert":62508,"printer-off":65088,"printer-settings":63238,"printer-wireless":64010,"priority-high":62979,"priority-low":62980,"professional-hexagon":62509,"progress-alert":64664,"progress-check":63892,"progress-clock":63893,"progress-download":63894,"progress-upload":63895,"progress-wrench":64665,"projector":62510,"projector-screen":62511,"protocol":65529,"publish":63142,"pulse":62512,"pumpkin":64411,"purse":65337,"purse-outline":65338,"puzzle":62513,"puzzle-outline":64101,"qi":63896,"qqchat":62981,"qrcode":62514,"qrcode-edit":63671,"qrcode-scan":62515,"quadcopter":62516,"quality-high":62517,"quality-low":64011,"quality-medium":64012,"quicktime":62518,"quora":64773,"rabbit":63750,"racing-helmet":64879,"racquetball":64880,"radar":62519,"radiator":62520,"radiator-disabled":64214,"radiator-off":64215,"radio":62521,"radio-am":64666,"radio-fm":64667,"radio-handheld":62522,"radio-tower":62523,"radioactive":62524,"radioactive-off":65246,"radiobox-blank":62525,"radiobox-marked":62526,"radius":64668,"radius-outline":64669,"railroad-light":65339,"raspberry-pi":62527,"ray-end":62528,"ray-end-arrow":62529,"ray-start":62530,"ray-start-arrow":62531,"ray-start-end":62532,"ray-vertex":62533,"react":63239,"read":62535,"receipt":62537,"record":62538,"record-circle":65247,"record-circle-outline":65248,"record-player":63897,"record-rec":62539,"rectangle":65089,"rectangle-outline":65090,"recycle":62540,"reddit":62541,"redo":62542,"redo-variant":62543,"reflect-horizontal":64013,"reflect-vertical":64014,"refresh":62544,"regex":62545,"registered-trademark":64102,"relative-scale":62546,"reload":62547,"reminder":63627,"remote":62548,"remote-desktop":63672,"remote-off":65249,"remote-tv":65250,"remote-tv-off":65251,"rename-box":62549,"reorder-horizontal":63111,"reorder-vertical":63112,"repeat":62550,"repeat-off":62551,"repeat-once":62552,"replay":62553,"reply":62554,"reply-all":62555,"reply-all-outline":65340,"reply-outline":65341,"reproduction":62556,"resistor":64287,"resistor-nodes":64288,"resize":64103,"resize-bottom-right":62557,"responsive":62558,"restart":63240,"restart-off":64881,"restore":63898,"rewind":62559,"rewind-10":64774,"rewind-30":64882,"rewind-outline":63241,"rhombus":63242,"rhombus-medium":64015,"rhombus-outline":63243,"rhombus-split":64016,"ribbon":62560,"rice":63465,"ring":63466,"rivet":65091,"road":62561,"road-variant":62562,"robot":63144,"robot-industrial":64289,"robot-vacuum":63244,"robot-vacuum-variant":63751,"rocket":62563,"roller-skate":64775,"rollerblade":64776,"rollupjs":64412,"room-service":63628,"room-service-outline":64883,"rotate-3d":65252,"rotate-3d-variant":62564,"rotate-left":62565,"rotate-left-variant":62566,"rotate-orbit":64884,"rotate-right":62567,"rotate-right-variant":62568,"rounded-corner":62983,"router-wireless":62569,"router-wireless-settings":64104,"routes":62570,"rowing":62984,"rss":62571,"rss-box":62572,"rss-off":65342,"ruby":64777,"rugby":64885,"ruler":62573,"ruler-square":64670,"ruler-square-compass":65243,"run":63245,"run-fast":62574,"sack":64778,"sack-percent":64779,"safe":64105,"safety-goggles":64780,"sailing":65253,"sale":62575,"salesforce":63629,"sass":63467,"satellite":62576,"satellite-uplink":63752,"satellite-variant":62577,"sausage":63673,"saw-blade":65092,"saxophone":62985,"scale":62578,"scale-balance":62929,"scale-bathroom":62579,"scanner":63146,"scanner-off":63753,"scatter-plot":65254,"scatter-plot-outline":65255,"school":62580,"scissors-cutting":64106,"screen-rotation":62581,"screen-rotation-lock":62582,"screw-flat-top":64975,"screw-lag":65108,"screw-machine-flat-top":65109,"screw-machine-round-top":65110,"screw-round-top":65111,"screwdriver":62583,"script":64413,"script-outline":62584,"script-text":64414,"script-text-outline":64415,"sd":62585,"seal":62586,"seal-variant":65530,"search-web":63246,"seat":64671,"seat-flat":62587,"seat-flat-angled":62588,"seat-individual-suite":62589,"seat-legroom-extra":62590,"seat-legroom-normal":62591,"seat-legroom-reduced":62592,"seat-outline":64672,"seat-recline-extra":62593,"seat-recline-normal":62594,"seatbelt":64673,"security":62595,"security-network":62596,"seed":65093,"seed-outline":65094,"segment":65256,"select":62597,"select-all":62598,"select-color":64781,"select-compare":64216,"select-drag":64107,"select-group":65439,"select-inverse":62599,"select-off":62600,"select-place":65531,"selection":62601,"selection-drag":64108,"selection-ellipse":64782,"selection-ellipse-arrow-inside":65343,"selection-off":63350,"send":62602,"send-circle":65112,"send-circle-outline":65113,"send-lock":63468,"serial-port":63068,"server":62603,"server-minus":62604,"server-network":62605,"server-network-off":62606,"server-off":62607,"server-plus":62608,"server-remove":62609,"server-security":62610,"set-all":63351,"set-center":63352,"set-center-right":63353,"set-left":63354,"set-left-center":63355,"set-left-right":63356,"set-none":63357,"set-right":63358,"set-top-box":63902,"settings":62611,"settings-box":62612,"settings-helper":64109,"settings-outline":63674,"shape":63536,"shape-circle-plus":63069,"shape-outline":63537,"shape-plus":62613,"shape-polygon-plus":63070,"shape-rectangle-plus":63071,"shape-square-plus":63072,"share":62614,"share-off":65344,"share-off-outline":65345,"share-outline":63793,"share-variant":62615,"sheep":64674,"shield":62616,"shield-account":63630,"shield-account-outline":64017,"shield-airplane":63162,"shield-airplane-outline":64675,"shield-alert":65257,"shield-alert-outline":65258,"shield-car":65440,"shield-check":62821,"shield-check-outline":64676,"shield-cross":64677,"shield-cross-outline":64678,"shield-half-full":63359,"shield-home":63113,"shield-home-outline":64679,"shield-key":64416,"shield-key-outline":64417,"shield-link-variant":64783,"shield-link-variant-outline":64784,"shield-lock":63900,"shield-lock-outline":64680,"shield-off":63901,"shield-off-outline":63899,"shield-outline":62617,"shield-plus":64217,"shield-plus-outline":64218,"shield-remove":64219,"shield-remove-outline":64220,"shield-search":64886,"ship-wheel":63538,"shoe-formal":64290,"shoe-heel":64291,"shoe-print":65114,"shopify":64221,"shopping":62618,"shopping-music":62619,"shopping-search":65441,"shovel":63247,"shovel-off":63248,"shower":63903,"shower-head":63904,"shredder":62620,"shuffle":62621,"shuffle-disabled":62622,"shuffle-variant":62623,"sigma":62624,"sigma-lower":63019,"sign-caution":62625,"sign-direction":63360,"sign-direction-minus":983074,"sign-direction-plus":65533,"sign-direction-remove":65534,"sign-text":63361,"signal":62626,"signal-2g":63249,"signal-3g":63250,"signal-4g":63251,"signal-5g":64110,"signal-cellular-1":63675,"signal-cellular-2":63676,"signal-cellular-3":63677,"signal-cellular-outline":63678,"signal-distance-variant":65095,"signal-hspa":63252,"signal-hspa-plus":63253,"signal-off":63362,"signal-variant":62986,"signature":65115,"signature-freehand":65116,"signature-image":65117,"signature-text":65118,"silo":64292,"silverware":62627,"silverware-clean":65535,"silverware-fork":62628,"silverware-fork-knife":64111,"silverware-spoon":62629,"silverware-variant":62630,"sim":62631,"sim-alert":62632,"sim-off":62633,"sina-weibo":64222,"sitemap":62634,"skate":64785,"skew-less":64786,"skew-more":64787,"skip-backward":62635,"skip-backward-outline":65346,"skip-forward":62636,"skip-forward-outline":65347,"skip-next":62637,"skip-next-circle":63073,"skip-next-circle-outline":63074,"skip-next-outline":65348,"skip-previous":62638,"skip-previous-circle":63075,"skip-previous-circle-outline":63076,"skip-previous-outline":65349,"skull":63115,"skull-crossbones":64418,"skull-crossbones-outline":64419,"skull-outline":64420,"skype":62639,"skype-business":62640,"slack":62641,"slackware":63754,"slash-forward":983040,"slash-forward-box":983041,"sleep":62642,"sleep-off":62643,"slope-downhill":65119,"slope-uphill":65120,"smog":64112,"smoke-detector":62354,"smoking":62644,"smoking-off":62645,"snapchat":62646,"snowflake":63254,"snowflake-alert":65350,"snowflake-variant":65351,"snowman":62647,"soccer":62648,"soccer-field":63539,"sofa":62649,"solar-panel":64887,"solar-panel-large":64888,"solar-power":64113,"solid":63116,"sort":62650,"sort-alphabetical":62651,"sort-ascending":62652,"sort-descending":62653,"sort-numeric":62654,"sort-variant":62655,"sort-variant-lock":64681,"sort-variant-lock-open":64682,"soundcloud":62656,"source-branch":63020,"source-commit":63255,"source-commit-end":63256,"source-commit-end-local":63257,"source-commit-local":63258,"source-commit-next-local":63259,"source-commit-start":63260,"source-commit-start-next-local":63261,"source-fork":62657,"source-merge":63021,"source-pull":62658,"source-repository":64683,"source-repository-multiple":64684,"soy-sauce":63469,"spa":64685,"spa-outline":64686,"space-invaders":64421,"spade":65096,"speaker":62659,"speaker-bluetooth":63905,"speaker-multiple":64788,"speaker-off":62660,"speaker-wireless":63262,"speedometer":62661,"speedometer-medium":65442,"speedometer-slow":65443,"spellcheck":62662,"spider-web":64422,"spotify":62663,"spotlight":62664,"spotlight-beam":62665,"spray":63077,"spray-bottle":64223,"sprout":65097,"sprout-outline":65098,"square":63331,"square-edit-outline":63755,"square-inc":62666,"square-inc-cash":62667,"square-medium":64018,"square-medium-outline":64019,"square-outline":63330,"square-root":63363,"square-root-box":63906,"square-small":64020,"squeegee":64224,"ssh":63679,"stack-exchange":62987,"stack-overflow":62668,"stadium":983066,"stadium-variant":63263,"stairs":62669,"stamper":64789,"standard-definition":63470,"star":62670,"star-box":64114,"star-box-outline":64115,"star-circle":62671,"star-circle-outline":63907,"star-face":63908,"star-four-points":64225,"star-four-points-outline":64226,"star-half":62672,"star-off":62673,"star-outline":62674,"star-three-points":64227,"star-three-points-outline":64228,"steam":62675,"steam-box":63756,"steering":62676,"steering-off":63757,"step-backward":62677,"step-backward-2":62678,"step-forward":62679,"step-forward-2":62680,"stethoscope":62681,"sticker":62928,"sticker-emoji":63364,"stocking":62682,"stop":62683,"stop-circle":63078,"stop-circle-outline":63079,"store":62684,"store-24-hour":62685,"stove":62686,"strava":64293,"stretch-to-page":65352,"stretch-to-page-outline":65353,"subdirectory-arrow-left":62988,"subdirectory-arrow-right":62989,"subtitles":64021,"subtitles-outline":64022,"subway":63147,"subway-alert-variant":64889,"subway-variant":62687,"summit":63365,"sunglasses":62688,"surround-sound":62917,"surround-sound-2-0":63471,"surround-sound-3-1":63472,"surround-sound-5-1":63473,"surround-sound-7-1":63474,"svg":63264,"swap-horizontal":62689,"swap-horizontal-bold":64425,"swap-horizontal-circle":983042,"swap-horizontal-circle-outline":983043,"swap-horizontal-variant":63680,"swap-vertical":62690,"swap-vertical-bold":64426,"swap-vertical-circle":983044,"swap-vertical-circle-outline":983045,"swap-vertical-variant":63681,"swim":62691,"switch":62692,"sword":62693,"sword-cross":63366,"symfony":64229,"sync":62694,"sync-alert":62695,"sync-off":62696,"tab":62697,"tab-minus":64294,"tab-plus":63323,"tab-remove":64295,"tab-unselected":62698,"table":62699,"table-border":64023,"table-column":63540,"table-column-plus-after":62700,"table-column-plus-before":62701,"table-column-remove":62702,"table-column-width":62703,"table-edit":62704,"table-large":62705,"table-large-plus":65444,"table-large-remove":65445,"table-merge-cells":63909,"table-of-contents":63541,"table-plus":64116,"table-remove":64117,"table-row":63542,"table-row-height":62706,"table-row-plus-after":62707,"table-row-plus-before":62708,"table-row-remove":62709,"table-search":63758,"table-settings":63543,"table-tennis":65099,"tablet":62710,"tablet-android":62711,"tablet-cellphone":63910,"tablet-dashboard":65259,"tablet-ipad":62712,"taco":63329,"tag":62713,"tag-faces":62714,"tag-heart":63114,"tag-heart-outline":64427,"tag-minus":63759,"tag-multiple":62715,"tag-outline":62716,"tag-plus":63265,"tag-remove":63266,"tag-text-outline":62717,"tank":64790,"tanker-truck":983046,"tape-measure":64296,"target":62718,"target-account":64428,"target-variant":64118,"taxi":62719,"tea":64890,"tea-outline":64891,"teach":63631,"teamviewer":62720,"telegram":62721,"telescope":64297,"television":62722,"television-box":63544,"television-classic":63475,"television-classic-off":63545,"television-guide":62723,"television-off":63546,"television-pause":65446,"television-play":65260,"television-stop":65447,"temperature-celsius":62724,"temperature-fahrenheit":62725,"temperature-kelvin":62726,"tennis":64892,"tennis-ball":62727,"tent":62728,"terrain":62729,"test-tube":63080,"test-tube-empty":63760,"test-tube-off":63761,"text":63911,"text-shadow":63081,"text-short":63912,"text-subject":63913,"text-to-speech":62730,"text-to-speech-off":62731,"textbox":62990,"textbox-password":63476,"texture":62732,"texture-box":983047,"theater":62733,"theme-light-dark":62734,"thermometer":62735,"thermometer-alert":65121,"thermometer-chevron-down":65122,"thermometer-chevron-up":65123,"thermometer-lines":62736,"thermometer-minus":65124,"thermometer-plus":65125,"thermostat":62355,"thermostat-box":63632,"thought-bubble":63477,"thought-bubble-outline":63478,"thumb-down":62737,"thumb-down-outline":62738,"thumb-up":62739,"thumb-up-outline":62740,"thumbs-up-down":62741,"ticket":62742,"ticket-account":62743,"ticket-confirmation":62744,"ticket-outline":63762,"ticket-percent":63267,"tie":62745,"tilde":63268,"timelapse":62746,"timeline":64429,"timeline-alert":65458,"timeline-alert-outline":65461,"timeline-help":65462,"timeline-help-outline":65463,"timeline-outline":64430,"timeline-plus":65459,"timeline-plus-outline":65460,"timeline-text":64431,"timeline-text-outline":64432,"timer":62747,"timer-10":62748,"timer-3":62749,"timer-off":62750,"timer-sand":62751,"timer-sand-empty":63148,"timer-sand-full":63371,"timetable":62752,"toaster-oven":64687,"toggle-switch":62753,"toggle-switch-off":62754,"toggle-switch-off-outline":64024,"toggle-switch-outline":64025,"toilet":63914,"toolbox":63915,"toolbox-outline":63916,"tooltip":62755,"tooltip-account":61452,"tooltip-edit":62756,"tooltip-image":62757,"tooltip-image-outline":64433,"tooltip-outline":62758,"tooltip-plus":64434,"tooltip-plus-outline":62759,"tooltip-text":62760,"tooltip-text-outline":64435,"tooth":63682,"tooth-outline":62761,"tor":62762,"tortoise":64791,"tournament":63917,"tower-beach":63104,"tower-fire":63105,"towing":63547,"track-light":63763,"trackpad":63479,"trackpad-lock":63794,"tractor":63633,"trademark":64119,"traffic-light":62763,"train":62764,"train-car":64436,"train-variant":63683,"tram":62765,"tram-side":983048,"transcribe":62766,"transcribe-close":62767,"transfer-down":64893,"transfer-left":64894,"transfer-right":62768,"transfer-up":64895,"transit-connection":64792,"transit-connection-variant":64793,"transit-detour":65448,"transit-transfer":63149,"transition":63764,"transition-masked":63765,"translate":62922,"translate-off":65126,"transmission-tower":64794,"trash-can":64120,"trash-can-outline":64121,"treasure-chest":63269,"tree":62769,"tree-outline":65100,"trello":62770,"trending-down":62771,"trending-neutral":62772,"trending-up":62773,"triangle":62774,"triangle-outline":62775,"triforce":64437,"trophy":62776,"trophy-award":62777,"trophy-broken":64896,"trophy-outline":62778,"trophy-variant":62779,"trophy-variant-outline":62780,"truck":62781,"truck-check":64688,"truck-delivery":62782,"truck-fast":63367,"truck-trailer":63270,"tshirt-crew":64122,"tshirt-crew-outline":62783,"tshirt-v":64123,"tshirt-v-outline":62784,"tumble-dryer":63766,"tumblr":62785,"tumblr-box":63767,"tumblr-reblog":62786,"tune":63022,"tune-vertical":63082,"turnstile":64689,"turnstile-outline":64690,"turtle":64691,"twitch":62787,"twitter":62788,"twitter-box":62789,"twitter-circle":62790,"twitter-retweet":62791,"two-factor-authentication":63918,"typewriter":65354,"uber":63304,"ubisoft":64438,"ubuntu":62792,"ultra-high-definition":63480,"umbraco":62793,"umbrella":62794,"umbrella-closed":63919,"umbrella-outline":62795,"undo":62796,"undo-variant":62797,"unfold-less-horizontal":62798,"unfold-less-vertical":63327,"unfold-more-horizontal":62799,"unfold-more-vertical":63328,"ungroup":62800,"unicode":65261,"unity":63150,"unreal":63920,"untappd":62801,"update":63151,"upload":62802,"upload-multiple":63548,"upload-network":63221,"upload-network-outline":64692,"upload-outline":65127,"usb":62803,"van-passenger":63481,"van-utility":63482,"vanish":63483,"variable":64230,"vector-arrange-above":62804,"vector-arrange-below":62805,"vector-bezier":64231,"vector-circle":62806,"vector-circle-variant":62807,"vector-combine":62808,"vector-curve":62809,"vector-difference":62810,"vector-difference-ab":62811,"vector-difference-ba":62812,"vector-ellipse":63634,"vector-intersection":62813,"vector-line":62814,"vector-link":983049,"vector-point":62815,"vector-polygon":62816,"vector-polyline":62817,"vector-radius":63305,"vector-rectangle":62918,"vector-selection":62818,"vector-square":61441,"vector-triangle":62819,"vector-union":62820,"venmo":62840,"vhs":64026,"vibrate":62822,"vibrate-off":64693,"video":62823,"video-3d":63484,"video-3d-variant":65262,"video-4k-box":63549,"video-account":63768,"video-image":63769,"video-input-antenna":63550,"video-input-component":63551,"video-input-hdmi":63552,"video-input-scart":65449,"video-input-svideo":63553,"video-minus":63921,"video-off":62824,"video-off-outline":64439,"video-outline":64440,"video-plus":63922,"video-stabilization":63770,"video-switch":62825,"video-vintage":64027,"video-wireless":65263,"video-wireless-outline":65264,"view-agenda":62826,"view-array":62827,"view-carousel":62828,"view-column":62829,"view-comfy":65101,"view-compact":65102,"view-compact-outline":65103,"view-dashboard":62830,"view-dashboard-outline":64028,"view-dashboard-variant":63554,"view-day":62831,"view-grid":62832,"view-grid-plus":65450,"view-headline":62833,"view-list":62834,"view-module":62835,"view-parallel":63271,"view-quilt":62836,"view-sequential":63272,"view-split-horizontal":64423,"view-split-vertical":64424,"view-stream":62837,"view-week":62838,"vimeo":62839,"violin":62991,"virtual-reality":63635,"visual-studio":62992,"visual-studio-code":64029,"vk":62841,"vk-box":62842,"vk-circle":62843,"vlc":62844,"voice":62923,"voice-off":65265,"voicemail":62845,"volleyball":63923,"volume-high":62846,"volume-low":62847,"volume-medium":62848,"volume-minus":63325,"volume-mute":63326,"volume-off":62849,"volume-plus":63324,"volume-variant-off":65128,"vote":64030,"vote-outline":64031,"vpn":62850,"vuejs":63555,"vuetify":65104,"walk":62851,"wall":63485,"wall-sconce":63771,"wall-sconce-flat":63772,"wall-sconce-variant":63773,"wallet":62852,"wallet-giftcard":62853,"wallet-membership":62854,"wallet-outline":64441,"wallet-plus":65451,"wallet-plus-outline":65452,"wallet-travel":62855,"wallpaper":65129,"wan":62856,"wardrobe":65453,"wardrobe-outline":65454,"warehouse":65467,"washing-machine":63273,"watch":62857,"watch-export":62858,"watch-export-variant":63636,"watch-import":62859,"watch-import-variant":63637,"watch-variant":63638,"watch-vibrate":63152,"watch-vibrate-off":64694,"water":62860,"water-boiler":65455,"water-off":62861,"water-outline":65130,"water-percent":62862,"water-pump":62863,"water-pump-off":65456,"watermark":62994,"wave":65355,"waves":63372,"waze":64442,"weather-cloudy":62864,"weather-cloudy-alert":65356,"weather-cloudy-arrow-right":65105,"weather-fog":62865,"weather-hail":62866,"weather-hazy":65357,"weather-hurricane":63639,"weather-lightning":62867,"weather-lightning-rainy":63101,"weather-night":62868,"weather-night-partly-cloudy":65358,"weather-partly-cloudy":62869,"weather-partly-lightning":65359,"weather-partly-rainy":65360,"weather-partly-snowy":65361,"weather-partly-snowy-rainy":65362,"weather-pouring":62870,"weather-rainy":62871,"weather-snowy":62872,"weather-snowy-heavy":65363,"weather-snowy-rainy":63102,"weather-sunny":62873,"weather-sunny-alert":65364,"weather-sunset":62874,"weather-sunset-down":62875,"weather-sunset-up":62876,"weather-tornado":65365,"weather-windy":62877,"weather-windy-variant":62878,"web":62879,"web-box":65457,"webcam":62880,"webhook":63023,"webpack":63274,"wechat":62993,"weight":62881,"weight-gram":64795,"weight-kilogram":62882,"weight-pound":63924,"whatsapp":62883,"wheelchair-accessibility":62884,"whistle":63925,"white-balance-auto":62885,"white-balance-incandescent":62886,"white-balance-iridescent":62887,"white-balance-sunny":62888,"widgets":63275,"wifi":62889,"wifi-off":62890,"wifi-star":65131,"wifi-strength-1":63774,"wifi-strength-1-alert":63775,"wifi-strength-1-lock":63776,"wifi-strength-2":63777,"wifi-strength-2-alert":63778,"wifi-strength-2-lock":63779,"wifi-strength-3":63780,"wifi-strength-3-alert":63781,"wifi-strength-3-lock":63782,"wifi-strength-4":63783,"wifi-strength-4-alert":63784,"wifi-strength-4-lock":63785,"wifi-strength-alert-outline":63786,"wifi-strength-lock-outline":63787,"wifi-strength-off":63788,"wifi-strength-off-outline":63789,"wifi-strength-outline":63790,"wii":62891,"wiiu":63276,"wikipedia":62892,"wind-turbine":64897,"window-close":62893,"window-closed":62894,"window-maximize":62895,"window-minimize":62896,"window-open":62897,"window-restore":62898,"windows":62899,"windows-classic":64032,"wiper":64232,"wiper-wash":64898,"wordpress":62900,"worker":62901,"wrap":62902,"wrap-disabled":64443,"wrench":62903,"wrench-outline":64444,"wunderlist":62904,"xamarin":63556,"xamarin-outline":63557,"xaml":63091,"xbox":62905,"xbox-controller":62906,"xbox-controller-battery-alert":63306,"xbox-controller-battery-charging":64033,"xbox-controller-battery-empty":63307,"xbox-controller-battery-full":63308,"xbox-controller-battery-low":63309,"xbox-controller-battery-medium":63310,"xbox-controller-battery-unknown":63311,"xbox-controller-menu":65106,"xbox-controller-off":62907,"xbox-controller-view":65107,"xda":62908,"xing":62909,"xing-box":62910,"xing-circle":62911,"xml":62912,"xmpp":63486,"yahoo":64298,"yammer":63368,"yeast":62913,"yelp":62914,"yin-yang":63103,"youtube":62915,"youtube-creator-studio":63558,"youtube-gaming":63559,"youtube-subscription":64796,"youtube-tv":62536,"z-wave":64233,"zend":64234,"zigbee":64797,"zip-box":62916,"zip-box-outline":983067,"zip-disk":64034,"zodiac-aquarius":64124,"zodiac-aries":64125,"zodiac-cancer":64126,"zodiac-capricorn":64127,"zodiac-gemini":64128,"zodiac-leo":64129,"zodiac-libra":64130,"zodiac-pisces":64131,"zodiac-sagittarius":64132,"zodiac-scorpio":64133,"zodiac-taurus":64134,"zodiac-virgo":64135,"blank":63116},"ionicons":{"ios-add":61698,"ios-add-circle":61697,"ios-add-circle-outline":61696,"ios-airplane":61751,"ios-alarm":62408,"ios-albums":62410,"ios-alert":61700,"ios-american-football":61702,"ios-analytics":62414,"ios-aperture":61704,"ios-apps":61706,"ios-appstore":61708,"ios-archive":61710,"ios-arrow-back":62415,"ios-arrow-down":62416,"ios-arrow-dropdown":61712,"ios-arrow-dropdown-circle":61733,"ios-arrow-dropleft":61714,"ios-arrow-dropleft-circle":61737,"ios-arrow-dropright":61716,"ios-arrow-dropright-circle":61739,"ios-arrow-dropup":61718,"ios-arrow-dropup-circle":61741,"ios-arrow-forward":62417,"ios-arrow-round-back":61719,"ios-arrow-round-down":61720,"ios-arrow-round-forward":61721,"ios-arrow-round-up":61722,"ios-arrow-up":62424,"ios-at":62426,"ios-attach":61723,"ios-backspace":61725,"ios-barcode":62428,"ios-baseball":62430,"ios-basket":61727,"ios-basketball":62432,"ios-battery-charging":61728,"ios-battery-dead":61729,"ios-battery-full":61730,"ios-beaker":61732,"ios-bed":61753,"ios-beer":61734,"ios-bicycle":61735,"ios-bluetooth":61736,"ios-boat":61738,"ios-body":62436,"ios-bonfire":61740,"ios-book":62440,"ios-bookmark":61742,"ios-bookmarks":62442,"ios-bowtie":61744,"ios-briefcase":62446,"ios-browsers":62448,"ios-brush":61746,"ios-bug":61748,"ios-build":61750,"ios-bulb":61752,"ios-bus":61754,"ios-business":61859,"ios-cafe":61756,"ios-calculator":62450,"ios-calendar":62452,"ios-call":61758,"ios-camera":62454,"ios-car":61760,"ios-card":61762,"ios-cart":62456,"ios-cash":61764,"ios-cellular":61757,"ios-chatboxes":62458,"ios-chatbubbles":61766,"ios-checkbox":61768,"ios-checkbox-outline":61767,"ios-checkmark":62463,"ios-checkmark-circle":61770,"ios-checkmark-circle-outline":61769,"ios-clipboard":61772,"ios-clock":62467,"ios-close":62470,"ios-close-circle":61774,"ios-close-circle-outline":61773,"ios-cloud":62476,"ios-cloud-circle":61778,"ios-cloud-done":61780,"ios-cloud-download":62472,"ios-cloud-outline":62473,"ios-cloud-upload":62475,"ios-cloudy":62480,"ios-cloudy-night":62478,"ios-code":61783,"ios-code-download":61781,"ios-code-working":61782,"ios-cog":62482,"ios-color-fill":61785,"ios-color-filter":62484,"ios-color-palette":61787,"ios-color-wand":62486,"ios-compass":61789,"ios-construct":61791,"ios-contact":62490,"ios-contacts":61793,"ios-contract":61794,"ios-contrast":61795,"ios-copy":62492,"ios-create":61797,"ios-crop":62494,"ios-cube":61800,"ios-cut":61802,"ios-desktop":61804,"ios-disc":61806,"ios-document":61808,"ios-done-all":61809,"ios-download":62496,"ios-easel":61811,"ios-egg":61813,"ios-exit":61815,"ios-expand":61816,"ios-eye":62501,"ios-eye-off":61818,"ios-fastforward":62503,"ios-female":61819,"ios-filing":62505,"ios-film":62507,"ios-finger-print":61820,"ios-fitness":61867,"ios-flag":62509,"ios-flame":62511,"ios-flash":61822,"ios-flash-off":61743,"ios-flashlight":61761,"ios-flask":62513,"ios-flower":62515,"ios-folder":62517,"ios-folder-open":61824,"ios-football":62519,"ios-funnel":61826,"ios-gift":61841,"ios-git-branch":61827,"ios-git-commit":61828,"ios-git-compare":61829,"ios-git-merge":61830,"ios-git-network":61831,"ios-git-pull-request":61832,"ios-glasses":62527,"ios-globe":61834,"ios-grid":61836,"ios-hammer":61838,"ios-hand":61840,"ios-happy":61842,"ios-headset":61844,"ios-heart":62531,"ios-heart-dislike":61759,"ios-heart-empty":61851,"ios-heart-half":61853,"ios-help":62534,"ios-help-buoy":61846,"ios-help-circle":61848,"ios-help-circle-outline":61847,"ios-home":62536,"ios-hourglass":61699,"ios-ice-cream":61850,"ios-image":61852,"ios-images":61854,"ios-infinite":62538,"ios-information":62541,"ios-information-circle":61856,"ios-information-circle-outline":61855,"ios-jet":61861,"ios-journal":61833,"ios-key":61863,"ios-keypad":62544,"ios-laptop":61864,"ios-leaf":61866,"ios-link":61994,"ios-list":62548,"ios-list-box":61763,"ios-locate":61870,"ios-lock":61872,"ios-log-in":61873,"ios-log-out":61874,"ios-magnet":61876,"ios-mail":61880,"ios-mail-open":61878,"ios-mail-unread":61765,"ios-male":61881,"ios-man":61883,"ios-map":61885,"ios-medal":61887,"ios-medical":62556,"ios-medkit":62558,"ios-megaphone":61889,"ios-menu":61891,"ios-mic":62561,"ios-mic-off":62559,"ios-microphone":61894,"ios-moon":62568,"ios-more":61896,"ios-move":61899,"ios-musical-note":62571,"ios-musical-notes":62572,"ios-navigate":62574,"ios-notifications":61907,"ios-notifications-off":61905,"ios-notifications-outline":61747,"ios-nuclear":61909,"ios-nutrition":62576,"ios-open":61911,"ios-options":61913,"ios-outlet":61915,"ios-paper":62578,"ios-paper-plane":61917,"ios-partly-sunny":61919,"ios-pause":62584,"ios-paw":62586,"ios-people":62588,"ios-person":62590,"ios-person-add":61921,"ios-phone-landscape":61922,"ios-phone-portrait":61923,"ios-photos":62594,"ios-pie":62596,"ios-pin":61925,"ios-pint":62598,"ios-pizza":61927,"ios-planet":61931,"ios-play":62600,"ios-play-circle":61715,"ios-podium":61933,"ios-power":61935,"ios-pricetag":62605,"ios-pricetags":62607,"ios-print":61937,"ios-pulse":62611,"ios-qr-scanner":61939,"ios-quote":61941,"ios-radio":61945,"ios-radio-button-off":61942,"ios-radio-button-on":61943,"ios-rainy":62613,"ios-recording":62615,"ios-redo":62617,"ios-refresh":62620,"ios-refresh-circle":61749,"ios-remove":61948,"ios-remove-circle":61947,"ios-remove-circle-outline":61946,"ios-reorder":61949,"ios-repeat":61950,"ios-resize":61951,"ios-restaurant":61953,"ios-return-left":61954,"ios-return-right":61955,"ios-reverse-camera":62623,"ios-rewind":62625,"ios-ribbon":61957,"ios-rocket":61771,"ios-rose":62627,"ios-sad":61959,"ios-save":61862,"ios-school":61961,"ios-search":62629,"ios-send":61964,"ios-settings":62631,"ios-share":61969,"ios-share-alt":61967,"ios-shirt":61971,"ios-shuffle":62633,"ios-skip-backward":61973,"ios-skip-forward":61975,"ios-snow":61976,"ios-speedometer":62640,"ios-square":61978,"ios-square-outline":61788,"ios-star":62643,"ios-star-half":62641,"ios-star-outline":62642,"ios-stats":61980,"ios-stopwatch":62645,"ios-subway":61982,"ios-sunny":62647,"ios-swap":61983,"ios-switch":61985,"ios-sync":61986,"ios-tablet-landscape":61987,"ios-tablet-portrait":62030,"ios-tennisball":62651,"ios-text":62032,"ios-thermometer":62034,"ios-thumbs-down":62036,"ios-thumbs-up":62038,"ios-thunderstorm":62653,"ios-time":62655,"ios-timer":62657,"ios-today":61775,"ios-train":62040,"ios-transgender":62041,"ios-trash":62661,"ios-trending-down":62042,"ios-trending-up":62043,"ios-trophy":62045,"ios-tv":61717,"ios-umbrella":62047,"ios-undo":62663,"ios-unlock":62049,"ios-videocam":62669,"ios-volume-high":61724,"ios-volume-low":61726,"ios-volume-mute":62051,"ios-volume-off":62052,"ios-walk":62054,"ios-wallet":61835,"ios-warning":62056,"ios-watch":62057,"ios-water":62059,"ios-wifi":62061,"ios-wine":62063,"ios-woman":62065,"logo-android":61989,"logo-angular":61991,"logo-apple":61993,"logo-bitbucket":61843,"logo-bitcoin":61995,"logo-buffer":61997,"logo-chrome":61999,"logo-closed-captioning":61701,"logo-codepen":62000,"logo-css3":62001,"logo-designernews":62002,"logo-dribbble":62003,"logo-dropbox":62004,"logo-euro":62005,"logo-facebook":62006,"logo-flickr":61703,"logo-foursquare":62007,"logo-freebsd-devil":62008,"logo-game-controller-a":61755,"logo-game-controller-b":61825,"logo-github":62009,"logo-google":62010,"logo-googleplus":62011,"logo-hackernews":62012,"logo-html5":62013,"logo-instagram":62014,"logo-ionic":61776,"logo-ionitron":61777,"logo-javascript":62015,"logo-linkedin":62016,"logo-markdown":62017,"logo-model-s":61779,"logo-no-smoking":61705,"logo-nodejs":62018,"logo-npm":61845,"logo-octocat":62019,"logo-pinterest":62020,"logo-playstation":62021,"logo-polymer":61790,"logo-python":62022,"logo-reddit":62023,"logo-rss":62024,"logo-sass":62025,"logo-skype":62026,"logo-slack":61707,"logo-snapchat":62027,"logo-steam":62028,"logo-tumblr":62029,"logo-tux":62126,"logo-twitch":62127,"logo-twitter":62128,"logo-usd":62129,"logo-vimeo":62148,"logo-vk":61709,"logo-whatsapp":62149,"logo-windows":62255,"logo-wordpress":62256,"logo-xbox":62284,"logo-xing":61711,"logo-yahoo":62285,"logo-yen":62286,"logo-youtube":62287,"md-add":62067,"md-add-circle":62066,"md-add-circle-outline":61784,"md-airplane":61786,"md-alarm":62068,"md-albums":62069,"md-alert":62070,"md-american-football":62071,"md-analytics":62072,"md-aperture":62073,"md-apps":62074,"md-appstore":62075,"md-archive":62076,"md-arrow-back":62077,"md-arrow-down":62078,"md-arrow-dropdown":62080,"md-arrow-dropdown-circle":62079,"md-arrow-dropleft":62082,"md-arrow-dropleft-circle":62081,"md-arrow-dropright":62084,"md-arrow-dropright-circle":62083,"md-arrow-dropup":62086,"md-arrow-dropup-circle":62085,"md-arrow-forward":62087,"md-arrow-round-back":62088,"md-arrow-round-down":62089,"md-arrow-round-forward":62090,"md-arrow-round-up":62091,"md-arrow-up":62092,"md-at":62093,"md-attach":62094,"md-backspace":62095,"md-barcode":62096,"md-baseball":62097,"md-basket":62098,"md-basketball":62099,"md-battery-charging":62100,"md-battery-dead":62101,"md-battery-full":62102,"md-beaker":62103,"md-bed":61792,"md-beer":62104,"md-bicycle":62105,"md-bluetooth":62106,"md-boat":62107,"md-body":62108,"md-bonfire":62109,"md-book":62110,"md-bookmark":62111,"md-bookmarks":62112,"md-bowtie":62113,"md-briefcase":62114,"md-browsers":62115,"md-brush":62116,"md-bug":62117,"md-build":62118,"md-bulb":62119,"md-bus":62120,"md-business":61860,"md-cafe":62121,"md-calculator":62122,"md-calendar":62123,"md-call":62124,"md-camera":62125,"md-car":62130,"md-card":62131,"md-cart":62132,"md-cash":62133,"md-cellular":61796,"md-chatboxes":62134,"md-chatbubbles":62135,"md-checkbox":62137,"md-checkbox-outline":62136,"md-checkmark":62140,"md-checkmark-circle":62139,"md-checkmark-circle-outline":62138,"md-clipboard":62141,"md-clock":62142,"md-close":62144,"md-close-circle":62143,"md-close-circle-outline":61798,"md-cloud":62153,"md-cloud-circle":62146,"md-cloud-done":62147,"md-cloud-download":62150,"md-cloud-outline":62151,"md-cloud-upload":62152,"md-cloudy":62155,"md-cloudy-night":62154,"md-code":62158,"md-code-download":62156,"md-code-working":62157,"md-cog":62159,"md-color-fill":62160,"md-color-filter":62161,"md-color-palette":62162,"md-color-wand":62163,"md-compass":62164,"md-construct":62165,"md-contact":62166,"md-contacts":62167,"md-contract":62168,"md-contrast":62169,"md-copy":62170,"md-create":62171,"md-crop":62172,"md-cube":62173,"md-cut":62174,"md-desktop":62175,"md-disc":62176,"md-document":62177,"md-done-all":62178,"md-download":62179,"md-easel":62180,"md-egg":62181,"md-exit":62182,"md-expand":62183,"md-eye":62185,"md-eye-off":62184,"md-fastforward":62186,"md-female":62187,"md-filing":62188,"md-film":62189,"md-finger-print":62190,"md-fitness":61868,"md-flag":62191,"md-flame":62192,"md-flash":62193,"md-flash-off":61801,"md-flashlight":61803,"md-flask":62194,"md-flower":62195,"md-folder":62197,"md-folder-open":62196,"md-football":62198,"md-funnel":62199,"md-gift":61849,"md-git-branch":62202,"md-git-commit":62203,"md-git-compare":62204,"md-git-merge":62205,"md-git-network":62206,"md-git-pull-request":62207,"md-glasses":62208,"md-globe":62209,"md-grid":62210,"md-hammer":62211,"md-hand":62212,"md-happy":62213,"md-headset":62214,"md-heart":62216,"md-heart-dislike":61799,"md-heart-empty":61857,"md-heart-half":61858,"md-help":62219,"md-help-buoy":62217,"md-help-circle":62218,"md-help-circle-outline":61805,"md-home":62220,"md-hourglass":61713,"md-ice-cream":62221,"md-image":62222,"md-images":62223,"md-infinite":62224,"md-information":62226,"md-information-circle":62225,"md-information-circle-outline":61807,"md-jet":62229,"md-journal":61837,"md-key":62230,"md-keypad":62231,"md-laptop":62232,"md-leaf":62233,"md-link":61998,"md-list":62235,"md-list-box":62234,"md-locate":62236,"md-lock":62237,"md-log-in":62238,"md-log-out":62239,"md-magnet":62240,"md-mail":62242,"md-mail-open":62241,"md-mail-unread":61810,"md-male":62243,"md-man":62244,"md-map":62245,"md-medal":62246,"md-medical":62247,"md-medkit":62248,"md-megaphone":62249,"md-menu":62250,"md-mic":62252,"md-mic-off":62251,"md-microphone":62253,"md-moon":62254,"md-more":61897,"md-move":62257,"md-musical-note":62258,"md-musical-notes":62259,"md-navigate":62260,"md-notifications":62264,"md-notifications-off":62262,"md-notifications-outline":62263,"md-nuclear":62265,"md-nutrition":62266,"md-open":62267,"md-options":62268,"md-outlet":62269,"md-paper":62271,"md-paper-plane":62270,"md-partly-sunny":62272,"md-pause":62273,"md-paw":62274,"md-people":62275,"md-person":62277,"md-person-add":62276,"md-phone-landscape":62278,"md-phone-portrait":62279,"md-photos":62280,"md-pie":62281,"md-pin":62282,"md-pint":62283,"md-pizza":62292,"md-planet":62294,"md-play":62295,"md-play-circle":61812,"md-podium":62296,"md-power":62297,"md-pricetag":62298,"md-pricetags":62299,"md-print":62300,"md-pulse":62301,"md-qr-scanner":62302,"md-quote":62303,"md-radio":62306,"md-radio-button-off":62304,"md-radio-button-on":62305,"md-rainy":62307,"md-recording":62308,"md-redo":62309,"md-refresh":62310,"md-refresh-circle":61992,"md-remove":62312,"md-remove-circle":62311,"md-remove-circle-outline":61814,"md-reorder":62313,"md-repeat":62314,"md-resize":62315,"md-restaurant":62316,"md-return-left":62317,"md-return-right":62318,"md-reverse-camera":62319,"md-rewind":62320,"md-ribbon":62321,"md-rocket":61817,"md-rose":62322,"md-sad":62323,"md-save":61865,"md-school":62324,"md-search":62325,"md-send":62326,"md-settings":62327,"md-share":62329,"md-share-alt":62328,"md-shirt":62330,"md-shuffle":62331,"md-skip-backward":62332,"md-skip-forward":62333,"md-snow":62334,"md-speedometer":62335,"md-square":62337,"md-square-outline":62336,"md-star":62340,"md-star-half":62338,"md-star-outline":62339,"md-stats":62341,"md-stopwatch":62342,"md-subway":62343,"md-sunny":62344,"md-swap":62345,"md-switch":62346,"md-sync":62347,"md-tablet-landscape":62348,"md-tablet-portrait":62349,"md-tennisball":62350,"md-text":62351,"md-thermometer":62352,"md-thumbs-down":62353,"md-thumbs-up":62354,"md-thunderstorm":62355,"md-time":62356,"md-timer":62357,"md-today":61821,"md-train":62358,"md-transgender":62359,"md-trash":62360,"md-trending-down":62361,"md-trending-up":62362,"md-trophy":62363,"md-tv":61823,"md-umbrella":62364,"md-undo":62365,"md-unlock":62366,"md-videocam":62367,"md-volume-high":61731,"md-volume-low":61745,"md-volume-mute":62369,"md-volume-off":62370,"md-walk":62372,"md-wallet":61839,"md-warning":62373,"md-watch":62374,"md-water":62375,"md-wifi":62376,"md-wine":62377,"md-woman":62378}}

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(47)
)

/* script */
__vue_exports__ = __webpack_require__(48)

/* template */
var __vue_template__ = __webpack_require__(61)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-57509004"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
  "root": {
    "alignment": "top-start"
  }
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tab_components_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tab_components_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_tab_components_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tab_modules_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tab_modules_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_tab_modules_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tab_examples_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tab_examples_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_tab_examples_vue__);
//
//
//
//
//
//
//

const eventBus = weex.requireModule('eventBus');




/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            index: 0
        };
    },
    components: {
        TabComponents: __WEBPACK_IMPORTED_MODULE_0__components_tab_components_vue___default.a,
        TabModules: __WEBPACK_IMPORTED_MODULE_1__components_tab_modules_vue___default.a,
        TabExamples: __WEBPACK_IMPORTED_MODULE_2__components_tab_examples_vue___default.a
    },
    computed: {},
    created() {
        eventBus.on('tabBarClick', ret => {
            this.index = ret.index;
        });
    },
    methods: {}
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(50)
)

/* script */
__vue_exports__ = __webpack_require__(51)

/* template */
var __vue_template__ = __webpack_require__(52)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-17d30b5e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = {
  "scroll-container": {
    "widthFactor": 1,
    "heightFactor": 1
  },
  "column": {
    "crossAxisAlignment": "start"
  },
  "row": {
    "mainAxisAlignment": "space-between"
  },
  "group": {
    "marginTop": 16,
    "marginRight": 16,
    "marginBottom": 0,
    "marginLeft": 16,
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12",
    "color": "#FFFFFF",
    "borderRadius": 8
  },
  "cell": {
    "marginTop": 0,
    "marginRight": 16,
    "marginBottom": 0,
    "marginLeft": 16,
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12",
    "color": "#FFFFFF",
    "borderBottomColor": "#eeeeee",
    "borderBottomWidth": 1
  },
  "cell-icon": {
    "fontFamily": "MaterialCommunityIcons",
    "color": "#ebebeb"
  },
  "icon": {
    "fontFamily": "MaterialCommunityIcons"
  },
  "padding": {
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24"
  }
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__codepoints_json__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__codepoints_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__codepoints_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const eventBus = weex.requireModule('eventBus');
const navigate = weex.requireModule('navigate');

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            title: "\n\nWxFlutter built-in components",
            desc: "The following will show the capabilities of WxFlutter built-in components, the component style is reduced for reference, and the specific property parameters are detailed in the development document",
            list: [{
                "title": "Base",
                "iconName": "basecamp",
                "expanded": false,
                "items": [{
                    "name": "text",
                    "path": "/pages/text.js"
                }, {
                    "name": "image",
                    "path": "/pages/image.js"
                }, {
                    "name": "raised-button",
                    "path": "/pages/raised-button.js"
                }, {
                    "name": "flat-button",
                    "path": "/pages/flat-button.js"
                }, {
                    "name": "text-filed",
                    "path": "/pages/text-filed.js"
                }, {
                    "name": "icon",
                    "path": "/pages/icon.js"
                }, {
                    "name": "transform",
                    "path": "/pages/transform.js"
                }, {
                    "name": "clip",
                    "path": "/pages/clip.js"
                }]
            }, {
                "title": "View",
                "iconName": "vector-circle",
                "expanded": false,
                "items": [{
                    "name": "container",
                    "path": "/pages/container.js"
                }, {
                    "name": "list",
                    "path": "/pages/list.js"
                }, {
                    "name": "indexed-stack",
                    "path": "/pages/indexed-stack.js"
                }]
            }, {
                "title": "Flex",
                "iconName": "all-inclusive",
                "expanded": false,
                "items": [{
                    "name": "center",
                    "path": "/pages/center.js"
                }, {
                    "name": "column",
                    "path": "/pages/column.js"
                }, {
                    "name": "padding",
                    "path": "/pages/padding.js"
                }, {
                    "name": "row",
                    "path": "/pages/row.js"
                }]
            }]
        };
    },
    computed: {},
    methods: {
        getIcon(name) {
            return __WEBPACK_IMPORTED_MODULE_0__codepoints_json___default.a.material_community_icons[name];
        },
        onGroupClick(item) {
            item.expanded = !item.expanded;
        },
        onItemClick(item) {
            navigate.push({
                title: item.name,
                url: item.path
            }, callback => {});
        }
    }
});

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('fractionally-sized-box', {
    staticClass: ["scroll-container"]
  }, [_c('single-child-scroll-view', [_c('column', [_c('center', [_c('text', {
    staticStyle: {
      fontSize: "24px",
      color: "#333333",
      textAlign: "center"
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('padding', {
    staticClass: ["padding"]
  }, [_c('text', {
    staticStyle: {
      fontSize: "18px",
      color: "#808080"
    }
  }, [_vm._v(_vm._s(_vm.desc))])]), _vm._l((_vm.list), function(v, i) {
    return _c('column', {
      key: i,
      staticClass: ["column"]
    }, [_c('gesture-detector', {
      on: {
        "onTapDown": function($event) {
          _vm.onGroupClick(v)
        }
      }
    }, [_c('div', {
      staticClass: ["group"],
      style: {
        color: v.expanded ? '#ebebeb' : '#ffffff'
      }
    }, [_c('row', {
      staticClass: ["row"]
    }, [_c('text', {
      staticStyle: {
        fontSize: "22",
        color: "#333333"
      }
    }, [_vm._v(_vm._s(v.title))]), _c('icon', {
      staticClass: ["icon"],
      attrs: {
        "codePoint": _vm.getIcon(v.iconName)
      }
    })], 1)], 1)]), (v.expanded) ? _c('column', _vm._l((v.items), function(item, j) {
      return _c('ink-well', {
        key: j,
        on: {
          "onTapDown": function($event) {
            _vm.onItemClick(item)
          }
        }
      }, [_c('div', {
        staticClass: ["cell"]
      }, [_c('row', {
        staticClass: ["row"]
      }, [_c('text', {
        staticStyle: {
          fontSize: "22",
          color: "#333333"
        }
      }, [_vm._v(_vm._s(item.name))]), _c('icon', {
        staticClass: ["cell-icon"],
        attrs: {
          "codePoint": _vm.getIcon('chevron-right')
        }
      })], 1)], 1)])
    })) : _vm._e()], 1)
  }), _c('padding', {
    staticClass: ["padding"]
  })], 2)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(54)
)

/* script */
__vue_exports__ = __webpack_require__(55)

/* template */
var __vue_template__ = __webpack_require__(56)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-474ea822"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {
  "scroll-container": {
    "widthFactor": 1,
    "heightFactor": 1
  },
  "column": {
    "crossAxisAlignment": "start"
  },
  "row": {
    "mainAxisAlignment": "space-between"
  },
  "group": {
    "marginTop": 16,
    "marginRight": 16,
    "marginBottom": 0,
    "marginLeft": 16,
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12",
    "color": "#FFFFFF",
    "borderRadius": 8
  },
  "cell": {
    "marginTop": 0,
    "marginRight": 16,
    "marginBottom": 0,
    "marginLeft": 16,
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12",
    "color": "#FFFFFF",
    "borderBottomColor": "#eeeeee",
    "borderBottomWidth": 1
  },
  "cell-icon": {
    "fontFamily": "MaterialCommunityIcons",
    "color": "#ebebeb"
  },
  "icon": {
    "fontFamily": "MaterialCommunityIcons"
  },
  "padding": {
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24"
  }
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__codepoints_json__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__codepoints_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__codepoints_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const eventBus = weex.requireModule('eventBus');
const navigate = weex.requireModule('navigate');

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            title: "\n\nWxFlutter built-in modules",
            desc: "The following will show the capabilities of WxFlutter built-in modules. Please refer to the development documentation for specific properties and parameters.",
            list: [{
                "title": "Modules",
                "iconName": "view-grid",
                "expanded": false,
                "items": [{
                    "name": "http",
                    "path": "/pages/http.js"
                }, {
                    "name": "navigate",
                    "path": "/pages/navigate.js"
                }, {
                    "name": "storage",
                    "path": "/pages/storage.js"
                }, {
                    "name": "timer",
                    "path": "/pages/timer.js"
                }, {
                    "name": "wx",
                    "path": "/pages/wx.js"
                }]
            }]
        };
    },
    computed: {},
    methods: {
        getIcon(name) {
            return __WEBPACK_IMPORTED_MODULE_0__codepoints_json___default.a.material_community_icons[name];
        },
        onGroupClick(item) {
            item.expanded = !item.expanded;
        },
        onItemClick(item) {
            navigate.push({
                title: item.name,
                url: item.path
            }, callback => {});
        }
    }
});

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('fractionally-sized-box', {
    staticClass: ["scroll-container"]
  }, [_c('single-child-scroll-view', [_c('column', [_c('center', [_c('text', {
    staticStyle: {
      fontSize: "24px",
      color: "#333333",
      textAlign: "center"
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('padding', {
    staticClass: ["padding"]
  }, [_c('text', {
    staticStyle: {
      fontSize: "18px",
      color: "#808080"
    }
  }, [_vm._v(_vm._s(_vm.desc))])]), _vm._l((_vm.list), function(v, i) {
    return _c('column', {
      key: i,
      staticClass: ["column"]
    }, [_c('gesture-detector', {
      on: {
        "onTapDown": function($event) {
          _vm.onGroupClick(v)
        }
      }
    }, [_c('div', {
      staticClass: ["group"],
      style: {
        color: v.expanded ? '#ebebeb' : '#ffffff'
      }
    }, [_c('row', {
      staticClass: ["row"]
    }, [_c('text', {
      staticStyle: {
        fontSize: "22",
        color: "#333333"
      }
    }, [_vm._v(_vm._s(v.title))]), _c('icon', {
      staticClass: ["icon"],
      attrs: {
        "codePoint": _vm.getIcon(v.iconName)
      }
    })], 1)], 1)]), _vm._l((v.items), function(item, j) {
      return (v.expanded) ? _c('gesture-detector', {
        key: j,
        on: {
          "onTapDown": function($event) {
            _vm.onItemClick(item)
          }
        }
      }, [_c('div', {
        staticClass: ["cell"]
      }, [_c('row', {
        staticClass: ["row"]
      }, [_c('text', {
        staticStyle: {
          fontSize: "22",
          color: "#333333"
        }
      }, [_vm._v(_vm._s(item.name))]), _c('icon', {
        staticClass: ["cell-icon"],
        attrs: {
          "codePoint": _vm.getIcon('chevron-right')
        }
      })], 1)], 1)]) : _vm._e()
    })], 2)
  }), _c('padding', {
    staticClass: ["padding"]
  })], 2)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(58)
)

/* script */
__vue_exports__ = __webpack_require__(59)

/* template */
var __vue_template__ = __webpack_require__(60)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2bd23f11"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = {
  "scroll-container": {
    "widthFactor": 1,
    "heightFactor": 1
  },
  "column": {
    "crossAxisAlignment": "start"
  },
  "row": {
    "mainAxisAlignment": "space-between"
  },
  "group": {
    "marginTop": 16,
    "marginRight": 16,
    "marginBottom": 0,
    "marginLeft": 16,
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12",
    "color": "#FFFFFF",
    "borderRadius": 8
  },
  "cell": {
    "marginTop": 0,
    "marginRight": 16,
    "marginBottom": 0,
    "marginLeft": 16,
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12",
    "color": "#FFFFFF",
    "borderBottomColor": "#eeeeee",
    "borderBottomWidth": 1
  },
  "cell-icon": {
    "fontFamily": "MaterialCommunityIcons",
    "color": "#ebebeb"
  },
  "icon": {
    "fontFamily": "MaterialCommunityIcons"
  },
  "padding": {
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24"
  }
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__codepoints_json__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__codepoints_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__codepoints_json__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const eventBus = weex.requireModule('eventBus');
const navigate = weex.requireModule('navigate');

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            title: "\n\nWxFlutter Examples",
            desc: "The following will show some simple examples",
            list: [{
                "title": "Examples",
                "iconName": "chevron-down",
                "items": [{
                    "name": "env",
                    "path": "/pages/examples/env.js"
                }, {
                    "name": "demo",
                    "path": "/pages/examples/demo.js"
                }, {
                    "name": "book",
                    "path": "/pages/examples/book.js"
                }]
            }]
        };
    },
    computed: {},
    methods: {
        getIcon(name) {
            return __WEBPACK_IMPORTED_MODULE_0__codepoints_json___default.a.material_community_icons[name];
        },
        onGroupClick(item) {
            item.expanded = !item.expanded;
        },
        onItemClick(item) {
            navigate.push({
                title: item.name,
                url: item.path
            }, callback => {});
        }
    }
});

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('fractionally-sized-box', {
    staticClass: ["scroll-container"]
  }, [_c('single-child-scroll-view', [_c('column', [_c('center', [_c('text', {
    staticStyle: {
      fontSize: "24px",
      color: "#333333",
      textAlign: "center"
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('padding', {
    staticClass: ["padding"]
  }, [_c('text', {
    staticStyle: {
      fontSize: "18px",
      color: "#808080"
    }
  }, [_vm._v(_vm._s(_vm.desc))])]), _vm._l((_vm.list), function(v, i) {
    return _c('column', {
      key: i,
      staticClass: ["column"]
    }, [_c('gesture-detector', {
      on: {
        "onTapDown": function($event) {
          _vm.onGroupClick(v)
        }
      }
    }, [_c('div', {
      staticClass: ["group"],
      style: {
        color: v.expanded ? '#ebebeb' : '#ffffff'
      }
    }, [_c('row', {
      staticClass: ["row"]
    }, [_c('text', {
      staticStyle: {
        fontSize: "22",
        color: "#333333"
      }
    }, [_vm._v(_vm._s(v.title))]), _c('icon', {
      staticClass: ["icon"],
      attrs: {
        "codePoint": _vm.getIcon(v.iconName)
      }
    })], 1)], 1)]), _vm._l((v.items), function(item, j) {
      return _c('gesture-detector', {
        key: j,
        on: {
          "onTapDown": function($event) {
            _vm.onItemClick(item)
          }
        }
      }, [_c('div', {
        staticClass: ["cell"]
      }, [_c('row', {
        staticClass: ["row"]
      }, [_c('text', {
        staticStyle: {
          fontSize: "22",
          color: "#333333"
        }
      }, [_vm._v(_vm._s(item.name))]), _c('icon', {
        staticClass: ["cell-icon"],
        attrs: {
          "codePoint": _vm.getIcon('chevron-right')
        }
      })], 1)], 1)])
    })], 2)
  }), _c('padding', {
    staticClass: ["padding"]
  })], 2)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('indexed-stack', {
    staticClass: ["root"],
    attrs: {
      "index": _vm.index
    }
  }, [_c('TabComponents'), _c('TabModules'), _c('TabExamples')], 1)
},staticRenderFns: []}

/***/ })
/******/ ]);