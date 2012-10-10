var ReadyListener = function(itemLength, fn){
	this.itemLength = itemLength;
	this.haveItems = 0;
	this.fn = fn;
};

ReadyListener.prototype.add = function(name){
	console.log('	'+name+': Ready');
	this.haveItems++;
	this.haveAllCheck();
};

ReadyListener.prototype.haveAllCheck = function(){
	if (this.haveItems === this.itemLength) {
		this.fn();
	}
};

if (module && module.exports) {
	module.exports = ReadyListener;
}
