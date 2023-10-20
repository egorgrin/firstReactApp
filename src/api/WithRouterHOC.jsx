import {useLocation, useNavigate, useParams} from 'react-router-dom';

/*const withRouterHOC(Component) => {
  return function ComponentWithRouterProps(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
        <Component
            {...props}
            location={location}
            params={params}
            navigate={navigate}
        />
    );
  }
}*/

export const withRouterHOC = (Component) => (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return (
      <Component
          {...props}
          location={location}
          params={params}
          navigate={navigate}
      />
  );
};