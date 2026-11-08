import Card from "../components/Card.jsx";

export default function Login() {
  return (
    <>
      <div className="container">
        <Card styleNames={`mx-auto p-2`}>
          <div className="box">
            <div className="text-lg">Login</div>
            <input className="border input-control" type="email" placeholder="E-mail" />
            <input className="border input-control" type="password" placeholder="Password" />
            <button className="btn btn-lg btn-blue border rounded-xl">Login</button>
          </div>
        </Card>
      </div>
    </>
  );
}
