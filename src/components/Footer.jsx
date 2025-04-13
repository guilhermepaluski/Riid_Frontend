import "react";

const Footer = () => {
    return (
        <div className="flex flex-col justify-between bg-black">
            {/* Footer */}
            <footer className="bg-black text-white p-6 text-left text-sm">
                <div className="text-2xl font-bold">RIID</div><br />
                <div className="grid grid-cols-3 gap-1">
                <div>
                    <a href="#" className="">About us</a><br />
                    <a href="#" className="">Founders</a><br />
                    <a href="#" className="">+55 (47) 0000-0000</a><br />
                </div>
                <div>
                    <a href="#" className="">Books</a><br />
                    <a href="#" className="">Borrowed</a><br />
                    <a href="#" className="">Account</a><br />
                </div>
                <div>
                    <a href="#" className="">Help</a><br />
                    <a href="#" className="">Contact team</a><br />
                    <a href="#" className="">Feedbacks</a><br />
                </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;