export class ParentClass {
	constructor() {
		console.log('Konstruktor ParentClass');
	}

	private tekst: string;

	/**
	 * @returns void
	 */
	metoda() {
		console.error(this.tekst);
	}

	/**
	 * @param nowyTekst string
	 *
	 * @returns void
	 */
	set ustawTekst(nowyTekst: string) {
		this.tekst = nowyTekst;
	}

	/**
	 * @returns String
	 */
	get pelnyTekst(): string {
		return `Pełny: ${this.tekst}`
	}
}
