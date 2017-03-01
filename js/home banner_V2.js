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



(lib.e_white = function() {
	this.initialize(img.e_white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Newtext = function() {
	this.initialize(img.Newtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Slide1alternate = function() {
	this.initialize(img.Slide1alternate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Slide1copy = function() {
	this.initialize(img.Slide1copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Slide1 = function() {
	this.initialize(img.Slide1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Slide1jpgcopy = function() {
	this.initialize(img.Slide1jpgcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Slide3box = function() {
	this.initialize(img.Slide3box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Slide3text = function() {
	this.initialize(img.Slide3text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,499);


(lib.Slide3 = function() {
	this.initialize(img.Slide3);
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


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Slide3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,1000,499), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Slide1jpgcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,1000,499), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Slide3text();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,1000,499), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Slide3box();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,1000,499), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Slide1alternate();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,1000,499), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Slide1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,1000,499), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Newtext();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,1000,499), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Slide1copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,1000,499), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Slide1copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,1000,499), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.e_white();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,1000,499), null);


// stage content:
(lib.homebanner_V2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 18
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhOHgm/MCcPAADMAAABN8MicPgADg");
	this.shape.setTransform(500.5,250.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(345));

	// Layer 17
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(500,249.5,1,1,0,0,0,500,249.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(326).to({_off:false},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:1},0).wait(1));

	// Layer 16
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1500,249.5,1,1,0,0,0,500,249.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300).to({_off:false},0).wait(1).to({x:1460},0).wait(1).to({x:1420},0).wait(1).to({x:1380},0).wait(1).to({x:1340},0).wait(1).to({x:1300},0).wait(1).to({x:1260},0).wait(1).to({x:1220},0).wait(1).to({x:1180},0).wait(1).to({x:1140},0).wait(1).to({x:1100},0).wait(1).to({x:1060},0).wait(1).to({x:1020},0).wait(1).to({x:980},0).wait(1).to({x:940},0).wait(1).to({x:900},0).wait(1).to({x:860},0).wait(1).to({x:820},0).wait(1).to({x:780},0).wait(1).to({x:740},0).wait(1).to({x:700},0).wait(1).to({x:660},0).wait(1).to({x:620},0).wait(1).to({x:580},0).wait(1).to({x:540},0).wait(1).to({x:500},0).wait(20));

	// Layer 14
	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(500,249.5,1,1,0,0,0,500,249.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(216).to({_off:false},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(66).to({x:460},0).wait(1).to({x:420},0).wait(1).to({x:380},0).wait(1).to({x:340},0).wait(1).to({x:300},0).wait(1).to({x:260},0).wait(1).to({x:220},0).wait(1).to({x:180},0).wait(1).to({x:140},0).wait(1).to({x:100},0).wait(1).to({x:60},0).wait(1).to({x:20},0).wait(1).to({x:-20},0).wait(1).to({x:-60},0).wait(1).to({x:-100},0).wait(1).to({x:-140},0).wait(1).to({x:-180},0).wait(1).to({x:-220},0).wait(1).to({x:-260},0).wait(1).to({x:-300},0).wait(1).to({x:-340},0).wait(1).to({x:-380},0).wait(1).to({x:-420},0).wait(1).to({x:-460},0).wait(1).to({x:-500},0).to({_off:true},1).wait(19));

	// Layer 12
	this.instance_3 = new lib.Symbol14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1037,249.5,1,1,0,0,0,500,249.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(192).to({_off:false},0).wait(1).to({x:1014.6},0).wait(1).to({x:992.3},0).wait(1).to({x:969.9},0).wait(1).to({x:947.5},0).wait(1).to({x:925.1},0).wait(1).to({x:902.8},0).wait(1).to({x:880.4},0).wait(1).to({x:858},0).wait(1).to({x:835.6},0).wait(1).to({x:813.3},0).wait(1).to({x:790.9},0).wait(1).to({x:768.5},0).wait(1).to({x:746.1},0).wait(1).to({x:723.8},0).wait(1).to({x:701.4},0).wait(1).to({x:679},0).wait(1).to({x:656.6},0).wait(1).to({x:634.3},0).wait(1).to({x:611.9},0).wait(1).to({x:589.5},0).wait(1).to({x:567.1},0).wait(1).to({x:544.8},0).wait(1).to({x:522.4},0).wait(1).to({x:500},0).wait(85).to({x:460},0).wait(1).to({x:420},0).wait(1).to({x:380},0).wait(1).to({x:340},0).wait(1).to({x:300},0).wait(1).to({x:260},0).wait(1).to({x:220},0).wait(1).to({x:180},0).wait(1).to({x:140},0).wait(1).to({x:100},0).wait(1).to({x:60},0).wait(1).to({x:20},0).wait(1).to({x:-20},0).wait(1).to({x:-60},0).wait(1).to({x:-100},0).wait(1).to({x:-140},0).wait(1).to({x:-180},0).wait(1).to({x:-220},0).wait(1).to({x:-260},0).wait(1).to({x:-300},0).wait(1).to({x:-340},0).wait(1).to({x:-380},0).wait(1).to({x:-420},0).wait(1).to({x:-460},0).wait(1).to({x:-500},0).to({_off:true},1).wait(19));

	// Layer 13
	this.instance_4 = new lib.Symbol17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(500,249.5,1,1,0,0,0,500,249.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(207).to({_off:false},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(83).to({x:463},0).wait(1).to({x:426},0).wait(1).to({x:388.9},0).wait(1).to({x:351.9},0).wait(1).to({x:314.9},0).wait(1).to({x:277.8},0).wait(1).to({x:240.8},0).wait(1).to({x:203.8},0).wait(1).to({x:166.7},0).wait(1).to({x:129.7},0).wait(1).to({x:92.6},0).wait(1).to({x:55.6},0).wait(1).to({x:18.6},0).wait(1).to({x:-18.4},0).wait(1).to({x:-55.5},0).wait(1).to({x:-92.5},0).wait(1).to({x:-129.6},0).wait(1).to({x:-166.6},0).wait(1).to({x:-203.7},0).wait(1).to({x:-240.7},0).wait(1).to({x:-277.7},0).wait(1).to({x:-314.8},0).wait(1).to({x:-351.8},0).wait(1).to({x:-388.8},0).wait(1).to({x:-425.9},0).wait(1).to({x:-462.9},0).wait(1).to({x:-500},0).to({_off:true},1).wait(19));

	// Layer 10
	this.instance_5 = new lib.Symbol11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(500,250.5,1,1,0,0,0,500,249.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(43).to({_off:false},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:1},0).wait(105).to({x:529.3},0).wait(1).to({x:558.7},0).wait(1).to({x:588},0).wait(1).to({x:617.4},0).wait(1).to({x:646.7},0).wait(1).to({x:676.1},0).wait(1).to({x:705.4},0).wait(1).to({x:734.8},0).wait(1).to({x:764.1},0).wait(1).to({x:793.5},0).wait(1).to({x:822.8},0).wait(1).to({x:852.2},0).wait(1).to({x:881.5},0).wait(1).to({x:910.9},0).wait(1).to({x:940.2},0).wait(1).to({x:969.6},0).wait(1).to({x:998.9},0).wait(1).to({x:1028.3},0).wait(1).to({x:1057.6},0).wait(1).to({x:1087},0).wait(1).to({x:1116.3},0).wait(1).to({x:1145.7},0).wait(1).to({x:1175},0).wait(61).to({_off:true},1).wait(91));

	// E
	this.instance_6 = new lib.Symbol5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1172,250.5,1,1,0,0,0,500,249.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).wait(1).to({x:1136.6},0).wait(1).to({x:1101.2},0).wait(1).to({x:1065.9},0).wait(1).to({x:1030.5},0).wait(1).to({x:995.1},0).wait(1).to({x:959.8},0).wait(1).to({x:924.4},0).wait(1).to({x:889},0).wait(1).to({x:853.7},0).wait(1).to({x:818.3},0).wait(1).to({x:782.9},0).wait(1).to({x:747.6},0).wait(1).to({x:712.2},0).wait(1).to({x:676.9},0).wait(1).to({x:641.5},0).wait(1).to({x:606.1},0).wait(1).to({x:570.7},0).wait(1).to({x:535.4},0).wait(1).to({x:500},0).wait(127).to({x:529.3},0).wait(1).to({x:558.7},0).wait(1).to({x:588},0).wait(1).to({x:617.4},0).wait(1).to({x:646.7},0).wait(1).to({x:676.1},0).wait(1).to({x:705.4},0).wait(1).to({x:734.8},0).wait(1).to({x:764.1},0).wait(1).to({x:793.5},0).wait(1).to({x:822.8},0).wait(1).to({x:852.2},0).wait(1).to({x:881.5},0).wait(1).to({x:910.9},0).wait(1).to({x:940.2},0).wait(1).to({x:969.6},0).wait(1).to({x:998.9},0).wait(1).to({x:1028.3},0).wait(1).to({x:1057.6},0).wait(1).to({x:1087},0).wait(1).to({x:1116.3},0).wait(1).to({x:1145.7},0).wait(1).to({x:1175},0).wait(7).to({_off:true},1).wait(145));

	// Slide 1 text
	this.instance_7 = new lib.Symbol10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(500,250.5,1,1,0,0,0,500,249.5);

	this.instance_8 = new lib.Symbol6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(500,250.5,1,1,0,0,0,500,249.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},23).to({state:[{t:this.instance_8}]},52).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(75).to({_off:false},0).wait(95).to({alpha:0.957},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0},0).wait(61).to({_off:true},1).wait(91));

	// Boy image
	this.instance_9 = new lib.Symbol13();
	this.instance_9.parent = this;
	this.instance_9.setTransform(500,250.5,1,1,0,0,0,500,249.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(112).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(84).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).wait(37).to({_off:true},1).wait(91));

	// Girl Image
	this.instance_10 = new lib.Symbol12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(500,250.5,1,1,0,0,0,500,249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(113).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(125).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(499.5,249.1,1002,501.1);
// library properties:
lib.properties = {
	width: 1000,
	height: 499,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/e_white.png", id:"e_white"},
		{src:"images/Newtext.png", id:"Newtext"},
		{src:"images/Slide1alternate.jpg", id:"Slide1alternate"},
		{src:"images/Slide1copy.png", id:"Slide1copy"},
		{src:"images/Slide1.jpg", id:"Slide1"},
		{src:"images/Slide1jpgcopy.jpg", id:"Slide1jpgcopy"},
		{src:"images/Slide3box.png", id:"Slide3box"},
		{src:"images/Slide3text.png", id:"Slide3text"},
		{src:"images/Slide3.jpg", id:"Slide3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;