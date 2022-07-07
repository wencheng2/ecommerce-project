import "./DeliveryScreen.css";
import { useForm } from "react-hook-form";

const DeliveryScreen = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <input defaultValue="test" {...register("example")} />
      
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      </div>
      
      <div>
        <input {...register("fullName")} placeholder="Name" />
      </div>
      <div>
        <input {...register("email")} placeholder="Email" />
      </div>
      <div> 
        <input {...register("address")} placeholder="Address" />
      </div>
      <div>
        <input {...register("city")} placeholder="City" />
      </div>
      <div>
       <input {...register("state")} placeholder="State" />
      </div>
        <input {...register("postcode")} placeholder="postcode" />
      
      <input type="submit" />
    </form>
  );
}
 
export default DeliveryScreen
