import React, {useState, useEffect} from "react";

const withData = WrappedComponent => {
  const WithData = props => {
    const [state, setState] = useState([]);

    useEffect(() => {
      fetch(props.dataSource)
        .then(response => response.json())
        .then(data => setState({data: data.slice(0, 3)}));
    }, []);

    const {dataSource, ...otherProps} = props;
    const {data} = state;

    return state.length < 1 ? (
      <h1>Loading</h1>
    ) : (
      <WrappedComponent data={data} {...otherProps} />
    );
  };

  return WithData;
};

export default withData;
