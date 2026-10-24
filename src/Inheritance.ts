export interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

export interface IStudentData {
    name: string;
    secondName: string;
    age: number;
    phone?: string;
}

export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    constructor(data: IPersonData) {
        this._name = data.name;
        this._secondName = data.secondName;
        this._age = data.age;
    }

    getData(): IPersonData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
    }
}

export class Student extends Person {
    readonly _phone: string;

    constructor(data: IStudentData) {
        super(data);
        this._phone = data.phone || '';
    }

    getData(): IStudentData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
            phone: this._phone,
        };
    }
}
