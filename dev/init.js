const fs = require('fs')
const Cpass = require('cpass').Cpass
const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

const promisify = f => {
	const argsDeclared = []
	for (let i = 0, fLength = f.length - 1; i < fLength; i++)
		argsDeclared.push(void 0)
	return (...args) =>
		new Promise(resolve =>
			f(...argsDeclared.map((u, i) => args[i]), x => resolve(x))
		)
}

const question = promisify(rl.question.bind(rl))

fs.stat('./dev/private.json', async err => {
	if (err) {
		await fs.writeFileSync(
			'./dev/private.json',
			JSON.stringify({
				siteUrl: 'http://aura.dme.aero.corp',
				strategy: 'OnpremiseUserCredentials',
				domain: 'dme',
				username: await question('Username: '),
				password: new Cpass().encode(await question('Password: ')),
				filename: 'index.js',
			})
		)
	}
	rl.close()
})
