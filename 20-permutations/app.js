var stringTest = 'abcdefghijklmnop';

function allPermutationsOfString(str){
	var arrStr = str.split('');
	var perms = [];
	var rest;
	var picked;
	var restPerms;
	var next;

	for (var i=0; i<arrStr.length; i++) {
		rest = Object.create(arrStr);
		picked = rest.splice(i, 1);

		restPerms = allPermutationsOfString(rest.join(''));

		for (var j=0, jLen = restPerms.length; j< jLen; j++) {
			next = picked.concat(restPerms[j]);
			perms.push(next.join(''));
		}
	}
	return perms;
}
console.log(allPermutationsOfString(stringTest));