import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { BriefcaseIcon } from '@heroicons/react/24/solid';

export const About = () => {

    const frontEndSkills = ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"];
    const backendSkills = ["Node.js", "Express", "MongoDB", "REST APIs"];
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">

            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent  text-center "> About Me </h2>
                <div className="glass rounded-xl p-8 border-white/10 border ">
                    <p className="text-gray-300 mb-6">Hi, I'm a Full Stack Developer with a passion for building modern, responsive, and high-performance web applications. I work across the entire web stack — from designing sleek, user-friendly interfaces with technologies like React, to developing robust back-end systems with Node.js, Express, and MongoDB. I enjoy turning complex problems into simple, elegant solutions. Whether it's creating RESTful APIs, integrating third-party services, or optimizing performance, I strive to write clean, maintainable code that scales. I'm always eager to learn new tools, explore emerging technologies, and take on challenges that push my skills forward. Let's build something great together.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontEndSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm font-semibold hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm font-semibold hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                    <div className="p-6 rounded-xl border-white/10 border hover:scale-105 transition-transform duration-300">
                        <div className="flex mb-4">
                            <AcademicCapIcon className="size-6 mr-2" />
                            <h3 className="text-xl font-bold">Education</h3>
                        </div>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.Tech in Computer Science & Engineering</strong> - Techno India University
                            </li>
                            <li>
                                <strong>Year of Graduation:</strong> 2023
                            </li>
                            <li>
                                <strong>Relevant Coursework:</strong> Data Structures, Algorithms, Web Development, Database Management Systems, Software Engineering
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:scale-105 transition-transform duration-300">
                        <div className="flex mb-4">
                            <BriefcaseIcon className="size-6 mr-2" />
                            <h3 className="text-xl font-bold">Work Experience</h3>
                        </div>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold mb-2"> SAP consultant at LTIMindtree (2024 - Present) </h4>
                                <p>  I design, develop, and deploy enterprise applications on SAP platforms, contributing to digital transformation initiatives and ensuring seamless integration with business processes.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
