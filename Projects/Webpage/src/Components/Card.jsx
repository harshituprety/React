const Card = ({ image, button }) => {
  return (
    <>
      <div className="mt-8 max-w-sm mx-auto flex flex-row mb-3">
        <div className="bg-white rounded overflow-hidden shadow-md">
          <img src={image} alt="casino" />
          <div className="m-4">
            <span className="font-bold">Lorem, ipsum dolor.</span>
            <span className="block text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </span>
            <button class="bg-sky-500 hover:bg-sky-700 rounded-xl p-2 text-white mt-3 text-sm">
              {button}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
