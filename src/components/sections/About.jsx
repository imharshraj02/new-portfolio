
export const About = () => {

    const frontEndSkills = ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"];
    const backendSkills = ["Node.js", "Express", "MongoDB", "REST APIs"];
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">

            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent  text-center "> About Me </h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">Hi, I'm a Full Stack Developer with a passion for building modern, responsive, and high-performance web applications. I work across the entire web stack — from designing sleek, user-friendly interfaces with technologies like React, to developing robust back-end systems with Node.js, Express, and MongoDB. I enjoy turning complex problems into simple, elegant solutions. Whether it's creating RESTful APIs, integrating third-party services, or optimizing performance, I strive to write clean, maintainable code that scales. I'm always eager to learn new tools, explore emerging technologies, and take on challenges that push my skills forward. Let's build something great together.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontEndSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mt-8">
                <div className="glass rounded-xl p-8 mt-8 border-white/10 border hover:-translate-y-1 transition-all col-lg-6">
                                About me section is under construction. Please check back later for updates.
                </div>
                <div className="glass rounded-xl p-8 mt-8 border-white/10 border hover:-translate-y-1 transition-all ">
                                About me section is under construction. Please check back later for updates.
                </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mt-8">
                <div className="glass rounded-xl p-8 mt-2 border-white/10 border hover:-translate-y-1 transition-all col-lg-6">
                                About me section is under construction. Please check back later for updates.
                </div>
                <div className="glass rounded-xl p-8 mt-2 border-white/10 border hover:-translate-y-1 transition-all ">
                                About me section is under construction. Please check back later for updates.
                </div>
                </div>
            </div>
        </section>
    )
}
