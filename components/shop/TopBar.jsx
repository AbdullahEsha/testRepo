import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsCaretRightFill } from "react-icons/bs";

const TopBar = ({ title, desc }) => {
  const uppercase = title.toUpperCase(); //convert to uppercase
  const lowercase = title.toLowerCase(); //convert to lowercase
  //convert to capitalize all the words
  function capitalizeWords(props) {
    let words = props.split(" ");
    let capitalizedWords = [];

    for (let word of words) {
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }

    return capitalizedWords.join(" ");
  }
  return (
    <div className="py-4 border-b">
      <div className="flex items-center gap-4 text-gray-500">
        <Link className="flex items-center gap-1" href="/">
          <AiFillHome />
          <span className="hover:underline hover:underline-offset-2">Home</span>
        </Link>
        <div className="flex items-center">
          <BsCaretRightFill size={20} />
          <span className="uppercase:first-letter">
            {capitalizeWords(lowercase)}
          </span>
        </div>
      </div>

      <div className="text-center mt-2 lg:mt-0">
        <h1 className="text-2xl font-semibold mb-2 text-gray-800">
          {uppercase}
        </h1>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default TopBar;
