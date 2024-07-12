exports.getUsers = (id_user) => {
    const dataUsers = [
        { id: 1, name: 'Owen', username: 'owen1234' },
        { id: 2, name: 'Huda', price: 'huda1234' },
        { id: 3, name: 'Brian', price: 'brian1234' }
    ]

    if (id_user) {
        const selectedUser = dataUsers.find(u => u.id === parseInt(id_user));

        return selectedUser;
    }

    return dataUsers;
}
