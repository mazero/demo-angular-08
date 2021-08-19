export class User {
    private number: number;
    private firstname: string;
    private lastname: string;

    constructor(
        number: number, 
        firstname: string,
        lastname?: string
    ) {
        this.number = number;
        this.firstname = firstname;
        this.lastname = lastname;
   }
    
    get num(): number {
        return this.number;
    }

    set num(number: number) {
        this.number = number;
    }

    get firstName(): string {
        return this.firstname;
    }

    set firstName(firstname: string) {
        this.firstname =firstname;
    }

    get lastName(): string {
        return this.lastname;
    }

    set lastName(lastname: string) {
        this.firstname = lastname;
    }

}