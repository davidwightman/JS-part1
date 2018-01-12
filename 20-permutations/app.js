const stringTest = 'abcdefghijklmnop';

function allPermutationsOfString(str) {
	let arrStr = str.split('');
	let perms = [];
	let rest;
	let picked;
	let restPerms;
	let next;

	for (let i = 0; i < arrStr.length; i++) {
		rest = Object.create(arrStr);
		picked = rest.splice(i, 1);

		restPerms = allPermutationsOfString(rest.join(''));

		for (let j = 0, jLen = restPerms.length; j < jLen; j++) {
			next = picked.concat(restPerms[j]);
			perms.push(next.join(''));
		}
	}
	return perms;
}
console.log(allPermutationsOfString(stringTest));
