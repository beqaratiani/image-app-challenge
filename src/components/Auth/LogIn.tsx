import { SubmitHandler, useForm } from 'react-hook-form';
import SingleInput from './SingleInput';
import { useLoginMutation } from '../../hooks/useLogin';

interface FormInputs {
  email: string;
  password: string;
}

export default function LogIn() {
  const { mutate: login, error } = useLoginMutation();
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    login(data);
  };

  return (
    <form className="mt-[22px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[23px]">
        <SingleInput
          title="Email"
          placeholder="example@gmail.com"
          inputType="text"
          register={register('email')}
          error={error?.message}
        />

        <SingleInput
          title="Password"
          placeholder="Enter your password"
          inputType="password"
          register={register('password')}
          error={error?.message}
        />
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md w-full">
        Submit
      </button>
    </form>
  );
}
