import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../context/themeContext';
import { useLogoutMutation } from '../hooks/useLogout';
import { UserContext } from '../context/userContext';
import { useIsUser } from '../hooks/useIsUser';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { mutate: logout } = useLogoutMutation();
  const { user } = useContext(UserContext);
  const isUser = useIsUser();
  const navigate = useNavigate();

  return (
    <div className="bg-headerBg flex items-center justify-between p-[15px] md:px-[50px] sticky top-0 z-10 shadow-lg">
      <div
        className="w-[60px] h-[20px] rounded-[10px] flex items-center justify-center cursor-pointer"
        onClick={() => navigate('/home')}
      >
        <img src={logo} />
      </div>
      <div className="flex items-center gap-[27px]">
        {theme == 'dark' ? (
          <FaSun
            onClick={toggleTheme}
            color="yellow"
            size={24}
            cursor="pointer"
          />
        ) : (
          <FaMoon
            onClick={toggleTheme}
            color="black"
            size={24}
            cursor="pointer"
          />
        )}
        {isUser ? (
          <>
            <div className="bg-gray-700  w-[30px] h-[30px] cursor-pointer rounded-[50%] select-none flex items-center justify-center">
              <p className="text-[14px] text-white">
                {user.charAt(0).toUpperCase()}
              </p>
            </div>
            <div
              onClick={() => logout()}
              className="flex items-center gap-[5px] cursor-pointer hover:bg-hover px-[20px] py-[10px] rounded-[20px]"
            >
              <p className="text-[14px] text-primary mb-[3px] md:block">
                Log Out
              </p>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
