database.ref('expenses')
  .once('value')
  .then((snapshot) => {
      const expenses = [];
      
      snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
      });

    console.log(expenses);
});

database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
      
      snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});

database.ref('expenses').push({
    description: 'rent',
    note: '',
    amount: 10000,
    createdAt: 3424252
});

database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('Error fetching data.', e)
    });

database.ref().set({
    name: 'Lukas Lindgren',
    age: 26,
    stressLevel: 6,
    job: {
        title: 'Developer',
        company: 'Google'
    },
    location: {
        city: 'Stockholm',
        country: 'Sweden'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((error) => {
    console.log('This failed.', error);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

database.ref('isSingle').remove().then(() => {
    console.log('Remove succeeded.');
}).catch((error) => {
    console.log('Remove not succeeded.', error)
});