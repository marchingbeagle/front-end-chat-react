function Message({ message, index, received }) {
  return (
    <div
      className={`p-3  text-white rounded-lg mb-2 ${
        received ? "mr-48 bg-green-400" : "ml-48 bg-blue-500"
      }`}
      key={index}
    >
      {message}
    </div>
  );
}

export default Message;
