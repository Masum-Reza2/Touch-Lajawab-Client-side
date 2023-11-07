import vs from '../../assets/images/vs.jpg'
const Difference = () => {
    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg md:text-xl font-extrabold">
                What is the difference between mongodb database vs mySQL database?
            </div>
            <div className="collapse-content text-sky-800 font-medium">
                <div>
                    <img className="md:w-1/3 rounded-lg" src={vs} alt="" />
                </div>
                <strong>
                    MongoDB and MySQL are both database management systems, but they belong to different categories of databases and have distinct characteristics. Here are some key differences between MongoDB and MySQL.
                </strong>
                <div className="space-y-4 mt-5 list-decimal">
                    <div>
                        <p className="underline">1.Database Type</p>
                        <div className="list-disc">
                            <li>MongoDB: MongoDB is a NoSQL database, which means it does not use a traditional tabular relational database structure. Instead, it stores data in a flexible, document-based format using BSON (Binary JSON).</li>
                            <li>MySQL: MySQL is a traditional relational database management system (RDBMS), which organizes data into tables with rows and columns.</li>
                        </div>
                    </div>

                    <div>
                        <p className="underline">2.Data Model</p>
                        <div className="list-disc">
                            <li>MongoDB: MongoDB uses a flexible and schema-less data model. Documents within a collection can have varying structures, allowing for easy adaptation to changing data requirements.</li>
                            <li>MySQL: MySQL enforces a strict schema, where the structure of tables is defined in advance, and data must conform to that schema.</li>
                        </div>
                    </div>

                    <div>
                        <p className="underline">3.Query Language</p>
                        <div className="list-disc">
                            <li>MongoDB: MongoDB uses a query language similar to JavaScript, which allows for complex and dynamic queries. It supports querying by document attributes and can handle unstructured data effectively.</li>
                            <li>MySQL: MySQL uses Structured Query Language (SQL), a standardized language for querying and manipulating relational databases. SQL is well-suited for structured, tabular data.</li>
                        </div>
                    </div>

                    <div>
                        <p className="underline">4.Use Cases</p>
                        <div className="list-disc">
                            <li>MongoDB: MongoDB is well-suited for applications with rapidly changing data requirements, where flexibility and scalability are essential. It is often used in scenarios like content management systems, real-time analytics, and mobile applications.</li>
                            <li>MySQL: MySQL is a reliable choice for applications with structured and well-defined data models, such as e-commerce platforms, financial systems, and traditional web applications.</li>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Difference