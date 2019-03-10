class foo {
	private name: string;
	constructor(name: string) {
		this.name = name;
	}

	get getName() {
		return this.name;
	}
}

let f = new foo('John');

console.log(f.getName);
//console.log(f.name); <- wrong!
