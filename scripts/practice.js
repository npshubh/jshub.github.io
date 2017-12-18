function Person(first, last, age, eye) {
    var selfPerson = this;
    selfPerson.firstName = first;
    selfPerson.lastName = last;
    selfPerson.age = age;
    selfPerson.eyeColor = eye;
    selfPerson.fullname = function () {
        return selfPerson.firstName + " " + selfPerson.lastName;
    }
}

Person.prototype.fullNamePrototype = function () {
    return this.firstName + " -prototype- " + this.lastName;
}
// // Person.prototype.title = "This is default title";
// var myFather = new Person("John", "Doe", 50, "blue");
// console.log(myFather);
//
// var myMother = new Person("Sally", "Rally", 48, "green");
// myMother.title = "Mrs.";
// myFather.title = "Mr.";
// console.log("calling prototype");
//
// console.log(myMother.title);
// console.log(myFather.title);
// console.log(myMother.fullNamePrototype());
// console.log(myFather.fullNamePrototype());

// function changeHTML() {
//     document.getElementById("change-background").innerHTML = "You've changed content";
//     document.getElementById("change-background").style.background = "red";
// }

// four variables are created and assigned in a single go,
// separated by commas
// var myObj = new Object(),
//     str = 'myString',
//     rand = Math.random(),
//     obj = new Object();
//
// myObj.type = 'Dot syntax';
// myObj['date created'] = 'String with space';
// myObj[str] = 'String value';
// myObj[rand] = 'Random Number';
// myObj[obj] = 'Object';
// myObj[''] = 'Even an empty string';
//
// // console.log(myObj);
//
// listAllProperties(myObj)
//
// function listAllProperties(o) {
//     var objectToInspect;
//     var result = [];
//     // window.alert("yes");
//     for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
//         result = result.concat(Object.getOwnPropertyNames(objectToInspect));
//         // window.alert(result);
//     }
//     // window.alert(result)
//     document.getElementById("change-background").innerHTML = "<pre>" + result + "</pre>";
//     // return result;
// }
/*--------------------------- Size Calculation Code------------------------------*/
function roughSizeOfObject(object) {

    var objectList = [];
    var stack = [object];
    var bytes = 0;

    while (stack.length) {
        var value = stack.pop();

        if (typeof value === 'boolean') {
            bytes += 4;
        } else if (typeof value === 'string') {
            bytes += value.length * 2;
        } else if (typeof value === 'number') {
            bytes += 8;
        } else if (
            typeof value === 'object' &&
            objectList.indexOf(value) === -1
        ) {
            objectList.push(value);

            for (var i in value) {
                stack.push(value[i]);
            }
        }
    }
    return bytes;
}

/*---------------------------Lexical Closure and private methods------------------------------*/

var counter = (function () {
    var privateCounter = 0; //not accessible directly

    //not accessible directly
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    };
})();
console.log(counter.privateCounter);
// console.log(counter.value()); // logs 0
// counter.increment();
// counter.increment();
// console.log(counter.value()); // logs 2
// counter.decrement();
// console.log(counter.value()); // logs 1
