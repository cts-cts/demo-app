import UserService from "@/app/services/user_service";

interface Props {
  params: { id: string };
}

const SingleUserPage = async ({ params: { id } }: Props) => {
  const user = await UserService.getSingleUser(id);

  return (
    <>
      <h1>Name:{user.name}</h1>
      <h1>email:{user.email}</h1>
      <h1>address:{user.address.street}</h1>
    </>
  );
};

export default SingleUserPage;
