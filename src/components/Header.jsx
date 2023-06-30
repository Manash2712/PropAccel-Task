const Header = () => {
    return (
        <>
            <div className="nav flex justify-between px-[175px] h-24 items-center">
                <div>Logo</div>
                <div>
                    <ul className="flex gap-28">
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Review</li>
                    </ul>
                </div>
            </div>
            <div className="podcast flex justify-between px-[175px]">
                <div className="left w-1/2">
                    <h3 className="text-[48px] font-bold">
                        Learn how to launch a successful podcast
                    </h3>
                    <p className="w-[433px] mt-8">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting in ustry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s
                    </p>
                    <div className="mt-14">
                        <button className="h-[64.861px] bg-gradient-to-r from-[#4776E6] to-[#8E54E9] px-[55px] rounded-[10px]">
                            Sign up Now
                        </button>
                    </div>
                </div>
                <div className="right relative w-1/2">
                    <div className="h-[281px] w-[491px] absolute top-0 left-24">
                        <img src="src\assets\everyone-is-smiling.png" alt="" />
                    </div>
                    <div className="h-[281px] w-[491px] absolute top-24">
                        <img src="src\assets\group-business.png" alt="" />
                    </div>
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute -right-10 top-16" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute -right-10 top-32" />
                    <div className="absolute -right-20 rotate-[-16.831deg] bg-white h-[65px] w-[65px] flex justify-center items-center bottom-40">
                        <img src="src\assets\Vector.png" alt="" />
                    </div>
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute -right-10 top-56" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute -right-10 top-[280px]" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute -right-10 bottom-6" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute -right-10 -bottom-8" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute right-5 -bottom-8" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute right-20 -bottom-8" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute right-[140px] -bottom-8" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute right-[200px] -bottom-8" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute right-[260px] -bottom-8" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute right-[320px] -bottom-8" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute right-[380px] -bottom-8" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute right-[440px] -bottom-8" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute right-[500px] -bottom-8" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute right-[560px] -bottom-8" />
                    <div className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute right-5 bottom-[76px]" />
                    <div className=" h-[65px] w-[65px] absolute -right-5 -bottom-4 rotate-[15.135deg]">
                        <img src="src\assets\Group.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
