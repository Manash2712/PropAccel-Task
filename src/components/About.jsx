const About = () => {
    return (
        <div className="relative">
            <div className="about-clip bg-gradient-to-br from-[#4e1b63] to-[#161033] absolute bottom-0 left-0 h-full w-full -z-20">
                &nbsp;
            </div>
            <div>
                <div className="relative">
                    <img
                        src="src\assets\pngwing.png"
                        alt=""
                        className="absolute right-0"
                    />
                </div>
                <div className="flex gap-20 px-[175px]">
                    <div className="w-1/2">
                        <div className="flex gap-6 mt-48">
                            <div className="w-[268px] h-40 p-[30px] rounded-lg border border-purple-800 flex-col justify-start items-start gap-4 ">
                                <div className="text-black text-[20px] font-bold">
                                    Interactive Features
                                </div>
                                <div className="w-52 mt-4 text-black text-[12px] font-normal">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been
                                </div>
                            </div>
                            <div className="w-[268px] h-40 p-[30px] mt-6 rounded-lg border border-purple-800 flex-col justify-start items-start">
                                <div className="text-black text-[20px] font-bold">
                                    Interactive Features
                                </div>
                                <div className="w-52  mt-4 text-black text-[12px] font-normal">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6 mt-6">
                            <div className="w-[268px] h-40 p-[30px] rounded-lg border border-purple-800 flex-col justify-start items-start gap-4">
                                <div className="text-black text-[20px] font-bold">
                                    Interactive Features
                                </div>
                                <div className="w-52  mt-4 text-black text-[12px] font-normal">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been
                                </div>
                            </div>
                            <div className="w-[268px] h-40 p-[30px]  mt-6 rounded-lg border border-purple-800 flex-col justify-start items-start gap-4">
                                <div className="text-black text-[20px] font-bold">
                                    Interactive Features
                                </div>
                                <div className="w-52  mt-4 text-black text-[12px] font-normal">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-60 justify-start items-start gap-12">
                        <div className="flex-col justify-start items-start gap-6 flex">
                            <div className="text-black text-[48px] font-bold">
                                About the Course
                            </div>
                            <div className="w-[367px] text-black text-[14px]">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry`s standard dummy text ever since
                                the 1500s, when an unkno
                            </div>
                        </div>
                        <div className=" mt-12">
                            <button className="w-[237px] h-[60px] bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg text-white text-[20px] font-bold text-center">
                                Explore Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
