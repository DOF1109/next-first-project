const fetchUsers = async () => {
  const resp = await fetch("https://reqres.in/api/users").then((res) =>
    res.json()
  );
  return resp.data;
};

const HomePage = async () => {
  const users = await fetchUsers();

  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          className="bg-slate-500 m-2 p-4 rounded-md flex justify-between"
        >
          <div>
            <h5 className="font-bold">
              {user.id} - {user.first_name} {user.last_name}
            </h5>
            <p>email: {user.email}</p>
          </div>
          <img src={user.avatar} alt="profile-picture" className="rounded-full w-20" />
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
