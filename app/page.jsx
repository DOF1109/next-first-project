import Users from "@/Components/Users";

const fetchUsers = async () => {
  const resp = await fetch("https://reqres.in/api/users").then((res) =>
    res.json()
  );
  return resp.data;
};

const HomePage = async () => {
  const users = await fetchUsers();

  return <Users users={users} />;
};

export default HomePage;
