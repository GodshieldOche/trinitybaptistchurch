import Image from 'next/image'
import blur from '../common/blur'

const Speakers = ({speakers}) => {

    const lister = () => {
        const dp = []

        speakers.map(session => {
            dp.push(session.preacher)
        })
        let preachers = [...new Set(dp)];

        return preachers.map(preacher => (
            <div key={preacher._id} className="flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0 items-center md:space-x-3">
                <div className="w-full max-w-[100px] mx-auto h-[100px] rounded-full  relative">
                    <Image src={preacher.imageUrl.url}
                        className="object-cover rounded-full w-full h-full"
                        layout="fill"
                        blurDataURL={blur}
                        placeholder="blur"
                        alt="logo" />
                </div>
                <div className="w-full space-y-3 md:space-y-1 px-2 md:px-0 ">
                    <h1 className="text-center font-medium text-sm md:text-left uppercase ">{preacher.name}</h1>
                    <p className="text-sm font-light text-center md:text-justify">
                        {preacher.about}
                    </p>
                </div>
            </div>
        ))

    }
  
    return (
        <div className="space-y-5 ">
            {
                lister()
            }
        </div>
    )
}

export default Speakers
