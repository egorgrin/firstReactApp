let initialState = {
  id: 0,
  name: `Egor`,
  lastName: `Gurinovich`,
  dob: `25.06.1992`,
  origin: `Orenburg`,
  education: `Self-thought`,
}

const userReducer = (state = initialState, action) => state;

export default userReducer;
