
fetch('https://api.github.com/users/BrittneyBrinson/repos',{headers: {'Authorization': gitKey}} ).then(response => console.log(response)).catch(error => console.error(error))