//Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
//-------------------------------------------------------
//🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

//🎯 Task
    //1. Create a shallow copy of user
    let copyUser={...user}
    //console.log(user)
    //console.log(copyUser)
    //2. Change:
      //    i. name in the copied object
      copyUser.name="anikha"
      console.log(copyUser)
        //  ii. preferences.theme in the copied object
        copyUser.preferences.theme="light"
        console.log(copyUser)
          //iii .Log both original and copied objects
          console.log(user)
          console.log(copyUser)
          //iv. Observe what changes and what doesn’t
          //here in shallow copy whn the nested objects are present when we mke the copy and make changes to the copied object the original object also gets effected.so this is the problem in the shallow copy.so we use the deepcopy

