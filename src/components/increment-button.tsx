const IncrementButton = ({
  increment,
  label,
}: {
  increment: () => void;
  label: string;
}) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer"
      onClick={increment}
    >
      {label}
    </button>
  );
};

export default IncrementButton;
