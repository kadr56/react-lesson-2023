import AlertButton from "./AlertButton";

export default function Toolbar() {
    return (
        <div>
            <AlertButton message='Playing!'> Play movie</AlertButton>
            <AlertButton message='Uploading!'> Upload Image</AlertButton>
            <AlertButton message='Downloading!'> Downloading Image</AlertButton>
        </div>
    )

}