import Image from "next/image";
import Link from "next/link";

type Review = {
  name: string;
  image: string;
  stars: number;
  text: string;
  url: string;
}

export default function ReviewCard({review}: {review: Review}) {



  return (
    <div className="review-card">
      <div className="review-card__header">
        <div className="review-card__header__info">
          <h3>{review.name}</h3>
          <Image src={"/icons/five-stars.svg"} width={96} height={16} alt="stars rating"/>
        </div>
        <div className="review-card__header__image">
          <Image src={review.image} width={66} height={66} alt="review"/>
        </div>
      </div>
      <p>{review.text}</p>
      <Link href={review.url}>Bewertung ansehen</Link>
    </div>
  )
}