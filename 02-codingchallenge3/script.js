const mark = {
    fullName : 'Mark Miller',
    height : 1.69,
    mass : 78,

    calBMI : function(){
        this.bmi =  this.mass / this.height ** 2;
    }
}

const john = {
    fullName : 'John Smith',
    height : 1.95,
    mass : 92,

    calBMI : function(){
        this.bmi =  this.mass / this.height ** 2;
    }
}

mark.calBMI();
john.calBMI();

console.log(john.bmi);
console.log(mark.bmi);

function getHigherBMI(person1, person2){
    const higher =  person1.bmi > person2 ? person1 : person2;
    const lower =  person2.bmi > person1 ? person2 : person1;
    
    console.log(`${higher.fullName}'s BMI (${higher.bmi}) is higher than ${lower.fullName}'s ${lower.bmi}`);
}



getHigherBMI(john, mark);