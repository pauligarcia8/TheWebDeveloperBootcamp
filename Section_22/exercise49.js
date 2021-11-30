//Filter Exercise
//Write a function called validUserNames that accepts an array of usernames (strings). It should return a new array, containing only the usernames that are less tha 10 characters. 

function validUserNames(usernames){
    let filteredUsernames = usernames.filter(function(username){
       return username.length < 10;  
    })
    return filteredUsernames;
}