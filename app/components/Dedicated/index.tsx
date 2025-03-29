import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/man.svg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Overview</h2>
                        <p className="text-xm text-lightblack mt-5 text-center lg:text-start">The Innovation, Incubation, and Entrepreneurship (IIE) Cell is dedicated to nurturing entrepreneurial talent and transforming innovative ideas into impactful ventures. With a strong focus on mentorship, structured programs, and access to essential resources, IIE creates an environment where creativity thrives and startups can scale into sustainable enterprises. By bridging the gap between academia and industry, we provide aspiring entrepreneurs with the tools and opportunities needed to bring their visions to life.

As a key part of a broader innovation ecosystem, IIE collaborates with industry leaders, academic experts, and government bodies to foster a culture of inclusivity and shared learning. Our initiatives are designed to inspire curiosity, encourage collaboration, and challenge conventional thinking, equipping individuals with the skills and confidence to drive meaningful change. Through this approach, we empower the next generation of innovators to build solutions that make a lasting impact on society.</p>
                        {/* <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> Cathy Hills, CEO</p> */}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
