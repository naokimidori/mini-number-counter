'use strict';
const DEFAULT_OPTS = {
  from: 0,
  target: 100,
  speed: 2000,
  refreshTime: 100,
  decimals: 2,
  onUpdate: function() {},
  onComplete: function() {},
};

class NumberCounter {
  constructor(opts) {
    this.opts = Object.assign(DEFAULT_OPTS, opts);
    this.temp = 0;
    this.tempReal = 0;
    this.loopCount = 0;
    this.totalTimes = Math.ceil(this.opts.speed / this.opts.refreshTime);
    this.increment = ((this.opts.target - this.opts.from) / this.totalTimes);
    this.interval = null;
    this.init();
  }

  init() {
    this.interval = setInterval(() => {
      this.update()
    }, this.opts.refreshTime);
  };

  update() {
    this.loopCount++;
    this.tempReal = this.numAdd(this.tempReal, this.increment);
    this.temp = this.tempReal.toFixed(this.opts.decimals);
    if (this.loopCount >= this.totalTimes) {
      clearInterval(this.interval);
      this.temp = this.opts.target;
      this.opts.onComplete();
    }
    this.opts.onUpdate();
  };

  numAdd(num1, num2) {
    let baseNum1, baseNum2;
    try {
        baseNum1 = num1.split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }

    try {
        baseNum2 = num2.split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    const baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
  };
};

export default NumberCounter;
