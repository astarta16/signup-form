import {} from "./Card";
import {useForm} from 'react-hook-form'

function Card() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };


  return (
    <>
      <div>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.{" "}
        </p>
      </div>
      <div>
        <div>
          <p>
            {" "}
            Try it free 7 days <span>then $20/mo. thereafter</span>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="First name"  {...register("firstName")}/>
          <input type="text" placeholder="User name"  {...register("userNAme")} />
          <input type="text" placeholder="Email"  {...register("email")} />
          <input type="password" placeholder="Password"  {...register("password")} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default Card;
