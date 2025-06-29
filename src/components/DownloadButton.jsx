import "react";

const DownloadButton = () => {
    return (
        <div>
            <button className="flex gap-5 font-bold text-white text-3xl bg-black px-10 py-4 rounded-4xl cursor-pointer">
                <img src="/images/downloadpnglogo.png" alt="" className="w-10" />
                Download PDF
            </button>
        </div>
    )
}

export default DownloadButton;