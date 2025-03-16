import { useState } from 'react';
import arrowRight from '../assets/arrowRight.png';
import LogIn from '../components/Auth/LogIn';
import SignUp from '../components/Auth/SignUp';
import { Navigate } from 'react-router-dom';
import { useIsUser } from '../hooks/useIsUser';

export default function Auth() {
  const isUser = useIsUser();
  const [openSignUp, setOpenSignUp] = useState(false);

  if (isUser) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="pb-[30px] flex flex-col items-center justify-center">
      <div
        className={`w-[350px] md:w-[472px] mx-auto bg-authBackground mt-[20px] p-[20px] md:p-[41px] border-[1px] border-border shadow-lg rounded-[6px] 
        transition-transform duration-700 ease-in-out origin-top ${
          openSignUp ? 'rotate-[360deg]' : ''
        }`}
      >
        <img src={arrowRight} alt="arrow-right" className="mx-auto" />
        <p className="text-center text-[20px] md:text-[24px] font-bold text-primary mt-[15px]">
          {openSignUp ? 'Sign up with your email' : 'Log in with your email'}
        </p>
        <p className="text-center text-[14px] mt-[15px] text-secondary">
          Use your email to{' '}
          {openSignUp
            ? 'create a new workspace.'
            : 'log in to your team workspace.'}
        </p>
        <div>{openSignUp ? <SignUp /> : <LogIn />}</div>
      </div>

      <p className="mt-[23px] text-center text-primary text-[14px]">
        Don’t have an account yet?{' '}
        <span
          className="text-[#117DF9] cursor-pointer"
          onClick={() => setOpenSignUp((isOpen) => !isOpen)}
        >
          {openSignUp ? 'Log in' : 'Sign up'}
        </span>
      </p>
    </div>
  );
}
