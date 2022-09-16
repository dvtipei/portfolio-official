import React from 'react';
import wyd from '../assets/portfolio/wyd.jpg';
import jobPursuit from '../assets/portfolio/jobPursuit.jpg';
import bellyBusters from '../assets/portfolio/bellyBusters.jpg';
import workScheduler from '../assets/portfolio/workScheduler.jpg';
import quizChallenge from '../assets/portfolio/quizChallenge.jpg';
import passwordGenerator from '../assets/portfolio/passwordGenerator.jpg';

const Portfolio = () => {
    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work here</p>
                </div>
                <div className="grid sm:grid-cols- md:grid-cols-3 gap-8 px-12 sm:px-0">
                    <div className="shadow-md shadow-gray-600 rounded-lg">
                        <h2 className='flex items-center justify-center text-3xl'>React App</h2>
                        <img src={wyd} alt="" className="rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center">
                            <a href="https://peaceful-reef-29677.herokuapp.com/">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                            </a>
                            <a href="https://github.com/RPAPE3/WYD">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </a>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-600 rounded-lg">
                    <h2 className='flex items-center justify-center text-3xl'>RESTful API</h2>
                        <img src={jobPursuit} alt="" className="rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center">
                            <a href="https://job-pursuit-tracking.herokuapp.com/home">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                            </a>
                            <a href="https://github.com/dvtipei/JobPursuit">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </a>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-600 rounded-lg">
                    <h2 className='flex items-center justify-center text-3xl'>Front-End App</h2>
                        <img src={bellyBusters} alt="" className="rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center">
                            <a href="https://dalsakkaf.github.io/Project1-BarkingDog/">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                            </a>
                            <a href="https://github.com/Dalsakkaf/Project1-BarkingDog">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </a>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-600 rounded-lg">
                    <h2 className='flex items-center justify-center text-3xl'>Work Day Scheduler</h2>
                        <img src={workScheduler} alt="" className="rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center">
                            <a href="https://dvtipei.github.io/module-5-challenge/">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                            </a>
                            <a href="https://github.com/dvtipei/module-5-challenge">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </a>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-600 rounded-lg">
                    <h2 className='flex items-center justify-center text-3xl'>Quiz Challenge</h2>
                        <img src={quizChallenge} alt="" className="rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center">
                            <a href="https://dvtipei.github.io/module-4-challenge/">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                            </a>
                            <a href="https://github.com/dvtipei/module-4-challenge">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </a>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-600 rounded-lg">
                    <h2 className='flex items-center justify-center text-3xl'>Password Generator</h2>
                        <img src={passwordGenerator} alt="" className="rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center">
                            <a href="https://dvtipei.github.io/module-3-challenge/">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                            </a>
                            <a href="https://github.com/dvtipei/module-3-challenge">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio