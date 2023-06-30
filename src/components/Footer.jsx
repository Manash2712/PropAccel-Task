const Footer = () => {
    return (
        <div className="">
            <div className="w-[596px] mx-auto mt-20">
                <h3 className="text-[32px] font-bold">
                    We have what you’re looking for
                </h3>
                <p className="mt-6 text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] to-[#8E54E9]">
                    Copy Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry`s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type a
                </p>
                <div className="mt-16 flex justify-center">
                    <button className="text-center w-[236px] h-[60px] rounded-[10px] bg-gradient-to-r from-[#4776E6] to-[#8E54E9]">
                        Get Started Now
                    </button>
                </div>
            </div>
            <div className="mx-[175px] flex mt-20 py-5 border-t-2 items-center">
                <div>
                    <p className="text-[12px]">
                        All Right Reserved @Copyright 2023
                    </p>
                </div>
                <div className="mx-48 flex gap-6">
                    <button className="text-[12px]">Terms of Service</button>
                    <button className="text-[12px]">Privacy Policy</button>
                    <button className="text-[12px]">Product</button>
                </div>
                <div className="ml-16">
                    <ul className="flex">
                        <li>
                            <img src="src\assets\facebook.png" alt="" />
                        </li>
                        <li>
                            <img src="src\assets\youtube.png" alt="" />
                        </li>
                        <li>
                            <img src="src\assets\instagram.png" alt="" />
                        </li>
                        <li>
                            <img src="src\assets\twitter.png" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
