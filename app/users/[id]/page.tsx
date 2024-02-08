interface Props {
  params: { id: string | number };
}

const SingleUserPage = ({ params: { id } }: Props) => {
  return (
    <>
      <h1>Single User page</h1>
    </>
  );
};

export default SingleUserPage;
