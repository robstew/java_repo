//using a for loop to cycle through the contacts list
//Use a nested if statement to first check if the firstName matches, and then checks if the prop matches



var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){

for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === firstName) {
        if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";

}

lookUpProfile("Akira", "likes");




//The for loop runs, starting at the first object in the contacts list.
//If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes.
//Then, we use .hasOwnProperty() method (checks if there's a given property and returns a boolean) with prop as an argument. If it's true, the value of prop is returned.
//If the second if statement fails, No such property is returned.
//If the first if statement fails, the for loop continues on to the next object in the contacts list.
//If the firstName parameter isn't matched by the final contacts object, the for loop exits and No such contact is returned