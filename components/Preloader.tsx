import Spinner from "./Spinner";

export default function Preloader() {
  return (
    <div className="w-full h-full left-0 top-0 fixed bg-white flex justify-center items-center">
      <div className="scale-150">
        <Spinner />
      </div>
    </div>
  )
}