import { Link, useRouteError } from 'react-router-dom';
import './errorPage.css'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='mx-auto'>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>
                                    <p>
                                        <i>{error.statusText || error.message}</i>
                                    </p>

                                    <Link to={'/'}>
                                        <button className="link_404 rounded-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]">Go to Home</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ErrorPage