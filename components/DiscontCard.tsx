import Image from "next/image";
import Link from "next/link";

type DiscountCardProps = {
  image: string;
  title: string;
  description: string;
  url: string;
}

export default function DiscountCard({image, title, description, url}: DiscountCardProps) {
  return (
    <div className="discount-card">
      <Image src={image} width={1440} height={687} alt="Discount Card" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={url}>Einen Rabatt bekommen</Link>
    </div>
  )
}