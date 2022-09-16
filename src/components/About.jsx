import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nesciunt nam odio eum distinctio mollitia natus atque ipsam, optio autem itaque, reiciendis quisquam minus quaerat nostrum fugit suscipit magnam! Sint.
                </p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi commodi nam reiciendis quisquam quibusdam at eum sapiente, quos veniam nesciunt nisi, harum reprehenderit magnam voluptates. Quis cum accusantium ea dolor.
                </p>
            </div>

        </div>
    )
}

export default About