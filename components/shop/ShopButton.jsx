const ShopButton = ({ text }) => {
  return (
    <button className="border border-gray-300 p-2 rounded-md hover:bg-gray-200 hover:border-gray-200">
      {text}
    </button>
  );
};

export default ShopButton;
