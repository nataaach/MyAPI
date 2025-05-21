const express = require('express');
const app = express();
const port = 4000;

class StudentDto {
    constructor() {
        this.login = '';
        this.name = '';
        this.lastName = '';
        this.group = '';
        this.course = '';
    }

    setLogin(login) {
        this.login = login;
    }

    setName(name) {
        this.name = name;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setGroup(group) {
        this.group = group;
    }

    setCourse(course) {
        this.course = course;
    }

    getLogin() {
        return this.login;
    }

    getName() {
        return this.name;
    }

    getLastName() {
        return this.lastName;
    }

    getGroup() {
        return this.group;
    }

    getCourse() {
        return this.course;
    }
}

app.get('/nataliia-cherviakova', (req, res) => {
    const studentDto = new StudentDto();
    studentDto.setName("Nataliia");
    studentDto.setLastName("Cherviakova");
    studentDto.setLogin("is-32fiot-23-120");
    studentDto.setGroup("IS-32");
    studentDto.setCourse("2");


    res.send(`Name: ${studentDto.getName()}, Last Name: ${studentDto.getLastName()}, Login: ${studentDto.getLogin()}, Group: ${studentDto.getGroup()}, Course: ${studentDto.getCourse()} course`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
