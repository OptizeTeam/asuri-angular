import {ParentClass} from './ParentClass.js';

export class ChildClass extends ParentClass {
	/**
	 * @param liczba number
	 */
	constructor(public liczba: number) {
		super();

		console.log('Konstruktor test2');
	}
}
