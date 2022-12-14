const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
let threeOnly = users.filter(function(lang){
    return lang.languages.length >= 3
})
    console.log(threeOnly)

let emailOnly = users.map((e) => e.email )
    console.log(emailOnly)

let yearsExp = users.reduce(function(totalExp, element){
        return totalExp + element.yearsOfExperience
}, 0)
console.log(yearsExp / 5)

let longEmail = users.reduce(function(longest, element){
   return element.email + longest
}, " ")
console.log(longEmail)
let oneEmail = longEmail.filter(function(){

})

let nameStr = users.reduce(function(userList, element){
        return "Your instructors are: " + userList + " " + element.name + ","
}, " ")
console.log(nameStr)
