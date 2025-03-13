type TestimonialProps = {
  author: string;
  authorTitle: string;
  authorImg: string;
  text: string;
};

export default function Testimonial({ author, authorTitle, authorImg, text }: TestimonialProps) {
  return (
    <div className="flex gap-[77px]">
      <div className="flex-1 flex">
        <div className="size-18 rounded-full overflow-hidden">
          <img src={authorImg} alt={author} />
        </div>
        <div>
          <h5 className="text-2xl font-semibold">{author}</h5>
          <small className="font-satoshi text-lg">{authorTitle}</small>
        </div>
      </div>
      <div className="flex-4 flex flex-col gap-8">
        <p className="text-white font-satoshi text-2xl font-bold">{text}</p>
        <div className="bg-white h-[1px]" />
      </div>
    </div>
  );
}
