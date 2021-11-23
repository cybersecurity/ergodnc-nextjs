import Head from 'next/head'
import Link from 'next/link'


export default function Profile() {

    return (
        <>
            <Head>
                <title>ergodnc — Account</title>
            </Head>

            <h1 className="text-3xl font-black mb-10">
                Hello Mohamed!
            </h1>

            <div className="mb-10">
                <span>Here is a list of your previous reservations!</span>
            </div>

            <div className="flex pb-10 mb-10 border-b">
                <div className="w-1/3 h-56 relative overflow-hidden rounded-lg">
                    <img src="https://via.placeholder.com/400x400.png?text=PLACEHOLDER" className="object-cover w-full h-full"></img>
                </div>

                <div className="w-full pl-14">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Large office space</h1>
                        <span className="block font-semibold">$12 per day</span>
                    </div>
                    <p className="leading-loose mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam delectus doloremque doloribus eius eligendi molestiae molestias nihil nostrum nulla obcaecati omnis, quia quidem sequi sunt tempora temporibus vero voluptatum?
                    </p>
                    <Link href={"/offices/" + 1}>
                        <a className="text-purple-600 font-bold">More details...</a>
                    </Link>
                </div>
            </div>

            <div className="flex pb-10 mb-10 border-b">
                <div className="w-1/3 h-56 relative overflow-hidden rounded-lg">
                    <img src="https://via.placeholder.com/400x400.png?text=PLACEHOLDER" className="object-cover w-full h-full"></img>
                </div>

                <div className="w-full pl-14">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Large office space</h1>
                        <span className="block font-semibold">$12 per day</span>
                    </div>
                    <p className="leading-loose mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam delectus doloremque doloribus eius eligendi molestiae molestias nihil nostrum nulla obcaecati omnis, quia quidem sequi sunt tempora temporibus vero voluptatum?
                    </p>
                    <Link href={"/offices/" + 1}>
                        <a className="text-purple-600 font-bold">More details...</a>
                    </Link>
                </div>
            </div>

            <div className="flex">
                <div className="w-1/3 h-56 relative overflow-hidden rounded-lg">
                    <img src="https://via.placeholder.com/400x400.png?text=PLACEHOLDER" className="object-cover w-full h-full"></img>
                </div>


                <div className="w-full pl-14">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Large office space</h1>
                        <span className="block font-semibold">$12 per day</span>
                    </div>
                    <p className="leading-loose mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam delectus doloremque doloribus eius eligendi molestiae molestias nihil nostrum nulla obcaecati omnis, quia quidem sequi sunt tempora temporibus vero voluptatum?
                    </p>
                    <Link href={"/offices/" + 1}>
                        <a className="text-purple-600 font-bold">More details...</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
