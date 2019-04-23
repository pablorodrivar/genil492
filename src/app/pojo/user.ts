export class User {
    id: number;
    login: string;
    password: string;
    email: string;
    name: string;
    surname: string;
    signUpDate: string;
    role: string;
    photo: string;

    getId() {
        return this.id;
    }

    getLogin() {
        return this.login;
    }

    setLogin(login: string) {
        this.login = login;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getSurname() {
        return this.surname;
    }

    setSurname(surname: string) {
        this.surname = surname;
    }

    getSignUpDate() {
        return this.signUpDate;
    }

    setSignUpDate(date: string) {
        this.signUpDate = date;
    }

    getRole() {
        return this.role;
    }

    setRole(role: string) {
        this.role = role;
    }

    getPhoto() {
        return this.photo;
    }

    setPhoto(photo: string) {
        this.photo = photo;
    }
}