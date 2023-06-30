const Footer = () => {
    return (
        <div className="relative">
            <div className="footer-clip bg-gradient-to-l from-[#7A3199] to-[#161033] absolute h-full w-full -z-10">
                &nbsp;
            </div>
            <div className="">
                <div className="w-[596px] mx-auto mt-32">
                    <h3 className="text-[32px] font-bold">
                        We have what you’re looking for
                    </h3>
                    <p className="mt-6 text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] to-[#8E54E9]">
                        Copy Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry`s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type a
                    </p>
                    <div className="mt-16 flex justify-center">
                        <button className="text-center w-[236px] h-[60px] rounded-[10px] bg-gradient-to-r from-[#4776E6] to-[#8E54E9]">
                            Get Started Now
                        </button>
                    </div>
                </div>
                <div className="mx-[175px] text-white flex mt-20 py-5 border-t-2 items-center">
                    <div className="ml-12">
                        <p className="text-[12px]">
                            All Right Reserved @Copyright 2023
                        </p>
                    </div>
                    <div className="ml-80 flex gap-6">
                        <button className="text-[12px]">
                            Terms of Service
                        </button>
                        <button className="text-[12px]">Privacy Policy</button>
                        <button className="text-[12px]">Product</button>
                    </div>
                    <div className="ml-20">
                        <ul className="flex gap-7">
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
        </div>
    );
};

export default Footer;
