import { IoLogoNpm } from 'react-icons/io';
const Npm = () => {
    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg md:text-xl font-extrabold">
                What is npm in node js?
            </div>
            <div className="collapse-content text-sky-800 font-medium">
                <p><span className="font-bold">In the context of Node.js, npm stands for Node Package Manager. It is a package manager and dependency management tool that comes bundled with Node.js.</span> npm is used to install, manage, and distribute packages (libraries and modules) for Node.js applications. These packages can include various JavaScript libraries, tools, and frameworks that can be easily integrated into your Node.js projects.</p>

                <div className="mt-2">
                    <p>Here are some key functions and features of npm-</p>
                    <IoLogoNpm className="text-5xl" />
                </div>
                <div className="list-disc">
                    <li>Package Installation.</li>
                    <li>Dependency Management.</li>
                    <li>Version Control.</li>
                    <li>Global and Local Installation.</li>
                    <li>Scripts.</li>
                    <li>Publishing Packages.</li>
                    <li>Updating Packages.</li>
                </div>
            </div>
        </div>
    )
}

export default Npm