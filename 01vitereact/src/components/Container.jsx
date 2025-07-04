import "../index.css";

const Container = (props) => {
  return (
    <div className="m-8 p-2 border rounded bg-gray-950">{props.children}</div>
  );
};

export default Container;
