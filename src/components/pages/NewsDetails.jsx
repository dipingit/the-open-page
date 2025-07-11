import RightNavbar from '../layout-component/RightNavbar';
import Header from '../Header';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            {/* <nav className='w-11/12 mx-auto py-2'>
                <Navbar></Navbar>
            </nav> */}
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
            <section className='col-span-9'>
                <h2 className='font-semibold mb-3'>The Open Page</h2>
                    <div className="card bg-base-100  shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="news"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn" style={{ backgroundColor: '#D72050', color: 'white' }}> <FaArrowLeft></FaArrowLeft>All news in this Category</Link>
                            </div>
                        </div>
                    </div>
            </section>
            <aside className='col-span-3'>
                <RightNavbar></RightNavbar>
            </aside>
            </main>
        </div>
    );
};

export default NewsDetails;