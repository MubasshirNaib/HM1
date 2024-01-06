import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout()
      .then(() => {
        console.log('successfully logged out');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='flex justify-between w-full'>
      <div className='flex-1 px-2 mx-2 font-bold text-2xl'>Shahid Tarek Huda Hall</div>
      <div className='flex-none hidden lg:block'>
        <div className='flex gap-3 items-center'>
          <NavLink
            to={`/`}
            className={({ isActive }) =>
              isActive ? 'btn  btn-primary btn-sm' : 'btn btn-sm btn-ghost'
            }
          >
            Home
          </NavLink>
          <NavLink
            to={`/token`}
            className={({ isActive }) =>
              isActive ? 'btn  btn-primary btn-sm' : 'btn btn-sm btn-ghost'
            }
          >
            Token Purchase
          </NavLink>
          <NavLink
            to={`/hallfee`}
            className={({ isActive }) =>
              isActive ? 'btn  btn-primary btn-sm' : 'btn btn-sm btn-ghost'
            }
          >
            Hall fee
          </NavLink>
          <NavLink
            to={`/complain`}
            className={({ isActive }) =>
              isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'
            }
          >
            Complains
          </NavLink>
          <NavLink
            to={`/roomallote`}
            className={({ isActive }) =>
              isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'
            }
          >
            Room Allotement
          </NavLink>
          {user?.email ? (
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                
                <li>
                  <Link to={'/ordered-food'} className='justify-between'>My ordered food items</Link>
                </li>
                <li>
                  <Link onClick={handleLogout} to={`/login`}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to={`/login`}
              className={({ isActive }) =>
                isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
