module.exports = function toReadable (number) {
  let arrnumbers=['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	if(number < 20) {
		return arrnumbers[number];
		};
	let arrTens = [0, 0, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	if(number>=20 && number <100) {
		if(number%10 === 0) {
			return arrTens[number/10];
			} else {
				return arrTens[Math.floor(number/10)] + ' ' + arrnumbers[number%10];
			}
		};
	if(number>=100 && number<1000) {
		if(number%100 === 0) {
			return arrnumbers[number/100] + ' hundred';
			} else if(number%100 >0 && number%100 < 20) {
				return arrnumbers[Math.floor(number/100)] + ' hundred' + ' ' + arrnumbers[number%100];
				} else if(number%10 === 0) {
					return arrnumbers[Math.floor(number/100)] + ' hundred ' + arrTens[number%100/10];
					} else return arrnumbers[Math.floor(number/100)] + ' hundred ' + arrTens[Math.floor(number%100/10)] + ' ' + arrnumbers[number%10];
		}

}