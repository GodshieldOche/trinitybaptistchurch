import Image from 'next/image'

const list = [1,2,3]
const Speakers = () => {
    return (
        <div className="space-y-5">
            {
                list.map(item => (
                    <div key={item} className="flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0 items-center md:space-x-3">
                        <div className="w-full max-w-[100px] mx-auto h-[100px] rounded-full  relative">
                            <Image src="/img/eleazar.jpg"
                                className="object-cover rounded-full w-full h-full"
                                layout="fill"
                                blurDataURL="data:..."
                                placeholder="blur"
                                alt="logo" />
                        </div>
                        <div className="w-full space-y-3 md:space-y-1 px-2 md:px-0 ">
                            <h1 className="text-center font-medium text-sm md:text-left uppercase ">Eleazar Maduka</h1>
                            <p className="text-sm font-light text-justify">Eleazar Maduka is the incoming dean of the seminary at African Christian University in Lusaka, Zambia. He previously served as pastor of preaching at Grace Family Baptist Church in Spring, Texas. He has also served as adjunct professor at both the College of Biblical Studies in Houston, Texas, and Union University in Jackson, Tennessee. Dr. Baucham has authored numerous books including Family Driven Faith: Doing What It Takes to Raise Sons and Daughter Who Walk With God, The Supremacy of Christ in Truth, and What He Must Be: If He Wants to Marry My Daughter.</p>
                        </div>
                    </div>
                ))
           }
        </div>
    )
}

export default Speakers
