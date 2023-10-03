import {useState} from 'react';
import {useDispatch} from 'react-redux';

import s from './UserConstructor.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
// import {createUser} from '../../../../redux/actions/users';

const UsersConstructor = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    country: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser(userData));
  };

  return (
      <div className={s.wrapper}>
        <form
            className={s.form}
            autoComplete="off"
            noValidate={true}
            onSubmit={handleSubmit}
        >
          <h2>Create User</h2>

          <div className={s.fields}>
            <div className={s.field_block}>
              <label className={s.label} htmlFor="first-name">First Name</label>
              <input
                  className={s.input}
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="First name"
                  value={userData.firstName}
                  onChange={(e) => setUserData({...userData, firstName: e.target.value})}
              />
            </div>

            <div className={s.field_block}>
              <label className={s.label} htmlFor="last-name">
                Last Name
              </label>
              <input
                  className={s.input}
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Last name"
                  value={userData.lastName}
                  onChange={(e) => setUserData({...userData, lastName: e.target.value})}
              />
            </div>

            <div className={s.field_block}>
              <label className={s.label} htmlFor="dob">
                DOB
              </label>
              <input
                  className={s.input}
                  type="text"
                  name="dob"
                  id="dob"
                  placeholder="Date of birth"
                  value={userData.dob}
                  onChange={(e) => setUserData({...userData, dob: e.target.value})}
              />
            </div>

            <div className={s.field_block}>
              <label className={s.label} htmlFor="country">
                Country
              </label>
              <input
                  className={s.input}
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  value={userData.country}
                  onChange={(e) => setUserData({...userData, country: e.target.value})}
              />
            </div>

          </div>

          <div className={s.btn}>
            <button className={s.send} type="submit">
              <FontAwesomeIcon icon={faPaperPlane}/>
            </button>
          </div>
        </form>
      </div>
  );
};

export default UsersConstructor;
