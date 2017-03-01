(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.e = function() {
	this.initialize(img.e);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Screen1 = function() {
	this.initialize(img.Screen1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Screen2 = function() {
	this.initialize(img.Screen2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Screen3 = function() {
	this.initialize(img.Screen3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Screen1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,1000,499), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Screen3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Screen2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.e();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


// stage content:
(lib.homebanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhOHgm+MCcPAAAMAAABN9MicPAAAg");
	this.shape.setTransform(500,249.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(250));

	// Layer 3
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(1500,249.5,1,1,0,0,0,500,249.5);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160).to({_off:false},0).wait(1).to({x:1465.5},0).wait(1).to({x:1431.1},0).wait(1).to({x:1396.6},0).wait(1).to({x:1362.1},0).wait(1).to({x:1327.6},0).wait(1).to({x:1293.2},0).wait(1).to({x:1258.7},0).wait(1).to({x:1224.2},0).wait(1).to({x:1189.8},0).wait(1).to({x:1155.3},0).wait(1).to({x:1120.9},0).wait(1).to({x:1086.4},0).wait(1).to({x:1051.9},0).wait(1).to({x:1017.4},0).wait(1).to({x:982.9},0).wait(1).to({x:948.5},0).wait(1).to({x:914},0).wait(1).to({x:879.5},0).wait(1).to({x:845.1},0).wait(1).to({x:810.6},0).wait(1).to({x:776.1},0).wait(1).to({x:741.7},0).wait(1).to({x:707.2},0).wait(1).to({x:672.7},0).wait(1).to({x:638.3},0).wait(1).to({x:603.8},0).wait(1).to({x:569.3},0).wait(1).to({x:534.8},0).wait(1).to({x:500.4},0).wait(31).to({x:467.1},0).wait(1).to({x:433.7},0).wait(1).to({x:400.4},0).wait(1).to({x:367.1},0).wait(1).to({x:333.7},0).wait(1).to({x:300.4},0).wait(1).to({x:267.1},0).wait(1).to({x:233.7},0).wait(1).to({x:200.4},0).wait(1).to({x:167.1},0).wait(1).to({x:133.7},0).wait(1).to({x:100.4},0).wait(1).to({x:67.1},0).wait(1).to({x:33.7},0).wait(1).to({x:0.4},0).wait(1).to({x:-32.9},0).wait(1).to({x:-66.3},0).wait(1).to({x:-99.6},0).wait(1).to({x:-132.9},0).wait(1).to({x:-166.3},0).wait(1).to({x:-199.6},0).wait(1).to({x:-232.9},0).wait(1).to({x:-266.3},0).wait(1).to({x:-299.6},0).wait(1).to({x:-332.9},0).wait(1).to({x:-366.3},0).wait(1).to({x:-399.6},0).wait(1).to({x:-432.9},0).wait(1).to({x:-466.3},0).wait(1).to({x:-499.6},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1501,249.5,1,1,0,0,0,500,249.5);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78).to({_off:false},0).wait(1).to({x:1467.6},0).wait(1).to({x:1434.3},0).wait(1).to({x:1400.9},0).wait(1).to({x:1367.5},0).wait(1).to({x:1334.2},0).wait(1).to({x:1300.8},0).wait(1).to({x:1267.4},0).wait(1).to({x:1234.1},0).wait(1).to({x:1200.7},0).wait(1).to({x:1167.3},0).wait(1).to({x:1134},0).wait(1).to({x:1100.6},0).wait(1).to({x:1067.2},0).wait(1).to({x:1033.9},0).wait(1).to({x:1000.5},0).wait(1).to({x:967.1},0).wait(1).to({x:933.8},0).wait(1).to({x:900.4},0).wait(1).to({x:867},0).wait(1).to({x:833.7},0).wait(1).to({x:800.3},0).wait(1).to({x:766.9},0).wait(1).to({x:733.6},0).wait(1).to({x:700.2},0).wait(1).to({x:666.8},0).wait(1).to({x:633.5},0).wait(1).to({x:600.1},0).wait(1).to({x:566.7},0).wait(1).to({x:533.4},0).wait(1).to({x:500},0).wait(53).to({x:465.6},0).wait(1).to({x:431.1},0).wait(1).to({x:396.7},0).wait(1).to({x:362.2},0).wait(1).to({x:327.7},0).wait(1).to({x:293.3},0).wait(1).to({x:258.8},0).wait(1).to({x:224.3},0).wait(1).to({x:189.8},0).wait(1).to({x:155.3},0).wait(1).to({x:120.9},0).wait(1).to({x:86.4},0).wait(1).to({x:51.9},0).wait(1).to({x:17.5},0).wait(1).to({x:-17},0).wait(1).to({x:-51.5},0).wait(1).to({x:-86},0).wait(1).to({x:-120.4},0).wait(1).to({x:-154.9},0).wait(1).to({x:-189.4},0).wait(1).to({x:-223.8},0).wait(1).to({x:-258.3},0).wait(1).to({x:-292.8},0).wait(1).to({x:-327.2},0).wait(1).to({x:-361.7},0).wait(1).to({x:-396.2},0).wait(1).to({x:-430.7},0).wait(1).to({x:-465.1},0).wait(1).to({x:-499.6},0).to({_off:true},1).wait(60));

	// e2
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1502.4,249.5,1,1,0,0,0,500,249.5);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(232).to({_off:false},0).wait(1).to({x:1469.2},0).wait(1).to({x:1436},0).wait(1).to({x:1402.8},0).wait(1).to({x:1369.6},0).wait(1).to({x:1336.4},0).wait(1).to({x:1303.2},0).wait(1).to({x:1270},0).wait(1).to({x:1236.8},0).wait(1).to({x:1203.6},0).wait(1).to({x:1170.4},0).wait(1).to({x:1137.2},0).wait(1).to({x:1104},0).wait(1).to({x:1070.8},0).wait(1).to({x:1037.6},0).wait(1).to({x:1004.4},0).wait(1).to({x:971.2},0).wait(1).to({x:938},0).wait(1));

	// e
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(938,250.5,1,1,0,0,0,500,249.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({x:984.9},0).wait(1).to({x:1031.8},0).wait(1).to({x:1078.8},0).wait(1).to({x:1125.7},0).wait(1).to({x:1172.6},0).wait(1).to({x:1219.5},0).wait(1).to({x:1266.4},0).wait(1).to({x:1313.3},0).wait(1).to({x:1360.3},0).wait(1).to({x:1407.2},0).wait(1).to({x:1454.1},0).wait(1).to({x:1501},0).wait(15).to({x:1466.5},0).wait(1).to({x:1432},0).wait(1).to({x:1397.6},0).wait(1).to({x:1363.1,y:250.4},0).wait(1).to({x:1328.6},0).wait(1).to({x:1294.1},0).wait(1).to({x:1259.6},0).wait(1).to({x:1225.1},0).wait(1).to({x:1190.7},0).wait(1).to({x:1156.2},0).wait(1).to({x:1121.7,y:250.3},0).wait(1).to({x:1087.2},0).wait(1).to({x:1052.7},0).wait(1).to({x:1018.2},0).wait(1).to({x:983.8},0).wait(1).to({x:949.3},0).wait(1).to({x:914.8},0).wait(1).to({x:880.3},0).wait(1).to({x:845.8,y:250.2},0).wait(1).to({x:811.3},0).wait(1).to({x:776.9},0).wait(1).to({x:742.4},0).wait(1).to({x:707.9},0).wait(1).to({x:673.4},0).wait(1).to({x:639},0).wait(1).to({x:604.4,y:250.1},0).wait(1).to({x:570},0).wait(1).to({x:535.5},0).wait(1).to({x:501},0).wait(1).to({x:472.4,y:250},0).wait(1).to({x:443.8},0).wait(1).to({x:415.2,y:249.9},0).wait(1).to({x:386.6},0).wait(1).to({x:358,y:249.8},0).wait(1).to({x:329.4,y:249.7},0).wait(1).to({x:300.9},0).wait(1).to({x:272.2,y:249.6},0).wait(1).to({x:243.6,y:249.5},0).wait(1).to({x:215},0).wait(1).to({x:186.4},0).wait(1).to({x:157.8,y:249.4},0).wait(1).to({x:129.2,y:249.3},0).wait(15).to({_off:true},1).wait(141));

	// Layer 1
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(501,250.5,1,1,0,0,0,500,249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({x:1500.7,y:249.5},0).wait(1).to({x:1467.3},0).wait(1).to({x:1433.9},0).wait(1).to({x:1400.6},0).wait(1).to({x:1367.2},0).wait(1).to({x:1333.9},0).wait(1).to({x:1300.5},0).wait(1).to({x:1267.2},0).wait(1).to({x:1233.8},0).wait(1).to({x:1200.5},0).wait(1).to({x:1167.1},0).wait(1).to({x:1133.7},0).wait(1).to({x:1100.4},0).wait(1).to({x:1067},0).wait(1).to({x:1033.7},0).wait(1).to({x:1000.3},0).wait(1).to({x:967},0).wait(1).to({x:933.6},0).wait(1).to({x:900.3},0).wait(1).to({x:866.9},0).wait(1).to({x:833.6},0).wait(1).to({x:800.2},0).wait(1).to({x:766.8},0).wait(1).to({x:733.5},0).wait(1).to({x:700.1},0).wait(1).to({x:666.8},0).wait(1).to({x:633.4},0).wait(1).to({x:600.1},0).wait(1).to({x:566.7},0).wait(1).to({x:533.4},0).wait(1).to({x:500},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(499,248.5,1439,501);
// library properties:
lib.properties = {
	width: 1000,
	height: 499,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/e.png", id:"e"},
		{src:"images/Screen1.jpg", id:"Screen1"},
		{src:"images/Screen2.jpg", id:"Screen2"},
		{src:"images/Screen3.jpg", id:"Screen3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;