import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

// ServiceCard to be Rendered
const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor pointer hover:shadow-xl">
        <div className={'w-10 h-10 rounded-full flex justify-center items-center ${color}'}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-green-200 text-lg">{title}</h3>
            <p className="mt-1 text-green-200 text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
)

// Services Component 
const Services = () => {
    return (
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">Services that we
                        <br />
                        continue to improve
                    </h1>
                </div>
            </div>

            {/* Service Card Rendering */}
            <div id="services">

                {/* Security Guarantee */}
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="Security gurantee"
                    icon={<BsShieldFillCheck fontSize={21} className="text-green-700" />}
                    subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                />

                {/* Best Exchange Rate */}
                <ServiceCard
                    color="bg-[#8945F8]"
                    title="Best exchange rates"
                    icon={<BiSearchAlt fontSize={21} className="text-green-700" />}
                    subtitle="Best exchange rates on the market, with the lowest transaction fees for optimal user experience"
                />

                {/* Fastest Transaction Times */}
                <ServiceCard
                    color="bg-[#F84550]"
                    title="Fastest transactions"
                    icon={<RiHeart2Fill fontSize={21} className="text-green-700" />}
                    subtitle="Utilize the fastest transaction times across the blockchain networks on our decentralized finance app"  
                />
            </div>

        </div>

    );
}

export default Services;