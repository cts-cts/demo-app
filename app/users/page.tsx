import Link from "next/link";
import UserService from "../services/user_service";

const UsersPage = async () => {
  const users = await UserService.getUsers();

  return (
    <>
      <h1>
        <ul>
          {users.map((item) => (
            <Link href={`users/${item.id}`}>
              <li key={item.id}>{item.name}</li>
            </Link>
          ))}
        </ul>
      </h1>
    </>
  );
};

export default UsersPage;
