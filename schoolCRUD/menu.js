import readline from 'readline-sync';
import showAllStudents from './modules/read.js';
import addStudentManager from './modules/create.js'


function showMenu() {
    
    console.log('Choose one of the following options: \n');
    
    console.log('------------ MENU ------------  ');
    console.log('1. CREATE - Add a new student.  ');
    console.log('\n2. READ - Show all students.  ');
    console.log('\n3. UPDATE - Update student.   ');
    console.log('\n4. DELETE - Remove a student. ')
    console.log('------------------------------\n');
    

    
}

function inputChoice() {

    let choice = readline.question('> ');
    return choice;
}


function choiceHandling(choice) {

    switch (choice) {
        case '1':
            addStudentManager();
            return true;
        case '2':
            showAllStudents();
            return true;
        case '3':
            return true;
        case '4':
            return true;
        default:
            console.log('\nOption does not exist!\n');
            return false;
        }
    }
            
            
export default function menuManager() {

    let rightChoice = true;

    do {

        showMenu();
        let choice = inputChoice();
        rightChoice = choiceHandling(choice);
    
    } while (!rightChoice)
}


menuManager();