import PlayButton from "./PlayButton";
import UploadButton from "./UploadButton";


export default function ToolbarNext() {
    return (
        <div>
            <PlayButton movieName="Kikkis delivery service" />
            <UploadButton />
        </div>
    )
}