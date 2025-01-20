const users = [
{
    name: "SomeGuy",
    balance: 1000,
    friends: ["SomeGirl"],
    skills: ["JavaScript", "React"],
},
{
    name: "SomeGirl",
    balance: 1500,
    friends: ["SomeGuy"],
    skills: ["JavaScript", "Node.js"],
}
]
const totalBalance = users.reduce((sum, user) => sum + user.balance, 0)
console.log(totalBalance)
//
//
//
//
const getUsersWithFriend = (users, friendName) => 
  users.reduce((result, user) => {
    for (let friend of user.friends) {
      if (friend === friendName) {
        result.push(user.name)
        break
      }
    }
    return result
  }, [])

console.log(getUsersWithFriend(users, "SomeGuy"))
//
//
//
//
const result = users.reduce((acc, user) => {
    acc.push({name: user.name, friendsCount: user.friends.length })
    return acc
  }, [])
console.log(result)
//
//
//
//
const uniqueSkills = users.reduce((acc, user) => {
    user.skills.forEach(skill => {
      if (!acc.includes(skill)) {
        acc.push(skill)
      }
    })
    return acc
  }, [])
  
  console.log(uniqueSkills)