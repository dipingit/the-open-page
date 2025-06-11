import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-lg border border-gray-200">
      {/* Card Header */}
      <div className="flex justify-between items-center px-4 pt-4 pb-2">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{author.published_date.split(' ')[0]}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-2">
        <h2 className="font-bold text-lg text-gray-800 leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 py-2">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="w-full h-60 object-contain rounded-lg mb-4"
        />
      </figure>

      {/* Description */}
      <div className="px-4 pb-3 text-sm text-gray-700">
        {details.length > 250 ? (
          <p>
            {details.slice(0, 250)}...
            <span className="text-red-500 font-medium cursor-pointer"> Read More</span>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>

      {/* Footer: Rating and Views */}
        <div className="flex justify-between items-center border border-gray-200  px-4 py-2 text-sm text-gray-600">
            <div className="flex items-center gap-1 text-orange-400">
                {[...Array(Math.floor(rating.number))].map((_, i) => (
                    <BsStarFill key={i}></BsStarFill>
                ))}
                <span className="ml-1 text-black">{rating.number}</span>
            </div>
            <div className="flex items-center gap-1">
                <FaEye />
                <span>{total_view}</span>
            </div>
        </div>
    </div>
  );
};

export default NewsCard;
