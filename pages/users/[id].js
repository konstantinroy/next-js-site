import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  const { query } = useRouter();
  return (
    <MainContainer>
      <h2>id пользователя {query.id}</h2>
      <h2>Имя пользователя - {user.name}</h2>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
