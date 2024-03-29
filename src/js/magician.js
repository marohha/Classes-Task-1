import Character from "./character";

export default class Magician extends Character { 
    constructor(name, type = 'Magician') {
        super(name, type);
        this.name = name;
        this.type = type;
        this.attack = 10;
        this.defence = 40;
    }
}