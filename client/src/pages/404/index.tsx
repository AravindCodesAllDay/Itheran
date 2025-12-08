import animationData from "../../assets/loaderCat.json";
import Lottie from "react-lottie";

export default function PageNotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
      <h1 className="text-4xl font-semibold text-center">PageNotFound</h1>
    </div>
  );
}
