import React from "react";

interface CustomFormProps {}

export default function CustomForm() {
  const [value, setValue] = React.useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setValue(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello ", value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
