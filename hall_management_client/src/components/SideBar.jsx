import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='menu p-4 w-80 min-h-full bg-base-200'>
      <NavLink
        to={`/`}
        className={({ isActive }) =>
          isActive ? 'btn  btn-primary btn-sm' : 'btn btn-sm btn-ghost'
        }
      >
        Home
      </NavLink>
      <NavLink
        to={`/all-foods`}
        className={({ isActive }) =>
          isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'
        }
      >
        Food
      </NavLink>
    </div>
  );
};

export default SideBar;
