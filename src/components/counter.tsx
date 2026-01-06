const Counter = ({ count, label }: { count: number; label: string }) => {
  return (
    <div className="font-bold bg-gray-800 p-2 rounded-md">
      {label}: {count}
    </div>
  );
};

export default Counter;
