import Card from "../components/Card.jsx"

export default function Register() {
  return (
    <>
      <div className="container">
        <Card styleNames={`mx-auto p-2`}>
          <div className="box">
            <div className="text-lg">Register</div>
            <input className="border input-control" type="text" placeholder="Username" />
            <input className="border input-control" type="email" placeholder="E-mail" />
            <input className="border input-control" type="password" placeholder="Password" />
            <input className="border input-control" type="password" placeholder="Confirm Password" />
            <button className="btn btn-lg btn-blue border rounded-xl">Register</button>
          </div>
        </Card>
      </div>
    </>
  );
}
