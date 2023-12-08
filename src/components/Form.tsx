import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name field must be atleast 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "Age must be atleast 18" }),
});

type FormData = z.infer<typeof schema>;
// infer returns a type of typescript which is similar to interface

// interface FormData {
//   name: string;
//   age: number;
// }
// Interface used to define the shape of the form and while accessing errors it is shows all the field names

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit2 = (data: FieldValues) => console.log(data);

  // 1. const nameRef = useRef<HTMLInputElement>(null);
  //while using ref we have to initialise the value of the ref to null because react gives value to a property only
  // on render and if we do not initialise it to null then it will give an error

  // const ageRef = useRef<HTMLInputElement>(null);

  // 2. const [per, setPer] = useState({ name: "", age: "" });

  // 1. const person = { name: "", age: 0 };

  // 2. const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault(); //Prevents page from passing the data to the server

  //1. if (nameRef.current !== null) person.name = nameRef.current.value;
  // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

  //   2. console.log(per);
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit2)}>
      {/* submit handler responsible for handling the form submission */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // 1. ref={nameRef}

          // 2. onChange={(event) => setPer({ ...per, name: event.target.value })}
          // value={per.name}

          {...register("name" /*{ required: true, minLength: 3 }*/)}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
        {/* this is called optional chaining and if name is not present in errors then it will not access the 
        type field. errors.name? means type field is accessed only if there is a name field present in errors */}
        {/* {errors.name?.type === "minLength" && (
          <p className="text-danger">The minimum length of the field is 3</p>
        )} */}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          //1. ref={ageRef}
          //2. onChange={(event) => setPer({ ...per, age: event.target.value })}
          // value={per.age}

          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
