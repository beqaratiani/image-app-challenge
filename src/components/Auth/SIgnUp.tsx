import { SubmitHandler, useForm } from 'react-hook-form';
import SingleInput from './SingleInput';
import { useRegisterMutation } from '../../hooks/useRegister';

interface FormInputs {
  email: string;
  age: number;
  password: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const { mutate: registerMutation, error: registerError } =
    useRegisterMutation();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    registerMutation(data);
  };

  return (
    <form className="mt-[22px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[23px]">
        {/* Email */}
        <SingleInput
          title="Email"
          placeholder="example@gmail.com"
          inputType="text"
          register={register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
              message: 'Only Gmail addresses are allowed',
            },
          })}
          error={errors.email?.message ?? registerError?.message}
        />

        <SingleInput
          title="Password"
          placeholder="Enter your password"
          inputType="password"
          register={register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
            maxLength: {
              value: 12,
              message: 'Password must be at most 12 characters',
            },
          })}
          error={errors.password?.message}
        />

        <SingleInput
          title="Age"
          placeholder="Enter age"
          inputType="text"
          register={register('age', {
            required: 'Age is required',
            pattern: {
              value: /^(1[89]|[2-9][0-9])$/,
              message: 'Age must be between 18-99',
            },
          })}
          error={errors.age?.message}
        />
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md w-full">
        Submit
      </button>
    </form>
  );
}
