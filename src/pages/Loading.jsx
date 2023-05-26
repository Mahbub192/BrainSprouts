import Lottie from "lottie-react";
import loading from "../assets/99274-loading.json";

const Loading = () => {
    return (
        <div>
            <Lottie animationData={loading} loop={true} />
        </div>
    );
};

export default Loading;