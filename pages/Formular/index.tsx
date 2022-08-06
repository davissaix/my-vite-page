import { useState } from "react";
import { useForm } from "react-hook-form";

import './styles.css'

function Formular() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
     
      <input {...register("firstName")} placeholder="First name" />
      {/* <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select> */}
      <textarea {...register("aboutYou")} placeholder="Message" />
      {/* <p>{data}</p> */}
      <input type="submit" />
    </form>
  )
}
export default Formular