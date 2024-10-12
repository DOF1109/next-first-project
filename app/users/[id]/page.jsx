const getUser = async (id) => {
  const resp = await fetch(`https://reqres.in/api/users/${id}`).then((res) =>
    res.json()
  );
  return resp.data;
};

const UserPage = async ({ params }) => {
  const user = await getUser(params.id);

  return (
    <div className="bg-slate-400 p-8 rounded-md">
      <img src={user.avatar} alt="profile-picture" className="mx-auto my-4 rounded-full" />
      <h3 className="text-2xl font-bold m-1">
        {user.id} - {user.first_name} {user.last_name}
      </h3>
      <p>email: {user.email}</p>
    </div>
  );
};

export default UserPage;
