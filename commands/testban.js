module.exports = {
    name: 'testban',
    description: 'Test to see if a user can ban members!',
    execute(message, args) {
        const checkAdmin = true
      if (checkAdmin)
    console.log ('This member can kick users');
    },
};