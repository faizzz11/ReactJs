
export default function Home() {
  // console.log("The ID is:", process.env.ID)
  // console.log("The Secret is:", process.env.SECRET)
  return (
<div className="home">
  the Id is {process.env.NEXT_PUBLIC_ID} and the secret is {process.env.SECRET} and name is {process.env.NAME}
</div>
  );
}
