import {ParentClass} from './ParentClass.js';
import {ChildClass} from './ChildClass.js';

let mojTekst = new ParentClass(),
	mojaLiczba = new ChildClass(123);

console.log(mojTekst.pelnyTekst);
console.log(mojaLiczba.liczba);
console.log(mojaLiczba.pelnyTekst);
mojTekst.metoda();

mojTekst.ustawTekst = 'Hello World!';

console.log(mojTekst.pelnyTekst);
mojTekst.metoda();

mojaLiczba.ustawTekst = 'Hello Hell!';

console.log(mojaLiczba.pelnyTekst);
mojaLiczba.metoda();
